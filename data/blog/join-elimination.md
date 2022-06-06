---
title: Join Elimination
author: 485b667a-2730-4cce-8e2a-471f559e366c
description: If people don’t know how to write SQL and tools don’t either, are
  we doomed to write bad SQL and suffer bad performance? Not quite.
date: 2022-06-06T17:31:20.924Z
metaTitle: Join Elimination
coverImage: /uploads/blog/yb_joinelimination_featureimage2.jpg
cover_alt: Join Elimination
thumbnailImage: /uploads/blog/yb_yb_joinelimination_thumbnails2.jpg
categories:
  - engineering
featured: true
---
**How to Simplify Your Queries with the Yellowbrick Planner**

When I first joined Yellowbrick a bit more than two years ago, I didn’t know much about SQL. Sure, I had been taught the basics about relational algebra and could write small SELECT statements but that was it.

Yet, two things became obvious as I started working more and more with that language, and got exposed to real-life examples:

1. Most people (me included) don’t know how to write efficient queries and rely on automatic tools.
2. Most of those tools don’t know how to write efficient queries either.

If people don’t know how to write SQL and tools don’t either, are we doomed to write bad SQL and suffer bad performance? Not quite.

You can either find some SQL-minded person who “knows” SQL inside out and can rewrite the query for you (they do exist) or you can rely on the query optimizer to do the work for you.

When someone writes SQL, there are a couple of steps in between the text input and getting the actual results. While I won’t go into details here, the process would go something like this:

![](/uploads/blog/elimination.png)

The planning step tries to find the best execution plan for the input statement. Not only does it translate the statement into a sequence of steps to get the correct results, but also it tries to find the most efficient way to get them. The optimizer automatically applies a full set of optimizations, rewriting the original statement into something both equivalent and effective.

 **A Concrete Example**

Let’s look at a concrete example.

Consider this small schema, simplified from the [Sakila database](https://www.jooq.org/sakila):

```sql
CREATE TABLE address (
  address_id INT NOT NULL,
  address VARCHAR(50) NOT NULL,
  CONSTRAINT pk_address PRIMARY KEY (address_id)
);
 
CREATE TABLE customer (
  customer_id INT NOT NULL,
  first_name VARCHAR(45) NOT NULL,
  last_name VARCHAR(45) NOT NULL,
  address_id INT NOT NULL,
  CONSTRAINT pk_customer PRIMARY KEY  (customer_id),
  CONSTRAINT fk_customer_address FOREIGN KEY (address_id) 
    REFERENCES address(address_id)
);
 
CREATE TABLE payment (
  payment_id INT NOT NULL,
  customer_id INT NOT NULL,
  amount INT NOT NULL,
  CONSTRAINT pk_payment PRIMARY KEY (payment_id),
  CONSTRAINT fk_payment_customer FOREIGN KEY (customer_id)
    REFERENCES customer (customer_id),
);
```

Now, if you’re a lazy developer or DBA—and you should be—you might want to create a view so that you can easily access all that data, without having to type lines of SQL all the time:

```sql
CREATE VIEW v_customer AS
SELECT
c.first_name, c.last_name,
a.address, ci.city, co.country
FROM customer c
JOIN address a USING (address_id)
JOIN city ci USING (city_id)
JOIN country co USING (country_id)
```

That’s great. Now you can just use the view all the time. For instance, you could write something like this:

```sql
SELECT first_name, last_name FROM v_customer;
```

Easy? Yes. Efficient? Not at all.

The very simple SELECT statement gets rewritten into:

```sql
SELECT first_name, last_name
FROM (
SELECT
c.first_name, c.last_name,
a.address, ci.city, co.country
FROM customer c
JOIN address a USING (address_id)
JOIN city ci USING (city_id)
JOIN country co USING (country_id)
) v_customer
```

See the issue? Since you only need first_name and last_name, you could have just written:

```sql
SELECT first_name, last_name FROM customer;
```

Given that the results are the same, you might wonder why that matters. But joins are one of the most expensive operations in SQL, consuming a lot of CPU power. Removing them can be a huge performance boost, especially in large data sets with millions of rows.

And that’s where query optimization comes in with what is known as join elimination. As the name indicates, this specific optimization finds any unnecessary joins in a query and removes them.

While you can’t always remove joins, there are a couple of cases where the planner can prove the join is not needed, as long as the correct key constraints are declared on the tables.

**INNER Join Elimination**

The first case where joins may be proven unnecessary applies to INNER joins.

Assuming you want to fetch all customer information and their addresses, you could write, for example:

```sql
SELECT c.* FROM customer c JOIN address a ON c.address_id = a.address_id
```

However, this query is better written as follows:

```sql
SELECT * FROM customer c
```

Because columns are projected only from the CUSTOMER table and there are no filters on the ADDRESS table, that table doesn’t contribute at all and can be removed.

That’s nice, but how can the optimizer know, since it doesn’t have the semantic understanding a human would have, of customers having a single address?

SQL has a feature that lets you tell the planner about such restrictions and links between tables: key constraints.

If we look at the CREATE TABLE statements above, we can see that the ADDRESS table declares address_id as a PRIMARY KEY, while CUSTOMER declares address_id as a FOREIGN KEY, referencing the address_id field of table ADDRESS.

These key constraints guarantee that for every CUSTOMER record, there is exactly one corresponding ADDRESS record.

Thanks to these constraints, the optimizer can prove that the join does not duplicate, nor remove any CUSTOMER rows. The join is not needed and therefore eliminated, making the query much faster.

**A Quick Note on NULL Values**

The above reasoning works because address_id was declared as NOT NULL in table ADDRESS. If that wasn’t the case, the join would remove NULL values and in turn influence the query results. In that case, the correct rewrite to eliminate the join would be:

```sql
SELECT * FROM customer c WHERE c.address_id IS NOT NULL;
```

**Using Implied Equalities**

While join elimination is very powerful, the restrictions are also quite important–not being able to project columns from the PK table, for instance. Luckily, this behavior can be loosened a bit by taking advantage of equality classes.

Take that query:

```sql
SELECT c.first_name, c.last_name, a.address_id\
FROM customer c JOIN address a ON c.address_id = a.address_id
```

Because of the presence of ADDRESS.address_id in the output list, regular join elimination wouldn’t work. But the join is on address_id, meaning CUSTOMER.address_id and ADDRESS.address_id are interchangeable.

Therefore, you can rewrite the query as follows:

```sql
SELECT c.first_name, c.last_name, c.address_id\
FROM customer c
```

While this small trick may seem obvious, it has quite a big impact on the number of queries where join elimination applies. After all, SQL tools and application developers rarely consider this trick when writing their queries (again, writing efficient SQL from scratch is quite an art).

A good example of INNER join elimination can be found in one of the most common database benchmarks: TPC-DS.

Here is a (very) small extract from query 23:

```sql
SELECT c_customer_sk, SUM(ss_quantity*ss_sales_price) ssales
FROM store_sales
,customer
WHERE ss_customer_sk = c_customer_sk
GROUP BY c_customer_sk
```

The planner knows there is a PK/FK relationship between the tables CUSTOMER and STORE_SALES. But c_customer_sk is used in both the output and the GROUP BY clause so regular join elimination can’t work.

And yet, by using equivalence to substitute variables, you can rewrite this query as follows:

```sql
SELECT ss_customer_sk, SUM(ss_quantity*ss_sales_price) ssales
FROM store_sales
,customer
WHERE ss_customer_sk = c_customer_sk
GROUP BY ss_customer_sk
```

In turn, the query can then be simplified as:

```sql
SELECT ss_customer_sk, SUM(ss_quantity*ss_sales_price) ssales
FROM store_sales
GROUP BY ss_customer_sk
```

And that in turn amounts to almost a 10% performance boost on Yellowbrick hardware. Pretty nice, right?

**OUTER Join Elimination**

Now that we can eliminate useless INNER joins, what about other kinds of joins? It turns out that OUTER joins can also be removed under some conditions. Not only that, but those conditions are even less restrictive than they are for INNER joins.

LEFT OUTER joins will join the right-side table to the left-side table, while keeping rows from the left table if there is no match.

What if, instead of an INNER join, the previous query had a LEFT join?

```sql
SELECT c.*
FROM customer c
LEFT JOIN address a 
ON c.address_id = a.address_id
```

This join fetches all the rows from CUSTOMER whether or not that customer has any ADDRESS. As such, the need for an FK relationship is loosened: a UNIQUE constraint on the parent table (i.e., ADDRESS.ADDRESS_ID) is sufficient to prove that for every CUSTOMER there can be at most one address.

When that happens, the LEFT JOIN doesn’t duplicate any CUSTOMER rows. (Unlike INNER JOIN, OUTER JOIN never removes rows.) Therefore, the above query can simply be rewritten as:

```sql
SELECT * FROM customer c
```

Note however that the variable substitution trick can’t be applied here. Because OUTER joins emit <left_value, NULL> in the case of non-matching rows, it would be incorrect to replace one side of the equality with the other.

**OUTER Join Elimination with DISTINCT**

There is one more interesting case where the planner can prove that an OUTER join is not necessary. So far, all the removable joins featured a one-to-one relationship between the joined tables. In other words, one record from the first table was linked to zero or one record from the other table.

However, the most common relationship between tables is the one-to-many relationship: a single record from the first table can be linked to zero or more rows in the other table.

Performing an OUTER join between one-to-many tables will usually produce duplicates. Take this query, looking for all customers and their payments, but only displaying the customer information:

```sql
SELECT first_name, last_name
FROM customer c
LEFT JOIN payment p ON c.customer_id = p.customer_id
```

Because a single customer may be linked to several payments, this query might return duplicates, even if the payment table doesn’t contribute otherwise to the query:

<table><tr><td>FIRST_NAME</td><td> LAST_NAME</td></tr>

<tr><td colspan=2>---------------------------------------------</td></tr>

<tr><td>...</td></tr>

<tr><td>BOB</td><td> DOE</td></tr>

<tr><td>BOB </td><td>DOE</td></tr>

<tr><td>BOB </td><td>DOE</td></tr>

<tr><td>ALICE </td><td>DUPONT</td></tr>

<tr><td>ALICE </td><td>DUPONT</td></tr>

<tr><td>...</td></tr> 

</table>

<p></p>
The duplicates prevent us from removing the join. But what if the query was actually:

```sql
SELECT DISTINCT first_name, last_name
FROM customer c
LEFT JOIN payment p ON c.customer_id = p.customer_id
```

The DISTINCT keyword will remove the duplicates from the join results. When that happens, we can perform join elimination and rewrite the query as:

```sql
SELECT DISTINCT first_name, last_name
FROM customer
```

**Who Can Do It?**

What I have discussed here is all very well but it’s only theory. The real question for a customer is: can my favorite database do join elimination? As is often the case, the answer is: it depends.

Despite the big potential boost, not all databases implement such optimizations, or not in all cases. For example, PostgreSQL only knows about OUTER join elimination in the one-to-one case. A more in-depth comparison from 2017 of some well-known databases can be found in [Lukas Ender’s excellent blog post on join elimination](https://blog.jooq.org/join-elimination-an-essential-optimiser-feature-for-advanced-sql-usage/).

Until recently, the Yellowbrick planner—which is based upon PostgreSQL 9.5—couldn’t do much either. But I didn’t write this blog just to say at the end that we couldn’t do it. That would be quite the let-down.

This feature is something I worked on recently after reading the above-mentioned blog entry and hearing about one too many customers calling support, complaining that their query was taking ages when it was such a simple statement. One view can hide dozens of joins…

While Yellowbrick inherited the OUTER one-to-one case from Postgres, all the other cases (OUTER with distinct, INNER, including nullable keys and variable substitution) were added.

Integrating and testing all those planner changes wasn’t too difficult (a couple of weeks at most), but it was a fun project to work on. In any case, this optimization is now done and I’m happy to say it should be part of the next big release of our software!

<!--EndFragment-->
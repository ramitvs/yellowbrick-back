---
title: TPC-DS and the Yellowbrick query optimizer (TPC-DS Q04)
author: 1f5d5e99-3d0b-42ed-97aa-986473217b93
description: When your database can scan TBs per second, who needs materialization?
date: 2021-06-21T17:32:20.283Z
coverImage: /uploads/blog/yb_bloghero4.jpg
thumbnailImage: /uploads/blog/yb_blogthumb_feature4.jpg
categories:
  - yellowbrick-and-tpc-ds
  - product
featured: false
---
Our [previous post about TPC-DS Q03](https://www.yellowbrick.com/blog/tpc-ds-and-the-yellowbrick-query-optimizer-tpc-ds-q03/) was pretty straightforward. Just when you thought it was safe to make a cup of tea and celebrate, the TPC-DS council hits you with this:

```sql
WITH year_total AS (
                   SELECT
                       c_customer_id           customer_id
                       , c_first_name          customer_first_name
                       , c_last_name           customer_last_name
                       , c_preferred_cust_flag customer_preferred_cust_flag
                       , c_birth_country       customer_birth_country
                       , c_login               customer_login
                       , c_email_address       customer_email_address
                       , d_year                dyear
                       , SUM(((ss_ext_list_price - ss_ext_wholesale_cost - ss_ext_discount_amt) + ss_ext_sales_price) /
                             2)                year_total
                       , 's'                   sale_type
                   FROM customer
                   JOIN store_sales ON c_customer_sk = ss_customer_sk
                   JOIN date_dim ON ss_sold_date_sk = d_date_sk

                   GROUP BY c_customer_id, c_first_name, c_last_name, c_preferred_cust_flag, c_birth_country, c_login
                          , c_email_address, d_year
                   UNION ALL
                   SELECT
                       c_customer_id           customer_id
                       , c_first_name          customer_first_name
                       , c_last_name           customer_last_name
                       , c_preferred_cust_flag customer_preferred_cust_flag
                       , c_birth_country       customer_birth_country
                       , c_login               customer_login
                       , c_email_address       customer_email_address
                       , d_year                dyear
                       , SUM((((cs_ext_list_price - cs_ext_wholesale_cost - cs_ext_discount_amt) + cs_ext_sales_price) /
                              2))              year_total
                       , 'c'                   sale_type
                   FROM customer
                   JOIN catalog_sales 
                     ON c_customer_sk = cs_bill_customer_sk
                   JOIN date_dim 
                     ON cs_sold_date_sk = d_date_sk
                   GROUP BY c_customer_id, c_first_name, c_last_name, c_preferred_cust_flag, c_birth_country, c_login
                          , c_email_address, d_year
                   UNION ALL
                   SELECT
                       c_customer_id           customer_id
                       , c_first_name          customer_first_name
                       , c_last_name           customer_last_name
                       , c_preferred_cust_flag customer_preferred_cust_flag
                       , c_birth_country       customer_birth_country
                       , c_login               customer_login
                       , c_email_address       customer_email_address
                       , d_year                dyear
                       , SUM((((ws_ext_list_price - ws_ext_wholesale_cost - ws_ext_discount_amt) + ws_ext_sales_price) /
                              2))              year_total
                       , 'w'                   sale_type
                   FROM customer
                   JOIN web_sales
                     ON c_customer_sk = ws_bill_customer_sk
                   JOIN date_dim 
                     ON ws_sold_date_sk = d_date_sk
                   GROUP BY c_customer_id, c_first_name, c_last_name, c_preferred_cust_flag, c_birth_country, c_login
                          , c_email_address, d_year
                   )
SELECT
    t_s_secyear.customer_id
    , t_s_secyear.customer_first_name
    , t_s_secyear.customer_last_name
    , t_s_secyear.customer_email_address
 FROM year_total t_s_firstyear
 JOIN year_total t_s_secyear
   ON t_s_secyear.customer_id = t_s_firstyear.customer_id
 JOIN year_total t_c_firstyear
   ON t_s_firstyear.customer_id = t_c_firstyear.customer_id
 JOIN year_total t_c_secyear
   ON t_s_firstyear.customer_id = t_c_secyear.customer_id
 JOIN year_total t_w_firstyear
   ON t_s_firstyear.customer_id = t_w_firstyear.customer_id
 JOIN year_total t_w_secyear
   ON t_s_firstyear.customer_id = t_w_secyear.customer_id
WHERE t_s_firstyear.sale_type = 's'
  AND t_c_firstyear.sale_type = 'c'
  AND t_w_firstyear.sale_type = 'w'
  AND t_s_secyear.sale_type = 's'
  AND t_c_secyear.sale_type = 'c'
  AND t_w_secyear.sale_type = 'w'
  AND t_s_firstyear.dyear = 2001
  AND t_s_secyear.dyear = 2001 + 1
  AND t_c_firstyear.dyear = 2001
  AND t_c_secyear.dyear = 2001 + 1
  AND t_w_firstyear.dyear = 2001
  AND t_w_secyear.dyear = 2001 + 1
  AND t_s_firstyear.year_total > 0
  AND t_c_firstyear.year_total > 0
  AND t_w_firstyear.year_total > 0
  AND CASE WHEN t_c_firstyear.year_total > 0 THEN t_c_secyear.year_total / t_c_firstyear.year_total ELSE NULL END >
      CASE WHEN t_s_firstyear.year_total > 0 THEN t_s_secyear.year_total / t_s_firstyear.year_total ELSE NULL END
  AND CASE WHEN t_c_firstyear.year_total > 0 THEN t_c_secyear.year_total / t_c_firstyear.year_total ELSE NULL END >
      CASE WHEN t_w_firstyear.year_total > 0 THEN t_w_secyear.year_total / t_w_firstyear.year_total ELSE NULL END
ORDER BY t_s_secyear.customer_id, t_s_secyear.customer_first_name, t_s_secyear.customer_last_name
       , t_s_secyear.customer_email_address
LIMIT 100
;
```

Where do we start? The key to optimizing this query is to very carefully consider what we can safely say about the Common Table Expression (CTE) that is being used six times here.

The CTE is a `UNION ALL` of the three sales fact tables used in TPC-DS. We first notice that all three components of the union have this general shape:

```sql
SELECT
   c_customer_id         customer_id
 , c_first_name          customer_first_name
 , c_last_name           customer_last_name
 , c_preferred_cust_flag customer_preferred_cust_flag
 , c_birth_country       customer_birth_country
 , c_login               customer_login
 , c_email_address       customer_email_address
 , d_year                dyear
 , SUM(<expr>)           year_total
 , 's'                   sale_type
FROM [catalog | web | store ]_sales
JOIN customer ON c_customer_sk = ss_customer_sk
JOIN date_dim ON ss_sold_date_sk = d_date_sk
GROUP BY c_customer_id
, c_first_name
, c_last_name
, c_preferred_cust_flag
, c_birth_country
, c_login
, c_email_address
, d_year
```

Now we can make some observations:

* `c_customer_id` is practically unique—we can know this because stats tell us that `nd(c_customer_id)`≈`|customer|`≈ `12M`.
* `d_year` is going to have a cardinality proportional to the overlap between `date_dim` and the `sales` tables. We know from previous queries that this is around `nd(d_year) / 40 ≈ 5`.
* Because we are grouping by something that is unique (`c_customer_sk` and `d_year`), the total size of the grouped result is no larger than around 60 million (5 * 12 million).

## Materializing CTE: A very bad idea

Exactly the same expression is used six times in Q04. You might think it would be a good idea to first materialize the CTE expression, grouping all three legs of the `UNION ALL` and saving the result to memory or disk. 

You would be wrong about that idea.

To see why, consider some of the filters on the CTE. For our example, look at the `t_s_firstyear`reference to the CTE:

`t_s_firstyear.sale_type = 's' AND t_s_firstyear.dyear = 2001`

First, we observe that the filter on `sale_type` has an interesting property: it can apply only to one leg of the union. To see this, let’s look at the rough shape of `UNION ALL` in the CTE:

```sql
SELECT
  … <some columns>
  , 's' sale_type
FROM store_sales 
JOIN <some joins>
GROUP BY <some columns>
UNION ALL
SELECT
  … <some columns>
  , 'c' sale_type
FROM catalog_sales 
JOIN <some joins>
GROUP BY <some columns>
UNION ALL
SELECT
  … <some columns>
  , 'w' sale_type
FROM web_sales 
JOIN <some joins>
GROUP BY <some columns>
```

We notice that all of six users of the CTE have a filter on `sale_type`. In other words, they each operate on only a *single* leg of the union. So, every reference to the CTE is actually a reference to a leg of the union, not to the entire union.

Additionally, each leg of the union is filtered by one of these:

* `dyear = 2001`
* `dyear = 2001 + 1`

So, all six users of the CTE are on non-overlapping parts of the space. Materializing the join only to filter it down would be *slower* than simply operating on each of the six non-overlapping sets. At least, it would be if you could find the matching rows quickly, which we can do in Yellowbrick because of its fast scan engine.

## Static elimination and pushdown

Using our previous observations, we can now express the join in this query in a new way:

```sql
FROM (SELECT … 
        FROM store_sales 
        JOIN customer JOIN date_dim 
     WHERE d_year = 2000) AS t_s_firstyear
JOIN (SELECT … 
        FROM store_sales 
        JOIN customer JOIN date_dim 
       WHERE d_year = 2000 + 1) AS t_s_secyear
JOIN (SELECT … 
        FROM catalog_sales 
        JOIN customer JOIN date_dim 
       WHERE d_year = 2000) AS t_c_firstyear
JOIN (SELECT … 
        FROM catalog_sales 
        JOIN customer JOIN date_dim 
       WHERE d_year = 2000 + 1) AS t_c_secyear
JOIN (SELECT … 
        FROM web_sales 
        JOIN customer JOIN date_dim 
       WHERE d_year = 2000) AS t_w_firstyear
JOIN (SELECT … 
        FROM web_sales 
        JOIN customer JOIN date_dim 
       WHERE d_year = 2000 + 1 ) AS t_w_secyear
```

Here we can see what is really going on in this query: It’s a join across six non-overlapping row fractions of the three fact tables.

## JOIN order

With the static elimination, all that remains is to estimate which of the six fractions is larger.

It turns out that not all customers shop online all the time, so the `web_sales` leg is smaller than that of the rest. However, this is quite difficult to estimate, because every customer in `web_sales` has, at some point, shopped online—just not every year, and not in the years we care about. Consider this query:

```sql
SELECT d_year, COUNT(DISTINCT c_customer_id)
FROM web_sales
JOIN customer ON c_customer_sk = ws_bill_customer_sk
JOIN date_dim ON ws_sold_date_sk = d_date_sk
GROUP BY d_year
ORDER BY 1;
```

The table below shows the result (for context: `nd(ws_bill_customer_sk) ≈ 12M`):

![Query results](/uploads/q4-table.png "Query results")

Even with multicolumn stats, it is difficult to know that this particular distribution is what we find in the data. From a planner perspective, it looks as if the join order doesn’t matter much.

However, we *can* say something with a degree of certainty. Consider this filter:

```sql
CASE WHEN t_c_firstyear.year_total > 0 
   THEN t_c_secyear.year_total / t_c_firstyear.year_total     (A)
   ELSE NULL END 
 >
   CASE WHEN t_s_firstyear.year_total > 0 
   THEN t_s_secyear.year_total / t_s_firstyear.year_total     (B)
   ELSE NULL END
AND 
   CASE WHEN t_c_firstyear.year_total > 0 
   THEN t_c_secyear.year_total / t_c_firstyear.year_total     (C)
   ELSE NULL END 
 >
   CASE WHEN t_w_firstyear.year_total > 0 
   THEN t_w_secyear.year_total / t_w_firstyear.year_total     (D)
   ELSE NULL END
```

If this filter does anything at all, which it does, we should try to harvest it. The join order should be:

1. `t_c_firstyear * t_c_secyear`: Calculate (A) and (C) above.
2. `t_s_firstyear * t_s_sec_year`: Calculate (B) above.
3. Join 1 and 2, harvesting the filter in (A) and (B).
4. Join `(t_w_firstyear * t_w_secyear)`: Calculate (D) above.
5. Join 3 with 4, harvesting the (C) and (D) filters.

## Saving memory

When users query data, they often drag needless columns around. Consider the outer query:

```sql
SELECT
    t_s_secyear.customer_id
    , t_s_secyear.customer_first_name
    , t_s_secyear.customer_last_name
    , t_s_secyear.customer_email_address
 FROM … <join of the six CTE>
```

However, the CTE itself projects out:

```sql
SELECT
   c_customer_id           customer_id
   , c_first_name          customer_first_name
   , c_last_name           customer_last_name
   , c_preferred_cust_flag customer_preferred_cust_flag
   , c_birth_country       customer_birth_country
   , c_login               customer_login
   , c_email_address       customer_email_address
   , d_year                dyear
```

Projecting all these columns out is simply not necessary (although we still have to `GROUP BY` them for correctness). The planner can carefully prune everything in five of the CTEs, except:

* `customer_id`
* `dyear`

For the final CTE (`t_s_secyear`), we need only project:

* `customer_id`
* `customer_first_name`
* `customer_last_name`
* `customer_email_address`
* `dyear`

Pruning in this way saves memory in has tables and speeds up the query.
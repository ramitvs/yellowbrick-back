---
title: TPC-DS and the Yellowbrick query optimizer (TPC-DS Q06)
author: 1f5d5e99-3d0b-42ed-97aa-986473217b93
description: Yellowbrick Query Optimizer Team takes on TPC-DS Q06
date: 2021-10-19T22:24:22.066Z
coverImage: /uploads/blog/yb_bloghero8.jpg
thumbnailImage: /uploads/blog/yb_blogthumb_feature8.jpg
categories:
  - product
  - yellowbrick-and-tpc-ds
featured: false
---
Our [previous post](https://www.yellowbrick.com/blog/tpc-ds-and-the-yellowbrick-query-optimizer-tpc-ds-q05/) discussed Q05—the first query to introduce ROLLUP—and explained how the ROLLUP operator in Yellowbrick as of version 5.3 offers an optimal approach. With Q06, we are back to something a bit more vanilla.

```sql
SELECT
    a.ca_state state
    , COUNT(*) cnt
FROM customer_address a
JOIN customer c ON a.ca_address_sk = c.c_current_addr_sk
JOIN store_sales s ON c.c_customer_sk = s.ss_customer_sk
JOIN date_dim d ON s.ss_sold_date_sk = d.d_date_sk
JOIN item i ON s.ss_item_sk = i.i_item_sk
WHERE d.d_month_seq = (
                      SELECT DISTINCT (d_month_seq) 
                        FROM date_dim 
                       WHERE d_year = 2000 AND d_moy = 2
                      )
  AND i.i_current_price > 1.2 * ( SELECT AVG(j.i_current_price) 
                                    FROM item j 
                                   WHERE j.i_category = i.i_category
                                )
GROUP BY a.ca_state
HAVING COUNT(*) >= 10
ORDER BY cnt, state
LIMIT 100
;
```

## (store_sales  * date_dim) estimation

For the join to **`date_dim`**, we can say that this filter *must* pick one and only one **`d_month_seq`**:

```sql
  d.d_month_seq = (
                    SELECT DISTINCT (d_month_seq) 
                      FROM date_dim 
                     WHERE d_year = 2000 AND d_moy = 2
                  )
```

In this case, we are looking for February—which we know for historical reasons is a rather silly month because of its 28/29-day count. From an estimation perspective, the average value of 30 days in a month is good enough though. We can use our standard “overlapping selection” algorithm and get within a few percentages of the real value.

## (store_sales * item) estimation and decorrelation

Consider this part of the query:

```sql
  i.i_current_price > 1.2 * ( 
                              SELECT AVG(j.i_current_price) 
                                FROM item j 
                               WHERE j.i_category = i.i_category
                             )
```

Here, we have a correlated subquery on **`i_category`**. We can rewrite this subquery to a join, like this:

```sql
SELECT i_item_sk
FROM item
JOIN (  SELECT i_category, 1.2 * AVG(i_current_price) AS avg 
          FROM item 
      GROUP BY i_category  ) AS decorr
  ON item.i_category = decorr.i_category
WHERE i_current_price > avg
```

And we can then replace the reference to **`item`** in the main query with this construct.

But, estimating a filter like this is nearly impossible. It requires us to know the average value for every **`i_category`** and its relationship with the **`i_current_price`**. There are various ways we could make an “educated” guess. For example, if we could tell from the stats that **`i_current_price`** is normal distributed, we could assume that it is also normal distributed by **`i_category`** and use the stddev to estimate how many values would be 1.2x off the curve. However, all hope lost if we look at how **`i_current_price`** is actually distributed:

![Some kind of step function](/uploads/step-function.png "Some kind of step function")

Here, we have no choice but to fall back on a horrible assumption: If we don’t know what a filter selectivity is, one value is as good as another. The tradition in relational database land is to use the value 1/3 for such filters. Which is what we do. Why 1/3, you might ask? Well, three seems to pop up in all sorts of contexts in human endeavors—poetry, religion, literature, and so on—so three is as good as any number. 

## (customer *customer_address) bushy join

In Q06, we are presented with the first use of both **`customer`** and **`customer_address`**. These two tables are arranged as a snowflake (or 3NF) out of **`store_sales`** in this way:

![Store_Sales to Customer to Customer_Address Snowflake Table Diagram](/uploads/snowflake-store_sales-table.png "Snowflake Table Diagram")

The crucial insights for the planner are:

* Both **`customer`** and **`customer_address`** are large tables—one of them with an indirect relation to the fact table
* None of them is filtered in this query, so they should be joined after the tables that do have filter
* **`store_sales`** is much larger than both of the above
* There are two viable join strategies to choose from:

  * **`(store_sales ` *`customer) `***
  * **`(customer ` *`customer_address) `*** 
* Of these, it is better to join **`customer`** with **`customer_address`** first before joining to store sales, because this results in fewer join operations involving **`store_sales`**, which is the large table

To make the optimal choice in this case, the planner must have the ability to execute what is called a “bushy join,” which is a join where the join tree isn’t just a straight line of the largest table joined to each of the smaller ones in turn. In a bushy tree, there are branches of joins reaching out from the main path. Fortunately, the Yellowbrick planner will consider such joins and correctly build a hash table on **`(customer * customer_address)`** and probe into this hash with **`store_sales`**.

## JOIN order

In the best estimation we can come up with, the optimal join order appears to be:

* Join **`store_sales`** with **`date_dim`**, harvesting a filter of nearly 100x reduction in rows
* Join this to the decorrelated item query, harvesting a filter we estimate is 3x
* Join **`(customer * customer_address)`** in a bushy join
* Join **`(customer * customer_address)`** to the **`store_sales`** that has now been filtered by **`date_dim`** and **`item`**.
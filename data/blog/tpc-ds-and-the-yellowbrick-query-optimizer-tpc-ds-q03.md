---
title: TPC-DS and the Yellowbrick query optimizer (TPC-DS Q03)
author: 1f5d5e99-3d0b-42ed-97aa-986473217b93
description: Query 3 looks like a straightforward task, but looks can be deceiving
date: 2021-05-20T16:38:33.831Z
coverImage: /uploads/blog/yb_bloghero5.jpg
thumbnailImage: /uploads/blog/yb_blogthumb_feature5.jpg
categories:
  - yellowbrick-and-tpc-ds
  - product
featured: true
---
TPC-DS Q02, which we covered in our [previous post](https://www.yellowbrick.com/blog/tpc-ds-and-the-yellowbrick-query-optimizer-tpc-ds-q02/), presented us a new set of challenges that stressed the Yellowbrick optimizer. In this post, we’ll look at TPC-DS Query 3 (Q03), which seemingly gives us a break from the usual complexity:

```sql
SELECT
    dt.d_year
    , item.i_brand_id         brand_id
    , item.i_brand            brand
    , SUM(ss_ext_sales_price) sum_agg
FROM date_dim dt
INNER JOIN store_sales ON dt.d_date_sk = store_sales.ss_sold_date_sk
INNER JOIN item ON store_sales.ss_item_sk = item.i_item_sk
WHERE item.i_manufact_id = 436
  AND dt.d_moy = 12
GROUP BY dt.d_year, item.i_brand, item.i_brand_id
ORDER BY dt.d_year, sum_agg DESC, brand_id
LIMIT 100
;
```

At first glance, nothing seems difficult about this vanilla star-join query with two simple filters (on `i_manufact_id` and `d_moy`). But nothing is ever that easy with TPC-DS!

Before we dive in, let’s establish some conventions to help us be concise in our reasoning:

* A join between two tables (say: foo and bar) is written `(foo * bar)`.
* The cardinality of a table or column is nominated `|<table>|`and `|<col>|`, respectively. For example, there are 73,049 rows in `date_dim`, so `|date_dim|= 73049`.
* We will use the function `nd(<col>)` to denominate the number of distinct/unique values in an expression. For example: There are 12 distinct months in `date_dim`, so `nd(d_moy) = 12`.
* Subscripting a column name nominates a filter on that table. For example: **d_date_sk<sub>(d_year = 2000)</sub>** is the set of `d_date_sk` after filtering by `d_year = 2000`. We can now express things such as this truth: **nd(d_date_sk<sub>(d_year = 2000)</sub>) = 366**. And we can speak about the ratio of distinct values to total cardinality, as in:

  * **\|d_month<sub>(d_year = 2000)</sub>| = 366**
  * **nd(d_month<sub>(d_year = 2000)</sub>) = 12**

## Estimating d_moy = 12 and the (date_dim * store_sales) join

Consider this join:

```sql
FROM date_dim dt
INNER JOIN store_sales ON dt.d_date_sk = store_sales.ss_sold_date_sk
  AND dt.d_moy = 12
```

Recall that in our [installment about Q01](https://www.yellowbrick.com/blog/tpc-ds-and-the-yellowbrick-query-optimizer-tpc-ds-q01/), we learned that `date_dim` contains a hidden trap: The number of primary key values is higher than number of foreign keys in the fact table (by about 40x). Because of this, selectivity is best estimated by dividing the number of selected rows from `date_dim` by the number of distinct values in the fact table. In Q01, we were joining with `store_returns`. For Q03, we join to `store_sales` instead, but the principle remains the same.

Using the Q01 estimation method and practicing the new notation, we get

**\|store_sales  date_dim| = | |d_date_sk<sub>(d_moy = 12)</sub>| / nd(ss_sold_date_sk)  |store_sales|**

From simple statistics, it is easy to see that

* **\|d_date_sk<sub>(d_moy = 12)</sub>| = 6200**
* `nd(ss_sold_date_sk) = 1800`

Thus:

`|store_sales  date_dim| ≈ 6200 / 1800 ≈ 3.4  |store_sales|`

Obviously, this estimate is completely off. It would indicate that the join increases the number or rows. The issue here is that we selected more rows from `date_dim` than we have distinct rows in `ss_store_sales_sk` on the matching join key.

So, we must refine our reasoning from Q01 as follows: If the number of selected distinct values from `d_date_sk` is higher than the number of distinct values of `ss_sold_date_sk`, then it must be the case that the filter is operating on the non-overlapping set of keys that join the two tables. Hence, we should assume that the join yields a filter selectivity that is more in line with the selectivity of `date_dim`.

Using this line of reasoning, we instead estimate

**\|store_sales  date_dim| = |d_date_sk<sub>(d_moy = 12)</sub>| / nd(d_date_sk)  |store_sales|**

This turns out to be very close to the real value.

## JOIN order

Using the extended algorithm for `date_dim` estimation, we can now establish the correct join order:

* Join `store_sales` to `item`, harvesting the filter on `i_manufact_id = 436`
* Then, join to `date_dim`, taking the filter on `d_moy = 12`
* Finally, aggregate the results.

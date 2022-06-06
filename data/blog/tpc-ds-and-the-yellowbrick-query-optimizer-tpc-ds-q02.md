---
title: TPC-DS and the Yellowbrick query optimizer (TPC-DS Q02)
author: 1f5d5e99-3d0b-42ed-97aa-986473217b93
description: Tackling Query 2 (Q02), including the subtle tricks required to
  handle the fact tables in TPC-DS
date: 2021-05-06T20:33:59.619Z
coverImage: /uploads/blog/yb_bloghero6.jpg
thumbnailImage: /uploads/blog/yb_blogthumb_feature6.jpg
categories:
  - yellowbrick-and-tpc-ds
  - product
featured: false
---
In our [previous post](/blog/tpc-ds-and-the-yellowbrick-query-optimizer-tpc-ds-q01/) about using [TPC-DS queries](http://www.tpc.org/tpcds/) to illustrate how the Yellowbrick query optimizer works, we introduced TPC-DS Query 1 (Q01). This post tackles Query 2 (Q02), focusing on the subtle tricks required to handle the fact tables in TPC-DS.

TPC-DS splits its sales information into three different fact tables, an approach typical in the real/non-benchmark world, too. In TPC-DS, these tables are

* `web_sales`
* `catalog_sales`—twice the size of `web_sales`
* `store_sales`—twice the size of `catalog_sales` (obviously, the schema was designed pre COVID-19)

Many queries in TPC-DS will `UNION` these tables together in various ways. Q02 is the first example:

```sql
WITH wscs   AS (
               SELECT sold_date_sk, sales_price
               FROM (
                    SELECT ws_sold_date_sk sold_date_sk
                         , ws_ext_sales_price sales_price
                    FROM web_sales
                    UNION ALL
                    SELECT cs_sold_date_sk sold_date_sk
                         , cs_ext_sales_price sales_price
                    FROM catalog_sales
                    ) AS x
               )
   , wswscs AS (
               SELECT
                   d_week_seq
                   , SUM(CASE WHEN (d_day_name = 'Sunday') THEN sales_price ELSE NULL END)    sun_sales
                   , SUM(CASE WHEN (d_day_name = 'Monday') THEN sales_price ELSE NULL END)    mon_sales
                   , SUM(CASE WHEN (d_day_name = 'Tuesday') THEN sales_price ELSE NULL END)   tue_sales
                   , SUM(CASE WHEN (d_day_name = 'Wednesday') THEN sales_price ELSE NULL END) wed_sales
                   , SUM(CASE WHEN (d_day_name = 'Thursday') THEN sales_price ELSE NULL END)  thu_sales
                   , SUM(CASE WHEN (d_day_name = 'Friday') THEN sales_price ELSE NULL END)    fri_sales
                   , SUM(CASE WHEN (d_day_name = 'Saturday') THEN sales_price ELSE NULL END)  sat_sales
               FROM wscs
               INNER JOIN date_dim ON d_date_sk = sold_date_sk
               GROUP BY d_week_seq
               )
SELECT
    d_week_seq1
    , ROUND(sun_sales1 / sun_sales2, 2)
    , ROUND(mon_sales1 / mon_sales2, 2)
    , ROUND(tue_sales1 / tue_sales2, 2)
    , ROUND(wed_sales1 / wed_sales2, 2)
    , ROUND(thu_sales1 / thu_sales2, 2)
    , ROUND(fri_sales1 / fri_sales2, 2)
    , ROUND(sat_sales1 / sat_sales2, 2)
FROM (
     SELECT
         wswscs.d_week_seq d_week_seq1
         , sun_sales       sun_sales1
         , mon_sales       mon_sales1
         , tue_sales       tue_sales1
         , wed_sales       wed_sales1
         , thu_sales       thu_sales1
         , fri_sales       fri_sales1
         , sat_sales       sat_sales1
     FROM wswscs
     INNER JOIN date_dim ON date_dim.d_week_seq = wswscs.d_week_seq
     WHERE d_year = 2001
     ) y
   , (
     SELECT
         wswscs.d_week_seq d_week_seq2
         , sun_sales       sun_sales2
         , mon_sales       mon_sales2
         , tue_sales       tue_sales2
         , wed_sales       wed_sales2
         , thu_sales       thu_sales2
         , fri_sales       fri_sales2
         , sat_sales       sat_sales2
     FROM wswscs
     INNER JOIN date_dim ON date_dim.d_week_seq = wswscs.d_week_seq
     WHERE d_year = 2001 + 1
     ) z
WHERE d_week_seq1 = d_week_seq2 - 53::INT
ORDER BY d_week_seq1
LIMIT 100
;
```

## Estimating UNION ALL

Consider this part of the query:

```sql
WITH wscs AS (
SELECT ws_sold_date_sk sold_date_sk
     , ws_ext_sales_price sales_price
FROM web_sales
UNION ALL
SELECT cs_sold_date_sk sold_date_sk
     , cs_ext_sales_price sales_price
FROM catalog_sales
)
```

Here, we construct a Common Table Expression (CTE) we will later join to `date_dim`. But how should we estimate the cardinality of this join?

```sql
FROM wscs
INNER JOIN date_dim ON d_date_sk = sold_date_sk
```

With statistics, it’s easy to estimate the cardinality of the `UNION ALL`. However, to estimate the cardinality of the join itself, we have a few choices.

* We know the number of distinct `sold_date_sk` in each of the union branches. But even with very advanced statistics information, it is difficult to say how many distinct values the `UNION ALL` of them has and what the overlap with the `date_dim` actually is.
* We know there is a foreign key from `ws_sold_date_sk` to `d_date_sk` and another foreign key from `cs_sold_date_sk` to `d_date_sk`. Because of this, we can know that the join to `date_dim` of the `UNION `must yield:

  * The `SUM` of the two inputs
  * `MINUS` the null rows on either `ws_sold_date_sk` and `cs_sold_date_sk`

The second choice obviously provides the superior estimation method. Using primary/foreign key relationships such as this one is a key (pardon the pun) optimization for query planners: It rewards database designers who build good schemas and properly declare keys with a better query plan. This is why proper database design is very important for getting the most out of relational databases.

## Estimating GROUP BY

From an estimation perspective, this join is of particular interest:

```sql
FROM wswscs
INNER JOIN date_dim ON date_dim.d_week_seq = wswscs.d_week_seq
WHERE d_year = 2001
```

Here, we are joining on something that is not a key (`d_week_seq`)—which in general means there is plenty of opportunity to get the estimate wrong.

How well we estimate this join depends a lot on what we can say about the following construct:

```sql
wswscs AS (
  SELECT
    d_week_seq
    , SUM(CASE WHEN … etc..
  FROM wscs
  JOIN date_dim ON d_date_sk = sold_date_sk
  GROUP BY d_week_seq
)
```

Estimating aggregation is generally a difficult problem (because the cardinality of the output depends on the correlation of the input columns). However, for this particular join, we can be very confident that the cardinality is likely to be the same as the cardinality of `d_week_seq`, because we are grouping on only a single column.

The second part of the join requires us to reason about the cardinality of `d_week_seq` within `date_dim`, given the filter of `d_year = 2001`. Here, a two-dimensional histogram of (`d_week_seq, d_year`) would be a great help. Unfortunately, the number of possible histograms you’d have maintain in this manner would grow so fast that you’d often run out of memory/disk to hold them. However, we can say that the number of distinct values can’t possibly exceed the number of rows estimated for `d_year = 2001`—i.e., 365. That gives us a reasonable cap.

## CTE materialization

In Q01, we saw that although the same CTE is used multiple times in a query, it may not be a good idea to materialize the result. However, for Q02, we are looking at some very significant savings. Consider the following construct:

```sql
SELECT
    d_week_seq
    , SUM(CASE WHEN (d_day_name = 'Sunday') THEN sales_price ELSE NULL END)
    , … more columns …\
FROM wscs
INNER JOIN date_dim ON d_date_sk = sold_date_sk
GROUP BY d_week_seq
```

The output size of something grouped by `d_week_seq` is obviously a tiny fraction of the input size of `wcsc` (which you may recall is the `UNION` of `catalog_sales` and `web_sales`). Even with a high-speed column store, there is a bit to be gained by materializing this intermediate result, particularly because expressions such as the following are very expensive to evaluate:

```sql
SUM(CASE WHEN (d_day_name = 'Sunday') THEN sales_price ELSE NULL END)
```

Human beings really like strings; we find it easy to remember and work with them. However, machines pay a significant price when comparing strings. For a CPU, it’s orders of magnitude faster to compare integers than it is to compare strings. There are seven of these string compares for every row in `wcsc`—which becomes billions of compares during query execution. So, it’s worthwhile to save the overhead of calculating these multiple times by materializing the intermediate result.

## JOIN order

In this query, we don’t have a lot of choices with regard to join ordering. The dependencies between the joins force an order. The order is:

* Join `wscs` to `date_dim`—materialize the result of `wswscs`
* Join the two copies of `wswscs` (for 2001 and 2002)
* Join the two above copies with each other on `d_week_seq`

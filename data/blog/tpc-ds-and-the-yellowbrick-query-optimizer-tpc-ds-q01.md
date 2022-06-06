---
title: TPC-DS and the Yellowbrick query optimizer (TPC-DS Q01)
author: 1f5d5e99-3d0b-42ed-97aa-986473217b93
description: How does the Yellowbrick query optimizer handle queries?
  Deconstructing its approach to TPC-DS queries is a great way to find out.
date: 2021-04-29T18:29:45.754Z
coverImage: /uploads/blog/yb_bloghero13.jpg
thumbnailImage: /uploads/blog/yb_blogthumb_feature13.jpg
categories:
  - yellowbrick-and-tpc-ds
  - product
featured: false
---
Query planning and execution is critical for data warehouse performance, and at Yellowbrick, we leave no stone unturned where performance optimization is concerned. In fact, a suboptimal approach to **query optimization** will almost always lead to suboptimal performance, regardless of the resources involved.

As you read in a previous post (["Life of a Yellowbrick Query"](https://www.yellowbrick.com/blog/life-of-a-yellowbrick-query/)), when executing a query, Yellowbrick moves it through several finite states from submission to completion. It’s great if you understand this process so you can develop an effective workload management (WLM) strategy, especially with respect to the creation of WLM rules.

Over the next few months, we’ll be taking a deep dive into queries from the [TPC-DS benchmark profile](http://www.tpc.org/tpcds/) – with contributions from Yellowbrick's entire [**Query Optimization** Team](https://www.yellowbrick.com/company/careers/5831433002/?gh_jid=5831433002) – to demonstrate how Yellowbrick handles them. (To see all the installments in this series, use the ["Yellowbrick and TPC-DS" tag](https://www.yellowbrick.com/blog/category/Yellowbrick%20and%20TPC-DS/).) **Query optimization** is one of the harder problems in computer science and an evergreen topic for research, so we hope these discussions will contribute something worthwhile to that ongoing conversation.

So, let’s begin with **TPC-DS Query 1 (Q01)**, a deceptively simple query that nevertheless provides ample opportunity for the optimizer to flex its muscles.

```sql
EXPLAIN (ANALYZE)
WITH customer_total_return AS (
                              SELECT
                                  sr_customer_sk AS ctr_customer_sk
                                  , sr_store_sk  AS ctr_store_sk
                                  , SUM(SR_FEE)  AS ctr_total_return
                              FROM store_returns
                              INNER JOIN date_dim
                                 ON sr_returned_date_sk = d_date_sk
                              WHERE d_year = 2000
                              GROUP BY sr_customer_sk, sr_store_sk
                              )
SELECT c_customer_id
FROM customer_total_return ctr1
INNER JOIN store ON s_store_sk = ctr1.ctr_store_sk
INNER JOIN customer ON ctr1.ctr_customer_sk = c_customer_sk
WHERE ctr1.ctr_total_return > (
                              SELECT AVG(ctr_total_return) * 1.2
                              FROM customer_total_return ctr2
                              WHERE ctr1.ctr_store_sk = ctr2.ctr_store_sk
                              )
  AND s_state = 'TN'
ORDER BY c_customer_id
LIMIT 100
;
```

## Estimating date_dim

At first glance, this join seems like a simple one to estimate:

```sql
FROM store_returns
 JOIN date_dim
   ON sr_returned_date_sk = d_date_sk
WHERE d_year = 2000
```

Joins to `date_dim` are present in most of the **TPC-DS queries**, so we’d better get this right.

With histograms, it is easy to estimate that the filter `WHERE d_year = 2000` must result in 366 rows. But what about cardinality of the join itself? A technique common in **query optimization** is to reason the following way:

* There are 73,049 rows in `date_dim` (201 years); we picked 366 of those.
* There are 287,999,764 rows in `store_returns`, and although they are not uniformly distributed, sampling 366 of those via the foreign key `sr_returned_date_sk` is likely to result in something reasonably uniform.
* The fraction of rows we take from `date_dim` is the same fraction of rows we take from `store_returns`.
  Hence, we should expect 366 / 73,049 * 287,999,764 rows to come out of the join (approximately 1.4 million rows).

Unfortunately, we would be very wrong to reason in this manner. The actual value is 55 million, so our estimate is off by >40x. Is there something skewed about the data? Why doesn’t this method work?

Well, a cleverly designed trap has been set by the TPC-DS council, testing our ability to properly reason about a join such as this one. We can uncover the trap by running this query:

```sql
SELECT COUNT(DISTINCT sr_returned_date_sk)
FROM store_returns
```

We get the result 2,003. Of the 73,049 possible dates in `date_dim`, only 2,003 (~5.5 years) of data is actually present in the join key `sr_returned_date_sk` in `store_returns`. With HyperLogLog statistics (which we use in Yellowbrick), it is easy to estimate that the distinct number of values in `store_returns` is actually 2,003—so the planner has all the information needed.

Our revised reasoning becomes:

* We are sampling 366 distinct values from `date_dim`.
* There is a primary key/foreign key relationship between `date_dim` and `store_returns`.
* The values we sample from `date_dim` will probably be the ones that are actually in `store_returns`. (That is, we are looking for data that is there, not for data that isn’t—because that’s what humans do.)
* The 366 sample is therefore a uniform sample of the 2,003 values in `store_returns`.
  Hence, we should expect 366 / 2,003 * 287,999,764 rows to come out of the join (approximately 52 million rows).

This leads to a much better estimate that gets us to 52 million as compared to the actual of 55 million. Not bad!

We can refine the estimate further by observing that the NULL rows in `store_returns` can’t match (because NULL doesn’t match anything in an `INNER JOIN`). But that is a minor optimization for this case.

## Decorrelating the subquery

Often, humans will prefer to express queries in a manner that is not optimal for execution. In Q01, we have one such example:

```sql
WHERE ctr1.ctr_total_return >
                    (
                      SELECT AVG(ctr_total_return) * 1.2
                        FROM customer_total_return ctr2
                       WHERE ctr1.ctr_store_sk = ctr2.ctr_store_sk
                     )
```

Notice that the subquery extracting the `AVG` value is being correlated with the outer query via this expression:

```sql
`WHERE ctr1.ctr_store_sk = ctr2.ctr_store_sk`
```

So, what is really going on here? The user is asking us to evaluate:

* For every `ctr_store_sk in ctr1`…
* Find the `AVG(ctr_total_return) (over ctr_customer_sk in ctr2)` of the matching `ctr_store_sk`
* And evaluate the `ctr_total_return` against that…

Can you see the rewrite? The SQL language is designed to do exactly this kind of thing—it’s called a join! What we want to emit is this:

```sql
FROM ctr1.ctr_total_return
JOIN
    (SELECT ctr_store_sk
        , AVG(ctr_total_return) * 1.2 as avg_customer
    FROM customer_total_return ctr2
    GROUP BY ctr_store_sk) AS ctr2
ON tr1.ctr_store_sk = ctr2.ctr_store_sk
AND ctr1.ctr_total_return > ctr2.avg_customer
```

With the subquery nicely rewritten to a join, we can now pursue yet another optimization.

## s_state = ‘TN’ pushdown

Our **query filters** on

```sql
`AND s_state = 'TN'`
```

Consulting the stats, we can see that only 41 rows out of 1,002 rows match. Just as with `date_dim`, the overlap between `store_returns` and `store` isn’t complete, so the actual selectivity is only around 41 / 501. Still a very decent filter.

But once again, the TPC-DS council has set a trap for us. Notice that `store` is not joined directly to `store_returns`—but is joined indirectly via `ctr1`:

```sql
FROM customer_total_return ctr1
INNER JOIN store ON s_store_sk = ctr1.ctr_store_sk
```

And `ctr1` is an aggregate:

```sql
SELECT
    sr_customer_sk AS ctr_customer_sk
    , sr_store_sk  AS ctr_store_sk
    , SUM(SR_FEE)  AS ctr_total_return
FROM store_returns
INNER JOIN date_dim
   ON sr_returned_date_sk = d_date_sk
WHERE d_year = 2000
GROUP BY sr_customer_sk, sr_store_sk
```

However, we can’t possibly be interested in stores that don’t match the `s_state` filter. In other words, we could decide to join to `store` before we group by `sr_customer_sk` and `sr_store_sk`. And the filter of `store` is worth a 10x reduction in rows.

We must now make a choice. Is it better to:

A) Remove 10x of the rows before grouping by moving the join to `store` under the `ctr1` aggregate and harvest the filter on `s_state`?

Or:

B) Reduce the cardinality of the input rows to the join by first grouping on `sr_customer_sk`, `sr_store_sk` and then joining to `store`—that is, execute the query the way it is written?

The right answer to this question depends numerous factors, including:

* How quickly can we plow through all the rows in `store_returns` and group them? (Answer in Yellowbrick: very, very fast, because we use a column store and we need to visit only two columns.)
* Is it generally faster to discard rows by using a join to save aggregation, or better to aggregate and save joining? (Answer in Yellowbrick: that depends on how L3 cache-resident the join is and how effectively bloom filters can be used.)

It turns out that A is the right answer for the Yellowbrick execution engine: It is slightly faster.

## CTE materialization

Note that `ctr1` and `ctr2` both refer to the same Common Table Expression (CTE; the `WITH` part of the query). You might be tempted to first evaluate and store this expression either in memory or on disk:

```sql
SELECT
    sr_customer_sk AS ctr_customer_sk
    , sr_store_sk  AS ctr_store_sk
    , SUM(SR_FEE)  AS ctr_total_return
FROM store_returns
INNER JOIN date_dim ON sr_returned_date_sk = d_date_sk
INNER JOIN store ON s_store_sk = sr_store_sk
WHERE d_year = 2000
  AND s_state = 'TN'
GROUP BY sr_customer_sk, sr_store_sk
```

There are about 2.6 million rows in this expression, and the additional cost of building the memory structure and using it twice (as compared to just running the very small join two times) currently doesn’t make it worthwhile with Yellowbrick's fast scan engine.

## Join order

In this query, join ordering is nearly trivial. We observe that `date_dim` and `store` both provide filters that can be applied to `store_returns`. The `customer` table (which is large) has no useful filters, so we don’t want to join that until the absolute last minute.

Using the right estimation techniques as described above, combined with the pushdown of filters, we can see that the join order should be:

* Join `store_returns` with `store`—harvesting the filter on `s_state` for a 10x reduction.
* Join this result with `date_dim`—harvesting the `d_year` filter for another 5x reduction.
* Do the `GROUP BY (sr_customer_sk, sr_store_sk)`.
* Finally, join to `customer` to find `c_customer_id`, which must be returned.
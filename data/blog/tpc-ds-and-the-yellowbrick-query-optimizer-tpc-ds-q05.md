---
title: TPC-DS and the Yellowbrick query optimizer (TPC-DS Q05)
author: 1f5d5e99-3d0b-42ed-97aa-986473217b93
description: Yellowbrick Query Optimizer Team tackles TPC-DS Q05.
date: 2021-10-11T20:49:29.601Z
coverImage: /uploads/blog/yb_bloghero3.jpg
thumbnailImage: /uploads/blog/yb_blogthumb_feature3.jpg
categories:
  - product
  - yellowbrick-and-tpc-ds
featured: false
---
In our [previous post about TPC-DS Q04](https://www.yellowbrick.com/blog/tpc-ds-and-the-yellowbrick-query-optimizer-tpc-ds-q04/), we discussed options for using the common table expression (CTE). This post covers Query 5 (Q05), the first query to introduce ROLLUP. It is a query that looks at sales from each of the three channels (web, store, and catalog) and compares them with returns from that same channel.

Because sales and returns for each channel are captured in their own fact tables, the query has to perform a lot of UNION operators to bring the data from each channel into approximately the same form.

```sql
with ssr as
 (select s_store_id,
        sum(sales_price) as sales,
        sum(profit) as profit,
        sum(return_amt) as returns,
        sum(net_loss) as profit_loss
 from
  ( select  ss_store_sk as store_sk,
            ss_sold_date_sk  as date_sk,
            ss_ext_sales_price as sales_price,
            ss_net_profit as profit,
            cast(0 as decimal(7,2)) as return_amt,
            cast(0 as decimal(7,2)) as net_loss
    from store_sales
    union all
    select sr_store_sk as store_sk,
           sr_returned_date_sk as date_sk,
           cast(0 as decimal(7,2)) as sales_price,
           cast(0 as decimal(7,2)) as profit,
           sr_return_amt as return_amt,
           sr_net_loss as net_loss
    from store_returns
   ) salesreturns,
     date_dim,
     store
 where date_sk = d_date_sk
       and d_date between cast('2000-08-19' as date) 
                  and (cast('2000-08-19' as date) + interval '14' day)
       and store_sk = s_store_sk
 group by s_store_id)

 , csr as
 (select cp_catalog_page_id,
        sum(sales_price) as sales,
        sum(profit) as profit,
        sum(return_amt) as returns,
        sum(net_loss) as profit_loss
 from
  ( select  cs_catalog_page_sk as page_sk,
            cs_sold_date_sk  as date_sk,
            cs_ext_sales_price as sales_price,
            cs_net_profit as profit,
            cast(0 as decimal(7,2)) as return_amt,
            cast(0 as decimal(7,2)) as net_loss
    from catalog_sales
    union all
    select cr_catalog_page_sk as page_sk,
           cr_returned_date_sk as date_sk,
           cast(0 as decimal(7,2)) as sales_price,
           cast(0 as decimal(7,2)) as profit,
           cr_return_amount as return_amt,
           cr_net_loss as net_loss
    from catalog_returns
   ) salesreturns,
     date_dim,
     catalog_page
 where date_sk = d_date_sk
       and d_date between cast('2000-08-19' as date)
                  and (cast('2000-08-19' as date) + interval '14' day)
       and page_sk = cp_catalog_page_sk
 group by cp_catalog_page_id)

 , wsr as
 (select web_site_id,
        sum(sales_price) as sales,
        sum(profit) as profit,
        sum(return_amt) as returns,
        sum(net_loss) as profit_loss
 from
  ( select  ws_web_site_sk as wsr_web_site_sk,
            ws_sold_date_sk  as date_sk,
            ws_ext_sales_price as sales_price,
            ws_net_profit as profit,
            cast(0 as decimal(7,2)) as return_amt,
            cast(0 as decimal(7,2)) as net_loss
    from web_sales
    union all
    select ws_web_site_sk as wsr_web_site_sk,
           wr_returned_date_sk as date_sk,
           cast(0 as decimal(7,2)) as sales_price,
           cast(0 as decimal(7,2)) as profit,
           wr_return_amt as return_amt,
           wr_net_loss as net_loss
    from web_returns 
    left outer join web_sales 
       on (wr_item_sk = ws_item_sk and wr_order_number = ws_order_number)
   ) salesreturns,
     date_dim,
     web_site
 where date_sk = d_date_sk
       and d_date between cast('2000-08-19' as date)
                  and (cast('2000-08-19' as date) + interval '14' day)
       and wsr_web_site_sk = web_site_sk
 group by web_site_id)
  select  channel
        , id
        , sum(sales) as sales
        , sum(returns) as returns
        , sum(profit) as profit
 from 
 (select 'store channel' as channel
        , 'store' || s_store_id as id
        , sales
        , returns
        , (profit - profit_loss) as profit
 from   ssr
 union all
 select 'catalog channel' as channel
        , 'catalog_page' || cp_catalog_page_id as id
        , sales
        , returns
        , (profit - profit_loss) as profit
 from  csr
 union all
 select 'web channel' as channel
        , 'web_site' || web_site_id as id
        , sales
        , returns
        , (profit - profit_loss) as profit
 from   wsr
 ) x
 group by rollup (channel, id)
 order by channel
         ,id
 limit 100;
```

## Join order

First, let’s consider join ordering. Each of the three channels has very similar subqueries, so we can look at just one and generalize to the others. For example, consider the `store_sales` and `store_returns` subquery:

```sql
with ssr as
 (select s_store_id,
        sum(sales_price) as sales,
        sum(profit) as profit,
        sum(return_amt) as returns,
        sum(net_loss) as profit_loss
 from
  ( select  ss_store_sk as store_sk,
            ss_sold_date_sk  as date_sk,
            ss_ext_sales_price as sales_price,
            ss_net_profit as profit,
            cast(0 as decimal(7,2)) as return_amt,
            cast(0 as decimal(7,2)) as net_loss
    from store_sales
    union all
    select sr_store_sk as store_sk,
           sr_returned_date_sk as date_sk,
           cast(0 as decimal(7,2)) as sales_price,
           cast(0 as decimal(7,2)) as profit,
           sr_return_amt as return_amt,
           sr_net_loss as net_loss
    from store_returns
   ) salesreturns,
     date_dim,
     store
   where date_sk = d_date_sk
     and d_date between cast('2000-08-19' as date) 
                    and (cast('2000-08-19' as date) + interval '14' day)
     and store_sk = s_store_sk
```

When considering join order, we always want to reduce the stream as much a possible with each join. In this case, the order is obvious:

* Join the UNION of **`store_sales`** with **`store_returns`** to **`date_dim`**, harvesting the filter on **`d_date`**
* Join to store, expecting no filtering at all

In the case of the **`wsr`** subquery, there is an additional LEFT JOIN:

```sql
from web_returns 
    left outer join web_sales     from web_returns 
    left outer join web_sales 
       on (wr_item_sk = ws_item_sk and wr_order_number = ws_order_number)

       on (wr_item_sk = ws_item_sk and wr_order_number = ws_order_number
```

Because we know there is a key on the **item/order_number** combination, this join must preserve row count, which means we should join it after **`store`** and **`date_dim`**.

## ROLLUP

The rollup aggregation can be expressed in several ways. The most straightforward is perhaps this: 

1. Calculate the standard grouping of columns without the rollup values
2. Write this into a temporary table
3. Query this table with one or more subqueries combined with a UNION ALL, each subquery rolling up the totals as per the user’s request

This approach turns out to be suboptimal. First, it passes over the data several times, resulting in a several scans of the input. Second, Step 2 can require a very significant amount of temporary storage. Finally, this approach cannot reuse previous aggregates to calculate the higher-level rollup values.

The new (as of version 5.3) ROLLUP operator in Yellowbrick uses a different approach. Instead of writing a temporary value, it calculates all rollup values for each input row while that row is still in cache in the GROUP BY node. It does so internally by performing a loop join with a special input expression the query optimizer generates as part of the query. This turns out to be an effective approach to calculating ROLLUP and other forms of GROUPING sets. It is also an example of how the optimizer can often rewrite a user query into something that can be expressed in the execution engine by using only existing operators instead of introducing new engine logic. In this case, the optimizer can reuse the existing GROUP BY and LOOP JOIN operators to perform ROLLUP (and all the other variants of GROUPING set).

[Click here](https://www.yellowbrick.com/blog/tpc-ds-and-the-yellowbrick-query-optimizer-tpc-ds-q06/) to read the next blog in this series where we examine TPC-DS Q06.
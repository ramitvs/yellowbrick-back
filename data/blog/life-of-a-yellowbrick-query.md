---
title: Life of a Yellowbrick query
author: 1f5d5e99-3d0b-42ed-97aa-986473217b93
description: An overview of workload management in Yellowbrick Data Warehouse
date: 2021-03-08T22:36:07.939Z
metaTitle: Life of a Yellowbrick query - Workload Management & Query Execution
coverImage: /uploads/blog/yb_bloghero20.jpg
cover_alt: what is workload management
thumbnailImage: /uploads/blog/yb_blogthumb_feature20.jpg
categories:
  - product
featured: false
---
In Yellowbrick Data Warehouse, rich [workload management](https://www.yellowbrick.com/docs/5.1.0/workload/workload_management_intro.html) (WLM) functionality is a critical for enabling reliable, near-real time performance at scale. Whether your company is an enterprise with a business-critical data warehouse or a SaaS provider with a product that depends on reliable large-scale data processing, ensuring near-real time response across hundreds or even thousands of concurrent queries is non-negotiable for a good user experience. 

In this post, we’ll provide an overview of what Yellowbrick WLM is, what it’s used for, how it works, and how understanding **query execution** can help inform a good WLM strategy.

## What is workload management?

In **Yellowbrick Data Warehouse**, resources can be shared in various ways for optimizing WLM. The main resources that can be allocated to database queries and other operations are CPU, memory, and temporary spill space. For example, on a system with a high degree of concurrency, you can allocate more CPU to specific queries by increasing their priority. For complex queries that require more memory or spill space, you can request more of these resources at different points during execution. Long-running queries can be queued behind very fast queries to avoid starving short-running queries of adequate resources.

A workload is a set of queries or other database requests that is to some extent a known quantity. For example, if a group of users run ad hoc queries against the same set of tables every day, that set of queries, though somewhat arbitrary, may be thought of as a known and expected workload. A resource-intensive report that is run by one user at the same time every morning may also be anticipated as a separate (and probably high-priority) workload. A third example is database administration work, such as bulk loads and backups, which may occur during a maintenance window when end users have minimal access to the system.

Workloads may be defined across many different dimensions: in terms of when they are run, the application or user that runs them, the type of work, their expected duration, whether they are resource-intensive, and so on. These variables are typical for MPP database systems, which are rarely used for one type of query or by one type of user. 

Some familiar use cases that workload management can address include:

* Runaway queries: identify and stop long-running queries that, for example, select all of the rows from a very large table (whether issued naively, by mistake, or at a "bad time"
* Short-query bias: give priority to queries that run very fast (sub-second speed) and prevent them from being queued behind longer-running queries for which an instant response is neither expected nor required
* Ad hoc queries: place "browsing" or "discovery" queries at a lower priority in the queue than more critical queries that are needed to run the business
* Time-sensitive queries: apply different rules at different times of the day or week. For example, weekly business roll-ups have the highest priority until they are done. All other queries have lower priority.
* Admin queries: allocate resources to run superuser queries immediately, especially internally generated queries that maintain the database (for example, operations that flush and analyze new table rows).
* Loads and updates: write queries that do batch loads, deletes, and updates must not starve read queries.
* Logging, auditing, and reporting: log user-defined messages and tag queries as they are executed; learn about system usage in order to adjust future workload management behavior; create audit trails for separate applications and user groups.

To optimize resource allocation based on workloads, operators create WLM objects called [rules](https://www.yellowbrick.com/docs/5.1.0/workload/wlm_rules.html), [resource pools](https://www.yellowbrick.com/docs/5.1.0/workload/wlm_resource_pools.html), and [profiles](https://www.yellowbrick.com/docs/5.1.0/workload/wlm_profiles.html). These objects define a flexible set of heuristics to translate typical WLM use cases into an optimal strategy for resource allocation and scheduling. You can set up WLM objects either in the [Yellowbrick console](https://www.yellowbrick.com/docs/5.1.0/workload/wlm_example_smc.html) or by using [SQL commands](https://www.yellowbrick.com/docs/5.1.0/workload/wlm_example_sql.html).

## Query execution

An important facet of making decisions about system resource allocation is understanding [query execution](https://www.yellowbrick.com/docs/4.1/administration/allocating_memory.html). **[Yellowbrick queries](https://www.yellowbrick.com/docs/5.2/workload/wlm_query_lifecycle.html)** move through several finite states from submission to completion. A basic understanding of this process will help you develop an effective WLM strategy, especially with respect to the creation of WLM rules. 

As a query passes through each state in its life cycle, runtime statistics are captured and logged. These statistics provide a measure of the time spent in each phase of query execution, giving administrators a means of monitoring and analyzing query performance. Wait times and actual processing times are measured at each stage.

The following diagram shows the life cycle of a query. Each query passes through [several states](https://www.yellowbrick.com/docs/5.0.0/workload/wlm_query_lifecycle.html) on the manager node, while it is being prepared for execution, then it starts running (executing) on the worker nodes.

![query execution](/uploads/query-execution.png "query execution")

The diagram also identifies when queries can be cancelled or restarted. Once submitted, a query runs to completion, is cancelled, or fails with an error (DONE, CANCEL, and ERROR states). If a query is restarted or returns an error, it may re-enter the cycle in the ASSEMBLE state, but ultimately, all queries finish in one of the three completion states. (If a query is cancelled, it cannot be restarted.)

## Next steps

As you can see, WLM is an important reason why Yellowbrick Data Warehouse is as fast and reliable as it is. To learn more and see a demo of WLM in action, [watch this on-demand webinar](https://www.yellowbrick.com/go/advanced-workload-management-webinar/).
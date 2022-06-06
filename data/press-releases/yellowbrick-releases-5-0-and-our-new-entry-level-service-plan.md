---
title: Yellowbrick releases 5.0 and our new entry-level service plan
author: Nick Cox
description: Release 5.0 offers enhanced workload management capabilities to
  deliver even better performance and reliability. Plus, we have introduced a
  new service plan that makes it easier to get started with Yellowbrick.
date: 2020-11-14T00:45:59.284Z
coverImage: /uploads/Yellowbrick-BlogImage7.jpg
categories:
  - Company
  - Product
featured: false
---
A little over a year ago, we launched Workload Management in Yellowbrick. WLM is the flow controller for Yellowbrick, coordinating and managing resources for queries based on need and rules written by users. Since its initial introduction, Workload Management has helped customers navigate, explore, and manage their query lifecycle in ways that have a measurable impact on query latency, concurrency, and reliability.

With release 5.0, we’re significantly enhancing Workload Management capabilities to deliver even better performance and reliability. Users now have full visibility into, and measurement of, all resources and timings per query. Yellowbrick clusters rely on the updated WLM to deliver self-healing and **automatic query** restarts making the benefits of 5.0 immediate, even without a rule being written. Let’s look at a couple of examples:

* **Self-healing cluster**

  Let’s say a cluster experienced a hardware failure. Through WLM, the cluster is able to recover and restart all impacted queries without the user ever being aware of any issue. In this example a user doesn’t even have to write a single rule, but for those who wish, WLM provides sub-second control over query flow and execution, including cancellation and restarting with scriptable rules.
* **Penalty Boxing**

  In this example you have several groups executing short, [interactive queries](https://www.yellowbrick.com/resources/briefs/yellowbrick-data-lake-augmentation/). This is your core business; they’re important queries and you don’t want them to be interrupted. Along comes a data scientist looking to run an expansive and very long running query across huge numbers of tables. Release 5.0 allows you to define rules on what constitutes a long running query and supports automatic movement and resource adjustment on those queries. For example, you can limit the number of this type of query that can run at any one time and set lower priorities, specific memory, or other system resources limitations. These rules apply directly to the query, not the user. When new ‘evil’ queries appear, they are evaluated and moved appropriately so that your core business is not disrupted.
* **Improved resource mapping**

  There is a very natural relationship between disk quotas and our new Workload Management offering. From 5.0 it is possible to set disk quotas allowing control over how much space an individual database, schema, or table may consume. Any WLM rule that is triggered by a disk quota limit will cause a transaction to be rolled back. This is a powerful tool, especially in a shared environment where each database typically belongs to an organizational unit. Now the DBA has the ability to prevent an individual database from consuming the full space of the cluster.

![long running query](/uploads/advanced-workload-management-release-5.png "long running query")

Release 5 also delivers a suite of new capabilities that solidify our security and usability:

* **Finer-grained security:** Building on the GRANT and REVOKE commands introduced in 4.1, we’ve extended the syntax to all database objects, not just columns. You can now grant access privileges (ACLs) on any database object.
* **Faster query building:** Developers can be more productive and save time building queries with new support for SQL user-defined functions.
* **Faster bulk loading:** In addition to default append (or insert) loads, you can now use our bulk loading tools to delete, update or ‘upsert’ the rows in a table. Upsert combines insert and update into a single operation.

<BaseWistia id="y8miiguuzs" /><br />

## **Introducing our new Standard Service Plan**

In addition to release 5.0, we also have a new service plan that makes it easier to get started with Yellowbrick. For $10,000 per month, [the new Standard plan](https://www.yellowbrick.com/pricing/) extends our portfolio to smaller-scale use cases including new data warehouse initiatives, dev/test environments or departmental data marts, and upgrades from SQL Server and Oracle. With the Standard plan, we are bringing the price/performance and **[hybrid cloud flexibility](https://www.yellowbrick.com/press-releases/yellowbrick-announces-new-features-and-entry-level-service-plan/)** of the Yellowbrick Data Warehouse to every enterprise use case. We’ve also introduced a new 30-day free trial that makes it easy to get started with Yellowbrick.

**Learn more**

You can read all the details about Release 5.0 in our ***[Product Documentation](https://www.yellowbrick.com/docs/5.0.0/home.html)***. Additional details on our new Standard Service Plan and other Yellowbrick configurations are available on our [Pricing page](https://www.yellowbrick.com/pricing/).
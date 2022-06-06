---
title: The What, Why, and How of the Distributed Data Cloud
author: c6785019-caa3-4f23-9d06-870187137e5e
description: Distributed data cloud is an architectural approach that includes a
  service-driven data warehouse, a common management framework & an open
  ecosystem with distributed environments.
date: 2022-05-09T10:53:00.378Z
metaTitle: The What, Why, and How of the Distributed Data Cloud
coverImage: /uploads/blog/eckerson-featured-image.jpg
cover_alt: distributed environments
thumbnailImage: /uploads/blog/eckerson-thumb-image.jpg
categories:
  - cloud
  - guest-blog
featured: true
---
We all know the value of consolidating data and infrastructure. Reducing data copies improves governance, and reducing locations improves infrastructure efficiency. So why do most enterprises have distributed environments with multiple data copies in multiple locations?

The reasons fall into two buckets. First, consolidation can be hard. Data gravity, migration complexity, and sovereignty requirements create data silos. Second, distribution can be valuable. Global enterprises might need regional data centers to ensure high performance and team agility, or redundant clouds to ensure availability. They might find it cheaper to keep some workloads in legacy data centers. Above all, they need to avoid costly lock-in to one cloud.

These reasons make distributed environments both inevitable and desirable. But enterprises still need to simplify how they handle these distributed environments. The more they can standardize how they manage, share, and control distributed data, the better they can meet business requirements.

**The Distributed Data Cloud Emerges**

The need for standardization explains the emergence of the **distributed data cloud**. This blog, the first in a two-part series, defines the [distributed data cloud](https://www.yellowbrick.com/press-releases/yellowbrick-hosts-summit-introduces-first-data-warehouse-for-distributed-clouds/) and how it can work. The second blog in the series will examine actual use cases to assess how the vision of the distributed data cloud compares with reality.

We start with the definition. The distributed data cloud is an architectural approach that includes a **service-driven data warehouse**, a common management framework, and an open ecosystem. These layers span multiple data centers and/or clouds, each of which might contain multiple data stores that enterprises add or remove over time.

* **The service-driven data warehouse** provides modular services—data transformations, queries, etc.—using microservices and containers.
* **A common management framework** provides a standard experience for administrators and users based on shared processes and metadata.
* **An open ecosystem** ensures users can apply external tools to any data, using open formats and application programming interfaces (APIs).

**<p style="text-align:center">Distributed Data Cloud Architecture</p>**

![cloud data architecture](/uploads/blog/distributed-data-cloud-architecture.png "cloud data architecture")

Data warehouse vendors such as [Yellowbrick](https://www.yellowbrick.com/) support the distributed data cloud with capabilities such as these. The [distributed data cloud](https://www.yellowbrick.com/blog/the-emergence-of-the-distributed-data-cloud/) aligns with other popular concepts that embrace the hybrid, heterogeneous nature of **modern data environments**. For example, the data mesh proposes that enterprises should distribute the ownership of data to domain experts within business units. And many cloud platform providers promote their cloud-like services for data that remains on premises. To understand how the distributed data cloud differentiates itself, let’s explore how each layer works.

**The Services-Driven Data Warehouse**

Traditional data warehouses are monolithic systems that ingest, transform, and query data, then deliver outputs to business intelligence teams. The distributed data cloud breaks these myriad tasks into atomic microservices as part of a service-driven data warehouse.

To understand how this works, picture a set of [Legos](https://www.lego.com/en-us). The services-driven data warehouse assembles and reassembles distinct Lego pieces—in this case microservices—to perform sequences of modular tasks for a given dataset in a given location. One microservice reformats data, another inserts new rows in a table, another runs a SQL query, and so on. Each microservice operates as a lightweight, containerized, and reusable module that you can add or remove without upsetting the others.

The services-driven data warehouse offers a flexible, tunable, and scalable alternative to the monolithic data warehouse. Data teams can order from an extensive a la carte menu and select just the right microservices they need for a given project. They can tune performance by isolating, fixing, or swapping out a given microservice. And they can scale their data warehouse in various ways. For example, they can replicate a microservice, provision it to more users, or provision more compute resources underneath.

**Common Management Framework**

**Distributed environments** hurt productivity when administrators and users work with different processes and metadata. The distributed data cloud seeks to avoid this problem by employing a common management framework. This framework standardizes how administrators set up users, configure role-based access controls, or provision storage and compute resources. It also standardizes how users configure microservices for a given location, based on consistent views of metadata.

**Open Ecosystem**

The distributed data cloud seeks to avoid lock-in by providing unfettered access to an open ecosystem of analytics tools. It relies on popular open data formats such as comma separated value (CSV), JavaScript Object Notation (JSON), and [Apache Parquet](https://parquet.apache.org/); and popular APIs such as REST and ODBC. These formats and APIs help ensure microservices remain portable across datasets. They also minimize the coding required to move datasets if necessary, or to support specialized tools—for example, to assist data transformation, analytics, or workflow integration.

This vision suggests that enterprises can indeed standardize how they manage, share, and control data in distributed environments. But they have many banana peels to slip on. Our next blog explores how the vision of the distributed data cloud compares with slippery reality.
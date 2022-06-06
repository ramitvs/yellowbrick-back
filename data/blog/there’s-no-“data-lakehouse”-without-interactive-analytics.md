---
title: There’s no “data lakehouse” without interactive analytics
author: 1f5d5e99-3d0b-42ed-97aa-986473217b93
description: There’s no data lakehouse without interactive analytics and the
  workload management that makes it happen
date: 2021-02-22T18:22:29.649Z
metaTitle: Data Lakehouse with Interactive Analytics | Data Lake Solutions -
  Yellowbrick Data
coverImage: /uploads/blog/yb_bloghero15.jpg
cover_alt: interactive analytics
thumbnailImage: /uploads/blog/yb_blogthumb_feature15.jpg
categories:
  - product
  - use-cases
featured: true
---
It wasn’t long ago when data lakes (sometimes also called data hubs) were considered an emerging, bleeding-edge approach to collecting and managing semi-structured and unstructured data. Today, data lakes are in the mainstream, with 58% adoption per a recent 451 Research survey. 

Why the rapid rise in popularity? Because although data lakes were originally premised on relatively crude data processing with MapReduce, that vision evolved over time as distributed SQL query engines like Apache Hive, Apache Impala, or Presto appeared to help you get analytics out of your data lake via interactive SQL queries. There was even talk (gasp!) of data lakes replacing data warehouses.

It didn’t work out that way. Today, plentiful research confirmed by Yellowbrick customers tells us that data lakes are endlessly frustrating because they only deliver on half their promise: While on-premises HDFS and cloud object stores are great options for low-cost storage, data lake query engines have failed to meet enterprise needs for interactive, ad hoc queries for more than a relatively small number of concurrent users. That’s why we’re seeing new patterns like the **“[data lakehouse](https://www.yellowbrick.com/resources/briefs/yellowbrick-data-lake-augmentation/)”** emerge, with the objective of bringing data warehouse-level query latency and concurrency to data lakes.

Across the industry, though, we don’t all agree on how to bring those attributes to data lakes. At Yellowbrick, we don’t think customers are well served by caching strategies that try to simulate data warehouse performance but that fall down under the pressure of mixed workloads and high concurrency. Instead, we believe the right answer is to augment your data lake with a modern, real-time SQL data warehouse with rich **workload management** capabilities, that makes ingestion from HDFS and cloud object stores agile and easy, that has an efficient storage and access format for analyzing structured data, and that’s battle-tested for superb price/performance at scale on real-time and at-rest data. The answer is not to build on solutions that are known to add more cost and complexity for customers; the industry tried that in the past with Hadoop, and we know how that story ends.

## Breaking the limitations

Sounds like a simple goal, but the reality is that current options for reaching it are as problematic as data lake query engines: Legacy approaches are too inflexible for semi- and unstructured data and expensive to own and scale, while cloud-only options have poor or unpredictable price/performance for large-scale data or concurrency needs (and obviously fail to provide an on-premises option for geo-location or other requirements).

To solve that problem, Yellowbrick has invested years of R&D in an MPP data warehouse designed from the ground up to take advantage of optimized instances for interactive, ad hoc analytics at any scale. [Yellowbrick Data Warehouse](https://www.yellowbrick.com/products/data-warehouse/) is a hybrid row- and column-oriented implementation, offering the scan throughput of column stores along with real-time, row-by-row ingestion of data via Apache Kafka (millions of rows/sec). With this approach, streaming data can be ingested and queried alongside at-rest data immediately, with no partitions, manual indexes, query tuning, or other optimizations needed—it just works!

![Data lakehouse architecture with Yellowbrick](/uploads/screen-shot-2021-02-19-at-10.30.38-am.png "Data lakehouse architecture with Yellowbrick")

Yellowbrick’s advanced **workload management** is also a critical component that prevents resource contention by letting you prioritize queries for specific workload types and/or consumers—for example, you may want to prioritize ad hoc queries from the data science team—while penalty-boxing or even re-starting failed ones. To use a [traffic engineering metaphor](https://www.yellowbrick.com/blog/price-performance-is-the-only-thing-that-matters-in-data-warehousing/), for maximum traffic throughput, it’s not enough that the roadway be wide and clear of obstructions; sometimes, you also have to prevent slower vehicles that tie up traffic from entering the road.

Finally, unlike cloud-only options, Yellowbrick data warehouses can be deployed in data centers/private clouds, as SaaS in all three major public clouds, and both (hybrid).

## Customer results tell the story

Customers have already seen the light about the benefits of Yellowbrick’s architecture and **workload management** capabilities for interactive queries on data lakes. For example, the [ThreatMetrix solution from LexisNexis](https://www.yellowbrick.com/resources/case-studies/lexisnexis/) is an industry-leading SaaS product focusing on digital identity verification with more than 5,000 brands as customers. For that use case, poor customer experience has direct business implications. After replacing Impala with Yellowbrick to augment its data lake, ThreatMetrix now ingests 1TB+ of streaming data into the database daily for immediate analysis, user queries that ran in minutes now complete in seconds or less (with ¼ of the infrastructure), and downtime is no longer a concern.

Similarly, [one of the biggest mobile operators in Latin America](https://www.yellowbrick.com/resources/case-studies/top-telecom-company/) faced a data crisis when its legacy data lake augmentation platform was failing in the face of 800% growth in data volume. With Yellowbrick, operational reports are now up-to-the-second accurate, revenue reconciliation is done in real time instead of batch (safeguarding millions from SIM card resellers), and queries run 20x faster on 8x more data.

As you can see, there’s no **data lakehouse** without **[interactive analytics](https://www.yellowbrick.com/resources/briefs/real-time-analytics-for-finserv/)** and the **workload management** that makes it happen. Request a free [Test Drive](https://www.yellowbrick.com/test-drive/) to get hands-on for learning more!
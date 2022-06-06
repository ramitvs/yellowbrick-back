---
title: How to avoid drowning in your data lake
author: 1f5d5e99-3d0b-42ed-97aa-986473217b93
description: Avoid drowning in your data lake by augmenting the cheap storage
  with a full modern, purpose-built analytics environment.
date: 2020-04-24
coverImage: /uploads/blog/yb_bloghero26.jpg
thumbnailImage: /uploads/blog/yb_blogthumb_feature26.jpg
categories:
  - cloud
  - product
featured: false
---
A few years ago, Gartner warned us about some significant risks in data lakes that could eventually lead to “data swamps.” For many companies, that prediction was all too accurate. 
Many of them that have invested millions are still looking for business value, frustrated by the fact that data lakes don’t deliver on the original promise of enabling actionable analytics on huge amounts of data.  

The reality is that data lakes are useful as low-cost storage and for managing a variety of unstructured and semi-structured data, but they struggle as a true real-time analytics environment. Despite repeated attempts by open source and commercial solutions (e.g., Apache Hive, Apache Impala, Greenplum, and so on), most Hadoop- or cloud-based data lakes can’t support thousands of concurrent analytics users, sophisticated ad hoc queries, data-intensive reports, or any of the other demands of a true real-time analytics system.  

Instead, the right answer is to augment the data lake’s cheap storage with a fully modern analytics environment that is purpose-built to support sub-second ANSI SQL queries, even for the most complex workloads and for up to thousands of concurrent users in their favorite BI and data science tools. That environment needs to understand required file formats (Orc, Parquet, JSON, etc.), ingest extremely quickly in batch or in a real-time stream, and make it all query-able instantly. And, it should simplify and streamline data management, and eliminate the need for specialized data engineering skills. 

Finally, the word “modern” implies that you should also have the flexibility to run workloads wherever it makes the most sense: in an on-premises data center, in the cloud, or both. Today, neither traditional data warehouses, nor SQL-on-Hadoop engines, nor cloud-native data warehouses check all those boxes—but Yellowbrick does. 

<img src="/uploads/blog-data-lake-chart.png" class="mx-auto pb-10" />

Read the white paper, “[Unlocking Data Lake Value with Hybrid Cloud Analytics](https://www.yellowbrick.com/go/unlocking-the-value-of-data-lakes/)” that explains the design principles behind Yellowbrick that make it an ideal solution for augmenting (or even replacing) data lakes as described above.
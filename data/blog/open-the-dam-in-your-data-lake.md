---
title: Open The Dam In Your Data Lake
author: 1f5d5e99-3d0b-42ed-97aa-986473217b93
description: Open The Dam In Your Data Lake
date: 2018-10-05
metaTitle: Open The Dam In Your Data Lake - Yellowbrick Data
coverImage: /uploads/blog/yb_bloghero47.jpg
cover_alt: operational data store
thumbnailImage: /uploads/blog/yb_blogthumb_feature47.jpg
categories:
  - use-cases
featured: false
---
For the past decade, the data lake has gone through its ups and downs. Now that the hype has passed, and the data lake does not spell the imminent demise of the database or the data warehouse, people are taking a more somber, practical look.

Data is the first step to driving business value, and increasingly, data practitioners recognize that extracting data from the data lake, to be processed elsewhere, can be a key to success.

In this post, we'll explore three use cases where opening the dam of your data lake, and extracting data to other processing engines, can deliver new insights.

## The Data Lake: Waystation on Ingest

While the initial introduction of data lakes focused on the end-all-be-all for **data storage and processing**, over time it became clear that data lakes are more adept at collecting data than processing it.

Batch analytics and data science within data lakes is certainly possible, but the ability to support mission critical workloads with stringent service level agreements and multiple concurrent users is less so.

By reframing data lakes to a waystation on ingest, we open new patterns to derive business value from the data.

Data lakes actually serve this waystation use case extremely well. Since they are file based, they can capture virtually any type of data format including all types of unstructured data. Data lakes are also optimized for low cost, allowing users to store important, as well as less essential data. And data lakes can be accessed broadly, providing great accessibility albeit at a tradeoff of performance.

With the waystation concept in mind, let's look at three options to extract data from the lake to drive value.

## Move data into an enterprise data warehouse

One of the original goals of a data lake was to collect enough disparate data to enable business analysts to derive new insights. However, putting those insights into production, such as creating operational reports, became challenging on a shared resource like a data lake. Unfettered access by large groups without the ability to easily segment workloads, left data lakes unable to support many mission critical use cases.

However, **[enterprise data warehouse](https://www.yellowbrick.com/press-releases/yellowbrick-and-icedq-partner-to-provide-data-integrity-in-enterprise-data-warehouses/)s** were architected specifically for this purpose. They support SQL, the lingua franca of analytics, allowing all types of existing business intelligence tools to natively query data. Some **enterprise data warehouses** are also optimized to manage workloads across different service level agreements. For example, a set of executive daily reports can be granted priority so that the marketing teams campaign analysis does not interfere.

Most data warehouses support loading functions from a variety of data stores, including data lakes, so this can be built into an ongoing extract, transform, and load (ETL) process.

## Move data into an operational data store

Another option for extracting data from lakes is moving that data into an [operational data store](https://www.yellowbrick.com/solutions/data-warehouse-modernization/). This approach can help add analytical depth to applications.

Consider an example of a social web application and the signup process. Upon signing up, the application may want to show you a variety of people to follow.

Likely the company building the web application has been collecting all of their user information in a **structured database**. But they may also have a data lake used to collect web metrics on user behavior and patterns. This data is likely sent to a data lake.

To derive which suggested users to promote to new signups, the company may run a number of batch processes to segment their user base, and define potential affinity groups. A data science team working on the data lake can take a potential affinity group, extract a subset of users to share during new signups, and then move that data into an operational data store to be used during the signup process.

This type of batch process, extracting results from the data lake and adding them to an operational data store, either a database or data warehouse, can assist in driving application engagement. This helps provide a better experience for the user, and drive service growth for the application company.

## Move data into a message queue for real-time consumption

Message queues like Amazon Kinesis and Apache Kafka have become popular mechanisms to share current data easily within as well as outside organizations.

Many people think of a message queue feeding only into a data lake. But message queues have many purposes and can be used to replicate data, merge different data sources, or provide a reliable, trackable mechanism for up-to-date data movement and sharing.

In addition to the more popular Kafka to HDFS sink connector, connectors to Kafka with HDFS also exist and provide yet another option to consider in driving value from your data lake.

### Bring the lake to life by opening the dam

Data lakes have proven to be valuable places to collect and store data. But expectations for processing needs vary given prior experience with database and data warehouses.

By reframing the data lake to a waystation on ingest, and maybe even a permanent one, architects can take a fresh approach to deriving value beyond the data lake itself.
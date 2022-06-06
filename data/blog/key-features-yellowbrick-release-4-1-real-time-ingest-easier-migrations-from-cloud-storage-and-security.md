---
title: "Key new features in Yellowbrick Release 4.1: Focus on real-time ingest,
  easier migrations from cloud storage, and security"
author: 1f5d5e99-3d0b-42ed-97aa-986473217b93
description: New features in Yellowbrick Release 4.1
date: 2020-08-10
coverImage: /uploads/blog/yb_bloghero23.jpg
cover_alt: database replication
thumbnailImage: /uploads/blog/yb_blogthumb_feature23.jpg
categories:
  - product
featured: false
---
Recently, we announced [business continuity enhancements](/press-releases/yellowbrick-makes-cloud-disaster-recovery-service-new-features-generally-available/) &mdash; richer backup/restore and [database replication](https://www.yellowbrick.com/products/data-warehouse/) functionality and the GA of Cloud DR, a low-cost disaster recovery service for Yellowbrick data warehouses &mdash; that formed the backbone of Yellowbrick Release 4.0. In Release 4.1, which is now available, we’re following up with optimizations for improved real-time ingestion, better support for doing bulk loads into Yellowbrick from cloud object stores, and enhanced security, including the ability to encrypt database columns and new fine-grained access control functionality.  

Together, these new features are a continuation of our commitments to helping customers get richer, more accurate insights from their data far more quickly and reliably than they can with other approaches, with enterprise-class security baked in.  

* **Improved ingest rate for real-time data feeds**
  Yellowbrick now supports even higher real-time ingest rates of up to millions of rows per second. Unlike competing cloud-only data warehouses that require micro-batching or bulk loads, Yellowbrick can ingest live, **streaming data in small transactions** from data sources such as Apache Kafka or Oracle Golden Gate. The latest transactions can be analyzed alongside historical data instantly, without the multi-minute lags of competing databases.  
* **Deeper support for cloud data migrations**
  Yellowbrick is able to ingest data at line rates, up to 10TB/hr or more. The database now supports bulk loads from Azure Blob containers and object stores from other S3-compatible providers, and has enhanced support for loading from AWS S3 buckets &mdash; which makes it easier to migrate data into Yellowbrick from **cloud-based repositories**, for example.  
* **Column encryption and fine-grained access control**
  Yellowbrick offers column-level encryption support, particularly relevant for the healthcare industry and other customers managing PII. Starting in Release 4.1, encrypted columns can be declared in the schema, then automatically loaded, stored, and queried in a protected format. Only authorized users may decrypt the data in these columns. Several encryption options are provided, including deterministic and randomized OFB (Output Feedback) **block-cipher algorithms**.  

  Furthermore, a range of new GRANT and REVOKE commands are now available at different levels to provide mechanisms for creating a fine-grained security model. You can grant access privileges (ACLs) on various database objects (or on the system) to one or more users or roles. Objects can be individually secured or in the context of a schema, a database or the entire system can be secured. As time goes on, we’ll continue to invest in richer support for fine-grained access control.

**More on the way**\
You can see the complete details about Release 4.1 in the Product Documentation [here](https://www.yellowbrick.com/docs/4.1.1/home.html). Stay tuned as we continue to invest in new features that widen Yellowbrick’s performance lead, improve visibility into internals, bring more cloud-native features to amplify the benefits of hybrid architecture, and more!
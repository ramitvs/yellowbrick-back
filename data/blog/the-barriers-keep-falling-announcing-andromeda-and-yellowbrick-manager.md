---
title: "The barriers keep falling: Announcing Andromeda and Yellowbrick Manager"
author: ecaacb3e-2059-45a9-a7e4-cfe94a878c7d
description: These new product releases continue to push the price/performance
  envelope for customers
date: 2021-04-06T23:25:34.866Z
coverImage: /uploads/blog/yb_bloghero19.jpg
thumbnailImage: /uploads/blog/yb_blogthumb_feature19.jpg
categories:
  - product
  - cloud
featured: true
---
At Yellowbrick, we’ve always reflected the latest advances in software and hardware protocols in our data warehouse architecture (Kubernetes being the latest example), which is designed to bring blazing-fast time-to-insight to every IT environment. We combine those advances with smart thinking about storage formats, and add on top a modern, industry-standard database interface (PostgreSQL) that’s familiar to users for ecosystem compatibility. The result is a modern, easy-to-provision, and easy-to-use data warehouse that blows the doors off rivals in price/performance economics, and that can be deployed anywhere across hybrid—and now distributed—clouds.

In November 2020, we enhanced [Yellowbrick’s Workload Management capabilities](https://www.yellowbrick.com/press-releases/yellowbrick-releases-5-0-and-our-new-entry-level-service-plan/) to deliver even better performance and reliability. Today, we’re excited to announce more milestones that continue to push the envelope: our next-generation Andromeda optimized instance for private clouds, the new Yellowbrick Manager web UI, and new agile data movement features that enrich our existing integration with data lakes.

## Andromeda

Performance breakthroughs in intensive data processing have always come from systems innovation, not just software. Yellowbrick has invested years of R&D in an optimized instance for private clouds that is battle-hardened to bring [best-in-class price/performance economics](https://www.yellowbrick.com/blog/price-performance-is-the-only-thing-that-matters-in-data-warehousing/) for use cases with the highest requirements, far beyond what legacy platforms or virtual machines running on generic instances can achieve. Unsurprisingly, optimized instances have now become all the rage among **[public cloud providers](https://www.yellowbrick.com/blog/price-performance-is-the-only-thing-that-matters-in-data-warehousing/)** as platforms for their native data warehouse products, although without the added advantage of hybrid cloud options.

Andromeda, our next-generation architecture, raises the bar even higher for price/performance economics in **private cloud environments**. Yellowbrick queries now run 3x faster on Andromeda than on our first generation, widening the price/performance lead considerably over legacy and cloud-only options. Key reasons for these gains include the addition of dual proprietary “Kalidah” scan accelerators that improve scan rates to multiple TBs/sec, a 3x increase in network performance, and new AMD 64-core CPUs. 

The Kalidah processor is a new accelerator developed by Yellowbrick specifically for Andromeda. Currently implemented in FPGA, it accelerates bandwidth-oriented processing tasks used during table scans, including data validation, decompression, filtering, and compaction.

As an illustration of these performance gains, take a look at these histograms based on TPC-DS query results:

![agile data movement](/uploads/blog1.png "agile data movement")

Enabled by the raw performance and industry-leading density of Andromeda, we’re also introducing a new, entry-level 3-node configuration that’s roughly equivalent to an 8-node system built on the previous architecture. Larger configurations will be released later this year.

On the topic of performance, we’ve also redesigned the Yellowbrick query planner to make more intelligent and data-driven choices about query execution, leading to an average performance gain of 30% wherever the Yellowbrick database runs. (Read more about query execution in Yellowbrick in this [recent blog post](https://www.yellowbrick.com/blog/life-of-a-yellowbrick-query/).)

## Yellowbrick Manager

Whether your use case lives in a single data center, spans a [distributed cloud](https://www.yellowbrick.com/blog/data-warehousing-for-distributed-clouds/), or something in between, a simple yet powerful management plane is a highly desired operational asset. Yellowbrick Manager is a new, web-based, federated management console, designed to provide a single unified overview of all your Yellowbrick instances—any type, anywhere. 

![Yellowbrick Manager](/uploads/yellowbrick-manager.png "Yellowbrick Manager")

In addition to providing operational oversight of all your instances, Yellowbrick Manager delivers a powerful browser-based SQL development environment with support for statement auto-completion and result-set viewing and visualization. So, although you may certainly want to use your favorite tools for the heavy lifting, Yellowbrick Manager should serve your purposes more than well enough for simple data exploration tasks.

## Agile data movement for enhanced data lake integration

[Data lake augmentation](https://www.yellowbrick.com/blog/there-s-no-data-lakehouse-without-interactive-analytics/) is a common use case among Yellowbrick customers that have lost patience with the existing options for getting actionable insights out of data lakes in cloud object stores or HDFS. Now, we’re making that use case even easier through native object store connectivity that enables high-performance data loading and querying from files in Amazon S3, Azure **Data Lake Storage** Gen2 (Google Cloud Storage coming soon), and MinIO object stores. With this feature, users can load petabytes of data from object stores into Yellowbrick, either orchestrated through Yellowbrick Manager or via SQL using their preferred tools.  

## Conclusion

At Yellowbrick, we believe that the old limits on price/performance economics and deployment optionality should no longer apply for our customers. Instead, we bring the best data warehouse economics you can get to every IT environment—private cloud, multiple public clouds, and the network edge—whether it’s based on bare metal or Kubernetes stacks. With these announcements, those limits take another jarring hit.
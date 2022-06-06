---
title: Price/performance is the only thing that matters in data warehousing
author: 1f5d5e99-3d0b-42ed-97aa-986473217b93
description: With data-driven decisions now demanding nearly immediate
  time-to-insight, data warehouse performance is critical, with competitive
  benchmarking now a bloodsport among vendors. The little known secret is that
  scalable performance (query latency, concurrency, load/ingest speed) is always
  achievable -- if you can pay for it.
date: 2020-11-23T21:25:56.860Z
metaTitle: Price/Performance Is the Only Thing That Matters in Data Warehousing
  - Yellowbrick Data
coverImage: /uploads/blog/yb_bloghero17.jpg
cover_alt: data warehouse design
thumbnailImage: /uploads/blog/yb_blogthumb_feature17.jpg
categories:
  - product
featured: false
---
With **data-driven decisions** now demanding nearly immediate time-to-insight, **[data warehouse performance](https://www.yellowbrick.com/blog/there-s-no-data-lakehouse-without-interactive-analytics/)** is critical, with competitive benchmarking now a bloodsport among vendors. The little known secret is that scalable performance (query latency, concurrency, load/ingest speed) is always achievable -- if you can pay for it.

The legacy platform vendors are more than willing to execute on that opportunity with expensive, inflexible architectures that require continuous scale-up upgrades and performance tuning. Similarly, the cloud-only vendors (looking at you, Snowflake) premise their businesses on public cloud infrastructure and consumption-based pricing that give them no incentive, nor ability, to deliver on good price/performance (AKA, the performance you get for the money). “The first hit is always free,” but watch your wallet once you need reliably good performance for more than 10s of users at a time.

We think that customers deserve better. Let’s dig in.

## **Purpose by design**

History tells us that scalable performance requires specialized infrastructure for fast data processing. To use an analogy, think about a multi-lane highway with routinely heavy traffic. If you’re a traffic engineer you have two options for increasing car throughput:

* Build more lanes. This approach is infinitely scalable but very expensive, and it consumes a lot of space.
* Remove all crossings, minimize turns, and keep a level grade. This approach will generally make traffic flow faster, but it’s highly complex and labor intensive.

But even if you did one (or both) of these things, bad drivers and slow or unreliable vehicles will still cause delays. The best flow is only possible when all the drivers are pros, all the cars are fast and reliable, the roads are well maintained, and the number of cars is carefully balanced against the width of the highway. That strategy minimizes space, optimizes throughput, drives down costs, and increases safety. Obviously, you won’t get that from a general-purpose approach in which little thought is given to those outcomes.

![The Traffic Engineering Problem: Building more lanes or removing bottlenecks are expensive, complex, and/or labor intensive -- but still may not improve traffic flow.](/uploads/bottleneck_before_web.png "The Traffic Engineering Problem: Building more lanes or removing bottlenecks are expensive, complex, and/or labor intensive -- but still may not improve traffic flow.")

The Traffic Engineering Problem: Building more lanes or removing bottlenecks are expensive, complex, and/or labor intensive -- but still may not improve traffic flow.

![data warehouse performance](/uploads/afterbottleneck-1168239352_web.png "data warehouse performance")

The best flow is only possible when all the drivers are pros, all the cars are fast and reliable, the roads are well maintained, and the number of cars is carefully balanced against the width of the highway.

This is why price/performance breakthroughs in data processing have always come from engineered systems. General-purpose infrastructure, like that used by Snowflake and other public cloud-only options, can’t supply all the data needed by multicore CPUs for rapid data processing at scale--so the endless need for more compute creates a price/performance wall for customers. To return to our analogy, only engineered solutions that combine systems innovation (to streamline the roads) with software functionality like advanced workload management (to isolate bad drivers/slow vehicles and intelligently control the number of cars) can avoid that wall.

## **The price/performance roadblock**

Legacy players like Netezza, Teradata, and Oracle have taken an engineered systems approach by building appliances, some of which were the gold standard for performance at one point. The problem is that they never modernized their architectures to deliver improved performance at lower prices, asking customers instead to double down on aging platforms with expensive maintenance and upgrades.

But this is a lesson that public cloud-only vendors like Snowflake failed to learn. Without access to hardware accelerators, the only way to deliver peak performance is to spin up more virtual machines at peak prices. (How many virtual warehouses do you have to spin up to keep your Snowflake from melting down?) The public cloud providers have acknowledged the raw performance challenge by providing bare-metal instances and custom accelerators for their own services, but only with expensive price tags. (Edited Dec. 7, 2020: And now even AWS is [getting into the act ](https://www.nextplatform.com/2020/12/07/the-increasing-hybrid-vigor-of-aws-is-historical/ "https\://www.nextplatform.com/2020/12/07/the-increasing-hybrid-vigor-of-aws-is-historical/")with notably visible enthusiasm.)

Because of these traps, data warehouse evaluators have to be very focused on price/performance. Otherwise, they will end up paying far more than intended as their requirements, such as data volume and numbers of end-users, grow.

## **Reject the false choice**

The good news is that you no longer need to make a false choice between expensive, scale-up legacy platforms (straightening the roads) and expensive, public cloud-only options (building more lanes). Instead, you can solve the price/performance problem with **Yellowbrick Data Warehouse**, which is the first data warehouse PaaS designed for in-memory speed from terabytes to petabytes of data, with optimizations in the storage, kernel/driver, data path, and database layers. With this approach, limits on query latency, processing capacity, and concurrency associated with traditional architectures are removed. The Yellowbrick solution is also extremely cost-efficient thanks to high-density flash memory and NVMe storage, keeping prices--and operating expenses, when applicable--well below alternatives. The result is an unbeatable price/performance ratio.

And speaking of removing false choices, with Yellowbrick, you don’t need to choose between on-premises and cloud-based deployments, either. Our unique unified hybrid architecture lets users access your data warehouse from anywhere through common BI/analytics/data science tools -- inside a firewall or from multiple public clouds simultaneously -- with the same data and performance everywhere.

You have far more plausible choices in data warehouses than you did just five years ago. Just be sure to focus on the right things.

*Thomas Kejser started his career as a teenage coder, but moved into the data management space and never looked back. He has a master’s degree in Computer Science from DAIMI in Denmark and has industry experience across a diverse range of sectors, including telecommunications, healthcare, manufacturing, retail, and financial services. Thomas lives in London and spends his spare time discussing philosophy with friends over a good glass of whiskey.*
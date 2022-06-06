---
title: Why is Yellowbrick so fast? Secrets of Yellowbrick Data Warehouse architecture
author: 1f5d5e99-3d0b-42ed-97aa-986473217b93
description: Many of the assumptions about data warehouse architecture are
  outdated. Learn how Yellowbrick's modern design concepts will make you
  re-think what a data warehouse can do.
date: 2021-05-04T01:20:22.753Z
metaTitle: Modern Data Warehouse Architecture | Yellowbrick Database
coverImage: /uploads/blog/yb_bloghero12.jpg
cover_alt: Yellowbrick architecture
thumbnailImage: /uploads/blog/yb_blogthumb_feature12.jpg
categories:
  - product
featured: true
---
Yellowbrick Data Warehouse is an advanced, massively parallel processing (MPP) SQL database designed for the most demanding batch, real-time, ad hoc, and mixed workloads. It can run complex queries at up to petabyte scale across numerous nodes, with guaranteed sub-second response times.

Yellowbrick was conceived with the goal of optimizing [price/performance](https://www.yellowbrick.com/performance/). New SQL analytics use cases are emerging all the time, and more concurrent users are consuming more ad hoc analytics. That requires more performance per dollar spent, and [Yellowbrick architecture](https://www.yellowbrick.com/go/yellowbrick-data-warehouse-architecture/) (see high-level view below) leapfrogs the industry in this respect. It’s not uncommon for customers to see their workloads run tens or hundreds of times faster at a fraction of the cost compared to cloud-only or legacy data warehouses.

![data warehouse architecture](/uploads/Yellowbrick-Architecture.png "data warehouse architecture")

We aren’t interested in incremental improvements in efficiency, however. Incremental is boring! Rather, our goal is to make step-function improvements in economics, and when it comes to data processing, these improvements come from modern hardware technologies that are more efficient than traditional systems. 

## Inefficiency of high-throughput data processing with Linux

Today’s hardware instances are routinely available with hundreds of gigabytes to terabytes of memory and dozens of CPU cores: At the time of writing, a single off-the-shelf instance can support 2TB of RAM and 128 CPU cores (256 vCPU), and we envisage by 2023, 192 cores (384 vCPU) will be commonly available. Running generic software on these instances does not work well: Operating system schedulers were built to wait for events and “context switch:” Threads wait for events, such as a keypress, a network packet arriving, storage I/O completing or synchronization primitives becoming available – and switch between competing threads and processes to try to be as fair as possible and use buffers efficiently. As a result, it’s not uncommon for modern databases to do tens of thousands of context switches per second per CPU core, and millions of them per second in aggregate.

Conventional wisdom states that if you’re not spending much CPU time context switching – under 10% – you’re in good shape; context switches are cheap with a good operating system. However, this assumption is outdated. Modern CPUs get their performance from processing data from their caches, typically called L1, L2 and L3. The L1 contains data pertinent to the most recent processing, the L2 cache is larger but slower to access, and likewise the L3 cache. The L1 cache per CPU core is measured in tens of KB, the L2 cache in hundreds of KB, and the L3 cache single-digit megabytes. 

When this context switching and bouncing in and out of complex Linux kernel subsystems is happening continuously across dozens of cores, any modern CPU will struggle to work efficiently. The DBAs will be none the wiser because the CPU will be 100% utilized, but under the covers, the database is achieving only a fraction of the theoretical maximum efficiency.

## Introducing the Yellowbrick Kernel

To avoid these Linux-intrinsic problems, we built a new OS kernel from scratch. It implements a new execution model to eliminate measurable context switching overhead, and eliminates penalties associated with accessing storage, the network, and other hardware devices. We do that with a new, reactive programming model for the entire data path.

The **Yellowbrick Kernel** is implemented as a “user space bypass kernel” – a Linux process that takes control of most of the machine and attached I/O devices. As a Linux process, it can run comfortably in container environments such as Kubernetes, in virtual machines, or on bare metal. It assesses how much “bypass” capability is possible in each environment and then adapts to use as much of it as it can, so it performs optimally in a VM on a 10-year-old laptop, a container in Amazon EKS, on OpenShift in a private cloud, or on bare metal in a custom-designed blade server. When Yellowbrick starts, Linux is relegated to being a supervisor agent that collects logs and statistics, with all core data path functionality bypassing it completely. 

Some of the principles of this new programming model include:

* **Memory management:** Yellowbrick intrinsically understands NUMA (Non-Uniform Memory Architecture) machines. At database startup, almost all memory in the system is handed to Yellowbrick and pinned (to make sure Linux never swaps in/out our process). Physical-to-virtual mappings are noted so hardware devices can directly and safely access the database memory bypassing the kernel.
* **Threading and processes:** Yellowbrick has a modern threading model based on reactive concepts such as futures and co-routines. Small, individual units of work called tasks are scheduled and run to completion without preemptive context switching. 
* **Device drivers:** Traditional **device drivers** run in the Linux kernel and interrupt execution whenever something happens. In contrast, Yellowbrick device drivers are asynchronous and polling in nature. Access to drivers is always via queue with well-defined interfaces. Drivers are present for general PCIe devices, NVMe SSDs, various network adapters, and so on, all of which work without Linux’s involvement. In cases where Yellowbrick is running without bypass being available, emulated drivers for each class (network, storage, and so on) are present that fall back on the Linux kernel or on software emulation.
* **Networking:** Like many modern, microservices-based software stacks, Yellowbrick is implemented in a variety of different languages. We primarily make use of C, C++ , and Java, with a sprinkling of Go and Python where necessary, and these services need to talk to each other. The use of abstracted, high-performance, zero-copy networking with standard interfaces brings benefits to the Yellowbrick database that can’t be matched by legacy databases: We have clocked a single CPU core sending and receiving 16GB/sec of data across the network in the MPP fast path, with time to spare. When using the Linux kernel, around 1.5GB/sec is the limit and the CPU core is fully loaded, leaving no time for data processing. Our networking technology allows expensive parts of [database queries](https://www.yellowbrick.com/uploads/BRIEF_Yellowbrick_Technical_Overview.pdf) – such as re-distribution of data for joins, aggregates (`GROUP BY`), and sorting – to run 10x more efficiently than competing databases, using a fraction of the resources. 

For more details about **Yellowbrick architecture** design concepts, watch CEO Neil Carson’s keynote from the recent Yellowbrick Summit 2021 virtual event:

<p align="center"><iframe width="560" height="315" src="https://www.youtube.com/embed/NIAm5Wc2stM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>

And for an even deeper dive, read the [Yellowbrick Database Architecture White Paper.](https://www.yellowbrick.com/go/yellowbrick-data-warehouse-architecture/)
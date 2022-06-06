---
title: "The Cloud is dead, long live the Cloud "
author: 1f5d5e99-3d0b-42ed-97aa-986473217b93
description: Freedom to choose deployment models doesn't mean you have to
  sacrifice the advantages of the cloud
date: 2021-06-08T15:06:11.566Z
coverImage: /uploads/blog/yb_bloghero10.jpg
cover_alt: workloads in the cloud
thumbnailImage: /uploads/blog/yb_blogthumb_feature10.jpg
categories:
  - cloud
  - product
featured: true
---
In “[The Cost of Cloud, a Trillion Dollar Paradox”](https://a16z.com/2021/05/27/cost-of-cloud-paradox-market-cap-cloud-lifecycle-scale-growth-repatriation-optimization/), the recent and profoundly insightful Andreessen Horowitz thought piece from Sarah Wang and Martin Casado, the authors say out loud what many pragmatists have been silently thinking for years: that for some companies, doing an all-or-nothing platform shift to the cloud isn’t always the best long-term strategy. Citing the experience at Dropbox, which saved $75M over two years by moving most of its **public cloud workloads** back to private colos, the authors propose that workload “repatriation” to on-premises infrastructure results in one-third to one-half the cost of running equivalent workloads in the cloud. 

To say that cloud computing is a mistake or that workloads should be repatriated *en masse* would be taking the wrong lesson, however. Wang and Casado are clear about what the correct lesson is: that “companies need to optimize early, often, and sometimes, also outside the cloud. When you’re building a company at scale, there’s little room for religious dogma.”

At Yellowbrick, this is precisely the lesson we’ve learned from our own customers. Our modern, cloud-native/Kubernetes-based data warehouse is designed on the premise that optimizing for price/performance, ROI, and data gravity should inform **workload deployment decisions**. You need, and should have, freedom to choose whatever deployment model delivers on those optimizations without sacrificing elasticity, making overlapping investments, building silos, or complicating management and operations. 

We also believe that the cloud is the right operating model wherever your workloads are located—in private data centers, in [multiple public clouds](https://www.yellowbrick.com/blog/the-barriers-keep-falling-announcing-andromeda-and-yellowbrick-manager/), at the network edge (as use cases there emerge), and across all of the above simultaneously in distributed clouds under a single control plane. That’s the true essence of [“cloud-native” architecture](https://www.yellowbrick.com/press-releases/yellowbrick-brings-data-warehousing-to-distributed-clouds-for-first-time-addressing-business-challenges-of-distributed-data/), which Kubernetes now makes possible. Furthermore, your data warehouse should be infrastructure aware such that it will deliver the best price/performance value from the whatever hardware it sits on, instead of being designed for the lowest common denominator.

Per Wang and Casado, “Perhaps the largest opportunity in infrastructure right now is sitting somewhere between cloud hardware and the unoptimized code running on it.” At Yellowbrick, we’ve found that happy place for our data warehouse.
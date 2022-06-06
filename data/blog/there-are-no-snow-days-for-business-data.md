---
title: There are no "snow days" for business data
author: 1f5d5e99-3d0b-42ed-97aa-986473217b93
description: If your data warehouse is critical to your business, peace of mind
  isn’t a luxury
date: 2021-06-30T23:16:05.689Z
coverImage: /uploads/blog/yb_bloghero9.jpg
thumbnailImage: /uploads/blog/yb_blogthumb_feature9.jpg
categories:
  - cloud
featured: false
---
If your company relies on Snowflake for data insights, you may be re-thinking that relationship. What began as a regional outage yesterday on Azure East went global until 2pm PST today, causing tweets to ring out:

![](/uploads/picture1-1-.png)

Unfortunately, it was only a matter of time before this happened: Snowflake provisions and operates data warehouse infrastructure on public cloud platforms on your behalf using its own accounts (spending $billions in the process). When there’s a problem, like there was today, you have nothing to fall back on. Even if you had the budget and foresight to maintain an expensive mirror of your Snowflake system on another public cloud platform, you would still be out of luck, because the entire service was down across all three clouds.

There is a better way:

* Yellowbrick has native data replication capability and enables hybrid and inter-cloud deployments, so you can adopt a Disaster Recovery strategy across private data centers, cloud regions, and public cloud platforms—if the data warehouse is unavailable, you can failover to the standby replica—providing real peace of mind. 
* Yellowbrick has made single-system resilience a core design principle through a range of innovations, including the ability to automatically restart workloads in the event of infrastructure failure.
* With Yellowbrick, you have control over your own cloud infrastructure, in your own public cloud account. You’re not relying on an intermediary that controls access to your own data. 

And if your data warehouse is critical to your business, peace of mind isn’t a luxury, it’s a necessity. Just ask a Snowflake customer about that, after today.

Learn more about the differences between Yellowbrick and Snowflake [in this brief white paper](https://www.yellowbrick.com/go/yellowbrick-vs-snowflake/).
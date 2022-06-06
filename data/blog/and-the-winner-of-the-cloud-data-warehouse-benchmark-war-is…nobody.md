---
title: And the winner of the cloud data warehouse benchmark war is…nobody
author: 5e8b4637-2bcd-47c9-8998-045923bbb48e
description: Our view of the slingshotting between Databricks and Snowflake
  after the TPC-DS 100TB benchmark results.
date: 2021-11-19T21:17:58.322Z
metaTitle: And the winner of the cloud data warehouse benchmark war is…nobody -
  Yellowbrick Data
coverImage: /uploads/blog/yb_bloghero7.jpg
cover_alt: data warehouse solution
thumbnailImage: /uploads/blog/yb_blogthumb_feature7.jpg
categories:
  - research
featured: true
---
![cloud data warehouse solutions](/uploads/slingshot.png "cloud data warehouse solutions")

The slingshotting of TPC-DS 100TB benchmark results between **Databricks and Snowflake** recently has done neither vendor any credit and has left analysts, other vendors, and customers equally bemused.

First, Databricks published official TPC-DS query benchmark results, staking its claim to be the fastest data warehouse on the planet, with the added kicker of “better price/performance than Snowflake.” Snowflake responded with its own TPC-DS benchmark and suggested the Databricks results “lacked integrity.” Databricks countered with the assertion that Snowflake’s published benchmarks were based on underlying data that had been tuned to get the best results for Snowflake rather than using the raw data from the TPC-DS generator. And so on and so forth.

It’s a surprise that neither vendor stopped to consider how this spat will end, what the rest of the industry probably thinks of this back-and-forth, and for that matter, just what they were trying to achieve in the first place.

Let’s start with the “how this will end” part. Finger-pointing contests between vendors never end well, and no one involved comes out of them looking good. As a potential customer, it would lead me to wonder about the corporate culture at these companies. What are they like to work with day-to-day? How will such aggressive behavior serve me if my business-critical retail data warehouse crashes on Black Friday? Will they work with me to troubleshoot to get it back online, or will they start pointing fingers?

What do industry peers such as Yellowbrick think about this? I find it incredulous that Databricks would go into battle with an artificial benchmark, which rarely if ever gives a true picture of the price/performance characteristics of a system against a real-world workload. Perhaps Databricks believes in a quote from my favorite movie, Withnail and I: “Even a stopped clock tells the right time twice a day.”

In any event, it really was a case of bringing a rubber knife to a gun fight. Fortunately for Databricks, Snowflake turned up to the fight with a wooden spoon. 

I’m also shocked that both vendors thought they could turn in benchmark results on clusters of 256 nodes and four concurrent query streams and keep a straight face. At what point did they think it was a good idea to simply throw more nodes at the problem and still get excited at delivering such a pitiful level of concurrency? Not to mention the outrageous costs and environmental consequences of suggesting this as a practical deployment configuration.

So, what were they trying to achieve in the first place? It’s clear that Databricks is trying to establish itself as a credible data warehouse. From my conversations with analysts, customers, and prospects, no one currently considers Databricks as a practical enterprise data warehouse. Perhaps Snowflake responded because its account teams were fielding questions about the Databricks benchmark from their customers and felt the need to issue a rebuttal? Who knows? What I do know is that nobody makes a data warehouse buying decision by flicking through TPC-DS reports. Most buyers thoughtfully consider the business problem they are trying to solve and work back to the solution via a careful RFP or proof-of-concept (POC) process with vendors, testing each one against their own data, workload, concurrency, and scale requirements. 

We work closely with prospects and our customers to make sure we deliver the value they want and expect. We get asked about Yellowbrick’s TPC-DS performance, and we’re happy to share the details, with the caveat that the results are about as much use as a chocolate teapot when it comes to assessing true performance against real workloads, access patterns, migration effort, ecosystem integration challenges, and so on.

What’s of most value to customers and prospects is the discussion around their actual use cases. We almost always wind up running a POC in a new account to demonstrate the business value we can deliver, and to work through the technical aspects of the solution before they buy. During a POC, our sales engineers work closely with the prospect to truly understand the requirements, optimizing the solution not for TPC-DS but for the real-world situation at hand. We want a long-term mutually beneficial relationship with our customers. We have absolutely no interest in transactional business, and it’s in nobody’s interest to deliver a **data warehouse solution** that doesn’t fit.

Like every other vendor, we use TPC-DS as one of many workloads to help avoid performance regressions as we release new software. We also like to spend time breaking down the queries, and we love sharing what we do, as we have done here in this blog series. In this regard, the TPC-DS queries provide a nice way of illustrating the tricks that a SQL optimizer needs to employ to get good general performance. However, I’m not going to share our TPC-DS 100TB benchmark results here, because they would be meaningless, and I would be a complete hypocrite if I did.  

This whole episode has reminded me of another quote from my favorite movie, which I’ve adapted to make it apt to describe the behavior of **Databricks and Snowflake**: 

“I must say, that represents a level of \[hubris] in you that I'd previously suspected, but not noticed due to highly evasive skills.”
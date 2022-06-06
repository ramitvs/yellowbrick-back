---
title: "From Sybase to SAP IQ to Yellowbrick: A Technology Journey "
author: 659bb53b-1d00-40bf-8bf8-2f456c872165
description: Richard Soundy shares his experiences working at Sybase and SAP
  before joining Yellowbrick as a Technical Advisor.
date: 2022-05-05T09:32:20.358Z
metaTitle: "From Sybase to SAP IQ to Yellowbrick: A Technology Journey "
coverImage: /uploads/blog/yb_blogimage_richardsoundy_featureimage.jpg
cover_alt: sybase to yellowbrick
thumbnailImage: /uploads/blog/yb_blogimagesthumbnail_richardsoundy.jpg
categories:
  - guest-blog
featured: true
---
**Driven by concerns about its end of life, and wanting to avoid being shoehorned into Hana, many [SAP IQ users](https://www.yellowbrick.com/go/sap-iq-replacement-why-yellowbrick/) have turned to Yellowbrick to modernize their legacy platform. In this blog, UK SAP IQ Technical Advisor Richard Soundy shares his views on this topic. Richard worked in Engineering roles at Sybase and SAP for 24 years and was with SAP IQ since the original product was purchased by Sybase back in the early '90s.**

My name is Richard Soundy, and I have been involved with the engineering, selling, proving, installation and deployment of Sybase IQ since the early 1993.

I started with Sybase in the fall of 1992, as a Sales Engineer (I was a Pre-Sales Analyst) primarily working on the Sybase ASE product (then Sybase SQL Server). Please do not confuse this with Microsoft SQL Server. It has the same lineage but is now a very different product!

In the first few months I became aware of the product IQ which would go on to dominate my life. At the time, it was named Sybase IQ and now it’s SAP IQ, but to me, it is just IQ.

In the early days, IQ (or IQ Accelerator as it was originally named) was very different from the IQ now. Yes, it was very fast. Yes, it was very efficient on storage. But changing the paradigm from a Row Store to a Column Store was exciting. This is the gold standard for analytical and data warehouse databases now, but this was not the case in the early 90s.

The addition of custom index types (such as the bitmapped index) and the innovative use of data compression also thrilled my little technician’s heart! Not only did it thrill my heart, but it also swayed customers with its (for the time) fantastic performance and huge reduction in storage costs.

So, time went on. IQ moved from an ASE-back-end to a full stand-alone product. The server allowed for larger and larger data stores, larger and larger user populations with the introduction of the Multiplex (multiple servers in a shared storage architecture). All these innovations increased the customer base. We had a robust product that ran many mission-critical (and yes, I do not like that phrase!) applications at many sites round the world.

I was in my element! I was part of the 1TB database tests (executed on Sun Microsystems servers—remember them?). I was part of the team who built the 1PByte installation. Not only did we have a great product, but it was selling well.

Moving on to 2010-2011, Sybase was purchased by SAP, and IQ started (internally) to go head-to-head with the SAP developed in-memory database HANA. They were, and are, different beasts. IQ was, and is, a database capable of handling multi-petabytes of data, whereas HANA is in-memory and more niche in its deployment. If they were both proposed to the same customer, for the same application, then one of the sales teams have got it wrong!

I would probably have stayed with SAP, as I enjoyed my time there. But personal circumstances lead me to leave SAP in 2015, to retire and spend my time looking after the garden and bringing up the children.

Well, the garden is paved over (I hate gardening), the kids went to university, and I might have got a little bored! So, I started doing small tasks for colleagues and IQ customers I had worked with over the years. It was fun and different.

But then, more and more IQ customers were telling me that the development of IQ was not at the pace it was back in the days of Sybase. Yes, there were still bug fixes and great support, but new features were very thin on the ground. I also started to notice that the IQ product was not being developed as well as it used to be and was falling behind some of the “new kids on the block” platforms.

I was looking at these “new kids” when one of my ex-colleagues from Sybase and SAP suggested that I look in more detail at Yellowbrick. TL;DR; I am now a technical advisor to Yellowbrick.

Yellowbrick, in its market positioning, is similar to the old **Sybase IQ**, but designed and developed to use and enhance the hardware and software technologies from the 21st century. It is a robust platform for petabyte storage, it can support large user populations and yes, it is also a column store. It is just like seeing IQ as it was when it was in its heyday.

But the differences. Developed for the 21st century. Full support for SQL using the Postgres engine. Full support for on-premises, cloud, and **hybrid deployment models**. A very resilient database engine with robust fail-over and recovery support. All the bits that my customers were telling me that they wanted—and that IQ would have had if it had been developed 20-30 years later than it was.

![Query is king](/uploads/blog/sybase-sap-iq.png "Query is king")

That, I think, is the core of the differences. To the external eye, a data warehouse server or an analytics server is just a storage system for the speedy retrieval of large amounts of data. But IQ was devised and developed 30 years ago. Time and technology have moved on. The base rules are still the same, the premise “query is king” still applies. Once the data is safely stored in the system than the queries are the most important single application.

Again, given the constraints of the hardware (and there will always be hardware constraints), the internal structure is necessarily complex, with custom storage techniques (or which column storage is one). But now we have discs (which are no longer a spinning platters of magnetic material) and CPUs that can vastly outpace 20th century super computers (the CPU in my phone is faster than a 1970’s supercomputer).

We have data pathways between storage and CPU that are so fast they would comfortably beat the internal CPU performance of 30 years ago. The CPU and cache level performance are amazing. There are remote processors and storage in the cloud that are, every day, more commonly being used.

These are all things that the **IQ designers** could not anticipate. And even if they did, they could not engineer a product around them. So, although the hardware, software, and the techniques to use them are faster and different, there is still the basic requirements of any computer system.

Reliability, control, flexibility, and resilience are all vitally important, along with performance and ease of use. IQ had these, and to an extent still does. But now there are other products that can satisfy the customers’ requirements better, faster, and cheaper. I honestly believe that Yellowbrick can and does provide this.

So what am I doing now? Well, I am helping Yellowbrick develop and sell their products. What has changed compared to what I was doing at Sybase 30 years ago? Well, I am older to start with! Technology has moved to a new point, and that point is brilliant.

Yellowbrick is a great company, the management are good folks, the engineering team is second to none and the product is very impressive. This last point is very important to me, because at the core of my being I am a technologist and I like and admire good technology.

**Learn why Yellowbrick is the next best step for SAP IQ customers in the [Replacing SAP IQ – Why Yellowbrick?](https://www.yellowbrick.com/go/sap-iq-replacement-why-yellowbrick/) whitepaper.**

<!--EndFragment-->
<style scoped>

.hero {
  background-image: url(/uploads/images/generic-bg.svg);
  background-size: cover;
}

.yeellow {
	fill: none;
	animation: clean 15s infinite linear;
}

.bleuu {
	stroke-dashoffset: 0;
	fill: none;
	animation: dash 10s infinite linear;
}

.white {
	stroke-dashoffset: 0;
	fill: none;
	animation: dash 5s infinite linear;
}

@keyframes dash {
	to {
		stroke-dashoffset: 500;
	}
}

@keyframes clean {
	from {
		stroke-dashoffset: 0;
	}
	to {
		stroke-dashoffset: 1000;
	}
}

.speaker {
    font-weight: bold;
  }
.timestamp {
  color: #00c3cd;
}

</style>

<template>
	<Layout>

	<section class="hero py-20">
		<div class="w-full max-w-1200 mx-auto text-white z-10 px-8">
			<h1>Key Benefits of a Modern Hybrid Cloud Data Warehouse</h1>
		</div>
	</section>

	<section class="bg-white py-12 md:py-20 z-10">
		<div class="w-full max-w-800 mx-auto">
			<BaseWistia id="cveznl66gy" />
		</div>
	</section>


	<section class="bg-white py-12 md:pt-0 md:pb-20 z-10 ">
    <div class="w-full max-w-1200 mx-auto px-8">
      <h3 class="accent-heading">Transcript</h3>
      <p>
        <span class="speaker">Hema Ganapathy: </span>Hello everyone. Thank you for joining us for today's webcast. Our topic for today is the key benefits of a hybrid cloud data warehouse. Before we begin, I'd like to do some introductions. My name is Hema Ganapathy. I'm in product marketing at Yellowbrick. I'm going to be your host as well as moderator today. And joining me as presenter is Ed Bernier, senior systems engineer at Yellowbrick. And now Ed has over 20 years of experience in data warehousing, running on massively parallel databases, designed for analytics as senior system engineer at Yellowbrick, and is responsible for helping Yellowbrick’s all flash architecture, take performance and simplicity to the next level.
      </p>
      <p>
      	A little housekeeping before we get started, we have carved out some time at the end of the presentation to answer questions. So make sure to type your questions into the questions window, and we will get to it right after the presentation. We're also doing a live tweet during the webinar. So please use hashtag #YBLive to participate and retweet as you can see on the screen. So without any further delay, I'm going to hand it over to Ed.
      </p>
      <p>
      	<span class="speaker">Ed Bernier: </span>Thanks Hema. Appreciate it. So I thought we'd start today by looking at some of the trends that we've seen with business intelligence and data analysis, and I've kind of broken this down into a few different tracks. If you think of the top track of business intelligence, when we look at kind of how things have changed over the years, it wasn't that long ago that many businesses were getting their batch reports kind of static either online or, or or in paper. And those things, those days have changed. Although some places they're still getting those, there is that need from users to really look at data a little bit more interactively. And so business intelligence systems have divided these, the reports that allow you to do drop downs and really kind of drill into that data a little bit more. And then finally, what we're seeing now is even using predictive analytics and machine learning to find patterns that users may not have been able to discover on their own, right?
      </p>
      <p>
      	At the same time we've seen business users and executives and managers really try to become much more data-driven in their decision-making. The monthly batch reports really aren't enough anymore. They really want to drive into not just what's happening with the business, but really understand why I think the first iteration of that was folks bringing data into their Excel spreadsheets and trying to do it through through that mechanism, but that had all kinds of challenges because now you had data all over the place, it got stale and there was a lot of issues. And so what it drove the business to do is to summarize that data into a database environment and provide a drillable dashboard that these users could interact with. And then as things have further developed, there's this real drive towards customer 360. There's a recognition that the data within our systems about our customers is totally unique.
      </p>
      <p>
      	No one understands our customers like we do. And so if I can't bring that all together into one system, to be able to see and understand what my customers are doing from all aspects of my business, then that's really gold out there that I'm not mining. And so there's this real push towards customer 360. At the same time that the user's demands have risen. We've seen data volumes dry drive up and rise up dramatically from, you know, terabytes, not that many years ago to now hundreds of terabytes or even petabytes. And so that's putting a lot of demand on today's systems. And so when we look at legacy systems, many of them really weren't designed for these kinds of data volumes and this kind of a user interactivity, they were designed around smaller data and aggregate tables, summary tables, and really not designed to allow that drill down.
      </p>
      <p>
      	Right. And so that growth of, of data and users and mixed workloads, which require both the trickle feeding in of data for applications that near ne near need near real time access and those batch workloads all at the same time, that inability to scale has driven up costs dramatically because, you know, the way that the legacy systems typically try to handle that as they try to scale out, right? And as they scale out, they become much more comp complex to manage. And it's really hard for them to to keep up with that from a cost and and management standpoint. And then in flexibility as the cloud has become available businesses, like the flexibility that it provides. And so many of the legacy systems really don't provide those deployment options to be able to deploy those systems in the cloud or on-premise.
      </p>
      <p>
      	And many of the cloud-based data based systems really don't have the flexibility to deploy either, either location as well. And then as I mentioned with the customer 360 focus, there's that need to bring data in from disparate databases and trying to store all our data in one place has really created a challenge as well. And so, you know, how has the data warehouse revolution, if you look at time being able to react to those changing user demands, you know, we think about the relational database system and then the user demands and data volumes really drove the introduction of appliances because the performance just wasn't there as, as data moved from hundreds of gigabytes to terabytes, right? And the appliance has offered a couple of things. They offer very high performance and also simplicity. So you could deploy these systems very, very quickly and immediately get access to them.
      </p>
      <p>
      	As user demand continued and as the storage, the cost of storage and the cost of commodity hardware got less expensive. They gave rise to Hadoop and the ability to store lots and lots of data and not throw anything away. And then try to get access to that data. And so Hadoop rose up and we find Hadoop systems these days. But the challenges there are they were really not designed for interactive query. And as we've seen user demands are not just for batch reporting anymore, but really want that interactive access to the data. At the same time, we've seen cloud environments rise up and there's data warehouse software designed for the cloud or data warehouse software deployed in the cloud that allow you to take advantage of some of the flexibility there. But most of those environments really weren't designed for the data volumes we see today, which have grown from tens of terabytes up to hundreds of terabytes and petabytes. And as clients have further investigated and worked with the cloud, they found that, you know, not all workloads really belong in the cloud. And so there's this drive towards hybrid cloud, or some clients have actually started out with systems in the cloud and brought them back on-premise. And so they liked the flexibility to deploy in either location and be able to move and migrate workloads from one to the other as workload demands dictate.
      </p>
      <p>
      	And so that brings us to the attributes of, of a modern hybrid cloud data warehouse. What can we see when our clients telling us they want for, for that? One of the key things is location agnostic, the ability to deploy this system, whether it's on-premise or in the cloud, or a combination of the two to really match those workloads to where it makes sense to deploy. The other thing that we see is the need for predictable performance. Many of the data warehouse environments that get deployed within the cloud are kind of forced to deploy on VMs within, on commodity hardware, and that limits the scalability and predictability of performance. So there's some real issues there, right? The other thing is workload management as more and more diverse workloads need access to this data. It poses challenges to meet up with that demand, to provide the proper SLAs to the proper users that are accessing that data.
      </p>
      <p>
      	We need flexible access to the data. Not all your users are coming from one place. So maybe sitting on Azure. So maybe on AWS, so maybe on-premise. And so you need to be able to access that data from across the enterprise and across multiple locations. And then finally, many new business applications and business users are no longer satisfied with, you know, looking at end of the day results. They'd really like to see intra-day in, in near time, kind of results coming in from the data. And that poses a requirement for a real-time trickle feed in search to be supported. And then they'd like the flexibility to change their mind. So you'd like to be able to leverage your existing investment, maybe you start deploying on-premise, and then we'd like to move that to cloud or vice versa. And so they'd like to be able to leverage those existing investments and not have to start all over.
      </p>
      <p>
      	And finally they'd like powerful, interactive analytics, all allowed those users, better assets accessing that data to really drill into the details and get into the why is this happening? Not just the, what is happening within the environment, which kind of brings us to Yellowbrick and how we designed our system Yellowbrick, we call it the only modern data warehouse for the hybrid cloud. And it's really been designed for both deployment of our instances on-premise or in the cloud. And furthermore, you can deploy on-premise using either subscription model or cap ex so very flexible there. The one thing that we quickly recognize as the thing that provides our performance is our architecture. We have an integrated software hardware stack, which I'll talk to you about in a minute, which provides a, what we call a all flash direct to cash kind of performance improvement.
      </p>
      <p>
      	And it gives us extremely high performance against very, very large data sets. And it does that with a very small footprint that's extensible. And so we want to provide that same capabilities on both our on-premise as well as our cloud type system. So you will see that predictability in both. And then finally, in these hybrid environments, you may have systems on the east coast, on the west coast, within the cloud, you may have it on-premise. And so there's a need to keep all those systems in sync and be able to replicate data so that in the event of a failure, you can immediately access that failed data into the remote system. And we've built that within the hardware architecture and software architecture of Yellowbrick as well. And so on the diagram on the left, what we're trying to show here is the fact that you get all of this within Yellowbrick, whether that instance is deployed on-premise or in the cloud, you get that same high performance.
      </p>
      <p>
      	So the three takeaways, if you think about a Yellowbrick data warehouse, the three things we've really designed in from the beginning were one unparalleled performance. We recognize that a lot of systems as the data volumes grow from 10 terabytes up to even petabytes, that they really weren't designed to handle high-performance queries with those kinds of large datasets. And so we built the system from the ground up for that. In fact, our DNA is really our expertise in both storage and data warehousing. Many of our founders came from fusion IO, which invented high performance, high throughput, solid state disks called drives. And then many of our other founders came from data warehouse vendors like Teradata, Netezza, Oracle, and SQL servers. So we have that combination of skill sets too. It allowed us to deliver this architecture, so unhealed parallel performance, and then innovative simplicity.
      </p>
      <p>
      	And when we think of simplicity, we basically build simplicity. And from the ground up, it's not something that is an afterthought. And so the system is designed for no tuning, which means you can basically load the environment and immediately start querying it and get the kind of performance we're talking about. That also drives time to deployment because of the simplicity of the system, you don't have to build all these objects. And so migrating tables is very easy and migrating data over to the system is very easy with no tuning required, and that helps drive the ability to handle real time or near real-time use cases as well. And then we've built that sophisticated workload management and monitoring capability into the product to ensure that we can handle your most complex workloads. And as I mentioned, we've designed the system for both on-premise public or a hybrid deployment option.
      </p>
      <p>
      	So diving a little deeper, what is it that makes our architecture so fast and how do we scale it at the kinds of data volumes that I mentioned, the hundreds of terabytes or even petabytes, and the uniqueness is in this combination of software and hardware. If we look at this diagram from the bottom, we see a flash storage and multi CPU, and we see direct to cash in stream processing. What's unique about our architecture is that it's different from just taking an SSD drive and plugging it into an existing architecture that's designed for spinning discs.There's all kinds of issues that that impose when you plug an SSD drive into those environments, you typically run into all kinds of scalability challenges because the architecture is still designed around spinning disc. And so the memory bus becomes overwhelmed and you get very little performance improvement.
      </p>
      <p>
      	What we've done differently is our flash storage directly ties intoCPU cache. And if you think about it, in today's environment where you've got hundreds, or maybe even thousands of cores out there, the fact that those cores can directly access data through their cash is unique. And what the other thing we did was made the data blocks fit nicely within cache so that it works very well with the hardware architecture. The software works very well with the hardware architecture. So if you can picture this, you've got hundreds or thousands of processors  streaming data off the flash storage and are able to immediately do stream processing and filtering and, and processing of those queries without having to land any of that data in memory, which is huge. The other thing we've done is our nodes plug into an InfiniBand environment, which is a dual 50 gigabit kind of interface, which provides very, very fast performance for node to node communication.
      </p>
      <p>
      	We built a customized OSTP to handle optimized scheduling. So when we talk about being able to handle these mixed workloads, having control over our operating system scheduler allows us to handle it in a way that allows us to scale much better than any other system out there. And then finally, we've also built within our database. We're leveraging the latest in software database technology in that the backend is Columnar, which means we're only, only scanning data that's relevant for the underlying queries. And that allows us to not just work hard, but work smart as we're processing queries and provides an unbelievable performance. We can scan data on our lowest end system at over a hundred gigabytes per second, and at our highest sense system at over 750 gigabytes per second, it's pretty incredible. The best thing is to the outside world. We look like a PostgreSQL database. We made our API to the outside world, completely a hundred percent compatible with PostgreSQL. And so that means all of your BI applications can immediately get access to the elebric system. And it looks just like something they're very comfortable interacting with.
      </p>
      <p>
      	And so the key benefits of the Yellowbrick hybrid cloud are listed here, and I'll take it from the top left and kind of go around clockwise. So we architected the system for scaling to thousands of users. I mentioned that we have built in workload management, so you can match the SLAs for particular users with the resources available for that system. You can prioritize appropriately, and we can scale that up to thousands of users and petabytes of data. We've also designed the system for predictable performance. We're not a cache-based architecture, like a lot of the cloud-based systems. So what that means is you get very predictable performance. We've got the direct streaming architecture where CPU's can directly pull that data and, and get high performance against even detail level data sets. And that allows us to handle ad hoc kind of workloads where users are asking things for the first time and still getting really good performance there, which caching doesn't allow you to do.
      </p>
      <p>
      	We support a number of the BI tools because we look like PostgreSQL. We have that asynchronous replication, which allows us to keep multiple instances of Yellowbrick in sync, whether they're in cloud or on-premise, we're a very small footprint, which load leads to lower subscription costs if deployed in the cloud and leads to lower on-premise costs because we can retire racks and racks of equipment and replace so it's something that fits with Interact. We're cloud agnostic, which means we can deploy within the Yellowbrick cloud and are accessible from all of the major cloud vendors. It also means we don't charge you any cloud transfer fees. So any data that you bring into the Yellowbrick cloud, if you wanted to bring that back on-premise, there's no penalty there with deploying that within Yellowbrick, then we do support that variety of workloads, whether it's ad hoc or real-time because the architecture has been designed for that from the get-go.
      </p>
      <p>
      	So let's look at a few use cases. How are people using this amazingly fast system? So one of the common use cases we see is for a, as a query accelerator. You think about, you know, all the different data environments you may have out there. Our ability to stream data in near real time allows those transactional systems to change data capture, move that data over in near real time, over to Yellowbrick, and then allow your users to query Yellowbrick instead of querying the current environments, which may be running very slow and may not be designed for the data volumes that you're talking about. This also allows us to combine D combined data from multiple data environments into the Yellowbrick instance, so that you get more of that holistic view across your entire enterprise. That data could be going into a system on-premise.
      </p>
      <p>
      	It could be going into the system in the cloud, or you may have on-premises for your enterprise. You may have the cloud as a read only instance for all of your cloud users. The non-monitored scenarios we support within this hybrid cloud environment are many. And as you can see, that data is then accessible from everywhere, whether it's on-premise or any of the major cloud vendors, that's a very common use case. Another one we see as data lake augmentation, as we've seen out in the marketplace, you know, the fact that storage is inexpensive, whether you're putting it into Hadoop or putting it out into a, an object stored out in the cloud that is very inexpensive. And so the data volumes there have grown, right? Sometimes hundreds of 10 terabytes or petabytes of data is being stored. The problem is that those systems are really designed around right efficiency and not really designed for interactive queries.
      </p>
      <p>
      	They're very good at batch processing, but not very good at interactive. And so Yellowbrick has built its capability. We've built a spark job that runs, we call it YB relay and it can stream data at high speed as it arrives within Hindu or one of the cloud object stores into Yellowbrick at high speed, and do the data transfer data format transformation. If it's in Parquet or ORC or Putgrow, or you name your choice of format, we can do that as well. And convert that into the Yellowbrick native format, and then stream that at high speed. And we can load data and Yellowbrick. I didn't mention this at or 10 terabytes an hour, and we can trickle feed data in at hundreds of hundreds of thousands of rows per second. And so that allows users to immediately access that data and provide extremely high performance.
      </p>
      <p>
      	One of our clients that we developed for it is actually doing fraud detection using this, and they were able to see a three X performance improvement, and most of their queries run in, in milliseconds and that's provided a great solution or that kind of a use case. And then, and finally, I thought I'd end with a case study. So Allscripts is a great case study. They worked with us originally on-premise. They purchased a system with Yellowbrick, they had done a test of both cloud vendor databases, as well as legacy databases and found that Yellowbrick provided the highest performance for the data volumes that they were dealing with. And their data volumes were, you know, they were clinical data and it with hundreds of millions of patients, tens of billions of medications and test results. So very, very large datasets.
      </p>
      <p>
      	I think it was over a hundred terabytes of data that they loaded into us, and they were able to cut their delivery ties from 20 days down to three hours. That shows the kind of performance that Yellowbrick is able to provide. But it's also an interesting story around hybrids because they started with our on-premise system. They purchased the system from us, and then there was an edict within the company to start moving workloads to the cloud. So they talked to Yellowbrick about converting our on-premise into a managed service. And so we did that. So we've actually purchased the system back from them. We turned it into a managed service, and then eventually they migrated to a Yellowbrickcloud. And we've got instances on the East, west coast. it's all HIPPA compliant and it's accessible for, from their users that may be located in any of the various cloud environments.
      </p>
      <p>
      	And so they were a good example of the flexibility that we provide within the Yellowbrick environment. I shouldn't mention that we're PostgreSQL compatible, right? And that means that we can work with all of the different tools that are already in your enterprise. They don't need to understand Yellowbrick. They just need to understand PostgreSQL to interact with us. You may have tools like Tablo that we've been working very closely with that actually show a Yellowbrick instance when you're connecting. But most of these we'll just see PostgreSQL and that works fine. And then we've worked closely with vendors like Informatica and talent to also allow high-performance plugins to our high performance loader to take advantage of that ability alone at 10 terabytes an hour. So no matter what you've got in your enterprise, Yellowbrick should be able to just plug in and immediately be able to handle your workloads and provide that performance speed up.
      </p>
      <p>
      	And so just to summarize those three points mentioned earlier, when I think about Yellowbrick, I think about three things. Think about unparalleled performance. We've done the hard work and we've integrated a hardware and software stack. That's very unique and really provides high performance ad hoc query capabilities to data sets in the hundreds of terabytes or even petabyte range. We've also designed a system to be extremely simple. So, that allows you to handle near term near real-time workloads, where you don't have to build a lot of aggregates and indexes before you can access the data and provides quick deployment capabilities. And then we've designed the system for flexible deployment, whether you want to deploy this on-premise in the cloud or a mixture of Yellowbrick has you covered. And with that, let me turn it back over to Hayma for some final comments and some questions.
      </p>
      <p>
      	<span class="speaker">Hema: </span>Thank you, Ed. And thank you for everyone for attending. Just a reminder. I want you to make sure that you type your questions into the question box, because we're going to go over to the Q&A portion of the presentation. But before we do that, I want to remind you to follow Yellowbrick on Twitter, Facebook, and LinkedIn, the different handles are there, or visit us at yellowbrick.com and see what we can do for you today. Book a demo and have a conversation with someone at Yellowbrick. And so we do have some questions. I'm going to start off with the first question. Can you, can you explain how Yellowbrick helps drive faster time to insights for data analysts?
      </p>
      <p>
      	<span class="speaker">Ed: </span>Yeah, sure. There's a couple of things that come into play there. First of all, because of the fact that we provide that ad hoc capability. So you can basically drill down as deep as you want, as you're looking at data that provides that ability to handle that train of thought kind of analysis. What I mean by that is you ask a question, you get an answer and that leads to the next question. You get an answer. And that leads to the next question. That really only works when you're, when you're interacting with a system with pretty high performance, because if it takes too long to get the answer back, many times you've already derailed my thought process, right. And so that provides those quicker insights and a little bit more ability to see what's going on in my environment.
      </p>
      <p>
      	<span class="speaker">Hema: </span>Thank you. We have one question here. That's actually in three parts, I'm going to ask it to you in, in three parts. So I'll start with the first part. First is the public cloud platform multi-tenanted or private, or do you support both?
      </p>
      <p>
        <span class="speaker">Ed: </span>So the private Yellowbrick platform uses the interfaces that have been defined, the APIs, that have been defined by both AWS and Google and Azure to provide high bandwidth, low latency access to those cloud environments. Many times the Yellowbrick is actually sitting in the same data center as those but we sit within our own brick instance and that provides both cost advantages because we don't charge things like cloud transfer fees. We're not limited to commodity hardware when we're deploying, we deploy it on our own hardware. So that gives you predictability of performance and it allows flexibility to bring data together from multiple cloud environments, as well as on-premise. Did I answer the question?
      </p>
      <p>
        <span class="speaker">Hema: </span>Yeah. So the second part of the question is if we need more cloud capacity or performance, how quick, easy, expensive is it to flex and scale a cloud instance?
      </p>
      <p>
        <span class="speaker">Ed: </span>Yeah, so Yellowbrick is a scalable architecture. It's blade based. So you can dynamically add additional blades to the environment or nodes to the environment as we scale up, which allows you to, you know, dynamically grow the environment as you see fit. So definitely it allows that dynamic scaling.
      </p>
      <p>
        <span class="speaker">Hema: </span>And then is it possible to reduce the cloud footprint size when demand decreases?
      </p>
      <p>
        <span class="speaker">Ed: </span>No. The scaling within Yellowbrick is only on the growth side of things, not on the shrinking side of things. And a lot of that has to do with the fact that weight has weight. Wait, data has weight, right? And so as data gets moved in, it's much harder to move data out and re-organize things much easier to scale out, which is actually more of what we see from a demand standpoint anyway.
      </p>
      <p>
        <span class="speaker">Hema: </span>Thank you. Next question. How easy is it to integrate cloud-based tools, AI ML tools like SageMaker with Yellowbrick?
      </p>
      <p>
        <span class="speaker">Ed: </span>Yeah. So they're typically what's ha what happens is the data steps that are used by those kinds of tools where you're basically doing counts and aggregations and, and looking at the data and on the broader data sets you can use the PostgreSQL interfaces, whether it's PostgreSQL drivers, Python, connectors, and whatnot. And then as you kind of whittled down your model size, that's when you can bring that data back and do the further analysis within those tools. That being said, we are on an ongoing basis. We do keep adding more functions to the database, so you can push more and more of that processing down to Yellowbrik and our documentation has a listing of all those functions that are available today.
      </p>
      <p>
        <span class="speaker">Hema: </span>And thank you, Ed. There's a couple of questions that are in this summer, in a similar vein. So once I've moved my workload to the public cloud, will Yellowbrick be able to move it back to on-premises or to another cloud vendor. And are there any extra costs to do that?
      </p>
      <p>
        <span class="speaker">Ed: </span>Sure. Yeah. One of the things that a Yellowbrick is unique at is that we don't charge you any kind of cloud transfer fees. The other thing is I mentioned we can load data at 10 terabytes an hour. We also have an unloader that can unload data at, at about the same rate. And so that allows you to move data from Yellowbrick to on-premise and vice versa. And then you could also leverage our asynchronous replication capability to keep two instances in sync.
      </p>
      <p>
        <span class="speaker">Hema: </span>Thank you, Ed. And one last question. How has the Yellowbrick cloud service priced? Is it a subscription model, like other cloud vendors?
      </p>
      <p>
        <span class="speaker">Ed: </span>Yes. So Yellowbrick supports a subscription model and we support that subscription model, both in the cloud, as well as on-premise. So customers that wanted to plan on-premise, but would prefer subscription can do that well, or they can purchase the product outright com as a CapEx expense, and then in the cloud as well, it's a subscription expense, but one of the things I'd like to note is we're not a meter type of charge mechanism, and that tends to drive costs up dramatically within public clouds. One thing we do uniquely is we try to charge a subscription rate and it's more of a reserved instance. And so it's much more predictable as far as the cost, as well as the performance due to that approach.
      </p>
      <p>
        <span class="speaker">Hema: </span>Thank you. And there's a couple of questions about Yellowbrick and data analytics. So one of them is can I use Tableau or Power BI with the Yellowbrick product and how can we use Yellowbrick for data analytics?
      </p>
      <p>
        <span class="speaker">Ed: </span>Yes. Yep. Tableau works out of the box with Yellowbrick if we've done testing with SAS. A lot of our customers use SAS or some of the other analytical tools. And as I mentioned, we look like PostgreSQL. And so that opens the world from a connectivity standpoint to, to work with Ella brick, with all these tools, I'll re reiterate the fact that you really want to leverage the processing of the database to get the highest performance. And so many of these tools have the option of bringing data back to the tool to do their processing or pushing the queries down to the back end. And I would recommend with Yellowbrick, you'll get a huge performance improvement if you push that processing to the back end, whenever possible.
      </p>
      <p>
        <span class="speaker">Hema: </span>Thank you, Ed. That's going to be the last question that we take. However, I do want to address a couple of the questions that came in regarding the demo. So there are two things you can do. You can actually book a demo of the product through our website or on April 29th, we're having another webinar that, where we'll be giving a demo of the product. So I encourage you to sign up for that for anyone else who entered a question in, we're going to circle back with you individually to answer your question and see if you need any other details on Yellowbrick, to be able to get you the complete answer. We'll also be recording this webinar and we'll share a link to the recording for you so that you can listen to this afterwards or share with other team members and Ed, is there anything else that you'd like to say before we wrap up?
      </p>
      <p>
        <span class="speaker">Ed: </span>No, I'd just like to thank everyone for listening today and feel free to reach out if you have additional questions. I’d love to engage with you and answer any of those. Thanks again.
      </p>
      <p>
        <span class="speaker">Hema: </span>Thank you, Ed, and to everyone attending, thank you so much for your time and attending the webinar. Our next webinar is entitled driving value from your data lake and it's on April 22nd at 11:00 AM Pacific. You can sign up via our website in that webinar, we will discuss how to get the most out of your data lake by using Yellowbrick for data lake augmentation. We appreciate you being here. So please don't hesitate to email us at info@yellowbrick.com and please stay updated on our upcoming webinars or following trends Yellowbrick trends on Twitter or LinkedIn. And thank you again for joining us today and we will see you next time.
      </p>
      <p>
        <span class="speaker">Ed: </span>Thanks. Take care.
      </p>
    </div>
  </section>

	

	</Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Key Benefits of a Modern Hybrid Cloud Data Warehouse',
    meta: [
      {
				key: 'description',
				name: 'description',
				content: 'Analytics have become the lifeline for the enterprise business and as analytics become more mission critical, there are a lot of challenges that enterprises need to address and can do so with Yellowbrick.' }
    ]
  }
}
</script>



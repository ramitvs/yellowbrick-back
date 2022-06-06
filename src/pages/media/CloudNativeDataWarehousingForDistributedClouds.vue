<style scoped>

.hero {
  background-image: url(/uploads/images/generic-bg.svg);
  background-size: cover;
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
		<div class="w-full max-w-1200 mx-auto text-white z-10">
			<h1>The Top 5 things to know about cloud-native data warehousing for distributed clouds</h1>
		</div>
	</section>

	<section class="bg-white py-12 md:py-20 z-10">
		<div class="w-full max-w-800 mx-auto">
			<BaseWistia id="egaknb1f9h" />
		</div>
	</section>

	<section class="bg-white py-12 md:pt-0 md:pb-20 z-10 ">
    <div class="w-full max-w-1200 mx-auto px-8">
      <h3 class="accent-heading">Transcript</h3>
      <p>
        <span class="speaker">Justin Kestelyn: </span>Good morning, everybody. My name is Justin Kestelyn. I'm the Head of Product Marketing at Yellowbrick Data. And we have a fascinating webinar subject for you today. We're going to be discussing cloud-native data warehousing for distributed clouds. To help focus the conversation, we're going to try to, you know, distill it down to five or six things that we think everyone needs to know in the subject. And our presenter today is Mark Cusack, who is the Chief Technical Officer at Yellowbrick Data. Mark, thank you for joining us today.
      </p>
      <p>
        <span class="speaker">Mark Cusack: </span>Happy to be here, Justin.
      </p>
      <p>
        <span class="speaker">Justin: </span>And before we get started with the program, I just want to remind everybody that we'll spend about 20 minutes on Q&A with Mark, and we'll be saving some time at the end for your questions. Please don't wait until the end to ask questions. Feel free to fill up the queue as we go along as questions occur to you so we have a nice lineup of questions to cover by the time we get to that point. So Mark, before we get to the program questions, let's set the stage a little bit and I want to ask you to help explain why we're even discussing the subject today. Why is it relevant? Why is it important and why is it the subject of our webinar today?
      </p>
      <p>
        <span class="speaker">Mark: </span>Yeah, thanks, Justin. And I think it is relevant and it is important to really understand how the goalposts have moved for data warehouses. There's a whole bunch of emerging challenges that we see out in the industry today. You know, we're seeing increasing distributed data factors like data gravity, data latency, data sovereignty, all coming into play around how we want to manage our data and, you know, bring on top of that, the idea that we want to start to distribute workloads and place our analytics at the point of need and doing this is becoming increasingly difficult in terms of managing and securing all these different analytics workloads. And then there's still a requirement with the ever-growing explosion of data to do data warehousing and analytics at a performance of scale that you need to satisfy your business questions regardless of the location of the data.
      </p>
      <p>
        And, you know, there are emerging near real-time data and analytics use cases coming out now for which a lot of existing solutions just aren't really set up to deal with. And so when you do look at what's available out in the market today in terms of data warehousing, you know, you typically have an improvised and patchwork data architecture because all of the different stacks in different locations are different. And what this means is you have an increasingly inconsistent management experience and security models. If you're doing something in the public cloud, and then you're also doing something on-prem as well. There's a whole different sort of mismatch here going on and as well inconsistent pricing models everywhere. I mean, you go into the cloud, you've got a full-on consumption model where you're going to be burning credits by the dozen to just kind of resource space pricing. There’s on-prem, where it's more of an all-you-can-eat situation there, and getting your head around total data warehousing spend is becoming very difficult indeed in the current situation.
      </p>
      <p>
      	And you know there are inconsistencies in terms of performance across all of these different environments. And, what we think at Yellowbrick is that customers, what they really need out of a modern data warehouse is an integrated cloud-native architecture that is able to work at the very core of your data centers in the public cloud, all the way to the network edge. And to do this, you need to start to think about introducing unified planes of control and common security models here. So we want to kind of standardize and simplify that broader ecosystem here. And then you've got to sort of say to customers, you know what? You can consume data warehousing at the point of need, and you're not going to be penalized from a price to performance basis for doing that as well. And we know, you know, whether it's in the customer 360 in retail, or whether it's in predictive analytics in manufacturing, these near real-time analytics are becoming increasingly important. And the role of the data warehouse is going beyond just that descriptive historical reporting into being more operational in nature and a core critical business, a critical part, of your operations.
      </p>
      <p>
        <span class="speaker">Justin: </span>So let's take a step back and talk a little bit about some of the fundamental concepts that you just raised and starting with distributed cloud. So Gartner coined this term recently, I think it was just in the last year, year and a half. Can you explain what the key attributes of a distributed cloud are and how is it different from a hybrid cloud or a multi-cloud approach?
      </p>
      <p>
        Well, actually Gartner put it rather pithily when they define distributed clouds because they talk about distributed clouds fixing what hybrid cloud breaks. I talked a moment ago about the different stacks you'll have on premises from what you're running in your public cloud and the kind of impedance mismatch between these two things and the difficulties of managing them. And so Gartner proposed through distributed cloud, a new architectural pattern in which the public cloud software hardware and APIs and services get deployed not only in the public cloud but also in locations outside of the public cloud data centers. So this could be in an enterprise's own data center. It could be the network edge even. And you see examples of all of the main cloud providers offering this kind of opportunity here through things like AWS, Wavelength, et cetera, et cetera.
      </p>
      <p>
        And so we're seeing the public cloud providers kind of laying down the foundation of great groundwork for a simplified unified approach to cloud analytics. And so, you know, one of the things that binds all of these common stacks, wherever they're located together, is this idea of a single plane of control, or you should be able to provision analytics from a single pane of glass where you need it, where the data lives that's incredibly important. And you know, it gets more and more important. Again, another Gartner statistic. When you think about where the explosion of data growth is going to be over the next few years and Gartner predict that around 2025, 90% of the data is going to be generated outside of the public cloud data center or outside of your enterprise data center. And so, you know, the idea of having all of this stuff growing at the edge and being able to back haul it back to your cloud data warehouse, in a sense, it's a process. It is a non-starter there just isn't going to be the bandwidth to be able to do that. So I think distributed cloud offers simplification and a whole bunch of opportunities for new use cases and advantages that you can adopt as an enterprise going forward.
      </p>
      <p>
        <span class="speaker">Justin: </span>So what I'm hearing is that the distributed cloud concept has kind of arisen in response to the fact that data is becoming more distributed, not less distributed. We need our architecture, we need our data warehouses to accommodate that fact. What does Yellowbrick data warehouse specifically bring to this model? And I know that the cloud-native aspect is important here, but so is Kubernetes. Kubernetes is really the key, the word of the day here, explaining to us why that's so important.
      </p>
      <p>
        Yeah. And so, you know, first of all, Yellowbrick is a SQL data warehouse. You're firmly focused on providing the best price and performance wherever you want to deploy this, whether it's in the public clouds or on premises in your own data centers, or potentially even at the network edge, which is where we kind of grow into this distributed cloud story. And it is very important to make the distinction between what cloud-native means and what cloud-only needs. And cloud-native means that we've actually come up with an opportunity, a system, a software development stack that enables us to deploy anywhere but provide cloudly characteristics wherever we deploy. Everyone wants that elasticity. Everyone wants the easy upgrades, the low management overheads, but the cloud-native side of things, shouldn't be restricted to the public clouds themselves. You need opportunities depending on your business needs to point to a warehouse where you need it.
      </p>
      <p>
        And we made an early decision in Yellowbrick to build a data warehouse with microservices and container-based approaches in mind here. And our decision to use Kubernetes as the orchestration framework around our software means it's easy for us to pull it, to deploy Yellowbrick on these public cloud Kubernetes services like EKS and AKS and GKE, the main public cloud providers, but it makes it equally as easy for us to deploy on private cloud stacks like Red Shift, Red Hat OpenShift rather, or VMware Tanzu, for example. And so I think as these public cloud Kubernetes stacks start to get rolled increasingly into private clouds, we are well-placed to follow that roll out and deploy data warehousing again, where the enterprise needs it on a cost and performance basis alongside whatever they want to do with us within the public cloud.
      </p>
      <p>
        <span class="speaker">Justin: </span>So let's drill down on that a little bit. I mean, how does this approach differ from that of conventional cloud data warehouses, which, you know, I feel like those have been around for a decade now, and actually they haven't, but what is different about this approach specifically with respect to quote-unquote cloud-native architecture? You touched on it a little bit, but can you elaborate?
      </p>
      <p>
        <span class="speaker">Mark: </span>Yeah. Well, I mean, if I think about it, you said 10 years, right? So, I mean, all of the cloud data warehouses that you see out there in the market now are approaching kind of legacy status in terms of how long they've been around, right? And many, many cases, they are just simply weren't designed in the first place to operate in the cloud. They were taking an on-prem software stack and moving it into the public cloud with no real thought into the characteristics of cloud and how they differ from when you operate on premises, for example. But you know, one of the things I really want to focus on when you look at other cloud data warehouses is, in most cases, you don't actually own your data when you put your data into these data warehouses in the cloud. You're not running in your own VPC. You're putting your data into their VPC.
      </p>
      <p>
        They're paying for their cloud infrastructure costs. So if you've got bulk discount credits with your cloud provider separately, you can't apply those to your snowflake costs or your big query costs. They're getting the advantage of that in one way or another. So the data's in their VPC, it's not in your VPC and you don't get the opportunity to get those price efficiencies by applying your own discounts. And this is really kind of a vendor lock-in going on here in the public cloud as well. Either you end up tied to a particular cloud vendor or you end up tied into a position where you have to go cloud-only, right? You can't, if you want to repatriate workloads in future, because the business needs make sense. You don't have that optionality. If you want to run a hybrid scenario or just to be the cloud scenario, you can't do it.
      </p>
      <p>
        And so you're, you're really boxing yourself in from taking advantage of some of these future new emerging use cases. But, you know, it's not only our containerized cloud native approach to data warehousing that sets us apart really here. I mean, we have what we call an adaptive architecture here that gracefully adapts to whatever underlying hardware or cloud that you're running on to get the best price-performance. And we understand that like price performance is, is really dependent on that hardware, but we want to make sure that you get the best pricing performance out of data warehousing, whether you're running on a public cloud VM, within a private cloud on specialized hardware, or even on a five-year-old laptop, right? We want to give you that option to deploy anywhere. And, what happens is that when we find ourselves deployed in the public cloud, we really understand the underlying instance that we're running on.
      </p>
      <p>
        And we will take advantage where we can have some of the hardware acceleration features like NVMe SSDs on these instances in the cloud. And we will take advantage of that. And by doing so, we can get two orders of magnitude in terms of efficiency, in terms of our storage access performance over the other cloud providers. We take advantage of the fact that when we're running on specialized InfiniBand, we're using VBand drivers, but if we're running on unreliable public cloud networks, we even came up with our own unique house UDP protocol for data exchange between our NPP nodes in our cloud environment, which is around 10 X more performance than you'd get if you were just to use standard adapters and drivers out of the Linux Kernel. So we've taken a blank piece of paper and built this thing from the ground up with a thorough understanding of what we can squeeze out of the hardware wherever we run it.
      </p>
      <p>
        <span class="speaker">Justin: </span>So we've talked a lot about the technology side, but what about the use case side? So pivoting away from theory a little bit and talking more about application, you know, what are some of the industry use cases that really are going to benefit from the cloud-native and, you know, sort of performance-optimized approach that you've just described?
      </p>
      <p>
        <span class="speaker">Mark: </span>Yeah. And, you know, there's, there's a whole bunch of use cases I think they're going to come out of this whole distributed cloud idea when you could start with analytics, even at the edge and the obvious next thoughts on that is things like IoT applications and IoT analytics. So, you know, I think there are several use cases that are kind of people really noodling on at the moment. Some are more nearer-term, some are a little further away. So we talk about some of the nearer-term ones. We're talking to manufacturers about how they're now deploying operational data warehousing close to their production lines. And these production lines go through a lot of reconfiguration. They have sensors attached to them. They have, you know, typically, over the past, the sensors on these production lines that were driving the kind of limited analytics that they've had at these manufacturing sites and whether it's even packing coffee or something like that on the production line. They use these kinds of programmable logic controllers, primitive kind of devices for the monitoring of production line.
      </p>
      <p>
        And these are actually switching out to be much more sophisticated things that are running Linux and things that basically edge here. And so they're able to gather more and more information, more data from the east production lines, and they want to analyze this faster than they did before. Previously they couldn't do anything except do a limited amount there. But what they want to do is roll in edge data, warehouses, companies real-time streams from these new productionalized sensors into the warehouse, do more predictive kinds of things, looking for patterns of failure or predicting failure, but then still push historical data up to a central cloud data warehouse, the deeper analysis. So you've got these factory floor systems spread around the world, but you're gathering data for a more historical analysis. Another kind of emerging use case around this is of course, around 5g.
      </p>
      <p>
        And the idea that you're going to have ruggedized data centers out towards the edge with a hundred or so 5G antennas attached to them running real analytics to support AR and VR applications or support connecting our activities. And the idea, again, that you need the latency. You're not going to push data back to the central warehouse, do some processing with the machine back to the edge won’t work. You want to do your modal scoring and things like this at the edge. And so I think there's a whole bunch of use cases there about what you place in terms of analysis at the edge and center and this unifying, simplifying distributed cloud picture is going to make the situation much more tenable and achievable.
      </p>
      <p>
        <span class="speaker">Justin: </span>So we've covered a lot of ground. We talked about industry context. We talked about history, we talked about architecture, we talked about use cases. You know, what are the five things you really want people to remember about this subject, if you can possibly reduce it to that small number.
      </p>
      <p>
        <span class="speaker">Mark: </span>Right? I'll try my best, Justin. And so, you know, I think you've got to look at then when we talk about distributed cloud, you want optionality when you're choosing your data warehouse vendor. You don't want to get locked into a particular cloud, a particular cloud vendor. You want to be cognizant of the way your business is going to go strategically in the future. Is it going to move towards edge analytics, or are you going to really have a considered process around what you want to leave on-prem? What you want to move to the cloud and potentially what we want to move back as well. And so, that optionality in your choice of data warehouse, I think is incredibly important. If somebody makes de-risked field decisions for the future. And I think we talked about some of these new use cases just now that are emerging as well.
      </p>
      <p>
        So think about not only how distributed cloud and the cloud-native approach to data warehousing can simplify your ecosystem, allow you to run analysis on the point of need. But open up new business opportunities, I think here as well, but you know what, there are a few things that we hear. And one of the things that maybe the third point would be, don't let your legacy vendor try and convince you that lifting and shifting from them on premises, into their cloud solution is the thing to do and, and is easy to do because again, a lot of these legacy vendors simply took their software and shoved it in a VM in the public cloud without thinking that they're running on unreliable networks. The fact that storage is extremely expensive to run these things, not architected to move these things over.
      </p>
      <p>
        And so really ask them pointed questions about just really how scalable are your, you know, solutions in the cloud. How reliable are you compared to what we've been running for a long time today? And you know, that, that to me is really important. So, you know, also conducted a real deep analysis of that fourth point really on which data warehouse workloads are best suited for staying on-prem and which ones are best suited for going into the cloud. You might find if you've got a mission-critical 24/7 application, is that going to be cost-effective to run in the cloud or would you want to be a great data center. If you've got the elasticity requirements andvery variable workload then absolutely elastic model goes there as well, but also cloud vendors have big data warehouses say to you, Okay. Yeah, no worries. Just, you can just throw as much credit at that fixed workload as you want. You can just spin up some more data warehouses, virtual data warehouses. That's what you need to do.
      </p>
      <p>
        No, because these guys haven't addressed some of the fundamental inefficiencies in the public cloud hardware that they're running on and we have here, you know, and elasticity is great and we embrace that completely, but you know, there's other cloud vendors are also asking you to have an elastic wallet as well. And so really think about that when you're deciding when you're sorting choices going forward. And out of all of these, I'd say a lot of vendors will tell you that it's really difficult to migrate from an incumbent solution finally. Don't believe it. Automated tools migration have come in the market in the last few years. We've got some very strong partners in this area. It's a lot easier to move your workloads, move your data pipelines today than it has been over the years, you can get 80, 90% of that work done even more through automated tooling in terms of migration. The costs of migration are not as great as some of those incumbent vendors that might lead you to.
      </p>
      <p>
        <span class="speaker">Justin: </span>Awesome. We just hit 20 minutes, right on the nose for the program questions. So now we want to ask the audience questions, even more interesting. If you please, if you haven't already entered your question into the chat window, please do that now. And we will get those to Mark. While we're waiting on those, I actually have a question, cause I think this is something that we have heard from customers and analysts and other people in the community. And that is the question of the difference between a distributed data warehouse and a data warehouse for distributed clouds. They sound like the same thing, but they're really not. How is this different from a distributed database or a distributed data warehouse approach if it is different?
      </p>
      <p>
        <span class="speaker">Mark: </span>So you asked a great question. So, I mean, a distributed data warehouse takes the idea of a single instance of a data warehouse and having components, sub-components of that one warehouse spreading to different geographical locations. And so you've kind of got a very, very distributed single instance of the data warehouse, but data warehouse for distributed clouds is talking about single instances. They're not distributed across clouds or anything like that. You're deploying single instances of your data warehouse in different cloud locations or at the edge. So, that's the main distinction between the two.
      </p>
      <p>
        <span class="speaker">Justin: </span>And what about federated queries? I mean, you would think that that might be something that would be kind of inherent in this approach. Do you feel like it is? Is that a requirement for this model or not? And you know, how does Yellowbrick address that if it does?
      </p>
      <p>
        <span class="speaker">Mark: </span>It is relevant and there's actually a lot more to distributed cloud than data warehouses by the way. I mean, there is an entire data management stack of services that need to think about how they are going to deploy in a distributed cloud environment. So I'm talking about cataloging security and privacy and governance capabilities, as well as things like query federation. And so you can imagine overlaying a query federation tool to enable you to push down queries to different data warehouses in different locations and giving you that again, that kind of feeling of a single point of control and pane of glass, regardless of where your data warehouses reside. But there are cautions to that story as well, because you've got to make sure you pick the right tools. And we partner very deeply with Denodo for example, who do a great deal of effort in pushing down a workload to the endpoint data warehouse rather than pulling it all data back to central point and processing that because you've got bandwidth latency, egress charges that come in there that you kind of want to avoid. So federated queries across the suite of clouds are great, but you've got to use them for the right use case I'd say.
      </p>
      <p>
        <span class="speaker">Justin: </span>Can you talk a little bit more about this adaptive architecture that you referred to previously in the context of price-performance? What does that mean? Like, you know, what are some examples of being adaptive or being infrastructure aware with respect to how the database can take advantage of that environment?
      </p>
      <p>
        Yeah, so I kind of mentioned that a little bit earlier around NVMe SSDs. And so Yellowbrick was designed from the ground up to do really, really innovative stuff about reducing the path of data for the takes from the storage layer, all the way to your CPU. And so, you know, when we run on NVMe SSDs, when we run queries, as the query is asked for data from the CPU, for example, then what we're actually doing is routing data directly from the SSDs over the PCI buses that even exist within these cloud instances, right, straight into the L3 cache of your CPU. We bypass DRAM, we bypass main memory and pretty much every other data warehouse vendor on the planet uses DRAM as a buffer. And so when you run a query, data goes from your SSDs into Ram, from Ram into your CPU.
      </p>
      <p>
        And we cut out that middle step completely at Yellowbrick, and we have a unique IP that allows us to do that. But it goes much beyond that with our adaptive architecture, because you also need to think about how you avoid cache misses at CPU level to improve efficiency as well. And again, a lot of the other vendors will say, just throw more boxes on it, throw more boxes at it, but we're really laser-focused on getting the most efficient use out of any underlying hardware platform we find ourselves on. So this idea is, you know, we will do things. We have our threading model in here. We pin memory down. We’re new memory aware, depending if the platform we have has a new memory architecture there. We look at what network drivers are available.
      </p>
      <p>
        And then if we can do something better with our own drivers out of the kernel then we do it. So we have this idea of what we call an adaptive bypass kernel approach here. So when we spin up our software in a Linux Kernel, we actually tell Linux to get out of the way. We're going to manage memory, the rating, device drivers, everything, depending on the platform we're sitting on. If we're sitting on a platform that's less capable, I mentioned, a five-year laptop, then Linux drivers take over more. And so we kind of gracefully degrade based on the capabilities of the platform that run us. So we'll always attempt to squeeze the most out of that platform without our first request is just scale out. So...
      </p>
      <p>
        <span class="speaker">Justin: </span>So I think we probably have time for one more question. And why don't we turn to the control plane? Cause we mentioned that the unified control plane being, you know, a pretty key requirement here, you know, what is the Yellowbrick’s vision there? I know a Yellowbrick Manager obviously is our offering there. Can you describe a little bit about how it addresses some of the issues that we talked about today?
      </p>
      <p>
        <span class="speaker">Mark: </span>Yeah. So in the spirit of distributed cloud in a single plane of control, what we've developed to Yellowbrick is this application called Yellowbrick Manager, which allows you to provision Yellowbrick instances wherever you want and manage those instances and access those instances from a simple web application. And so, you know, we've gone a little bit further than this, and you can actually see this if you sign up to our cloud test drive. Actually, you can kind of experience this first hand if you like, the Yellowbrick Manager software. And the first sort of instantiation of this has really been aimed at the developer and business analysts and self-service data scientists, citizen data scientists, who we want to rapidly do some development, some ad hoc analytics.
      </p>
      <p>
        We provide them within the Yellowbrick Manager with a SQL manager that they can rapidly run SQL against Yellowbrick running in the cloud. They can load their own data out of S3. And we also, actually on the cloud test drive bunch, provide a bunch of sample data sets to play around with. So you can get a real feeling for the performance of this thing. But that Yellowbrick manager is our kind of first response to distributed cloud and a single point of control. So you can imagine going forward, you've got data warehouses that are running in private cloud, in public cloud, or even at the network edge, you'll be able to stitch these together and replicate data between them or set up orchestrated from the centralized control.
      </p>
      <p>
        <span class="speaker">Justin: </span>Excellent. So let me see if there are any more questions from the audience. If you have any other questions, this is your last chance. Give it a few seconds. I think that's it. Mark, thank you very much for joining us today. And I want to thank the audience as well for tuning in, and if you're interested in more on the subject, you can learn more at Yellowbrick.com of course. Look for our distributed cloud landing page. There's a URL on the final slide here as well, where you can find it more easily. Thanks again. And we hope to see you soon at our next webinar. Cheers. 
      </p>
      <p>
        <span class="speaker">Mark: </span>Thanks, everyone. Bye.
      </p>

    </div>
  </section>

	</Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'The top 5 things to know about cloud-native data warehousing for distributed clouds',
    meta: [
      {
				key: 'description',
				name: 'description',
				content: 'The Gartner Top Strategic Technical Trends for 2021 report suggests that the distributed cloud model will emerge to address the explosion of data growth, particularly at the network edge. But to take full advantage of the benefits that distributed clouds offer, we must rethink our approach to how data is managed, processed, and analyzed in such a heterogeneous, geographically separated and logically interconnected environment.' }
    ]
  }
}
</script>




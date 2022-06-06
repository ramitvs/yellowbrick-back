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
			<h1>Why Cloud Alone Won’t Save Your Data Strategy</h1>
		</div>
	</section>

	<section class="bg-white py-12 md:py-20 z-10">
		<div class="w-full max-w-800 mx-auto">
			<BaseWistia id="zckew47ryg" />
		</div>
	</section>

	<section class="bg-white py-12 md:pt-0 md:pb-20 z-10 ">
    <div class="w-full max-w-1200 mx-auto px-8">
      <h3 class="accent-heading">Transcript</h3>
      <p>
        <span class="speaker">Brian Bulkowski: </span>Hello, welcome to Data and Analytics Live 2020. My name is Brian Bulkowski and I'm the Chief Technology Officer of Yellowbrick Data. I'm here to talk today about data strategies and especially the impact of cloud on your data strategy. In case you haven't heard of Yellowbrick, we’re a data warehouse company. We have both cloud and on-premises solutions. We've been around for about five years, solving some of the most demanding data and analytics problems at companies that are name brands around the world. My Twitter handle is @Yellowbrickdata. And so feel free to tweet during this event or to check out the Twitter handle for the conference. So I'd like to spend one second and think about the amazing amount of trajectory that's happened within the database market since the earlier days, back in the seventies and eighties, all the way through to now. In particular, let's think about the onset and beginnings of MPP massively parallel data warehouses, and then how that transitions to the world of SQL on Hadoop and data lakes, because I'm going to talk a bit quite a bit about data lakes and how that strategy of using Hadoop has transitioned to the data lake house, as well as analytics environments.
      </p>
      <p>
        After that, it was the first beginning of the cloud data warehouses and the on-premise data warehouses, as well as the data warehouses created by outside providers. I believe the next phase, the coming phase, is the hybrid data warehouse and a hybrid strategy really is one that allows you the maximum flexibility going beyond having one cloud provider, but really into multiple cloud providers, multiple locations, on-premises and own data centers working in tandem and harmony together. And that's a data strategy that's really going to, I think, stand the test of time and be a great part of the future. I don't think I have to, or could possibly overemphasize the benefits of the cloud in today's strategy. I really liked this Jamie Dimon quote because he really says it changes everything. It changes how you manage, how you not just write code, what agility means, because if you can bring up a data warehouse instance, if you can bring up even a multi-hundred terabyte instance for some experimentation and do that on a basis of, say, a few weeks or a few months, simply to be able to prove out new cases, you can do so much more with so many fewer people.
      </p>
      <p>
        That's what your competitors are doing if you're in this space. The elasticity created by the cloud, the ability to try new and more challenging data cases, and it, the cloud, has really changed and is changing a majority of what's happening in analytics, and at Yellowbrick, we couldn't be more pleased to be a part of that transformation. So let's talk for a second about the data lake, because there's some very interesting ideas and trends about what's happened in the data lake. When the data lake was first implemented, it was really about the ability to use the Hadoop-style technologies that were prevalent within internet companies and take that to the enterprise then allowing the kinds of scale and the kinds of data processing to compete with those internet companies. However, what I'll propose to you today is that the kind of processing needed for analytics, even the large-scale analytics companies here in Silicon Valley, where I'm based, no longer really use the Hadoop platform to do that.
      </p>
      <p>
        And so instead what the data lake really is for them, and I propose for you who have perhaps been on a data lake journey, is the great thing about the data lake is the incredibly cheap storage that it provides and the ability to simply store just about every business flow that could come into your business. And the incredible benefit of that is once you're storing every little piece, well, if you have a new analytics idea, if you have a data scientist, they can essentially scoop into the data lake and start processing that data and find new insights for you because that's what it's all about, this new world of analytics, finding the new insights and the new patterns that are going to make business sense for you. So instead of thinking about the data lake as a SQL processing environment, I propose that today, the data lake is most best thought of as the incredibly inexpensive storage that's part of the cloud.
      </p>
      <p>
        In particular, I was trying to think this through for a different talk at a different conference. And I used to think of an EMC array, for example, as data, both data storage. And you would think about spending say $35 per gigabyte per year on storage. And the cloud providers have just busted that wide open, right? So today you think about spending $10 per terabyte, as opposed to, per month, as opposed to $30 to $5 per gigabyte. It's a completely different world. With that world comes the ability to simply retain more data and to build a data processing architecture that is more flexible and involves more components. In particular, I’d like to give you an idea that I've been thinking about recently, which is this idea of best of breed cloud technologies and in particular, it's happening first in the data lake and in cloud storage.
      </p>
      <p>
        Now, what we're used to is we're used to those big cloud providers, AWS and Azure and Google, and those being really, the only games in town, there's possibly a few other providers you might consider, but if you have a mandate or you're mandating to your team, go to the cloud, you're thinking of the public cloud and you're pricing out those folks. What you'll see on this slide, are there three competitors that I've noticed? One of them is one, that's a partner of ours. We're using them partially for our internal cloud. We're very happy with them so far. This isn't an ad for them though, so I'm not going to mention their name. But once you start being able to specialize, one particular cloud provider say AWS, the largest in the market, they have a lot of options for S3, but then you need these guys, Back Blaze and Wasabi and RSTOR, come along and they say, well, we can provide it for less.
      </p>
      <p>
        We can give you a better, because we're storage experts. We're the folks who founded the storage layer at Facebook. And we're going to give you a better price. We're going to undercut AWS. We're going to undercut Google, give you better service, better performance at a fraction of the price. And then you're like, wow! Let's say that architecture takes hold, what if I start thinking about the cloud not as I have a primary cloud and maybe a secondary cloud, but I'm going to pick best-of-breed components, just like a software architect would with a software stack. I've got this particular, no SQL store, this particular relational analytics engine, this particular operational store. And well, maybe I have compute hosted with and provided by the primary cloud providers. Maybe I'm going to pick the best-of-breed for storage. And I'm going to have this kind of storage here and this kind of storage there.
      </p>
      <p>
        That is the best-of-breed cloud trend that I'm seeing. I'm super excited about it. And I think you should look forward to it and look forward to the architectures that you're proposing inside your company. Now, one more interesting point about this is that data egress fees are one of the hidden costs. I think you guys, everyone, here knows that data egress fees are one of those thorns in the side, right? Your data goes into a cloud. It has trouble getting backed out, the cost of data egress. Interestingly, the folks doing these newer storage systems don't have egress fees. That's one of their competitive advantages. So you can get your data in and you can get your data out. So I think this idea of being able to pick and choose the layers and the providers that you want among multiple providers might have huge changes and huge differences for how you think about data and how you think about your data architecture.
      </p>
      <p>
        So let's talk for a moment about cloud databases. So I'm a database person. I've been making databases and database companies now for quite a few years. And as I was thinking through the issue of cloud databases, this chart really captured it for me. So let's say that you're an architect or a technologist. And, and you're trying to think about, well, what's the best architecture to bring to a new system. You've really got two primary choices when you're thinking about cloud databases. Either you're going to implement your database on top of the cloud virtual machines by the cloud providers, or you're going to build an engineered solution by which I mean, what we used to call, right? And instance type, a specific hardware type, that really is the new appliance. And so when you're thinking about this, you say, well, let's say I am AWS, and I'm going to provide a new database like Redshift, their premiere analytics warehouse, am I going to use my own virtual machines?
      </p>
      <p>
        The answer is, of course not, you wouldn't do that. You're going to pick and choose the hardware. Amazon has made very interesting recent announcements about their new Aqua processor this and that. It's all engineered solutions as well it should be. Engineered solutions give you predictability. They give you performance and performance turns into a lower price. We know that from the Nateeza days. The problem is that those systems are hard to build. They require millions and millions of dollars worth of investment to get the company off the ground to build a great integrated hardware and software solution. Now, the easier way to go is to use the cloud virtual machines. You get the level of flexibility, the easy spin-up time, the scalability inherent within the cloud systems, and virtual machine systems. And there's really two choices underneath that.
      </p>
      <p>
        Either you're choosing a third-party service that is running on top of those cloud virtual machines, or you're rolling your own. You've chosen Presto, you've chosen some other scale-out system. Maybe you're trialing a Hadoop system, anything Greenplum runs great on virtual machines. So if you're using cloud virtual machines, what I propose to you is you're never going to match the scalability, performance, and predictability of an engineered solution. And I think the history of computing and databases just shows that time and time again. It's harder to build the ones on the right, but they will always win in the end and be extraordinarily competitive and outcompete the ones on the left. So if you have the wherewithal, there are some special business cases where you might even build your own database. That's not unheard of. There are special-purpose brand name companies that have made their living, building their own databases, not just the Googles of the world, not just the Amazons and Facebooks of the world, but even, even other companies.
      </p>
      <p>
        I'm unfortunately under NDA with a few of them. So it's hard for me to give you some specifics. I was able to find specifics of Goldman Sachs's global key store. They have an amazing key store, a key-value store, a distributed store that they use globally to inform all of their transaction decisions that they've written from scratch. They consider that to be one of their compelling business advantages in times of stress is that they have a high-powered, distributed database, even if network links break because that's when the most money is made. Pretty interesting problem. However, you better be of the scale of a Goldman Sachs or a Facebook or a similar company and have a really unique, compelling ability to build your own database. If you're running on those virtual machines, you are going to be at a disadvantage compared to engineered solutions.
      </p>
      <p>
        The problem with, and the reason is pretty clear, right? And so often as you've been building these and I've built a few databases now, the first thing that gets you is their instance types, which are simply not right for you. The cloud providers will lock a particular ratio of CPU to memory, to storage. The fact that your storage isn't truly persistent and high performance, we're getting more of those these days. But the predominant architecture within the cloud is that your local storage is simply not persistent and that doesn't lead to the most effective technical solutions. So there are all of these reasons, there's the virtual machine tax that occurs, especially to the network. So much of the cloud is simply about the network. It's about the ability to move the data between machines and a distributed system. And yet those virtual machines have encryption and security layers that add an awful lot.
      </p>
      <p>
        So let's talk for a second then about what these cloud-engineered solutions, or as I was saying that the next generation, it could be. And the first thing you start to think about is if you hear appliances, you know, nobody wants appliances. Gartner has said the appliance dead cloud is the answer. And if you had an appliance, you would require your own data center. Well, not anymore, if you think of a big query or a synapse, you've got something that is an engineered solution, and it is now available as a cloud service, you simply press a button, you dial it up, it might take you some time to get it provisioned. I recently had a case with one of the major cloud providers where I think it took me three weeks to get a large size warehouse.
      </p>
      <p>
        But there you go, it's available as a cloud service. Now, the other thing you think is well, okay. That's great, Brian, but what if I have an on-premise need? This is where the hybrid cloud comes in. So if you think that the on-premises solution, the cloud solutions of these engineered solutions will never be available on-premises, I think you might be right. Amazon has been talking a big game with their outposts solution for awhile, but they've never really talked about moving systems like their Aqua processors, their next-generation instances for data analytics as part of Redshift into those containers. And I certainly spent some time taking a look at those and, and that's not really what they're there for right there. They're really about bringing some of your workloads in, but not some of their most efficient and highest power workloads.
      </p>
      <p>
        So only with a hybrid solution can you take that engineered solution and move it on-premises. That's what hybrid database providers like Yellowbrick are providing. Now, some people have said to me, well, Brian, it's not scalable. Now, one of the great things about a scale-out architecture, where you simply are adding more virtual machines, as opposed to a system with a certain amount of node counts and a certain amount of racks and some limits on, for example, a Redshift I think has at there's a particular cluster size that's the maximum. That's not true with a scale-out software solution, but the difference is that a 64 node, say, warehouse is going to simply have so much higher performance because data and compute are much closer together. So in that sense, it is far more scalable to use an engineered solution. So I think there's a lot of great benefits.
      </p>
      <p>
        And when you start thinking about a cloud solution, which is really an engineered solution, it's using purpose-built hardware and software working well together, you really get to a world where data processing, you can do so much more. This brings really to the core idea of this talk. And if you have one idea that you do take away from it, I propose this one slide that says, you really do want to have a hybrid data strategy. One that's not locked into a certain cloud provider for so many reasons. The primary reason is flexibility. You want to be able to take your application teams and say, well, choose the cloud. If you need AI, look at the AI interfaces. Each one of them has their strengths. A lot of people say Google for AI. There's some really interesting AI possibilities, both in AWS and in Azure as well.
      </p>
      <p>
        So pick that, have your application team that knows the best, which ones they're going to use and allow them to choose it. Now you're processing layers for analytics, at least your SQL analytics. There, you also need to be able to provide the flexibility of choice, choice of locality for data sets that for regulatory reasons, say you have to be on-premises or for data locality reasons should start on-premises and maybe have redundancy in the crowd or burst to cloud capabilities. And then, again as I was saying earlier, looking at that storage layer, the storage layer is also becoming more hybrid, more capable, and the ability to mix and match in a best of breed fashion, your processing analytics capabilities, and then also your storage layer. This is the kind of strategy that's going to help your company because it gains the true agility of the cloud.
      </p>
      <p>
        You're not moving to one cloud and then being straitjacketed by the constraints of it, and possibly being helped by some of the vertical integration. But then what happens when someone says, oh our competitor is using AI, but it's only available in this other cloud. Well, that's a problem for you. So what I propose is this best-of-breed hybrid strategy is really a great way to think about data layers. Cheap storage so you're keeping all your storage and then picking the best of the correct analytics system for processing that data as well as then picking a compute layer that really works with the tools that you need because each one of them has their strengths.
      </p>
      <p>
        Now, one thing that I hear about when people say when I start talking about this idea of hybridization is that point I was making earlier about the cloud transfer costs and how every single cloud has this amazingly complicated list of how you get data from here to there and how many pennies per gigabyte of each individual transfer. And I hear a lot of, you know what, we're going to stay in one cloud simply because of these diagrams. What I'm going to tell you is you really are going to have to look under the covers. And so it's complicated, but first of all, the best-of-breed cloud, these guys are breaking the mold. And so what they're doing is they're saying you shouldn't have to worry about that. We're going to win your business, not because we're locking you into a verticalized solution, but instead, because we have the best storage layer on the planet, we can manage by drives, run data centers better than anyone else, and we're not going to lock you in, in terms of cloud data transfer prices.
      </p>
      <p>
        So what I propose is that this, it’s going to be hard going through this diagram. However, it's not as bad as it looks and with the coming best-of-breed cloud, we're going to see solutions in this area. So I worked for Yellowbrick as the CTO. And let me tell you a little bit about what we do and how we solve the solution. We have a solution which both exists in every single cloud in our own data center. It's the same kind of engineered solution that provides the best possible performance and price performance. It's based on flash where a flash native company is now a hybrid, because the engineered solution that we have is the only one I know of in the open market that can go head to head and win in terms of price, performance, and scalability against the best of the cloud-native cloud-specific providers.
      </p>
      <p>
        And, you know, forget the guys on virtual machines. They're not even in the race. So we have our own cloud, but we can also put a Yellowbrick within a data center and link them up seamlessly through replication. This is the true hybrid where not only are you in the cloud, you also have the possibility of being on-premises in a data center, in a location with some data sets that need to and we think that that's really the wave of the future for data processing. Now, let me go through a couple of quick examples, perhaps gives you some ideas for the business problems that you have and are facing today. You may have a data lake that's underperforming. I hear that a lot. Well, we built a data lake and I can't get anyone to use it because it's too slow and queries simply take too long.
      </p>
      <p>
        Well, that's not so bad. It's not the end of the world because you have the data, you have it in, in places where you can get to it. It's time to augment. With data lake augmentation, you're going to be putting in individual new consumption zones, essentially analytics layers, that allow you to be able to have staging analytics areas where compute and data are close together. You've still got your cheap storage layer. That's a data lake augmentation that'll allow you to now present the data sets that your customers, your business users need inside your company. So that's an effective way to start making that data lake work for you. Here's another idea that I've mentioned as an aside a few times, which is this idea of a consumption zone with a consumption zone. What you're really doing is saying I've got my underlying data lake, but I need processing.
      </p>
      <p>
        I need SQL processing. I need the ability to be able to step in and drill down into particular tables. And, oh, by the way, I don't want to load it out every single time. This is a long-term data set. So I have the ability to insert and keep fresh perhaps through ETL tools throughout, perhaps through Kafka streams and similar into a consumption zone. I have a particular business unit that's tied to it and still they're able to get and to make use of the information that's within the data lake itself. So that's a consumption zone model where you're laying out something that might smell to you like a data mart, but really a business-specific use case and business-specific capability that you can try and track back to that business user. But it's still working with your data lake as an underlying source of truth.
      </p>
      <p>
        Now, what about the cases where you have silo data within your company? That's another case I hear a lot of where some particular business unit has a particular set of data and they've created a sort of a mini lake. And the problem with those is they may solve a particular business problem, but they don't allow you to do the next generation of analytics where you're really bringing together those different data sources and finding the correlations between them. Cause this one's over here, that one's siloed over there. So again, as an additive process, you can say, well, hey look, all your business users, let's talk about a cloud strategy that allows us to bring in a new data layer that is really big. And that's one of the benefits of the cloud. You've got a petabyte here. You've got a petabyte here. You've got a half of a petabyte here. If you have a scalable cloud system like Yellowbrick, you can bring that into a single analytics area where it can be processed. The source of truth might still be out there, right? It's always good not to rock the boat and be able to have an incremental strategy to be able to talk about and bring new ideas into the company. And so that multi-lake, that aggregation effect, that's one area that I have seen a few of our customers really reap some amazing business benefits out of these kinds of cloud data strategies.
      </p>
      <p>
        So hopefully this talk has been interesting. The idea of the best free data lake, the idea of the hybrid cloud, really unlocking even more flexibility than you get today, how to have a single provider cloud. My name has been Brian Bulkowski. Please enjoy the rest of the conference and have a great day.
      </p>

    </div>
  </section>

	</Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Learn about cloud database architecture decisions",
    meta: [
      {
				key: 'description',
				name: 'description',
				content: 'Why cloud alone won\'t save your data strategy'  
			}
    ]
  }
}
</script>



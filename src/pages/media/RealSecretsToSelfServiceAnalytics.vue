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

.speaker {
    font-weight: bold;
  }
.timestamp {
  color: #00c3cd;
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

</style>

<template>
	<Layout>

	<section class="hero py-20">
		<div class="w-full max-w-1200 mx-auto text-white z-10 px-8">
			<h1>The Real Secrects to Self-Service Analytics </h1>
		</div>
	</section>

	<section class="bg-white py-12 md:py-20 z-10">
		<div class="w-full max-w-800 mx-auto">
			<BaseWistia id="vxlklnu9wi" />
		</div>
	</section>

	<section class="bg-white py-12 md:pt-0 md:pb-20 z-10 ">
    <div class="w-full max-w-1200 mx-auto px-8">
      <h3 class="accent-heading">Transcript</h3>
      <p>
        <span class="speaker">Gary Orenstein </span>So there is absolutely no question that the business intelligence market is on fire right now. We've seen a tremendous amount of activity in the last few days. Last couple of weeks, Google paid $2.6 billion for Looker. But then not to be outdone by that one, we saw Salesforce pay a whopping $15.7 billion for Tableau. And that has just put a real fuel into the fire of the business intelligence market four or five, one research just yesterday or the day before it came out with a report on why the famous five might prompt other BI deals. They note that self-service data visualization and exploration has become a baseline capability for analytic platforms. We're going to share a copy of this report through the go to meeting chat later on in the presentation. So everybody will be able to get their own copy of this very recent research.
      </p>
      <p>
      	If you know, do it, if you do a search for self-service analytics, one of the things that come up early is this a quote from Gartner about self-service, you know, being, you know, critical and organizations need to find a way to straddle the needs of both the IT world and the business world. And ultimately this comes down to a real balance of control and agility. And so, you know, with that self scaling, self service involves a lot of trade-offs trade-offs between the IT team and the individual, and this is nothing new in the operations of how large businesses operate, but it's important for us as we pursue these endeavors to pay attention and navigate appropriately. So an interesting report came out recently from Dresner advisory services on the strategic initiatives you know, critical to business intelligence and of note where, you know, the top two reporting and dashboards and user self services on there.
      </p>
      <p>
      	But it's a little bit further down. This whole report was published recently in an article in Forbes magazine. The link is down below. I'm a visual person. So I wanted to look at these a little bit more closely in a visual way. And, you know, you can see that the data integration and reporting aspects and dashboards are, you know, the top three things self-service is ranked, but a little bit further down as is advanced visualization, data warehousing and data discovery. All of these initiatives are understandably interconnected and we'll dig deeper into a few of these later on in the course of the presentation. So I had five major points that I wanted to cover in terms of the real secrets to self-service analytics. And I'll go through those next. The first one is, you know, thinking about how enterprises can architect for self-service success and, you know, lo and behold, it's not complex.
      </p>
      <p>
      	And one of the most important things is to have a data handbook and to have data stewards. And I often say around the office that the tools don't solve the problems, but the people solve the problems and those people have to be on the same page. A great example of this is something that Airbnb shared late last year on their data university and literacy training. This was via blog posts, one of their employees on LinkedIn, and what Airbnb found is after putting people through this data university training, they had a number of benefits. One big benefit was that their data scientists team saw a 50% decrease in ad hoc requests. When the teams they support went through this data training. So that can be a, that's a huge decrease in the needs as you're enabling more people to be quote unquote self-service another benefit they saw was the increasing use of CQL and ongoing use of CQL among the teams that went through this training, which points to more frequent use of data, more frequent use of analytics.
      </p>
      <p>
      	And as we all hope that our business decisions as an outcome of that another interesting quote that was shared recently, just this month from NICU Decker, who is a Gartner analyst talking about data ops, we might be familiar with dev ops. Now we're talking about data ops. It isn't the integration and the quality of the tools. The core is a shared empathy between data managers and data consumers. That's it. And so, you know, this first point is really solving the problems is a people management and organizational challenge that can never be left out of the picture.
      </p>
      <p>
      	The second big topic to success in self-service analytics is understanding the role of data, warehouses, databases, data lakes, in the analytics equation, and having a common understanding of these terms in your organization. You know, one of the things I've found over the years is that anybody who's been in the data warehouse or database world for some time has their own definitions. And it can be very challenging to get everybody in sync on this. From my perspective, I look at databases primarily for transactional applications, data warehouses, primarily for analytics and data lakes seem to be finding their place primarily for storing unstructured data, which they can be very good at. You know, there's some batch process analytics in there, but I think what we're seeing from a market perspective is that data lakes are a wonderful place to store data in a challenging place to process data.
      </p>
      <p>
      	And that's giving rise in part to a resurgence in the data warehouse market. There's a fantastic analyst at Gartner named Henry who has this explanation of the logical data warehouse, which Gartner uses as a way to delineate how you would incorporate both a data warehouse and a data lake in your overall architecture. Henry talks about job number one, being the tactical and strategic query on structured data, guaranteeing data quality. And I think most importantly, serving large numbers of varied users that contrast quite differently from data lake, a secondary objective to handle large volumes of unstructured data, a very low cost of storage and processing, and a much smaller number of users. Of course, job number three is bringing all of that together into a coherent system, a variety of ETL and data integration tools used there. But I think what's really important to note is there's a difference in the data warehouse, focusing on large numbers of varied users and the data lake of focusing on a smaller number of users.
      </p>
      <p>
      	And, and that leads me to the conclusion that, you know, the data warehouse being that place for a large number of your users is the place to focus for self-service analytics. And even though there may be some discussion about enabling self-service on a data lake that is generally far more complex and far more advanced than what a large number of varied users can, can learn and attain. So that's a little bit of understanding there and, you know, there was another recent discussion and I love this quote from Peter Wang about how data lake is easier to spell than we just realized. Schema on read is deferred technical debt. You know, this idea that we'll just store it and, and deal with it later, I think is reaching a climax where it may not be quite as easy or as simple as, as people once felt.
      </p>
      <p>
      	Let's jump into the third point in the abstract, which is where the primary business intelligence platforms fit. And I did a quick search and I found this list on the Gardner website about their peer insight capability where you can review different tools. And these were the top seven or eight tools that people had just reviewed. So it's a rough gauge to popularity, but by no means definitive, when we look at our world from the perspective of Yellowbrick data this is the picture that we frequently see, you know, from an enterprise perspective Tableau and micro strategy tend to dominate the current marketplace, even though you'll see at the bottom line down below, there are still remnants of these age-old solutions, both Hyperion business objects, and Cognos were three acquisitions that happened in 2007 from those companies since then quite a number of new entrance to the BI field have emerged.
      </p>
      <p>
      	Looker obviously recently acquired by Google, which has a fantastic web friendly analytics platform and their own version of Looker ML, a markup language for sequel Microsoft power BI is ubiquitous. One of the things in the media and all of this chatter around Looker with Google and Tableau with Salesforce, as many people fail to see that Microsoft is making the basic version of power BI free for Office 365 users. So I expect that to really become more prevalent over time. There's others mentioned, well, just a little bit of differentiation from our perspective on micro strategy and Tableau, we see micro strategy to be a really great overlap with high-performance data warehouses because of their approach to be constantly querying live data. Tableau has a variety of operational methods but there is a lot of push to empower the desktop user with their own copy of cached data, which may or may not always go back to the database.
      </p>
      <p>
      	So there's a little bit of a difference there. And I think the takeaway from looking at this overall market is it's unlikely that any enterprise will be, you know, fulfilled with just one business intelligence tool. So we have to be prepared to support, you know, more than one, let's jump onto the fourth big topic in the abstract, which is building analytics capabilities for multiple users in groups. When we think about this at a high level, what we're aiming to do is serve more users, more analytics simultaneously. And to do that, we need consistency with the data handbook. And I use the data handbook loosely as a term for getting people and processes and organization together. So that might be an example, such as Airbnb, where they built a whole data university program. It might be an initiative where you're just looking to get some common definition on data models.
      </p>
      <p>
      	It might also be a group that does best practices for SQL analytics in our company environment. Along with that, we want to aim towards consolidation with fewer systems, and this will help with consistency as well. We need to make sure that we have the performance to serve all the groups needed. And in order to do that, we need workload management to ensure prioritization. So today in order to solve a variety of performance and workload and sort of organizational separation, we frequently have these disparate data silos and this while it does perhaps sway a little bit more to allowing groups to serve their own needs, it sways a little bit away from the goal of having enterprise consistency and simplicity. So as we consolidate these workloads into fewer systems and that same query load is coming onto a consolidated platform, we need to make sure that we have the workload management harness in place in order to mitigate that.
      </p>
      <p>
      	And I'll come back to a specific example of that with Yellowbrick a little bit further in the presentation. The last piece of these five principles is that we really need to understand the analytic personas and how to, you know, set up collaboration and best practices. There's a fantastic blog post I found from Nidra [inaudible]  who's BI led an investment management company on the self-service BI hoax. And I'd highly recommend that folks interested in self-service BI take a look  because he presents a very telling  discussion about the pros and cons. Again, if you're enabling the individual user, your eye isn't necessarily on that of enterprise scale and enterprise collaboration, if you're coming from the IT team's perspective, you really want to make sure that you can serve the maximum number of users with the fewest number of individual needs. And there's a lot of inherent trade-offs at every step of the way.
      </p>
      <p>
      	And this blog post is a great outline of that in particular, one area that he digs into deep as these two personas of ad hoc query conversely with regular reporting and differences, being that the ad hoc world is investigative. The reporting world is predefined. One focused on, you know, freeform queries from the business user and other folks on business critical and phone KPIs. One's very active. One can be very passive once again, very unique to the user. Whereas regular reports are expected to look the same, of course the numbers change, but the reporting style and format is intended to be consistent. And so there's this trade-off between the individual focus and the enterprise focus, both of which are important and need to be kept in context for the bigger picture. In my opinion, the bigger picture is how do we reap the benefits of self-service analytics to serve the whole enterprise?
      </p>
      <p>
      	And so to some degree, we want to develop a pipeline that allows us to go from individual user, doing their own exploration to productization, which might include things like query tuning, data, validation, security FLAS, and ultimately bringing that to global deployment. When we think about implementing all of this, we at Yellowbrick data, being a data warehouse company C an important part of being the data warehouse itself and setting that right foundation. So I just wanted to cover a couple of items there. One is that Yellowbrick data originated to fit. Key enterprise needs everything from being always on and available to handling ad hoc sql queries, delivering correct answers on any schema, scaling the petabytes in particular handling mixed workloads, which is a critical capability of all of this activity and supporting thousands of concurrent users. When digging into the data warehouse capabilities delivered, doing all of those things together are what makes Yellowbrick, the ultimate data warehouse at a high level.
      </p>
      <p>
      	We want to help our users serve more analytics to more groups and users concurrently with fewer systems. And so on the ingest side, that's going to include supporting real-time feeds such as an IoT pipeline from Kafka or change data capture from an old TDT OLTP database capturing hundreds of thousands of rows per second, while simultaneously doing bulk loading. Some of our customers are loading data at up to nine terabytes per hour, while simultaneously doing ETL operations with your favorite tools, such as Informatica, including pushdown operations into the data warehouse itself in order to do all of this integration, Yellowbrick is compatible with the PostgREST dialect of seatbelt. So that allows for easy integration with all of your systems. And then on the presentation side, we want to support all of these workloads simultaneously as well, doing interactive applications and serving short queries and just a few hundred milliseconds or serving the data science team with powerful SQL analytics that allow them to do ad hoc queries and have responses in seconds while also doing business critical reporting and employing the workload management capabilities so that the CFO dashboard is not interrupted by a rogue query from the data science team, but doing all of these things together at the same time is what makes the Yellowbrick data warehouse truly unique.
      </p>
      <p>
      	And then to cap it off, we take that approach and say, you can deploy that data warehouse in your data center or any cloud. And this further makes the capabilities of Yellowbrick unique. You know, what we're seeing today is a combination of hybrid solutions, data center, and public cloud that's what's needed to solve critical enterprise capabilities. And so at Yellowbrick, we built a purpose-built all flash data warehouse that scaled to petabytes of data with an MPP architecture that can be deployed in your data center or any cloud. And we believe that vision fulfills the need for enterprises to serve a wide variety of self-service analytics. I touched earlier on the capabilities of workload management, and I wanted to take just a minute to dive into a quick product snapshot so that you could understand workload management and action. We have an example from the telecommunications industry of mixed workloads.
      </p>
      <p>
      	We're using a tool Apache J meter to load test functional behavior and measure performance. This is used with random things, times random quarries mixed workloads. And we're doing an example here with multiple groups: a group that's doing ETL with heavy transformation, a data science group, a marketing group. That's looking at customer churn and retention and loyalty CEO dashboard for key company metrics and the call center doing quick customer lookups, all of those things, all those groups functioning at the same time with queries coming in from the ETL team, or perhaps from a SAS or Tableau or AR or queries direct from applications. And in this example, we run this workload over thousands of queries in just 10 minutes, hundreds of concurrent users. And the majority of the queries are mapped in a meeting, a 95% SLA of just a couple of hundred milliseconds.
      </p>
      <p>
      	So you can see when we look at the J meter dashboard here, we have these different groups. Again, these are simulated queries, but they're all happening simultaneously. And you can see the types of queries in the center on the right hand side. What you're seeing is a view into the Yellowbrick, workload management workload management harness and our system management controller, which shows the queries active in real time. And so this screen on the right will be scrolling by showing which queries are happening at which moment. So that's a quick review of some of the points that we covered today here. This is a quick summary but you know, focus on deploying and developing a data handbook and including empathy, a common understanding of the different data stores. You're probably going to need more than one BI tool plan for consolidation of workload management and, and understand the analytic personas, but plan for the enterprise.
      </p>
      <p>
      	I wanted to just finish up by saying, you know, there are a lot of choices out there in the data landscape to use for different solutions. We and our customers have scanned across all of these varieties of solutions, whether that's traditional data warehouses, which are large and easy, but not necessarily low cost or fast the data lakes, which are, are large and may be low cost, but not necessarily faster, not necessarily easy in memory databases like SAP HANA, which are fast, but, but not much out cloud, only data warehouses, which which can scale and do so easily, but aren't necessarily low cost when they're run 24, 7, 365 days a year, and aren't necessarily the fastest. And again, in our opinion, cloud only isn't the right solution longterm for enterprises that want a hybrid solution. And yet Yellowbrick meets all of these enterprise needs across being large scale, low cost, fast and easy to use.
      </p>
      <p>
      	If you'd like to learn more about Yellowbrick and BI capabilities we have two additional webcasts or two available at yellowbrick.com/tasks. One specifically focusing on Tableau and another specifically focusing on micro strategy. We also have a selection of customer videos on our homepage at yellowbrick.com. One of my favorite quotes from the chairman and CEO of [inaudible], they're a telecommunications analytics firm. The Yellowbrick platform brings innovation to life that not only allows you to do things you could not do, but allows you to do so at a price point. That can be three to five times lower. And that's the end of our formal presentation.
      </p>
    </div>
  </section>


	

	</Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'The Real Secrects to Self-Service Analytics',
    meta: [
      {
				key: 'description',
				name: 'description',
				content: 'Join us in the webinar to learn the real secrects to self-service analytics.'
			}
		]
  }
}
</script>
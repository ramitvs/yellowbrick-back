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
		<div class="w-full max-w-1200 mx-auto text-white z-10">
			<h1>Supercharge your analytics with Microstrategy</h1>
		</div>
	</section>

	<section class="bg-white py-12 md:py-20 z-10">
		<div class="w-full max-w-800 mx-auto">
			<BaseWistia id="stmpk5vhwj" />
		</div>
	</section>

	<!-- <section>
		<svg class="animated-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 320">
			<path d="M0 0h1920v320H0V0z" fill-rule="evenodd" clip-rule="evenodd" fill="#1f292e"/>
			<path class="bleuu" d="M1086.8 0L900.6 322.4M1326.4 252.5H1541l39 67.5" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=".745,4.969"/>
			<path class="bleuu" d="M1142 320l19.2-32.9H1301l90.2-155.9H1571L1680 320" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=".754,5.024"/>
			<path class="bleuu" d="M946.8 0L871 131.2h-77.1" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=".745,4.969"/>
			<path class="bleuu" d="M382 320l39-67.5M0 183.2h120.4" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round"/>
			<path class="white" d="M600.6 322.4l38.9-67.5M1222 320l129.4-224.1" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=".745,4.969"/>
			<path class="white" d="M1286.4 217.8H1761l30.1 52H1920" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=".755,5.034"/>
			<path class="white" d="M1920 96.6h-309l-55-95.3" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=".745,4.969"/>
			<path class="white" d="M1261 252.5h-.4" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/>
			<path class="white" d="M1255.6 252.5h-214.7L941 79.2H780.8L735.2 0M146.4 79.2H361L406.8 0M635.2 0L661 44.6 502 320" fill="none" stroke="#fff" stroke-dasharray=".745,4.969" stroke-linecap="round" stroke-linejoin="round"/>
			<path class="bleuu" d="M0 113.9h181L246 1.3" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3.078,10.261"/>
			<path class="bleuu" d="M486.7 0L481 10l60 103.9h180l86.8 150.3" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="2.967,9.888"/>
			<path class="white" d="M824.6 319.5l48.9-84.8M1248 1l-144.3 250" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=".745,4.969"/>
			<path class="yeellow" d="M1661 79.2l-70 121.2H791l-70.4 121.9" fill="none" stroke="#ffcd32" stroke-linecap="round" stroke-linejoin="round"/>
			<path class="yeellow" d="M451 304.4L590.7 61.9 556 1.3M1735.2 0l15.8 27.3h169M56 0l25 43.3-30 52H0" fill="none" stroke="#ffcd32" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
	</section> -->

	<section class="bg-white py-12 md:pt-0 md:pb-20 z-10 ">
      <div class="w-full max-w-1200 mx-auto px-8">
        <h3 class="accent-heading">Transcript</h3>
        <p>
          <span class="speaker">Gary Orenstein: </span> Thanks, everybody, for joining; we're going to talk about supercharging micro strategy analytics. We spent a little bit of time on the micro strategy symposium recently, and a lot of their discussion has been about analytics and mobility. Yellowbrick has a great compliment to that filling in from a data warehouse perspective and in advance of spending some time on the micro strategy symposium circuit. We spent a little time just saying, what are micro strategy customers saying? And we picked out a few fun quotes from the customer case studies. They have one from Merck who talked about how we wanted something that was lightning fast. Another was from Coca-Cola, who said they wanted a clean, fast, and mobile-friendly solution. Another was from Alliance Bernstein talking about Salesforce predominantly in the field and how giving them real-time insights is super important.
        </p>
        <p>
          And yet another was Freddie Mac, who talked about wanting a fast product and wanting dashboards to take no more than two seconds to get to that interactivity. So it was pretty clear that the need for speed in this micro strategy universe is pervasive. And yet, there are a number of challenges that people have in terms of achieving that speed and efficiency. And these are some of the things that we hear today from customers and prospects; in terms of the analytic challenges they face with traditional data warehouses, they can be overloaded. They have trouble doing ad hoc queries on the raw fact data. It's hard to retain enough historical data. It can't do real-time and can support interactive applications. And there are both rising support costs and escalating use expenses. So let's talk a little bit about where Yellowbrick fits. And I often did a little bit more micro strategy research and found this great presentation from Alejandro at micro strategy world earlier this year.
        </p>
        <p>
        	Tips and practice best practices for performance dossiers. And then I came upon this slide, and I stopped myself in my tracks and said, whoa, that's a lot of information. Where do we fit in the micro strategy universe? But upon further discovery, I found it here's the SQL data warehouse area down in the lower left-hand corner. And you probably can't see these logos, but it's IBM DB two Redshift, Oracle, my sequel, Google big query, Hannah, Teradata Postgres SQL server. And why does this matter? Because if you want a path to better price performance, serving more users with fewer systems, Yellowbrick and the Yellowbrick data warehouse is a great place to turn. So let's jump into the details. What is the Yellowbrick data warehouse? It's a purpose-built all-flash SQL data warehouse that scales from tens of terabytes to petabytes, a full NPP architecture that you can deploy in your data center or any cloud, and Yellowbrick has taken this approach to be a modern, scalable, efficient data warehouse deployed anywhere you want.
        </p>
        <p>
        	When we set out on our journey to build this product, we want it to start with some critical capabilities for modern data warehouses. And that means things like being always on and available, being able to do ad hoc SQL queries, delivering correct answers on any schema, scaling the petabytes handling mixed workloads like real-time inserts and ETL and batch altogether, and supporting thousands of concurrent users all at the same time. When we dig down into the Yellowbrick data warehouse attributes, it's this ability to handle these different workloads and flows simultaneously that brings the power of the solution. So on the ingest side with Yellowbrick, you could be doing real-time feeds from things like Apache Kafka or change data capture from your favorite LLTP database, capturing hundreds of thousands of rows per second, while simultaneously doing periodic bulk loads, our customers report high throughput rates up to nine terabytes per hour, while simultaneously doing load and transform from your favorite ETL tools, perhaps things like Informatica or others.
        </p>
        
        <p>
        	And then, on the presentation side, this is where things get really exciting. We're often helping our customers build cool new interactive applications. Many of those applications can be built right within the micro strategy framework while also serving powerful analytics, perhaps to a data science team that wants to execute sophisticated BI queries in just a few seconds while also supporting business-critical reporting, such as dashboards from the C-suite. And then we apply a workload management harness to that so that the CFO dashboard is not interrupted by some rogue SQL query initiated by, you know, somebody in the analytics team, but doing all of these things together is what makes the Yellowbrick data warehouse. So powerful also from an ecosystem perspective, Yellowbrick data, while we are our own database, we are compatible with the PostGrest dialect of SQL. So connecting your various workflows and data pipelines within your organization, Yellowbrick can quickly plug into all of those tools.
        </p>
        <p>
        	So let's talk a little bit about working with micro strategy and Yellowbrick together. We see a number of areas where our customers are achieving significant impact with the two products. One is getting faster dashboards and ad hoc queries. Another is being able to support thousands of concurrent users, simultaneously handling real-time ingest, achieving a petabyte-scale. And a great part that we like about working with micro strategy is that its focus on creating the live data directly out of the data warehouse, and with the power of the Yellowbrick solution, you get native data access without having to rely on aggregations or roll-ups or cubes or other data acrobatics in order to get performance Yellowbrick can deliver that natively just by issuing SQL queries. Let's take a look at what some of Yellowbrick's data's customers are saying. In this regard, you know, from a performance perspective, here's a quote from overstock on how they were able to build a 182 billion row table in under two minutes.
        </p>
        <p> 
        	And these kinds of performance achievements are just staggering for a company that has a lot of data. We see a positive cycle of analytics across many of our customers, where they want to, you know, make more analytic investment, to deploy more analysts that helps them discover optimizations in their business and ultimately to improve revenue, reduce costs and risks. We've seen customers who perhaps were coming from a different solution, not supporting that many analysts, moving to Yellowbrick, deploying more BI users, discovering new insights. And within months, recouping the cost of the Yellowbrick solution, Malco resorts, and entertainment. The seventh-largest casino in the world talks a lot about how they've been able to accelerate their traditional BI tools but also power the needs of their predictive algorithms. One interesting situation is the use of historical data. So if you think about it in the hospitality industry, especially around big events, in this case, Milko is headquartered in Asia.
        </p>
        <p>
        	So they focus a lot, obviously on Chinese New Year. They wanted to see what was happening, not just during this current holiday period but also last year. And initially, they were only able to store about four months of historical data. So hard for them to deliver the utmost and luxury experiences without that extra historical data. But with moving the Yellowbrick, they were able to expand that to 14 months of data and therefore able to see for the guests who are here experiencing our properties now, who were here last year, what shows did they see? What restaurants did they eat at? What games did they play, and how can we use that information effectively to deliver the most luxurious and personalized experiences? A couple of other benefits that people get with Yellowbrick data is simpler modeling and really a true self-service approach. So consolidation is a theme across the board in the data industry.
        </p>
        <p>
        	This is an example from symphony retail; AI provides analytics as a service to large supermarket chains. They wanted to reduce the number of platforms and provide faster responses. When you can aggregate three or four different systems into one like the Yellowbrick data warehouse, the modeling gets significantly easier. And I love this quote from one of our friends at clarity innovations, who talks about, instead of having to take data into 20 different tables, flattened out five different ways to answer the same question and Yellowbrick. You could just run one simple join. These are the things that make data and analytics truly. Self-Service providing simple standards-based sequel interfaces to large volumes of data without having to put unnecessary restrictions on what people can and cannot execute. And this is also another quote from one of our customers, all scripts in the healthcare industry; they did excessive testing, extensive testing across all MPP data warehouse platforms in the market and found Yellowbrick to have the highest performing, most scalable, cost-effective platform for their 300 terabyte environment.
        </p>
        <p>
        	And just to wrap up with one of our customers in the telecommunication sector, Yoko, who said that the performance we saw at the end of the day just blew us away. I don't know if we have any Netezza users on the line today, but just as a reminder, the Netezza product from IBM is reaching its end of support this month, actually June 2019, June 30th. So we have this little joke here that your days are numbered, but there is a solution that's too good to be blue. So if there are any Netezza users who haven't identified their environment and what they're going to do next, please feel free to let us know that it's time to get into our live demonstration. And so I'm going to invite Ray. Can you all join us on the line, give you a quick walkthrough of the demo architecture and then jump right into it, right? Are you ready to take it away?
        </p>
        <p>
          <span class="speaker">Ray Canuel: </span> Yes. Thank you, Gary. My name is Ray, and I'm a systems engineer. I work with customers and partners migrating to all brick. The demo that I want to show you today is based on, you know, some of the underscores, some of the points that Gary talked about; it's a live demo against the live data. The data that I'm using is industry benchmark data on TPC H will be gone after ad hoc interactive queries against 3 billion records. And we'll do that in a highly concurrent fashion and do that with mixed loads running at the same time and do dashboard workload management controls. So if you could make me the presenter please, and I'll share my desktop.
        </p>
        <p>
        	Thank you. Okay. So first off this, as you see, this is our system management console. I might refer to this as the SNC, and this is the first dashboard tab, and this is one of our small assistants within Yellowbrick. And as you can see, it's about 92% full. One of the unique things about yall Burke is as it gets full, it doesn't get slower. Unlike traditional MPP data warehouses, if we go into some of this is a multi-tenant environment, we use this for a lot of our partners, and there's, it's pretty well packed. We have north of a trillion records across all the databases and about 120 databases here specifically. I'm going to be working with this one database called the training database and which has a lot of the TPC H data and installed it. And if you look at one of them, here is this, this table where it's got about 3 billion records to it. And it looks just like a standard DDL table. Okay. And this is just the same detail that comes from TPC. And so now, if I toggle over to one other thing, I'll show you is actually this execution timeline. Within here, we actually can see queries and workload interactively hitting the system. What I'm going to do is go ahead and kick off a high-speed load. And so what I have here is let me just kick this off.
        </p>
				<p>
					And this will be loading billions of records at a rate of about eight; I think about 8 million per second. And so here's an example of how you can query over, and sure enough, we're running a bulk load of data. Okay. And we can monitor this also from a load standpoint, and here's our rate it's starting to pick up. It's about 6 million records per second. And so that's the bulk load. And because we want to be able to see how interactive BI can occur even while you're ingesting data live. So here is a micro strategy. And so, and when, if you look at micro strategy first, when I show how easy it is to connect this micro strategy to Yellowbrick. So if you were to start out, MicroStrategy is a great tool because it connects to virtually everything. And so Yellowbrick is just one of those.
        </p>
        <p>
        	And so here we could just click y'all Burke and we could say, well, we're going to select a table. And then from here, we're going to connect in through just generic ODBC, and we're going to connect to this database and we'll go to the schema. We support schemes too. And then here's this table that I just showed you from our management tool. It's the same columns that make up it and you would just drag and drop it and then prepare the data and start writing reports and the interest of time have already done that. So I've got two reports that I would like to show you. One would be the interactive ad hoc capability associated with micro strategy.
        </p>
        <p>
        	And so if you look at this here's those same fields within here. And one of the things I like about this version of micro strategy is the triaging of the data to kind of suggest gestures for me on what types of things to discover about the data. So the first thing I have to do is just play over there, but this little white bulb right here gives me this natural language to kind of suggest things. So what I can say is, you know, what is the total? And then it gives me a suggestion of all the shipping costs, okay. For the return costs that are associated with it. And so as I just hit return, the query is run. And then we get this number 1.3. If I make it a bar graph, it's a very large number of $1.2 trillion.
        </p>
        <p>
        	Again, this is generated data from the industry benchmark. Now, if you noticed over here, I can hit pause. And if you can see this little blip on the radar right here. Sure enough, this was the query that was generated from micro strategy. It went across the whole same table that I talked about and sure enough, it went across 2.8 billion records. So if you're familiar with BI tools, like my strategy, we're not going against cash data. We're not going against summarization. We're going after the raw atomic data that you see in the system. Okay. So let's go back to that and we'll just turn on that real-time view. And that was all, and that came back in just about a second and that's all while load is occurring, but let's ask them something a little bit harder. So let's say, okay, well, that's just a simple aggregation.
        </p>
        <p>
        	Well, what are the different reasons? So how about maybe counting the different, the different reason codes, because there are certain codes that we have that makeup, you know, for why they return this data back. And, you know, here, there's a whole list of these codes that are part of the data. I can make it a pie chart. And this gives me an account of every one of those. Okay. And you can still see that the query ran against that, but you kind of want to know, well, which one has the highest cost there. So maybe you marry the two of them with this natural language support. So maybe we want to say, what are the, maybe the top three reason codes. So what was that reason? Cause I'm just going to ask the, spelling it out on the highlighted reason codes, maybe, you know, with the, you know, the highest Sr return cost, the return shipping.
        </p>
        <p>
					So what are those? So again, just interactive ad hoc queries against the raw atomic data. And so those are the top three. So it seems like the unknown reason cost is the worst offender and then eight and then three. And sure enough, if I wanted to just go back and say, well, what is the next one? I could change it to five or something like that, run that. And then you get the query back for that. But as you can see, this is actually going against the cash. But now when you look at this, here's that query that we ran and sure enough, this is going against that same 2 billion records. And it's just a little bit more of a deeper type of query that was generated. So this was, if I was you sitting in the audience, I'd be like, okay, that's all well and good Ray, but you're only you're going against one table.
        </p>
        <p>
        	What about something a little more complex? Because our business is a lot more complex than just simple ad hoc queries against one table. So what I wanted to do was cancel out of this and hit, don't save one of, to go ahead and do a Y looks like my low job finished. I'm going to go ahead and kick that off. So we've already loaded 3 billion records. So I want to keep that load for us. So what I did was I actually took, again, the industry benchmark TPC; they have about 17 or so queries designated for the data warehousing. And so I went ahead and picked one of them. And this happened to be the query number one. And this query, what it does is it counsels the customers who have returned items more than 20%. More often the other customer returns across all the states.
        </p>
        <p>
        	I modified it because, the industry benchmark only does one state and it just lists some of the customers. So what I want to do is do an aggregation across all of the data. And so sure enough, you see that type of interaction here it is. We zoom into that. Now this is a good look and query. This query actually goes against those billions of records multiple times. The stores return once here, then once again here and also join it with dimension tables. We have a very rich management interface here. We can look at the query plans and look, look at all the details regarding this query and actually zoom into all the data. And so there, you can see that plan of 2.8 billion records across that data. Okay. And that query itself, the statistics on that, it came back and its runtime was four seconds just within the context of actually running.
        </p>
        <p>
        	Okay. And so, so that's, that's joins. And so the other thing that I want to say was, okay, well that's all well and good, right? But that was the only one query wall wildlife it was occurring. What about highly concurrent workloads? And so what I have is a utility, a third-party open-source utility called J meter. And so I'm going to go ahead and kick this off. And what J meter can do is generate random think times, a random number of users, random values against different query patterns in different groups of users and do that in a controlled setting. So this will actually run for a period of time and, and, and as you can see, we have a mixture of ETL tools and maybe heavy analytics from the science group or some marketing group or some dashboards, or maybe some quick pick lists that you might see from the customer call center.
        </p>
        <p>
					So it kind of mixes the workload: the quick, quick ones versus medium ones and maybe some heavier ones. And how you read this from left to right as these lines mean like 99% of the time these queries are coming back in a 10th of a second or less, these are in milliseconds. So this picklist 99% of the time they're coming back in one second or less, 95% of the time they're coming back in a quarter of a second or less. Okay. So we're going to kick this off and let that run. If I go back over here now, you see our system management console looks a little bit more like a Christmas tree with lights flashing, and each one of these dots represents the life of a query executing. So now let's go back here and, and, and rerun this query. So I'm going to exit out of that.
        </p>
        <p>
        	And I'm going to go ahead. I'm going to open this without data so that we get an accurate timing of what it takes. So aquaria have it, Brian, and we're going to take that exact same query, and then we're going to kick it off. So now we're running this query and it's just one of the groups by default. Everything on this system is fair. We're just letting this one work as one of the other queries that is coming in through these hundreds of users that are hitting the system. Okay. And as you can see, obviously it has a degradation in terms of performance, but the great thing about Yellowbrick is we can control this with our sophisticated workload management techniques. And so once this, so now you see that it's finished, it's the same query. So what can we do about this?
        </p>
        <p>
        	So if we go to our workload management controls, we have profiles, and these profiles I've named mine raised MicroStrategy profile, and we can actually create rules within that. And so here I can actually have a rule that identifies a certain important group of users. And here would be, imagine it's like the CIO or the CEO that's running that dashboard report that you saw on micro strategy. I filter on that CEO based on any one of these dimensions; I might just know that their username equals something. I could also do something by like an IP address or something like that, something that, or many or any combination of these. And then the action that I can do is I can actually do a lot of controls within their environment. So if I slide this over, I'm going to say one thing, I'm going to add an increase, the priority, this gentleman, and we're going to put it up to, let's say, bump it up to high.
        </p>
        <p>
        	And then we're going to go ahead and change this. And we're going to activate this change in real-time on that, on a data warehouse right away. And so now that rule is active immediately. If I go back to this timeline. And so now you'll see the workloads as it's coming through a slide that over now let's rerun that exact same test that we did. So we come into the first query, we open it without data to get an accurate timing. And then we go ahead and hit this button. So now it's running and now you can see on the right-hand side of the life of this query, and sure enough, it comes, comes back and probably a quarter of its time. Okay. And so that in a nutshell is what I wanted to show you in a short amount of time. There's a lot more to show than probably wondering, but again, just to wrap it, it's being able to show interactive ad hoc queries against raw atomic data. There's no caching. There's no; there's no summarization that I'm going after I'm doing this all. While data is being ingested in the system at a rate of about 800 million 8 million records per second in a highly concurrent environment with rich workload management features, that's all I have for the demo.
        </p>
        <p>
        	I was moving up.
        </p>
        <p>
          <span class="speaker">Gary: </span> Thank you, Ray. Moving it to Getty. Great. Thanks. Right. Hopefully, for folks, that was a great example of seeing Yellowbrick in action. We're going to take a few minutes as we wrap up here to take any questions from the audience. So please feel free to enter those into the question framework within the meeting. We've got one question here, Ray, from somebody w where does a Yellowbrick often get compared? What products are you often compare them against when you're visiting with customers?
        </p>
        <p>
        	<span class="speaker">Ray: </span> Two specific use cases exist for data warehousing when you see things like Netezza, as Gary mentioned, Oracle Tara data, we see SQL server also those types of workloads, if they're analytical or data warehousing in nature, we play very nice there. And another group is Hadoop. When we see a lot of customers that try to layer on interactive BI complex BI on top of Hadoop, it seems to fall relatively short. We look at those use cases and those workloads very easily to be able to suck that data out of Hadoop using spark and feed our Y the load utility that I just showed you to then put it in Yellowbrick. And while you're on the BI on top.
        </p>
        <p>
        	<span class="speaker">Gary: </span> Great. Thanks, Ray. We've got another question here from the audience: does brick offer solutions for industrial IoT? Maybe you can touch on our ingest capabilities. Yeah.
        </p>
        <p>
        	<span class="speaker">Ray: </span> I would do two things, you know, we can, on the ingest side, we can read data extremely fast. And one of the things that we can stream data taking fees from Kafka and actually take those from sensory devices and stream that all in Crow at scale, we can have that run across. We have thousands plus clusters that are using CAFCA that stream data directly into Yellowbrick. And the second part is we also have a lot of some native data types that are actually specific to IP information. And that actually helps a lot, and IMT human society has IP information associated with it. And we actually, we can do analytics on that very, very well and efficiently with those types and functions.
        </p>
        <p>
        	<span class="speaker">Gary: </span> Right. We've actually got two questions here that are very similar about what kind of compatibility is there with Netezza. What kind of Netezza functions can work with Yellowbrick? I know that's a good area of your expertise, so if you could touch on that, that'd be great. Yes.
        </p>
        <p>
        	<span class="speaker">Ray: </span> There's probably no path. We are by far the path of least resistance when migrating the teaser to Yellowbrick. We're both based on the Postgres DNA. The data types come right across. In addition, we have additional data types, like I've talked about, the IP address ones. That version of Postgres came for Nateeza was relatively old; I mean, you're thinking about things. It was taking a copy way back in 2000 or something like that. We were much newer. And so what happens is you get a lot of the Oracle compatibility functions to come along. That's already part and native of Yellowbrick things like MTLD code and whatnot. Whereas those were all added things to Nateeza. So we have a rich case of migrating a lot of those customers.
        </p>
        <p>
        	<span class="speaker">Gary: </span> Great. Another question coming in are you seeing the need to use micro strategy cubes when using Yellowbrick, or are there instances when, when that would be needed? You know?
        </p>
        <p>
        	<span class="speaker">Ray: </span> I think it's just thinking of it as one of the tools in the toolbox. Obviously, when you have a queue, then you can create the priests, the latency of the data, and the freshness of the data. If you can go against the raw atomic data in seconds and sub-seconds, is there any real need for the cube? And so, therefore, now you can trickle feed, and you can add real-time ingestion. And then when you're running your, your, your non-cube data sources, you're going right after the raw data. But if you want to make a cube, you go right ahead or cube aware. And that's just part of the certification. It's just another tool in your toolbox. Great.
        </p>
        <p>
        	<span class="speaker">Gary: </span> We've got a question about comparing in the cloud. I'll take this one quickly. How does Yellowbrick compare with cloud DBMS like snowflake and Redshift actually cloud data warehouses? You know, those cloud data warehouses are what we call clouds only. And in our view of the world, it's nice for companies to have a choice for deploying in the cloud, deploying in their data center, deploying anywhere they want in between. So that is the primary difference. We believe in a hybrid world that gives customers a choice to deploy on-premises or in any public cloud. And Ray, I'm going to toss this last one to you. Postgres uses a PC equal for functions. What should we think about functions and Yellowbrick, may be stored procedures and things like that?
        </p>
        <p>
        	<span class="speaker">Ray: </span> Yes. Good. Yeah, you can use stored procedures. In fact, they'll come across. We did not invent another proprietary store procedure language. We followed the Postgres stored procedure language, so that would come across as is.
        </p>
        <p>
        	<span class="speaker">Gary: </span> Great. There's another question here. I'll take anything specific about the relationship with micro strategy, and Yellowbrick could accelerate any BI tool, is that correct? Yes, that's correct. But one of the things we do like very much about micro strategy is their architecture on driving direct data access. Ray, maybe you could just touch on that for a little bit and what you've seen across different BI tools.
        </p>
        <p>
        	<span class="speaker">Ray: </span> Yeah. So one of the things I know about MicroStrategy is the multi-step processing that it does, and the seat, meaning you might run a report, but it might be made up of 30 queries, and then 29 of them are, see Tessy Tessy tasks. And the last one's a select statement. We at Yellowbrick are perfect for that. We love to create tables as select inside the database and just prep the data, prep the data, prep the data, and then return the results back. There's a lot of BI tools out there, but micro-strategy is one that leverages that very, very, very well. And we're a perfect match for that because we don't. Well, one thing I gotta, so one thing is we're incredibly simple. We don't have any indexes. So one of the things I forgot to show you, we don't have any indexes in Yellowbrick; it is not an option. They don't exist. So that's why we're perfect for that type of interactive. BI is because you don't know how the data is going well with us. We only have to index it. You get the performance right out of the box. So we're perfect for that.
        </p>
        <p>
        	<span class="speaker">Gary: </span> Great. Thanks. Right. And thanks to everybody for joining today. Fantastic questions; Ray and I are going to be standing by; if you didn't get a question asked or answered, we're standing by for them.
        </p>


			</div>
		</section>

	

	</Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Supercharge your analytics with Microstrategy',
    meta: [
      {
				key: 'description',
				name: 'description',
				content: 'Let Yellowbrick Data Warehouse supercharge your analytics with Microstrategy.' }
    ]
  }
}
</script>
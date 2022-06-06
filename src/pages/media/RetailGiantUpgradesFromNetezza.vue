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
		<div class="w-full max-w-1200 mx-auto text-white z-10">
			<h1>Retail Giant Upgrades from Netezza: A Customer Story</h1>
		</div>
	</section>

	<section class="bg-white py-12 md:py-20 z-10">
		<div class="w-full max-w-800 mx-auto">
			<BaseWistia id="gwswhkxpg9" />
		</div>
	</section>

	<section class="bg-white py-12 md:pt-0 md:pb-20 z-10 ">
    <div class="w-full max-w-1200 mx-auto px-8">
      <h3 class="accent-heading">Transcript</h3>
      <p>
        <span class="speaker">Hema Ganapathy: </span>Hello, everyone. Thank you for joining us for today's webcast. Our topic for today's webcast is about Symphony Retail AI, a retail giant that upgraded from Netezza and we get a chance to hear about their customer story and how they deployed Yellowbrick. Before we begin, I'd like to start with some introductions. I'm very excited to be here today. Nigel Pratt will be our main presenter today. He's a senior VP of technology at Symphony Retail AI and Nigel joined Symphony technology group in 2015 as EIR and technology advisor, leading tech strategy and architecture on business transformation. He has decades of experience leading teams for data and analytics solutions. Prior to STG, Nigel was CTO at symphony health solutions, directing transformation to cloud data solutions, SAS software solutions, restructuring infrastructure, and establishing offshore development. And Nigel's prior roles include CTO Symphony advanced media, SVP development for new products, symphony IRI, and SAP development and I2 technologies.
      </p>
      <p>
      	So truly very honored and excited to have Nigel presenting today. And I am Hema Ganapathy, senior director of product marketing at Yellowbrick. I'll also be a co-presenter and moderator for our presentation today. Just a little bit of housekeeping before we get started, we've carved out some time for a Q&A towards the end of the presentation. So please make sure to type your questions into the question window and we will get to them towards the end of the presentation. We're also doing a live tweet during the webinars. So please use hashtag #YBLive to participate and retweet, and we'd really appreciate that. And you can follow us at our Twitter handle @yellowbrickdata. Now, without any further delay, we'll begin with our presentation. And I'd like to start with a little introduction, very brief about Yellowbrick and our solution offerings.
      </p>
      <p>
      	Next slide. So Yellowbrick is the only modern data warehouse for hybrid cloud. We have several solutions, one that is an on-premises solution. We have a data warehouse instance that is innovations at all layers in compute storage, networking, and software. And this instance has been purpose-built to provide a unified data warehouse and database across both the cloud and on-premises. We've also architected our instance with extremely high performance and it is a small footprint with extensible scale. And you'll hear more about that during our presentation today. It's based on an MPP scale in architecture and has a system management that makes management and configuration very simple and easy. And as well, we have backup and restore features. And one of our key differentiators is that we offer a cloud service as well, which leverages the same hardware innovations that we have in our hardware instance, in a cloud offering. We support all public cloud vendors, including AWS, Azure, and GPC.
      </p>
      <p>
      	And we actually enable our enterprise customers to move easily between all of these cloud vendors. So we don't have you locked into a particular vendor with Yellowbrick. You actually have the flexibility to do what you need with your cloud when your business needs it and where your business needs it. We also offer a cloud disaster recovery, replication-based failover and fail back so that your data is protected no matter what. Next slide. 
      </p>
      <p>
      	So what's so special about the Yellowbrick data warehouse? I'm just going to leave you with three points to think about. We have the best price-performance in the industry. We have purpose-built innovation in our hardware instance that gives you high performance and scale for extremely large data sets. We also have very innovative simplicity. The hardware instance is data-ready with no tuning required. And we also offer sophisticated UI tools that allow you to migrate your data very simply and quickly over to the Yellowbrick platform. And we offer flexible deployment. We offer solutions for on-premises, public cloud, and hybrid cloud. And without any further ado, I'm going to hand over to Nigel so that he can tell you a little bit about Symphony Retail AI, and how they use Yellowbrick in their environment.
      </p>
      <p>
      	<span class="speaker">Nigel Pratt: </span>Thanks so much Hema. Good day, everybody. I'm head of technology at Symphony Retail AI, and we've been in business serving retailers CPGs for the last 25 years. You may have heard of us before as EYC or All Data. But the last two years when they changed our name to Symphony Retail AI. We serve retail analytics to a lot of retail customers predominantly in the grocery space. We have over 300 retail customers, some of the largest ones you may be familiar with in the US and across the globe. We also have a large number of consumer packaged goods companies across the globe, over 550 of those, and all the big ones use our technology and our data that we serve up. So we have a massive amount of data from these retailers. We get point of sale information, promotion information, household information, product information. And as you can see from those stats there, we have 175 million households and 3 billion products in our data sources and 250,000 stores across the globe, across 70 countries.
      </p>
      <p>
      	So the key thing that we provide to our retailers and CPGs is AI models and prescriptive insights too, for the grocery business. And then we call that platform, CINDE, which stands for conversational insights and decision engine. Then we have a retail cloud. All of our solutions are provided as software, as a service. And we serve up reporting and data and insights from the cloud environment. We also process personalized marketing solutions and promotion optimization. So we serve that part. We also do some pricing work. We do integrated category planning. That means what's actually on the shelf, the merchandising of the products. And then we also do demand forecasting specifically in all areas of grocery, but fresh is the one where we have got a unique capability to help them do better forecasting for the amount of product they need within the stores. And we have a supply chain platform. So all the way from CPG, the delivery order to the delivery, through the warehouse, into the store, to the customer. We basically cover the whole channel for that data movement and capture all that information into our systems.
      </p>
      <p>
      	So we promise our customers that we will deliver 4% revenue and profit improvement. And we've got many proof points to show that that has been working for our retailers and CPGs. And we also provide 30 day, no-risk pilots, and we try to achieve the best quality software guaranteeing that we will resolve any critical issues within 24 hours. So we have a team dedicated to making sure that we resolve any issues, because this is critical to a lot of the business, especially in the supply chain. And we provide prescriptive recommendations and insights to our retailers and CPGs.
      </p>
      <p>
      	I'll take her just to tell a little bit about what's happening with COVID 19 and how that's disrupting the business right now. There's a lot of changes that are happening. The supply chain limitations, things that are just not available, you know, they've just been sold off the shelf and there's nothing in the warehouse. There's been a lot of price increases occurring because of the, no there's not been available supply and the demand is there. So you have seen some increases in the prices in the grocery stores. A lot of the users now, customers, are going online for the first time and ordering, to have click and collect, so they don't have to get into the store or to have it delivered. And generally, people are not shopping as often as they used to. They're going for a larger basket size.
      </p>
      <p>
      	You know, they go out and say once a week and buy everything they think they need for the week. And in the past, we're noticing the households used to go to many different retailers probably shopping around, but now they're not doing that so much that we're going to the body, their nearest store and not going shopping around to lots of different stores. Another change we're seeing is that the products in the market are changing. The manufacturers are realizing that some products are not selling and they may be having manufacturing difficulties. So they're reducing the number of choices. So instead of having that eight-ounce cans, 10-ounce cans, 12-ounce can options, they're just going to reduce that down to one can size that will be reduced, you know, the variety that you will see in the store.
      </p>
      <p>
      	And the other thing that's changing is that the promotions in the past, you know, there was a lot of competition promoting products, and that has changed a little bit. So there's a lot of reduction in the promotion mechanism, the channels on which they put promotions out, and you can find all this information that we publish on a weekly basis on our COVID-19 site. There's the URL here on the page. Anyway, that's probably enough to tell you about symphony retail, AI, and get more into the technology now about how Yellowbrick fits into all of this.
      </p>
      <p>
      	So this slide shows a high-level architectural review of the platform that we provide. So at the top, you've got the user interface underneath that, and you've got many different applications covering things like promotion optimization, shelf, intelligence, assortment, intelligence, demand, forecasting, or, you know, we've got quite a lot of different products that are used both by the retailers and the CPGs. Underneath that, we have an AI platform where we do all the insights generation and underneath that is all the data sets. And there's a large number of data sets. We've got point of sale information coming in, panel data, we've got e-commerce data, we've got financial data, promotion data. There is so much there given data sources and it's constantly growing, the amount of different data sources. And now we're getting into economic data, weather data, and other data sources that we bring into our platform.
      </p>
      <p>
      	So in building out this, it's been growing over the last 20 years, I mean, but when we started in the EYC part of the business, this was some of the data sources that we're using. So when I joined EYC back in 2015, predominantly the platform of choice then was Netezza, a MPP appliance solution. Actually Netezza was purchased by IBM, but we had 10 of those servers scattered across Europe and the USA and a mixture of, you know, the old twin fin systems, which go back to the early years of 2000, I think it was when twin fin first came out all the way to the more recent Maaco systems about 10 of those, we also started to expand out and we looked at using Amazon Redshift and we started moving data there as well.
      </p>
      <p>
      	And I was instrumental in getting us into the cloud environment and Amazon was our first choice. At that time, Amazon was definitely leading in the cloud area. More recently we have moved over to using Microsoft Azure. Surprise, surprise. A lot of the retailers did not like us using Amazon because they consider Amazon to be a competitor in the grocery space. They wanted us to move off of Amazon. We also used another technology called 1010Data. They provide a very fast solution for massive databases particularly, you know, in the stock market, they support the financial arena, but they also in the retail area as well. And we use some of that technology, but it's a very proprietary system. It requires a lot of knowledge about their proprietary language and using their systems.
      </p>
      <p>
      	And we are also using SQL Server enterprise edition. And that was both on-premise. And also we started moving some of that into the cloud. Overall, all those different data sources across all these different technologies was greater than 700 terabytes, or actually I think is close to a petabyte now. So the thing is, you know, we will then want it to look up to, you know, what options did we have because this was some of the limitations we were having. At that time, our Redshift costs were really increasing month over month, with more and more systems. And it's not a cheap platform. We were, we were up to 120,000 per month. And the process on some of that was taking some time. And, of course, the obvious solution was to, oh, well, let's get some more Redshift instances up and running and increase the cost to get, to meet that demand.
      </p>
      <p>
				On Netezza farm that was going out of maintenance in April 2019. Well, the twin fins specifically, and the other one's striker as well, it's going out of maintenance. So that technology was getting replaced by new IBM technology. And we also had space limitations on Netezza. We didn't really want to buy another Netezza platform at that time. But we were full capacity and you can't sort of add extra desks to an existing Netezza system. It is what it is. If you, you know, whatever you buy, you're stuck with that capacity. And the number of report queries were getting slower and slower, especially as our data sets were getting larger and larger. I mean, one of our larger data sets has 150 billion rows in the main fact table. So you can imagine the query times against such large data sets were getting pretty slow. We needed to also support new technology, support the things that we wanted to do with CINDE, and that’s sort of basically our platform now for our insights and AI platform.
      </p>
      <p>
      	And we needed to be able to expand that capability. We also needed to find a replacement for the 1010 data system. So we were looking at different technologies and we evaluated with proof of concepts on different technologies. And one of the ones was Yellowbrick. And then that was done at the beginning of 2018. And we conducted a POC for approximately a month with multiple teams running multiple POCs on different aspects so that it was things like on the Redshift processing, the promo build process, the reporting process, the Omnicube build process, and the test and learn process. All of these, we were, did a complete evaluation of the Yellowbrick system and ran the tests.
      </p>
      <p>
      	So we decided we would have a successful POC that we purchased our first system back in May, 2018 and had that installed. And it was actually up and operational by July of 2018. Over the past a year, and actually from that May to March of 2019, we converted all the 100 data production systems over to Yellowbrick. It was one of the key ones that we wanted to get off of. It was a lot faster in processing. It had a standard SQL interface compared to the 1010 data custom language. So that made it a lot easier for our developers to get on board with the Yellowbrick system. We also started moving some of our Netezza data over to the Yellowbrick system. And that was pretty easy because the SQL is very common between Netezza and Yellowbrick. So, but there's a lot of processing.
      </p>
      <p>
      	We had 10 Netezza systems, they weren't small. They were doing a lot of jobs that had been running for many years. We have been moving off of those and the Netezza systems basically getting off of the twin fin systems first, and we've achieved 50% reduction so far, and we've got another 20% that is happening in the next three months. So we'll be down to basically three Netezza systems. And our goal is to try and get off of those by the end of the year. We also got off the Redshift’s service. We were able to, by July 2019, shut down everything we were doing on Amazon. You might find that surprising, but we actually moved over to Microsoft Azure and that's called really well for us and the Yellowbrick platform in conjunction with the Azure web service that we have as worked out really well so much. So much so, were able to get off of Amazon and we have four systems in the USA at the moment and two in Europe. And that is, we basically placed basically about 30 odd systems that we had before. So it is being able to consolidate all those different platforms into the Yellowbrick environment. And that's resulted in a lot less data movement because we now have this data centralized in these data warehouse systems on Yellowbrick.
      </p>
      <p>
      	So here's, I'll give you some numbers about how it's improved our business. We have some batch reporting that we do, and those batch reports were done on 10% data. And there was a request to move up to a hundred percent. Well, we were able to do that with Yellowbrick. We were able to go from 10% data set to a hundred percent, but it also turned out to be two times faster for 10 times more data. So the customers were very happy with the fact that wildly, you know, what, we were able to report out on a hundred percent of the datasets, you know, when we're reporting against that 115 billion row data set. And it's faster than what we had before. We also have multiple reports that are being done, both batch reports, but also interactive reporting per retailer if we're doing about 5,000 reports per day or more.
      </p>
      <p>
      	The users can go into the system, be entering their, asking a question, doing some research into a particular insight, or bringing up a report of sales or promotions or warehouse or inventory, or, you know, any manner of information that they want to get at. They can do that interactively now. And we can see that it's so much more expensive and now being able to go directly against the Yellowbrick system than what it was before when we were using Netezza and Redshift systems. So some stats at the bottom here that just do some comparisons of Netezza. We saw that some of the batch reports that we were doing were running five times faster in the benchmarks that we ran and the range was around between 10 times faster and three times faster. So that was a win on delivering reports to our customers. Redshift, the Omnicube build process, that was also three times faster, and that had an immediate impact instead of it taking 24 hours for that particular build process, it was down to eight hours, gave us a lot more time on the weekends to do the analytic processing.
      </p>
      <p>
      	And also, you know, if there was a failure in the processing, we could do it even again, because, you know, there was time on the weekends to reprocess data. Let's say we process terabytes of data on the weekends, but also during the week as well. I mean, with a real-time system where doing supply chain in real-time, but some of the analytics is not done daily. It's done on the weekends. And that's part of that Omnicube build process. The promo cube also was five times faster and the interaction cube was another five times faster. So we saw that was comparing the same number of processes on the Redshift system versus a Yellowbrick system. That those were the numbers as we saw. And this was back in early 2018 and the 1010 data system was also a significant improvement. And I say one of the earliest systems that we shut off and got the move to the standard SQL interface. So those are the numbers that we had from you know, analysis of the systems and why we chose Yellowbrick back in early 2018.
      </p>
      <p>
      	So the lessons we learned from this I mentioned, the other slide that we had, it was easy to convert from Netezza to Yellowbrick SQL because they're both based on PostgresSQL there was hardly any changes required. The Yellowbrick system is a much smaller footprint. You know, we had 30 odd systems, where here, you know, we can put three or four Yellowbrick systems into one rack. And compared to probably 10, you know, that serves up probably equivalent to about 10 or 10 racks. So it's a lot smaller footprint. And also because there's no moving parts, we don't have to go in replacing disks. So we don't have to call out our IBM to go in and replace a disc on a Netezza system. So that's a benefit that the mean time between failure is a lot better.
      </p>
      <p>
      	Another thing that's been very useful with the Yellowbrick system that we learned was the workload management and the administration console. It is really, really good. But it meant that we were actually able to bring different workloads onto the same system and manage it. In the past, when we had the Netezza systems and Redshift systems, we actually had dedicated systems for analysts, dedicated systems for development, dedicated assistance for Q&A dedicated systems for production. Now, we don't need to do that with the Yellowbrick environment. We actually have production running side by side where the analysts and with Q&A all on the same system. The only place where we actually keep development separate is because we don't want developers actually getting into the production system. And we sometimes sort of, like, to put them off on a separate site environment, but we now have the analysts and the QA and production all running on the same system because of the workload management that we can control the resourcing for those applications.
      </p>
      <p>
      	The other thing was that the Yellowbrick is extensible, whereas Netezza wasn't extensible at all. So we've already extended our existing systems that we purchased and added new blades into the systems to extend out the processing and storage capacity in our systems. So that was just some of the benefits as if you're more on the right-hand side here that cover some of the benefits we found. And the next steps of what we're going to do, we're going to be increasing our capacity some more because we got more customers and more data. We're bringing more and more data sets and the data is consistent, constantly growing. So, as I said, I'm pretty sure we will be over the petabyte mark very, very soon. We're looking at the Yellowbrick cloud offering. And as on the subscription model with that, and as part of that, we're going to be converting some of the other programs.
      </p>
      <p>
      	So we have programs that are running on SQL server enterprise edition. And we're now looking at converting those programs over, into using Yellowbrick, and we've done some tests and they've shown it to be very fast in comparison. We're also going to be using the new capability for incremental backups. In the past, we've been basically having duplicate copies of the data in multiple places. But we're going to do incremental backups because we do have some systems that are transactional. We want to be able to do incremental backups, nightly, have specific tables and schemers to another location so that we can make sure that there is RPO and RTO, which are DR terminology for those on the call who know about what about that, but that means we can reduce those times for recovery by having incremental backups done sometimes even perhaps during the day.
      </p>
      <p>
      	And we're finishing shutting down the Netezza farm. And I mentioned where well on the way to completing that, and we're going to be embracing the new replication capabilities that have come out with the Yellowbrick release both for DR Strategy so that we can have, is it near enough zero downtime if there was any disaster within a data center where we have our Yellowbrick systems. As I mentioned, we have Yellowbrick in us and it's in Atlanta and we have another Yellowbrick in our Slough data center. We want to, if Atlanta suddenly got hit by a hurricane, we want to be able to switch over to using the Slough data center in the UK with very, very little downtime, if a data center was wiped out. So that's a summary of what we've done with Yellowbrick over the last two years. And why we chose Yellowbrick and how we've moved our data processing over to Yellowbreath. So with that, I'll pass it back to Hema.
      </p>
      <p>
      	<span class="speaker">Hema: </span>Nigel, thank you so much for that information-filled presentation. Really appreciate that overview. So for those who are attending, I just want to summarize, you know, what Yellowbrick can do for your business. Yellowbrick, as you saw with [inaudible] can scale to manage your largest data sets in the terabytes and petabytes, we offer the best price-performance for that. We make your business more efficient with innovative simplicity, as you heard from Nigel, there's very little time required to cut your data over to Yellowbrick and to use the tools that you currently have in your environment. And we simplify your migration to the cloud. We offer flexible deployment options for both on-premises in the public cloud and hybrid cloud options. Next slide.
      </p>
      <p>
      	So I want to encourage you to visit our website at www.yellowbrick.com and follow us on Twitter, Facebook, and LinkedIn. The various handles are listed there. You can actually book a demo for your own data set on Yellowbrick’s. So please do that, book a demo today and start realizing the same benefits on the elevate platform that Nigel has experienced at Symphony Retail AI. I want to remind you that we're going to take some questions, so please type your questions in the question window, and we'll get to them presently. It looks like we have a few questions, Nigel. So let me start with asking you. One question is what BI tools are your data analysts using?
      </p>
      <p>
      	<span class="speaker">Nigel: </span>For the reporting we’re using Microsoft Power BI and the analysts generally use DBeaver to type in SQL statements directly against the Yellowbrick server. So internally we use the DBeaver a lot but from the front-end reporting tools, we use Power BI. 
      </p>
      <p>
      	<span class="speaker">Hema: </span>Okay. Thank you. There's another question here. You mentioned the smaller footprint with Yellowbrick. I know you talked about some metrics, but can you just go over those again? How much smaller is the footprint with Yellowbrick?
      </p>
      <p>
      	<span class="speaker">Nigel: </span>Probably, you know, the fact that we were able to replace, you know, a number of machines, I would say the ratio is about 10 to one. So, for one Yellowbrick server, well we have three servers in a rack and it will replace 10 racks. So that reduces our footprint in the data center in Atlanta. And also in Slough.
      </p>
      <p>
      	<span class="speaker">Hema: </span>There's a question here that says, do you offer real-time reporting? Not sure if that's directed to Symphony Retail AI, or Yellowbrick, but how about I'll let you talk about that. Are you able to do real-time reporting on the Yellowbrick platform?
      </p>
      <p>
      	<span class="speaker">Nigel: </span>Yes, we do. Some of the queries that go back to Yellowbrick on the real-time reporting, respond back in 0.25 of a second. So, you know, querying these large data sets to where the user's typing in for a particular division, particular product sets, particular time period, whatever, 0.25 of a second from Yellowbrick, you can get the answer. And those that can be in complicated reports, like power BI. We've met multiple metrics on the report, or it can be part of the CINDE application. Those are real-time interactive reporting systems. So CINDE, you're asking a question and this report responds back to you within seconds about its insights and answers of what it's found about your particular question.
      </p>
      <p>
      	<span class="speaker">Hema: </span>Another question here is, can you talk about your operational savings with Yellowbrick?
      </p>
      <p>
      	<span class="speaker">Nigel: </span>They are difficult to quantify but we know what we were spending with 1010 data and Redshift, and we've expanded our capacity, obviously as we've expanded our Yellowbrick systems. But I think with probably saving a million a year, if not more than that, it's very difficult because we have expanded as we have grown over the last two years, we're processing a lot more data than we did two years ago, three years ago.
      </p>
      <p>
      	<span class="speaker">Hema: </span>Thank you. Another question on real-time reporting. So if real-time reporting is done, then what is the source of the data? Is it real-time process data? There's a question for both Symphony and Yellowbrick.
      </p>
      <p>
      	<span class="speaker">Nigel: </span>Could you repeat that?
      </p>
      <p>
        <span class="speaker">Hema: </span>Yeah, so if real-time reporting is done, then what is the source of data? Is it real-time process data?
      </p>
      <p>
        <span class="speaker">Nigel: </span>So data from our retailers is generally sent to us nightly. They don't trickle feed it during the day. So it can be real-time. The following morning, you will mention that you will see inventory information and stock information, and what's on the shelf, et cetera, et cetera, and what's been sold. But the retailers generally send us the data at night, but then during the next day, you're able to query that information in real-time.
      </p>
      <p>
        <span class="speaker">Hema: </span>There's another question here, you, at some point, talked about less data movement. Where were you moving the data to?
      </p>
      <p>
        <span class="speaker">Nigel: </span>Well, we've had systems where the 1010 data systems were in Virginia or in Frankfurt. The UK system was in Slough with the Azure platform. So I'm not sure what the AWS platform was in the cloud in different regions. And Netezza was in Slough and in the US so we're moving data constantly between these different systems. Majority of the data was landing in the UK at that time. And was then getting pushed out to all these different systems. So there was a huge amount of data movement. Now we can move directly into the Yellowbrick system which then serves up all these different applications. And we also now land the data directly in the US into the Atlanta data center into the Yellowbrick there. So when we have less traffic now going across the Atlantic and we serve... Europe serves our Asia and Europe customers and the US so our North American, South American customers.
      </p>
      <p>
        <span class="speaker">Hema: </span>Thank you. There's a question here also. Do we have the option to... I just... sorry. I just lost the question. Do we have the option to write back process data using external data sets into the database? For example, process data from SAS or financial planning? Well, Nigel, I'll let you answer first from the Symphony Retail AI perspective, and then I'll answer from Yellowbrick’s perspective.
      </p>
      <p>
        <span class="speaker">Nigel: </span>Yeah. We can take feeds of data from different systems using ETL to load it in. It is more of a data warehouse solution we provide where we're doing. So we're not trickling in data constantly into the Yellowbrick system. As I say, it's a data warehouse for those systems where we're doing transactional info transactions. That's where we use a SQL server. And in some ways, SQL server is better for doing transactional, you know, order management, for example, when you're at like a person's entering in an order. That is done on the SQL server environment. So, it all depends on the type of solution as to which database platform is best. But from my data warehousing reporting capability and, and AI and analytics, Yellowbrick has been really good.
      </p>
      <p>
        <span class="speaker">Hema: </span>Thank you. I'll answer that question from a Yellowbrick perspective. Yes. You also have the option to write back process data to Yellowbrick. We support a variety of file formats and interfaces. That's my brief answer. We'll certainly follow up with you afterwards to answer that question in more detail. Another question here did moving from Netezza pose an issue on code optimization. And if yes, then what process did you adopt to ensure that the output in both systems were verified?
      </p>
      <p>
        <span class="speaker">Nigel: </span>So there was some improvements that Yellowbrick provides things like replicating the data and the distribution was slightly different. We initially did a straight conversion over of the code with no near enough zero changes, and then worked with Yellowbrick to optimize it when they would say based upon this access plan, these are the recommendations that we make on how you could probably better distribute the data or replicate some of the data to get better performance. So initially it was just straight copy, verify the results, do, you know, our QA team would look at the original output and the new output from Yellowbrick. Yeah, that's the same. Then we would do optimizations and again, do that same verification before it was put into production and we have automated performance testing scripts and automated regression scripts for validating certain datasets. So every time we're making changes through our environment we are doing those validations to make sure that nothing has been broken.
      </p>
      <p>
        <span class="speaker">Hema: </span>Thank you. And one last question: what did the deployment of Yellowbrick enable you to do that you couldn't do before?
      </p>
      <p>
        <span class="speaker">Nigel: </span>I think it's one of the things that's enabled us to do is expand out the data sets that we're joining together. And you know, in that architecture slide, where we had many different datasets at the bottom. Well that’s expanding constantly, and we're able to put them all into one Yellowbrick system and actually do analytics on that data, do deep learning on that data or running a sophisticated correlation analysis across the different datasets or within the, you know, the Yellowbrick environment. Because it's, you know, got the processing power and the capacity for being able to do that.
      </p>
      <p>
        <span class="speaker">Hema: </span>Great. Thank you so much. It looks like we are kind of running out of time. So that's our last question. Thank you so much, Nigel for presenting and for attending with us, it's truly been a pleasure working with you on this and everyone who's attended, I want to thank you for attending the webinar. I want to also point you to the fact that we have a series of great webinars in June and that our next one is with a partner called Next Pathways. So please go to yellowbrick.com to register for that webinar. Learn more about our partner and how we facilitate migration from Netezza on Teradata for you. And we do appreciate you being here. So please don't hesitate to email us at info@yellowbrick.com and stay updated on upcoming webinars and follow our trends and best practices on Twitter and as I mentioned before, LinkedIn, and thank you for joining us today, and we will see you next time.
      </p>
    </div>
  </section>

	</Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Retail Giant Upgrades from Netezza',
    meta: [
      {
				key: 'description',
				name: 'description',
				content: 'Find out how Symphony Retail uses the Yellowbrick platform for blazing performance and faster time to insights. Symphony RetailAI is a global leader in AI-enabled decision platforms, solutions and insights for driving profitable revenue growth for retailers and CPG manufacturers.'
			}
    ]
  }
}
</script>
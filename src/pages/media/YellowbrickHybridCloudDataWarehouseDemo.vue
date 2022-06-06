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
			<h1>Yellowbrick Demo</h1>
		</div>
	</section>

	<section class="bg-white py-12 md:py-20 z-10">
		<div class="w-full max-w-800 mx-auto">
			<BaseWistia id="on8d10qzlj" />
		</div>
	</section>

	<section class="bg-white py-12 md:pt-0 md:pb-20 z-10 ">
    <div class="w-full max-w-1200 mx-auto px-8">
      <h3 class="accent-heading">Transcript</h3>
      <p>
        <span class="speaker">Hema Ganapathy: </span>Hello, everyone. Thank you for joining us for today's webcast. My name is Hema Ganapathy. I'm in product marketing at Yellowbrick and will be your presenter as well as host today. Joining me as co-presenter is Ray Canuel, who is also from Yellowbrick. Ray focuses on working with customers, particularly in the financial and healthcare verticals. So today our topic is an introduction to Yellowbrick, but before we begin, I just want to go over a little bit of housekeeping. We have carved out some time for Q&A towards the end of the presentation. So I'll make sure to type your questions into the questions window, and we will get to it right after the presentation. I also want to mention that we're doing a live tweet during the webinar. So please use hashtag #YBLive as it shows on the screen here to participate and retweet. And so we'll begin.
      </p>
      <p>
      	I want to talk a little bit about the evolution of data, warehousing and analytics, and particularly in the areas of usage data size, users' consumption and platform. So what we're seeing is that usage has gone from daily batch reports to interact BI, to ad hoc and machine learning and artificial intelligence. And what's resulting is that the data sizes are actually increasing. So yesterday, data is really about terabytes. And what we're seeing now is hundreds of terabytes, even hundreds of petabytes as we move forward. And there are reports that say that in fact data sets are going to grow even further to exabytes users are growing from tens to hundreds to thousands. And we see an evolution with consumption. Let's say a few years ago, we saw a lot of on premises, dedicated data, warehousing, a lot of hardware that was sitting on premises.
      </p>
      <p>
      	There's been a migration to public cloud or private cloud. And we see that evolution to hybrid cloud and private cloud and platforms. There were disparate databases in, within the enterprise environment and enterprises that embraced dupes, but there were still some disparate databases in their environment. And frankly, some challenges with Hadoop. What we see evolving is an evolution to spark and lake houses, but throughout all of this evolution, legacy data warehouses have been challenged and haven't been able to keep up, but, you know, newer systems have their challenges too. As I mentioned before, Hadoop has its challenges and there's this failed promise of Hadoop. Current data lakes are massive. It's really difficult to retrieve information from them, even though Hadoop is open source, it's been expensive to operationalize and migrate data sets to the data lake. And this has resulted in escalating costs systems, just simply scale to meet the data requirements for today.
	    </p>
	    <p>
	    	And enterprises have been stuck. The only solution for them has been to keep building out. And so costs are becoming unmanageable. Some of these unmanageable costs have driven enterprises to public cloud migration for their data warehouse. But what a lot of enterprises don't realize is there are hidden subscription fees and operational costs when you migrate your data warehouse to the public cloud, there's high latency when you try to access your data. And if you're a very large enterprise, particularly in financial and healthcare, there's a lack of data ownership and data privacy. That's very concerning, especially when you look at HIPAA regulations and keeping a client's financial client information secure.
	    </p>
	    <p>
	    	So at Yellowbrick, we have a view of the cloud. We believe that the hybrid cloud is the future. Large enterprises will have their databases and data warehouses will exist on premises and in the cloud. And then what they really need is the same database technology in both places to enable agile migration on premises, environments will evolve to become more private cloud-like because enterprises now want that cloud flexibility from the public cloud, including elasticity, provisioning and multi-tenancy, but they want that on their private cloud environment, cloud providers don't enable multi-cloud today. And so what enterprises are experiencing are, they're what I call public cloud providers. Lock-In, there's just this lack of flexibility. You're not able to change out your public cloud provider. And in fact, we have some of our customers who have multiple cloud providers because of exactly this reason, this lack of flexibility really doesn't do the applications and data very well because today more than ever, we need flexibility with our applications and data cloud software-only solutions are strategically disadvantageous. So if you think of cloud software, only companies like snowflake and Vertica, they're actually competitors with the very cloud providers upon which their services are running, which doesn't make for a very healthy business model. And what some of our customers have been telling us is that there's poor concurrency, excessive costs really not practical for large datasets. Remember I told you before that data sets are actually expanding and migrating to exabytes worth of data and other things that we hear that there's inconsistent performance on the shared infrastructure.
	    </p>
	    <p>
	      So what's the solution? The solution is a modern hybrid cloud data warehouse. That's a data warehouse that consists both on premises and in the public cloud. And there are some key attributes to a hybrid cloud data warehouse that are really important for enterprises. One of them is lower equipment costs. So I'll refer previously to the comment I made, which was that costs were becoming unmanageable. Particularly if you continue to build out your equipment on premises with a hybrid cloud solution, you can have the best of both worlds. You can build up your own premises and you can also migrate your workloads to the cloud. And in this way, as you look at migrating non-critical workloads to the public cloud, you actually have a higher level of control over your enterprise data. You can choose to put your mission-critical data on premises, where you're assured of data integrity and data security, and be able to migrate noncritical workloads to the public cloud and by doing so, this gives your users flexible access to data. So now your users can access data wherever they need it whenever they need it. And as business needs it. And for particularly the mission-critical data insights, you can ensure that you have low latency because you can put those data sets on premises. And at the end of the day, this all leads to powerful, interactive analytics because now more than ever, we need to have key insights at our fingertips.
	    </p>
	    <p>
	      So I'd like to introduce you to Yellowbrick, the only modern hybrid cloud data warehouse, ideal brick. We believe that by empowering enterprises, we can empower in price to do the impossible with their data. We believe in freedom of data, location enterprises should be able to store their data wherever they choose, whether it be on premises or in the public cloud and in doing so, they should have freedom of data size, be able to manage with confidence, the larger data sets that they need to mind for insights. And we also believe in freedom of data, motion data should be able to migrate seamlessly from wherever you store it, whether it be public cloud, multiple public clouds or on premises.
	    </p>
	    <p>
	      So for some of our solutions, we have three solutions that we offer both for an on-premises cloud service and cloud disaster recovery. And the on premises is a subscription model. And it's a data warehouse instance with innovations in compute, storage, networking, and software. We've purpose-built this hardware incident to address some of the challenges that I talked about earlier. And the result is that we have a hardware instance that is extremely hyper, high performance, and is a small port front with access extensible scale. And actually, you'll hear more about that from Ray later on in the presentation. We also have a cloud service solution, also subscription model-based, and it leverages the same hardware innovations in the cloud as with the data warehouse hardware instance. And we support all three public cloud vendors, including Azure, AWS, and GPC. And we also have a cloud disaster recovery offering, which has based failover and failback so that you can ensure business continuity even during a disaster.
	    </p>
	    <p>
	      So, you know, what's so special about Yellowbrick data warehouse, we offer unparalleled performance. Remember all those innovations that I talked about previously, those are all purpose-built to deliver the high performance that enterprises need for very large datasets. But on top of that, we've actually integrated. And with purpose-designed everything to be innovative and simple, our hardware instance, our offerings are all data ready with very little tuning required and integrated with sophisticated UI tools. And of course, we also offer flexible deployment. We have offerings that are on premises in the public cloud and the hybrid cloud next Ray, we'll talk about some of our use cases and in particular, a customer case study, and after that, we'll field questions and answers over to you. Right.
	    </p>
	    <p>
	      <span class="speaker">Ray Canuel: </span>Okay. Thank you, Hema. Yes. I'm going to go through a couple of different use cases and feel free to ask some questions and I can come back to those at the end if we want to go deeper. One of the first use cases I'd like to talk about is you know, how we fit within a data lake environment. A large number of our customers actually have deployed Yellowbrick in this type of architecture which you kind of find out of all of them is that these daylight environments, they're a little problematic when you want to layer on ad hoc query tools. They're problematic in that there's ad hoc query tools. Maybe they can't go against the raw atomic data, but they have to go to summarized or aggregated data based on the atomic data. And the other problem that they typically find is it's kind of hard to do joins across multiple different tables in a data lake environment.
	    </p>
	    <p>
	      So there's like a data modeling exercise that has to flatten out the data into a nice wide table for the ad hoc query tools to go after it. So what they like about Yellowbrick is that you can hang a Yellowbrick instance right off of that data lake environment. Think of it as a spoke to the data lake hub. And if you can pull over any subsets of the data from the data lake, and that could be in any type of format it might be, Avro format files, parquet, or CSVs, or what have you. And that data can just stream directly over to a Yellowbrick environment. And then you can just load and go. As soon as it's landed, it's committed that the users can layer on any of those third-party tools against that and get incredible performance right out of the box.
	    </p>
	    <p>
	      Now, how does that happen? Well, the way that we've done this is to actually create this spark connector for Yellowbrick, which allows you to stream the data seamlessly from the data lake environment. So it never lands on an intermediate disc and it's partition aware that it can actually leverage all the partitions or even a subset of the partitions of, of the data lake environment. And it's also grid native. So if you want to deploy and submit one job and actually run it within a Mesos or a yarn environment, it'll actually saturate the data lake environment to really try to feed our loader as fast as possible to be able to get the data into Yellowbrick. That's one thing great about our loaders. We load wine rates, so we can fully saturate the network that's between the data lake environment and the Ulbrich instance. And at that point, it's just load and go.
	    </p>
	    <p>
	      Now, once that data is actually loaded, now, most of the time there's a lot of third party tools out there. There's no company that has one standard. Now the good news is there is a standard which is SQL where the majority of all these tools access databases and Yellowbrick is a SQL compliant database. And the other good thing about it is buying design. We maintained a Postgres dialect that comes into Yellowbrick, and that's been around a long time and there's a lot of expertise out there around Postgres. And, and so with that, you get very low training right out of the box. If you know SQL and more importantly, even if, you know, Postgres, you can barely get up to speed right away against a Yellowbrick system, but with third party tools, they generate that SQL. And so the good thing about leveraging Postgres, it's not only just the dialect, it's also the drivers.
	    </p>
	    <p>
	      So we maintained mates made sure that we didn't create another proprietary set of drivers that third-party tools had to integrate to we, we, we leverage the Postgres JDBC, ODBC drivers, and that means to you, the customer, there's no additional licensing that you have to worry about for those seats. So you could deploy it to as many as you want. You wouldn't have to track it or worry about it. And then you also get that out-of-the-box connectivity that those legacy applications have really always, we're just riding that Postgres connectivity that they've already certified and validated against.
	    </p>
	    <p>
	      And so the other thing about data movement, as you see, is that the traditional way of doing ETL jobs monthly, weekly, or nightly of pulling from source systems, pulling some transformations and then making the data ready for consumption by those applications is being shortened. What, what people are, and companies want to get to is more near real-time. They want to do trickle feeds. And so how do you do trickle feeds against Yellowbrick is, is really, really one of two major technologies. And what you see has changed data capture, it's been around for a number of years, and that technology kind of scrapes traditional databases as a source here, I'm showing like Oracle or IBM or Microsoft. And, and as it sees those committed transactions to the logs of those databases, these CDC technologies like stream Attunity and Oracle will actually scrape those logs and, and create the transaction was, it was an update or delete or an insert to be able to recreate that, and then stream that over to a target database that's different than the one it was scraping from in this case, it would be Yellowbrick.
	    </p>
	    <p>
	      And so, and so with that, you now have that set up for all of the different sources, and now you can synchronize and trickle feed the data again, as a stream directly from the source to the target. And now you can shrink that daily synchronization down to the, down to the minute, down to the second level. And then in addition, there's another technology that's around Kafka where and confluent, where Kafka might be. It could actually pull data from legacy databases also, or can pull it from operational log files or systems, and then create that data so that it can become a topic that in that topic and now be extracted, and then used to update the target database in this case, Yellowbrick, and again, creating this under very low latency, being able to trickle feed this data makes it all tiling.
	    </p>
	    <p>
	      And if you think about what I just said earlier about going after aggregate or summary data, well with Yellowbrick, we do a lot, we do away with a lot of summary tables because now we can do over the performance against the atomic data faster than the legacy data warehouses did it against summary. So with that, now we can trickle feed the raw atomic data. And now the reporting environments don't have to rely on the aggregated data and they can go directly at the atomic data and see these new real-time changes to their data. And in near real-time, huh?
	    </p>
	    <p>
	      Now the other use case, obviously we are a data warehouse built on and the access method SQL. So the other thing that a lot of users and customers do is they take existing data, monitor data warehouses and replace it with Yellowbrick. In this particular instance, you see, on the left-hand side, the legacy system of, of six racks of storage being replaced with only six, you have a footprint of a Yellowbrick system, that's 10 inches. And the standard rack that sits in that customer's data center, those six racks, is equivalent to all the storage. Then the internet worked to compute the database, the operating system, all of that. Now, just because of that physics, this is an apples-to-apples comparison. Even though it's only six U it's the same data model, the same data volumes, being able to deploy that and just six you foot footprint.
	    </p>
	    <p>
	      And then once the data was loaded with no tuning at all, we were able to deliver a three to a hundred times performance improvement across all the ETL and reporting needs and diving into that customer. And that customer's name is Tokyo. And I think what Tokyo is interested in is that their business is all-around analytics as a service. They deliver analytics to their customers. And so when they have to deliver it to these customers, these telecommunication carriers around the world, it's all about doing it at a known price point. They do not want the variability of the pricing that could occur, let's say, in a cloud environment. And they want to be able to do it in a high-quality manner. And they want to deliver new services very, very quickly. And their data sets are very large. If you think of the telecom industry and your cell phones and everything is connected through that the volumes are staggering.
	    </p>
	    <p>
	      And when they were doing the apples-to-apples comparison, again, they reiterated, they understand databases very, very well, as well as MPP databases. And to be able to just lift queries as-is with no tuning whatsoever, no training or anything, they were up, they were up and running within days, being able to really exploit the power of Yellowbrick, unloading all the data. And they actually even found some things that they could never run before. Some very large types of operations, like being able to dedupe deduplication atomic data at the, at the monthly level versus the daily level to be able to do something like that, that really just dim the lights in the building they were able to do then they never did before. And all of this, again, talks about cost and there's, there's hard cost savings in that previous slide where you're, you know, your pains some colo provider to house, those racks and racks of, of compute and storage, to be able to shrink that footprint has hard savings right to the bottom.
	    </p>
	    <p>
	      And I mentioned a few of the tools within the ecosystem. I wanted to actually share with you a broader view because it's more than just data movement, more than, you know, BI visualization tools because y'all are grit, you know, really is a combination of, of the hardware and the store and the database management system. We actually have very, very tight tech technology partnerships with the storage industry, the chip manufacturers, as well as the networking manufacturers, as well as the public cloud. He and I talked a lot about them. Doesn't matter if you're with y'all Breck, if you're on an on-prem or in a cloud offering you have the ability to move data to, and from the public clouds easily with it, with our tooling and as well as security there's, you know, there's a lot of things around security authentication. I mean, there's some things, these are third-party companies, but also active directory and L-DOPA authentication securitization as all paramount with us. And then, and then we've also seen a lot of you know, SIS and consulting firms that are really, really looking for the hybrid strategy, because there are customers out there that are looking for both they're looking for hybrid to them means not just multi-cloud public cloud hybrid means a combination of on-prem or in the cloud or both.
	    </p>
	    <p>
	      <span class="speaker">Hema Ganapathy: </span> Thank you, Ray. So I want to conclude by highlighting what Yellowbrick does for your business, with the unparalleled performance that we provide. We actually scale to manage your largest datasets with innovative simplicity. We make your business more efficient and with flexible deployment, we ease your migration to the cloud and to hybrid cloud. So I want to encourage you to visit our website, see what Yellowbrick can do for you and book a demo today. Also follow us on Twitter, Facebook and LinkedIn. The URLs are listed there and we're going to go to some questions now. And Ray, we have one question here that says how easy is it to load and unload data on the Yellowbrick plot?
	    </p>
	    <p>
	      <span class="speaker">Ray Canuel: </span>That's a great question. So I think we have one of the best letters that was ever created against the database. We simplify that tremendously most loaders high-speed loaders within databases there, you have to, you as a customer have to split it up. The data feeds into multiple files in order to saturate the database, or you have to install or load the data locally on the database server with Yellowbrick we're as fast over the network then loading locally. We can load any number of files with a single high-speed load command. Those files can be of any format that could be compressed, or they can be uncompressed. They could be in the file system, or they could be, let's say an S3. And the best practice is really just one. You run one of our loaders and it will just saturate the Ulbrich appliance across the network.
	    </p>
	    <p>
	      And typically what we see is we know how fast it will be because it'll, it'll saturate the network card and we make it best practices, recommendations to the customer saying, listen, you fully saturated this 10 gigabit, you know, you could probably do you could get to double that if you added another card easily. So and then, and then the other thing is some database vendors, they can only load the data. They can't really unload it. Oracle's really hard to get data out of with us. There's why we load and why they unload and so everything that you do to get it in all the capabilities, I just said, worked the same with getting the data out.
	    </p>
	    <p>
	      <span class="speaker">Hema Ganapathy: </span>Thank you, Ray. There's another question here. You spoke about the spark connector, what data sources does elevate support?
	    </p>
	    <p>
	      <span class="speaker">Ray Canuel: </span>The spark connector? It's pretty much that the great thing about spark is it can really support just about anything. We can get to any of the data really via spark. And a lot of the things that you see just with two little tags, like if it's an ORC file, it's the file and Hadoop would have maybe a dot ORC extension. And then you would just say format org you could do an Avro, you could do a parquet file. You could do Jason XML, CSV, text files or even a JDBC connection. If you want it. Now you could do any of that. And the spark connector also is not tied just to Hadoop. You could also run spark in a standalone mode and you could have that pull data from anything even that's not to do. So that's the other great thing about the spark connector.
	    </p>
	    <p>
	      <span class="speaker">Hema Ganapathy: </span>Any other questions? I believe that we have some questions in the question window.
	    </p>
	    <p>
	      <span class="speaker">Ray Canuel: </span>So there's one: do you support Tablo? And yes, Tableau is actually a very, very easy tool, really a beautiful tool and running queries makes great graphics and whatnot. And that's one of the ones that you see a lot about. I've seen caching of aggregations and stuff that customers had to go against aggregated tables to facilitate Tableau performance. And so one of the benefits of Yellowbrick is, you know, if you can bypass those aggregates things, get a lot better because then you go against the raw data. You go back, it's more timely, it's more up to date. Now you can facilitate trickle feeds and then Tablo just rides off of all that. And then on top of that, we do joins great. So it's no problem joining different data sets within Tablo. That's not gonna have a great performance impact.
	    </p>
	    <p>
	    	One other question about S3: do you have to load from S3? And the answer's no, if you're in an AWS environment, I'm assuming that means if you're in an AWS environment, let's say you have a Windows or a Linux instance running in an AWS we can stream the data directly from S3 or from a local file store or from one of those applications. You can see one like a CDC application or a Kafka instance, all that could be streamed. S3 would not be a requirement for Yellowbrick as a source or a target.
	    </p>
	    <p>
	      <span class="speaker">Hema Ganapathy: </span>Thank you. There's another question here that says, what is the difference between hybrid cloud and multi-cloud I think is a great question.
	    </p>
	    <p>
	      <span class="speaker">Ray Canuel: </span>Yeah, so multi-cloud multi-cloud is just one of the three, you know, GCP, AWS or Azure and, and people think multi-cloud is hybrid because you're, you're picking one of those, one of those three at Yellowbrick. When we, when we say hybrid, we really believe that it's, it's a combination of, of an on-prem offering or access from a public cloud or both. So in, in, you know, Rick, you could have a, let's say a production system that, that is starting off on premises, but at some point, you want to migrate it to the cloud, but you could use our replication technology and solution to be able to keep that target and in the overcloud up to date. And then you could actually switch over to that as being the production instance, and then maybe on premises goes away or maybe on premises becomes the der it's all subscription-based pricing, so you can just do what you wish. So hybrid really means, you know, cloud and on-prem and the hall.
	    </p>
	    <p>
	      <span class="speaker">Hema Ganapathy: </span>Yeah, I agree with that. Thank you. We have another question here. If our DBA does not turn on logging to the granularity we need, what are the options?
	    </p>
	    <p>
	      <span class="speaker">Ray Canuel: </span>So that would probably be on the source system, I guess when you're talking about the trickle feed that I was talking about. So if they don't turn on the logging on the sources and those trickle feeds technologies like stream and Attunity we'll have a problem. If you read those setup guides, they actually require that the logging be turned on, so that's, if they're scraping the logs, they have to see those records come into them. So if that's not the case, and then there's no way you can turn that, then you probably have to go to the traditional ELT approach where you unload the data from the source system, and then feed it to Yellowbrick via our great high speed loader. Why beat load? Now, you don't have to, you could use a traditional ETL tool like Informatica and talent or DataStage or any of those are SSIS, and you could build ETL jobs that do that. There's also customers that have built low code implementations of just a short, concise utility that can actually just stream the data over by doing a high-speed unload, whatever that tool is of choice for that database was the fastest way to get data out of source Oracle system stream it directly to our, what are our high-speed and then the data moves over to Yellowbrick.
	    </p>
	    <p>
	      <span class="speaker">Hema Ganapathy: </span>Great. We have one more question. Actually, there are many questions, but we only have time for one more. The question is, have you migrated any Teradata system into Yellowbrick? If so, do you have any tools to automate the data and processing?
	    </p>
	    <p>
	      <span class="speaker">Ray Canuel: </span>The answer to that is yes. And yes. We have actually a large piece of our customer base, our Teradata savvy. They have Teradata already installed. There's if you do a side-by-side comparison of looking at Teradata to Yellowbrick again, the foreign factors look smaller, but if you look at just the DDL, then the data, the DDL itself there's a lot more complexity in a Teradata environment that goes away. We kind of find that and for that away and just keep it real simple and Yellowbrick, and then moving the data. There is actually a very very simple, low code implementation of streaming the data out. There's a fast export TD build. I think it is another option that we'll actually do a high-speed extract of a terabyte Teradata table, actually, any query. So you could even feed it a query, and we send that directly to a stream, to a pipe where our high-speed loader just ingests that and streams that directly over to you.
	    </p>
	    <p>
	      <span class="speaker">Hema Ganapathy: </span>Great. Thank you. Okay. We're going to take one more. Excuse me. I'm just sorting through well, here's a good question. Do we have a Crile version, right?
	    </p>
	    <p>
	      <span class="speaker">Ray Canuel: </span>Yeah. So just about every one of our customers has tried Yellowbrick before procuring it. So you know, it's available in our, in our cloud offering. It's also available on premises for those, for those trials and that's easily accomplished.
	    </p>
	    <p>
	      <span class="speaker">Hema Ganapathy: </span>Thank you. And then there's another question here that asks will this webinar be available after this meeting? And the answer is yes, this webinar is, has been recorded and we will share the link with you so that you can view this webinar after it's done. And so we're going to wrap up the questions I do want to thank everyone. We had quite a few questions. So I want to thank you all for asking your questions. And I just wanted to say that we actually have another webinar coming up next year. Next week, we have a presentation on the benefits of a modern hybrid cloud data warehouse, where you can learn more about how hybrid cloud data warehouses can help your business. So we'll go into a little bit more detail from what we talked about today. The date for that webinar is April 8th at 11:00 AM Pacific. That is on our website, and we'll be tweeting that and putting that out on LinkedIn and Facebook as well. We really appreciate you being here. Please don't hesitate to email us at info@yellowbrick.com and please stay updated on social media for our upcoming webinars and follow our trends and best practices on Twitter and LinkedIn. Thank you again for joining us today and we'll see you next week. Thank you.
	    </p>
    </div>
    
  </section>

	

	</Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Yellowbrick Hybrid Cloud Data Warehouse Demo',
    meta: [
      {
				key: 'description',
				name: 'description',
				content: 'Watch as Ray Canuel walks you through the award-winning Yellowbrick Hybrid Cloud Data Warehouse.' }
    ]
  }
}
</script>



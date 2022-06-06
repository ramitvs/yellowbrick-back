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
			<h1>Powering Your Power BI with Real-Time Speed</h1>
		</div>
	</section>

	<section class="bg-white py-12 md:py-20 z-10">
		<div class="w-full max-w-800 mx-auto">
			<BaseWistia id="j52lyub9kh" />
		</div>
	</section>

	<section class="bg-white py-12 md:pt-0 md:pb-20 z-10 ">
    <div class="w-full max-w-1200 mx-auto px-8">
      <h3 class="accent-heading">Transcript</h3>
      <p>
        <span class="speaker">Bhuvana Ramakrishnan: </span>Hello everyone. Thank you for joining us for today's live demo. I'm your host Bhuvana Ramakrishnan, director of marketing at Yellowbrick. In today's demo, we will show you how you can achieve real-time speed with Power BI and query terabytes of data and subseconds. Joining me today is Joey Foley. Joey has close to 20 years of experience in data warehousing, running massively panel databases designed for analytics. At Yellowbrick, he is responsible for all flash architecture, taking performance and simplicity to the next level and breaking speed records for processing queries against extremely large data sets in the tens or hundreds of terabytes or petabytes. Before joining Yellowbrick, Joey worked at Netezza and also spent eight years at the department of veterans affairs office as a data scientist and lead architect, modernizing their data processing platforms. So before I pass it over to Joey, I'll do just a little housekeeping. We have carved out some time for Q&A towards the end of the demo. So type your questions into the Q&A box of your control panel, and we will get to it right after the presentation. Now without further delay, over to you, Joey.
      </p>
      <p>
        <span class="speaker">Joey Foley: </span>Thanks, Bhuvana, and thanks everyone for joining and welcome. We're going to be doing a Power BI demo with Yellowbrick to show you, kind of, some of the speed and performance that we have in the system. So I wanted to start off with a poll question. What's your current analytical platform, and I'll give you guys a couple of seconds to answer that. You know, I guess another question we could ask, Bhuvana, is do you enjoy your analytical platform? And I think that's an interesting question that we sometimes forget. This is a lot of fun doing analytics and especially when you have speed and performance. So give it a couple more seconds here on the poll.
      </p>
      <p>
      	It looks like we have some Natezza folks, Hadoop, Teradata, good, and other cloud vendors. Great, interesting stuff. Why I think that you guys will have some fun today when we walked through the demo and let's get into a couple of slides here to talk about Yellowbrick. Thanks. Bhuvana. So the world's largest enterprises run Yellowbrick, and even though you might be new to Yellowbrick, we've been around a couple of years and we're really in these kind of incredible businesses and they're probably already affecting your daily life. So if you think about it, if you have a credit card, you, you've probably had some of your data analyzed and processed with Yellowbrick, or if you've made a cell phone call, the analytics to handle the billing for that runs on Yellowbrick, or if you've bought something online from somebody besides Amazon, you've had your data secured with Yellowbrick, or if your doctor uses electronic medical records, there's analytics being done on those records on Yellowbrick today.
      </p>
      <p>
      	So what is Yellowbrick? So what we say about Yellowbrick is it's the only flash-optimized database in the world. And what we've done is we've created a new way of processing data on hardware. And it's kind of changing the way we can process data. We've kind of revolutionized that concept of the way data flows across the CPU and things like that. And we can schedule a deeper dive on architecture if anybody needs to do that. But what we wanted to do when we pulled that disruptive innovation into a database, we wanted to be able to kind of hit all these key points, but real-time feeds being able to do bulk loads, interactive applications, of course, powerful analytics, but all of those things, we wanted to do that with, with using ANSI SQL and to the outside world, we look like Postgres.
      </p>
      <p>
      	So you can configure a Postgres driver and you can connect widgets to us. So it is very easy to integrate into your environments. And, again, it is very easy to migrate your SQL over to us. Yellowbrick is also a hybrid cloud solution. So our hardware can be developed and delivered on-prem in your data center, colo, edge. We also have a Yellowbrick cloud and what it does is it's not in a specific cloud, it's adjacent to the cloud. And we do that because our specialized hardware has to be run on our platform. It's the only way that we work with that hyper-converged environment, but it also allows you to connect to multiple different clouds. So maybe you have users in Azure, but there's a new ML tool in Amazon that you'd like to use. Well, because your data's not resident in one of those clouds, you can connect to them and there's no ingress or egress charges associated with Yellowbrick.
      </p>
      <p>
      	So let's talk about the demo system that we're going to run today. This is going to be, of course, the Yellowbrick cloud, and we're using an AWS EC2 instance. Then that's running Power BI on Windows 10, and we use AWS direct connect to connect to this, but we could have done this with a private link or any other variation, VPN connections, all kinds of stuff like that. And the demo today, I'm going to be using this data set that was generated using a tool called Synthea. Synthea was developed by MITRE and it gives randomized data associated with patients like, ICD 9 and 10 codes, things like observations, things like that. So without further ado, let's jump over to the demo. So the first thing I like to do here is to just do a pink test and people ask, well, you're not in the cloud of a certain vendor.
      </p>
      <p>
      	What does that mean? And it really means that we're less than a millisecond away. So that's not going to affect your performance or anything like that. So let's do that real quick. And let me jump over here. I want to show you guys our management console? This is when we log into that Yellowbrick, and this is again, that same IP that we just pinged. We log into the system and we can get a very quick idea of what's going on with the Yellowbrick environment. We get a green light up here that shows us the status of the system. That's good. We can see that this is a 16 blade environment. So this is one of our medium-sized systems. We can scale this all the way up to a 45 blade environment, and that system can handle up to 3.6 petabytes of data and some even larger.
      </p>
      <p>
      	So we can see this system has about 129 terabytes of total diskspace and temp space as a reserve and things like that. We get a really good definition of what's going on with the system here, like IO activity, how many CPU requests that are coming in and a user's information and things like that. So Yellowbrick supports multiple different databases. And we do that with simplicity in mind. So if I want to load data into this environment, I can create a database, create a table and start loading data. And I don't want to have to think about indexes or other things like that. And so I want to drill into this data set here. This is the one that I created with Synthea, and you can see there's observations, tables and counters. We've got procedures, conditions, patients and lots of different information.
      </p>
      <p>
      	And so in this database, we can tell it's got about 86 billion rows and about 3.3 terabytes of data associated with it. And I can get some information about some of these tables by just double-clicking on them. So right here, I can see that this large observations table has about seven and a half billion records associated with it. Now on disc, it only takes up a little less than a hundred gigabytes, but it's compressed at 9.4 a ratio. So that, really, that table's about almost a terabyte, just shy of a terabyte, right? So a pretty large table. Oh, the other thing that's interesting about this. When we look at the data, we can see a lot of interesting information about the size of these tables. And I've created this specific table for us to look at a little bit later in the demo.
      </p>
      <p>
      	This is the observations table. I took that observation table and I folded on itself 10 times and we'll do some queries against that table as well. So let's hop over into Power BI. The reason why we're all here. So standard Power BI. I'm going to go in and I'm going to get some data. And will this thing pop up here? Here we go. So just like I said earlier, we’re going to configure Postgres drivers. To the outside world, we look like Postgres. And so once we get that configured here, we'll import some tables into the environment and we're going to go out for that healthcare dataset I just mentioned. Okay. Now the connectivity mode, we're going to be using direct query, import mode pulls the data into Power BI, direct query actually pushes the query down into Yellowbrick, and we use the power of it rather than this EC2 to incidence.
      </p>
      <p>
      	And I'm also going to include the relationship columns with these tables as well that I'm going to import. We’ll give that a second to populate. All right. So let's grab some of these tables here. So let's get the conditions and encounters table. Maybe the medications observe patients, let's get procedures and providers. Procedures too. There we go. So, what we're doing now is Power BI will run a sample queries against some of these tables and we'll build the relationships associated with each one of these. And it's going to pull the foreign keys and the primary keys associated with those tables from the database. And then it will populate those inside of Power BI. Let's give that a second. There we go. So now, if I go over to this screen here, we can see the relationships between the different tables, foreign keys, and primary keys and things like that.
      </p>
      <p>
      	Now we don't enforce those, but we do recognize those for the optimizers. So it's very beneficial for you to go ahead and declare those on your tables. So let's start to pull in some visualizations here and interrogate this data. So the first one I want to start with is the patient data. And let's look at by state and maybe what the healthcare expenses are associated with by state. So this table has about 24 million rows associated with it. And we were able to analyze that data that quickly. Now, I like to look at the data while I'm doing this. So this was a summation of the health care expenses by state. We rolled that up, but maybe let's look at some other attributes here. Like, what was the average cost that was paid? Again, New Hampshire looks like it's pretty far up there, but maybe there might be some interesting stuff about the accounts of individual users too. Well, it looks pretty linear.
      </p>
      <p>
      	You know, this is a generated data set, but let's break that down, maybe by gender here. And again, we're categorizing our data and we're just dragging and dropping fields. And this is a table with 24 million rows in it. So, and we're just doing this, you know, as fast as we can click on something, maybe let's look at the standard deviation. We'll calculate that for males and females. So again, this is happening as fast as we can drag these artifacts over. So maybe let's break this down by race and see what that looks like. Again, there's some pretty good demographics, and we're getting that just as fast as we want to think about this table. So that's this table. Let's actually look at one of these larger tables that we have, right. So I like to do the treemap here and maybe let's dig into the encounters, right?
      </p>
      <p>
      	And let's look at the total claim and by description, and we'll wait for that to generate. So again, this encounters table has almost 1 billion records in it and it is categorized and grouped these on the fly. And so here, we're looking at a general examination, so that's just going to see the doctor, that makes sense, right? That would probably be the highest value of things. Well-child visit. That makes sense. But maybe let's look at the average cost. Right. See what that looks like. Hmm. It's like everything kind of matches up, I guess that's kind of like a co-pay cost, something associated with that data. So, yeah. And we're drilling into this data and it's happening as soon as we can pull the data over. That's the encounters table. Maybe let's take a look at the procedures table, right?
      </p>
      <p>
      	So this is going to be based on the ICD-10 codes. And let's look at the descriptions here. So we here we see subcutaneous immunotherapies seem to be the highest value. And remember we generated this data. This table has, you know, 740 procedures, 740 million records in it. So and that's the sum of that. So maybe let's look at the average costs. So loan transplant let's look at the data associated with that. That might be something interesting. So that's the average cost. Wonder what the maximum of the base cost is. Again, lung transplant procedure that comes up and let’s switch this theme here so we can see this color better. Coronary artery bypass. Maybe standard deviation might be something interesting again, that we could look at on this chart. So again, lung transplant seems to be the highest variance of costs that we're seeing.
      </p>
      <p>
      	So interesting stuff. Now let's do another graph here. I want to use go after this observation table, right? So we have talked about this observation table. It's got about seven and a half billion records associated with it, right? And so I'm going to pull in the description and let's do a frequency count of the descriptions of the observations. This is running in our appliance right now. And I want to flip back over here and show you something. So we can monitor this environment, active queries and loads and things like that. Also execution time of queries. And I wanted to show you guys something we're actually running a lot of other queries on this environment, as we're doing this. This isn't a quiet system and we do this because you're not going to get a quiet system, if you have a Yellowbrick, you don't get one to yourself.
      </p>
      <p>
      	So this is simulating about 600 other users that are running after queries with ad hoc think times and things like that associated with it. So again, we had seven and a half billion rows that we just analyzed there and, and that happened in a matter of seconds, right? So I'm going to do one other query. And I've mentioned this rather large table that we had. It's that observation table. Let me click back over and show you that the guy. Observation tenants. This table has almost 75 billion records in it. Okay. And I'm going to import a view that I created. That's going to be doing some joins across this. So here's that view that I created, let's load that. And again, we'll use direct query mode. We don't want to try to pull back 75 billion records into Power BI. Might be a little problematic.
      </p>
      <p>
      	Okay. There's that table. So what I want to do with this table, and let me explain what this view does. What this view does is it joins together that giant observations table with the patient table and the encounters table. And so I can get some demographic information like state. And then I'm also looking for all the observations of BMI that was calculated. And so this is actually doing quite a few categorizations of the data in the backend. And again, this is 75 billion rows, and that query ran in just a couple of seconds. Right? What's interesting about BMI is that BMI is not something that we just measure. It's usually categorized into categories. And so what this query is also doing is categorizing this BMI by what is the actual outcome of that BMI? Is it, are you overweight or underweight? Things like that.
      </p>
      <p>
      	So again, seventy-five billion records, we're doing the calculation and the categorization of this data, and it's happening in real-time. Super easy for us to click into this thing and drag and drop and get outcomes as quickly as possible. Let me switch back over here and show you a couple of other things that are interesting about this environment. So this is the execution timeline of that we've dedicated resource lanes to every single one of these different groups. So we can guarantee resources to those groups. And here's that query that we just ran. And we can drill into that query and get a lot of good information about that too. So it's the healthcare table. We can get a summary of that, what it was doing when it scanned through that table,  we could see the history of that query running. We can get statistics about that query.
      </p>
      <p>
      	So was it queued for a long time? And that query that scanned all those records happened in less than six seconds. So that's what I wanted to show you today in Power BI and the power of Yellowbrick driving that. So when I think about Yellowbrick, these are the kinds of things that I want you to remember and take away. We can support multiple terabytes to petabytes of data and its in-memory performance. So that's hundreds of times the scale that she's typically seen in other database environments, we offer deployment flexibility. So you can have it on-premise or in our hybrid cloud-hosted solution. And it's incredibly simple to use this product, and it packs all the enterprise features that you would expect from a tool like this. So I wanted to stop there and see if anybody has any questions that they like to ask, or if we have any other follow-ups that we need to do.
      </p>
      <p>
      	<span class="speaker">Bhuvana: </span>Absolutely. Thank you, Joey. We'll go ahead and take some questions. And just as a reminder, please make sure to type your questions in the Q&A box at the control panel. And we are having quite a few questions trickling in, and I will start with the first question that we received and here is one, Joey. We have been on Yellowbrick for more than a year now and one of your initial customers. Thank you very much. And that's great. So the question here is, do we have any Power BI connector, which is native to Yellowbrick, and is it gateway compatible?
      </p>
      <p>
      	<span class="speaker">Joey: </span>I'm not sure what you mean by gateway compatible. But there's not a specific Yellowbrick connector for Power BI. And that's because with that direct query, we can push the queries down into the environment. If we wanted to do more complex stuff, you can always build views like I did for the demo to kind of help formulate or push down a specific query that maybe you can't build exactly right in Power BI. And that's always something that you can do as well. The gateway question, sorry. I'm not sure I quite follow that one.
      </p>
      <p>
      	<span class="speaker">Bhuvana: </span>We'll get to that. We can follow up for sure. The next question is did you have to set up the distribution key or did Yellowbrick do it for you?
      </p>
      <p>
      	<span class="speaker">Joey: </span>When we define a table, we define the distribution of that table. Now in Yellowbrick, you have a couple of options, right? You can define it as if it's a small table, we can replicate it on replicate. So it'll copy that table to all the individual nodes in the environment. We can do it at random, of course. And when you do specific queries, every query goes in a tax app problem, or we could pick a distribution key. And in this case, we did actually pick a distribution key. Most of these tables are associated with the patient in this healthcare dataset. So patient we distributed almost every single table in the environment.
      </p>
      <p>
      	<span class="speaker">Bhuvana: </span>All right. Here's another question: we have tried similar reporting with about 20 billion rows with direct query and with the same drivers. The only difference I'm seeing from what we have done and from the demo is that we have added the relationships in Power BI manually. Do you recommend the relationship- Let's see. Do you recommend the relations that present in Yellowbrick or optimal?
      </p>
      <p>
      	<span class="speaker">Joey: </span>Yes. Yes, I would. Even though we're not going to enforce them in Yellowbrick, the optimizer will still looking at those keys and using those to find, like, is that the distinct primary key record. And it will use that to define those relationships between the tables as well. Again, we don't enforce it, but it's always great to define those things.
      </p>
      <p>
      	<span class="speaker">Bhuvana: </span>All right. Thank you. All right. The next question is, what is the benefit of your device in Colo? I get the cloud part, the appliance part, but don't understand how the Colo device helps. Can you explain?
      </p>
      <p>
      	<span class="speaker">Joey: </span>What we mean by that is some of our customers need replication, and so they have disaster relief protocols in place for their data and the enterprise systems that they have. So what I mean by Colo is you might have a primary production environment in one location, and in a separate city, or on the other side of the US or around the globe. You might have a secondary Colo system, and we can use our internal replication to sync those systems even around the globe. And it's just whatever the network speed is, keeps those systems in sync. It takes about a minute timestamp. And, and that's what we mean by Colo. We can keep those two systems in sync with our internal replication.
      </p>
      <p>
      	<span class="speaker">Bhuvana: </span>Thank you, Joey. And I think we have more of a comment here. The gateway is the way to connect to public API hosted in the cloud. So it's easier to share the reports. Why is that?
      </p>
      <p>
      	<span class="speaker">Joey: </span>That would probably just be a Power BI setting. I don't think that would really configure in with Yellowbrick, but I can do a follow-up with that. If you can get the person's email, we'll dig into that and make sure that we have that information answered. I apologize. I don't know that specific answer.
      </p>
      <p>
      	<span class="speaker">Bhuvana: </span>Moving on to the next. How can I set up my data? How can I set up my data set on Yellowbrick solution?
      </p>
      <p>
      	<span class="speaker">Joey: </span>We can schedule it. If you're interested in doing a deeper dive, or if interested in doing a POC or proof of technology or things like that, just feel free to reach out to us. We can configure a system for you in the cloud and start to understand your use cases and what you're trying to show, improve and help you tailor that to have the most success. So feel free to reach out to us and schedule that.
      </p>
      <p>
      	<span class="speaker">Bhuvana: </span>And we have one more question here. Can you explain what files and data formats that Yellowbricks support?
      </p>
      <p>
      	<span class="speaker">Joey: </span>Yeah, so we're an ANSI-standard SQL database. So we take ANSI data types and we store those in the database in a columnar format. And we have shied away from doing the XML and the JSON stuff, because what we find is most people when they want to interrogate that if they're really trying to define elements in that, it's easier just to structurize those. So I'll explain a usage pattern that's common for us is that we have folks that have a data lake that sits next to a Yellowbrick, and they'll use Spark to interrogate that kind of unstructured and semi-structured data, and write that into row form and push that into Yellowbrick and will be that kind of speed layer to help them speed up the due processing that they might need to do. That's a common use pattern for our more successful customers.
      </p>
      <p>
      	<span class="speaker">Bhuvana: </span>A few more questions coming through. The next one is, do you have any solution to people facing certificate issues when connecting Power BI to PostgreSQL?
      </p>
      <p>
      	<span class="speaker">Joey: </span>Certificate issues? So you do need to make sure that you grab the-  configure the certificate from the Yellowbrick server and make sure that that's part of the route store on that windows client. I don't know if that answers your question or not, but that's how this system was configured for this demo. We had to add that certificate to the root store to make sure that the connectivity would happen. And again, feel free to follow up with us if we need to kind of do a deeper dive on that specific topic.
      </p>
      <p>
      	<span class="speaker">Bhuvana: </span>Absolutely. Here's one more: I use Yellowbrick and I do a lot of aggression and analytical work as the data increases. I keep running out of memory issues. So my question is, do I need to add anything additional to use Power BI?
      </p>
      <p>
      	<span class="speaker">Joey: </span>So probably what's happening is the - and let me just show you here on the system. Let's go to... So what's happening probably when you're running out of memory, is that these lanes that we have for queries to run in, they're given a set amount of memory. And so probably what's happening is the lane that's associated with what your activity is is limited. And so, like in this environment, we have different lanes for running queries. So we have small lanes and large lanes. I have a specific lane for Power BI and we have the ability when with workload management rules to jump queries that are either running out of memory or running for too long, into a larger pool, so you might need to work with your DBA to configure a larger lane that they can pop you into when you have these large aggregates and things like that. Another thing that you can also look at is partitioning those tables. So when we partitioned tables, we do it for activation on query. So if you're, if you know, you have a large aggregate, we could probably define like a couple of a range may be associated with some of those values, and then they be coupled together when you do your aggregate run. So there's some solution there. It sounds like that needs a deeper dive though. So again, feel free to reach out to us and we can help you there.
      </p>
      <p>
      	<span class="speaker">Bhuvana: </span>Thank you, Joey. Just one last question here. Just Power BI or Tableau as well?
      </p>
      <p>
      	<span class="speaker">Joey: </span>Oh, we can do this with both. Yes. Actually, with Tableau, we just had our, in the latest version of Tableau, our connector is in their marketplace. So open up Tableau and you'll, if you update and open up Tableau, we have a Yellowbrick specific connector built for Tableau. Did that answer that question? I hope that that wasn't a-
      </p>
      <p>
      	<span class="speaker">Bhuvana: </span>Yes. Now we are happy to pull off for any further follow-ups on this. It looks like we have covered all our questions. Joey, is there anything else that you wanted to cover before we wrap up?
      </p>
      <p>
      	<span class="speaker">Joey: </span>Nope! I think we're good. Thanks everybody for attending. And again, feel free to reach out if you'd like a deeper dive, or if you have some other questions that we maybe didn't fully answer here. Feel free to reach out to us, and we'd love to get those answered for you. Thanks.
      </p>
      <p>
      	<span class="speaker">Bhuvana: </span>Great. To everyone who attended the demo today, thank you for your attendance and we will be sharing the recording of today's live demo. You can also register for our upcoming webinar by going to our website, www.yellowbrick.com. And please don't hesitate to email us at insights@yellowbrick.com. And thanks again for joining us today. And we will see you next time.
      </p>
    </div>
  </section>

	</Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Powering Your Power BI with Real-Time Speed',
    meta: [
      { name: 'description', content: 'Learn how to your Power BI with Yellowbrick and get Real-Time Speed.' }
    ]
  }
}
</script>
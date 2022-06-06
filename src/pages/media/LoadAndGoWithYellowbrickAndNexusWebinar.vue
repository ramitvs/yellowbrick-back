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
			<h1>Load & Go with Yellowbrick and Nexus</h1>
		</div>
	</section>

	<section class="bg-white py-12 md:py-20 z-10">
		<div class="w-full max-w-1200 mx-auto">
			<BaseWistia id="aimu1awpx6" />
		</div>
	</section>


    <section class="bg-white py-12 md:pt-0 md:pb-20 z-10 ">
      <div class="w-full max-w-1200 mx-auto px-8">
        <h3 class="accent-heading">Transcript</h3>
        <p>
          <span class="speaker">Bhuvana Ramakrishnan: </span> Hello everyone. Thank you for joining us for today's live demo. I'm your host, Bhuvana Ramakrishnan, head of events at Yellowbrick. Our topic today is Load & Go with Yellowbrick data warehouse and Nexus. We have two amazing presenters with us today, and I'm going to take a quick minute to introduce them to you. Our first presenter is Tom Coffing. He is the founder and CEO of coughing data warehouse for 25 years. He has taught over a thousand big data classes, written 75 books on major database platforms, and has led a development team of 15 years building the Nexus, desktop, and server software. Also, we have with us, Lorenzo Danesi. Lorenzo has over 20 years of experience in data warehousing, running on massively panel databases designed for analytics as a systems engineer at Yellowbrick data. Lorenzo is responsible for helping Yellowbrick, all-flash architecture, take performance to the next level, and break speed records for processing queries against extremely large datasets. So before I pass it over to our first presenter, Tom, just a little housekeeping. We have carved out some time for Q&A towards the end of the demo. So type your questions into the Q&A box of your control panel, and we will get to it right off of the presentation. So without further delay over to you, Tom.
        </p>
        <p>
          <span class="speaker">Tom Coffing: </span> Thank you very much. Now, when I wrote my book on Yellowbrick architecture, I realized we were dealing with something extremely special: modern hardware. And I'm just so excited that we're partners now with Yellowbrick because this is fast data warehousing not only fast in its analytics, but it loads data extremely fast. And at the same time, it gives you a hundred percent performance, a hundred times a lot of your legacy systems while simultaneously loading a lot of rows. And that is your hybrid cloud architecture, your foundation for what you want to do in the modern-day. IAM of Lytics, take a look at this. That is your data center. You've got 20 different systems within your enterprise on the cloud on-premises. Then that's where we come in. Yellowbrick provides the best hardware and database solution. We provide the Nexus server and the Nexus desktops.
        </p>
        <p>
        	When you have a Nexus server, you don't have data silos in your enterprise. You don't have 20 different systems because the Nexus connects them all to get there. Now it's like one giant system where business users, ETL teams can move queries, do anything they want. So it doesn't really matter where you're at. It makes no difference because you're going to be able to move data from your desktop. Yet, when you say, I want to move from Teradata to Yellowbrick, they go that easy. I go; the server handles everything. It's the row set of stone between all systems of today. And if you want to move other systems, it takes care of it. And it's a straight line between source and target. And that's what makes it so fast. But the amazing thing here is that you can move from TRD to Yellowbrick, but you can migrate between every system. It makes no difference. The combination, you just say, point click move. And the server moves that information from your desktop. You're going to be able to query and write the SQL. And you're going to get an answer set back from any system, but you can also use the Nexus super join builder, and it'll show you things visually; you just checkmark the columns you want on the report. Nexus, we'll build it in it. I'll run it for you. When you want to migrate, you go; there's my source system. I'm going to go from Oracle to Yellowbrick. I got a thousand tables, and I say, okay, hit execute. And when you do, it moves, and when it turns green, it's moved over, and you are done with that migration. It's handled automatically. When they talk about federated queries, what they're talking about is cross-system joins.
        </p>
        <p>
        	I'm going to join Yellowbrick with Teradata, with Oracle, with the teas, and with the tables. And you can say where you want to process. I want the hub to be Yellowbrick, and then go, okay, run the query. And automatically, the server will move everything to Yellowbrick, temporarily running the joint. You got it back. But what really separates us from every other company in the world trying to do this is though I can say, Hey, I'm like the hub to be the server, and everything moves to the server, and it runs it there. And you get the answer set. You could say, I want it to be my PC. It runs; it's the answer set. And you can even say, I want it to be Teradata or Oracle. And it moves the stuff over there. Also, at the desktop, you're going to see Excel, pivoting, and you're going to see all kinds of brilliant dashboards.
        </p>
        <p>
        	Get a Yellowbrick system. You put Nexus with that. You're accessing every system in your enterprise. Let's see a demo of this right now. Can you see my screen here? Here's my Yellowbrick system, but here are all my other systems. And I've got them right here at my access to the fingertips. As a matter of fact, Nexus knows so much about every place that you've got data in your entire enterprise. It collects this metadata. So I came up here to the search bar on the top, left it typed in subscriber number. It's going to say, well, actually, the subscriber number is in these tables in Yellowbrick and here in SQL server and down here in Oracle shows me the data types. So I can see everything from every system where the subscriber number is at, what's really even more clever about this. This is a live tree, so at that moment's notice, I can come out here, and I can start pulling data any way I want.
        </p>
        <p>
        	I go, you know what? I wouldn't see the subscribers table from Yellowbrick. And I just bring it right on out here. And I can execute that. I can come down here to SQL server and say, you know, I think I want the claims from that table, and I'm going actually to put it in a super joining builder, and it'll show me exactly what columns are in there. It'll show me what this joins to it; select the columns I want. And it builds the SQL for me. And I can execute that with no problem. And as you can see, I've got two answer sets. Now, one from SQL server, one from Yellowbrick. Now how can I join data together? A million different ways. We have a hundred different ways to use load utilities. You know, once this, I want to join these from different systems, I've got two answer sets.
        </p>
        <p>
        	I'm going to go right into this analytics tab. It shows me the result—one from Biella, Brit result, two from SQL server. I come up here, and I say, Hey, if I could join that data together and they go, sure, right here on your PC. And I go, yeah, ah, how did they join? I go; why don't they join on subscriber number and then subscriber number? And now I've got a new report, which I can begin to share with anybody. It's really important that you be able to create tables. You know, it's interesting that business users need to gather data from different systems so that they can put it in places like Tableau or Excel and do analytics. This is the easiest thing in the world to want. I've got my Yellowbrick system tree up to the top left. I opened it up. These are my tables. I'm going to take this answer set that I previously just got from the SQL server. And I'm going to click and drag it right up here. And it's going to say, what do you want to call it? And I'm going to call it amazing. And it's going to move that table from SQL server or my answer set here over to Yellowbrick. And there it is; it is truly amazing. So we're going to be able to do all kinds of things with these answer sets. And I'll tell you what, I'm going to do something right here on Yellowbrick to quickly select. This is going to be a beautiful sales table. I'm going to do three things for this number one. Let's be sure we can go out and pivot this so we can get grand subtotal totals in an easy manner. Just going to grab it on the want to see the region.
        </p>
        <p>
        	I got four salespeople, not myself, four products, and I want to see the daily sales, and it says, sure, there's a north to south region. There's your salespeople. There's your boots, jackets, jeans. And t-shirts at your subtotals and your grand totals any way you want to see it, let's move this to Tablo and export this off. Let's pick our desktop. Yeah, we'll put it right in there. As a tab low, we're going to call that P a B L E. They ate you. And we now are extracting this. It'll extract it. It's now set up for my Tablo users, but everybody wants to do Excel. So we're going to export that off. And then we're going to bring it back on. I'm going to call this Excel one, and now I've saved it off as an Excel file. And I'm going to be able to move Excel to any system out there. Watch how fast this goes to Yellowbrick. I just right-click. And I say, Hey, I want to import Excel. And they go, really? Do you want to create a table? And I go; that's exactly what I want to do. They go, what are you going to call it? There we go. Excel one. There it is. And I'll pull it from the worksheet. And down here, we're going to call this a one, and we'll create the table. I want to be able to move Excel to any system in my enterprise. I'm going to be able to do it without any issues whatsoever. And I've got 6,000 rows, and it's going to be right up here when I refresh this. And there is one business users don't need to know about load utilities. They need to be a right click, and they need to be able to move information.
        </p>
        <p>
        	Would it come down to an Oracle system? I'm opening it up. And I'm just going to say; I want to move this to Yellowbrick. All they do is right-click. They say they want to move the data to; they can move to any system, Yellowbrick. And it's going to be real fast. I'm going to come over here and pick my Yellowbrick system. There we go. And my schema, all I do is press the blue button. It could create this table for me. I just hit execute. I'll put it down in my tree so I can do some other things as well. It is very important that people be able to move data around without any issues whatsoever. If it turns green, it moves no problem, but you can also do very sophisticated things through the server. You might want to start migrating systems.
        </p>
        <p>
        	Now in the future, you can migrate in less than six months. I can migrate 10,000 tables instantly, going to move an entire tier of data databases over here to Yellowbrick. And we're going to do that. So unbelievably quick, you can't believe it. So I'm going to come out here, and I'll pick a couple of things. Let's just go here, here, and in Cleveland, because I could have picked them all in one click, and I would have been good to go. I'm just going to drop and create each one of these, but what are the options I can do? I'm going to copy this. This is going to be an ELT script. I'm going to go into my Plains. And first of all, I can put in all kinds of utilities, and it's going to be ready to run. It's ready to go right now, but I could go in and say, you know what? I would really like to be here. I want to take this to a new level. I want to come into these table options, and I've got these columns. I don't want to take all the columns. Maybe I could not take all the rows because I can use this custom clause here. I could do ETL and transform data before it moves. I could change the table structure. It's changing it to, and I can add a script afterward and say, Hey, I want you to run that script. Create these five tables, insert selects in there. And I'm going to execute this, and it's going to start turning green, and you can move these tables or schedule them overnight. But one of the really nicest pieces of the Nexus in your Yellowbrick system is that you are going to be able to join tables from Yellowbrick; with every system that you have out there, it's kind of built the SQL for you.
        </p>
        <p>
        	It shows me the table. It shows me what it joins, which is priceless. And I can come out here, and I'm going to be doing a four-table join. I pick the columns I want. I pick, you know, go. And the S Q L is automatically built for me. I want to change it around and move these columns around in a heartbeat. And every time I touch something, the SQL changes in an order. It is sorted, first name, last name, and everything is done. I execute this with no issues whatsoever. And I can share this. I can do Excel, but the really nice thing that I think no one else in the world's going to be able to do is that I can come out here and I can say, you know, I really like that, but boy, would it be nice to be able to join other tables with this?
        </p>
        <p>
        	And I'm going to make it a little smaller so you can see it. I'm going to drag it into a SQL server table. Let's drag him. Lat-Long I just touch whatever table I want. It says, okay, no problem. You were joined by state and state yet. I do. Now I have got Federation here. I've got a SQL server table. Put I do a 20 table join from 20 different systems. Yes. And what's interesting is I told you before up here to the top, right? That's the hub. I want Yellowbrick to be the hub. It's so fast to move data there. It's so fast to analyze it. That when I hit execute, it's going to move this data over before I do. I'm going to go ahead and save this join. I got myself a B and a SQL. I'm going to pass this to my friends.
        </p>
        <p>
        	This is how you build federated across the enterprise. And now it's in there saved. And when I run this, it's going to execute this over and bring the SQL server table over to Yellowbrick. And there it goes, it's as fast as lightning even say, yeah, I would like to have it on my PC because you just run it there and they go, yeah, if you want no problem and I can execute it again. And it runs right there. So I'm going to be able to do Federation with any number of tables from any number of systems. And I'm going to be able to run it where I want to run it. And when I want to get it down to absolutely one click, I go, yeah, the Yellowbrick SQL thing. I'd like to start doing that with one click, and here it goes, and I just execute it. You'll see it run to the right. And then I'm going to get my answer set. And with that, let me turn it over to Lorenzo, Lorenzo.
        </p>
        <p>
          <span class="speaker">Danesi Lorenzo:</span> Thanks a lot, Tom. That was a great Nexus overview. But before I put Nexus to the test, what are, what differentiates Yellowbrick? Well, Yellowbrick is the new modern MPP data warehouse designed and architected for extreme high-performance. At scale, Yellowbrick is designed and architected around the latest flash technology, and it can run complex queries against data sets with billions and trillions of rows. It is the architecture and the database software that make it unique from any database in the world. So the founders of Yellowbrick invented flash technology and worked with data warehousing experts. Their goal was not only to make it extremely fast but to make it very easy to use. So it's designed to work out of the box with a loading goal approach, meaning you don't have to create indexes, collect statistics, statistics, or build aggregate tables and materialized views.
        </p>
        <p>
          And it can scale up to handle petabytes of data. And since Yellowbrick has Postgres compatible, you don't have to learn any new skills or take extensive training classes, and it also supports popular ETL BI tools right out of the box. Yellowbrick also has sophisticated workload management that guarantees you can meet your business-critical SLS with thousands of users. Finally, you can deploy anywhere, whether it's on-premises, private cloud, or public cloud, which gives you peace of mind. If, for example, when you're ready to make a move to, you know, from on-premise to the cloud. So Yellowbrick data warehouse is uniquely suited for the hybrid cloud. And as I mentioned, you get the choice of deployment on-premises in the cloud or a combination of the two, and you get the same predictable performance, no matter where you deploy and with the same performance in the cloud, as on-premises, you can take advantage of running in the cloud.
        </p>
        <p>
          Yellowbrick offers fast, low latency access to any of the major cloud providers, whether it's AWS, Azure, or Google Cloud. And of course also to your own data centers. So imagine having one cloud instance of Yellowbrick and being able to pick and choose your favorite cloud apps with no surprises when it comes to price and performance. So everything is included in your subscription. It's a fit-for-purpose city instance, which can augment almost anything in your enterprise, whether it's SAS, another data warehouse, Hadoop, et cetera. So let's just jump into the demo now. So the first thing I want to show you is the system management console. And the first screen that comes up is a dashboard. And by the way, this is running on AWS. So this is a windows instance running on AWS. The first tab that comes up is the dashboard, where you can get a snapshot of what your system looks like.
        </p>
        <p>
          So you can see that it's a 16 node system and that there are 122 terabytes of space available. And you can also look at the activity going on within the database. So on the database this time, you can actually see all of the databases within the system, and you can also create more databases. So I'm going to filter in on the database that I'm going to be using today. And by clicking on that, you can see the tables, and you can see that they're not small. So, you know, these are over a billion rows. And this is what I'll be putting Nexus through the test today. So let me just start up Nexus.
        </p>
        <p>
          Right? So here you can see the databases that I have, and Yellowbrick is the first one on the list here. So I can just drill down the tree, and I can find my database. I'll go into my schema and look at all of the tables. So let's say that I'm a, I'm a stock analyst and I've just downloaded, you know, some history stock data. So what I'm going to do is I'm going to, I want to run, I want to do some analysis on the table. So I'm going to copy these SQL statements, paste them right into the gooey, and pick my system. And I'm just going to execute these four queries.
        </p>
        <p>
          So those four queries were executed all within one second. So this is that stock tab table that I just showed you earlier. And we can just look at all of these results that ran at the same time. So there are over a billion rows. There are over 3000 distinct stock cahoots within this table. So a stock code could be whether it's you know, Google IBM and so on. And within there, I can also look at how many records or rows contain Google information for that stock. And then I can do some, you know, more analysis where I want to look at what the price is for Google within a certain period of time. So we can also do a little bit more complex SQL. So this one here will show me the top price at 15-minute intervals. So I'm just going to paste this right in, and I'm going to execute that query.
        </p>
        <p>
          And as you can see, that came back right away, and here we can see the top price at 15-minute intervals, but that's all nice. But I see my stock code here, but I don't know what the actual description is for that stock code. So luckily, this morning, I downloaded an Excel spreadsheet containing that information. So what I'm going to do is I'm going to go here, and I'm going to import from Excel. So all I have to do is pick my Excel spreadsheet, what worksheet I'm looking for. So that's the worksheet and what table name I want to give this. So I'm just going to call it Ric, and then I'm going to execute this. So it's going out to the Excel spreadsheet and importing that data. So that was completed. It imported over close to 4,000 rows. So I can just come out of this, and let's take a look; I'm just going to refresh my tables. And there's the table right there. And I can just do a quick-select on that table.
        </p>
        <p>
          Right. Let's see what we got here. So there's an example of that. So the next thing we're going to do is, you know, so that's all well and good, but I've got some product that I have in a, in a, actually in a, in a Teradata database. So that's called the product table. So if I go over to my Teradata table here, and I look at this table, I can just do a quick-select on that. And I can use my Terri data syntax. I'm just going to sample 10 rows out of that Teradata table. And as you can see, they've come up. So I get the product ID, the product description, and product size. So this would be all nice to be able to join all of that information to them together. So luckily, with Nexuses super joined builder, I've predefined, I've actually taken that query that I just ran, and I'm able to modify that and save it.
        </p>
        <p>
          And so this query here contains that query that I had originally written or executed earlier, but I'm adding the stock description and that product information that I, that I just showed you, and it's smart enough, and Nexus is smart enough to use Terra data's high-speed export utility, and also load the data using the Yellowbrick high-speed import utility. So I'm all good with that. So let's just execute this. Let's take a look at what's happening in the logs. So what's happening here is it's going out to the Teradata system and if, and it's going to import and load that data. So it just picked up 5 million rows. So I can go to the monitoring utility within the system management console. And I can see that that data is actually coming over now and being loaded into Yellowbrick. And that was two seconds.
        </p>
        <p>
          So it basically read 5 million rows and imported them or loaded them into Yellowbrick in two seconds. That's pretty amazing. And here's the results. So I've got my stock code, my description, and product information and description at 15-minute intervals. So I've expanded my analysis by bringing external tables into my query. So that concludes the demos for today. And so what you've seen today is with Nexus, you have the ability to connect data from anywhere. So whether the database is in the cloud or on-premises, whether it's in the data lake or an Excel spreadsheet, and you can query that data in place, and you can use features, pivot export to Excel, and charting and graphing. And the other nice thing is you can use federated queries against data, leveraging Yellowbrick as the data hub, because you want the power to bring all of that data, all of that large volume of data together, and be able to give you fast responses and easily migrate that data Yellowbrick using the extremely high-speed analysis of the data. So, and with Yellowbrick, you get to execute your queries at the speed of thought. So you saw, I was executing on that billion rotatable, all coming back within a second, and I have access to that data in real-time. And again, load the data, and you're ready to query it. You don't have to worry about creating indexes or creating congregate tables. So the combination of Nexus and Yellowbrick gives you instant access to data anywhere.
        </p>
        <p>
          So now we're ready for Q&A.
        </p>
        <p>
          <span class="speaker">Bhuvana:</span> So thank you. That was fantastic. And thank you, Tom. We will go ahead and take some questions, and we are already seeing some come through. So the first question here is, do I have to create a pipeline or equivalent for data movement to the target system? You can take that question. Tom, go ahead.
        </p>
        <p>
          <span class="speaker">Tom: </span> Oh, no. If you want to migrate your Nexus, we'll have your source system and your target system, all you really need to do is get your ODBC connections, and you will, in some cases, have to load some of the utilities from Teradata or Oracle or whatever system. And then once you're set up one time, then you're good to go. You just pick the source, the target, and that is it. And Nexus does everything for you. So there's no setup at all from that point on.
        </p>
        <p>
          <span class="speaker">Bhuvana: </span> That's great. And how will, how will Delta load or data movement work?
        </p>
        <p>
          <span class="speaker">Tom: </span> Will it work? And if you run the data movement, what will happen is you just point in a click and get the tables and say what you want to do or what utility. Then it will schedule on the Nexus server. The server will initiate it. The data will start moving from the source, go through the server, and then onto the target system. And that's giving you the maximum speed, and you can put multiple servers out there on each cloud. So no matter where you're at, nothing ever goes to the local area network, and it's all based on the server, acting much like a cell tower.
        </p>
        <p>
          <span class="speaker">Bhuvana: </span> Got it. Are these database snapshots of the source databases? How about continuous data loading refreshing from the sources? How does that work?
        </p>
        <p>
          <span class="speaker">Tom: </span> You can set this up to say, listen, I want to load it out there the first time. And then I want to schedule this to run daily, weekly, monthly, and it's going to schedule, and then just continue to do those inserts for you. You can even put schedules in there with where clauses from certain dates are on, and that's how you handle your ETL and your deltas.
        </p>
        <p>
          <span class="speaker">Bhuvana: </span> Great. We have two more questions, and we're almost at the bottom of the hour. So I'll get to this very quickly. What are possible data source files, file types for importing.
        </p>
        <p>
          <span class="speaker">Tom: </span> Flat file, Excel, S3, Athena, any database. We figure here within the next couple of months; you'll be able to move almost any file type whatsoever, right? Like you can also move, you know, Hadoop type files like parquet and Avro and so on, and even whether it's JSON or, or XML.

        </p>
        <p>
          <span class="speaker">Bhuvana: </span> Wonderful. Lorenzo, this question is for you can Yellowbrick run on a public cloud?
        </p>
        <p>
          <span class="speaker">Danesi: </span> Yes. We connect to all of the public cloud providers, including AWS Azure and Google cloud platforms.
        </p>
        <p>
          <span class="speaker">Bhuvana: </span> Great. And one more question here, besides taboo. How about power BI or other reporting tools to be workable for reporting? Is that possible?
        </p>
        <p>
          <span class="speaker">Danesi: </span> Yes. Yes. Well, power BI and all, and most of the other BI tools that are Postgres compatible, can work right out of the box with Yellowbrick.
        </p>
        <p>
          <span class="speaker">Bhuvana: </span> Wonderful. I think we have come to the end of our questions and also to the end of the webinar. Thank you so much again. And anything else that you would like to add before we wrap up, Tom, do you want to go first?
        </p>
        <p>
          <span class="speaker">Tom: </span> Well, I just really appreciate the partnership with Yellowbrick. Once we saw the speeds and what it could do, we made sure we spent about four months to ensure that everything could move the Yellowbrick and everything could join the Yellowbrick. And it's just very exciting to be associated with Yellowbrick.
        </p>
        <p>
          <span class="speaker">Bhuvana: </span> Definitely delighted about this partnership. Tom, thank you and Lorenzo, anything for you?
        </p>
        <p>
          <span class="speaker">Danesi: </span> And I was very happy to hear that, to demonstrate Yellowbrick and Nexus working together today. And if you'd like to have more information or have a, or do a POC with us, please contact us. Please go to our website at www.yellowbrick.com.
        </p>
        <p>
          <span class="speaker">Bhuvana: </span> Great, thank you, Lorenza, and thanks to everyone for attending today's demo and really appreciate your attendance today. And please don't hesitate to email us@insightsatyellowbrick.com. We will share the recording of today's session within the next 24 hours. And thanks again for joining us today, and we will see you next time. Bye.
        </p>
      </div>
    </section>

	

	</Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Load & Go with Yellowbrick and Nexus',
    meta: [
      {
				key: 'description',
				name: 'description',
				content: 'See how Yellowbrick can better position your business for what is happening now and what is to come.' }
    ]
  }
}
</script>



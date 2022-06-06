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
			<h1>Bring sub-second analytics to Microsoft SQL Server with Yellowbrick</h1>
		</div>
	</section>

	<section class="bg-white py-12 md:py-20 z-10">
		<div class="w-full max-w-800 mx-auto">
			<BaseWistia id="f4s6964ism" />
		</div>
	</section>

	<section class="bg-white py-12 md:pt-0 md:pb-20 z-10 ">
    <div class="w-full max-w-1200 mx-auto px-8">
      <h3 class="accent-heading">Transcript</h3>
      <p>
        <span class="speaker">Ray Canuel: </span>Hello everyone. My name is Ray and I work for Yellowbrick. And one of the things that we're going to talk about is a live demo, and actually how SQL Server can be accelerated with Yellowvrick via this technology called PolyBase. And so if you think about SQL Server is, SQL server is a traditional database, been around a long time. It's relational. It works on, you know, windows platforms primarily. And you know, you can pretty much use it for anything. It's kind of low touch, easy to use database, but at the end of the day, SQL Server is really just a relational database. It's just software. That runs on top of some sort of windows platform and, you know, you can put stuff into it and you can start using it. And then over time though, you know, you could use it for ROLTP. You could use it for reporting. You could use it for a website, it's kind of general-purpose.
      </p>
      <p>
        But what happens with SQL Server is sometimes when the data volumes over time start getting really, really large and you start doing more than just reports, but you're doing maybe an ad hoc analytics against very, very large volumes of data. And when you're talking about hundreds of millions of records, with lots of different attributes. Say, I want to maybe do an ad hoc aggregation and find me, you know, an account of all the blue jelly beans across a hundred million records or a billion records. You might not get a great experience in SQL Server. In fact, ad hoc analytics, it's not really a strong point. At that point, it becomes a little more complicated to deliver the performance. Things will kind of slow down, not be the best experience. And so that's because of all the indexing carrying overhead, that kind of gets out of hand with the SQL Server as those data volumes go up.
      </p>
      <p>
        So what is Yellowbrick? Yellowbrick is a data warehouse that's purposely built and optimized for analytics. And when I say it's a data warehouse, it's not just the relational database. It also includes an optimized stack of the hardware, the storage and the compute, and it could be deployed on-prem or in the cloud or both. So it's really focused, purely on doing things really, really fast, really, really easy against large volumes of data. And we're a SQL database too. And so the way that you leverage Yellowbrick is through SQL. And when I talk about ad hoc, you know, part of doing the research and running is the discovery of data. You don't know what you're going to ask. So if you have a table with a thousand columns on it, you should be able to get the performance back, regardless of which combination of columns that you're going at. And it should come back really, really fast and really, really easy. And so with Yellowbrick, the one way that we make it easy is there's no indexing or anything like that. You pretty much just load the data and go right at it.
      </p>
      <p>
        So if you haven't heard of Yellowbrick, you're probably using it right now and you don't even know it. So this is a sample of some of our customers. The one on the left is LexisNexis. And if you've ever performed a transaction, a retail transaction on the web outside of Amazon, most likely that anti-fraud detection has pushed through the LexisNexis solution, leveraging Yellowbrick. If you have a cell phone in Latin America or the United States, most likely the call detail records that are falling through every one of your calls are probably managed within a Yellowbrick solution. And what's common across all of our customers is very, very large volumes of data. We're talking about billions of records up to trillions of records being able to go after that data in a very fast and easy method.
      </p>
      <p>
        So what's nice about Yellowbrick and my history of dealing with databases is that it really delivers that performance at a very affordable price. And you have the flexibility of deploying it on-prem or in the cloud. Yellowbrick is truly a hybrid offering. And when I talk about simplicity of the technology, it's even simpler in terms of pricing that there's no metering, there's no credits that expire. There's nothing to worry about in that regard either. So you remember going back at the top, I mentioned this thing called PolyBase. So PolyBase is something it's actually a feature that's embedded within Microsoft Microsoft SQL Server, and it's really a virtualization layer feature that is embedded within the database. So it allows you to actually peer through and actually behind the scenes access data sources that are outside of SQL Server yet still have that same pane of glass that front ends SQL Server.
      </p>
      <p>
        So architecturally what does that mean? So my mouse right here, I could have a user that actually is running an application that is proprietary to Microsoft and goes against SQL Server connects to the SQL Server and just runs wholly within that environment. But behind the scenes, PolyBase can actually link together different types of tables that are outside of SQL server in an analytics platform like Yellowbrick. This PolyBase has been around for a while. It started out leveraging Hadoop platforms, but recently it actually extended it to be able to tie in ODBC compliant analytical platforms like Yellowbrick.
      </p>
      <p>
        So if you haven't heard of PolyBase, you might be thinking, well, this is just a link server. They are two totally different things. Link servers is a feature that's been around SQL Server for awhile. It's usually tied around OLTP solutions. Like if you had maybe a SQL Server database that you want to distribute a transaction on, maybe a checking account is in one SQL Server database and savings accounts and another, and you want to do an update across those in a single transaction. PolyBase is really focused more on pushing down analytics to something outside of SQL Server. It's really focused on analytical queries and it actually leverages ODBC versus OLE DB to be able to provide this capability.
      </p>
      <p>
        So how do we put all this together? You still maintain SQL Server, but you can actually combine it with the power of Yellowbrick behind the scenes. And you do this by leveraging in the configuration when you install SQL Server and then here, in this example, is 2019, under the feature selections you can actually go through and check the box. This is an optional feature installation, which is the PolyBase query service for external data. And remember I said that the interface is through standard ODBC. So we'll be using CDATA's ODBC driver for the PostgreSQL target database. Now Yellowbrick looks like a PostgreSQL-style database to the outside world. We did that by design so that everything that's already connected and verified against PostgreSQL should work seamlessly against Yellowbrick. And that's what we're doing with CDATA and the PostgreSQL connection.
      </p>
      <p>
        So why are we using CDATA? We'll CDATA actually specializes in data virtualization also. And they probably their ODBC driver from CDATA is probably architected better than any other ODBC driver for PolyBase integrations. So with that, I would like to show you a demo that I created myself that actually shows these types of capabilities and maybe answer some questions and demos and things if I was you, that you might be interested in. So I want to ask you, I want to make this ad hoc too. So I would like you to actually if you're in the audience if you can add to the chat session, the questions area, you can actually determine what my ad hoc queries should be. For example, if you could pick a month, if you want to just throw in a month, any month from one to 12. If you would pick a column, I'd have 20 columns and we're going to do an ad hoc aggregation.
      </p>
      <p>
        So pick one of those columns, just pick a number between one and 20. And if you also want to pick a state from the union. Any one of the 50 states, that would be fine. And so in this demo environment, what I have is an Azure instance running a windows desktop instance, which is a lightly powered 4 vCPU box. And on that is SQL Server 2019 and above that is SQL Server Management Studio, which is a proprietary ad hoc query tool that only really connects to SQL Server and that supports queries and transact SQL. And then here's the CDATA ODBC driver, which is connected to the Yellowbrick cloud via an Azure private one.
      </p>
      <p>
        So with that, let's go to the demo. And then we'll come back to add a question and answers. So here is the Yellowbrick instance in the Yellowbrick cloud. This is a cluster that has about 50 some odd databases in it. We support database instance schemas. It has over 2 trillion records across all those databases. I'll be using a database called rc_training. And here we have a bunch of different tables and I will be looking at a couple of tables, but one of these will be this one that has 3 billion records in it called the store_returns. This is close to 200 gigabytes. And if I were to look at its DDL, it looks just like a standard relational table with a table name and types in columns. So these would be one of the 20 columns I'd asked you to pick from an ad hoc standpoint.
      </p>
      <p>
        This was loaded some time ago with 3 billion records. Now from a SQL server standpoint, what we have here is a Microsoft SQL Server Management Studio. Let me show you this too. So we'll actually leave Yellowbrick on here. This is actually an online view that when we see queries coming in the system, they will be processed across the screen. From the SQL Server Management Studio screen, what we're going to do is talk about the configuration of PolyBase. I have multiple databases here and I created one, I just called polyDB. And what I'm going to do for the purpose of the demo is I'm going to blow away and drop everything and recreate everything from scratch.
      </p>
      <p>
        And now, if I just refresh this, now I have nothing, but just one little table in SQL server. Now to configure PolyBase, we have to do a few one-time things that I've done previously in comments right here. I go ahead and set up a password encryption key, scope to a certain database, and I've done that for my credentials, and then I call a SQL Server stored procedure called sp_configure, which actually enables the PolyBase feature within the database. And so at that point, I really do one more one-time thing where I actually tied together by the ODBC driver. So in the ODBC driver, we're going to be using CDATA's 64-bit driver, and I've previously configured just a DSN for that, a data source name. And it's just connected to the same, you know, Yellowbrick instance that I have under these credentials. So if I validate that it works successfully, all is good.
      </p>
      <p>
        Now within the database of SQL Server, we're going to leverage that same DSN, but we're going to create it as an object within the database that I've named CDATA’s Yellowbrick source. And if you look at one of the, and it's going to use the credentials that I've previously created above. The push-down equals on, says, we're going to push down as much of the analytical processing outside of SQL Server to this data source that we can. So, I'm going to go ahead and create this. It's just really quick, there's no data movement. There's nothing that's going on there. Now at this point, I can now create a table that maps to the table that was in SQL Server. So I'm going to create an external table that says, this is this thing called store's return. And these are the data types that map to SQL Server yet I'm actually linking it to a table that exists outside of SQL Server and Yellowbrick.
      </p>
      <p>
        So if I go ahead and execute that, and if I come over here and refresh, now I have the store's return table accessible from within the SQL server. Yet I have moved no data whatsoever. And so to validate that, what I can do, let's just do a count. So we'll do a count across this, and there's my 2.8 billion records. Now, if we look over here on the right-hand side, that dot right there, that represents the query that was just executed, passed by PolyBase over to Yellowbrick, executed, and then the data was turned back from Yellowbrick. This is the query that we see from that count(*). You can kind of see it doesn't really look exactly like what I wrote over here on the left-hand side. And that's what PolyBase is doing. It's taking this query that came in through SQL Server and rewriting it and processing it outside of it, and then taking a result and bringing it back and then just giving it back to the end-user. And we executed this query and sure enough, we just brought back that one record from Yellowbrick. And we did that all in a fraction of a second, basically a third.
      </p>
      <p>
        So now we'll leave that going there. So now let's do some more, we're going to do a lot more than that. And so what's let's go ahead and create two more tables and we'll just call this a date dimension table. And then also another one that's like a store. And so now if I refresh here, now I have three tables that are external to SQL Server that I can now perform queries on. Okay. So let's go ahead and I can double-check all counts for those, just to give you a sense of how much data is in there. So there's 2.8 billion records in the storage table. And then I've got a date dimension, a store dimension table that I could join to filter some stuff on. So now if I was you I'd say that's neat, but those are just simple coun(*)’s. Let's do something a little more interesting, Ray. So what I did was I figured you'd want to see something like this. And so this is where I would ask the ad hoc-ness. So if somebody in the audience could pick me, put it in the chat session, give me one of these columns or, Bhuvana, if somebody gave me a number between one and 20, there's 20 columns in here. So is there anything in there?
      </p>
      <p>
        <span class="speaker">Bhuvana Ramakrishnan: </span>Yeah, let's see. Okay, so we have Tom whose picked column number four.
      </p>
      <p>
        <span class="speaker">Ray: </span>Oh, that's easy. That's sr_customer. Okay. So sr_customer_sk. And so we're going to do an average of that and a count across 2 billion records and sure enough, that comes back in less than a second. So if we were to look at that and if I click on that little dot, here's that query, and sure enough, it returns one record back and it came back in 196 milliseconds, which is a quarter of a second. Let's look at the query. If I reformat this, you can see again, it's a little more complicated, but I think what's interesting here is we're actually summing, we're calculating the counts for the customer_sk’s Thomas picked and we're actually doing the sum and the counts, but remember what the query was. This query doesn't look anything like what we wrote here. We just set an average. And so what PolyBase has done is rewrote that query behind the scenes to make it a count and a sum. And then it's going to calculate the average itself, backside back eventually once we return those results back, but the end result is, a little SQL statement goes over all the way over to the Yellowbrick cloud executed, we return the results back all within a second.
      </p>
      <p>
        So now you say, okay, well, that's just a simple aggregation. Yeah. And I can tell you, you can pick any one of these columns, any combination, and you're going to get the same performance that you saw all without any index or anything. And, oh, I can actually show you in this summary page. Sure enough. We had to read 2.8 billion records to deliver the results that Tom wanted in that query. So now let's do something a little more interesting. Let's do a join. So if we do a join, was anything actually even pushed down. So here, I just picked something. I picked, let's do a join between the store's return table in this date dimension table. And we'll go ahead and just run it for a given year. Okay. But we're filtering now on the value of 2000. Okay. So if we run that here, that comes back again in sub-second time. And so I think I asked, well, what if we filter on another thing? So that was the question I had. Did anyone pick a month, like some month between a number between one and 12?
      </p>
      <p>
        <span class="speaker">Bhuvana: </span>Okay. How about we go with Jan, January.
      </p>
      <p>
        <span class="speaker">Ray: </span>Jan? January is number one. So here, if you're on here, I want to show you two things. So if we run that, see that comes back real quick and see here's the little red dot. That's the query, but let me show you something. So remember the first time when we did an average for Tom's query across everything, we had to do that across 2.8 billion records. Here we didn't have to read all the records in Yellowbrick. Yellowbrick has this automatic data skipping technology, where we only have to read the data that's in the ballpark. And here we've pretty much pushed down the values that were provided in here so that we only had to really read 67 million out of that whole table in order to satisfy that query. And if you all get this query again, just to verify this here, you can see buried in here.
      </p>
      <p>
        This is the value of one for January that was specified. And again, we do all this really, really quick in less than a hundred milliseconds, a 10th of a second. Okay. And so this is what I really mean by an ad-hoc analytical platform. We are truly ad hoc. We deliver this performance all the time. And so there's other things that PolyBase supports too, like, yeah, we're doing numerics right here, pushing down simple numerics, we'll talk about something from a state standpoint, that's why I think I asked again, truly ad hoc. Somebody gives me an extra state. Can somebody throw one out there for me? Was that a question? Did anyone put that up, Bhuvana?
      </p>
      <p>
        <span class="speaker">Bhuvana: </span>You know, we need to give an extra second or so. I encourage the audience to pick a state, go ahead, do it. Let's give it another second. So how about we pick New York?
      </p>
      <p>
        <span class="speaker">Ray: </span>New York. And so I did this because I think this is even better for the string because it's an in clause. And so if we execute this and run this, now we see there's our little dot and there's our numeric values. And so again, if we look at this, just to show you that this is truly ad hoc, let me just reformat with PolyBase sent down to me is there's the New York value. And what's even more interesting when you look at this, PolyBase, I guess, sorted this or something because that wasn't even the order in which we put it in, as you see, okay.
      </p>
      <p>
        <span class="speaker">Bhuvana: </span>Ray, selection for PA, Pennsylvania.
      </p>
      <p>
        <span class="speaker">Ray: </span>Pennsylvania. So again, here's our data skipping technology right down to there. And this time has run again in a fraction of a second. Okay. So let me go back out and I can just add or replace PA no, we'll get the same results and the same performance back. Okay. And so one more thing is, well, what happens if you want to do something a little harder, like maybe a wild card match. That's why I said, give me a letter of the first letter of the alphabet, but the catch is it has to be something that's a state. So does anyone want to give me one of those? Z won't work cause we don't have a state for Z or anything.
      </p>
      <p>
        <span class="speaker">Bhuvana: </span>Again from the audience, let's go with C, California. 
      </p>
      <p>
        <span class="speaker">Ray: </span>C * actually gives us more than California. So there you go. So we don't have data for all the states in the union across these 2.8 billion, but there's the ad hoc. So even that works too. So all of this is being pushed down to Yellowbrick. And so one more thing that I'm going to show you real quickly, and I want to be careful with time for questions, is these are, I figured that you might say, well, that's all well and good, Ray, but what about things like TSQL, Transact SQL, which is a language that is proprietary really to SQL Server. So I just created a looping construct where we're going to just go from a one to 12, being the months, and we'll dynamically create dynamic SQL and then execute it all within a transaction. And so all of this is a native proprietary language to SQL Server.
      </p>
      <p>
        So as I execute that, and then you see the results are coming back and each one of these are going to be my 12 dots that represent each of the months of the year. And you can see, there we go. And this, the one I clicked on was the third one, which would be the third month. Okay. 
      </p>
      <p>
        Now, what's even one last... maybe two last things. So this is more of a row by row processing. Like if you really want to do this and be able to aggregate by the month and run these things 12 times I would probably say, you know, one optimization you could do cause Yellowbrick likes big questions. You could actually run the whole thing and just store the results. Okay. So what's kind of interesting is you can actually run this query. Let me just comment this out for a second.
      </p>
      <p>
        So let's just run the thing right here, but this time we're going to run it for all the months. Okay. And so now we pull back all the results, which are 420 records, but what if I want to, but they're all in here. They're on this screen right here. What if I actually wanted to do a CTasks or I wanted to persist and save those results. I want to create a table in SQL Server and I'm going to call it foo_ray. And the results are now going to be created and then stored in a table within SQL Server. So if I run this and execute it, and then what happens is 420 rows are affected. What does that mean? If I come over here and refresh, I should now have the foo_ray table, and here are the results of this query that was run. So now when I run this, we're actually pulling the results back from SQL Server. So this was just a taste of some of the things that I thought that you might find interesting. I'm pretty excited about this technology and how you can add virtualization from SQL Server to a high-powered, analytical environment like Yellowbrick.
      </p>
    </div>
  </section>

	</Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Bring sub-second analytics to Microsoft SQL Server with Yellowbrick',
    meta: [
      {
				key: 'description',
				name: 'description',
				content: 'Learn how Yellowbrick Data Warehouse breaks through analytics limitations.' }
    ]
  }
}
</script>



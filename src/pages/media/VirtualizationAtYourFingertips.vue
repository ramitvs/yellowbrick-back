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
			<h1>Data virtualization at your fingertips</h1>
		</div>
	</section>

	<section class="bg-white py-12 md:py-20 z-10">
		<div class="w-full max-w-800 mx-auto">
			<BaseWistia id="zvrpqtr3jj" />
		</div>
	</section>

	<section class="bg-white py-12 md:pt-0 md:pb-20 z-10 ">
    <div class="w-full max-w-1200 mx-auto px-8">
      <h3 class="accent-heading">Transcript</h3>
      <p>
        <span class="speaker">Bhuvana Ramakrishan: </span>Hello everyone. Thank you for joining us for today's webinar. I'm your host, Bhuvana Ramakrishan, head of events at Yellowbrick. Our topic today is data virtualization at your fingertips. And we are doing this presentation in collaboration with our partners, Sotero and Coffing Data Warehousing. I'm going to take a quick minute to introduce our presenters today. Starting with Lorenzo. He has over 20 years of experience in data warehousing, running on massively parallel databases designed for analytics. He's a senior systems engineer at Yellowbrick. Our next presenter will be Shanti Boppanna. She's the co-founder and CTO of Sotero. She oversees the company's technology development for data protection for some of the world's largest data and analytics organizations. Last but not least, we have Tom Coffing. He is the founder and CEO of Coffing Data Warehousing for 25 years. And he has taught over a thousand big data classes, written over 80 books on major database platforms and has led a development team for 15 years, building the nexus, desktop and server software that you will be seeing in action. So before I pass it over to Lorenzo, just a little housekeeping, we have carved out some time for Q&A towards the end of the demo. So share your questions there and we'll get to right after the presentation. So without further delay, over to you, Lorenzo.
      </p>
      <p>
        <span class="speaker">Lorenzo Denesi: </span>Thank you, Bhuvana. Hello everyone. I would like to start by talking a little bit about what differentiates Yellowbrick. Well, Yellowbrick is a new modern MPP data warehouse, and it's designed and architected for extreme high performance at scale, and it can be deployed on premises or in the cloud. Yellowbrick is designed and architected around the latest flash technology and can run complex queries against data sets with billions and even trillions of rows. So it is the architecture and the database software that make it unique from any other database in the world. And the founders of Yellowbrick, who, by the way, invented flash technology, were working with data warehousing experts, and they had a goal not only to make it extremely fast, but to make it very easy to use. It's designed to work out of the box and take a load and go approach, meaning you don't have to create indexes. You don't have to collect statistics or build aggregate tables or materialized views, and it can scale up to handle petabytes of data. 
      </p>
      <p>
        Since Yellowbrick looks and feels like PostgreSQL, you don't have to learn any new skills or extensive training. And also, it supports popular ETL, BI virtualization and encryption tools right out of the box. And you'll see it today with Sotaro and Nexus. Yellowbrick Data Warehouse is uniquely suited for the hybrid cloud. And as I mentioned, you get the choice of deployment on premises in the cloud or combination of the two, and you get the same predictable, consistent performance, no matter where you deploy and with the same performance in the cloud as on premises, you can take advantage of running in the cloud. Yellowbrick offers fast, low latency access to any of the major cloud providers, including AWS, Azure, and Google cloud platform, and of course, to your own data centers. So imagine having one cloud instance of Yellowbrick and being able to pick and choose your favorite cloud app with no surprises when it comes to price and performance, everything is included in your subscription. So with that, I'll pass it over to Shanti.
      </p>
      <p>
        <span class="speaker">Shanti Boppanna: </span>Okay, thank you, Lorenzo. I walked through a couple of slides and then we'll demo the Sotero product. At a very high level, Sotero protects sensitive elements in a wide range of four data stores. The typical on-prem databases like Oracle, MySQL and cloud data warehouses like Yellowbrick. It not only protects the sensitive elements, it enables applications to interact with protected elements by providing ODBC, JDBC drivers, as well as API endpoints. The process typically involves three main steps. First step is to configure two elements using the Sotero interface. The second step is kicking off the one by minute encryption process and setting up role-based access control. The third and final step is configuring applications to go through Sotero. Let me log into the Sotero demo site and I will create a dataset to configure two elements in a Yellowbrick database.
      </p>
      <p>
        So I'm providing the connection details, testing out the provided details. After that you have to choose whether the migration should be inline or a whole. It’s defaulting to inline. What it means is when the bulk encryption process is kicked off, all the data from the configured source will be read. Encryption will be performed and the encrypted data written back out into the source database. So the plain text data in the source database will be replaced with the encrypted data. So now if you choose a whole migration, you are prompted with the target connection details. What happens in this scenario is the bulk encryption process reads from the configured source encryption, and will deliver encrypted data into the configured target database. This is the popular scenario if you have an on-prem database, and if you want to protect sensitive elements in the on-prem data set, and then move it over into the cloud environment or cloud data store. For a demo, I will be using the inline migration. At this point, Sotero actually connected to the Yellowbrick database and pulled down all the columns and the tables in the schema. I will select a customer table and we'll pick a few elements for encryption.
      </p>
      <p>
        And now if you are at an encryption configuration screen where you can configure encryption types for each of these elements. The popular choice is deterministic in encryption. The encrypted value with this encryption option is actually longer than the incoming plain text value. And the bulk encryption process will actually adjust the column lens to accommodate the longer encrypted values. But if you want to keep the encrypted value, same length as the incoming and same format as the plain text value, then the choice is a format-preserving encryption. I'm going to apply that for the phone number and with this option, the encrypted value looks like another phone number. Okay. Now I haven't seen a screen. If I click on the start encryption, it actually will kick off the background bulk encryption process, which we'll start reading in from the configured source encryption, and will replace the plain text data in the source with the encrypted data, right?
      </p>
      <p>
        The process got kicked off. You can look at the progress of the process and each step is logged and timestamped. Now I will set up the role-based access control. I will actually modify a role, like a secure role. I'm going to modify it and pick the data set that we just created. These are all the elements that we encrypted, can pick and choose what decrypted privileges should be assigned for this particular role. I'm assigning decrypt privileges for everything, but the customer name. So, anybody in this particular role, when they are executing the queries, these privileges will be over laid and appropriate elements will be decrypted. Okay, let me save these permissions. So now I'm actually going to a query in the tool and we'll show how the data looks like. This is a direct connection to the Yellowbrick database.
      </p>
      <p>
        And I'm executing a query, which is looking at the customer data. You can see the encrypted data for the name and phone number is also encrypted. This is format preserving encryption and encrypted value is looking like another phone number and other encrypted field market segment. Now, if you look at the same data I joined through the Sottero driver, it looks like this. So the market segment of that number is decrypted, but the name is still in encrypted format because this particular user does not have privileges to see customer names in the plain text. In the next part of the demo, Tom will show, among other things, how to do query on the datasets, protected with Sotero. Over to Tom Coffing, CEO of Coffing Data.
      </p>
      <p>
        <span class="speaker">Tom Coffing: </span>Thank you very much, Shanti. I'm very excited. My name is Tom. I'm excited that you're here today and I'm going to show a few slides as well. And let me share my screen here. Okay. Let me know if you can see that. 
      </p>
      <p>
        <span class="speaker">Shanti: </span>Yes, we can, Tom.
      </p>
      <p>
        <span class="speaker">Tom: </span>Okay. Thank you very much. This was book number 85 for me, and it's on Yellowbrick and I just love Yellowbrick. It's so unbelievably fast. You just can't imagine. And that's loads fast as everything fast. This is your data center and your data center needs a nexus server because when you do that, all those disparate systems, they are now connected as one system and you can move data between Nateeza and Yellowbrick. It comes up on your PC, but when you say I'm point, click, everything goes to the server. We do all the conversions, the load utilities, you point, you click, and this is going to work just perfectly.
      </p>
      <p>
        Let me go to a Nexus system and you can see I've got every system under the sun here. I can move every one of those to Yellowbrick, and I'll show you how to do that, but I can join across them. And that's the idea behind virtualization. We're going to be able to come in here and put in, for example, a search for social security number. And it shows me every system in every table our SSN is in my Yellowbrick, it gives my Teradata, I got Nateeza up, Oracle DB2, and this is called the cash tray, but it's a live tree where I can query, join, move. I just query the subscriber’s table. And as you can see, Sotero has got SSN encrypted, which is fantastic. Now, no one can see that unless they have the proper role. One of the big pieces that we needed to do was to sophisticatedly move data, but also a lot of users to do it a hundred different ways.
      </p>
      <p>
        I want to move this Yellowbrick table that I just got in the answer set on. If I want to move it. And over to mySQL, all I have to do is drag it. And it is going to convert the DDL, move it, ask me for a name. I'm going to call this amazing act. It's amazing grace. So let's just call it that and move it and watch it come up in the tree and you'll see on the right, if it was successful or not, it was successful. Hard to believe that that is capable now over there, but you run a query on that. And as you can see, it is a notice. Sotero still honors the encryption on SSN. Now you're going to want to migrate data. And that's a big key. When you migrate, sometimes it costs companies millions of dollars, because there's conversions and things of this nature.
      </p>
      <p>
        That's not the case with the Nexus and the Nexus Server. I'm going to be able to pick all the tables in one shot, move a thousand tables at a time, pick four or five of them here. I'll pick my Yellowbrick system database schema. When I hit this blue button here in the middle, it says all those check mark tables are coming over. I get information now how big they are, if the table exists or not, and it's ready to go next. This is going to convert the table structure from mySQL to Yellowbrick very intelligently, build the proper load utility, and if it turns green, it moves successfully. If it turns red, you can check the log, see what changes need to be made. And that's how easy it is to move data. But virtualization for us, they're trying to move things to a data lake or to one system for this so that we can join data together.
      </p>
      <p>
        We're going to do it all from a bunch of systems. I just put this table in the super joint builder, and now it says what's a joint to where I go, subscribers and claims. I just press the menu. And now those come up visually. Every time I hit a column, it goes and builds the SQL and continues to have no issues. It's almost ready to go. Let me get my first name, last name in here. I'll come over here and get street, city, state. This query has been developed for that business user, but the neat thing about this is, I can manipulate these columns. I went from the tables to the column view, and it shows me all the columns at the top of the report. At the bottom, I didn't check mark those, but I put my first name first, last name second. Everything touched changes the SQL below to match my needs.
      </p>
      <p>
        I even forgot to put gender on there. I drag it up. Now, gender is in there. Let's put the order by tab. How do I want the data sorted? To the top? To the columns I've got on the report? The bottom ? Or not on the report, but I can still use those. And I just point and click and now the order by statement’s built. I can pick interjoins by default. Left, rightful outer joins, and the SQL changes to honor that. Where clauses, I could do analytics. And what's really interesting is I can see the size. My largest tables claims It's got 2000 rows and I should get 2000 rows back if I run this query right now, but this is really what separates the Nexus. All tables from all systems are like one because of the Nexus Server. I'm going to drag in from MySQL the table.
      </p>
      <p>
        And I'll just have to tell them, Hey, this is how it joins provider code and the provider.I hit the blue button. That's now defined. It'll remember the next time. And then let's put another table out here. Let's go with a Teradata system. So now I have three tables. I've got a MySQL table and I'm going to drag in the Teradata table. And I'll have to tell it once again, this is how it's going to join service code and plain service. And I want you to remember that. And now I can pick the columns. I'm about to do a federated query. Those normally take a long time, but I'm going to save this just to show how I can make it a one-click solution for everybody in the company. And I'll call it Federated YB MySQL TD. Now this was years in the making what I'm gonna show you next.
      </p>
      <p>
        Up here at the top right, notice where it says Yellowbrick? I would like Yellowbrick to be the hub. That means I want everything moved to Yellowbrick. I want to process it on Yellowbrick and I hit execute. You're going to see a log come up, which is moving the MySQL table and Teradata table over. And we're able to join 10 million rows to a billion row table in a second. That did the 2000 rows right there. Notice Sotero still honors the encryption. So you're not going to be able to see this at all, if you don't have the proper role. But what's really interesting is that, you know, I can change that hub. You know, I changed my mind. I want to run this online. PC Nexus will bring you each table back separately as if you queried them. it will then join it inside your PC, using your CPU and memory. Nexus at a desktop level, in a sense, is almost like SAS or its own database.
      </p>
      <p>
        And there it is again, the join has been done., But what about billions of rows or millions of rows? I can actually say, Nexus Server, I want to process it on you, on that high speed network, return that result set or schedule it to run at night. And now the Nexus servers bring everything across, whether it's cloud or on premises. And then it's going to bring this answer back in about three seconds. And that's the way you need to process across all your systems. There is your answer set coming back from the server. That's how virtualization is going to work. And now actually got this advice from Lorenzo Danesi that you're going to hear from next. And he says, you have to be able to make this a one-click solution. And we can now I've saved that join before so I can pass it to all my friends and say, Hey, I want that federated thing in my tree.
      </p>
      <p>
        So when I come back in, the next time I want to run this, I just click right there. I execute it. Now I am joining Teradata, Yellowbrick and MySQL with a single click. Anybody in the enterprise can do this. And the Nexus servers running that form. And there is the answer set with encryption in place. See virtualization is about a lot of things and it takes a server, but it also takes a PC that allows users to just point and click and do almost anything. And that's what's taken so long to develop. You know, you need a tool where the business users love it. The DBA loves it. The ETL, the IP people love it. Everybody loves the tool. That’s what I'm going to use next. I'm going to come in to a table and say, give me a quick select. I ran this quick select.
      </p>
      <p>
        I’m given the answer set. I'm going to pivot those 6,000 rows like nobody's business. I just come over here and say pivot and bingo. It says, okay, what do you want to do? You can drag and drop everything so that you're ahead of any type of data scientist. I want to be a salesperson. I want the product at the row level. Give me the daily sales. And you know what? If I don't see so well, I'll just hit control mouse-wheel, make it a bit bigger. Now I've got grand totals across Mary Jones, Will Davis, North and South. I've also conceived the boots, what everybody did, the jackets, jeans, t-shirts and I've got grand totals over there to the right. So you're going to be able to take data from all these systems and manipulate it. When it comes back here, I can even have that user who doesn't really need to know order analytics and ranks and moving sums to see sums.
      </p>
      <p>
        Once they get this data, they're going to be able to take it inside the Nexus in the PC and say, you know what? I want to rank this. Oh, this is my mistake. I need to come down here. So that's the result that I want to work with. I'm making it active, it turns red. And I go, I want to rank by daily sales. I toggle it to descending. I want to make sure it's within product ID. And this report runs once again with theNexus and Nexus server, doing all of the work so you can get top speeds. So not only can you join it, move it. You're going to be able to pivot it to Excel. And right now I'm going to get 50 charts, put them in a dashboard and we'll be able to scroll and watch this stuff run visually. There we go. I see what I like. I can pause it at any time or I can just let it scroll and relax. I can see all 50 charts. I can even compare and say to compare with this and maybe a pie chart and put it in there. You know, I can see them all together. That's your Nexus. Lorenzo?
      </p>
      <p>
        <span class="speaker">Lorenzo Danesi: </span>Thanks Tom. That's a pretty powerful tool. So in this demo, I will show you how easily Yellowbrick integrates with Nexus and Sotero, but I'm going to demonstrate this on a very large data set. So this demo is running Windows on an AWS EC2 instance. So let's begin with the Yellowbrick web-based system management console. And the screen that I'm on right now is the dashboard. So this dashboard, basically this displays system health, configuration, and resources. So you can see that it's a 16 node system and you can see the IO and the CPU utilization. The other screen that you can go to or tab is the databases, which shows you all of the databases in the system. And you can filter down into the system that you're interested in. So I'm going to look at this TCP DS test database, and you can see that these are very large tables.
      </p>
      <p>
        So you're looking at almost 30 billion rows in the store sales table. So then you can also create and drop databases from this screen here. You can also monitor your system. So you can look at active queries. You can, you know, analyze performance of queries. You can look at load processes, right? So you click on this tab or query performance. And you'll see all the queries show up within a certain timeframe. So you can also manage your system from here. So for example, Yellowbrick has a very workload management system. So you can, here, you can set that up where you can create your rules and your, you know performance tools and so on, things like that. And then finally you can configure your users to set up roles. So you're able to see all of the users within the system and you can modify and, you know, remove privileges from there.
      </p>
      <p>
        So from here, I'm going to jump over to the Nexus tool. So what I'm going to do here is I'm going to simulate that I'm a stock analyst and I have a table containing stock information. So I'm going to start profiling this table. So the first thing I'll do is describe it so I can see what columns are in this table. So it's a fairly large column. It's got a number of columns distributed randomly, you know, the RIC is basically the stock hold, but notice that there are no indexes to find on this table. The other thing I can do is I can do a count on the table. So let's see how many rows are in this table. So instantaneously, we see that there's over a billion rows in this table. Then I can do some further filtering.
      </p>
      <p>
        So let's say that, I want to know actually how many distinct stock codes are in this table. So it's going to make a distinction on the stock code, and you can see that there's roughly three and a half thousand different stock codes in this table. So I'm interested in one of them. And I'm going to see how many individual rows this particular stock exists in that table. So we can see that there's about 300,000 in that table. So now I'm going to do a little bit more in-depth filtering. So I want to know what the price is for a particular stock within a certain date range. And I only want to see the top 10 so I can run that. And again, instant response time, sub-second response time. And then one more, fairly complex query that I'm going to run here, which is basically giving me the top price for a particular stock at 15 minute intervals.
      </p>
      <p>
        And that's coming back right away in about one second. And you can see that I can see the top price for this stock at 15 minute intervals. Now I know what the stock code is, but I'd like to know a little bit more information, like what is the name and any other information. So I have another table or a dimension table, which includes that information and it's called the RIC table. So what I'll do is I'll just take a look at that table there. And as you can see that you have the stock code, which is not encrypted, but the name and, and there's a secret code column that are encrypted that only privileged users are able to see. So in order for me to see that I would use the Sotero driver with a privileged user. So what I'll just do here is I'll just switch to the Sotero driver and requery that exam, that exact same table in the same database.
      </p>
      <p>
        So as you can see, it comes back un-encrypted. So now I want to bring all of this together. So I've defined a federated query, and I'll just click on that. And Nexus goes to work, bringing back the information that I've requested. So I've predefined this query here. And notice that there is an analytical function in this query. So what this query is actually doing is it's bringing back the top price for the top 10 stocks within this billion row table. So in order to do that, this analytical function here has to scan through all the billion rows and basically order it by price, descending, and assign a rank to it. So I pulled out the top price for the top 10 stocks. And as you can see here, it came back in four seconds. So that concludes my demo for today.
      </p>
    </div>
  </section>

	</Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Data virtualization at your fingertips",
    meta: [
      {
				key: 'description',
				name: 'description',
				content: 'What do you get when you bundle a Yellowbrick Data Warehouse with Soterosoft and Nexus? Virtualization! It’s the best combination of a modern data warehouse for hybrid cloud that allows users to securely point-and-click to join data across the universe.'  
			}
    ]
  }
}
</script>




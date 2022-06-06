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
        <h1>Breaking Down Silos for Real-Time Data Analytics</h1>
      </div>
    </section>
    

    <section class="bg-white py-12 md:py-20 z-10">
      <div class="w-full max-w-800 mx-auto">
        <BaseWistia id="id5awp3gnr" />
      </div>
    </section>

    <section class="bg-white py-12 md:pt-0 md:pb-20 z-10 ">
    <div class="w-full max-w-1200 mx-auto px-8">
      <h3 class="accent-heading">Transcript</h3>
      <p>
        <span class="speaker">Bhuvana Ramakrishnan: </span>Hello everyone. Thank you for joining us for today's live demo. I'm your hos, Bhuvana Ramakrishnan, director of marketing at Yellowbrick. Our topic today is breaking down silos for real-time data analytics, and you will see high-speed virtualization for analyzing billions of rows in seconds. So just before I dive into the presentation with our speakers, I'm going to take a quick minute to introduce them. From Yellowbrick, we have Lorenzo Danesi. Lorenzo is a senior systems engineer at Yellowbrick with over 20 years of experience in data warehousing and running on massively paddle databases designed for analytics. We also have Emma Stein from Denodo. She's a sales engineer based in New York, and she's been helping customers with data virtualization solutions for about four years now. And before I pass it over to Lorenzo, just a little housekeeping, we have carved out some time for Q&A towards the end of the presentation. And so feel free to type in your questions into the Q&A box of your control panel, and we will get to it right off of the presentation. So without further delay over to you, Lorenzo.
      </p>
      <p>
        <span class="speaker">Lorenzo Danesi: </span>Hello everyone. And thanks for joining. Great to do this demo today with Emma from Denodo, and you'll see firsthand the power of Yellowbrick and Denodo working together. The agenda for today includes an introduction to Yellowbrick data warehouse followed by an introduction to Denodo from Emma. Then a live demonstration of how Denodo's intelligent data virtualization can be used to integrate data from disparate sources in real-time, using the power of Yellowbrick performance processing, billions of rows, and the ease of integration with Denodo. Plus the ability to deploy anywhere, anytime on premises in the cloud or both. Yellowbrick is the hybrid cloud data warehouse. That is the fastest available MPP data warehouse platform for hybrid and multi-cloud environments. It removes the traditional bottlenecks between storage and CPU and the system is architected like no other data warehouse in the world where the data moves directly from flash memory on the latest NBME storage technology directly to the CPU.
      </p>
      <p>
        This enables scan rates of close to a terabyte per second. And you heard me right, a terabyte per second. It offers breakthrough performance up to a hundred times beyond what either legacy platforms or other cloud providers virtual commodity hardware can achieve while providing the agility of the cloud at a fraction of the cost of alternatives, Yellowbrick's unified hybrid cloud architecture lets you deploy applications anywhere, whether you're inside your firewall and or multiple public clouds at the same time with the same data and performance everywhere. So depending on your needs, you can build your own Yellowbrick data warehouse as a service in a private cloud, deploy Yellowbrick and multiple major public clouds or do both.
      </p>
      <p>
        This is the true state of the art in cloud computing. It eliminates the risk of locking yourself in with a single cloud provider. With Yellowbrick’s sophisticated workload management feature, you can configure the system to match your workloads and you can be up and running very quickly as indexes and statistics are done automatically. You don't need a team of DBAs constantly monitoring and tuning the system. Yellowbrick integrates easily with all the major BI and ETL tools and contains the features you expect from a data warehouse. You get everything with a fixed-cost subscription that eliminates hidden cloud costs like those expensive data or costly egress charges. So all of this combined with 24/7, always-on performance, the cost per query goes down the more queries you run. Some of the leading companies in their industries trust Yellowbrick to help them solve problems that neither legacy data warehouses, nor cloud-only data warehouses can, including leaders in insurance, financial services, healthcare, and hospitality. One of our insurance customers uses it for actual calculations, risks and premiums for life and retirement insurance reports that were taking hours on traditional data warehouses now take seconds on Yellowbrick.
      </p>
      <p>
        Our risk analytics customer who has the largest online payment fraud portal that operates 24 by seven by 365 runs Yellowbrick. So quality of service is very important for those portal users, which generate ad hoc queries happening on the fly with sub-second response time. This customer augmented their Hadoop platform with Yellowbrick for performance and stability. They implemented Yellowbrick Spark and KAFKA integrations with data being loaded into Yellowbrick every five seconds. I wanted the top three credit card customers. Yellowbrick is working with Denodo as the intelligent virtualization engine to access data from Oracle, Teradata, and Hadoop within the enterprise bypassing the expensive ETL development costs, allowing Yellowbrick to do the heavy lifting, which includes processing billion and trillion row data sets of complex data faster than any other approach. So what I'll do now is switch over to the demo environment and first I'll start various workloads to simulate a real production environment. So I'll just press the play button here. And this tool actually generates workload on Yellowbrick. So the types of workloads that are being generated are things like ad hoc queries, BI tool type queries, ETL queries, and also data scientist type queries. So ad hoc and more complex type queries. So if I jump over to the Yellowbrick system management consoles, you can see all of the databases that are running in the system. So for our demo today, we'll be looking at the TPC DS database.
      </p>
      <p>
        And one of the tables we will be accessing in the demo is the store sales table. And if I zero in on that table, you can see that it has over 28 billion rows. And from there, I can look at the details of the table simply by double-clicking on that table. And you can see that the size of that table is taking up over two terabytes in the system. And you can also look at the definition of the table. So one of the cool things about the SMC is this execution timeline, where you can actually, you know, see queries that are coming into the system and notice that this is a very busy system from the workload I started. And also notice the number of queries running on the system. We're close to getting to a thousand queries and climbing. So what I'll do now is I'll switch over to this SQL tool where I can run a query on the sales table that I just showed you and where I'll aggregate the quantity of sales amount for one year. So when I write that, when I click on that, on the plate or the execution of that query, I can jump back over to the SMC and I can actually see that query coming into the system so I can actually capture it and look at the details.
      </p>
      <p>
        So this was the query that I just ran. And then I can look at the summary and you can see that it's scanned over 6 billion rows and any other data warehouse without pre-aggregated tables would be waiting minutes or more for that query to return on a system. This is busy, this is only a 16 node system. So imagine a larger Yellowbrick system. I can actually go back and, you know, just change the filter criteria to year 2000 and run that query again. Again, go back to the monitor. There's the query. Capture. Again, a little bit, you know, a little bit less than before, but still over 5 billion rows. And if I look at the statistics of this table, Ran again with consistent runtime, so this ran in seven seconds. So basically what we're saying here is it is scanned on a busy system like this, every billion rows, just over a second. So Yellowbrick truly makes the impossible possible. And this demonstrates the strength of Yellowbrick for executing ad hoc queries because businesses want to see real-time results, not yesterday or last week's results in order to make the right decisions and take proper action.
      </p>
      <p>
        <span class="speaker">Emma Stein: </span>My name is Emma. I'm a sales engineer at Denodo and in a couple of minutes, I'm going to show you guys a demo of how Denodo can be used to create a virtual view that integrates data across several different data sources. One of those data sources being Yellowbrick of course. And what you'll see is that when you're executing queries over tables that have billions of rows, like the one that Lorenzo showed us. In order to return the data to our consumers quickly, it's going to rely both on the Denodo optimizer’s ability to pick an efficient execution plan and also on Yellowbrick’s processing speed. So we'll look at how both of these combined will allow us to return data from multiple sources in real-time, in an efficient manner. So before I get to the actual demo, I'm just going to quickly go over an overview of data virtualization architecture and what it is since it might be a new concept to people.
      </p>
      <p>
        So if we look at this architecture diagram, you can see that the virtualization layer, Denodo in this case, is sitting in between your disparate heterogeneous data sources and your data consumers, and it's acting as an abstraction layer. So here you can build logical views in this layer,  that will be consumed by your end-users. In order to do this, from the virtual air, you would connect to your various disparate data sources, and these data sources can be pretty much anything. They can be relational. They can not be, they can be on premise, they can be on the cloud. And once you've connected to these sources, the data is abstracted in the virtual layer. And it's going to be really easy for your developers to go in and define transformations and integrations between the data. It's going to look to them as if the data is located in one source.
      </p>
      <p>
        Even though what we're defining here is just metadata. And the data is still residing in the original sources. Once you've created these logical definitions, our end-users will have a single point of access to consume that data and they can do that using the method of their choosing. So all of our views can be queried using SQL. They can be exposed as a data service and they can be searched using our data catalog. So this consumption layer is very flexible depending on the needs of your users. And what you'll see in the demo is that every time a user executes a query, Denodo’s optimizer is going to use the metadata that you've defined here in the virtual layer to try and rewrite queries so that we can push down as much as possible source and utilize those underlying sources. So as Lorenzo said, kind of a, let Yellowbrick in this case, do the heavy lifting in order to execute our queries as fast as possible. So let's look at an example.
      </p>
      <p>
        So say we have a new marketing campaign for our store, and we want to know the impact of that marketing campaign on sales in each state. The problem that we're experiencing is that our data is stored in three different locations. So you can see here our sales table, this is the one that learns pointed out is in Yellowbrick. It has 28 billion rows. So quite a bit of data that we have to deal with. Our marketing campaign information is stored in an external thought application. So we're going to access this as a JSON API and then our state information is part of the store details table in Teradata. So to create this integrated view, we're going to need to join the data from the resources, apply some filters to it, and then aggregate based on the state. And then at the end, I'll show how we can consume this integrated view using a reporting tool. So in my demo, I'll just use Power BI. 
      </p>
      <p>
        Okay, great. Okay. So here, I'm going over to the Denodo design studio and this is the tool that we're going to use to connect to our sources and create our virtual views. So the first thing that I'm going to do is open up that view that I was talking about in my slides. So here the first thing you should notice is that it looks relational. I can execute SQL query over it, and my data is going to be returned to me in this result set. So to the user, it seems as if we're querying a single source, but if I look at that tree view, you can see that we're actually querying those three sources that I mentioned in my slides. So we have our data from Yellowbrick being joined with the data coming from our marketing service and our storage details table in Teradata.
      </p>
      <p>
        And every time we execute a query on top of this view, Denodo’s going to go to those three sources, retrieve the data, and join it together. So in order to create this view, the first step is going to be actually connecting to our sources. So if I expand my sources folder, you can see, I have my three source connections created. So for example, if I open up the source connection to Yellowbrick, you can see, this is my connection wizard. I filled in my various connection details. And then I can introspect the source and see the different tables that I have access to. If I want to incorporate one of these tables from Yellowbrick into my virtual schema, I just checked the box next to it. I press create selected. This is just telling me, I already have a view with this name. That's okay.
      </p>
      <p>
        And at this point, we haven't actually collected any data from Yellowbrick. So the data is still in Yellowbrick. What we're getting is metadata about what's contained in that underlying table. So these are going to be things like field names, field types, as well as whether there's a primary key, a foreign key, as well as statistics about the data volumes from the underlying sources, and Denodo’s optimizer is going to use all of these pieces of information when a query is executed to determine the best execution. So we're going to do this over all of our different elements. So we have the base view from our marketing service, our store table from Teradata, and then our two tables from Yellowbrick. So now we can define some integrations or transformations on our data. And to do that, we're just using relational operations.
      </p>
      <p>
        So I can go here. In our case, we want to join some data together. So I'm going to select a join view, and then I can drag in my different tables that I want to join. I can join them together and I can set my joint conditions using this wizard. I'm just going to open up the one I've already created and you can see I've dragged in my four tables. Remember we're impacting marketing campaigns on sales, based on the state. And you can see I've set my joint conditions. So for example, between store sales and the marketing service, I've joined on the promo ID and my web conditions tab, I've added two filters, one that I only want data from the year 2000 that I only want data from my new marketing promotion. I've grouped by three fields: the month of the year, the name of the promotion, and the state.
      </p>
      <p>
        And then here in my output tab, this is where I can actually change what's projected to my users. So I've renamed this view. I've taken my field names from my source and I've renamed them to more user-friendly names. And I can also add and remove fields in this dialogue. So you can see here, I have the three fields I grouped by. I also added a fourth field called total. If I look at the definition for that, I can see that's just the sum of the store sales and we're just a SQL engine. So we're using built-in SQL functions to do this agregation. So then I can execute my integrated view and I can get my data returned to me. So now our view is ready to be consumed. But before I get to consumption, I just want to talk briefly about what's actually happening when I execute this query, because as Lorenzo talks about the store sales table has 28 billion rows, and we need to aggregate over this data after we joined it with our other sources.
      </p>
      <p>
        So if this is the case, how are we getting the data returned to us so quickly? So if I go back to my slides just a couple of notes on the optimizer. So every time a user executes a query, whether it's a selection on an integrated view, like the one I defined, or if they're executing their own ad hoc queries over the base tables, in any case Denodo’s optimizer is going to try to analyze each query to try and determine the best execution plan. And because we're streaming data from multiple different sources and all of the data that we're accessing is external, the goal of our optimizer is to try and reduce the amount of data that has to be transferred through the network. And to do that, we're going to try and push down as much as possible to our data sources to utilize the processing power of those underlying systems.
      </p>
      <p>
        And this is where the processing speed of Yellowbrick that Lorenzo was talking about really comes into play. So this slide just kind of helps me illustrate that. So here you can see an example query that's similar to the one that I created. It's a little bit simplified. It's just joining our store table with our sales table to return the average amount of sales per state. So a couple of different execution plans that the optimizer could consider here. So starting over here on the left, this is what simple federation engine would do. So if, for example, we had a store sales table in Yellowbrick with 300 million rows. In our case, it actually has significantly more. It has 28 billion, but for this example, we can say 300 million and then we had a store table in Teradata, for example, with 2 million rows, one option to execute this query would be to retrieve all 302 million rows, join them in the virtual layer and then execute the entire aggregation in the virtual layer.
      </p>
      <p>
        Now this is what most federation tools do and it's the least efficient. And in our case it would be very impractical to transfer all 28 billion rows. So Denodo can do much better than this option. The second option is to do some kind of temporary data movement. So here we would create a temporary store table in Yellowbrick, move all the store data from Teradata to Yellowbrick and push down all of that processing to Yellowbrick. This would certainly be faster than option number one, but it still requires that we take all this store data. We create this temporary table and when we move the data there temporarily. So there's a third option, and this has the ability to try and rewrite the query to push down processing to either side with two goals. One, as I said, to reduce the amount of data that we're transferring and two, to let Yellowbrick do the heavy lifting in this case.
      </p>
      <p>
        So what Denodo’s optimizer realizes is that instead of retrieving all of the data and then doing the group by, in one step, it can actually break it into two parts. So it can first group by the store ID in the sales table. This way, instead of returning one row for every single sale, we only need to return one row with sales data for each store. So Yellowbrick is going to be able to process that really quickly, even though it has a ton of rows in it. And then we're only going to have to transfer that final result set from each side, join that together and finish the aggregation in memory and executing it with this approach is going to be significantly faster. And kind of the most important point here is that this is happening automatically. So Denodo’s optimizer, every time a query comes in, is automatically behind the scenes trying to determine what query rewriting it can do to optimize the execution.
      </p>
      <p>
        So if I go back to my design studio and I look at the execution trace, I can see what actually happened when I executed the query. So it's very similar to what happened in my slides. We can see an aggregation push down card, and then if I click on the actual query was sent to Yellowbrick, I can see that we push down both the filters and the group by over the month of the year, the store ID and the promo ID. This way, we're pre-aggregating the data in Yellowbrick. And we know that Yellowbrick can do this very, very quickly. If we were working with a slower source, obviously the entire query would be slowed down because we'd be waiting for that data. So the data is returned to us in less than a second, I can see here.
      </p>
      <p>
        And because of that, pushing down on that aggregation, we only had to transfer the 9,000 rows. So it's the two systems working together that are able to make this very execute quickly. So now we've built our integrated view. We've made sure that it's performing and we're ready to expose it to our end users. So as I said in the beginning, there are many different methods of access, I'll just show you quickly what it would be like to visualize it for Power BI. So you can say, I already have the visualization here, but if I just open up Power BI, Power BI has a built-in connector to Denodo. So I would select that. And to your end users, it looks and feels as if they're querying a single relational database. So the optimizer is working behind the scenes. Yellowbrick is working behind the scenes. We're getting data from these disparate sources, but that's all abstracted to our end user. I press okay. And then I just need to select the view that I want.
      </p>
      <p>
        I already have it here and I can visualize it in whatever way I choose. So if I just go back to my slides for a second a couple of key things that we would like you to take away from this demo. So you saw that Denodo was able to create these integrated views which combined data from different sources and retrieved the data in real-time. And every time a query is executed, whether this be a query over one of those integrated views, or just an ad hoc query over some base tables, Denodo is going to dynamically generate execution plans, which rewrite the queries to try and maximize the delegation to the source. And by doing this, Denodo’s relying on the processing power of those underlying data sources. When we're working with Yellowbrick, Yellowbrick can process billions of rows with seconds to sub-second response time as we saw.
      </p>
      <p>
        So the combination of these two is really powerful in letting you execute these ad hoc queries over the large volumes and return real-time integrated data. So if you would like to get your hands on Denodo try it out for yourself. We have test drives available on our website. These give you access to a pre-configured sandbox environment that will let you easily get your hands on, test out some of the notice features so you can access those at this point.
      </p>
      <p>
        <span class="speaker">Denesi: </span>Yes. And you can, and you can also follow Yellowbrick. You can follow us on Twitter and you can visit us on Facebook and LinkedIn, and you can also visit us at yellowbrick.com. And please, you can also book a demo. Then we can, you know, we can work with you to demonstrate the power of Yellowbrick on your own data, or if you just want to gather information, it's all there on the website.
      </p>
    </div>
  </section>



  </Layout>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Breaking Down Silos for Real-Time  Data Analytics',
      meta: [{
        key: 'description',
        name: 'description',
        content: 'Data Virtualization provides a logical data layer that integrates data siloed across disparate systems and delivers it to business users in real-time.'
      }]
    }
  }
</script>
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
			<h1>Protecting Privacy With Data Masking</h1>
		</div>
	</section>

	<section class="bg-white py-12 md:py-20 z-10">
		<div class="w-full max-w-800 mx-auto">
			<BaseWistia id="1p26391j8f" />
		</div>
	</section>

	<section class="bg-white py-12 md:pt-0 md:pb-20 z-10 ">
    <div class="w-full max-w-1200 mx-auto px-8">
      <h3 class="accent-heading">Transcript</h3>
      <p><span class="speaker">Mike McWhorter: </span>
        Hello, everyone. And thank you all for joining us today. We're going to be talking about a problem that comes up a lot in data science and that's data privacy. As data scientists, we love collecting data. The more that we have, the better predictions we can make, which ultimately leads to us making better business decisions. But sometimes the data we collect is sensitive. Our customers trust us with a lot of private information. We have their names, addresses, and payment information. We might have access to things like medical records, chat logs, or GPS data for mobile devices. This information is incredibly useful to us because it gives us insight into how our customers are using our products and services, but we need to be very careful how we handle it. There are consumer privacy laws and regulatory standards that govern what we can and can't do with our customer's data.
      </p>
      <p>
        We need to make sure we're in compliance with those rules, both for our benefit and the benefit of our customers. In the analytics world, we call this data governance. Data governance is a collection of rules and procedures that govern the flow of data within an organization. It's where we define things like our data distribution policies, security, privacy, and maintaining compliance with regulatory standards. Since most of these records are going to be stored in a database, we would typically enforce this by setting up database access controls. We do this by setting up user accounts and roles on the database and issuing DCL commands like grant and revoke to set up the privileges for our users. This places some pretty heavy restrictions on what the data science team is allowed to see. And it's kind of hard to analyze your customer records. If you're not allowed to see them, that's where Immuta comes in.
      </p>
      <p>
        And Immuta is a software package that enforces your organization's data governance policies. It can grant or restrict access to certain tables based on users and roles, but it takes it a step further by allowing you to restrict access to individual columns and rows within each table. But the coolest feature of Immuta is that it allows you to mask private data in such a way that it can still be analyzed without exposing the raw values to the analyst. Here's how it works. Immuta acts as a secure proxy for your database. Instead of connecting to the data warehouse directly, your clients would connect to an Immuta instance. From the client's perspective, Immuta looks just like a database server. Your applications can connect to it, submit queries and retrieve the results. And as far as the users are concerned, it looks like they're connected directly to the data warehouse.
      </p>
      <p>
        But under the covers, Immuta is taking all of those requests and forwarding them to the data warehouse, retrieving the results, and then filtering the results based on the policies and permissions you set. So for example, if there are any fields that a user is not authorized to see, Immuta will either mask them or remove them from the results set before it returns them back to the client. And it does all this without making any modifications to the underlying database, it's called Immuta because the source data is immutable. It doesn't make any changes. It doesn't update any rows or delete any rows or modify any columns. It doesn't add extra metadata. Instead, it just modifies the result set while the data is in flight. This will allow you to analyze sensitive data by anonymizing it so that it's not traceable to any specific person. If you're a data analyst, this is a really big deal because now you can search through sensitive data and perform an analysis of it even though you can't actually read it. 
      </p>
      <p>
        I'll give you a quick example. Here is a table of customer records. You can see that it contains some private information like names, addresses, birthdays. Suppose we want to analyze this data. The data science team doesn't need to see the customer's name and address in order to do this. They just need some sort of unique identifier to track these values across the dataset and compare them to one another. So instead of removing them, Immuta can mask them for you. It replaces every value with a non-reversible hash. If two values are the same, their hashes will also be the same. This will allow you to do table joins on these fields and run a group by statements and count the number of times each value appears without exposing the raw values to the analyst. So now we can track these values through the dataset, without compromising the user's identity or violating any consumer privacy laws.
      </p>
      <p>
        Now, by the way, this is just one type of masking. There are several different masking options to choose from depending on what your data governance policy is. So for example, if you didn't want to use masking, you could just make them all return null. Now, we won't be covering all the different options today, but rest assured that no matter what your data governance policy is, they have a solution that will help you address it. Now how fast all of this runs depends on your data warehouse. Remember Immuta is the data governance component. The data warehouse provides the foundation for storing and retrieving all of your records. So when you're choosing a data warehouse, you need to be very careful which one you pick because the cost and the performance of your entire analytics environment hinges on this one central component. After all, it doesn't matter how good your data governance is if your queries take three days to run.
      </p>
      <p>
        Yellowbrick has a very unique architecture that allows you to plow through billions of records in milliseconds, and it can handle extremely large datasets at sizes that other data warehouses can't touch. And when you combine a Yellowbrick data warehouse with Immuta, you get speed and data governance so that you can get answers from sensitive data sets in real-time. I've prepared a live demo for you today. So you can see what that actually looks like. For the demo, I've loaded some test data into my Yellowbrick instance. It's a collection of call data records commonly referred to as CDR data. For anyone who's not familiar, a call data record contains the details of a phone call or a text message. So it tells you things like the time the call was placed, the duration of a call, the name and phone number of the person, placing the call and receiving the call. Things like that. There's not a standard format for CDR records. So the specific format will vary from vendor to vendor, depending on what hardware stack you're running. So for the demo, I'm just using a generic format. I've created a set of randomly generated call data records so that we can run some queries on it. So let's log in to our system and take a look.
      </p>
      <p>
        All right, this is my Yellowbrick instance, it's running in the cloud. Now, if I take a look at our database, I've named the database telco_demo. So if I look at this database, you can see I've got a table here with about 5 billion records in it. And this is about 185 gigabytes compressed. So it's probably four times that uncompressed. I'd like my data science team to be able to analyze this table, but I don't want them to have direct access to it. So instead of going directly to Yellowbrick, I'm going to give my clients access through Immuta. So let's go ahead and set that up. I'm going to switch to my Immuta instance.
      </p>
      <p>
        Here we go. Alright. This is my Immuta instance. This is running on an EC2 instance in AWS. And in order to connect Yellowbrick to Immuta, I'm going to click the plus button here to add a data source. Next, I'll choose my storage technology. It supports Yellowbrick straight out of the box. So I'm going to click Yellowbrick and connect my Yellowbrick data warehouse. Next, I enter the server name. I'm using, YB96. The database name is called telco_demo. Username is Immuta_user. Password, I'm not going to tell you. Next, I'll hit the test connection to make sure that it can connect. And all my connection information is good. I got the purple checkmark. That means Immuta was able to connect a Yellowbrick successfully. Now I'm going to select which tables I'd like to govern. So as you can see here, it's already been searched through the database, and it gave me a list of all the different tables. It looks like an auto-selected all the system tables. So we're going to unselect those and we're going to select the call records table. This is where my CDR records are located. I'm going to hit, apply, connect to the public schema, and that's correct. I'm going to give this a name. We're going to call it. We're going to rename this to Telco Demo and hit create.
      </p>
      <p>
        All right. And now my data source has been created. Next, we'll open up our SQL client. So I'm using DBeaver as my SQL client. I've already entered the connection information for my user. So it should connect here automatically. So let me go ahead and run a query to make sure that works and it connected. So I'm running a count(*) on this table and it looks like I've got 5 billion records, which is correct. It's important to note that my SQL client is not connecting directly to Yellowbrick. It's connected to my Immuta instance. So in this scenario, the data science team would not be able to access the data warehouse directly. Instead, they connect all their analytic tools to Immuta so that Immuta can enforce my data governance policies. Now the user won't be able to tell the difference. As far as they're concerned, they're connected directly to Yellowbrick.
      </p>
      <p>
        It looks exactly the same. It's the same data set, the same query syntax, but the results are going to be filtered in flight. We haven't created any governance policies yet. So before we do that, let's run some queries so we can see what the raw data looks like. So if I run a select *, this is what a call data record looks like. So here I've got a unique ID for my user, the IMEI for their phone. I've got a name and phone number of the person placing the call, name and phone number of the person receiving the call. So for this first record, it looks like Jose Sanchez made a call from this number. He called Heather Rodriguez on this number. He called her on March 4th at 5:00 PM. And the call lasted 587 seconds. So now we'll do a bigger query.
      </p>
      <p>
        We're going to find out what your users spent the most time on the phone and then rank them. So in this SQL statement, we're selecting the caller’s name. We're going to count the number of calls they made. And then we're going to count the total number of seconds that each person was on the phone and then sort them by whoever was on the phone the longest. So we're going to aggregate two fields across 5 billion records and sort the entire result set. So this is a lot of work. Let's see how fast it runs. All right. It looks like it was completed in 3.5 seconds. So our most, our most talkative customer here was Neil Aguilar who made 288 phone calls from this number and was on the phone for a total of 187,136 seconds. I think that's about 50 hours. So this guy was making a lot of phone calls.
      </p>
      <p>
        Let's take a look at our Yellowbrick instance to see exactly what happened. So going back to my Yellowbrick instance, this screen is called the execution timeline. It gives us a list of all the active queries that are running on the system. So the last one that was executed was this one here in red. So I'm going to click on this and drill down into it and see what the database did. Now, examining the query, you can see this is the SQL that it submitted, it wasn't exactly what I typed. It added a couple of different things so that it could do the masking later. And you can see it's got a query ID here so that if I need to investigate this later, I can match this up the logs in my Immuta instance and connect them together. So that's a nice feature.
      </p>
      <p>
        When I look at the analysis tab, you can see that it did a full table scan of 5 billion rows, followed by a group by on a hundred million rows, a second group by on a hundred million rows because I was aggregating on two fields. And then a sort, so tables cannot 5 billion rows to group buys and a sort. And it did all of that in 3.335 seconds. That's pretty good. So I'd like to show these records to our data science team so that they can perform an analysis, but this is sensitive customer data. It's got all of our customers’ names and phone numbers and who they call. So this is private information. There are a lot of advertisers and people who run phone scams, who would love to get their hands on a data set like this. We want to minimize the chances of that happening.
      </p>
      <p>
        So let's protect all of the sensitive fields. I'm going to go back to my Immuta instance now and set up some data governance policies. So the first thing I do is I go to the policy tab here under my data source, click the new policy. I'm going to choose mask as the policy, and I'm going to mask using hashing. This replaces every value with a non-reversible hash. So if two values are the same, their hashes will also be the same. So now I can join tables on these fields and run group buys and count the number of times each value appears. And I don't have to expose the raw values to the analyst. So now I can track these values throughout the dataset, without compromising the user's identity or violating any consumer privacy laws. So we're going to do this. We're going to select which columns we'd like to hide.
      </p>
      <p>
        So we're going to select source name and source number and destination name and destination number. So this is the name and phone number of the person placing and receiving the call. And we're going to do this for everyone. Going to create this policy. Click save. So let's go back to our SQL client and run those queries again. When I run this a second time, all right, you can see, again, it completed in 3.5 seconds. The same amount of time. It didn't add any extra overhead, or at least not a, not a real measurable amount. Now, we can see that the source name and the source number had been replaced with a hash, but we can still notice how we can still count the number of active calls. So this I believe was Neil Aguilar who placed 288 calls and was on the phone for 187,000 seconds.
      </p>
      <p>
        And now we can see who our most active customers are. And we're able to determine that even though I can't actually read the customer's name or phone number, now notice how its toll ran in three seconds with the data governance policy enabled. That's the beauty of Yellowbrick. We just did a full table scan of 5 billion rows. We summarize two fields across a hundred million customers, sort of the entire results set in descending order, and apply our data governance policy. And it did all of that in three seconds. So with the solution, we can get answers in real-time without violating the customer's privacy. So this is a really cool solution. Protecting our customer's privacy is important, but you don't have to sacrifice performance in order to get it. You just have to choose the right data warehouse. So that concludes the demonstration.
      </p>
    </div>
  </section>

	</Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Reach next-level performance with advanced workload management',
    meta: [
      {
				key: 'description',
				name: 'description',
				content: 'Advanced workload management with Yellowbrick gives you full visibility and granular control over your queries, a key differentiator for optimizing performance.' }
    ]
  }
}
</script>




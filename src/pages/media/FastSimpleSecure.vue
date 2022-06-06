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
			<h1>Fast, Simple, and Secure: Working with Encrypted Data in Yellowbrick</h1>
		</div>
	</section>

	<section class="bg-white py-12 md:py-20 z-10">
		<div class="w-full max-w-800 mx-auto">
			<BaseWistia id="qhi18oor1f" />
		</div>
	</section>

	<section class="bg-white py-12 md:pt-0 md:pb-20 z-10 ">
    <div class="w-full max-w-1200 mx-auto px-8">
      <h3 class="accent-heading">Transcript</h3>
      <p><span class="speaker">Joey Foley: </span>
        Thanks everyone for joining us for this webinar on speed, simplicity and security. So when we talk with customers, there's three topics that seem to come up rather frequently. Those are around speed. You know, how do we get more value from our data? How do we deal with real time data? Getting that into the data warehouse, the shrinking SLA windows. They talked to us about the complexity of trying to deal with multiple different environments so how they can become more agile, simplify what they're doing, and be more innovative. And how do they get hybrid abilities while they're trying to manage all these different desperate systems that they've got. And then finally, they talked to us about security. How do they protect the data that they have and how complex is it going to be to try to come up with a security model to manage the data that they have in the data warehouse.
      </p>
      <p>
      	So when I respond, it's typically around the value propositions of Yellowbrick, and then those have to do with scale. So when we typically run POCs with customers, we see performance improvements of a hundred X with ad hoc analytics and things like that. And, and we do that while we're supporting hundreds of thousands of concurrent users accessing the system and doing that at scales that they're not used to seeing in data warehouses like petabyte scale use cases where we make the data look like it's in memory.
      </p>
      <p>
      	The other thing that Yellowbrick offers is flexibility. And what I mean by flexibility is the deployment flexibility to put the workloads where it makes the most sense. So that might be in their private cloud or in their data center. It could be connecting them to one or multiple clouds as multiple of our customers are connected to multiple different clouds or they can have the best of both worlds and have hybrid. And what we mean by that is being able to decide where it makes the most sense to deploy those workloads, whether that's the best user experience is going to be connecting users into Azure, or maybe it's most cost efficient for us to keep some certain workloads in our data center and being able to migrate those from one to the other. And that's what true flexibility of deployment means. And then finally Yellowbrick's value.
      </p>
      <p>
      	And I actually think, you know, we have the best price performance of any other system on the market. When we compare ourselves, you might be able to match our performance, but you're not going to match it at a price that makes it cost efficient for you to run that. The other thing that customers like about us is that we have a predictable pricing model. So we're not paying you by the access of the data, or we're not paying you by the query. You basically pay for a system for a year and you get to use it as much as you want, and you have full access to all the data that you have on the environment.
      </p>
      <p>
      	Now our topics for today, first of all, what is speed? Well, speed means you need to be able to load your data really fast into the environment. There's real time use cases that people have now with streaming Kafka and Spark that they want to integrate into the data warehouse. And they don't have time to wait for a batch to run, you know, sometime at night or sometime in the day. That also means having queries that are interactive, you know, looking at, you know, hundreds of terabytes, petabytes of data, billions of rows, and being able to do that within a couple of seconds, not waiting 30 minutes for a query to return if it even returns and really unlocking your data to new insights. And, you know, when we deal with our friends over at BMW, this is what they had to say.
      </p>
      <p>
      	“We can quickly analyze large amounts of data and offer new insights.” And that's all because of Yellowbrick. There's also the aspect of simplicity, right? Some of these systems, when you try to do a lot of things with them, it's very complex or you're stitching together multiple different environments to try to get the best of something to happen for a data process. Well, with Yellowbrick, it's all about load-and-go simplicity, right? Create your tables, load data into it, no indexes, no tuning. Don't think about, you know, how you need to store your data. Think about how you want to write queries against that data. And also reducing your stack because we can handle petabytes of data. We see people consolidating platforms onto us, and then also integration. How easy is it going to be for you to integrate Yellowbrick into your environment?
      </p>
      <p>
      	Well, to the outside world, we look like a PostgreSQL database and every tool in the world can connect to a PostgreSQL database. So that makes it simple. And it's also running the ANSI SQL and things like that. And our friends over at Symphony Retail, they were able to consolidate five different systems onto one Yellowbrick platform. That's true simplicity. And then finally there's security, right? It's security around the hardware. The physical medium that we write the data on, can we encrypt that? So it's secure how users are able to access what tables and what things they can encrypt and decrypt, being able to securely connect tools to the data warehouse like TLS encryption from the client, all the way to the in system, and also securing the data. Who gets to see what, when, where, and how? And we work. Not only do we have a lot of stuff that's built into the product, but we also work with these great security partners as well.
      </p>
      <p>
      	So security, what do we mean by that? What are we going to demo today? Well, we're going to see how you give access with security? Who gets to see what? Are the users still gonna be able to use that data after it's encrypted? And then how difficult is that going to be to implement? And I saved the last one because I've talked to customers over the years that have seen security models, where they had to build up multiple different schemas and multiple different layers of cohorts. And, it just became a confusing mess, because it wasn't simple for them to do this. So let's jump over to the actual demo and show you what I'm talking about. So this is a demo environment that I've logged into, and this is in AWS and it's going to be integrated with our Yellowbrick system across a private link connection.
      </p>
      <p>
      	So very secure, nothing's going across the internet and I have three different personas that we're going to be going through today. There's Alice, she's the data engineer and she's responsible for getting the test sets available for the analyst and making sure that those data sets are secured. There's also Mary who's a higher level analyst, too. She's going to be able to actually see the un-encrypted data and Paul analyst one, he's not going to have access to the unencrypted data, but he still needs to use that data. So let's go through our process here. We're going to, first of all, make sure we're working with a clean slate here. So we're going to create a schema and we're going to set our search path to that schema. Those things are done. And the next thing we're going to do is we're going to create a security key, and the security key is created and stored in our HashiCorp vault on the system and it's per database.
      </p>
      <p>
      	So this is going to be created in the test schema in our test database that we just created. And then the next thing we're going to do is we're going to create a couple of tables and load some data up. Now, when I look at this DDL, I can tell that it’s pretty standard stuff that we're used to seeing, but there's that encrypted columns field that's there on the end. And what does that actually tell us? Well, it's telling us that we're going to encrypt with the key that we just created, and you can see that test encrypt key that we just created here. And then you can see that we're going to be using an AES 256 encryption level. And we also have the encryption type here. We have deterministic here and randomized down here. So when we encrypt with a deterministic encryption type, what that means is we'll always encrypt the value coming into the same output string.
      </p>
      <p>
      	So we can actually join across tables using those values. And if I used randomized, what I'm going to do is just everything that goes in, it's going to be coming out at a randomized stream coming out of that encryption. And so that's where if we wanted to obfuscate data there, we know we want to do joins and things like that on, or maybe it has a low cardinality. We don't want someone to be able to reverse engineer what the encryption is actually doing. So let's create this table here. One second. And there you go, that table's created, and we've got a couple of other tables that we're going to create here. There's a payer's table that we're going to create. It's a rather small table. We have this larger table of encounters. These are going to be the encounters that people go see the doctor that we're going to load some data into. And then we have this allergies table that we're going to create here. All right. So there's our four tables created. And remember we talked about load-and-go and access some things like that. Well, right here, we're going to grant access to the key, to the analyst level two, and then we're going to get access to the schemas and the tables to the analysts.
      </p>
      <p>
      	And then we're going to do this thing, alter default privileges, where we give any future tables that we create access to these analysts as well. Now let's go ahead and put some data in these tables. I have another healthcare data set on the same Yellowbrick instance. And what I'm going to do is copy data from those tables into the new test schema that we just created, right? So let's start with his allergies table. Now this table has about 12 million rows in it, and you can see in a fraction of a second, we were able to copy all that data in. I'm now going to do this encounter table. This is a rather large table here, and I'm going to do an order by the code. So we have good filtering on that table as we created in about 14 seconds.
      </p>
      <p>
      	We're going to select all the data. We're going to order it by the ICD-9 code in that table. And then we're going to write that in. And as you can see, that's almost a billion records that we just copied over in under 14 seconds. That's simply amazing. All right, let's get the rest of these tables ready to go. So we got this one here. This is the patients, that’st 24 million or so records done in under three seconds. And this is what we're talking about. When we say speed and simplicity, we just created those tables and we loaded data into it. All right, moving on. Let's go look at Paul. So Paul's our level one data analyst and Paul has access to these tables, but remember he doesn't have access to the key. So let's just say, Paul does a simple select on this table, right?
      </p>
      <p>
      	He pulls back a couple of rows to take a look at it and we can see here the social security number, it's obfuscated. The driver's license number is null now, but we can see these are obfuscated values. We scroll down here to the first and last name. He's not going to have access to those things. Now, Paul still needs to do some work with us. So let's just do a simple example here where, let's say, Paul wants to just do a select distinct. This is a joint where he's going to fold the table on top of itself, and then look for social security numbers of people in Texas, right? So he's able to join on SSN value and get results out. But again, he can use the data. He just doesn't have access to see the decrypted value of that social security number.
      </p>
      <p>
      	And now here's another one that he's going to do. This is a claims by SSN. So what we're going to do is join together, not only the encounters table, that record, that table that had billions of records, we're going to join that with the patient's table, and we're going to sum up all the claims that they've made. So again, we're summing about a billion records by the individual SSNs that we see in pulling in this data information. And that was done in 1.2 seconds to sum over almost a billion records. That's incredibly fast. Now let's move to Mary. Remember Mary is the analyst level two, and she has access to that security key. So when she goes and does a select on this table, let's see here, automatically it's decrypted. And she can now see columns like the social security number. She can see the driver's license.
      </p>
      <p>
      	She can see the first name, the last name. So she has access to these same fields. Now let's see what happens when Alice runs that same total claim by SSN. Again, she's summoned by the SSN and she's pulling back all the data and it's unencrypting that data on the fly. It's happening incredibly fast, right? So let's do a couple more complex joins across this table. We've got, you know, our patient table that we've been talking about. That's got about 24 million records in it. We have that encounter table that we built out at the beginning of the demo. And as you can see, I got to scroll over the table. It's so large. That's 979 million records, almost a billion records in that table. And then I'm going to be looking at some information about the healthcare observations table. That's in a different database.
      </p>
      <p>
      	So a cross database join here is what we're going to be doing with these tables that we just created. And those observations, this would be, you know, what are the ICD-9 codes that they observed while they were seeing you at the doctor's office? And that table has about 7.4 billion records in it. So these are large datasets, right? And we're going to do, let's see a count of the intersection of all these three tables being joined together. How many records do we intersect with when we joined these together, out of that 7.5 billion. So 6.7 billion records are what we're going to be playing around with when we run these next set of queries, right? So the first one I want to run for you is an account of the observations in the visits, right? So every time someone went to see a doctor what was the count of observations being taken?
      </p>
      <p>
      	So one of the things they typically do when, when anyone goes to see a doctor, right? And this is again doing a system and classification across all of the different observations in that table. So 7.5 billion records are classified by the description in the ICD-9 code. And then we do a sum of the counts across those. So it looks like when someone goes to see the doctor, they're getting their blood pressure taken almost every single time they go. They're taking their body weight. They're going to take their heart rate, do things like that. So common things that you'd expect to see from a healthcare data set, right? So that query that we just ran that ran in 9.7 seconds. And I can see that right here at the bottom of how long it took for me to get those results back.
      </p>
      <p>
      	Now, I'm going to go against the base tables that are un-encrypted data to show you what's the time difference between an encrypted table and a deep un-encrypted table, right? Is there any overhead associated with that? So again, running that same description. These are all un-encrypted tables that we're going to be using. And as you can see, same timeframe, about 8.9 seconds for me to run this query. So again, when we talk about adding this level of protection with the keys to the data in your database, you're not going to be slowed down by doing this. And that's incredible. Now I have a couple other cool queries that I want to run for you. So this is going to be a classification of looking at ICD-9 code for BMI readings and BMI readings are a number, right?
      </p>
      <p>
      	But that number actually is broken out into what we would term classification zones, right? So you can have BMI set are healthy or overweight, or we can have ones that are a lot of over-weights in this dataset, but you can also have ones that are healthy. So that's good there. And again, that's using that test set. When we join those together, we're basically scanning through 6.7 billion records to understand the classifications of the BMI's that were running in this query. Now we've been talking to you guys about the performance of Yellowbrick, and I have a couple of other queries that I built for you. So this is that same observations table. And I folded on top of itself 10 times, and we're going to run the same classification that we did for the last query, the BMI classification, right?
      </p>
      <p>
      	So this table that we're going to be joining with the other encounters in the patient table. This table actually has 74, almost 75 billion records in it. And we're going to do that same classification that we just did over the table that only had 7 billion records in it. Okay. So this is going to be a huge query. And I want you to see just how fast we were able to scan through that entire table, and then build out that classification of the BMI using that much, much larger table fractions of a second. So this is what we mean when we talk about speed and simplicity, but also having security around your data. So again, with Yellowbrick, we give you all three of those. I want to thank you again and open the floor to any questions.
      </p>
    </div>
  </section>

	</Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Fast, Simple, Secure',
    meta: [
      {
				key: 'description',
				name: 'description',
				content: 'Learn how Yellowbrick Data Warehouse breaks through analytics limitations.' }
    ]
  }
}
</script>



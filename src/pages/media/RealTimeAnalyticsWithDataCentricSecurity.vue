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
			<h1>Real-time analytics with data-centric security</h1>
		</div>
	</section>

	<section class="bg-white py-12 md:py-20 z-10">
		<div class="w-full max-w-800 mx-auto">
			<BaseWistia id="s8373q9rqu" />
		</div>
	</section>

	<section class="bg-white py-12 md:pt-0 md:pb-20 z-10 ">
    <div class="w-full max-w-1200 mx-auto px-8">
      <h3 class="accent-heading">Transcript</h3>
      <p>
        <span class="speaker">Mike Mullen: </span>Thanks for joining everyone today. Really appreciate it. My name's Mike Mullen. I'm a solutions engineer in the North America territory for Yellowbrick. Today. We also have a Sandeep Kaul solution architect, North America Protegrity and I also think it's important to note that our partnership with Protegrity started a while back. It started at a joint customer, a very large customer of ours, credit card company, and this customer has a large multi-petabyte deployment talking currency. I thought that was worth bringing up here. Our agenda today, we're going to go through the value proposition of both Yellowbrick and Protegrity. We'll talk about the integrated architecture briefly and demonstrate how it works and allow for some time for Q&A.
      </p>
      <p>
        So today, massive analytic workloads with high volumes of data are creating really difficult challenges for legacy and cloud-only data warehouse. It was cloud only, and there's unpredictable costs, unreliable legacy systems, very expensive, hard to upgrade. Yellowbrick’s solution to this is our hybrid data warehouse and then we have basically key values here we offer our customers. These are critical key values. We offer price performance, we're number one in price performance. We’re more committed to delivering on this on every release of our product. We can run thousands of concurrent queries over petabytes of data on a much smaller footprint than our competitors. More freedom to choose. So you can run Yellowbrick on premise, on cloud, or both all managed with the same UI regardless of location. No, lock-in no egress fees, for instance. So if you put data in Yellowbrick and you want to move it to something else, you can take it out of Yellowbrick.
      </p>
      <p>
        You're not charged to move your data. So no lock-in there. And no expiring credits. So when you're using the system and you've got a critical workload, it just doesn't stop because you ran out of credits. So you don't have to worry about those sorts of things. Also more real time insights. You can analyze all your data instantly as it arrives in Yellowbrick. You don't have to wait. You can also query across boundaries with real-time data coming in, in addition to the historical data, bring it all in, in a single view. And we're able to ingest in real time, 3 million records a second and batch load 10 terabytes an hour, basically saturate dual 10 G line or 10 gig line. And last but not least more predictable pricing. Yellowbrick provides a clear and consistent cost model. You don't need to have a PhD to understand the pricing model. It's also subscription-based, no billing surprises because we don't have any shared resources underneath like you do with cloud vendors.
      </p>
      <p>
        So what makes us special? We're crazy fast. You can do more with less. We need a smaller system, smaller footprint, a less expensive product. For example, query data can be streamed into in parallel directly from flash t0 CPU bypassing memory. So you'll have a smaller footprint, less memory, less costs. We can also deliver full redundancy without the need to double the hardware footprint like mirroring. So just two examples, we're able to scale rapidly, start small and then, basically 10 terabytes, and move up to four petabytes and beyond pretty quickly, super easy to use because we look like PostgreSQL. So all your existing tools run. No data prep such as indexing. You create cables, load data and start querying. So we call that a load and go approach. We also have self tuning in our system. It's a no tuning system required. So you do things like backing and grooming and all the things that you would do in your traditional data warehouses, you don't even do that in Yellowbrick. So it's overall lower administrative costs. 
      </p>
      <p>
        And then lastly with these sophisticated UI tools, we have a really easy to use web based UI tool to monitor, manage resources and Yellowbrick. And then lastly, run those analytic workloads anywhere, whether it's on premise, public cloud, or combination of both.
      </p>
      <p>
        So advanced workload management is one of our most valued capabilities in Yellowbrick. You can allocate system resources effectively, meaning RAM, storage, CPU can be allocated to queries and priority-based systems. So this rule-based system can determine where, when and how a query is to run in addition, protect against mission critical jobs. So that “select *” from a trolling road table won't kill your system or kill other workloads or squander system resources. And if it does, you can cancel that query instantaneously at the sub-second level, align workloads with business priorities, for example, data loading or backup workloads can take a back seat to, you know, an executive dashboard needs to run on a Monday morning at a board meeting whose backup jobs can run off hours or in slow lanes while the dashboard can run at a high priority fast lane. And then lastly, Yellowbrick gives you the ability to maximize your return on investment. So with our timeline execution manager and all of our growing deep dive statistics and being able to analyze what's happening on the system you get full visibility and control all the workloads on the system.
      </p>
      <p>
        So Yellowbrick plus Protegrity we're both hybrid cloud solutions. And so what the combination gives you is the ability to run your analytic workloads securely regardless of location. So what I mean by that is that, Yellowbrick can deploy on premise. You can deploy Yellowbrick in the cloud and you can have applications running up here in the cloud and Yellowbrick appears as a service inside your VPC and your cloud vendor. So what that means is all your tools of choice can run across to any one of these clouds transparently, and then you, you know, centrally manage your Yellowbrick data can move back and forth in sync for replication, for disaster recovery and so forth. And then with Protegrity same hybrid approach, regardless of data location, whether it's on premise or in the cloud or in an application up here, it doesn't matter. It's managed in one place and regardless of location and it's a data centric approach as well. So one of the things that's important, I like to bring up is its ability to maintain data type preservation. So with saying that, let me turn it over to Sandeep to talk about Protegrity.
      </p>

      <p>
        <span class="speaker">Sandeep Kaul: </span>Thank you, Mike. I will present a high level overview of our data protection platform today. And as Mike noted, Yellowbrick offers industry leading performance and creates a highly secure synergistic solution when using conjunction Protegrity is an advanced security platform. When we think of, the next slide, please, when we think of security, we often think about layers and layers of defense for protection. These typically include firewalls on the network, local operating system level security controls, and application hardening. We have found that those approaches are not totally adequate to provide full protection. Protegrity takes a different approach. We alter the data through one of several obfuscation methodologies, so that even if bad actors manage to access a repository, what they'll end up with is scrambled content that's totally worthless. And can't be used to compromise PII, personally identifiable information, for example, or other sensitive data. For a good analogy, think of a bank robber that breaks into a bank, cracks the safe only to find fake monopoly money inside the city.
      </p>
      <p>
        Well, our data protection platform uses a similar approach when we use that tokenization methodology. Next slide, please, here are some examples of our fine grain protection methods. There's encryption here on the left which is based on known mathematical algorithms that are available to both good and bad actors. Encryption is bi-directional. So the name James Cameroon and an author can be changed into the encrypted form in the first red box. And then back to the original clear text as James Cameroon. Tokenization is the next box over. And that's the area where Protegrity has infested over 15 years of research and development time and effort. And we hold over a hundred patents in this area and in security in general. It's similar to encryption in the sense that the original content is obfuscated and is also bi-directional, which means James Cameroon can be put into a tokenized form and reversed back to James Cameroon, but there is no mathematical relationship between the data and the token.
      </p>
      <p>
        And instead, we use codebooks and randomly generated values to generate the token. The third box focuses on hashing, which is a one-directional method that's commonly used for passwords. So hash values cannot be converted back to the original text, and that's why we often have to reset our passwords if we happen to forget them. And the last box is focused on masking. Masking can be used either as a standalone or in conjunction with another method like tokenization. Generic characters are used like stars or question marks to redact content and parts of the field can be left as clear text if we desire, like the last four digits of social security number. Masking can also be applied dynamically at the time of a query for users that may not be authorized to view sensitive information. So users that are trying to get content out of Yellowbrick that may not be authorized can still retrieve that content but in a masked format. So it's protected. Next slide, please.
      </p>
      <p>
        This slide just illustrates a real-world example. Most of us have dealt with spreadsheets or databases where we have the entries for names, address, date of birth, and so forth. And that will typically look like what you see in column one here, clear. It's human-readable and anybody who has access to that can potentially cause harm to James Cameroon because the credit card number and the social security number of being exposed to the next column, which is in the green text presents what Protegrity does after applying our tokenization algorithms to the content. As you can see, the content is very scrambled and even if a bad actor were to get their hands on it, they would not be able to compromise any information that's unique to James Cameroon or anybody else.
      </p>
      <p>
        And in the next column, we often have requirements from companies to expose part of the content in the clear. So here you see information like the name James Cameroon, and his address, date of birth and social security number are all in the clear, but the credit card number is masked for the first 12 digits. And the last four are left in the clear so that somebody in the role of a help desk operator can verify the identity of James Cameroon. And at the same time not compromise the security of the credit card. And in the last column, we have created another role for somebody, for instance, in the finance or back-office job responsibility. And they would definitely need to get credit card information in case there's a requirement to dispute a charge or billing inquiries and so forth. They would be able to drill deeper into the account and address those, but somebody in the financial world would not necessarily have to have access to an address and date of birth or a social security number for James Cameroon. So these are just a few examples of what we call role-based access controls, and they can be customized and configured in numerous ways to create unique security profiles for each of our vendors. Next, please.
      </p>
      <p>
        And this slide here shows our platform at a high level. At the heart of the data protection platform is what we call the enterprise security administrator. And this is where we manage roles and generate analytics and it has a lot of functions, but the real mission of the enterprise security administrator is to provide the ability to integrate with a variety of different endpoints. And I'm not going to go into all of these in detail because we cover a lot of products, but it typically covers everything in big data, Hadoop, for instance, enterprise data warehouses, database protectors, and on the right here, we focus on application protectors, file protectors, and mainframe, and we'll really focus on the application protectors. That's what we co-developed with our partners at Yellowbrick, and we were able to create a solution that can now be applied to any other clients going forward. The integration of the two products is discussed in more detail in the next slide. And I'll turn that over to Mike to complete the discussion and then show a demo. 
      </p>
      <p>
        <span class="speaker">Mike: </span>Okay. Thanks, Sandeep. So real quickly as Sandeep pointed out, the central management of all your policies is the ESA, and this is installed in the demo. We'll have this in Yellowbrick, you'll see it in our network and then Yellowbrick itself. We have instances in our cloud or on premise, but this is an instance of Yellowbrick. And we'll show you that in the demo as well. Inside Yellowbrick, we have multiple nodes, manager nodes and worker nodes. No need to go into detail there, but the point is there's an application protector, or this Protegrity enforcement point server PEP in each one of these nodes. So when you create your policy over here and you deploy it, it pushes down to the nodes. And then once it's on the node, you can disconnect. There's no reason to need the ESA anymore unless you want to update the policy. So it runs all self-contained in Yellowbrick. So with that, I'm going to go ahead and end this slideshow and go over to the demo.
      </p>
      <p>
        And so what we have here is the ESA server. So it expired my login, so let me log in from scratch here. And again, this is the central server for managing policy. And you can see here it's in the yellowbrick.io network. And we're going to go to the dashboard. We're not going to create a new policy. We're going to show you a policy that's been already created ahead of time. And this is our development server in Yellowbrick, this is what we use to test out all the Protegrity API and so forth. So there's a number of instances that were used in QA for testing that are not running or have been removed. So that's what you're seeing here. There's connection errors better, or warnings are the server’s up, but policy is out of sync.
      </p>
      <p>
        So we're going to focus on there's, you know, 181, but we're going to focus on the 10 here. So we can click into the 10. And all of these hosts are in a repository or a data store. So we have one data store we're using at Yellowbrick with all these hosts and the hosts we're concerned about here, we're using for the demo, is this yb89, Yellowbrick 89 instance, that's running in Yellowbrick cloud, and we can click into that. And you can see there when we click in that connectivity status is okay and we're deployed. So we have an in-sync deployment of our policy, and this policy is policy1. So we can click into this and the nice part about this interface, you can get to other elements or other data objects throughout. There's not just one way to get there.
      </p>
      <p>
        So here you can see default protection, our permission set up for the data elements from roles the data elements and the roles of the two things we're going to focus on data elements are like data types with methods of, of say, encryption, tokenization, masking, and so forth on those, those data types. And then those data types map down to data types on the target system. So in the demo, we have both a tokenization data element and an encryption data element. So let's just look at the encryption and we'll look at the data element we're using. So this is the data element we're using. Let's click into that, and you'll notice this naming convention. The first three letters are the person who the user who logged in and created the element. And that is this, a colleague of mine. The node, the method, in this case, ENC stands for encryption, which is the AES-256 encryption against this encryption key.
      </p>
      <p>
        One node is the key manager is running in ESA, not in Yellowbrick. So it's external to Yellowbrick, and here's the datatype, varchar. And that maps down to a varchar on a column in Yellowbrick. And we can go back and then we can look at the, we've pulled in users from a flat-file called SAMPLE_ADMIN. We could have pulled these in from an LDAP. But this is how we did it for Yellowbrick. In a group called member1, inside member1, these users, the user we're going to focus on is mmohler. So in mmohler is in this policy and has permissions to be able to run the AES encryption, that 256 encryption method on that varchar datatype. And then when that data element, and also an encryption method, I mean, a tokenization method on the data type that’s an eight as well.
      </p>
      <p>
        So that's what this member function is. And we're going to focus on this user. So let's go over to Yellowbrick and go to the dashboard. So this is the UI I talked about. It’s simple and easy to use. It's pretty much anything you want to do in Yellowbrick, from creating and deleting databases to monitoring everything on the system from active queries to backups and restores and uploads. Managing, configuring anything on the system that you want. And in this dashboard, you can see this is utilization across all the nodes. This is an eight-node system, so it's not a big system in Yellowbrick terms. It's about a half a petabyte of storage compressed where 131 petabytes are terabytes. It's about half a petabyte, 131 terabytes of compressed storage.
      </p>
      <p>
        You put thousands of databases and Yellowbrick but what we're going to look at is two in particular for this demo, TPCDS is a standard benchmarking standard at tpc.org. And we're going to focus on this table and in the benchmark, it gives you a DVL and how to fabricate data. We fabricated data in our tables here to 6.2 terabytes. And in this table, we've got 233 gigs and close to 3 billion rows. And we're also gonna look at this customer table here, 65 million rows as well. And we're going to do some encryption on the fly in these, and we're going to put the results in Protegrity, in this database. So let me go over to our command-line editor here, YBSQL, and you can use any tool that talks to PostgreSQL, any development tool, any command-line tool.
      </p>
      <p>
        This is one, it's part of YB tools that ship with Yellowbrick. So what I did here is executed a command to look for all UDF functions that have in-store procedures that are installed on Yellowbrick. And I did it for a wildcard here, wildcard search PTY. So here you can see the Protegrity functions. These are all data type functions. So you have for encryption, you have this specific big decrypter one for varchars, dates and floats and so forth. So it is datatype specific. So it maintains those data types. And then what I've done to I've pre-tokenized, a column here in this 3 billion row table. And you can see here, the data types are in eights, and they're maintained. This is the clear, and then this is the tokenized, and I just wanted to do a select count so you can actually see the council knows.
      </p>
      <p>
        So what I want to do is create a table from the TPCDS customer that talked about that with 65 million rows, and let's remove any null email addresses so we have clean data, and we're going to call the tokenizer and the encrypter on these two Yellowbrick data types. And let's run that. And we don't have a note. We don't have a connection, so we should be okay. And there we go. There's the table that was created in the database. So now let's take a look at the count on that, and you can see we filtered out some null emails. Now let's take a look. If you've got permission to select, if you have been granted permission to select based on this customer encrypt table, what you get back and what you'd want to do obviously is not have the clear text in here.
      </p>
      <p>
        What they would get back is they'd see the tokenized and the encrypted. So the only way you're going to see the clear text is you have to run the Protegrity and functions to detokenize and decrypt. So if I run that, boom, you can see that it ran across the 63 million rows, it was pretty quick. And it decrypted in basically detokenized. So you can see the same, same. So now let's check the Protegrity enforcement of the policy. So remember I said, mmohler was in that policy, in that group with the right role. And so we're going to use this connection that has mmohler1 and connect to the database as that user, and we're going to run that same select statement. And then what happens is you get a policy error and basically the function you're trying to call there to decrypt when that detokenize fails.
      </p>
      <p>
        So now let's switch back over. And I pointed out there’s that close to a 2 billion row table. It's in the database, or 3 billion row table. And I just have a simple query here where on the select, I'm looking for tokens that match this ID, but what I'm going to show you is it's going to decrypt on the fly. Basically, I have to go through a 3 billion row table and then return the result back. And I'm also going to decrypt on the select side of it right here. So you can actually see the tokenized and the untokenized and so forth. So you'll get back the results and you see how fast that runs. It ran in 434 milliseconds. So, it went through and detokenized and checked to get a match on this ID. So you can see how fast it is.
      </p>
      <p>
        Now, let's just show you, with a full load on the system, Yellowbrick manages load. I'm going to really crank this thing up, but I've got various queries here and these queries are, I'm slamming the system, or I will be slamming the system shortly with these JDBC requests, to do that same thing on the smaller, this is on the customer table. I'm doing some decryption here doing a wild card search on the customer table for name's Hannah. This one was John. And here, I'm going to do that same query when that 3 billion row table and a lot of other queries here too. This is a significant aggregation query and that's part of the TPC benchmark. Where's 15. So let me go back to this screen here and show you. And I talked about our workload manager. This is just the visibility part of that.
      </p>
      <p>
        This is just showing you all the workloads and these are resource lanes that are in the system. So nothing's happening on this server, completely empty, so I can crank this up. And what you're going to see over here are these queries coming into the system. And, you know, in piles coming in a threaded submit. You see these come in, just to get an idea of some of the performance on this thing, these are active queries on the system, and you can see these queries coming in and being injected into the system and they're clearing out pretty quickly. So and then you can go back and look at historical performance of queries that had executed in the past. And you can see here, there's, there's a ramp up and ramp down from a run earlier today.
      </p>
      <p>
        But let's go back and go to the execution timeline, just to show you that things are still ranking into the system. Now, let me go back and just run that query again, and it will take a hit. We loaded, not a fully loaded, but a pretty loaded system. And I can run that again, and you can see it ran pretty quickly in about a second across that. I can run it again and we don't cache. So it's, it's pretty much it's running as fast as it can. This time is a little slower because maybe there's a load, but it's still, you know, that one's 1.9 seconds. So now you're still looking at the load on the system. You can, these active queries coming in and so forth. So that pretty much is it so you can see how we interface with the Protegrity functions, worked on a larger set of data and how these tools integrate together. It's pretty seamless and we'll conclude the demo. Thanks for joining us today.
      </p>
    </div>
  </section>

	</Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Real-Time Analytics for Reinsurance',
    meta: [
      {
				key: 'description',
				name: 'description',
				content: 'Learn how Yellowbrick Data Warehouse breaks through analytics limitations.' }
    ]
  }
}
</script>



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
			<h1>Data replication across data centers and clouds with Yellowbrick</h1>
		</div>
	</section>

	<section class="bg-white py-12 md:py-20 z-10">
		<div class="w-full max-w-800 mx-auto">
			<BaseWistia id="0l628anw2f" />
		</div>
	</section>

	<section class="bg-white py-12 md:pt-0 md:pb-20 z-10 ">
    <div class="w-full max-w-1200 mx-auto px-8">
      <h3 class="accent-heading">Transcript</h3>
      <p>
        <span class="speaker">Bhuvana Ramakrishnan: </span>Hello everyone. Thank you for joining us for today's webinar. I’m your host, Bhuvana Ramakrishan, head of events at Yellowbrick. Our topic today is data replication across data synthesis and cloud with Yellowbrick, and you will learn the benefits of hybrid architecture analytics. So I'm going to take a quick minute to introduce our presenter today, Mike McWhorter. Mike has over 20 years of experience and data technology, and he specializes in performance tuning and application exploration for hyperscale customers. At Yellowbrick, Mike is a systems engineer for the federal sales team, responsible for designing and implementing petabytes scale analytics solutions for the federal government. So before I pass it over to Mike, just a little housekeeping, I've carved out some time for Q&A towards the end of the presentation. So type your questions into the Q&A box of your control panel, and we will get to it right after the presentation. So without further delay over to you, Mike.
      </p>
      <p>
        <span class="speaker">Mike McWhorter: </span>All right. Thanks, Bhuvana. Hi everyone. Thank you for joining us. We've got a really cool demo for you today. I'm going to show you how the Yellowbrick data warehouse works in a hybrid cloud environment. This touches on an issue that comes up a lot when we talk to our customers. Everyone's always looking for a better way to host their analytics platform. And every time I talk to a customer, it seems like they're in the middle of some kind of migration. They'll say, well, my data's on this old legacy system and we'd like to modernize it, but we're not sure if we want to move it to the cloud or if we do or not sure which cloud we want to use. And it's a difficult decision to make because there are a lot of unknowns. And once you've chosen a hosting solution, it's difficult to change your mind.
      </p>
      <p>
        One of the first questions people ask is where should we host it? Should it be on premises or in the cloud? For certain workloads, it makes more sense to run them on premises. If you're a hyperscale customer with a multi-petabyte dataset, it's probably cheaper just to host it yourself. There are also situations where it's better to put it in the cloud, but which cloud do you choose? They all have different strengths, different tools and APIs and pricing models. So it's hard to decide. And once you've chosen a hosting provider, are you sure it can meet all of your requirements? Does it support all of your analytic tools? Does it have all the features you need? And is it fast enough? And lastly, what's the cost? That's hard to predict because it depends on your resource utilization and that can vary quite a bit from day to day.
      </p>
      <p>
        And some of these data warehouses get really expensive when you try to deploy them at scale, they're great for small datasets, but when you're dealing with big data and petabytes of storage and large complex analytic queries, the hosting fees can be astronomical. And after you've answered all these questions, it's still not a clear choice because you also have to factor in your future requirements. And nobody knows what their future requirements are going to look like. The tools keep evolving. Our data sets are growing exponentially. And what works for you today may not be good enough a year from now. That's why cloud deployments tend to be so fluid. You might have workloads running on premises right now that you'd like to move into the cloud sometime in the future, or maybe you're already in the cloud and you need to move those workloads to a different cloud.
      </p>
      <p>
        Depending on which data warehouse you're using, this might be a problem because if you're running Amazon Redshift and you want to migrate your data warehouse into Azure, that's going to be tough because Azure doesn't support Redshift. So if you want to move it out of AWS, the first thing you have to do is rebuild your entire analytics environment from the ground up. And that's no fun. So when you're choosing a data warehouse, you need to be very careful which one you pick. It's the most critical part of the infrastructure. The data warehouse provides the foundation for storing and retrieving all of your data. It powers all of your dashboards and reporting tools. So the cost, the performance, and the flexibility of your entire analytics environment hinges on this one central component. We need a data warehouse that can be deployed anywhere on premises or in the cloud. And it needs to work with every cloud. And if we decide that we want to move that data to a different cloud, we need to be able to do it quickly and seamlessly without making any changes to our production software stack.
      </p>
      <p>
        You also want it to be fast. Yellowbrick has the best cost performance ratio of any data warehouse on the market. We have a very unique system architecture that allows you to plow through billions of records in milliseconds and scale to multiple petabytes. We've run competitive tests against every other data warehouse there is. And for the price, none of them can even come close to matching our performance. If you're familiar with Yellowbrick, you already know how fast we are. What you may not be aware of are all the different deployment options you have. You can run Yellowbrick anywhere you want. If you want to install it in your own private data center, you can totally do that. If you want to run it as a service in the cloud with a SAS model, you can do that too. It works with AWS, Azure and GCP, or if you want, you can do both at the same time.
      </p>
      <p>
        You can have one instance running in the data center and another instance running in the cloud. We call this our unified hybrid architecture. It gives you the freedom to host your data warehouse wherever it makes the most sense. Some workloads need to stay on premises. Others belong in the cloud, but you don't have to restrict yourself to one or the other. You can do both at the same time and you can move your workloads from one location to another quickly and seamlessly without any big convoluted ETL processes. So to demonstrate this capability, we've put together a hybrid cloud system. I have two Yellowbrick instances here. One of them is running as a service in the cloud. We're using AWS. And the other instance is running in a physical data center in Salt Lake City on the network edge. In an edge configuration, you do part of your processing on premises and part of it in the cloud.
      </p>
      <p>
        So for our demonstration, I've collected some data on my edge system. I have a table sitting in Salt Lake City with about 140 million records in it, but my analytics environment is running in AWS. So before I can analyze that data, I need to move it from the network edge into the cloud. This is the part where every other data warehouse will fall flat on its face, because in order for this transition to happen smoothly, you need a data warehouse that can live natively in both worlds, both on premises and in the cloud. And right now Yellowbrick is the only data warehouse that can do that. So here's what it looks like.
      </p>
      <p>
        Let's start with our edge system. So this is a windows VM that is running on premises in Salt Lake City. I've set the desktop background to a picture of Salt Lake City so I don't forget what system I'm on and let's open the management console. So this is the system management console for the Yellowbrick data warehouse. This instance is running on premises in our Salt Lake City data center. And this is where our data set is currently stored. The name of the database is Edge. So if I take a look at our database, you can see it contains about 3.2 billion records. Now let's take a look at our cloud instance.
      </p>
      <p>
        This is an EC2 instance that's running in AWS. I've set the desktop background to the AWS logo again. So I don't forget which system I'm on. So let's take a look at our cloud data warehouse, this is the management console for the cloud instance of the Yellowbrick data warehouse. You'll notice that the user interface looks exactly the same as the version that's running on premises. This is our unified hybrid architecture. You get the same look and feel no matter where the system is physically running. The cloud instance works exactly the same as the on-premises instance. And you get the same performance. Now I'd like to analyze my data in the cloud. So I created a dashboard and Amazon QuickSight, just reloaded here. Now, if you're not familiar with QuickSight, this is Amazon's new BI tool. They try to package this with Redshift, but it works with any data warehouse. You can use QuickSight to connect to your data warehouse, to run queries, create visualizations and build dashboards just like you could with Tableau or Power BI. Now notice the warning message here. It's telling me that it can't find the specified table because it doesn't exist yet. The data is still on premises, so I need to move it into the cloud so I can analyze it. So let's go ahead and do that.
      </p>
      <p>
        All right. Well, what's the best way to move data? Now, I suppose I could create a backup file and then back up the database and then upload the backup file to the cloud and try to import it into the cloud instance. But that seems like some kind of a pain. So instead, I'm just going to turn on replication. Yellowbrick offers to-site replication as a standard feature. And normally we think of replication as a tool for high availability and disaster recovery, but it turns out that replication is also a really handy feature for edge computing. If you need to move your data from one location to another, all you have to do is turn on replication and Yellowbrick will do the migration for you. So here's what you do.
      </p>
      <p>
        I'm going to open up my SQL client to set up replication and it's really easy. It's just three DCL commands. So the first thing I'm going to do is create a remote server. I'm going to call it this and give it this host name. This is the host name of my cloud instance of the Yellowbrick data warehouse. And I'm going to alter my edge database to add a replica. We're going to call the replica this. We're going to replicate to this server. We're going to give it this name. So when I replicate the database into the cloud, the new database is going to be named this. And we're going to set the frequency to 20. That means it resyncs the replica, or I'm sorry, 30. So it resyncs the replica every 30 seconds. So let me do that.
      </p>
      <p>
        All right. And it's setting up the replica right now. If I go to the execution timeline, I can see the replica running. So this screen is called the execution timeline. It shows us all the activity that is currently happening on our database instance. Now you can see the replication task in orange here. It's this little orange line. It's sending the data from our on-premise system in Salt Lake City to our cloud instance. That's in the US East-1 region of AWS, and it's moving the data over a TSL-encrypted connection using AWS private link. And you'll notice that it happens very quickly. It should be about done. It moves over a hundred million records in just a few seconds here. So if I go back into my AWS system and it looks like, yeah, looks like it just completed. If I go back over to my AWS system and then search for the database, you can see this new database called, “edge_from_slc”.
      </p>
      <p>
        This is a new database I created. You can see it's got 142 million rows in it. And if I go back to Amazon QuickSight now my database is in the cloud. It's in AWS. So if I go back to Amazon QuickSight and reload this page, okay, so now you can see the dashboard is populated and you can see all the data. Now notice how quickly we were able to do that. We migrated our edge database with 142 million records into the cloud in just a few seconds with three commands. And instantly we're analyzing our data set in AWS with cloud native tools. And we can do this in any cloud or any physical data center. So now you can run your data warehouse anywhere you want, and you can move it very quickly from one location to another, or from one cloud to another, without making any changes to your production software stack. This will save you a ton of time, a ton of work and a ton of money. So this concludes our demonstration. If you'd like to try out one of these systems for yourself to see if it does all the things I said it could do, just go to our website and look for the free test drive. We'll set you up with a cloud instance. It's free for seven days. We can set you up on whichever cloud you want. So just tell us which cloud you're using. We'll set up your instance and we'll provide engineering support to help you get started. And that concludes the demonstration.
      </p>
    </div>
  </section>

	</Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Data replication across data centers and clouds with Yellowbrick',
    meta: [
      {
				key: 'description',
				name: 'description',
				content: 'Data replication across data centers and clouds with Yellowbrick' }
    ]
  }
}
</script>



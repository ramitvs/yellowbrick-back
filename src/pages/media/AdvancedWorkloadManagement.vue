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
			<h1>Reach next-level performance with advanced workload management</h1>
		</div>
	</section>

	<section class="bg-white py-12 md:py-20 z-10">
		<div class="w-full max-w-800 mx-auto">
			<BaseWistia id="042nd2t4w7" />
		</div>
	</section>

	<section class="bg-white py-12 md:pt-0 md:pb-20 z-10 ">
    <div class="w-full max-w-1200 mx-auto px-8">
      <h3 class="accent-heading">Transcript</h3>
      <p>
        <span class="speaker">Host: </span>First, we're going to give you a little bit of background on Yellowbrick. Then we're going to go through a few sample scenarios that highlight how performance can be compromised in your data warehouse. And you may even relate to some of these scenarios. Then we're going to discuss why workload management is really key to reaching that next level and performance. And then we'll show you how Yellowbrick delivers on this with an exciting deep dive demo. And then at the end, we're going to have time for Q&A. All right. So a little bit on Yellowbrick, Yellowbrick is the world's only modern data warehouse for hybrid and multi-cloud environments.
      </p>
      <p>
        Three key benefits with Yellowbrick: the first one is industry-leading price performance. This applies both to real-time data and data at rest. The second key benefit is that with Yellowbrick, our customers really get full flexibility on where to deploy their applications. It could be on premises, or it could be in the cloud with AWS, Google, or Microsoft, or it could be both, on premises and in the cloud. So truly a hybrid approach. And then the third key benefit is that we offer the simple, fixed-cost subscription model. With other solutions like those that are cloud-only, you may get these surprise bills based on resource consumption or number of users. With the Yellowbrick, you can say goodbye to those surprise bills, because it's always going to be predictable. It's always going to be a fixed cost.
      </p>
      <p>
        Breakthrough price/performance is the number one reason why customers have selected us and our customers can see a hundred X performance increase. This applies to environments running thousands of users, and being able to scale from terabytes to petabytes of data and all of this at a fraction of the cost. There might be vendors that can deliver on one of these benefits, but Yellowbrick brings all of these together. And it's really our unique approach that allows us to break these limits of performance. We've completely rethought what an MPP analytics database should look like built from the ground up using best of breed, software and hardware. And when you think about other innovations in technology, for instance, self-driving cars or mobile phones, the best experiences come when software and hardware are built together, integrated and optimized. And we believe in that approach, we believe that you can only deliver the best data warehouse and the best experience if you innovate in software and hardware.
      </p>
      <p>
        And that's what we've done. Second key element of our approach is that we are a hybrid role in column score. And what this does is that it eliminates those limits that existed with legacy architectures. And this leads to some amazingly fast results. For instance, our scan rates are in the order of terabytes per second, but our interest rates are also really, really fast. They are essentially real-time. We can ingest millions of rows per second. And then the third key of our approach, which is the essence of this webinar, is that we give customers granular control with our workload management capabilities. Our customers get full visibility of their system resources, how those system resources can be allocated across jobs and users. And that gives our customers really the ability to align with those business priorities and optimize performance as needed.
      </p>
      <p>
        So, that's a little bit about Yellowbrick. Now, what we're going to do is we're going to walk through sample scenarios that highlight how performance can be compromised. So for this first scenario, we're going to assume that we have a few hundred concurrent users and these could be data scientists or individuals from a line of business and they're running quarries, or it could be reports, and we also have some jobs in the background. And the current state of performance is that it's still pretty healthy. And then we have some jobs that kick in and these jobs are completely unconstrained. They will go ahead and eat up the system resources. And as these jobs are running, we have a key user who has to run a report. And that key user is the CEO. So the CEO will attempt to run a report and given the performance conditions, given the performance degradation, we have a problem. This scenario highlights why we really need a mechanism that's going to enable us to define how jobs consume resources, whether these are new jobs or scheduled jobs. And we also want to protect our key users. The CEO should always be able to come in, run a report without any performance issues.
      </p>
      <p>
        All right. So we're going to move on to the second scenario. The second scenario has a very similar starting baseline. We have a few hundred concurrent users and these are data scientists or individuals from a line of business. They're running queries or reports. We have some jobs and so the performance is still healthy. And then we have a new user and it's an intern and the intern really wants to learn about the business. So the intern is going to run a query that looks like this select star from store_sales. And at that point, we can foresee some potential problems because store_sales is huge. It has billions of rows. So the intern will go ahead and fire that query. So that query will consume system resources and that query will run and it can run for a while. And as that query is running, it's time for mission-critical jobs to execute.
      </p>
      <p>
        So these jobs will kick in and they'll essentially have to compete for the available system resources. So once again, we're experiencing performance degradation. And in this scenario, the higher priority items are not using the resources. It's the lower priority item, the query from the intern. So we really want a mechanism that's going to allow us to protect mission-critical jobs. And we also want to protect from those bad actors or bad queries. It would have been ideal to have a way to enforce our rule that says something like you can't run a query unless you have a workload or you can't run a query unless you limit the number of rows. And that is really why workload management is key to reaching that next level and performance and workload management lets you allocate system resources effectively. So you can protect those mission-critical jobs and ensure that they complete within their given SLA.
      </p>
      <p>
        And as an admin, you get better visibility on the things that matter to your business. What are those key jobs and key users? So you can align with those business priorities and as your business gets those insights that matter but faster, that's going to lead to a higher ROI. And all of these capabilities are included as part of the Yellowbrick subscription. Some vendors won't even offer workload management. So now what we're going to do is we're going to show you how Yellowbrick delivers on these advanced workload management capabilities. And for that, I'm going to transition it over to Joey.
      </p>
      <p>
        <span class="speaker">Joey Foley: </span>Hi there. This is Joey Foley, senior sales engineer with Yellowbrick data. And today I want to cover some of the advanced workload management features that we have in the new release. So this is a standard TPCDS dataset that we're going to be using for the simulation that we're going to do. And you can see there's some rather large tables here, right? Like store_sales here has 28.8 billion records. We have a couple of different copies of it in this environment, but you know, large data sets like this, if you don't have good workload management and control over your resources, your database can get clogged up and just not good response times for your end-users. So let's do a couple of things here. I've already built some profiles that I'm going to show you here. So the execution timeline screen and what we're showing here is a couple of lanes of activities.
      </p>
      <p>
        And we're not going to have any rules on the environment to control what happens. Now, I built a script here. That's going to simulate some loads running on the box. It's going to simulate about 600 or so users doing different queries. And each one of these little lines or dots represents queries that are being fired against the cluster right now. As you can see things are running for a long time. Some things are running for a short time, that little red box, that’s things that are queuing in the environment already, right? So now I'm going to simulate a CEO user that is coming in and he wants to run a query here against the cluster. This is a dashboard query. It should run maybe 10 to 20 seconds. Once it starts to run longer than that, that's when the user really starts to feel like they're not getting good service and response times from the cluster.
      </p>
      <p>
        And as you can here, we've got quite a bit of things that are queued up in the environment and that query is still waiting. So he's been waiting 25 seconds now for this query day to finish running. And you know, there's a lot of queries that are being run in the environment, but we should have better control over what's happening in the environment when we see this query run. So it ran to completion, it took about 36 seconds, which is longer than what we would expect, right? So let's fix this, right. What I'm going to do is back out of this script and we're going to switch to a profile that's going to showcase some of our workload management features, right? So the active configuration that we see here is this one with no workload management. Let's switch the profiles here to one that actually does have workload management. Now, workload management, when we activate that configuration and we'll see it switch here in a second.
      </p>
      <p>
        So now I've got a couple of different dedicated lanes of activities. There are dedicated lanes for CEOs, for small queries, for my loaders, and for large queries to run. Now, the way I get queries to move between the lanes is I use rules to apply activities and put queries in specific lanes. So these are some rules that have already been configured for this. So there's a rule that says, if you see the load application running, put that in the load lane. And if you see the CEO query running, put that in the CEO lanes. Now we're going to build a rule here. I'm going to call this the “Norestrictonselect”. Yeah. And what we want to do with this is we want to stop queries on big tables from running. Now the rule type here is when I want the rule to be applied.
      </p>
      <p>
        So is that a completion or during runtime, at the compile time or when it's submitted? And for this one, I want to do it when it's submitted. I don't want it to garner resources and clog those things up. And I want this rule to apply pretty quickly. So I'm going to leave it as rule order one. Now we want to choose the conditions for which we're going to use to stop this query. Now I could have done it by application or like an IP address to say, Hey, this query can't run from this specific place, but what I'm going to do with this one is look through the SQL and say, if it contains a stream, select star. And what I want to do is look for that string not containing a limit and SQL does not contain the where clause. And now I want to apply an action. And what's nice here is I'm going to abort this query, right? But I can also give a reason, like instead of just an error code, they can know what's going on. And so query abort, select star without restriction. Here we go.
      </p>
      <p>
        Add where or limit. Okay. So this is a message that they'll get when that query stops from running. So they'll know how to go in and fix that. So let's finish that. And then we're going to do is because this will cause us to need to activate that new change. We're going to activate that new change in the environment. So that's been activated now. All right. So now, let's go look at that new profile that we've got. Here's the execution timeline, and you can see lanes for CEOs, the loaders, large queries, and small queries. So let's actually test these things out. So I'm going to run a load and we're going to run the same CEO query again too. And we're going to take a look at what's going on in the environment. So the loads running here, we can see the loads in the load lane and the CEO query is in the CEO lane.
      </p>
      <p>
        And look, it's already finished running. So that’s great. That the query now ran in six seconds. That's wonderful. Now what happens though? If that CEO says, Hey, I want to look at more data, right? It's going to be a longer running query. We're not going to restrict the year. So we're going to look at all the data in the database that's associated with this specific query. Well, I built a rule to say, Hey, this is a runtime role. If something runs in the CEO lane for more than about a second and a half, then I want you to move it, do something right. That doesn't stop it from running. Just move it to a new lane that has more resources and where we expected longer running queries to be. And so you'll see the query never stops running. It still runs to completion, right? That row is done running there. It's 21 seconds.
      </p>
      <p>
        So it still gets to run, right? But we don't clog up that CEO lane, right? Still gets to run. Now let's put all this stuff together. I've simulated another demo script here. Now this is going to do simultaneous loads running and simulate about 1200 users running queries with different think time. So we'll see all this stuff start to ramp up and there you see, small queries are coming in to run. There's some CEO queries coming in. We're going to see some load starting up here just any second now. So lots of activities are running. We’ve already run about a thousand queries since that script started running, right? So lots of users, lots of activities. Now let's go back and run that CEO query again, again with a lot of activity running on the box. And so here we can see activities running, lots of queries, dedicated lanes for different activities. And let's see here, that query is still running. It's been about 10 seconds, 12 seconds here. Hopefully, it's not 36 seconds. Like it was last time, right? Right. Queries running about 22, 23 seconds.
      </p>
      <p>
        Dedicated loads there. That's great. This is great activity. Is that query finished? About 26 seconds for it to run. That's great dedicated resources and a lot more activity running on the box. Now, remember that query that we set up and we said, Hey, I don't want anyone running a select star on that store sales table. Right. It's just too much data. 28.8 billion rows. Well, we run that query and look, you get a message now. And that query message says select star without restrict, add a where and limit clause. Okay. So the user now knows I can add a limit to that query and I can fix it without having to call IT or the DBAs and ask them out to fix my problem. So we ran that query and there you go. So as you can see with advanced workload management features in Yellowbrick data, we can actually do lots of things to control the resources and get a lot more activity running on the box. And that's what workload management can do for you. Thank you for your time today.
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



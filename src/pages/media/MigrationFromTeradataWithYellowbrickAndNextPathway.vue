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
			<h1>Real Time Migration from Teradata with Yellowbrick and Next Pathway</h1>
		</div>
	</section>

	<section class="bg-white py-12 md:py-20 z-10">
		<div class="w-full max-w-800 mx-auto">
			<BaseWistia id="a6fhazwfwo" />
 
		</div>
	</section>

	<section class="bg-white py-12 md:pt-0 md:pb-20 z-10 ">
    <div class="w-full max-w-1200 mx-auto px-8">
      <h3 class="accent-heading">Transcript</h3>
      <p>
        <span class="speaker">Hema Ganapathy: </span>Hello, everyone. Thank you for joining us for today's webcast. One of many web series that we've been doing, and our topic for today's webcast is real-time migration from Teradata: learn how to convert millions of lines of Teradata to Yellowbrick in just minutes. I'm very excited to be welcoming Next Pathway, a partner of ours, to talk about the migration from Teradata to Yellowbrick. But before we begin, I'd like to do some introductions. I’m Hema Ganapathy, I'm a senior director of product marketing at Yellowbrick, and I'm going to be your host, moderator, and co-presenter today, but I'm excited to welcome our main presenter Vinay Mathur from Next Pathway. And as Next Pathway’s chief strategy officer, Vinay oversees marketing communications and go-to-market strategy for the firm. In his role, he works closely with sales and product teams, along with the partner community to craft the firm's messaging and business development strategy.
      </p>
      <p>
      	Prior to joining Next Pathway, Vinay has held senior roles in marketing sales strategy and account management across many large corporations, including KPMG, Canada. So just a little housekeeping though, before we get started, we have set aside some time at the end of the presentation for Q&A. So please type your questions into the chat window and we will get to them right after the presentation. And we're also doing a live tweet during the webinar. So please use the hashtag #YBLive to participate and retweet. And that way we can get a lot of engagement. We can follow Yellowbrick @yellowbrickdata or Next Pathway @nextpathway, as the handles are shown on the screen. So we're going to begin with an introduction to Yellowbrick, a little bit about Yellowbrick, and why we're talking about Teradata migration. Next slide.
      </p>
      <p>
      	So Yellowbrick is the only modern data warehouse for hybrid cloud. And we have several offerings. One is an on-premises offering, which is a subscription model-based offering. We have a hardware instance that has innovations in compute, storage, networking, and software, and all of these innovations have led to extremely high performance in a very small footprint. We also have a cloud service that is also subscription model-based, and the clouds for was leveraging the same hardware innovations that we have, but in the cloud offering and in our cloud offering, we actually support all major public cloud vendors, including AWS, Azure, and GPC, so that you can move your data anywhere you need to within any of those clouds, be able to access your data easily and quickly. And we also have cloud-based disaster recovery that supports replication-based failover and failback, and there's other aspects to the Yellowbrick solution, including we have an integrated system management console and incremental replication as well as backup and restore. Next slide.
      </p>
      <p>
      	So when you're thinking about migrating away from Teradata, there's some things you need to consider around the Yellowbrick data warehouse. And one of them is that we have the best price-performance. So remember I talked about some of the innovations, all of that innovation has been purpose-built to deliver a very high performance so that you can scale for very large datasets. And in our testing, we found that we're 10 times faster than legacy data warehouses, 10 times faster than Teradata. They also have innovative simplicity baked right into the product, which means that we're hardware ready and there's no tuning that's required to be integrated. And we also have integrated sophisticated UI tools. And what that means for Teradata migration is that one of the things that support PostgreSQL actually significantly reduces migration times and being able to talk a little bit more about that.
      </p>
      <p>
      	And we also offer flexible deployment so we can be deployed on-premises and the public cloud and in the hybrid cloud. And what that means for you as you're doing your chart, data migration is there's no vendor lock-in and we offer a reduced footprint. We're able to reduce 20 racks of Teradata to just 6u of Yellowbrick. So that gives you some things to think about a brief introduction to Yellowbrick. I'm going to hand it over to Vinay at this point, so that he can talk about the Next Pathway and our partnership together to help facilitate your migration away from Teradata. Over to you, Vinay.
      </p>
      <p>
      	<span class="speaker">Vinay Mathur: </span>Hema, thank you so much. And thank you to everyone for having me on the webinar and looking forward to talking more about how we can accelerate your Teradata migrations to Yellowbrick. So just to start off talking about current state migration challenges from Teradata, you know, effectively companies that are on Teradata that are looking to get off or essentially blocked, and they're blocked for a number of reasons, but span costs time risk and people, challenges. Cost is associated with the manual migration efforts that persists today. And that really involves the large development teams, typically offshore as well as onshore, that are required to refactor and rewrite different parts of that application and that time to actually, or the cost associated with fielding those large teams. It almost breaks the business case for migrating off in the first place.
      </p>
      <p>
      	Time goes with costs when you're using a manual migration approach, 12 to 18 month timeframes are typical with manual efforts. And again, that usually bottlenecks and becomes a non-starter for that migration Teradata altogether risk is also associated with a manual effort. And so the potential impact to mission-critical applications like data warehouses and different analytical stores are furthered by the risk of human error. When you're manually going into the application and manually having a number of people rewrite code. And lastly, is people, you know, when you're executing a large Teradata at the Yellowbrick migration, you need scores of people that have knowledge, detailed knowledge of the intricacies of Teradata, but also Yellowbrick as well. And again, understanding the nuances and the scripting frameworks and the SQL dialects are important to highlight, but again, that's a huge people challenge and executing or migration. So those are just four broad categories that we've experienced with typical manual migration efforts.
      </p>
      <p>
      	When you're considering your migration from Teradata to Yellowbrick, we wanted to call attention to three top considerations, which we're going to emphasize throughout the presentation. So first is planning effectively determining what the right migration strategy is right out the gate is extremely important and the Next Pathway and Yellowbrick approach this problem is taking a data-driven approach to planning. This was going to give you insight faster to determine which migration approach I should take? Am I going to take a lift and shift for my Teradata? Or am I just going to focus on certain workloads or am I going to actually optimize different aspects of the Teradata environment and then execute your migration? So again, to inform that decision-making, you need a lot of data to do that. And we're going to talk about how you can garner and obtain that data very quickly.
      </p>
      <p>
      	The other aspect of planning is determining how to treat ETL and your downstream consuming applications. Time and time again we've seen customers overlook these aspects not only during planning, but actually, you know, during the actual migration execution as well, knowing how data is flowing into the Teradata and then flowing out to your consuming applications like your BI and analytics tools is extremely important to take stock of right upfront. The second consideration is automating your code conversion. And so we talked about the manual issues with that. You know, whether it's time, risk or people's concerns, but the uniqueness of the SQL dialects needs to be highlighted here. How am I gonna handle stored procedures? How am I going to handle Teradata utilities like BTK? These are key considerations. You need to get them sort of right up front. And lastly is prioritizing validation and testing. And I'm going to emphasize throughout the presentation that we should spend more time and allocate more time to testing. You can never have enough testing time. Again, we're going to try to streamline and automate key portions of that, but making sure you have a fit sufficient time for testing and optimization is going to give you and your business partners more confidence to cut the cord and complete your cut-over strategy. Okay.
      </p>
      <p>
      	At Next Pathway, we look at it from end to end, and we really boil down to three core steps, which go hand in hand with the considerations we just mentioned. And the way Next Pathway looks at migrations from Teradata is planning, translation and cut-over. And thankfully, the way that we've approached the problem is by automating key portions of each of those phases through the use of our utilities called the SHIFT Migration Suite, which we're gonna do talk about. The SHIFT Migration Suite is an end-to-end suite of technology developed by Next Pathway that helps automate different parts of that migration from end to end, the crawler application, which we'll talk about in more detail stands and catalogs are data sources, including ETL pipelines, downstream consuming applications, but also the data warehouse itself with Teradata data, to understand how data's flowing throughout the application and the environment, what workload candidates do I want to focus on and prioritize my efforts on and what migration strategy am I going to take or moving my downstream consumers.
      </p>
      <p>
      	So now we point to Yellowbrick, the analyzer application. Now it looks deeper into the Teradata database itself and understands what's actually under the hood. What types of code and database objects are prevalent do is my environment dependent on different Teradata utilities like DT can have load and what are those exceptions or X factors as we call them that are going to be unique cases that we need to spend a little bit more time on both with yourself, the customer, but also with Yellowbrick engineering to develop custom solutions to address. Both crawler and analyzer are key inputs when you want to plan an effective migration strategy and get that data that you need to take that data-driven approach. The translator application is the core of the suite. It translates all of the code objects that you've just analyzed and cataloged, including the underlying SQL procedures and different scripts, as well as the ETL pipelines that need to be reappointed to Yellowbrick.
      </p>
      <p>
      	The gem interpreter is something that we developed specifically for data utilities like BT can TBT to get the rewrite of those utilities off the migration critical path. And the way that the jet interpreter works is it interprets those execution commands like the peak and executes them against the Yellowbrick engine at runtime, allowing you to get those migrations- they get those utilities off the critical path and focus conversion efforts later, once you've cut over to Yellowbrick. And lastly is our tester, which automates different parts of the testing life cycle inclusion, including data validation testing. And we're going to talk about these in more detail in the subsequent slides.
      </p>
      <p>
      	Let's dive deeper into planning effectively. The first thing we employ when developing a migration plan is our crawler technology and what the crawler does is it's your tool to define where to start your migration, but also how to end it.
      </p>
      <p>
      	And the way that crawler works is it's capable of crawling different data sources like ETL is and pipelines and BI tools and the EDW to understand different- to employ different use cases, such as defining migration, workload candidates. Where are their data dependencies? Where are the most read read-write dependencies in the application, and where do I want to prioritize my efforts on for migration? Such an incredibly useful tool to carve out a POC or a pilot use case, but also to understand what's actually happening in the Teradata environment and where could there be opportunities to consolidate or even decommission different areas depending on who is consuming from different tables? Consumption lineage is a common use case for how to treat the BI and analytics tools that are consuming data from Teradata. But now it needs to point to Yellowbrick. So understanding the downstream lineage, as we call it, is incredibly important to define right upfront during planning as is ingestion and orchestration lineage. Ingestion lineage is all about scanning the ETL pipelines, including the Informatica or DataStage or another ETL tool to understand, one, how data flows into Teradata and, two, which of those pipelines are important to repoint and which ones do I actually not want to touch because they may be impacting other systems that aren't being migrated. It’s such an incredibly useful tool to de-risk your migration, but to also execute the migration strategy. So again, Crawler is capable of obtaining that data very quickly to inform how you're going to plan and execute your migration.
      </p>
      <p>
      	The analyzer has the capability to scan the databases within Teradata and create a very detailed representation and report to understand what's actually happening inside. So it really goes down to three things that it's telling you. One is, of the code objects that were rescanned, how much of that is going to be automatically translated when we moved to that portion of the project. Two is understanding the complete inventory of all those objects and their frequency within those databases. This is incredibly important to understand how complex your environment is. Am I a prevalent user of stored procedures? Do I have tons of BT or TPT or different territory utilities present? Again, this was going to not only help size the migration effort, but also inform what size of Yellowbrick you need to know, based on the migration strategy you took. And then lastly is identifying those exceptions or X factors as they called them before that may require a custom solution when migrating to Yellowbrick, because of some unique differences on how the Teradata was set up and what Yellowbrick supports. So again, the ability to go in and create this type of analysis within minutes of scanning code is an extremely useful tool for your planning.
      </p>
      <p>
      	Let's jump into code conversion. And so the heart of the ship suite is our translator application. And what the translator does is now automatically converts all of those database objects so they are equivalent in Yellowbrick to SQL syntax. And again, this is not only talking about the more straightforward code, like your tables and DML statements, but also more code, including your views, stored procedures and those X factors as we talked about it, be it a scripting framework like K shell or your ETL pipelines that need to be reappointed like Informatica and data stage. The reason for our extremely high coverage with translators is based on the two types of translation that we're performing. We're doing syntax-based translation, which is allowing us to do the handle, the data type, and expression conversions, where that's a little bit more straightforward between the Teradata and Yellowbrick.
      </p>
      <p>
      	We're doing that extremely quickly, but what we're also performing is semantic-based translation. And this is really about decomposing all of the code where we're scanning and rebuilding it in an optimal version best suited for Yellowbrick syntax. This is what allows us to handle PLSQL stored procedures and other scripting frameworks that other tools cannot do. And just to give you a sense of speed and time for a recently completed Teradata Yellowbrick migration, we converted over 500,000 lines of Teradata SQL and stored procedures with 98% coverage in less than 45 minutes. So again, in terms of people/time, this is months and months of effort for large developer teams to go and do themselves. And we're going to talk about what's actually happening during that translation process in terms of unit testing and optimizing that code on the fly as well.
      </p>
      <p>
      	Let's jump into testing and validation. Testing validation is all about and again, as I mentioned before, we take this portion of the project incredibly seriously, and we devote as much time as possible in the migration plan to testing and optimization. And that's why we built in test automation at different portions of our end-to-end approach, including within our crawler application for test planning. So when we're scanning ETL and BT and different pipelines, we're able to understand those table and job dependencies within the pipelines and those read relationships to other systems. Why that's important to testing is it's going to inform how we orchestrate our test cycle and our test strategy based on how data is flowing within the application. Code validation is built into the translator application, such that there's in-built unit testing. So we're reforming syntax and semantic tests on that translated code, or even executing that to code in a target environment that's in our lab before we hand it back to the customer, knowing that that code compiles.
      </p>
      <p>
      	And lastly, because of that, the shift translator is based on a rules engine, if there's ever any exceptions we catch, which are those cases where we may not be able to translate out of the box. Once we identify a remediation strategy and approach for those small exception cases, we can apply those across the code base automatically upon inserting a new rule to the shift engine. That allows us to handle, you know, global defect resolution across millions and millions of lines of code without having a developer going in and manually fixing it, again, alleviating that risk factor as we talked about upfront. And lastly is the tech stack execution. So with our tests and our application, we're performing different automation tests between source and target, including comparing record counts, averages, minimums and different hash values between Teradata and Yellowbrick so you have confidence that the results are accurate once you've actually deployed your translated code.
      </p>
      <p>
      	And lastly, we're able to highlight the different variances between the source and target and integrate with different third-party tools like JIRA, to be able to integrate properly with your CIN CD processes that you're currently using today. And by employing these test automation processes and these different parts of the end-to-end work, we’re celebrating an aggregate of over 60% of this end-to-end testing timeline for our customers today.
      </p>
      <p>
      	When you look at this from an end-to-end approach, by taking this automation and employing it at each phase of that migration, we're greatly accelerating the intent timelines and an aggregate across a number of different projects that we've successfully executed from Teradata. We're accelerating that timeline by over 40%. When you look at planning and assessment, companies often don't know where to start and how to actually answer the tough questions, like how much is this migration effort going to cost me? How long is it going to take? And where do I want to begin? By taking a data-driven approach using our crawler and analyzer applications, we're able to greatly reduce the time to actually define your test, excuse me, your migration cycle, and your migration strategy. The code translation and data migration stream is usually the longest pole of attempt. We've seen companies get to this portion of the project, but then install or completely stop their migration because of the time and cost aspect of manually converting code and to dealing with the large volumes of historical data that needs to be migrated over. And again, by employing the translator application that this saves, we're getting this process done very, very quickly and having QA ready code, ready to be deployed in the Yellowbrick environment quickly.
      </p>
      <p>
      	And testing and cut over again, I'm going to emphasize this point, devote as much time as possible to this portion of the migration cycle and employ automation at this phase as well. By employing our tester for data validation testing, but also having that in-built unit testing and validation baked into the code translation piece, we're accelerating the testing and cut-over process as well. Hema, I'll pass it back to you for next steps and Q&A.
      </p>
      <p>
      	<span class="speaker">Hema: </span>Vinay. Thank you very much. So if you're interested in migrating away from Teradata on to Yellowbrick, please contact us using partner@yellowbrick.com. And when you do that, we can actually give you a complimentary Teradata code analysis. That's powered by the Next Pathway. And we can give you details on a four-week Teradata to brick migration readiness assessment. And the first 10,000 lines of Teradata code will be translated for free as part of any proof of concept. Next slide. 
      </p>
      <p>
      	So I just want to conclude by stressing again what Yellowbrick can do for your business. We scale to manage your very largest data sets with the best price-performance in the industry. We make your business more efficient with innovative simplicity, and we simplify your migration to the cloud with our flexible deployment, whether on-premises or in the cloud. So I want to encourage you now to type in your questions into the question window. We will take some time for Q&A. Let me just go to the next slide. And if you'd like to follow us, you can follow us at, @yellowbrickdata on Twitter, Facebook, and LinkedIn, and as well, I encourage you to go to yellowbrick.com to see what we can do for you and book a demo today. And as well, you can learn more about Teradata migration on yellowbrick.com/terradata. Reminder to type your questions into the question window. About one question here for you, Vinay, I think you've covered this, but does shift translator and Yellowbrick support stored procedure conversion?
      </p>
      <p>
      	<span class="speaker">Vinay: </span>Thanks for that. Absolutely. So within the shift translator, we have the ability to parse stored procedures that are running on the Teradata and translate that to the PLSQL dialect that Yellowbrick supports and because Yellowbrick at its foundation is a PostgreSQL-based system, that translation process is very simple for us and very straightforward, but the results we've seen performance wise are spectacular as well. So, absolutely.
      </p>
      <p>
      	<span class="speaker">Hema: </span>Okay, great. There's a question here that says how does the tool facilitate actual data migration?
      </p>
      <p>
      	<span class="speaker">Vinay: </span>So within the shifts- great question. So within the ship suite, we're not actually handling that data migration piece. If the Next Pathway is employed to help with the end-to-end approach, we have other utilities to help with not only the historical data migration. So the one-time load point in time data to Yellowbrick but also some tools to help with ongoing data ingestion as well in an automated fashion. So depending on the migration strategy and how much data we are looking to migrate, we have different mechanisms of how we can employ that and help with that.
      </p>
      <p>
      	<span class="speaker">Hema: </span>Thank you. Another question here, what is the licensing model for shift’s Next Pathway?
      </p>
      <p>
      	<span class="speaker">Vinay: </span>So it's a great question. We typically do not license the technology directly to customers, but we do provide a self-service utility pricing model, where if we're just employed, if Next Pathway is just tasked with translating code, it's very simple for us to set up a process for customers to drop code off to us, set an SLA on when they need that back, and for us to quickly translate and meet that SLA. We also license the technology to some of the larger system integration partners as well. So again, happy to chat offline about these specific use cases on that one, but we have different mechanisms and how we can support that.
      </p>
      <p>
      	<span class="speaker">Hema: </span>Okay. Thank you. Another question about shift. Is the shift test or capability customizable, and in what ways?
      </p>
      <p>
      	<span class="speaker">Vinay: </span>It is customizable. So depending on what we're comparing attribute-wise between source and target, we can specify which attributes we do. One that says we do follow a hash value row by row type of model. But again, I probably want to dive deeper into that question a bit, but it is absolutely customizable.
      </p>
      <p>
      	<span class="speaker">Hema: </span>Thank you. Vanessa, from the work that we've done together, what are some of the top advantages of migrating to Yellowbrick from your perspective?
      </p>
      <p>
      	<span class="speaker">Vinay: </span>So, quick question. Hema, so, you know, three things that I think that you actually mentioned in the presentation as well, about performance, you know, companies that are migrating off of on-prem systems like Teradata that were purposely built for performance in mind. There's often a lot of questions and concerns, whether the target platform, in this case, Yellowbrick, is gonna be able to match that performance, benchmarks and metrics. What Yellowbrick’s brings to the table performance-wise is fantastic. And we've seen you know, a 10 X at least improvement on running a lot of complex and detailed workloads when migrated from Teradata to Yellowbrick. The second is flexibility. So just having the best of breed of both cloud and on-prem capabilities is extremely important. And for a lot of our customers that aren't sure whether they want to migrate workloads to the cloud yet, it allows them to evolve their strategy overtime at their own speed, but also still benefit from the performance and scalability that Yellowbrick provides. And then lastly, it's simplicity. Because Yellowbrick is built on top of Postgres, it's not, customers do not need to go through extensive training to get up and running. And plus this allows us to actually execute that migration a lot more simply. I mentioned the PLSQL support, of course, and a lot of times other vendors don't have native support for star products. So that alone is a huge advantage.
      </p>
      <p>
      	<span class="speaker">Hema: </span>Yeah, thank you for that. And I want to add that a lot of our customers are doing these heavy lifts and shifts to move their data to a cloud-native data warehouse. And that really requires a rethink of their data warehouse strategy. Whereas with Yellowbrick, you can do a simple cut-over on-premises and then be able to migrate to the cloud, the Yellowbrick cloud at, at your leisure when your business needs it. So you don't, you don't feel forced to have to lift and shift all your data to the cloud, which requires a lot of work and can be very time-intensive as well as cost-intensive. So the thing with Yellowbrick is that you can cut it into a much smaller form factor and then be able to migrate to the cloud when you need it.
      </p>
      <p>
      	<span class="speaker">Vinay: </span>Exactly. Yeah. Just to tack onto that as well. I think just the ability to pick which workloads you're more comfortable with moving up to the cloud and which ones are a little bit more secure or need to be a little bit more secure and say, on-prem again, it gives you that flexibility as well. And we know we've had a number of conversations with customers about, you know, some workloads that can move up there, but some that probably need to stay on-prem. So again, you know, Yellowbrick is giving you both options.
      </p>
      <p>
      	<span class="speaker">Hema: </span>Yes, absolutely. Thank you for that Vinay. Another question here, how does shift suite support Teradata utilities? Like BTech.
      </p>
      <p>
      	<span class="speaker">Vinay: </span>Great question expecting this one, given the heavy usage of these utilities and Teradata environment. So for those unfamiliar with Teradata and utility like BT, you know, Teradata provides customers with a rich library of proprietary functions that handle different aspects of maintaining and managing a data warehouse. So whether it's data import or export or different orchestration logic your name at Teradata provides that. So we support it in two ways. So when we're looking at BT and other functions specifically one we're translating, we're able to translate the SQL within those commands to the Yellowbrick SQL syntax, but to for the actual execution of those commands in that logic, we leverage our jet interpreter to interpret and execute those commands at runtime as is to allow the migration project to continue. Typically what we've seen in manual efforts, as customers try to refactor and rewrite these commands and utilities into something else during the migration. Our belief is to not do that during the migration project. And wait until cut-over to actually start to discuss how you want to treat those utilities over time. With the jet interpreter, you can have that up and running very, very quickly with performance and scale considered and then allow you to focus the efforts on after. So we've seen tremendous performance benchmarks running on Yellowbrick, and again, this strategy allows you to complete the migration most efficiently.
      </p>
      <p>
      	<span class="speaker">Hema: </span>Thank you. Another question here, what's the relationship between Postgres and Yellowbrick? Is that under the hood? Yellowbrick supports natively PostgreSQL out of the box. So there's nothing that's under the hood and you can integrate all of your BI applications via that interface. And we also support a number of other file formats. Is there anything else you wanted to add to that, Vinay?
      </p>
      <p>
      	<span class="speaker">Vinay: </span>No, you answered that perfectly, Hema. That's great. 
      </p>
      <p>
      	<span class="speaker">Hema: </span>Awesome. How do you migrate SAS code as part of Teradata hardware?
      </p>
      <p>
      	<span class="speaker">Vinay: </span>SAS code. So assuming you're talking more on the analytics side in a SAS application you know, SAS as you very well know, it's a very black box tool suite. There may be embedded queries and logic that we're able to convert, but we probably want to understand the use case a little bit deeper. But we do have some capability to support the translation of some of the logic contained within SAS workbooks, for example.
      </p>
      <p>
      	<span class="speaker">Hema: </span>I'm going to add that. Yellowbrick has an integration with SAS. We just recently did an announcement around the SAS partnership and we have a connector that's built into the SAS. SAS has a connector actually that's built into the SAS platform that integrates with Yellowbrick. So we can certainly follow up with you on more of that, the person who asked the question. Regarding the industry models from Teradata, do you migrate the model as is, or do you do some improvements to it?
      </p>
      <p>
      	<span class="speaker">Vinay: </span>Great question. So that kind of depends on the migration strategy we're taking. So what we tend to recommend if we can, is to keep the data models as is for phase one of the migration. And that just allows depending on the strategy, if the strategy is to get up here data as quickly as possible, we would not touch the data model until post cut over. And if you know, what we've done with customers is then evolve and extend and or update that data model in Yellowbrick. And again, that just alleviates bringing in another, you know, complex stream of work into the migration project. And again, focus efforts on executing the data and code conversion and focus on remodeling efforts after.
      </p>
      <p>
      	<span class="speaker">Hema: </span>Thank you. And our last question is can a customer use shift tools separately, for example, start with shift crawler and analyzer before deciding to use shift translator?
      </p>
      <p>
      	<span class="speaker">Vinay: </span>Absolutely. Absolutely. We often use crawlers and analyzers again for different use cases. And if it's just to, you know, simply understand the environment for early, early planning that's absolutely possible. And so customers are not required or a couple to use everything at once. You know, they're absolutely standalone and we employ those at different portions of the project and for different use cases.
      </p>
      <p>
      	<span class="speaker">Hema: </span>So it looks like we've covered all of our questions. Vinay, is there anything else you wanted to add before we wrap up?
      </p>
      <p>
      	<span class="speaker">Vinay: </span>No, Hema, I think that's great questions from everybody. So, you know, I really appreciate the time to talk about this and we're really excited about this partnership. And again, Yellowbrick is just a fantastic platform and it provides that simplicity in the performance and scalability for customers that need it for their use cases.
      </p>
      <p>
      	<span class="speaker">Hema: </span>Thank you, Vinay. We're also very excited about our partnership with Next Pathway. It's been a pleasure to work with you on this. For everyone who attended this webinar, thank you so much for attending. Really appreciate that. I also want to highlight to you that we have a series of great webinars in July. So please go to yellowbrick.com to register. We also have recordings from our previous webinars, if you've missed any of those, and you can register to view those. And also please don't hesitate to email us info@yellowbrick.com to stay updated on what's going on and ask any questions. And you can also, again, follow us on Twitter and LinkedIn. Thank you again for joining us today. And we will see you next time.
      </p>

    </div>
  </section>

	</Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Real Time Migration from Teradata with Yellowbrick and Next Pathway',
    meta: [
			{
				key: 'description',
				name: 'description',
				content: 'Learn how to perform a seamles migration from Teradata to Yellowbrick with Next Pathway.'
			}
    ]
  }
}
</script>
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
			<h1>Learn what's new in data warehousing: A conversation with Yellowbrick CTO Mark Cusack</h1>
		</div>
	</section>

	<section class="bg-white py-12 md:py-20 z-10">
		<div class="w-full max-w-800 mx-auto">
			<BaseWistia id="wow6ar7qum" />
		</div>
	</section>

	<section class="bg-white py-12 md:pt-0 md:pb-20 z-10 ">
      <div class="w-full max-w-1200 mx-auto px-8">
        <h3 class="accent-heading">Transcript</h3>
        <p>
          <span class="speaker">Justin Kestelyn:</span> Hello everyone. Thank you for joining us for today's virtual fireside chat with Yellowbrick data's CTO, Mark Cusack on the topic. The best is yet to come and data warehousing. I want to give you a little bit of background about Mark. Prior to joining Yellowbrick, he was VP of data and analytics at Teradata, where he led product management for the data warehouse in the advanced analytics portfolio. Over the past three years, he drove the effort to augment the Teradata database with machine learning and graph analytics capabilities culminating in the release of vantage, which is the most widely adopted Teradata version to date. Now, during his six year tenure at Teradata, Mark also led the product management function responsible for the data warehouse ecosystem, supporting data loading data virtualization, near real-time streaming monitoring and management and application development. He was the chief architect of Teradata's IOT analytics effort, applying novel machine learning approaches to automate the management of workloads and the detection of anomalies based on real time analysis of telemetry data.
        </p>
        <p>
        	Now, before we kick off this conversation, I want to go over a little bit of housekeeping with you. We carved out some time at the end of the session for some questions from you directly. So please go ahead and be sure to enter your questions as we're having a conversation with Mark, you don't need to wait until the end of the period to start entering your questions. That way we'll have a nice list once we get to that point of the broadcast. So without further ado Mark, I want to thank you for joining us today. It's good to see you. 
        </p>
        <p>
          <span class="speaker">Mark Cusac:</span> Great to see you got to be here.
        </p>
        <p>
          <span class="speaker">Justin: </span> Great. So let's start with you know, what I would call a pretty foundational question. You've been in this industry and in you know, in the enterprise data analytics industry for, for quite a while, you've seen a lot of trends come and go and across all that time in all your discussions with customers and partners and so on now, what are some of the most surprising things you've learned or the surprising lessons you've learned.
        </p>
        <p>
          <span class="speaker">Mark: </span> I've been in this industry? Longer than I care to mention? I think, but yeah, I think, I think one of the overriding things I've learned I think is, you know, the more things change, the more they stay the same. I, and if you, if you look at where we were as a data and analytics industry, perhaps 10 years ago, we had data warehouses doing that thing, delivering descriptive analytics, powering business intelligence, and reporting. And then we had the emergence of the MapReduce and had your era that the evolution into kind of data lakes and they were, they were pressing along on their own, plowing their own furrows, doing their own thing. And, you know, with the data lakes and Hadoop world aimed at that kind of unstructured data, a variety of data types and, and data warehouses are staying in that kind of SQL kind of area.
        </p>
        <p>
        	And then over time you saw the data lakes trying to become more like data warehouses and to some degree data warehouses starting to introduce new sorts of varieties of data types that they could manage. And you can argue that neither have been particularly successful at encroaching on each other's territory. They were tools designed for specific purposes, databases, data warehouses, a small block technology, great for kind of single record lookups and, and very, very fast high concurrency use cases and data lakes good for variety of data, large block, different file types. And, and, and they kind of merge. And I think that that merge failed. And I think the sort of failed to do data lakes is a bit of a Testament to that. And I think what's emerged out of all of that now is a different view of how data lakes and data warehouses co-exist.
        </p>
        <p>
        	They both stay doing what they're really good at, but we're now looking at ways that they're integrated more seamlessly together. And I think that's a really important emerging trend. Just, just another trend that I think that you see in a cyclical view is if you look back into the eighties and how business intelligence was done back then, it was all very stove-piped. You had a specific application that generated a specific report or the application logic was tied up in code. And then data warehouses came along in the late eighties and nineties, and you push more of that application code and share data and, and apply schemers to it. And you'd get a lot of reuse out of, out of those applications and the applications simplified. And we had the emergence of all of the BI reporting and analytics tools that came from this. And I see something similar happening as we move into a kind of advanced analytics machine learning kind of view where data warehouses are starting to become a repository for a lot of the key feature engineering data. So today a lot of these AI and ML applications or against stovepipes, like these BI applications, where back in the nineties, and I am, I see data warehousing taking a more fundamental role in, in simplifying the management and operationalization of these, these new advanced analytics use cases. So again, more things change, they're more, will they stay the same?
        </p>
        <p>
        	<span class="speaker">Justin: </span> Absolutely. old wine and new bottles. So price performance is a term in a concept that we hear about more and more often these days. Why do you think that's becoming such a key focus area in the data warehouse industry?
        </p>
        <p>
        	<span class="speaker">Mark: </span> I think it's becoming really, really important, and it's partly related to this kind of data lake data warehouse bake-off. And now we have the cloud data warehouse players coming along now, and I think it's not just price and performance. That's becoming an issue for many buyers in it. And, in lines of business, I think it's also predictable price and performance is critical here. And I think if you look at the legacy data warehouse vendors, they're not providing a performance at a price that people are prepared to pay any longer. Okay. They're not innovating, all of them suffering from that innovator's dilemma. And a lot of, a lot of companies, all of enterprises are looking at how we can do better from a price per query perspective there. So they're looking for alternatives. So then a lot of flipped over to looking at the kind of sequel on Hadoop sequel on data lake technologies, as a way of fulfilling that data warehouse needs.
        </p>
        <p>
        	But of course those technologies were traditionally based on a price per terabyte kind of metric. They weren't geared up to deliver the kind of blazing fast SQL performance without throwing a lot of hardware at it. And even then you wouldn't get a concurrency level that full on data warehouse is designed to, of course. And then finally, you've got the new breed of cloud data warehouses that are doing some really, really innovative stuff, particularly around the user experience and onboarding. But they, they are, they do not offer predictable price and performance. And in many cases they don't simply don't offer price and performance. And what you see is a lot of the move of data, warehousing the lift and shift of the legacy technologies to run in the cloud. They can't innovate along any axis except the software. Now they're all running on the same virtualized hardware effectively in the cloud. They can't differentiate from, from that perspective. And so they're not able to provide the price and performance that I think is critical in this time of, of tight budgets and, and the need to to do things differently.
        </p>
        <p>
        	<span class="speaker">Justin: </span> Yeah. So speaking of the cloud, you know, cloud adoption is obviously skyrocketing. That, you know, the cloud model has been revolutionary for data analytics among other areas of it. And so there are a lot of customers looking at that as an option. But what about issues like compliance data gravity, you know, those kinds of compliments complicate cloud journeys, you know, what is your view about how vendors can help customers kind of navigate through those different decisions?
        </p>
        <p>
        	<span class="speaker">Mark: </span> And, you know, I think we saw this trend last year and at the beginning of this year of a long enterprising having public cloud mandates go all in on the cloud first. And, you know, and I, and I'm aware of some, a small handful of customers from my past that made that jump. They closed that data center down, and fired their DBA. So they basically burned the ships and moved everything into the public cloud. But what I've seen now, and I think this is backed up by a number of surveys. KPMG did a survey back in August, looking at the trends of how enterprises are moving into the public cloud. And rather than an all-in public cloud approach, companies seem to be taking a more considered view, particularly in light of the pandemic. From the beginning to take more of a hybrid approach, they're going to be stepping selective in what they move into the public cloud and why, and when, and I think there were a couple of reasons for that.
        </p>
        <p>
        	I think in these types of the financial times that we find ourselves in they've already made some cost investments into their own data centers, and they want to continue to leverage some of that. And then to your point, Justin, I think they're also taking a fresh look at some of the, the high profile security breaches that occurred in the public cloud this year in public cloud data warehousing and have thought, Hey, we, we've got to take a more considered view here. We've got to de-risk how we take our move to the cloud forward. I mean, the move to the cloud is inevitable. It's going to happen from a data gravity perspective. It's gonna, it's gonna happen potentially from a cost perspective. But I think, I think the jury's still out on whether running in the cloud is truly a cost effective solution over the longer term, but that's the trend that where we find ourselves going along now.
        </p>
        <p>
        	But I think you're seeing a lot of companies, particularly in the regulated industries going, we want to keep some of our most secure and, and important data on premise where we can be in control of that. And we'll, we'll look to move certain applications, whether it's dev and test, whether it's disaster recovery over into the cloud and then follow the data gravity as well. If there's a lot of machine generated sensor data, it makes sense to land it potentially close to the source in an object store and access it there in the cloud. And I think that's definitely a trend that we see emerging, but I think for the regulated industries they're really looking for solutions that can provide HIPAA compliance, PCI, DSS, anywhere they want. And I think the companies that are going to be most successful are going to be those that will demand the same guaranteed levels of performance, both on prem and in the cloud. And I don't think companies want to compromise on that for their production applications.
        </p>
        <p>
        	<span class="speaker">Justin: </span> Yellowbrick has a number of customers that, you know, I would consider to be analytics as a service provider. And they have some very interesting requirements that I think in a way it can be models for, you know, customers in all industries with, in all types of businesses. Why do you think that is, you know, how do we, how do we view that? 
        </p>
        <p>
        	<span class="speaker">Mark: </span> I think it really stems from the way that these SAS companies approach the user experience, first of all, and, you know, there's a definite drive across the data and analytics space to democratize access to data and analytics. And I think the SAS companies do that in an effective way. I mean, if you look at you, basically you sign up, you subscribe to a service and you get a dial tone and it's provisioned very quickly. You don't care about what's happening behind the scenes as a business analyst or as a data scientist. I just have the set of tools that are my preferred tools for doing the analysis I want to do. I can point to an endpoint, a SAS endpoint, and I can start loading data. I can start running my analytics and I don't have to care about what's under the hood behind all of this. 
        </p>
        <p>
        	I've just got a certain set of expectations of, of the levels of performance data quality that I'm going to get out of this. And I just move on and do my job. And I think that's really important. I mean, none of us care about let's just take one example from the broader SAS industry, none of us care where Workday or Salesforce is run or how it's implemented, but we just want to consume that as a service and have that cloudy like experience. And I think, again, the companies that are going to be most successful are the ones that are going to be able to replicate that cloudy user experience, both in the public cloud and on premises. So effectively your end users don't care, but what you've got yourself covered in a hybrid scenario is a business continuity story done, backups, all done, all of that administration has done behind the scenes and that's really the standout feature for us. I think it's going to be a huge kind of operational efficiency enabler for companies that adopt SAS approaches to analytics just scale up on, on the analytics and the machine learning and, and the descriptive predictive stuff you want to do and forget about the implementation.
        </p>
        <p>
        	<span class="speaker">Justin: </span> So I have one more set of questions for you. One more question for you, but before I get to that again, I want to remind our attendees. If you have a question for Mark, please put that in the chat box right now. So that's waiting for us when we, when we get to that portion of the broadcast. Finally Mark, with respect to Yellowbrick offering itself, we actually announced a new release yesterday. You know, maybe you could talk a little bit about how you know, what Yellowbrick’s focus areas are with respect to its roadmap and, you know, in a way that, you know, meet some of the requirements and the needs that we've been discussing previously.
        </p>
        <p>
        	<span class="speaker">Mark: </span> Yeah. I mean, this is a really important release for us here. And again, it kind of keys off a little bit of a theme of, for some of the questions we've just been chatting about. Actually, we talked a little bit about resilience and the importance of having service level guarantees, wherever you want to run your analytics workloads. And with the workload management capabilities, we've built into this release of Yellowbrick and also some key resilience features for fault tolerance features. So that, for example, even if the heart underlying hardware has a problem, we Musk that problem from an end-user thinking back to what I just said about SAS services and the consumers of those, if they, if a drive fails or some hardware issue arises what we can do at Yellowbrick is hide that from that SAS user, they don't see it CRE failure within that BI tool, their analytics tool, we're behind the scenes.
        </p>
        <p>
        	We reconfigure that workload, and they get the answer they want. It may take a little longer of course, but they'll get the answer without any interruption in service. And we've taken out workload management, I would say to the next level and Yellowbrick far before I came along had already invested heavily in producing, I think a world-class weapon management capability and coming from Teradata, they're considered the gold standard in mixed workload management there. And we made another leap and bound towards the territory's capabilities, frankly. And I think it puts us head and shoulders above any cloud data warehouse, any SQL on Hadoop, or pretty much all of the legacy data warehouses that are out there in terms of our ability to apply fine grain control and management in an automated sense over the workloads. So to take an example, if somebody, and you always get this, you either get somebody who writes an inefficient SQL query or a query that is a bit of a runaway query, and it's going to be a complete resource hog.
        </p>
        <p>
        	So we have the ability to kind of recognize that that query is going to impact more workloads that have a higher priority, those workloads that are driving the CEO's dashboard, for example. And we're able to basically put those into a penalty box, these sort of resource hoc queries, and then rerun them when the resource landscape is more sort of accommodating for those kinds of queries. We've also done things like take a much more fine grain control approach over some of our security settings. We've added the ability, which I think a lot of developers will appreciate the ability to create your own UDS based on SQL. And so I think the standout feature is the fine level of control of the workload management we have and on new security areas and, and some of the work we've done to help to develop, develop a community rather around the other brick. It was a very exciting release.
        </p>
        <p>
        	<span class="speaker">Justin: </span> Excellent. Well with that let's pivot to questions from the audience today. I'm going to take a look at my screen. So here's a good one. Mark, you joined Yellowbrick. I don’t know, what maybe about a month ago, why did you join Yellowbrick?
        </p>
        <p>
        	<span class="speaker">Mark: </span> That's a very good question, but actually one that's pretty easy to answer. If I look around the entire data warehouse landscape, and you look at who's innovating here, you can pretty much count the numbers of really innovative data warehouse research development, and production that's going on on, on, on one hand and maybe just a couple of fingers. And one of those, one of those is Yellowbrick. And I think what Yellowbrick could do in terms of the emphasis that playing pacing, not only on the importance of software in data warehousing to get price and performance, but also hardware and twinning those together is critical for me. So I saw something that I, I'm not seeing anywhere else in them, up in the market happening at Yellowbrick. I was fortunate enough to actually talk to a few customers coming in here. And one of the things that really stood out for me is that all of the customers are prepared to stand up and talk about Yellowbrick. All of them love it, and all of them, once they've got it, they want to expand. And so we're gathering new locals at a pace, but our customers that have it seem to love it. And I played with a product extensively in my first month and I love it as well. And for me, I made the right decision.
        </p>
        <p>
        	<span class="speaker">Justin: </span> Great. So let's see, we have another question for you here. Do you foresee Yellowbrick playing a direct role in facilitating storage sharing between data lakes and data warehouses?
        </p>
        <p>
        	<span class="speaker">Mark: </span> Oh yeah, it does. And I think this is really important. I kind of mentioned this as a trend early on, that we now have data lakes, which are effectively cloud object stores and on-prem object stores and all of the ecosystem around that. And we have our data warehouse is both very good for what they do in their own space, high structured data versus a broader variety of data, but the need to integrate these in a seamless fashion has never been more important than, and that's something very much we're aimed at investing in our, in our roadmap at Yellowbrick here. So you'll, you'll see us being able to seamlessly access data in a variety of different file formats in cloud object stores on the fly, not only just to load it, but to query it as well. And, and absolutely you're seeing this, this notion, this concept of a data lake house emerging, and I think that's an important kind of trend that we'll see here. Not, not, and I don't believe the answer is for data lakes to become data warehouses or data warehouses to try and be data lakes. I think that's been a tried and failed technique and in the past that both greater what they do and what we've got to get, right. And what we were heavily investing in at Yellowbrick case, getting that user experience, integrating the two to be seamless.
        </p>
        <p>
        	<span class="speaker">Justin: </span> Do you really think traditional RDBMS can implement advanced ML functionality better than ML systems that are built from ML built for ML? Excuse me from day one.
        </p>
        <p>
        	<span class="speaker">Mark: </span> This is it's again, that that trend emerge is about trying to take a hammer to to, you know, to treat it as a wrench or a screwdriver or something like that to a degree, but they, there are absolutely steps within machine learning and AI that the data warehouse can play a pivotal role in. And I kind of touched on this, I think, a little earlier, you know, when you look at what you do in, in developing AI or ML application, you might take a bunch of unstructured data, but the thing you want to model, and the thing you want to train on is highly structured and these are engineered features. And so what most people do is spend a bunch of time, probably 80% of their time when they're developing an AI or ML application in preparing and transforming the data and do that, doing that feature extraction.
        </p>
        <p>
        	And I think where data warehousing really plays a pivotal role is in that data preparation phase, because frankly you could think of that data preparation stuff, which is, you know, text manipulation, Benning aggregation, or whatever, as something that data warehouses have done at scale for years. But I think more importantly is what emerges out of the zero set of engineered features that are highly structured and are just crying out for having a schemer placed over them and see that just like I said, that BI evolved over time and began to use data warehouses for reusing data, and they put schemes together to do that. So different BI applications could, could reuse the data that other BI applications were using. Data warehouses I expect will be used as speech stores. And so different AI applications will be able to access engineered features that have been created out of previous AI pipelines and reuse them.
        </p>
        <p>
        	So I think this is going to be a really important trend. Do I think that you should implement iterative algorithms you know, key means and things like that in, in data warehouses? No, I don't believe that's a fit at all. Can they be used in that big, important phase of data preparation? Yes. And it'd be used in training probably not so much. Can they be used in scoring at that last phase when you're scoring the model? I think there's potential there and, and, and the, the real innovators in data warehousing are spending a lot of time on how they get the ability to instantly query real-time streams when you want to do real-time scoring. That's a key thing. So I think that's an interesting area to keep an eye on scoring.
        </p>
        <p>
        	<span class="speaker">Justin: </span> So why don't we pivot to industries for a second question here. Can you explain a bit about how Yellowbrick is being used in telecom in the telco industry?
        </p>
        <p>
        	<span class="speaker">Mark: </span> And, and I can, and what's, what's really interesting. I found it fascinating, when I joined, this is just how all of us on this call probably have touched Yellowbrick at one point in our time, but when absolutely not aware of it. And, if you're an 80 in T or sprint mobile customer in, in the US Yellowbrick through our partner, TOK is basically using Yellowbrick to make sure your phone bill is correct. And so, as you roam from one area, one region to another one carrier to another a brick is being used to do revenue insurance behind the scenes for these telco customers. And so we're, we're processing an enormous volume of CDRs called quality detail records and IPD hours a day. I mean these companies are loading something like 40 to 50 billion CDRs a day, and to do this revenue insurance process within Yellowbrick. And you know, when, when you've got a system, which again, I mean, it's mind blowing some of the statistics around Yellowbrick. You're, you're able to basically load 10 terabytes an hour into the system at that line speed you can stream records in millions of records a second and get instant queries against it. So there's a whole bunch of emerging use cases in, in telco that I, that, that we're seeing Yellowbrick being applied to.
        </p>
        <p>
        	<span class="speaker">Justin: </span> So in what ways is Yellowbrick different from other data warehouse vendors you've touched on you know, some of the, the limitations of the legacy approaches, as well as the cloud only approaches, you know, how would you really articulate the difference with Yellowbrick?
        </p>
        <p>
        	<span class="speaker">Mark: </span> Yeah. And, just to reiterate the point in the rush for data warehouse vendors to claim cloud first and cloud credentials, they're all, they're all sort of reduced down to the lowest common denominator. They're all using the same easy two instances, the same object storage to see the same you know, EBS storage. And so they can't innovate along that hardware dimension at all. They have only got the software to differentiate themselves from one another. And so it's very difficult to get a decent price and performance out of that, particularly when whatever you do is pegged to the prices that the cloud vendors up pricing you out. And so, you know, I think the view that we've taken at Yellowbrick is key, and that hardware is an incredibly important dimension in this. And it doesn't matter whether you're running Yellowbrick within a public cloud environment or on premises, by having that additional specialized instance type that we can provide really does mean that you've got the price and performance multiplier that comes out of the hardware and the software combination code kicking into place here.
        </p>
        <p>
        	And, frankly, it puts us in a unique position in the market, none of the legacy vendors, none of the daily vendors, none of the cloud vendors can do what we can do. And just imagine you, de-risks your decision, because if you're on prem thinking about moving to the cloud in a high hybrid kind of context, you know, you're going to get the same price and performance, the same service level quality, regardless of where you place that workload. So yeah, it becomes a much easier decision, I think for CIS to make when they go for Yellowbrick. And it's not only a case of deploying on prem, we, we, we can deploy these specialized instance types of gates, all three of the major cloud public clouds as well. We just appear as a private link instance end point, rather within your virtual private cloud.
        </p>
        <p>
        	And then you can crack on an integrator with the rest of your cloud native services alongside everything else that's running within your VPC too. So I think and again, going back to that as a service experience, that's exactly how we deliver it as well. We manage the whole kitten caboodle of pieces that need to go on behind the scenes in terms of backup disaster, recovery, replication you know, geo replication we support again, which I think is a really important standout feature. And we do all that for you in the cloud. So I think that's how we differentiate ourselves.
        </p>
        <p>
        	<span class="speaker">Justin: </span> So I think we have time for one more question. Mark, what are your immediate priorities as CTO of Yellowbrick?
        </p>
        <p>
        	<span class="speaker">Mark: </span> Yeah. And funny, funnily enough, we touched on this. I'm a huge believer in that cloudy user experience and that we talked about, you know, people want democratized access to data. They want democratized access to data warehousing as well. They don't want to care about what's happening behind the scenes. They just want an end point, a dial tone, a Cree dial tone that they can go on crack on and do what they need to do. So, that user experience to me, to make it trivially easy to load data, data driven, easy to query data, getting away from legacy batch mode, command line tooling is critically important to me. And so is improving the overall onboarding process for this you know, I want to make it as easy as possible to try Yellowbrick, to buy Yellowbrick and to grow with it as well. And I think the recent analysis we made yesterday around our 30 day free trial on your standard level service plans is available for just 10K a month on a subscription basis. I think we're absolutely going in the right direction. And you're just going to see us push this forward. And, and second one again, is getting that integration with the data lakes, right. And, and we've, we've got some really exciting stuff to, to to show you all in the next few months.
        </p>
        <p>
        	<span class="speaker">Justin: </span> Well, I think that it's an excellent way to wrap up the show today. I want to thank everybody for joining our broadcast this morning, and we hope to see you on a future broadcast soon. Everybody have a good day and stay safe. Thanks everyone.
        </p>

			</div>
		</section>

	

	</Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Learn what's new in data warehousing: A conversation with Yellowbrick CTO Mark Cusack.",
    meta: [
      {
				key: 'description',
				name: 'description',
				content: 'See how Yellowbrick can better position your business for what is happening now and what is to come.' }
    ]
  }
}
</script>



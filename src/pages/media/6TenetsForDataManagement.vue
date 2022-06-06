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
		<div class="w-full max-w-1200 mx-auto text-white z-10 px-8">
			<h1>6 Tenets for Your Data Management Strategy</h1>
		</div>
	</section>

	<section class="bg-white py-12 md:py-20 z-10">
		<div class="w-full max-w-800 mx-auto">
			<BaseWistia id="0zhaicn11v" />
		</div>
	</section>

	<section class="bg-white py-12 md:pt-0 md:pb-20 z-10 ">
    <div class="w-full max-w-1200 mx-auto px-8">
      <h3 class="accent-heading">Transcript</h3>
      <p>
        <span class="speaker">Gary Orenstein: </span>And thanks to everybody for joining the call today. We're going to talk about six tenants for your 2019 data management strategy. And I wanted to begin first by saying that you're already ahead by thinking about a data management strategy. And so thank you for joining and know that you're already one step ahead of the pack by putting some forethought into this topic. I also wanted to mention that we're going to ask for your input at the end of this webcast. So as we go through, we're making some suggestions about six tenets. We think that is applicable, but you might have your own. So keep some notes. And we'll talk about that at the end of the presentation. What you're going to see today is based on some patterns that we've seen emerging across customer conversations and deployments, and I've tried to synthesize those in a way to make them usable in your own organizations.
      </p>
      <p>
      	So that's a little bit of where all of this has come from. So with that, let's jump right into it with the tenant. Number one, this one is to expand structure and structure is a longstanding topic in the data management world. No today were bombarded with a wave of unstructured data, but along the way, all of that unstructured data ultimately needs to become structured and supported by structure. So let's talk a little bit more about what this means specifically in the unstructured and structured data worlds. Ultimately, you know, we're taking a structured approach. We do have more unstructured data than ever before for often user generated. But for analytics, we're going from unstructured data to semi-structured data to structure data. And that gets us from less known to partially known data to true insights. So the choices that you can choose when, but not necessarily, if you apply structure and that brings us to this choice of, am I going to choose a schema on read, or am I going to choose a schema on, right?
      </p>
      <p>
      	And this is a heated debate in the data management world and both choices are okay. However, given that in the end, we need to add structure to derive the kind of insights that we seek, adding structure earlier on can be a huge benefit. It can also be a trade-off between teams and departments and businesses as to when and how that structure is put in place in the overall food chain. But I'll leave you with this anecdote on choosing schemas and this applies to data types as well. They're a little bit like financing. You can pay now, or you can pay later, but if you pay later there's interest. So that's something to keep in mind. You know, the takeaway here is that as you seek to expand structure, you want to make sure that you can invest up front and build a data handbook to help your organization move forward.
      </p>
      <p>
      	So the second tenant that I wanted to talk about is classifying platforms and taking the time within your organization to demarcate areas of what we might call both traditional strongholds and new emerging platforms. If we look back at you know, some of the top level platforms that are happening today, and we look to delineate those, of course, we have databases which are often primarily transactional and often application centric. After it got hard to do analytics within a database, we took the data out and, and that was born the data warehouse industry, which are primary analytics primarily analytical and often focus on operational reporting and, and over the last 10 years or so, we've seen the emergence of data lakes, which are primarily unstructured storage. Know there was a lot of effort to do processing in data lakes. But I think as an industry we've seen over time that while data lakes are a wonderful place to store data, they can be a less wonderful place to process data.
      </p>
      <p>
      	And that's why myself, I like to think of the data lake as a waystation on ingest, and it may be a permanent way station or maybe a temporary waystation, but that's one way to think about how these platforms interact. So in any large organization, you're likely to have a combination of these things, databases, data, warehouses, and data lakes. You know, I think it's pretty clear where the database fits in this world. I think it's been less clear over time, the split between the data warehouse and the data lake. So I've liked to look at some of the definitions that folks are using in the industry. This is from Henry Cook, an analyst at Gartner who has a blog post about the logical data warehouse. And he splits the two top jobs into what essentially can be equated as data warehouse and data lake, but with very distinct classifications for the data warehouse job, number one, he mentioned tactical and strategic query on structured data and guaranteed data quality and a large number of very users contrast that with the data lake, which is focused on the very large data volumes of unstructured data, a low cost of storage and a low cost of processing and a smaller number of users who need to be trained on how to operate the data lake, which can be more complex than just issuing a SQL query to a data warehouse.
      </p>
      <p>
      	So what happens in organizations is that there'll be some combination of data lake and data warehouse, and database, and that might work just fine, but when there's a lot of people involved that can quickly explode for multiple databases, data, warehouses, or data lakes and this is fine, as long as you're maintaining the segmentation of how each platform should be used, you know, what you want to avoid as the situation on the right where it's a complete free for all to use all solutions in all places. And doesn't give you the flexibility to have that clear sense of purpose for each platform. So tenant number two is to classify your platforms and work within your organization to make sure you're all on the proverbial. Same page tenant. Number three is to focus on open standards. And this is a very big discussion these days and open is great, but open standards and open interfaces are often best.
      </p>
      <p>
      	And I delineate here between openness in terms of open source software, which is also great, but what really makes the flexibility and gives power to users for these kinds of choices is the open standards and the open interfaces. Those allow for the rapid deployment realignment, if need be migration from one solution to the other changing a vendor, if that's what's in the cards, the open standards and open interfaces help the most with those situations and in the database world, you know, the standard of course, that we all point to is ANSI sequel. It is the lingua franca of data and analytics. We also have some very popular, open source databases like Postgres and my sequel, which provide these kinds of open standards and open interfaces to provide real power to users as they chart out their data management strategy onto tenant number four, building a foundation for machine learning and artificial intelligence.
      </p>
      <p>
      	There's no doubt. This continues to be the hottest topic in 2019, I picked out a chart recently. This is from Deloitte came out at the end of last year that AI is becoming mission critical both now. And in the next couple of years, we already knew that the question is what can we do about it? And the data management world, one of the foundational things we can do is to focus on clean data and providing fast interactive, you know, the, in order to reach the the hierarchy of artificial intelligence, we have to start with some datasets and in your organization, if you're being asked to support machine learning and artificial intelligence, I'd say that one of the best things you can do for your organization is provide clean data with fast interactive access. That allows for the running of machine learning models that allows the data scientists to spend more time on algorithms and less time on data preparation.
      </p>
      <p>
      	So the sooner you can get there as a foundational element to provide that the better, another thing I'd like to mention on the element of machine learning and AI is that it can be a fine line between a complex, sophisticated, SQL query on live data and machine learning and AI, and that spectrum, you know, you can go a long way in improving data and analytics inside your organization by clean data, fast interactive access, and the ability to support a lot of groups with their interactive queries. So that's tenant number four, and building a foundation for machine learning and AI tenant number five is to prepare for deployment anywhere. Increasingly we're seeing that the future of analytics is both anywhere and everywhere, whether that's on premises or off premises. And increasingly we have this notion that solutions will span from data center to cloud, to edge with the rise of IoT and the promise of near infinite bandwidth with the new 5g networks coming our way, we see a full spectrum of analytics and you need to be prepared to to, to cover all of those bases, just to look at some data from IDC on how the landscape is taking shape between cloud and traditional.
      </p>
      <p>
      	This is a chart on it, infrastructure redistribution from January of 2019, and you can see big growth in private cloud and a little bit of shrinking of the traditional IT model. You can see some expansion of the private cloud along that as well. And I don't think these trends are anything surprising. They all follow the winds of moving more infrastructure to the proverbial cloud. What I think is interesting is that IDC has also started tracking something. They call cloud repatriation. And in this chart, they talk about how 80% of customers reported cloud repatriation activities, moving from a public cloud to some version of an on-premise cloud or a hosted private cloud, and how they see that happening over the years. The main reasons for this tend to be security and performance, but everybody's going to have their own rationale, cost and control were also mentioned. And I think the long and short of this story here is that for the foreseeable future, we are going to be deep into a hybrid world with the necessity to deploy data management and analytics strategies from data center to cloud to edge.
      </p>
      <p>
      	My final tenet is to use data, to equip for digital transformation. Almost everybody in the corporate world is being pushed today towards digital transformation. And you know, we're seeing that surface in the survey results as well. This is a chart from 4 51 research in their recent report on the top. It trends in 2019 that a full report is available on the Yellowbrick blog, by the way. And they point out that 75% of respondents say data will become more important to their organization over the next 12 months. Again, we knew this based on the things we see day to day. The question is what can we do about it? Well, one aspect of making this a practice of your data management strategy is to expand the business intelligence options within your organization, put yourself in a position to say yes, when someone asks, can we expand the number of Tableau users or micro strategy users, or can I add new real-time dashboards to this installation or this application real-time dashboards, by the way, may just be using a lightweight JavaScript charting tool and issuing SQL queries directly to the data warehouse and implementing you know, web books for ongoing refreshes.
      </p>
      <p>
      	There's a lot of cool technology out there that allows things like this to take place. One of my favorites and you can do it yourself you know, real time charts is a service called high charts which is a fun one to take a look at, if you haven't seen that already. I wanted to wrap up with just a little bit of information about Yellowbrick before we get to the Q&A. So, Yellowbrick is a data warehousing company. We're headquartered in Palo Alto, California in the heart of Silicon Valley, but we also have offices in Salt Lake City and London and Hong Kong. And at Yellowbrick, we believe in the power of the data warehouses of the data warehouse and the data warehouse resurgence that we're witnessing every day we see enterprises and their need for more analytics whether that's mixed workloads, real-time data, high concurrency, and user count, high capacity and high performance in particular, there are new technologies such as flash memory, especially NBME flash that help deliver a really simple and efficient data warehouse solutions for critical analytic needs.
      </p>
      <p>
      	We put all that together into our product, the Yellowbrick data warehouse, which is an integrated all flash data warehouse that you can deploy in your data center or elsewhere all the way to the edge to help you solve your toughest analytic challenges at a price point, that's going to let you deploy more analytics than ever before, in terms of some of the Yellowbrick data warehouse, product capabilities we support the ability to handle real-time feeds and capture hundreds of thousands of rows per second. The ability simultaneously to do bulk loading and to do load and transformation both outside and inside the database. The database itself is compatible with PostgreSQL. So that provides an immediate fit to existing ecosystems and ETL processes and tools and dashboards and data protection mechanisms. And ultimately we want the data warehouse to be in service of interactive applications, powerful analytics, and business critical reporting.
      </p>
      <p>
      	If any of this sounds interesting to you, and you'd like to get more information we do have a button on the top of our website where you can book a demonstration. We can ask you about some of the things that are important to your business and your challenges and work with you to showcase how Yellowbrick may be able to help solve some of your challenges before we, you get to the Q&A, I wanted to say that your input as well we would really enjoy having your favorite data management strategy tenets or two. And so you can submit those in the questions tab and move, and I will collect those and share back the best ones that we can see from the group. But it would be great to have a whole addition of tenants for your data management strategy so that we can build a little body of knowledge here and progress together as a team to be successful.
      </p>
    </div>
  </section>

	</Layout>
</template>

<script>
export default {
  metaInfo: {
    title: '6 Tenets for Your Data Management Strategy',
    meta: [
      {
				key: 'description',
				name: 'description',
				content: 'Data Management Strategy is important. Join us to learn the top 6 tenets.'
			}
    ]
  }
}
</script>
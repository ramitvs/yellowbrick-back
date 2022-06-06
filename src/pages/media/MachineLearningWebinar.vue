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
			<h1>Accelerate machine learning with Yellowbrick Data Warehouse</h1>
		</div>
	</section>

	<section class="bg-white py-12 md:py-20 z-10">
		<div class="w-full max-w-800 mx-auto">
			<BaseWistia id="3key9kgkbr" />
		</div>
	</section>

	<section class="bg-white py-12 md:pt-0 md:pb-20 z-10 ">
    <div class="w-full max-w-1200 mx-auto px-8">
      <h3 class="accent-heading">Transcript</h3>
      <p>
        In this week's webinar, we're going to be talking about machine learning and how you can use the Yellowbrick data warehouse, to get the job done faster and save a lot of money at the same time. If you're familiar with the Yellowbrick, you already know how fast we are. It's one of our biggest selling points. We have a very unique architecture that allows you to plow through billions of records in milliseconds, and it can handle extremely large datasets at sizes that other data warehouses can't touch. When you need to analyze large volumes of data, it's hard to beat the convenience of a data warehouse. They can give you a lot of insight about what your users are doing very quickly just by running some simple queries, but the queries you can run are only as good as the underlying dataset. I mean, after all, we can only analyze the data if we have it available.
      </p>
      <p>
      	If you're only focusing on the raw data, though, you might be missing the bigger picture. There's a rich layer of hidden data buried underneath the raw data and with the right machine learning tools, you can uncover all that hidden information and derive some new data fields by extrapolating on the data that you already have. And in today's webinar, I'm going to show you how to do that. Now these days, machine learning is being used all over the place. We have customers in the retail industry who use it for decision support. They examine historical data on sales to predict how their customers are likely to behave. So the algorithms can tell them what their customers are going to buy, when they're going to buy it, which ad campaigns are most successful, and what the optimal price points are. It's an extremely valuable tool for them.
      </p>
      <p>
      	Financial institutions will use it for all kinds of things. They use it to evaluate risks for their investments. There are algorithms that can predict how well an investment is likely to perform based on market conditions and past experience. They can use it for fraud detection to identify suspicious activity and flag it for investigation. In the healthcare industry, people use machine learning to help diagnose patients by examining biometric data. We use it to predict demand curves for medications, to identify individuals with elevated risks for certain diseases. In IT security, we use it for things like monitoring network traffic to flag suspicious activity. So machine learning is everywhere. And in the analytics world, you will almost always see a data warehouse as a core component in the infrastructure.
      </p>
      <p>
      	Now, remember we're dealing with huge volumes of information here. Billions potentially trillions of records. The data warehouse provides the foundation for storing and retrieving all that data. So it powers all of your dashboards and your reporting tools. So you need it to be fast and scalable. When you're choosing a data warehouse, you need to be very careful which one you pick because the cost and the performance of your entire analytics environment hinges on this one central component. Now today's demo will focus on a specific discipline of machine learning called Natural Language Processing or NLP. These are algorithms that analyze human language and try to derive some kind of meaning from it. It's for things like speech recognition or language identification or summarizing documents, things like that. In the data analytics world, people generally use NLP to analyze large collections of text data when it's not practical to go through it all manually.
      </p>
      <p>
      	So, you know, nobody wants to sit there and read 10,000 product reviews and try to summarize them all by hand. So we use NLP to do that for us. For today's demo, we're going to be focusing on a popular type of NLP algorithm called sentiment analysis. Sentiment analysis looks at a passage of text, usually something small, like a comment or a product review. And it tries to determine how the user feels about it based on the type of language that's used. Different algorithms will use different kinds of classifications. So they might be really simple. Like this comment is positive or negative, or it might be a more advanced algorithm that can determine the user's emotional state like happy, angry, excited, and there are a million different use cases for this. Let's start by taking a look at our machine learning model. If you're new to machine learning, there are a couple of technical terms you should be familiar with.
      </p>
      <p>
      	A model is an algorithm that's been trained to do a specific thing. It's a set of mathematical operations combined with all the different variables and weights and coefficients that were generated when the model was trained. And all those things are crammed together into one giant file called a machine learning model. After the model has been created, you just feed in your data, feed that into the function and capture the output. So in this example, we're feeding in the phrase, “Wow, Yellowbrick is really fast!” and the model does all kinds of crazy calculations that you need a PhD in math to understand. And then it spits out the result. This user sounds excited. Building a machine learning model by hand is a labor-intensive process. A lot of people prefer to write and train their models manually, but that's a lot of work.
      </p>
      <p>
      	You have to choose an algorithm. Then you have to generate training data to train your model. So you would tell the algorithm, here are a million positive comments and it would look through them all and find the similarities and learn what a positive comment looks like next. You would say, here are a million negative comments and the algorithm would use that to learn what a negative comment looks like. And you have to train it, test it and validate your results and keep repeating that process until your model has an acceptable level of accuracy. Now you can totally do all that by hand if you want. But if you're like me and you don't have time for all that, you can just use a cloud service. There are a ton of cloud services available all with pre-trained models, for everything you could think of. So when we're talking about sentiment analysis, we've got Amazon Comprehend, Google Cloud Natural Language, and Microsoft Cognitive Services.
      </p>
      <p>
      	These can all analyze a passage of text and tell you how the user is feeling and the prices look pretty good too. So if we look at Amazon comprehend, they're charging 1/100 of a cent per result. So that sounds pretty awesome. Now, by the way, don't get too hung up on the prices here. This isn't supposed to be a cost comparison. These services all have different price points for different amounts of data and slightly different capabilities. So this is not an apples to apples comparison. This is just to give you a ballpark idea of what these services charge, which is a fraction of a cent per result. Let's take a look at our sample dataset. I've collected 20 billion social media posts from a popular social network. And I'd like to run sentiment analysis on them. Now, already, you might be seeing the problem with this.
      </p>
      <p>
      	Suppose we want to analyze all 20 billion of these records using a cloud service. We can certainly do that. And it's cheap, right? A fraction of a cent per post. Well, if you take a fraction of a cent and you multiply it by 20 billion, it starts getting expensive. So let's say your pricing model is 25 thousands of cents per unit, which is pretty typical for sentiment analysis. You can do the math on this yourself. So if I wanted to scan, say a thousand comments, it would be 25 cents. I want to scan a million. It's $250. That's pretty reasonable. If I want to scan a billion of them, okay, now it's getting expensive. It's 250,000. And if I wanted to scan this entire dataset at this price point, it would cost me $5 million to run sentiment analysis on all those posts. Okay? So maybe we don't analyze the entire dataset.
      </p>
      <p>
      	We should probably be a bit more selective. Now, by the way, 20 billion records isn't even a large dataset. A lot of these big social media services will see a billion comments per day, and we need a way to separate the data from the noise. Trying to process every single record is not only cost prohibitive, it's time-consuming. So even if you had $5 million to spend, it would take you a week to process everything. Analyzing 20 billion records is a big, expensive batch job. And I don't want to run this as a batch job. I want some answers right now. I've got a company to run and I've got important decisions to make. And I'd really like to get these answers in real time. This is where the Yellowbrick data warehouse comes in. The first thing we need to do is filter this giant dataset and pull out the data we actually care about so we can focus on that and not waste our time and resources doing a bunch of unnecessary work.
      </p>
      <p>
      	You might have a trillion records in your collection, but you're generally only going to be interested in a small subset of them at any given time. Now, with Yellowbrick, you can break your data set off into smaller datasets that are a more manageable size, so you can process them quickly and cost-effectively. If there's one thing Yellowbrick is really good at, it's filtering large datasets. We have the fastest scan rates of any data warehouse on the market by a very large margin. We can do a wildcard search on 20 billion records in a 10th of a second. And I can show you that in the demo. Because again, we don't want to do all this stuff in a batch. We want to see our results in real time and get answers to our questions at the speed of thought.
      </p>
      <p>
      	This is a diagram of our test system. So our demo is running entirely in the cloud. I have a virtual desktop running in AWS, and we have the Amazon Comprehend service, which contains our machine learning model. Comprehend is a serverless compute service. So there isn't a whole lot to mess with. All we have to do is call a service using the API, and it will spin up some containers in the background to analyze each post and then give us the output. Now, all of my data is stored on my Yellowbrick instance, which is hosted in the Yellowbrick cloud. Now, the cool thing about the Yellowbrick cloud is that there are no meter charges. This is a huge advantage over places like, like Amazon. We don't charge you for network bandwidth. We don't charge for CPU utilization or the number of queries or transactions or bytes read.
      </p>
      <p>
      	None of that, everything is a flat rate. So you can just hammer on this thing non-stop 24 hours a day without any nasty surprises on your hosting bill. It's a great option for people who are working on large datasets. Um, the Amazon cloud and the Yellowbrick cloud are connected together here using AWS direct connect. So from the perspective of my EC2 instance, my Yellowbrick instance shows up as part of my VPC. It just looks like another database sitting on Amazon, and it's all completely transparent to the user. To call the machine learning service, I've written a Python script that pulls data from Yellowbrick, runs it through the Amazon Comprehend service and then stores the result back to the database. Now keep in mind, I don't have to use AWS for this. That's the great thing about our cloud offering.
      </p>
      <p>
      	I could run this demo from any cloud and it would look exactly the same. You could run it from Azure GCP, AWS. And if you wanted to, you could run it on all three of them at the same time. This gives you a lot of flexibility, which is important. Our cloud deployments tend to be fluid. You may decide that you don't like Amazon Comprehend, right? Maybe you'd rather use Microsoft Cognitive Services. This deployment model gives you the flexibility to do that. You can connect to any cloud you want and you can pick and choose your favorite services from each cloud provider, and then point them all at the same dataset. We don't charge for Egress either. So if you'd like to export your data, it's totally free at least on our end. So eliminating all those usage fees will save you a ton of money, potentially tens of millions when you're operating at scale.
      </p>
      <p>
      	All right, let's get to the demo. Here's a practical example. Let's say that I work for the marketing department at a big corporation, and we just had a big product launch. I want to evaluate our marketing campaign to see how well the new product is being received. So I'm going to capture some social media posts to see what my customers are saying about it. For this example, I decided to use real data about a real company. So for the demo I chose a health food company called Beyond Meat. If you haven't heard of them, they make plant-based meat substitutes, which are designed to taste like real meats. So this is their hot new product. It's called the beyond burger, and it's supposed to taste like a real hamburger. The reason I chose this example is because this product is new. It's innovative, it's disruptive, and we're not quite sure how the general public is going to react to it. So let's say that I work in the marketing department for this company. I'm very curious to know what my customers are saying about it. So do they like it? Is it popular? What is the overall sentiment? And also, can I track the sentiment over time to see if it's improving? So let's find out.
      </p>
      <p>
      	I'm going to go ahead and log into my AWS instance here. All right. So now I'm logged into my virtual desktop in AWS. The first thing I'm going to do is open up my SQL client and make a connection to the Yellowbrick data warehouse. All right. So I've got a table here called posts. This contains all of the social media posts that I've collected. So all 20 billion of them. And if we do, oh, are you kidding me? Here we go. So it looks like we have 20 billion rows in this table, 20,181,000,000 and little more than that. Okay. So it's a very big table, 20 billion posts. Let's take a look at what this table contThese are actual real social media posts that I grabbed from the network. So, um, please, excuse any offensive language that you might see, the internet is not always a friendly place. So, if you see that, my apologies, please ignore it. So you can see here, we've got a user ID, the post ID, the date the post was created and then the content of the actual post right here.
      </p>
      <p>
      	So now we want to see, we'd like to see who's tweeting about the Beyond Burger today. Excuse me, posting generic social media posts. So I'm going to run this statement here, select * from posts. And we're going to see who's talking about it on this particular day. And we're going to do, I like that's to ignore the case and we're going to search for the Beyond Burger. So I'm going to go ahead and hit play here. And these are all the posts about the Beyond Burger. You can see some people like it. It looks like this guy says he choked on it. So some people like it, some people don't. It looks like there are 164 results on this query. And I don't really want to go through them all manually.
      </p>
      <p>
      	It's not really that much. Still, I don't want to go through all of these all and sort them out by hand. So we will use our machine learning algorithm, to do sentiment analysis on these. All right. So the first thing I want to do is separate these results from the rest of the dataset, because remember, we've got a 20 billion row table. We don't want to analyze all 20 billion of these. So I'm going to create a temp table real quick, which just contains the posts about the Beyond Burger on this particular date. So when I run this here, it looks like I've created a temporary table with 164 rows in it in 249 milliseconds. So I just did a wildcard search on 20 billion rows in 2/10ths of a second. Pretty good here. And now, let's take a look at that table to see what's in it.
      </p>
      <p>
      	All right. There's all my tweets, 164 rows. That looks really good. Now I want to run sentiment analysis. So let's minimize this and I'm going to open up PyCharm. This is my Python interpreter, and this is a really short Python script. It's 40 lines of Python code. So the first thing I'm going to do is log into the database. Yellowbrick has a really great Python API. So it's just based on PostgreSQL. So you can use the Psycopg2 library to talk to it. The first thing I'm going to do is alter this table and add a new column called sentiment. This is just a string field, which will contain the sentiment from the sentiment analysis library. So I'm going to add a new column. Then I'm going to run a select statement on the table to grab all those rows. Then I'm going to connect to the Amazon Comprehend service here in us-east-1. And I'm going to loop through all the results from the statement and run them through Amazon Comprehend. So comprehend.detect_sentiment is the name of the function call. And then I'm going to update each row to set the sentiment to whatever it calculates. So let's go ahead and run that.
      </p>
      <p>
      	And right now you can see the output of it in the window down here. It's going through every single message, running sentiment analysis on it, and then storing the result back. So with Comprehend, there are, I believe, four different classifications you can have. It’s positive, negative, neutral, and mixed. So it's going through all these. Now, there are 164 of them, and you can see it's taking a second. It's done already, but you can imagine how long this would take if there were, you know, 20 billion of them. If you had to analyze all these, it would take forever, but we can pull out the ones we want, analyze these quickly, and then take a look at the results. So if I run this select statement again, now you can see this new column called sentiment, which contains all the sentiment for each one of these.
      </p>
      <p>
      	And if I do a select with a group by, we can count how many there are of each one. So it looks like I've got 52 positive comments, 22 negative comments, 88 neutral, and two mixed. So this is how people are feeling about the Beyond Burger on this particular day. And I can take this a step farther by creating dashboards. Like if I wanted to open up Tableau here and create a dashboard, which contained the sentiment for the Beyond Burger, I could do that. So opening up Tableau desktop here, and I've created a little dashboard just to give me the results of this table. And here we can see it in a pie chart. It looks like most of the comments are neutral. A lot were positive, only 22 negative. So I'd say the sentiment is people seem to like it, I guess, overall. And that is how you combine a data warehouse with a machine learning service. So this will give you additional insights into your data that you would not have been able to get otherwise. And by leveraging the data warehouse, we can filter these large datasets to more manageable sizes so that we can process everything quickly. And we don't have to spend a fortune doing it.
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
				content: 'Accelerate machine learning with Yellowbrick Data Warehouse' }
    ]
  }
}
</script>



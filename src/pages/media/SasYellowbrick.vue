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
			<h1>Running High-Speed Analytics with SAS and Yellowbrick Hybrid Cloud Data Warehouse</h1>
		</div>
	</section>

	<section class="bg-white py-12 md:py-20 z-10">
		<div class="w-full max-w-800 mx-auto">
			<BaseWistia id="zhxu93wd5o" />
		</div>
	</section>

	<section class="bg-white py-12 md:pt-0 md:pb-20 z-10 ">
    <div class="w-full max-w-1200 mx-auto px-8">
      <h3 class="accent-heading">Transcript</h3>
      <p>
        <span class="speaker">Rashmi Nair: </span>Hi, I'm Rashmi Nair. I work as a global technical Alliance manager at SAS, and today we have Ray Canuel with us.
      </p>
      <p>
        <span class="speaker">Ray Canuel: </span>Hi, I'm Ray and I work at Yellowbrick and help partners and customers integrate with Yellowbrick’s technology.
      </p>
      <p>
        <span class="speaker">Rashmir: </span>So today we are going to show how to connect to Yellowbrick from SAS, how to load data into Yellowbrick and how to run queries from SAS and connect to Yellowbrick. So, Ray, can you bring up SAS and let's show them how to connect to Yellowbrick from SAS.
      </p>
      <p>
        <span class="speaker">Ray: </span>Sure. This is a base SAS running in a windows environment. And if I were to go in and actually create a library, I would connect into the engine that is defined as PostgreSQL. One of the things that we do in Yellowbrick  is we keep open standard PostgreSQL drivers connectivity in the Yellowbrick. I would give this a name and give it the credentials, and then we would be able to connect in the Yellowbrick. I've done this previously with this Ybsas_rt for retail. If we could open up this connection. Now we've connected the Yellowbrick and you see all the different tables within this database. Specifically, we're going to ask some questions around this table called SAS store returns and maybe zoom around the reasons why these items are being returned to all these stores.
      </p>
      <p>
        <span class="speaker">Rashmir: </span>That's great. Can we run a simple query from SAS using those live limited interface engine?
      </p>
      <p>
        <span class="speaker">Ray: </span>Sure. Here's this return count. So here's the same library. YB SAS retail. And if we just take this and run this, we'll see it comes back very quickly. And there are a billion records in this table.
      </p>
      <p>
        <span class="speaker">Rashmir: </span>Awesome. Hope we load some data into Yellowbrick. I've heard some pretty impressive numbers, loading Yellowbrick from SAS.
      </p>
      <p>
        <span class="speaker">Ray: </span>Yeah. So in another... we do this really, really well. There's another Linux environment that I have where SAS is installed, and I have got three CSV files. They all total up to 1 billion records and I've got a billion records in the database. I have a SAS program. In the SAS program, I'm connected to Yellowbrick via ODBC on this Linux environment. And I'm kicking off a high speed load within SAS. And so if I'm going to kick this off and just run this at the command line, and you're going to see some output that's kicked off, this is the output that comes from YB load. And what you see from here is two metrics that I'd like to look at is the number of records per second. And you can see this inching up. It's already north of 3 million records per second.
      </p>
      <p>
        And the other one is the number of bytes per second, the megabytes per second. This is a Linux client to the Yellowbrick server. And so it's connected via a single 10 gigabit link. The great thing about Yellowbrick is we load it wire speeds. And so one 10 gigabit link really is one gigabyte per second, which you can go through that pipe and you can see we're vastly getting right up close to that and pushing about 6 million records per second. In the back end, the ma management console, I can actually see and monitor things that are happening and I can see the load as it's occurring. Another way I can monitor the load process is I can see it from the back end and see that it's been running for about 50 seconds. So we've already loaded a third of the billing records.
      </p>
      <p>
        <span class="speaker">Rashmir: </span>Okay. While this is running, how about we run a SAS proc freq to see how many, how much data got loaded?
      </p>
      <p>
        <span class="speaker">Ray: </span>That's a good question. So what we'll see is if I have that right here, this is going against the same library, going against those reason codes. And if I run this, you're going to see two things. One, it runs real fast and as it runs, we're only seeing the billion records. Okay. And then, and that's because the data isn't committed yet. This load is a transaction in itself and it has not been committed. So we don't do any dirty region Yellowbrick. Anything that's connected and running queries, there's only going to see committed data. Okay. But what's interesting. You should see this little blip right here. This is that query that occurred. And so if I click on that and zoom into that, this is the SQL that is generated by SAS to pass through, into Yellowbrick from that proc freq. And if you zoom into this plan, you can see for sure enough, we're going after a billion records to be able to do a frequency across all those recent codes.
      </p>
      <p>
        Okay. And if you look, the load is just about ready to be finished, but I could also go back and even rerun the counts. And you're still going to see a billion records there. And I think once that load finishes in seven seconds, cause that's one of the great things about Yellowbrick too. You can do a bulk load load, a billion records, and the date is available immediately afterwards. There's no statistics to run. There's no indexing. There's nothing like that. So if we go and now that we have this, let's rerun this, we should see a billion records because now they're committed and now let's rerun that proc frequency again. And we should see this across 2 billion records. And again, the time is about the same.
      </p>
      <p>
        <span class="speaker">Rashmir: </span>That's a billion records in three minutes. That's really cool. Can we run a complex business query using the SQL pass-through facility.
      </p>
      <p>
        <span class="speaker">Ray: </span>Sure. The data set is a TPC, a benchmark data. There's 99 queries that make up the TPC benchmark. I picked query one right here, which actually shows something very interesting. We're trying to find, you know, count all the customers by state for a given period of time that have returned 20% more often than the average customer. And so you can see right here that this is going against those, that same table that we've been looking at and go ahead and hit run here. Let me just hit run. And so now here it is, I think I ran it twice. And so that came back very, very quickly. If we were to go back to the management console, I can actually see if I can pause this if I want, highlight over it. That query began with a with statement and here I can reformat that. And here's the same query that's running across this period. And now you see something that's much more complex than what we just ran. This is made up of Watts of joins and complicated nested groups by statements. And if I zoom down into the store's returned table, sure enough, there are those 2 billion records and all of this came back very quickly. And I, we capture all the statistics. It came back in under a second, 700 milliseconds on the back.
      </p>
      <p>
        So in summary we made, I think we were able to show you in a short amount of time, a couple of different things. We were able to show how you can connect to Yellowbrick, via standard interface based SAS.
      </p>
      <p>
        <span class="speaker">Rashmir: </span>How fast approx equal or proc free runs against a billion against billions of records and just sub in just a few sub seconds.
      </p>
      <p>
        <span class="speaker">Ray: </span>We were able to show a high speed load. We were able to run a billion loads, a billion records in just under two and a half minutes, and it was available. They were readily available immediately afterwards.
      </p>
      <p>
        <span class="speaker">Rashmir: </span>And then we ran a large analytic query against 2 billion records. And that was also in sub seconds.
      </p>
      <p>
        <span class="speaker">Ray: </span>Exactly. So hopefully this is giving you something to think about and maybe we can dig into some areas of this integration further in an upcoming talk. Thank you very much. 
      </p>
      <p>
        <span class="speaker">Rashmir: </span>Thank you.
      </p>
    </div>
  </section>

	</Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Yellowbrick Hybrid Cloud Data Warehouse and SAS',
    meta: [
      {
				key: 'description',
				name: 'description',
				content: 'Learn how to connect SAS to Yellowbrick Hybrid Cloud Data Warehouse to run high-speed analytics.' }
    ]
  }
}
</script>
<style scoped>

.hero {
  background-image: url(/uploads/images/cloud-recovery-bg.svg);
  background-size: cover;
  background-position: center;
}

.freedom-bg {
  background-image: url(/uploads/images/freedom-bg.svg);
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 45%;
}

.performance-bg {
  background-image: url(/uploads/images/performance-bg.svg);
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 45%;
}

.multi-column {
  column-count: 2;
  column-gap: 2.5rem;
}

@media (max-width: 768px) {
	.multi-column {
		column-count: 1;
		column-gap: 0;
	}
}
.number {
  @apply absolute text-yellow1 rfs-text-7xl font-bold leading-none;
  top: -0.75rem;
  left: -3.5rem;
}

</style>

<template>
  <Layout>
    <section class="hero flex bg-gray-700 py-12 md:py-24 text-white px-6 xl:px-0">
      <div class="flex flex-col max-w-1200 w-full mx-auto z-10">
        <span class="rfs-text-xl text-yellow1 mb-0">Executive Brief:</span>
        <h1 class="m-0 p-0 leading-none w-full sm:w-1/2 md:w-5/12">Yellowbrick for Telecom</h1>
        <a href="/uploads/eb-yb-telecom.pdf" target="_blank" class="button yellow mt-8">Download the PDF</a>
      </div>
    </section>

    <section class="flex py-12 bg-white px-6 xl:px-0">
      <div class="flex flex-col md:flex-row items-start justify-evenly max-w-1200 mx-auto">

        <div class="w-full sm:w-7/12 md:w-2/3 relative pr-0 md:pr-10">
          <h3 class="text-gray-500 mb-8">Overview</h3>
          <p>It’s great to be in the telecommunications business, in which basically every person is a potential consumer. But at the same time, it’s never been a harder business to be in. The pressure is unrelenting: </p>

          <ul class="rfs-text-base">
            <li>
              <strong>Competitive pressure.</strong> There’s never been more competitive pressure, with a consolidated market and telecom companies basically going head-to- head for the same business, putting significant pricing pressure on telecom companies.
            </li>
            <li>
              <strong>Subscriber growth pressure.</strong> At the same time, subscriber growth has plateaued, limiting potential revenue growth at the same time that most customers are expecting an “all-you-can-consume” pricing model. Companies that had been growing at a double-digit pace for years now find themselves in a vastly more competitive arena with fewer growth opportunities and more challenges. And it doesn’t stop there.
            </li>
            <li>
              <strong>Network build-out pressure.</strong> With 5G,telecom companies are facing one of their biggest network build-outs in a decade, requiring a substantial investment during a time when business is flat and prices are being driven down. As a result, telecom companies need to become more efficient than they ever were.
            </li>
            <li>
              <strong>Customer experience pressure.</strong> Last and definitely not least, telecoms have to invest significantly in improving customer experience, everything from the network to the website to the call center, to stay competitive. Poor Net Promoter Scores will drive customers away and cause even more challenges.
            </li>
          </ul>

          <h3>Telecom IT Challenges</h3>
          <p>All those pressures add up to big challenges for telecom companies. Challenges that are only compounded by problems with existing IT infrastructure, especially when it comes to data analytics. While most industries today rely on data and data analytics, perhaps none do it to the level that telecommunications companies do. From business support systems to network operations to customer care to marketing, telecom companies have a greater need than ever before for fast, efficient, data analytics. But, unfortunately, existing solutions are not keeping up. Consider just a few of the business and IT challenges facing most telecommunications companies:</p>
          <ul class="rfs-text-base">
            <li>
              <strong>Exploding data volume.</strong> For telecom companies, data volume is growing like crazy in all four of their core areas: business support systems, network operations, customer care, and marketing. For example, take a CDR on the operations side of the business. In the old days, telecom companies tracked call detail records (CDRs) for calls that might average three-to-five minutes. Anytime a user made a phone call, a discrete CDR was generated. While CDRs are still tracked, today’s users generate considerably more data— perhaps 100 times as much data for the same period of a CDR—during any data usage interaction, such as an Internet search or a click on a Web page. Web usage has caused an explosion of data that telecom companies need to not only capture, but eventually put to work. Unfortunately, that same amount of data growth is happening in the other three areas, and most telecoms’ IT infrastructure is struggling to keep up.
            </li>
            <li>
              <strong>Expanding network infrastructure.</strong> It’s no secret that the next huge jump in mobile communications is here and it’s called 5G. But it’s still a work very much in progress. Telecoms are currently undertaking one of the largest network buildouts ever, pushing more towers and new infrastructure into new locations. And just as 5G will dramatically increase the number of connected devices—everything from cars to medical devices—it will also dramatically increase the amount of data that telecom companies need to manage, analyze, and make business decisions on. Without a new approach to managing and using that new 5G data, telecoms risk being left behind as competitors optimize their networks, products and services, and customer experience. 
            </li>
            <li>
              <strong>Critical need to step up customer experience.</strong> With subscriber growth plateauing and increased competition from other providers, telecom companies need to work harder than ever to retain customers and capture new ones. A key focus of doing that is making the customer experience better, all the way from billing systems to customer support to network operations. To do this effectively requires a massive amount of data analytics and data integration across the enterprise, yet most telecom companies struggle to tie their systems together, effectively use data lakes, or mine customer or network information for insights into making the customer experience better. Without that ability (done in a cost-effective and fast way) telecom companies will struggle to retain customers. 
            </li>
          </ul>

          <h3>Why Yellowbrick</h3>
          <p>For telecoms, the road to addressing these challenges isn’t ripping and replacing, but extending and accelerating, with the Yellowbrick Data Warehouse. Yellowbrick is uniquely qualified to address the data and analytic challenges facing telecommunications companies in three critical ways:</p>
          <ul class="rfs-text-base">
            <li>
              <strong>It radically expands data bandwidth to unleash data analytics and data trapped in data lakes.</strong> Yellowbrick is a hybrid cloud data warehouse that radially expands data bandwidth to support lightning- fast queries on petabytes of data for thousands of concurrent users. Yellowbrick allows organizations to consolidate all their corporate data, regardless of where it resides, into a single infrastructure for easy, fast, access. The result is a solution that runs analytics 10x-100x faster than alternatives, with predictable performance, scalability, and costs. Rather than shifting customer data into and out of data lakes or other data stores, Yellowbrick’s wide bandwidth data architecture allows telecoms to keep significantly more “hot” data on tap, instantly available for data analysis, modeling, or reports, enabling faster and more thorough business decisions based on larger data sets.
            </li>
            <li>
              <strong>It’s designed for 5G and hybrid cloud.</strong> 5G networks are not only going to deliver an explosion of data delivery, but they’ll also require data analytics at multiple layers, including the edge. Since Yellowbrick was built from the ground up for hybrid cloud, it provides the perfect architecture for delivering and tying together data analytics across the enterprise and network—from the back office to 5G network edge. As a native hybrid cloud solution, Yellowbrick runs identically everywhere (from on-prem to the cloud to the edge), with minimal management. Furthermore, it allows workloads that need to stay on the edge for data gravity reasons to stay that way, while de-risking migration of other workloads to the cloud.
            </li>
            <li>
              <strong>100X performance transforms customer experience.</strong> With so many competitive pressures, customer experience has never been more important to telecommunications companies. Rather than shifting customer data into and out of data lakes or other data stores, Yellowbrick’s lightning-fast, wide-bandwidth data architecture enables telecom companies to integrate customer and network analytics workloads to identify potential customer experience problems.
            </li>
          </ul>

          <p>With Yellowbrick, retailers can get a true 360-degree view of the customers via real-time access to more transactions than ever before.</p>

        </div>

        <!-- RIGHT COLUMN -->

				<div class="w-full sm:w-5/12 md:w-1/3 relative">
          <span class="accent yellow z-10"></span>
          
          <div class="bg-gray-500 shadow-lg p-10 relative text-white performance-bg">
            <h3 class="rfs-text-7xl font-semibold leading-none text-yellow1 my-0">100X</h3>
            <h3 class="rfs-text-4xl font-medium ">Data Analytics Performance for Faster, Richer Results from Telecom Data</h3>
          </div>

          <div class="bg-white shadow-lg p-10 relative text-gray-500 performance-bg mt-12">
            <h6 class="accent-heading">Challenges:</h6>
            <ul class="rfs-text-base">
              <li>Exploding data volume</li>
              <li>Expanding network infrastructure</li>
              <li>Critical need to step up customer experience</li>
            </ul>
          </div>

          <div class="bg-gray-500 shadow-lg p-10 relative text-gray-100 freedom-bg mt-12">
            <h6 class="accent-heading">Case Study</h6>
            <p class="italic rfs-text-2xl">For one top-10 telecom company, Yellowbrick has safeguarded millions of dollars a month that were at risk with the legacy Netezza system, which was too slow to validate revenue and reconcile payments to retailers supplying pre-paid mobile cards.</p>
            <a href="/resources/case-studies/teoco/" class="button yellow">Read Case Study</a>
          </div>

          <div class="bg-white shadow-lg p-10 relative text-gray-500 performance-bg mt-12 relative">

          <span class="accent z-10"></span>
            <h3>Yellowbrick for Telecom</h3>
            <p>Yellowbrick’s unique solution provides a path for telecommunications companies to safely transform their data and analytics infrastructure while leveraging existing systems and data sources. Its highly scalable architecture delivers the fastest data warehouse performance at enterprise scale, while reducing risk and providing a much higher price/performance ratio than existing solutions.</p>
            <p>Whether you need to optimize your customer experience, generate profitable business decisions from data trapped in of data lakes, or take full advantage of all the possibilities of new 5G networks, Yellowbrick’s native hybrid cloud data warehouse answers the call.</p>
          </div>

        </div>
      </div>
    </section>

    <MoreInfo />

  </Layout>
</template>

<script>
import MoreInfo from '~/components/MoreInfo.vue'

export default {
  metaInfo: {
    title: 'Yellowbrick for Telecom',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: ' Yellowbrick is uniquely qualified to address the data and analytic challenges facing the telecom industry.' }
    ]
  },
  components: {
    MoreInfo
  }
}
</script>

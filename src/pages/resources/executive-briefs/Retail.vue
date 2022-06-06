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
        <h1 class="m-0 p-0 leading-none w-full sm:w-1/2 md:w-5/12">Yellowbrick for Retail</h1>
        <a href="/uploads/eb-yb-retail.pdf" target="_blank" class="button yellow mt-8">Download the PDF</a>
      </div>
    </section>

    <section class="flex py-12 bg-white px-6 xl:px-0">
      <div class="flex flex-col md:flex-row items-start justify-evenly max-w-1200 mx-auto">

        <div class="w-full sm:w-7/12 md:w-2/3 relative pr-0 md:pr-10">
          <h3 class="text-gray-500 mb-8">Overview</h3>
          <p>For mass-market retailers, club stores, grocery stores, drug stores, department stores, specialty stores, and eCommerce companies, quickly and cost effectively analyzing an ever-expanding amount of data has never been more important. This is particularly critical as retailers push forward with delivering an omnichannel experience for customers, thus creating the need for an omnichannel view of their customers.</p>

          <p>But it’s never been harder and more complex. Customers, sales, products, merchandise, and channels have always been the core drivers of a retail business, but now those drivers are surrounded by an ever-expanding deluge of related data—data that retailers must quickly and cost-effectively analyze and act upon if they want to stay competitive. And they need to do it within a limited budget.</p>

          <p>Regardless of the type of retailer you are, effective and efficient data analytics is essential to a wide range of core business functions, including:</p>

          <ul class="rfs-text-base">
            <li>
              <strong>Customers and sales.</strong> From identifying and acquiring prospective customers to engaging, servicing, and retaining existing customers, retailers rely on data-driven reports, scorecards, and predictive models. For example, identifying incremental growth opportunities is vital for most retailers.           
            </li>
            <li>
              <strong>Merchandising.</strong> Nothing could be more core to a retail business than the products it sells. But today’s merchandising is driven by reports, scorecards, and predictive models to help determine the ideal products to sell, the right product mix, the placement and pricing, the branded versus private- label mix, and the optimal margin mix. At the same time, supplier scorecards help monitor and evaluate vendor performance.           
            </li>
            <li>
              <strong>Supply chain.</strong> Retailers can’t open their stores until the supply chain delivers the goods. That’s why data-driven supply chain reports, scorecards, and predictive models are necessary to maintain profitability.           
            </li>
            <li>
              <strong>Financials.</strong> While financial reports aren’t retailers’ core business, they’re the key to meeting internal and external stakeholder expectations. Retailers need to be able to analyze business performance quickly and easily by store type or geography, categories of goods, customer segments, and a growing list of other variables.           
            </li>
          </ul>

          <p>For even the most enlightened retailers, this tremendous amount of data has overwhelmed existing IT infrastructures, systems, and data architectures. And that’s not even considering the expansion of real-time data sources or the potential avalanche of information from other available sources such as IoT.</p>

          <h3>The Retail Challenge</h3>
          <p>Consistent with their long-standing emphasis on managing all costs, when it comes to data and analytics most retail companies are trying to do more (more analysis of more data) with less (IT resources that can’t seem to keep up with data growth). Consider just a few of the reasons existing platforms are failing retailers:</p>
          <ul class="rfs-text-base">
            <li>
              <strong>Not fast enough at scale.</strong> Whether it’s supplier scorecards or weekly reports, retailers need to run reams of reports to gain visibility into vendor, store, and product performance. Yet too often systems can’t keep up with existing reports, let alone new ones that span multiple months of data. If business decisions are waiting on report generation, a retailer is falling behind. 
            </li>
            <li>
              <strong>Too many users.</strong> The adage that time is money certainly applies to retail. Yet many retailers have systems that slow down or deliver unpredictable performance when they become overloaded with reports or users. Reporting times may vary based on system performance, leading to critical lag times in business analysis. 
            </li>
            <li>
              <strong>Data frozen in data lakes.</strong> Data lakes may be good at storing data, but most retailers are realizing it’s much too hard to turn all that data into valuable business information they can act upon to make business decisions. Using data lakes for business analytics too often turns out to be time-consuming, difficult, or unpredictable.
            </li>
            <li>
              <strong>An increasing amount of real-time and sensor data.</strong> Retailers, more than many other industry players, are embracing new sources of real-time data, from in-store sensors to supply chain IoT instrumentation. Yet all that new data streaming into a company matters only if there are easy, fast, and reliable ways to use it to enable business decisions. 
            </li>
            <li>
              <strong>IT initiatives trapped between the cloud and on-premises systems.</strong> Many retailers are trapped between deploying on-premises IT solutions and cloud-based solutions, increasing IT complexity. Business transformation initiatives to make IT systems more agile and resilient may lead to cloud-based solutions, but most retailers are encountering significant risks and challenges in to moving to the cloud. 
            </li>
          </ul>

          <h3>Why Yellowbrick</h3>
          <p>For retail companies, the road to addressing these challenges isn’t ripping and replacing, but extending and accelerating, with the Yellowbrick Hybrid Cloud Data Warehouse. Yellowbrick reduces transformation risk while delivering better performance. The Yellowbrick solution for retail is unique in two critical ways:</p>
          <ul class="rfs-text-base">
            <li>
              <strong>100X performance, support for 1000s of users on PBs of data, and no hidden costs.</strong> Yellowbrick Data recognized that was needed for a modern data warehouse was not just an optimization of existing data warehouses, but a complete re-architecture of them--with the critical component being a radical expansion of data bandwidth far beyond traditional boundaries. The result was a modern hybrid cloud data warehouse that radically expands data bandwidth to support lightning-fast queries on petabytes of data for thousands of concurrent users. Yellowbrick allows organizations to consolidate all their corporate data, regardless of where it resides, into a single infrastructure for easy, fast access. It accelerates standards-based access to business analytics and reporting data spread across public clouds, private clouds, or existing on-premises infrastructures, running analytics 10x to 100x faster than competitive legacy platforms at a fraction of the cost (and without the hidden costs of cloud-only options), while providing unparalleled support for concurrency and scale.
            </li>
            <li>
              <strong>Designed for hybrid cloud.</strong> Yellowbrick was built from the ground up for hybrid cloud, allowing retailers to unify their on-premises and cloud analytics to create a flexible, predictable, resilient hybrid platform without the risk. Unlike purely on-premises or cloud-native options, Yellowbrick lets you natively run mixed workloads wherever it makes the most economic sense: in on-premises data centers, private clouds, and/or from any major public cloud platform with no cloud lock-in. It supports the applications, users, and public clouds of your choice. Yellowbrick’s native hybrid-cloud architecture eliminates risk for retailers by providing a flexible deployment path to the cloud that complements and accelerates existing business transformation initiatives.
            </li>
          </ul>

          <p>With Yellowbrick, retailers can get a true 360-degree view of the customers via real-time access to more transactions than ever before.</p>

        </div>

        <!-- RIGHT COLUMN -->

				<div class="w-full sm:w-5/12 md:w-1/3 relative">
          <span class="accent yellow z-10"></span>
          
          <div class="bg-gray-500 shadow-lg p-10 relative text-white performance-bg">
            <h3 class="rfs-text-7xl font-semibold leading-none text-yellow1 my-0">100X</h3>
            <h3 class="rfs-text-4xl font-medium ">Data Analytics Performance for Faster, Richer Results from Retail Data</h3>
          </div>

          <div class="bg-white shadow-lg p-10 relative text-gray-500 performance-bg mt-12">
            <h6 class="accent-heading">Challenges:</h6>
            <ul class="rfs-text-base">
              <li>Not fast enough at scale</li>
              <li>Support for larger data sets</li>
              <li>Too many users</li>
              <li>Data frozen in data lakes</li>
              <li>An increasing amount of real-time and sensor data</li>
              <li>IT initiatives trapped between the cloud and on-premises systems</li>
            </ul>
          </div>

          <div class="bg-gray-500 shadow-lg p-10 relative text-gray-100 freedom-bg mt-12">
            <h6 class="accent-heading">Case Study</h6>
            <p class="italic rfs-text-2xl">Symphony RetailAI had to limit reports that were run on its legacy Netezza platform up to 500 times daily to 10% data sets. Today, on Yellowbrick, the company is running those reports with 100% data sets and delivering them twice as fast.</p>
            <a href="/resources/case-studies/symphony-retail-ai/" class="button yellow">Read Case Study</a>
          </div>

          <div class="bg-white shadow-lg p-10 relative text-gray-500 performance-bg mt-12 relative">

          <span class="accent z-10"></span>
            <h3>Yellowbrick for Retailers</h3>
            <p>Yellowbrick’s unique solution provides a path for retailers to safely transform their data and analytics infrastructure while leveraging existing systems and data sources. Its highly scalable architecture delivers significantly faster performance at enterprise scale, while reducing risk and providing a much higher price/ performance ratio than other solutions. In short, only Yellowbrick:</p>

            <ul class="rfs-text-base">
              <li>Enables easy access to high-quality, analysis-ready data across every dimension of the business/ enterprise, regardless it’s on premises or needs to be accessed from a major public cloud.</li>
              <li>Provides business users, analysts, and data scientists with access to current (real-time) data from internal, public, and commercial sources with the ability to view/model/scorecard the data however they want in order to help accelerate the pace of their business in response to market dynamics.</li>
              <li>Enables retailers to leverage public clouds to efficiently and cost-effectively scale up when required as well as take advantage of existing cloud-based apps and capabilities, reducing time and risk.</li>
            </ul>
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
    title: 'Yellowbrick for Retail',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: ' Yellowbrick is uniquely qualified to address the data and analytic challenges facing the retail industry.' }
    ]
  },
  components: {
    MoreInfo
  }
}
</script>

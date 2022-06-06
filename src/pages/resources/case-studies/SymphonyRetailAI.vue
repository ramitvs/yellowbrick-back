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
  background-size: 25%;
}

.performance-bg {
  background-image: url(/uploads/images/performance-bg.svg);
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 60%;
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
        <span class="rfs-text-xl text-yellow1 mb-0">Case study:</span>
        <div class="image-container">
          <img src="/uploads/images/customers/symphony-light.svg" class="w-1/4 my-8" alt="Symphony RetailAI seeks help from Yellowbrick for customer growth" />
        </div>

        <h1 class="m-0 p-0 leading-none rfs-text-2xl w-full sm:w-1/2 md:w-5/12">Yellowbrick Data Warehouse beats legacy and cloud-only options on price/performance for delivering richer retail insights, faster</h1>
      </div>
    </section>

    <section class="flex py-12 bg-white px-6 xl:px-0">
      <div class="flex flex-col sm:flex-row items-start justify-evenly max-w-1200 mx-auto">

        <div class="w-full md:w-7/12 p-0 md:pr-10 relative">
          <Details 
            industry="Retail"
            business-use-case="Marketing & Supply Chain Analytics"
            tech-use-case="Enterprise Data Warehouse"
          />

          <h4 class="text-gray-500">Overview</h4>
          <div class="text-gray-500 mb-8 md:mb-0">
            <p>Symphony RetailAI helps retailers and CPG manufacturers drive profitable revenue growth through AI-enabled decision-making. Its customers include 15 of the world’s 25 largest grocery retailers, thousands of retail brands, and hundreds of national and regional chains.</p>

            <p>To uncover the insights that its customers require, Symphony RetailAI must continually ingest and analyze terabytes of customer data into its 700TB data warehouse environment. And in the fast-moving consumer goods industry that Symphony RetailAI serves, the company must turn those mountains of raw data into actionable insights and deliver them to customers as rapidly as possible.</p>

            <h4 class="text-gray-500">Legacy and cloud-only options failing to deliver</h4>
            <p>In 2018, Symphony RetailAI began looking for a data warehousing platform that could help it scale for customer growth and minimize the time required to get insights to customers. That meant not only reducing query times, but also less time required to ingest that data, analyze it, and make the results accessible.</p>

            <p>At the time, Symphony RetailAI relied on a range of different data warehousing platforms, including Netezza, AWS Redshift, SQL Server, and 1010data. However:</p>

            <ul class="rfs-text-base">
              <li>Redshift costs were high and cube build processes took up to 20 hours, making it hard to increase functionality without violating SLAs.</li>
              <li>Queries on 1010data were also slow, and its custom programming language made development difficult.</li>
              <li>Processing took too long on Netezza, which was already at full capacity—and would soon be EOL’d.</li>
            </ul>

            <img src="/uploads/images/YB_SymphonyRetailAI.png" alt="Netezza | Amazon | 1010Data | SQL Server | Yellowbrick comparison" class="my-8 w-full" />
            <h4 class="text-gray-500">Yellowbrick removes the limits</h4>
            <p>The company considered going cloud-only with Snowflake or Google BigQuery, but neither offered the predictable price/performance of Yellowbrick. For example, although one vendor promised on-demand scalability, Symphony found that it would either need to subject customers to unacceptable 12-15 second delays for real-time queries as instances in the cloud were scaled-up, or would need to pay four times as much as Yellowbrick to keep those instances running 24x7.</p>

            <p>Symphony RetailAI moved all workloads from Netezza, Redshift, and 1010data to Yellowbrick, with results including:</p>
            <ul class="rfs-text-base">
              <li><strong>Faster, more accurate reports and queries to get richer insights to customers more quickly</strong>. When on Netezza, Symphony RetailAI had to limit reports that were run up to 5,000 times daily to 10% data sets. Today, on Yellowbrick, the company is running those reports with 100% data sets and delivering them twice as fast. Compared to AWS Redshift, cubes built on Yellowbrick completed 3X-5X faster. And compared to 1010data, Yellowbrick is 4X-5X faster.</li>
              <li><strong>Freedom to deploy anywhere</strong>. Yellowbrick’s small form factor lets Symphony RetailAI easily run workloads where its customers are, instead of shipping raw data and query results back-and-forth across the globe.</li>
              <li><strong>Less data movement.</strong> Strong performance under mixed workloads has helped Symphony RetailAI streamline processes and reduce data movement. It’s now delivering new insights to customers up to 12 hours faster each week by avoiding the need to move hundreds of gigabytes of data to the cloud before it can be queried.</li>
              <li><strong>Ease of migration.</strong> Compared to what would have been required on other platforms, the company’s move to Yellowbrick has been fast and easy, with few if any modifications needed. </li>
            </ul>
          </div>
        </div>
				<div class="w-full md:w-5/12 relative">
          <h3 class="text-gray-500 rfs-text-4xl font-semibold mb-8 sm:mt-0 accent-heading">Key Insights</h3>
          <FeaturedStat
            alt-attribute="Symphony Retail AI Experienced speeds 10X faster than before Yellowbrick" 
            icon-name="tacometer.svg"
            featured-title="10X Faster"
            featured-phrase="10X faster queries at a fraction of the cost" 
          />

          <FeaturedStat
            alt-attribute="Symphony Retail AI experienced 10X more data accuracy" 
            icon-name="target.svg"
            featured-title="10X Accuracy"
            featured-phrase="10X more accuracy" 
          />

          <FeaturedStat
            alt-attribute="12 hours/week removed from data processing time" 
            icon-name="clock.svg"
            featured-title="12 hours/week"
            featured-phrase="12 hours/week removed from data processing time" 
          />

          <div class="bg-white shadow-lg p-10 relative text-gray-500 performance-bg pb-16 relative mt-12">
            <span class="rfs-text-3xl italic">"Yellowbrick has turned out to be a very fast, cost-effective, and reliable system, enabling us to provide all our customers with richer insights more quickly."</span>
            <p class="mt-8">- Nigel Pratt, SVP Development<br>Symphony RetailAI</p>
            <span class="accent z-10"></span>
          </div>
        </div>
      </div>
    </section>
    <MoreInfo />
  </Layout>
</template>

<script>
import MoreInfo from '~/components/MoreInfo.vue'
import FeaturedStat from '~/components/FeaturedStat.vue'
import Details from '~/components/CaseStudyDetails.vue'

export default {
  metaInfo: {
    title: 'Symphony RetailAI Chooses Yellowbrick for Richer, Quicker Insights',
    meta: [
      {
				key: 'description',
				name: 'description',
				content: 'Yellowbrick Data dramatically improved the performance over SymphonyAI\'s existing system, enabling them to enhance the customer experience and accelerate time to insight by 10 times.' }
    ]
  },
  components: {
    Details,
    FeaturedStat,
    MoreInfo
  }
}
</script>

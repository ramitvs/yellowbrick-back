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
        <h1 class="m-0 p-0 leading-none w-full sm:w-1/2 pb-5">Top-10 Financial Services Company Unlocks Data Lake Insights for 1000s of Users</h1>
        <h2 class="m-0 p-0 leading-none rfs-text-xl w-full sm:w-1/2">Yellowbrick Data Warehouse helps major financial services provider make data-driven decisions 100X faster across the business</h2>
      </div>
    </section>

    <section class="flex py-12 bg-white px-6 xl:px-0">
      <div class="flex flex-col sm:flex-row items-start justify-evenly max-w-1200 mx-auto">

        <div class="w-full md:w-7/12 p-0 md:pr-10 relative">
          <Details 
            industry="Financial Services"
            business-use-case="Finance/Compliance, Merchant Reporting, Customer Analytics, Consumer Loan Analysis, and more"
            tech-use-case="Data Lake Augmentation, Enterprise Data Warehouse"
          />

          <h4 class="text-gray-500">Overview</h4>
          <div class="text-gray-500 mb-8 md:mb-0">
            <p>Every day, this multibillion-dollar company ingests data about millions of transactions into a data warehouse environment to support partner and co-branding programs, merchant services, reward points programs, and more. Thousands of analysts require immediate access to this data throughout the day, with workloads highly mixed.</p>
          </div>


          <h4 class="text-gray-500">Too many legacy platforms, not enough speed</h4>
          <div class="text-gray-500 mb-8 md:mb-0">
            <p>Previously, the company used Netezza, DB2, and Apache Hive to access and analyze data in a MapR-based data lake. Instead, the company envisioned the use of a single modern data warehouse platform to meet speed, scalability, and price/performance requirements for all its use cases.</p>

            <ul class="rfs-text-base">
              <li>Previous platforms couldn’t adequately support thousands of users running mixed workloads on large data sets, with users becoming frustrated.</li>
              <li>Some data loads took multiple hours, while some queries completed in minutes (or if at all).</li>
              <li>Disparate systems added to management complexity and overhead.</li>
            </ul>
          </div>

          <h4 class="text-gray-500">Faster analysis on more data with Yellowbrick</h4>
          <div class="text-gray-500 mb-8 md:mb-0">
            <p>After evaluating Yellowbrick, Greenplum, Vertica, MemSQL, Databricks, IBM, and Teradata on four criteria (performance, concurrency, ease of use, and ease of migration), the company selected Yellowbrick after a successful POC in which a single Yellowbrick Data Warehouse instance beat a 20-rack Teradata 6800 in 238 out of 240 queries. Yellowbrick is now the company’s analytics platform of record for Accounts Receivable/Compliance, Merchant Reporting, Credit Card Rewards Points Calculation, and Consumer Loan Analysis, with additional applications under consideration.</p>
            <img src="/uploads/images/DataLakeArchitecture_Graphic.png" alt="Architecture Overview" class="my-8 w-full" />
            <h4 class="text-gray-500">Results include:</h4>
            <ul class="rfs-text-base">
              <li><strong>Faster decision making across the business</strong>, with some queries running up to 100X faster across multiple departments at a fraction of the cost-per-query.</li>
              <li><strong>More accurate results</strong>, with five years of transactions (totaling nearly 2PB) available for queries.</li>
              <li><strong>30X faster access to new data</strong>, with some data loads that used to take 10 hours now completing in less than 20 minutes and available for queries immediately --enabling much fresher data for analysis. </li>
              <li><strong>Rapid migration (lasting approximately one month)</strong>, with most queries and stored procedures moving to Yellowbrick with minimal changes required.</li>
              <li><strong>Significant data center savings</strong>, achieved through sharply reduced rack space, power, and cooling requirements</li>
            </ul>
          </div>
        </div>

				<div class="w-full md:w-5/12 relative">
          <h3 class="text-gray-500 rfs-text-4xl font-semibold mb-8 sm:mt-0 accent-heading">Key Insights</h3>
          <FeaturedStat
            alt-attribute="100x faster queries at a fraction of the cost"
            icon-name="tacometer.svg"
            featured-title="100X Faster"
            featured-phrase="100x faster queries at a fraction of the cost"
            first="true"
          />

          <FeaturedStat
            alt-attribute="3500+ users running mixed workloads"
            icon-name="personnel.svg"
            featured-title="3500+ Users"
            featured-phrase="3500+ users running mixed workloads"
          />

          <FeaturedStat
            alt-attribute="30X faster load times"
            icon-name="stop-watch.svg"
            featured-title="Faster Load Times"
            featured-phrase="30X faster load time"
          />

          <FeaturedStat
            alt-attribute="5 years of transactions available for analysis"
            icon-name="clock.svg"
            featured-title="5 Years of Data"
            featured-phrase="5 years of transactions available for analysis"
          />
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
    title: 'Case Studies: Top 10 Financial Services Company',
    meta: [
      {
				key: 'description',
				name: 'description',
				content: 'Yellowbrick helped one of the world’s largest financial services companies to migrate off Netezza and see 100X speed increase in queries and allow 1000s of concurrent users.' }
    ]
  },
  components: {
    Details,
    FeaturedStat,
    MoreInfo
  }
}
</script>

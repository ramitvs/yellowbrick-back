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
        <span class="rfs-text-xl text-yellow1 mb-0">Migration Guide:</span>
        <h1 class="m-0 p-0 leading-none w-full sm:w-1/2 md:w-5/12">Data Lake Augmentation</h1>
        <a href="/uploads/eb-data-warehouse-modernization.pdf" target="_blank" class="button yellow mt-8">Download the PDF</a>
      </div>
    </section>

    <section class="flex py-12 bg-white px-6 xl:px-0">
      <div class="flex flex-col md:flex-row items-center justify-evenly max-w-1200 mx-auto">
        <div class="w-full md:w-full relative pr-0 md:pr-10">
          <h3 class="text-gray-500 mb-8">Overview</h3>
          <p>The original promise of the data lake was to provide low-cost storage of all enterprise data where it could be subsequently analyzed in place. In reality, although an effective approach to low-cost storage of un-/semi- structured enterprise data, data lakes haven’t met demands for large-scale, real-time analytics, including support for concurrent BI users in great numbers, sophisticated ad hoc queries, or data-intensive reports.</p>

          <h3>Challenges</h3>
          <p class="mb-0">As a result, many enterprises have the following types of challenges:</p>
          <ul class="rfs-text-base">
            <li><strong>People: </strong> The resources and skill sets required for managing data lakes can be hard to find and expensive.</li>
            <li><strong>Process:</strong> Integrating the data lake with existing analytic systems, such as BI and reporting tools, usually requires time-consuming operational tasks.</li>
            <li><strong>Technology: </strong> The hardware costs associated with data processing to keep the data lake viable can add up over time, and even with continual investment, time-to-insight will be slow.</li>
          </ul>
        </div>

      </div>
    </section>

    <section class="flex py-8 md:pt-0 bg-white px-6 xl:px-0">
      <div class="flex-1 justify-center max-w-1200 mx-auto">

        <div class="pt-6 sm:pt-0 pb-16 px-0 sm:px-10">
          <h4 class="accent-heading mb-6">A Modern Data Warehouse with Yellowbrick</h4>
          <img src="/uploads/images/data-lake-diagram.png" class="w-full" alt="modern data warehouse" />
        </div>

      </div>
    </section>

    <section class="flex py-12 bg-white px-6 xl:px-0">
      <div class="flex flex-col max-w-1000 mx-auto">
          
        <h3>Yellowbrick Solution</h3>
        <p>Yellowbrick is an innovative new data analytics solution for on-premises, hybrid, and multi-cloud deployments that removes the processing bottlenecks that have throttled data-driven insights from data lakes and legacy data warehouses. It enables lightning-fast SQL queries at petabyte scale, letting up to thousands of concurrent users answer the hardest questions at the speed of thought using common BI and data science tools -- no more waiting on slow, unreliable, and hard-to-manage approaches.</p>
        <p class="mb-0">Only Yellowbrick lets you:</p>
        <ul class="rfs-text-base">
          <li>
            <strong>Get more value from data immediately</strong><br>
            Immediately query data in multiple formats, ingested from any data lake source at industry-leading volumes. And Yellowbrick works seamlessly with common enterprise data integration tools such as Informatica, Talend, and Denodo.         
          </li>
          <li>
            <strong>Enables thousands of analysts to run queries at lightning speed</strong><br>
            Yellowbrick delivers unparalleled predictable performance (in milliseconds)—with up to orders of magnitude more speed than alternatives--for even the most complex workloads, all while servicing up to thousands of concurrent users. 
          </li>
          <li>
            <strong>Uses investments in familiar data analytics tools</strong><br>
            Yellowbrick works seamlessly with leading reporting, BI, and data science tools, including Tableau, SAS, Microsoft Power BI, MicroStrategy, Python, R, and more.
          </li>
          <li>
            <strong>Ensure flexibility through support for hybrid and multi-cloud</strong><br>
            Yellowbrick lets you natively run mixed workloads wherever it makes the most economical sense: in on-premises data centers, private clouds, or any major public cloud platform (AWS, Microsoft Azure, and Google Cloud). So, you can transition workloads to any cloud on your own schedule.
          </li>
        </ul>

        <h3>Get Started</h3>
        <p>Yellowbrick Data empowers companies to make faster decisions with all of their data. Built for enterprises and the hybrid cloud, the Yellowbrick Data Warehouse deploys powerful analytics anywhere, with best in-class economics.</p>
      </div>
    </section>



    <MoreInfo />

  </Layout>
</template>

<script>
import MoreInfo from '~/components/MoreInfo.vue'

export default {
  metaInfo: {
    title: 'Teradata Migration Guide',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'Migrating Teradata workloads to Yellowbrick is a seamless process. Yellowbrick is the only data warehouse that can manage your very large data sets with unparalleled performance.' }
    ]
  },
  components: {
    MoreInfo
  }
}
</script>

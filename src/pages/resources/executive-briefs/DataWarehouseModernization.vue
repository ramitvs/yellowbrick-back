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
        <span class="rfs-text-xl text-yellow1 mb-0">Executive Brief:</span>
        <h1 class="m-0 p-0 leading-none w-full sm:w-1/2 md:w-5/12">Data Warehouse Modernization</h1>
        <a href="/uploads/eb-data-warehouse-modernization.pdf" target="_blank" class="button yellow mt-8">Download the PDF</a>
      </div>
    </section>

    <section class="flex py-12 bg-white px-6 xl:px-0">
      <div class="flex flex-col md:flex-row items-center justify-evenly max-w-1200 mx-auto">
        <div class="w-full md:w-7/12 relative pr-0 md:pr-10">
          <h3 class="text-gray-500 mb-8">Overview</h3>
          <p>The status quo approach to data warehousing is out of step with the times: Many enterprises can’t take full advantage of powerful analytic and BI tools and skill sets because their legacy data warehouse is too slow, too expensive to scale, and too difficult to manage. And when real-time decisions are needed—those are insights you can’t afford to lose.</p>

          <h3>Challenges</h3>
          <p class="mb-0">As a result, many enterprises have the following types of challenges:</p>
          <ul class="rfs-text-base">
            <li><strong>Inability to scale:</strong> Data warehouse performance withers under the stress of increasing numbers of users, growing data volumes, and more complex and mixed workloads.</li>
            <li><strong>Rising expenses:</strong> The hardware costs associated with scaling a data warehouse can be high, putting the IT organization in a downward spiral of growing CAPEX and shrinking ROI.</li>
            <li><strong>Resource scarcity:</strong> Managing a legacy data warehouse is time-consuming, locking valuable DBA resources into mundane tasks like tuning queries and building indexes.</li>
            <li><strong>Deployment inflexibility:</strong> Limited deployment options can block the migration of workloads to the cloud. </li>
          </ul>
        </div>
				<div class="w-full md:w-5/12 relative">
          <span class="accent z-10"></span>
          <div class="bg-white shadow-lg p-10 relative text-gray-500 performance-bg">
            <span class="rfs-text-3xl italic">"We extensively tested major MPP data warehouse platforms and found Yellowbrick to have the highestperforming, most scalable, and most cost-effective platform for our 300TB environment"</span>
            <p class="mt-8">- Chris Sindoni, Chief Data Officer <br>Allscripts Payer and Life Sciences</p>
          </div>
        </div>

      </div>
    </section>

    <section class="flex py-8 md:pt-0 bg-white px-6 xl:px-0">
      <div class="flex-1 justify-center max-w-1200 mx-auto">

        <div class="pt-6 sm:pt-0 pb-16">
          <h4 class="accent-heading mb-6">A Modern Data Warehouse with Yellowbrick</h4>
          <div class="px-0 sm:px-10 max-w-800 mx-auto">
            <img src="/uploads/images/dwm-diagram.png" class="w-full" alt="modern data warehouse" />
          </div>
        </div>

      </div>
    </section>

    <section class="flex py-12 bg-white px-6 xl:px-0">
      <div class="flex flex-col max-w-1200 mx-auto">
          
        <h3>Yellowbrick Solution</h3>
        <p>Yellowbrick is an innovative data analytics solution for on-prem, hybrid, and multi-cloud deployments that eliminates the need to make trade-offs between performance and scale. And, it’s designed to simplify operations to keep long-term costs under control.</p>
        <p class="mb-0">Only Yellowbrick lets you:</p>
        <ul class="rfs-text-base">
          <li>
            <strong>Enable thousands of analysts to run queries at lightning speed</strong><br>
            Yellowbrick delivers unparalleled predictable performance on petabytes of data—with orders of magnitude more speed than alternatives--for even the most complex and mixed SQL workloads, all while servicing thousands of concurrent users.          
          </li>
          <li>
            <strong>Simplify and streamline data operations</strong><br>
            With Yellowbrick, there’s no need for mundane time-consuming tasks like query tuning and building indexes, and management is done through a clean and simple UI. 
          </li>
          <li>
            <strong>Use investments in familiar ecosystem tools</strong><br>
            Yellowbrick works seamlessly with leading data movement (including Informatica, SyncSort, Talend, and Kafka) and BI and data science (including Tableau, SAS, Microsoft Power BI, MicroStrategy, Python, and R) tools.
          </li>
          <li>
            <strong>Ensure flexibility through support for hybrid and multi-cloud</strong><br>
            Unlike purely on-prem or cloud-native options, Yellowbrick lets you natively run mixed workloads wherever it makes the most economical sense: in on-prem data centers, private clouds, or any major public cloud platform (AWS, Microsoft Azure, and Google Cloud). So, you can transition workloads to any cloud on your own schedule. 
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
    title: 'Data Warehouse Modernization Executive Brief',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'When real-time decisions are needed—you can’t afford to lose an insights. Modernize your data warehouse with Yellowbrick.' }
    ]
  },
  components: {
    MoreInfo
  }
}
</script>

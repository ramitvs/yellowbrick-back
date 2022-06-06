<style scoped>

.hero {
  background-image: url(/uploads/images/cloud-recovery-bg.svg);
  background-size: cover;
  background-position: center;
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

</style>

<template>
  <Layout>
    <section class="hero flex bg-gray-700 py-12 md:py-24 text-white px-6 xl:px-0">
      <div class="flex flex-col max-w-1200 w-full mx-auto z-10">
        <span class="rfs-text-xl text-yellow1 mb-0">Overview:</span>
        <h1 class="m-0 p-0 leading-none w-full sm:w-1/2 md:w-5/12">Achieving Power from Simplicity</h1>
        <a href="/uploads/ov-power-from-simplicity.pdf" target="_blank" class="button yellow mt-8">Download the PDF</a>
      </div>
    </section>

    <section class="py-12 bg-gray-100 px-6 xl:px-0">
      <div class="flex flex-col sm:flex-row max-w-1200 mx-auto">

        <div class="w-full sm:w-7/12 pr-0 sm:pr-12">
          <h3 class="text-gray-500">Power From Simplicity, Performance Without Tuning</h3>
          <p>Yellowbrick Data aims to make analytics and data warehousing simple. Replacing overgrown antiquated systems with a turn-key appliance that uses only 12 inches of rack space, the Yellowbrick Data Warehouse eliminates tasks that consume hours of IT and DBA staff time, all while improving service levels and the quality of insight to business users.</p>

          <h3 class="text-gray-500">Enterprise-Grade Without Compromises</h3>
          <p>The Yellowbrick Data Warehouse offers a fully featured enterprise-grade database. It is not NoSQL, it isn’t “eventually consistent,” and it does not have the restrictions traditional data warehouses have. Some data warehouses run single types of workloads well, but they cannot handle mixed workloads. Others can ingest bulk data but not real-time inserts or do not implement fully ACID transactions. The Yellowbrick Data Warehouse was developed without compromises.</p>
        </div>

        <div class="w-full sm:w-5/12">
          <div class="bg-white p-10 shadow-md performance-bg">
            <h4>Key Highlights:</h4>
            <ul class="rfs-text-base">
              <li>Run mixed analytical workloads all the time</li>
              <li>Eliminate time-consuming job scheduling, tuning and maintenance tasks</li>
              <li>Expand the system by adding capacity and compute without downtime</li>
              <li>Replace racks of hardware with a turn-key appliance</li>
              <li>Rest easy with remote monitoring and 24x7 support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 bg-white px-6 xl:px-0">
      <div class="flex flex-col sm:flex-row  max-w-1200 mx-auto">

        <div class="w-full sm:w-7/12 pr-0 sm:pr-12">
          <h3>With Yellowbrick, enterprises can:</h3>
          <ul class="rfs-text-base">
            <li><span class="font-semibold">Run mixed workloads, all the time:</span> Run ad-hoc queries with large batch queries, business reports with ETL processes, bulk loads with ODBC inserts, or all of these at the same time.</li>
            <li><span class="font-semibold">Change workload priority and mix, on the fly:</span> Slow jobs no longer result in a fire drill. Administrators can re-prioritize running workloads at any time and configure alerts to let you know when unexpected things are happening.</li>
            <li><span class="font-semibold">Stop scheduling DBA jobs: </span> The Yellowbrick Database eliminates the need for DBAs to spend hours tuning, optimizing statistics and scheduling queries. Say goodbye to analyzing tables and vacuuming storage.</li>
            <li><span class="font-semibold">Spend less time tuning: </span>Data indexing is automatic. The core engine is so fast it plows through data at unprecedented rates. Ad-hoc workloads on the Yellowbrick Database run faster than heavily tuned, indexed queries on other databases.</li>
            <li><span class="font-semibold">Shrink the footprint: </span> Forget fork-lifting racks. The Yellowbrick Data Warehouse is a small appliance that simply plugs in and works, dramatically reducing floor space, power, and cooling costs. And less hardware to manage means reduced failure rates and lower management overhead.</li>
          </ul>
        </div>

        <div class="w-full sm:w-5/12">
          <div class="bg-white text-gray-500 shadow-lg p-10 my-12">
            <span class="rfs-text-3xl italic">“In our testing of Yellowbrick, we compared the performance of a six rack system to the 11" baseline Yellowbrick system. And performance was anywhere from 3 to 50 to 100 times faster.”</span><p class="mt-6 mb-0">- SaaS Analytics Provider</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 bg-gray-100 px-6 xl:px-0">
      <div class="flex flex-col max-w-1000 mx-auto">
        <h3>Simple to Deploy, Maintain, and Expand</h3>
        <p>The Yellowbrick Data Warehouse turnkey design and standard services get customers up and running quickly to ensure continuous operations without worry. Features and services include:</p>
        <ul class="rfs-text-base multi-column">
          <li><span class="font-semibold">Same-day Deployment: </span>  It’s common to have a Yellowbrick Data Warehouse up and running in a couple of hours, with standard reporting, BI and data mining, and ETL tools running against the system later the same day.</li>
          <li><span class="font-semibold">Seamless Migration and Ecosystem Integration: </span> The Yellowbrick Database uses standard SQL compatible with the PostgreSQL dialect. ODBC, JDBC, and ADO.NET connectors enable it to integrate seamlessly with existing applications and tools.</li>
          <li><span class="font-semibold">Increased Uptime: </span>  The Yellowbrick Data Warehouse is highly-available. There is no single point of failure in the system, and modern technologies such as erasure coding provide higher guarantees against data loss than existing data warehouses.</li>
          <li><span class="font-semibold">Expansion Without Downtime: </span>  Increase capacity and performance by simply inserting more Analytic Blades into the system. Data is redistributed in the background, and the new capacity is instantly available.</li>
          <li><span class="font-semibold">Graphical Management: </span> Administrators can view comprehensive system information through the Yellowbrick Management Console, scriptable command line tools and systems tables. This information can be consumed by existing IT systems management and APM software through standard protocols.</li>
          <li><span class="font-semibold">Remote Monitoring: </span>  Yellowbrick Customer Support provides advanced 24x7 predictive monitoring services that proactively find and identify problems.</li>
          <li><span class="font-semibold">Committed To Your Success: </span>  Should anything go wrong, Yellowbrick Data handles it. Our online Yellowbrick Customer Center and live Customer Success team are available 24x7 to answer questions and, in the unlikely event that a component fails, Yellowbrick Data ensures it is promptly replaced.</li>
        </ul>

        <p>With Yellowbrick, enterprises can finally achieve the complete, accurate, and timely insight they need to improve business without managing a complex system that takes up racks of hardware and continual tuning and maintenance.</p>

      </div>
    </section>

    <MoreInfo />

  </Layout>
</template>

<script>
import MoreInfo from '~/components/MoreInfo.vue'

export default {
  metaInfo: {
    title: 'Achieving Power from Simplicity',
    meta: [
      { key: 'description',
        name: 'description',
        content: 'The Yellowbrick Data Warehouse gets customers up and running quickly, with as minimal, if any, disruption.' }
    ]
  },
  components: {
    MoreInfo
  }
}
</script>

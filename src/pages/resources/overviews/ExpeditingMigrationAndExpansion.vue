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
        <h1 class="m-0 p-0 leading-none w-full sm:w-1/2 md:w-5/12">Expediting Migration and Expansion</h1>
        <a href="/uploads/ov-migration-expansion.pdf" target="_blank" class="button yellow mt-8">Download the PDF</a>
      </div>
    </section>

    <section class="py-12 bg-gray-100 px-6 xl:px-0">
      <div class="flex flex-col sm:flex-row max-w-1200 mx-auto">

        <div class="w-full sm:w-7/12 pr-0 sm:pr-12">
          <h3 class="text-gray-500 mb-8">Your Yellowbrick Data Warehouse can be Production Ready in a Day</h3>
          <p>Today’s unprecedented growth in data and user performance needs pushes traditional data warehouses to their limits. Many IT departments face the daunting task of forklift upgrades and over-purchasing storage and compute capacity—all to buy just a few years relief until the next upgrade. Not so with the Yellowbrick Data Warehouse.</p>
          <p>The Yellowbrick Data Warehouse gets customers up and running quickly, with as minimal, if any, disruption. While traditional data warehouse migrations require weeks or months of planning and labor, a Yellowbrick Data Warehouse can be installed, migrated, and running meaningful analytics in minutes. In addition, customers can add storage and compute resources incrementally, so they will not have to purchase more than they need or worry about future upgrades.</p>
        </div>

        <div class="w-full sm:w-5/12">
          <div class="bg-white p-10 shadow-md performance-bg">
            <h4>Key Benefits:</h4>
            <ul class="rfs-text-base">
              <li>Installation in minutes</li>
              <li>Fast, safe, secure data migration</li>
              <li>Seamless integration with existing tools and apps</li>
              <li>No hidden costs</li>
              <li>Grows to petabytes of capacity</li>
              <li>Eliminate painful upgrades with a highly scalable and incremental expand-as-you-go architecture</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 bg-white px-6 xl:px-0">
      <div class="max-w-1200 mx-auto">

        <h3>Migrate the Yellowbrick Way</h3>
        <p>Yellowbrick Data offers customers the following migration-related benefits:</p>
        <ul class="rfs-text-base multi-column">
          <li><span class="font-semibold">Ability to use an existing rack:</span> The Yellowbrick Data Warehouse has a standard (non-proprietary) form factor that fits seamlessly into an existing rack.</li>
          <li><span class="font-semibold">Fast installation and provisioning: </span> Turnkey design and converged architecture enables the Yellowbrick Data Warehouse to reach its final fault-tolerant production state within 90 minutes.</li>
          <li><span class="font-semibold">Simple migration that simplifies operations:</span> The Yellowbrick Data Warehouse uses standard data definition language (DDL) and supports multiple databases and schemas. Our industry-leading performance and software features, such as auto-indexing and automatic statistics, enable even poorly written SQL to execute much faster than optimized SQL on competing solutions.</li>
          <li><span class="font-semibold">Rapid data migration:</span> The Yellowbrick Data Warehouse custom high-speed bulk loader is parallel everywhere. It was designed from the ground up to deliver unprecedented data loading speeds.</li>
          <li><span class="font-semibold">Seamless data migration:</span> The Yellowbrick Data Warehouse can source data with real-time ingest, including flat ASCII, compressed data, Hadoop, S3, and many more.</li>
          <li><span class="font-semibold">Easy ecosystem integration:</span> Our use of standard ANSI SQL and open connectors for third-party tools, such as ODBC, JDBC, and ADO.NET enables enterprises to integrate seamlessly with reporting, analytical, monitoring, scheduling, backup/restore, and ETL tools. End users continue to use their existing analytic toolsets. Nothing changes, except it is now possible to run previously impossible queries.</li>
          <li><span class="font-semibold">No hidden costs:</span> The Yellowbrick Data Warehouse has no hidden costs with predictable price performance across a large number of users.</li>
        </ul>
      </div>
    </section>

    <section class="py-16 bg-gray-100 px-6 xl:px-0">
      <div class="flex flex-col sm:flex-row max-w-1200 mx-auto">
        <div class="w-full sm:w-1/3">
          <div class="bg-white p-10 shadow-lg">
            <h3>Same-Day Migration and The Ability To Grow at The Pace of Business</h3>
            <p>With the Yellowbrick Data Warehouse “load and go” design, customers can finally say goodbye to the pain of hardware upgrades. A Yellowbrick Data Warehouse can be production-ready the same day it is deployed. Better still, the solution is much easier to maintain than traditional data warehouses, and scales incrementally up to petabytes of capacity, with near-linear performance.</p>
          </div>
        </div>
        
        
        <div class="w-full sm:w-2/3 pl-0 sm:pl-12 mt-8 sm:mt-0">
          <h3>Say Goodbye To Forklift Upgrades Now and Into The Future</h3>
          <p>The Yellowbrick Data Warehouse delivers a growth platform to meet the business demands of the modern enterprise. With a Yellowbrick Data Warehouse, customers are prepared for future growth needs, including:</p>
          <ul class="rfs-text-base">
            <li><span class="font-semibold">Growth and availability:</span> Customers can easily add performance and capacity by adding compute nodes on the fly, without any downtime. The Yellowbrick Data Warehouse “expand-as-you-grow” model enables customers to buy only the storage and compute capacity they need, instead of over-purchasing based on future growth estimates.</li>
            <li><span class="font-semibold">Performance:</span> The Yellowbrick Data Warehouse is optimized for challenging analytic environments. It dramatically accelerates the performance of individual workloads, while powering through the mixed workloads that slow traditional data warehouses. Customers can run ad hoc queries, large batch queries, business reports, ETL processes, and ODBC inserts all at the same time.</li>
            <li><span class="font-semibold">Capacity:</span>Customers can maintain in-memory performance levels for up to petabytes of capacity. Capacity utilization is efficient, as the Yellowbrick Data Warehouse compresses all data and can also encrypt data at rest.</li>
          </ul>
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
    title: 'Expediting Migration and Expansion',
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

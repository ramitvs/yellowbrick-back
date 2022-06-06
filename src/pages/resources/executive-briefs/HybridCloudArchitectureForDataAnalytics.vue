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
        <h1 class="m-0 p-0 leading-none w-full sm:w-1/2 md:w-5/12">Hybrid Cloud Architecture for Data Analytics </h1>
        <a href="/uploads/hybrid-cloud-brief.pdf" target="_blank" class="button yellow mt-8">Download the PDF</a>
      </div>
    </section>

    <section class="flex py-12 bg-white px-6 xl:px-0">
      <div class="flex flex-col md:flex-row items-start justify-evenly max-w-1200 mx-auto">

        <div class="w-full md:w-2/3 relative pr-0 md:pr-10">
          <h3 class="text-gray-500 mb-8">Overview</h3>

          <p>Hybrid cloud architecture is a highly strategic approach to cloud adoption that addresses customer concerns about reliable performance at scale, cloud lock-in, and the ability to support workloads that need to stay on premises due to security or other concerns. According to the Flexera 2020 State of the Cloud Report, more than 80 percent of organizations either have or want to have such a strategy; per Forrester Research, nearly 75 percent of enterprises already describe their strategy as hybrid and/or multi-cloud.</p>
          
          <p>A hybrid cloud data warehouse is a logical and very effective addition to a hybrid cloud environment. As organizations optimize IT architectures comprising best-of-breed clouds and existing on-premises equipment and services, adding in a purpose-built hybrid data warehouse helps organizations meet and exceed their own unique data access and business analytics needs. It provides the best characteristics from cloud solutions (flexibility, data center savings, and scale) with the best characteristics of on-premises data warehouse solutions (security and performance at scale). </p>

          <h3>The Authentic Approach to Hybrid Cloud Data Warehousing</h3>

          <p>Not all approaches are created equal, however. For example, legacy on-premises vendors such as Teradata, IBM, and Oracle all have cloud versions of one kind or another in their portfolios, and even Amazon Web Services (AWS) has announced its intention to release on-premises products. However, in every case, customers are either locked into a single cloud platform, and/or the performance or control planes of the on-premises and cloud versions differ substantially. Furthermore, these solutions tend to be very expensive. </p>

          <p>At Yellowbrick Data, we believe that a true hybrid cloud analytics architecture will not only unlock multi-cloud deployments but also will offer an identical level of performance across on-premises/private cloud and the public cloud. Furthermore, you should be able to manage your workloads across all deployments in exactly the same way—in fact, the physical location of your data should be transparent to you. And finally, you should be free to immediately access all of that data, all of the time, to support long-running workloads without “surprise” consumption fees.</p>

          <h3>Yellowbrick Hybrid Cloud Data Warehouse</h3>
          <p>The Yellowbrick hybrid cloud data warehouse is the fastest available data warehouse platform for hybrid and multi-cloud environments. Thanks to highly specialized hardware/software that removes the traditional bottlenecks between storage and CPU, it offers breakthrough performance (up to 100x) beyond what either legacy platforms or the cloud providers’ virtualized commodity hardware can achieve, while providing the agility of the cloud—and at fraction of the cost of alternatives.</p>
 
          <p>The Yellowbrick platform provides a reserved, single-tenant, always-on instance type that you consume like any other cloud service, whether from a data center/private cloud and/or from any major public cloud (AWS, Microsoft Azure, and Google Cloud Platform). At the same time, Yellowbrick lets you avoid hidden fees for things such as data egress, bandwidth, and compute—fees the cloud-only providers love. Just connect to it like any other cloud service; should you ever need to switch clouds, just reconnect to your instance and go (no egress charges apply). Users residing in different clouds can query a single Yellowbrick instance simultaneously.</p>

          <p>Yellowbrick also provides:</p>
          <ul class="rfs-text-lg">            
            <li><strong>Single-pane management across the entire system.</strong> Yellowbrick provides a single-pane management interface that spans hybrid environments in a consistent, unified way. 
            <li><strong>Simplified hybrid cloud and workload management.</strong> Yellowbrick automatically takes care of many traditional management and database housekeeping tasks. Its intuitive console provides simplified but powerful workload management in an easy-to-use format. 
            <li><strong>Cloud disaster recovery services.</strong> Yellowbrick offers low-cost replication-based asynchronous disaster recovery as a service for multi-region fail-over and fail-back support. 
            <li><strong>Easy integration and migration.</strong> Yellowbrick looks and acts like an industry-standard PostgreSQL RDBMS and integrates with common BI, data science, and ETL tools that speak ANSI SQL. That also makes it easy for users to write queries, as well as for queries to be migrated from similar platforms without modification.  </li>
          </ul>

          <h3>Conclusion</h3>
          <p>Yellowbrick is the fastest and most flexible hybrid cloud data warehouse available, giving you performance and flexibility to meet fast-changing enterprise requirements at a fraction of the cost of alternatives. Benefits include:</p>
          <ul class="rfs-text-lg">
            <li><strong>100x performance.</strong> The Yellowbrick platform is architected to provide consistent, superior performance whether on premises or via public clouds, giving thousands of users real-time access to data that spans multiple months of history, with no compromise in latency.</li>
            <li><strong>Clear, predictable pricing.</strong> Yellowbrick has a simplified pricing model with deterministic, predictable pricing that eliminates hidden cloud fees.</li>
            <li><strong>Petabyte scale.</strong> Yellowbrick can scale to meet the needs of organizations that have petabytes of data to manage or that need to allow thousands of concurrent users access to data.</li>
            <li><strong>Ease of hybrid cloud management.</strong> Yellowbrick increases performance and flexibility without increasing management complexity—in fact, it simplifies management of hybrid cloud data warehousing, with a single management interface across the entire hybrid environment for managing roles, privileges, and more. </li>
          </ul>
          

        </div>

        <!-- RIGHT COLUMN -->

				<div class="w-full md:w-1/3 relative">
          <span class="accent yellow z-10"></span>
          
          <div class="bg-gray-500 shadow-lg p-10 relative text-white performance-bg">
            <h3 class="rfs-text-7xl font-semibold leading-none text-yellow1 my-0">100X</h3>
            <h3 class="rfs-text-4xl font-medium ">Data Analytics Performance for Faster, Richer Results from Your Data</h3>
          </div>

          <div class="bg-white shadow-lg p-10 relative text-gray-500 performance-bg mt-12">

            <h5 class="accent-heading">Benefits of Yellowbrick:</h5>
            <ul class="rfs-text-base">
              <li>100x performance</li>
              <li>Clear, predictable pricing</li>
              <li>Petabyte scale</li>
              <li>Ease of hybrid cloud management</li>
              <li>Single-pane management across the entire system</li>
              <li>Simplified hybrid cloud and workload management</li>
              <li>Cloud disaster recovery services</li>
              <li>Easy integration and migration</li>
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
    title: 'Hybrid Cloud Architecture for Data Analytics',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: ' The Yellowbrick hybrid cloud data warehouse is the fastest available data warehouse platform for hybrid and multi-cloud environments.' }
    ]
  },
  components: {
    MoreInfo
  }
}
</script>

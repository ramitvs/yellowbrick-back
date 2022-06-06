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
        <h1 class="m-0 p-0 leading-none w-full sm:w-1/2 md:w-5/12">10 Ways Yellowbrick Delivers a Seamless Data Warehouse Upgrade</h1>
        <a href="/uploads/ov-top-10.pdf" target="_blank" class="button yellow mt-8">Download the PDF</a>
      </div>
    </section>

    <section class="py-12 bg-white text-gray-500 px-6 xl:px-0">
      <div class="flex flex-col max-w-800 mx-auto">

        <h5>1. Rapid Deployment</h5>
        <p>Yellowbrick is available for any cloud or as a turnkey, rack mountable solution that can be production-ready in hours.</p>

        <h5>2. Fast Migration</h5>
        <p>Yellowbrick can ingest data at a line rate of 10 GB/s or about 10TB per hour, ensuring your migration completes quickly. Most customers are fully migrated in just days or weeks.</p>

        <h5>3. Easy Integration</h5>
        <p>Yellowbrick is 100% ANSI SQL-compliant. Your existing applications and 3rd party tools integrate seamlessly and your staff can jump in and use the solution right away.</p>

        <h5>4. White Glove Service Included</h5>
        <p>Your migration will be handled by experts, your downtime minimal, your staff educated, and your solution optimized for your business’s unique requirements.</p>

        <h5>5. Reduced Costs</h5>
        <p>Whatever your data center architecture, Yellowbrick gives organizations massive savings. Save on hardware, management, and maintenance and, best of all, do so while finally maximizing the value of your data.</p>

        <h5>6. Shrink Infrastructure - In Your Data Center or any Cloud</h5>
        <p>Wherever you fall in the spectrum of data center to cloud deployment models, Yellowbrick Data can help you meet your infrastructure reduction initiatives. The cloud solution can completely eliminate your data warehouse footprint, while the on-premises solution can shrink racks of hardware and shelves of disks to just 6U of space. Its highly available architecture has no single point of failure and redundancy down to the hardware component level, so you also won’t have to add infrastructure for resiliency.</p>

        <h5>7. Simplify Management</h5>
        <p>Yellowbrick is largely self-managing. DBAs will no longer need to waste time indexing, running VACUUM, rolling up cubes, tuning queries, or scheduling jobs. Workload management features protect critical jobs and eliminate fire drills caused by long-running queries.</p>

        <h5>8. Avoid Downtime</h5>
        <p>Rapid deployment, fast migration speeds, white glove service, and a SQL-compliant architecture all serve to minimize or eliminate disruption to your business. Moving forward, hot-swappable architecture enables upgrades or replacements to be done without any downtime at all, with minimal degradation. </p>

        <h5>9. Analyze Everything</h5>
        <p>Yellowbrick is the upgrade you’ve been looking for. Run mixed workloads without slowdowns, including real-time data streams, batch jobs, complex queries, ad hoc queries, ETL jobs, and more. </p>

        <h5>10. Scale to the Future</h5>
        <p>Yellowbrick Data delivers massive performance that scales to petabytes of data for thousands of concurrent users.</p>
        

      </div>
    </section>

    <MoreInfo />

  </Layout>
</template>

<script>
import MoreInfo from '~/components/MoreInfo.vue'

export default {
  metaInfo: {
    title: '10 Ways Yellowbrick Delivers a Seamless Data Warehouse Upgrade',
    meta: [
      { key: 'description',
        name: 'description',
        content: 'Yellowbrick Data Warehouse can provide a seamless upgrade for your legacy system.' }
    ]
  },
  components: {
    MoreInfo
  }
}
</script>

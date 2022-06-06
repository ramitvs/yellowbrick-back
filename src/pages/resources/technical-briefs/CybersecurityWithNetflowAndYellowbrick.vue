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

</style>

<template>
  <Layout>
    <section class="hero flex bg-gray-700 py-12 md:py-24 text-white px-6 xl:px-0">
      <div class="flex flex-col max-w-1200 w-full mx-auto z-10">
        <span class="rfs-text-xl text-yellow1 mb-0">Technical Brief:</span>
        <h1 class="m-0 p-0 leading-none w-full sm:w-1/2 md:w-5/12">Supercharge Cybersecurity with Netflow and Yellowbrick Data</h1>
        <a href="/uploads/tb-yellowbrick-netflow-cybersecurity.pdf" target="_blank" class="button yellow mt-8">Download the PDF</a>
      </div>
    </section>

    <section class="flex py-12 bg-white px-6 xl:px-0">
      <div class="flex flex-col md:flex-row items-start justify-evenly max-w-1200 mx-auto">
        <div class="w-full md:w-2/3 relative pr-0 md:pr-10">
          <h3 class="text-gray-500 mb-8">Overview</h3>
          <p>Effective cybersecurity hinges on automating risk detection, using predictive analytics to measure the risk of real-time activity against aggregated historical patterns But data volumes are now so massive that historical data is regularly archived to create space for new data, which means that less historical data is being analyzed quickly, so end results are less accurate or less timely. Enterprises are struggling for ways to collect Netflow data in near real time and analyze it against billions or trillions of rows of historical data without making a science project out of it. Enter Yellowbrick Data.

          <p>Yellowbrick offers a simple solution to the massive scale and latency requirements associated with production level Netflow analysis. Utilizing the latest hardware and software approaches, Yellowbrick can ingest Netflow and other data sets at line rate while still serving queries and other application needs. Yellowbrick can make the data available immediately and there are no indexes to create and manage. 2PB data sets are easily ingested and managed with a single Yellowbrick cluster occupying only 10U of rack space. Following are some key benefits.</p>
          
          <h3>Query IP Data Quickly and Efficiently</h3>
          <p>The Yellowbrick database treats IP addresses as their own type, similar to a number, and supports order and functions. This enables organizations to query ranges with greater than, less than, or between operators without the need to convert data types. For example:</p>

          <pre class="language-sql"><code class="language-sql"><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> netflow_ip <span class="token keyword">where</span> destination_ip <span class="token operator">&gt;</span> ‘<span class="token number">200.200</span><span class="token number">.200</span><span class="token number">.1</span>’</code></pre>

          <h3 class="mt-8">Rapidly Ingest, Scan, and Access Data</h3>
          <p>Yellowbrick can perform table scans at hundreds of gigabytes per second. A million-row table scan is a sub-second activity for Yellowbrick. Some other ways Yellowbrick improves data analytics is by enabling users to sort data into columns. Even after the initial sort, sorting continues as new data is added or inserted. By sorting IP addresses in order, organizations can significantly accelerate IP address lookups within a particular range. Yellowbrick also uses zone mapping to tell the database which blocks of the NVMe flash contain which ranges of data. This significantly accelerates scan times by reducing the amount of data that must be scanned. Yellowbrick even displays read efficiency to users to help with data layout and query planning.</p>

          <h3>Scale Easily to Massive Data Sets</h3>
          <p>The figure below shows the results of a query response time test as data set size grew from 500 million records up to 14 billion records. Querying 28x more records took just double the time.</p>


          <img src="/uploads/images/resource-library/netflow-diagram.jpg" alt="netflow query on yellowbrick" class="w-full mx-auto py-4" />
          <p><strong>Figure 1.</strong> Querying a 28x a larger dataset size took just double the time (.0122 seconds).</p>

          <h3>Load Data at 10 Million Rows per Second</h3>
          <p>Enterprise cybersecurity also struggles with loading massive volumes of data into the system to begin with. With Yellowbrick, organizations can achieve load times of ~150,000 rows a second using standard ODBC, JDBC, and ADO.net connectors. Using the Yellowbrick high-speed tool, ybload, organizations can load data directly over a 10G network, achieving load speeds of 10 million rows per second (about 1 GB/s). In the example below, a 308GB dataset loaded and was available for querying in about 5 minutes and 15 seconds.</p>

          <img src="/uploads/images/resource-library/yb-netflow-dashboard.jpg" alt="netflow query on yellowbrick" class="w-full py-4" />
          <p><strong>Figure 1.</strong> Querying a 28x a larger dataset size took just double the time (.0122 seconds).</p>


      </div>

				<div class="w-full md:w-1/3 relative">
          <span class="accent yellow z-10"></span>
          
          <div class="bg-gray-500 shadow-lg p-10 relative text-white performance-bg">
            <h5 class="accent-heading">Yellowbrick and Netflow</h5>
            <ul class="rfs-text-lg">
              <li>Query IP data quickly and efficiently</li>
              <li>Rapidly ingest, scan, and access data</li>
              <li>Scale easily to massive data sets</li>
              <li>Load data at 10-million rows per second</li>
            </ul>
          </div>

          <div class="p-10 bg-white text-gray-500 freedom-bg shadow-lg">
            <h4>Yellowbrick - The only modern data warehouse for hybrid cloud</h4>
            <p>Yellowbrick is the world’s only modern data warehouse for hybrid cloud. Enterprises rely on Yellowbrick to do the impossible in data analytics: get answers to the hardest business questions for improved profitability, better customer loyalty, and faster innovation in near real time, and at a fraction of the cost of alternatives.</p>

            <p>Yellowbrick offers superior price/performance for thousands of concurrent users on petabytes of data, along with the unique ability to run analytic workloads on-premises, in a private cloud, and/or any public cloud and manage them in a simple, consistent way--all with predictable pricing via annual subscription.</p>

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
    title: 'Supercharge cybersecurity with Netflow and Yellowbrick Data',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'Yellowbrick offers a simple solution to the massive scale and latency requirements associated with production level Netflow analysis.' }
    ]
  },
  components: {
    MoreInfo
  }
}
</script>

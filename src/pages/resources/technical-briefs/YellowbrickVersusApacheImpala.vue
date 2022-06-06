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

.odd {
  @apply bg-gray-100;
}

</style>

<template>
  <Layout>
    <section class="hero flex bg-gray-700 py-12 md:py-24 text-white px-6 xl:px-0">
      <div class="flex flex-col max-w-1200 w-full mx-auto z-10">
        <span class="rfs-text-xl text-yellow1 mb-0">Technical Brief:</span>
        <h1 class="m-0 p-0 leading-none w-full sm:w-1/2 md:w-5/12">Yellowbrick Versus Apache Impala</h1>
        <a href="/uploads/tb-yb-vs-apache-impala.pdf" target="_blank" class="button yellow mt-8">Download the PDF</a>
      </div>
    </section>

    <section class="flex py-12 bg-white px-6 xl:px-0">
      <div class="flex flex-col md:flex-row items-start justify-evenly max-w-1200 mx-auto">
        <div class="w-full md:w-2/3 relative pr-0 md:pr-10">
          <h3 class="text-gray-500 mb-8">Overview</h3>
          <p>The Apache Hadoop technology stack is designed to process massive data sets on commodity servers, using parallelism of disks, processors, and memory across a distributed file system. Apache Impala (available commercially as Cloudera Data Warehouse) is a SQL-on-Hadoop solution that claims performant SQL operations on large Hadoop data sets.</p>

          <p>Hadoop achieves optimal rotational (HDD) disk performance by avoiding random access and processing large blocks of data in batches. This makes it a good solution for workloads, such as recurring reports, that commonly run in batches and have few or no runtime updates. However, performance degrades rapidly when organizations start to add modern enterprise data warehouse workloads, such as:</p>

          <ul class="rfs-text-base">
            <li>Ad hoc, interactive queries for investigation or fine-grained insight</li>
            <li>Supporting more concurrent users and more diverse job and query types</li>
            <li>Analytics for IoT and other real-time data</li>
          </ul>
          <p>Customers have migrated more and more of their data to Hadoop over time and have found a much greater need to support these workloads. SQL-on-Hadoop technologies such as Apache Hive and Impala were developed to provide this support. The problem is that these technologies are a SQL abstraction layer and do not operate optimally: while they allow users to execute familiar SQL statements, they do not provide high performance.</p>

          <p>For example, classic database optimizations for storage and data layout that are common in the MPP warehouse world have not been applied in the SQL-on-Hadoop world. Although Impala has optimizations to enhance performance and capabilities over Hive, it must read data from flat files on the Hadoop Distributed File System (HDFS), which limits its effectiveness.</p>

          <h3>Architecture comparison: Impala versus Yellowbrick</h3>
          <p>While Impala is a SQL layer on top of HDFS, the Yellowbrick hybrid cloud data warehouse is an analytic MPP database designed from the ground up to support modern enterprise workloads in hybrid and multi-cloud environments. Key architectural differences include:</p>
          <ul class="rfs-text-lg">
            <li>
              <strong>Storage and data access.</strong> Impala reads data in large blocks from HDFS over racks of disks in connected servers. The Yellowbrick hybrid cloud data warehouse reads data in small blocks from NVMe flash storage connected via PCI-e.
            </li>
            <li>
              <strong>Data Distribution.</strong> The most common transport for Hadoop and Impala is 10G Ethernet. The Yellowbrick hybrid cloud data warehouse employs a dedicated, self-managed InfiniBand backplane that utilizes RDMA to move large data sets very quickly, at more than 5x the speed of 10G Ethernet.
            </li>
            <li>
              <strong>Memory.</strong> Impala must continually aggregate batched, large block data pulled into main memory across many servers. The Yellowbrick system flows small block I/O directly to L3 cache on the CPU at PCI-e speeds. In addition, it uses memory in tandem with Intel Data Direct I/O processing to achieve performance that is orders of magnitude faster than Hadoop-based solutions. A single Yellowbrick MPP node can perform joins at more than 20GB/sec.
            </li>
            <li>
              <strong>Data protection.</strong> Hadoop relies on three-way redundancy via replication to protect data, which means the Hadoop architecture requires triple the hardware. The Yellowbrick hybrid cloud data warehouse employs erasure encoding to tolerate failure of 2 out of 15 nodes before data loss occurs, without introducing the massive cost of 3x replication.
            </li>
          </ul>

          <h3>Customer Example</h3>
          <p>One Impala customer turned to a Yellowbrick solution when increasing performance demands presented the company with a costly and complex Hadoop upgrade. The customer was already paying $500,000 per year in licensing and maintenance fees, and its Hadoop vendor’s recommendation was to double the size of the cluster, which would lead to more than $1 million per year in licensing and maintenance costs.</p>

          <p>The Yellowbrick hybrid cloud data warehouse delivered far greater performance at a far lower cost (see figures 1 and 2).</p>

          <div class="py-6">
            <table class="table-auto w-full">
              <thead>
                <tr class="odd">
                  <th class="bg-gray-500 text-gray-200 py-2 text-lg font-normal">600TB Usuable Capacity</th>
                  <th class="bg-gray-500 text-gray-200 py-2 text-lg font-normal">Impala</th>
                  <th class="bg-gray-500 text-gray-200 py-2 text-lg font-normal text-left">Yellowbrick</th>
                  <th class="bg-gray-500 text-yellow1 py-2 text-lg font-normal text-left">Improvement</th>
                </tr>
              </thead>
              <tbody>
                <tr class="even">
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2 font-semibold">Number of Nodes</td>
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2">50</td>
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2">15</td>
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2">3.3X</td>
                </tr>
                <tr class="odd">
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2 font-semibold">System Size</td>
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2">1.5 racks (100 rack units)</td>
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2">6 rack units</td>
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2">16.6X</td>
                </tr>
                <tr class="even">
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2 font-semibold">Total Memory</td>
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2">37,500GB</td>
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2">1,920GB</td>
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2">19.5X</td>
                </tr>
                <tr class="odd">
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2 font-semibold">Total Cores</td>
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2">2,000</td>
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2">540</td>
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2">3.7X</td>
                </tr>
              </tbody>
            </table>
            <p class="pt-3"><strong>Figure 1.</strong> Yellowbrick architecture proves far more efficient than Impala in customer testing</p>
          </div>

          <div class="py-6">
            <table class="table-auto w-full">
              <thead>
                <tr class="odd">
                  <th class="bg-gray-500 text-gray-200 py-2 text-lg font-normal">Query Response Time %</th>
                  <th class="bg-gray-500 text-gray-200 py-2 text-lg font-normal text-left">Impala (ms)</th>
                  <th class="bg-gray-500 text-gray-200 py-2 text-lg font-normal">Yellowbrick (ms)</th>
                  <th class="bg-gray-500 text-yellow1 py-2 text-lg font-normal text-left">Improvement</th>
                </tr>
              </thead>
              <tbody>
                <tr class="even">
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2 font-semibold">99</td>
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2">16,791</td>
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2">5,597</td>
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2">3X</td>
                </tr>
                <tr class="odd">
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2 font-semibold">98</td>
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2">13,513</td>
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2">4,826</td>
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2">2.8X</td>
                </tr>
                <tr class="even">
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2 font-semibold">95</td>
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2">9,103</td>
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2">3,793</td>
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2">2.93X</td>
                </tr>
                <tr class="odd">
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2 font-semibold">90</td>
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2">7,675</td>
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2">3,070</td>
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2">2.5X</td>
                </tr>
                <tr class="even">
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2 font-semibold">75</td>
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2">4,497</td>
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2">2,044</td>
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2">2.2X</td>
                </tr>
                <tr class="odd">
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2 font-semibold">50</td>
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2">2,675</td>
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2">1,070</td>
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2">2.5X</td>
                </tr>
                <tr class="even">
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2 font-semibold">25</td>
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2">1,184</td>
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2">592</td>
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2">2X</td>
                </tr>
                <tr class="odd">
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2 font-semibold">Avg. Response</td>
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2">7,920</td>
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2">2,999</td>
                  <td class="border-t border-gray-200 px-2 md:px-4 py-2">2.6X</td>
                </tr>
              </tbody>
            </table>
            <p class="pt-3"><strong>Figure 2.</strong> Response time percentile for 200,000 queries in customer testing.</p>
          </div>

          <p>As Figure 1 shows, to deliver the same 600TB of usable capacity, the Yellowbrick hybrid cloud data warehouse requires 16x less space, which reduces tile costs, and far less memory, which reduces power and cooling costs.</p>

          <p>The Yellowbrick system also dramatically improves performance, enabling organizations to achieve faster, higher-quality insights. The example customer runs hundreds of thousands of unique queries per day, looking for anomalies. To compare Impala to Yellowbrick technology, the customer generated ~200,000 queries and measured performance as a response time percentile, in milliseconds.</p>

          <p>Importantly, the superior price-to-performance will continue well into the future: with the Yellowbrick hybrid cloud data warehouse, the customer can increase performance 2.5x again simply by adding 15 nodes (for 30, total) in just 4U of additional rack space.</p>

          <p>End users noticed performance improvements immediately when the customer replaced Impala with a Yellowbrick solution. Complex queries that used to take 30 seconds now execute in fewer than 2 seconds, and short queries that executed in several seconds are now measured in milliseconds — all while the Yellowbrick system constantly ingests terabytes of new data.</p>


          <h3>Simple, Fast Migration</h3>
          <p>Customers can migrate data from a Hadoop environment into a Yellowbrick system by using any number of known Hadoop-based tools, including Apache Sqoop or Apache Spark. Some customers also use message queues such as Apache Kafka. With these tools, the Yellowbrick system looks and acts just like a PostgreSQL database, utilizing the standard ODBC and JDBC drivers. In fact, the Yellowbrick system uses PostgreSQL ODBC and JDBC drivers for any tooling connectivity.</p>
          
          <p>Customers seeking a more robust feature set and faster data delivery can use the Yellowbrick high-speed tools ybload and ybrelay for loading data. ybload is a Java-based tool that can parallel load directly to the Yellowbrick system nodes. ybrelay is a Java-based listener that can spawn parallel ybload jobs for the fastest loads from Hadoop. ybrelay performs optimally with Spark by using Yellowbrick’s Spark SDK. Yellowbrick systems can access all data from Hadoop via Spark to ingest JSON, Parquet, Avro, or any other file type; perform any data enrichment; and format the data into CSV for loading via ybrelay.</p>
          
          <div class="mb-10 mt-4">
            <img src="/uploads/images/resource-library/ybrelay-diagram.svg" alt="ybrelay diagram" />
            <p class="pt-3"><strong>Figure 3.</strong> ybrelay listens for Spark or Sqoop jobs and sends data to the Yellowbrick system via ybload.</p>
          </div>

          <p>ybrelay is installed and configured on “edge nodes” and listens for a Spark or Sqoop job (see Figure 3). Once a job completes and is ready to write, it requests a ybload job from ybrelay. ybrelay configures four pipes for data, which feed into four ybload jobs, handle the job termination, and commit signaling to ybload. With this parallel functionality, bulk data movement into Yellowbrick systems can happen at wire speed—in excess of 10TB/hour.</p>

          <h3>Migrating Apache NiFi Data Feeds to Yellowbrick</h3>
          <p>Apache NiFi is a tool for data routing and data flow that enables data to move globally across IT ecosystems. Data flows have numerous sources and targets, and Yellowbrick hybrid cloud data warehouses can easily be configured into NiFi pipelines. The Yellowbrick system can be a powerful tool for ingesting, cleaning, storing, and archiving data as well as a powerful SQL-based analytics tool for reporting and data discovery.</p>

          <p>NiFi incorporates the Yellowbrick hybrid cloud data warehouse either as a source or a target. As a source, the Yellowbrick system receives data from NiFi via the PutSQL command. It uses the same JDBC driver as PostgreSQL and is configured the same as a PostgreSQL database. The system uses two storage engines: a row store and a column store. JDBC writes flow to the row store, which is perfect for trickle feeds of data less than 1GB. Bulk writes are written to the column store, using the Yellowbrick ybload tool. Customers who need to write bulk data volumes to their Yellowbrick cloud data warehouse should use ybload.</p>

          <p>NiFi can source data from a Yellowbrick system by using three common statements: ExecuteSQL, QueryDatabaseTable, and GenerateTableFetch. The ExecuteSQL statement returns the result set of a SQL Select statement executed on the Yellowbrick system. When combined with the ability to scan hundreds of trillions of rows in seconds, a Yellowbrick hybrid cloud data warehouse can provide blazing access speeds to petabyte-scale data sets. This opens the door to deep insights from more data, making Yellowbrick faster in NiFi environments than any other solution available.</p>

          <h3>Conclusion</h3>
          <p>The Yellowbrick hybrid cloud data warehouse offers a simple, scalable, high-performance, cost-effective MPP alternative to Impala and other SQL-on-Hadoop offerings. In addition, it automates many common tuning and maintenance tasks, allowing your staff to put more focus on delivering business value, and is easy to install and use. You can deploy today and have results tomorrow.</p>

        </div>


				<div class="w-full md:w-1/3 relative">
          <span class="accent yellow z-10"></span>
          
          <div class="bg-gray-500 shadow-lg p-10 relative text-white performance-bg">
            <h5>Apache Impala Struggles with Modern Workloads, such as:</h5>
            <ul class="rfs-text-base">
            <li>Ad hoc, interactive queries for investigation or fine-grained insight</li>
            <li>Supporting more concurrent users and more diverse job and query types</li>
            <li>Analytics for IoT and other real-time data</li>
          </ul>
          </div>

          <div class="p-10 bg-white text-gray-500 freedom-bg shadow-lg">
            <h5>Yellowbrick Key Architectural Differences</h5>
            <ul>
              <li>Storage and data access</li>
              <li>Data distribution</li>
              <li>Memory</li>
              <li>Data protection</li>
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
    title: 'Yellowbrick versus Apache Impala Technical Brief',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'While Impala is a SQL layer on top of HDFS, the Yellowbrick hybrid cloud data warehouse is an an-alytic MPP database designed from the ground up to support modern enterprise workloads in hybrid and multi-cloud environments. ' }
    ]
  },
  components: {
    MoreInfo
  }
}
</script>

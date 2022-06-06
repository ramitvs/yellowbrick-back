<style scoped>

.performance-bg {
    background-image: url(/uploads/images/performance-bg.svg);
    background-position: 100% 100%;
    background-repeat: no-repeat;
    background-size: 45%;
}

.blue-bold-text {
    color: #00c3cd;
    font-weight: 400;
}

.hero {
  background-image: url(https://www.yellowbrick.com/uploads/images/generic-bg.svg);
  background-position-x: -100px;
  background-blend-mode: color-dodge;
}

.embellish-bg {
  background-image: url(/uploads/images/predictability-bg.svg);
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 30%;
}

.multi-column {
  column-count: 1;
  column-gap: 0;
}

@media (min-width: 768px) {
  .multi-column {
    column-count: 2;
    column-gap: 2.5rem;
  }
}

.break-plane {
  top: -3rem;
  z-index: 40;
}

.stroke-main {
  stroke: #4b5458;
  stroke-width: 3px;
}

.stroke-accent {
  stroke: #fecf41;
  stroke-width: 2.5px;
}
.active {
  display: none;
}
.gate-form {
  min-height: 300px;
}

.expand-enter-active,
.expand-leave-active {
  transition-property: opacity, height;
}
.expand-enter,
.expand-leave-to {
  opacity: 0;
}


ul {
  list-style: none; /* Remove default bullets */
  padding-left: 15px;
}

ul li::before {
  content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: #56c0cb; /* Change the color */
  font-weight: bold; /* If you want it to be bold */
  font-size: 30px;
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
}

li {
  font-size: 1.125rem;
  line-height: 1.5em;
}

</style>

<template>
  <Layout>
  <section
      class="hero flex bg-gray-700 py-12 md:py-24 text-white px-6 xl:px-0"
    >
    <div class="flex flex-col md:flex-row max-w-1200 mx-auto">
      <div class="flex flex-col md:w-3/4 w-full">
        <h1 class="m-0 p-0 leading-tight text-5xl">Yellowbrick Technical Overview</h1>
        <p class="rfs-text-2xl max-w-800">
          We’ve re-imagined MPP analytic database architecture to build the fastest, most flexible data warehouse on the planet.
        </p>
      </div>
      <div class="flex flex-col md:w-1/4 w-full pt-6 md:pt-0">
        <a href="https://www.yellowbrick.com/uploads/BRIEF_Yellowbrick_Technical_Overview.pdf" target="_blank" class="ungated-asset" id="brief_yellowbrick-technical-overview">
          <img src="https://www.yellowbrick.com/uploads/thumb-brief-technical-overview.png" class="cursor-pointer shadow-md  w-1/2 md:w-full mx-auto px-2" alt="Yellow Brick Technical Overview Preview">
        </a>
        <div class="button-container px-2 pt-4 mt-1 w-1/2 md:w-full mx-auto">
          <a href="https://www.yellowbrick.com/uploads/BRIEF_Yellowbrick_Technical_Overview.pdf" target="_blank" class="ungated-asset" id="brief_yellowbrick-technical-overview">
            <button class="text-center shadow button bg-yellow1 button-md border-none text-gray2 font-bold whitespace-no-wrap px-3 py-3 w-full block rounded-smmr-2">Download PDF</button>
          </a>
        </div>
      </div>
      </div>
    </section>
    
    <section class="flex bg-white py-0 px-6 xl:px-0 pt-8">
      <div class="flex flex-col md:flex-row max-w-1200 w-full mx-auto z-10">
        <div class="w-full md:w-7/12">
          <p>Yellowbrick Data Warehouse provides near-real time answers from data at any scale, for any workload, in any environment. Its uniquely efficient use of resources (processor, memory, storage, and network) in an adaptive “cut-through” architecture helps you solve data processing-intensive problems you couldn’t solve before while getting the best possible performance value from the infrastructure available. Yellowbrick also offers flexibility for enabling distributed clouds, with deployment options including on Andromeda optimized instances in private clouds, as a service or instance in public clouds, and on K8S containers at the edge, with all data warehouse managed via a single, unified control plane (Yellowbrick Manager).</p>
          <p>Yellowbrick was conceived with the goal of optimizing price/performance. New SQL analytics use cases are emerging all the time, and more concurrent users are consuming more ad hoc analytics. That requires more performance per dollar spent, and Yellowbrick architecture leapfrogs the industry in this respect.</p>
          <p>In the cloud, Yellowbrick’s efficiency brings big savings compared to rivals combining unremarkable performance with consumption pricing. It’s not uncommon for 16 nodes of Yellowbrick to outperform 128 nodes of our closest competitor on both performance and concurrency, and by healthy margins. This means you will solve the same problem in a fraction of the time, and at a fraction of the cost. </p>
          <p>Yellowbrick also addresses workload needs with incredible flexibility. Inside Yellowbrick, data is actively managed in a hybrid row and column store. The front-end row store minimizes commit latency for real-time inserts, while the back-end column store handles massive ad hoc queries, giving customers the ability to address the most demanding workloads with ease.</p>
          <p>To follow are examples of some key Yellowbrick innovations. For a comprehensive overview of Yellowbrick data warehouse architecture, see our technical white paper at <a href="yellowbrick.com/whitepaper">yellowbrick.com/whitepaper</a>.</p>
        </div>
        <div class="w-full md:w-5/12 md:px-10 mt-16 md:mt-12">
          <div class="break-plane p-10 bg-white shadow-lg relative performance-bg">
            <span class="accent yellow"></span>
            <h2 class=" rfs-text-2xl">Key features</h2>
            <ul>
              <li>Effective storage scan rates of TBs per second, backed by 200Gb/sec RDMA networking</li>
              <li>Linear scalability to 6PB across 40 nodes with no aggregators/leader</li>
              <li>No partitions, cubes, or user-created indexes required</li>
              <li>Native real-time streaming (millions of rows/sec) and high-volume batch insert(10TB/hour)</li>
              <li>Supports queries and joins of external tables in S3, Azure Data Lake Storage v2, and NFS</li>
              <li>ANSI SQL-compliant syntax with PostgreSQL dialect</li>
              <li>Works out of the box with common BI, data motion, and ML tools</li>
              <li>Connectors for ODBC, JDBC, ADO.NET, Kafka, and Spark Streaming</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="flex py-2 bg-white px-6 xl:px-0">
      <div class="flex-1 justify-center max-w-1200 mx-auto">

        <div class="px-0 sm:px-10 md:px-32 my-8">
          <button @click="displayChart = !displayChart">
            <img src="/uploads/Yellowbrick-Architecture.png" alt="modern data warehouse" />
            <span class="inline-flex items-center"><expand-arrows class="pr-2"></expand-arrows>(click to enlarge)</span>
          </button>
            
          <modal-dialog v-if="displayChart" @close="displayChart=false">
            <img src="/uploads/Yellowbrick-Architecture.png" alt="modern data warehouse" />
          </modal-dialog>

          <p class="rfs-text-sm text-center pt-8">Yellowbrick makes it easy to ingest, process, and query data for any SQL analytics use case</p>
        </div>
      </div>
    </section>

    <section class="bg-white py-2 md:py-2 px-6 xl:px-0">
      <div class="max-w-1200 w-full mx-auto z-10">
        <div>
          <h4>Yellowbrick Kernel</h4>
          <p>To avoid performance limitations in Linux, we built a new Linux-based OS kernel from scratch that achieves maximum CPU efficiency by keeping memory pinned to the correct core until queries complete. Our optimized non-blocking thread management ensures the same data remains in the CPU caches while queries run. The Yellowbrick Kernel is also deployment-aware and will select which code and drivers to use based on the environment. </p>
        </div>
        <div>
          <h4>Optimized data path/cache-less design</h4>
          <p>While most databases need to keep hot data in a memory buffer cache for performance, Yellowbrick never caches data; rather, its optimized data path provides the experience of all data living in cache all the time. Data is read directly from primary storage into the CPU cache, so no cache rewarming is ever needed.</p>
        </div>
        <div>
          <h4>Custom drivers</h4>
          <p>Yellowbrick borrows concepts from high-performance computing, high-frequency trading, and public cloud stacks to offer the most efficient data warehouse drivers. Our networking drivers are 20X more efficient than standard Linux drivers: We’ve clocked a single CPU core sending and receiving 16GB/sec!</p>
        </div>
        <div>
          <h4>Cluster parity filesystem</h4>
          <p>To lower costs while improving availability and reliability, the Yellowbrick cluster filesystem, ParityFS, implements n+2 erasure coding. Data is reconstructed on the fly, and when nodes are replaced, the original data is rebuilt automatically. Non-HA instances, or those with ephemeral storage in public clouds, use Yellowbrick Cloud Mirror technology. This approach, along with its TCO benefits, performance benefits, and integration into MPP database processing, is unique to Yellowbrick.</p>
        </div>
      </div>
    </section>

  </Layout>
</template>

<script>
import MoreInfoNetezza from '~/components/MoreInfoNetezza.vue';
import TransitionExpand from '~/components/TransitionExpand.vue';
import ExpandArrows from "~/components/icons/ExpandArrows.vue";
import IconArrowRight from "~/components/icons/IconArrowRight.vue";
import ModalDialog from "~/components/ModalDialog.vue";

export default {
  metaInfo: {
    title: 'Technical Overview',
    meta: [
      { 
        key: 'description',
        name: 'description',
        content: 'We’ve re-imagined MPP analytic database architecture to build the fastest, most flexible data warehouse on the planet.'
      },
      {
        key: 'og:description',
        name: "og:description",
        content: 'We’ve re-imagined MPP analytic database architecture to build the fastest, most flexible data warehouse on the planet.'
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'We’ve re-imagined MPP analytic database architecture to build the fastest, most flexible data warehouse on the planet.'
      },
      {
        key: 'og:title',
        name: 'og:title',
        content: 'Technical Overview'
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'Technical Overview'
      }
    ]
  },
  components: {
    MoreInfoNetezza,
    TransitionExpand,
    ExpandArrows,
    IconArrowRight,
    ModalDialog
  },
  data() {
    return {
      expanded: false,
      displayChart: false
    };
  }
}
</script>
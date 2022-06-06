<style scoped>

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

@media (max-width: 767px) {
  .greymarg {
    padding-left:15px;
  }
}

@media (min-width: 768px) {
  .multi-column {
    column-count: 2;
    column-gap: 2.5rem;
  }
  .greymarg {
    margin-left:40px;
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
  line-height: 1.4;
}

</style>

<template>
  <Layout>
  <section
      class="hero flex bg-gray-700 py-12 md:py-24 text-white px-6 xl:px-0"
    >
    <div class="flex flex-col md:flex-row max-w-1200 mx-auto">
      <div class="flex flex-col md:w-3/4 w-full">
        <h4 class="m-0 p-0 leading-tight text-teal">TECHNICAL USE CASE</h4>
        <h1 class="text-5xl">Transform your data lake into a “data&nbsp;lakehouse”</h1>
      </div>
      <div class="flex flex-col md:w-1/4 w-full pt-6 md:pt-0">
        <a href="https://www.yellowbrick.com/uploads/BRIEF_Yellowbrick_Data_Lake_Augmentation.pdf" target="_blank" class="ungated-asset" id="brief_data-lake-augmentation">
          <img src="https://www.yellowbrick.com/uploads/thumb-data-lake-augmentation.png" class="cursor-pointer shadow-md  w-1/2 md:w-full mx-auto px-2" alt="Yellow Brick Technical Overview Preview">
        </a>
        <div class="button-container px-2 pt-4 mt-1 w-1/2 md:w-full mx-auto">
          <a href="https://www.yellowbrick.com/uploads/BRIEF_Yellowbrick_Data_Lake_Augmentation.pdf" target="_blank" class="ungated-asset" id="brief_data-lake-augmentation">
            <button class="text-center shadow button bg-yellow1 button-md border-none text-gray2 font-bold whitespace-no-wrap px-3 py-3 w-full block rounded-smmr-2">Download PDF</button>
          </a>
        </div>
      </div>
      </div>
    </section>

    <section class="flex bg-white py-0 px-6 xl:px-0 pt-8">
      <div class="flex flex-col md:flex-row max-w-1200 w-full mx-auto z-10">
        <h2>Get insights from your data lake (finally) with interactive, ad hoc SQL analytics</h2>
      </div>
    </section>
    
    <section class="flex bg-white py-0 px-6 xl:px-0">
      <div class="flex flex-col md:flex-row max-w-1200 w-full mx-auto z-10">
        <div class="w-full md:w-1/2">
          <p>The original promise of the data lake was to provide low-cost storage for all unstructured enterprise data—originally in HDFS but also more recently in object repositories such as Amazon S3—where it could be subsequently analyzed in place. In reality, even with a wide selection of data lake query engines (Apache Hive, Apache Impala, Presto, et al) available for the analytics layer, most data lakes still don’t fulfill the promise of large-scale, real-time analytics, including support for hundreds or thousands of concurrent BI tool users, sophisticated ad hoc queries by data scientists, or data-intensive reports.</p>
          <h4 class="text-teal">Best Price/Performance</h4>
          <p>Yellowbrick Data Warehouse is now the fastest and most modern solution available for data lake analytics, letting thousands of concurrent users explore all your data at the speed at a fraction of the cost of alternatives. Even conventional cloud data warehouses, which rely on VMs tied to general purpose hardware, fail to match Yellowbrick's breakthrough price/performance.</p>
          <p>With Yellowbrick, you can continue to use your data lake for what it does really well while meeting the original goal of enabling real-time analytics at scale, and much more.</p>
        </div>
        <div class="w-full md:w-1/2 px-0 md:px-10 bg-gray-100 greymarg pt-8">
          <h4>Only Yellowbrick lets you:</h4>
          <ul>
            <li><b>Run sub-second, ad hoc ANSI SQL queries</b> on billions of rows at 100x speed and beyond—increasing the richness (for example, spanning multiple months or even years of historical data) and rate of insights from your data lake</li>
            <li><b>Support thousands of users for mixed workloads,</b> not the tens of users typically supported by data lake query engines and cloud-only data warehouses</li>
            <li><b>Rapidly ingest data from HDFS and object stores at massive rates,</b> in bulk (up to 10TB/hour) and as a real-time stream from Kafka at millions of rows/second, with no impact on performance and data immediately query-able and actionable</li>
            <li><b>Eliminate mundane tasks</b> such as tuning, creating indexes, repartitioning data, and reclaiming storage space—streamlining and simplifying data management</li>
            <li><b>Deploy your data warehouse anywhere:</b> in data centers, in multiple public clouds, and both (hybrid)</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="flex py-2 bg-white px-6 xl:px-0">
      <div class="flex-1 justify-center max-w-1200 mx-auto">

        <div class="px-0 sm:px-10 md:px-32 my-8">
          <button @click="displayChart = !displayChart">
              <img alt="modern data warehouse" src="/uploads/Yellowbrick-Architecture.png" />
              <span class="inline-flex items-center"><expand-arrows class="pr-2"></expand-arrows>(click to enlarge)</span>
            </button>
            
            <modal-dialog v-if="displayChart" @close="displayChart=false">
              <img alt="modern data warehouse" src="/uploads/Yellowbrick-Architecture.png" />
            </modal-dialog>

            <p class="rfs-text-sm text-center pt-8">Yellowbrick makes it easy to ingest, process, and query data for any SQL analytics use case</p>
        </div>
      </div>
    </section>

    <section class="bg-white py-0 md:py-2 px-6 xl:px-0">
      <div class="flex flex-col md:flex-row max-w-1200 w-full mx-auto z-10">
        <div class="w-full md:w-1/2 px-4">
          <h5 class="text-teal">Built for ad hoc queries</h5>
          <p>Yellowbrick is built for a world where most queries are ad hoc and the data warehouse isn’t running a predefined, repeatable workload day in and day out. This requires the following characteristics:</p>
          <h5>Rich workload management</h5>
          <p>Ad hoc users make mistakes and submit poorly coded queries that either return too much data, produce incredibly complex cross-products, or sometimes just are really complicated. In Yellowbrick, such queries can be run-time reprioritized and placed into a “penalty box” to ensure that shorter, interactive queries still complete and resources aren’t tied up.</p>
          <h5>Brute-force computation</h5>
          <p>Yellowbrick doesn't rely on inverted indexing or partitioning strategies for peak performance. Forward indexes and statistics are gathered at import and kept up to date automatically, and data is reformatted into the most optimal columnar form for fast querying.</p>
        </div>
        <div class="w-full md:w-1/2 px-4">
          <h5>Ease of management</h5>
          <p>Yellowbrick requires virtually no management of space. Data partitioning, while supported, typically is unnecessary, and issues with storage space utilization due to skewed partitioned data don’t exist.</p>
          <h5>Stability and predictability</h5>
          <p>Yellowbrick is highly available with no single point of failure, and has fault tolerance suitable for "Tier 1" applications.</p>
          <h5>Integration with the modern big data ecosystem</h5>
          <p>Yellowbrick reads numerous Hadoop file formats and  integrates with R, Python, SAS, Kafka, and Spark, as well as with common BI and visualization  tools like SAS, Tableau, PowerBI, and MicroStrategy.</p>
          <h5 class="text-teal">Fast & easy migrations</h5>
          <p>Migrations are fast and easy from any le gacy platform, and weʼll work with you to validate your use cases and  success metrics along the way.</p>
          <p>Try our free 7-day Test Drive: <a href="yellowbrick.com/test-drive">yellowbrick.com/test-drive</a></p>
        </div>
      </div>
    </section>

    <section class="bg-white py-2 md:py-2 px-6 xl:px-0 mt-12">
      <div class="flex flex-col md:flex-row max-w-1200 w-full mx-auto z-10">
        <div class="w-1/2 md:w-1/4 px-8 pb-4 md:pb-0 mx-auto">
          <img src="/uploads/MobileOperator.png" class="w-full" alt="Mobile Operator Top 10" />
        </div>
        <div class="w-full md:w-3/4">
          <h5 class="text-teal">TELECOM CASE STUDY</h5>
          <p>One of the top 10 mobile operators in the world depends on Yellowbrick to safeguard millions in revenue and increase time-to-insight by 20X.</p>
          <p>Previously, the company used a legacy data warehouse on top of a data lake to analyze customer data for use by multiple departments--for example, to reconcile revenue from prepaid SIM cards sold by retailers. But with an 800% growth in data volume over time, that platform could no longer keep up with business needs.</p>
          <p>Results of a painless migration to Yellowbrick Data Warehouse include:</p>
          <ul>
            <li><b>Ad hoc queries complete</b> <b style="color:#ffcd32;"> 20X faster</b>, with hundreds of concurrent users accessing six months of transactions for <b style="color:#ffcd32;">deeper, more accurate insights</b> to support up-sell and cross-sell</li>
            <li><b>Operational reports now</b> update in real time, instead of in hours or even days, contributing to <b style="color:#ffcd32;">more efficient infrastructure</b> utilization 8X more data can be ingested <b style="color:#ffcd32;">for immediate analysis</b> (up to 1TB per day), enabling analysis of fresher data for use cases like fraud detection</li>
            <li><b>Revenue reconciliation now</b> happens in real time instead batch, <b style="color:#ffcd32;">safeguarding millions in monthly revenue</b> that was at risk</li>
          </ul>
        </div>
      </div>

      <div class="max-w-1200 mx-auto z-10 py-6">
      <hr width=100% style="margin:auto;">
      </div>

      <div class="flex flex-col md:flex-row max-w-1200 w-full mx-auto z-10 pt-4">
        <div class="w-1/2 md:w-1/4 px-8 pb-4 md:pb-0 mx-auto">
            <img src="/uploads/LexisNexis-logo.jpg" class="w-full" alt="Lexis Nexis Logo" />
          </div>
          <div class="w-full md:w-3/4">
            <h5 class="text-teal">FRAUD DETECTION CASE STUDY</h5>
            <p>ThreatMetrix (part of LexisNexis Risk Solutions) is a global anti-fraud SaaS product accessed by thousands of end-users. With Yellowbrick Data Warehouse adding a high-speed SQL analytics layer to its Hadoop data lake, ThreatMetrix helps 5,000 brands validate 5 billion online transactions per month.</p>
            <ul>
              <li><b>Even with real-time ingestion</b> happening in the background, LexisNexis <b style="color:#ffcd32;">can deliver richer insights</b> to its customers, more quickly, and with fresher data than its previous solution.</li>
              <li><b>Yellowbrick automatically reallocates</b> resources to <b style="color:#ffcd32;">respond to spikes</b> or unusual usage patterns, and performance tuning is no longer needed.</li>
              <li><b>With Yellowbrick instances</b> located in different global regions, <b style="color:#ffcd32;">workloads can shift seamlessly</b> between instances when needed.</li>
            </ul>
          </div>
      </div>
    </section>

  </Layout>
</template>

<script>
import MoreInfoNetezza from '~/components/MoreInfoNetezza.vue'
import TransitionExpand from '~/components/TransitionExpand.vue'
import ExpandArrows from "~/components/icons/ExpandArrows.vue";
import IconArrowRight from "~/components/icons/IconArrowRight.vue";
import ModalDialog from "~/components/ModalDialog.vue";

export default {
  metaInfo: {
    title: 'Transform your data lake into a “data lakehouse”',
    meta: [
      { 
        key: 'description',
        name: 'description',
        content: 'Get insights from your data lake (finally) with interactive, ad hoc SQL analytics'
      },
      {
        key: 'og:description',
        name: "og:description",
        content: 'Get insights from your data lake (finally) with interactive, ad hoc SQL analytics'
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'Get insights from your data lake (finally) with interactive, ad hoc SQL analytics'
      },
      {
        key: 'og:title',
        name: 'og:title',
        content: 'Transform your data lake into a “data lakehouse”'
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'Transform your data lake into a “data lakehouse”'
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
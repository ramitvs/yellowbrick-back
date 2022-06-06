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
        <span class="rfs-text-5xl text-yellow1 mb-0">Case study</span>
        <div class="image-container">
          <img src="/uploads/images/customers/lexisnexis-white.svg" class="w-full sm:w-1/3 py-5" alt="Yellowbrick Data warehouse dramatically improves performance and reliability" />
        </div>
        <h1 class="m-0 p-0 leading-none rfs-text-2xl w-full sm:w-1/2 md:w-5/12">Yellowbrick Data Warehouse dramatically improves performance and reliability of a critical fraud detection application</h1>
      </div>
    </section>

    <section class="flex py-12 bg-white px-6 xl:px-0">
      <div class="flex flex-col sm:flex-row items-start justify-evenly max-w-1200 mx-auto">
        <div class="w-full md:w-7/12 p-0 md:pr-10 relative">
          <Details industry="Financial Services" business-use-case="Risk Management & Fraud Detection" tech-use-case="Data Lake Augmentation" />

          <h4 class="text-gray-500">Overview</h4>
          <div class="text-gray-500 mb-8 md:mb-0">
            <p>One of the key business applications of ThreatMetrix (now known as LexisNexis Risk Solutions), a global digital fraud detection and identity authentication service, is an online portal accessed by thousands of users around the world.
              The portal serves over 5,000 global brands, helping them verify more than 20 billion financial transactions each year.</p>

            <ul class="rfs-text-base">
              <li>Customers query a 300TB multi-tenant database over 25,000 times per day, with up to 1TB of new data ingested daily in real time from a data lake via Kafka.</li>
              <li>Hundreds of external users generate queries simultaneously.</li>
              <li>Many queries are also complex, accessing over 6 months of stored data spread across millions of records.</li>
            </ul>

            <h4 class="text-gray-500">Frustrated business users</h4>
            <p>The application used a variety of different technologies for data processing, including Greenplum Database and Cloudera Impala, but even with complex, hard-to-manage optimizations, those solutions were unable to respond interactively
              during busy periods in the face of growing data sets and more users.</p>

            <ul class="rfs-text-base">
              <li>Some customers would have to wait up to 3 minutes for queries to complete.</li>
              <li>Unpredictable Cloudera Impala outages were common, frustrating customers.</li>
              <li>Business process changes would take weeks to implement (e.g., by adding new columns).</li>
            </ul>

            <h4 class="text-gray-500">3X speed from 4X fewer nodes</h4>
            <p>After replacing Cloudera Impala with Yellowbrick, portal end-users noticed performance improvements immediately, with most operations completing in milliseconds or seconds--and that’s with 4X fewer nodes, and 20X less memory, than
              what was required by Cloudera Impala.</p>
            <img src="/uploads/images/YB_LexisNexis_Chart.png" alt="Performance Testin gResults in Seconds: Yellowbrick versus Cloudera Impala" class="my-8 w-full" />
            <h4 class="text-gray-500">Results include:</h4>
            <ul class="rfs-text-base">
              <li><strong>Faster, more accurate insights for customers.</strong> With Yellowbrick’s faster and more consistent performance, even with real-time ingestion in the background, helps Lexis/Nexis deliver richer insights to its customers,
                more quickly, and with fresher data.</li>
              <li><strong>Far less time needed for management.</strong> Yellowbrick automatically reallocates resources to respond to spikes or unusual usage patterns, and performance tuning is no longer needed.</li>
              <li><strong>Better customer experience.</strong> Downtime is no longer a concern, and with a Yellowbrick instance located in each global regions, workloads can shift seamlessly between clusters when needed.</li>
            </ul>
          </div>
        </div>
        <div class="w-full md:w-5/12 relative">
          <h3 class="text-gray-500 rfs-text-4xl font-semibold mb-8 sm:mt-0 accent-heading">Key Insights</h3>
          <FeaturedStat alt-attribute="Threat Metrix experienced 3X faster queries at a fraction of the cost" icon-name="tacometer.svg" featured-title="Faster Queries" featured-phrase="3X faster queries at a fraction of the cost" first="true" />
          <FeaturedStat alt-attribute="Threat Metrix ingests 1TB of new data daily in real time" icon-name="cloud-computing.svg" featured-title="Faster Data Input" featured-phrase="1TB of new data ingested daily in real time" />
          <FeaturedStat alt-attribute="Yellowbrick only needed 11 days for completion of POC" icon-name="db-money.svg" featured-title="Faster POCs" featured-phrase="11 days needed for completion of POC" />
          <div class="bg-white shadow-lg mt-8 p-10 relative text-gray-500 performance-bg">
            <span class="accent z-10"></span>
            <span class="rfs-text-3xl italic">"Compared to other data warehouses and Hadoop-based solutions, Yellowbrick Data provides superior performance."</span>
            <p class="mt-8">- Matthias Baumhof,<br>CTO, LexisNexis Risk Solutions</p>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="flex py-12 md:py-24 bg-gray-100 px-6 xl:px-0">
      <div class="flex flex-col md:flex-row justify-center max-w-1200 mx-auto">

				<div class="w-full md:w-7/12 pr-10">
          <h2 class="mb-6 md:mb-8">So, What's the Problem?</h2>
          <p>ThreatMetrix servers depend on big data analytics to calculate recent account activity, known fraudulent patterns, and other factors to verify a claimed identity. There is no time to waste on slow analytics or unreliable access: analytics and response occurs the second a user inputs a login or transaction.</p>
          <p>Furthermore, analytics must maintain high performance and low latency on a massive data warehouse that grows exponentially. This requirement is a very tall order, and ThreatMetrix’ original environment was not up to the job.</p>
          <p>The legacy Hadoop platform ran on a computing cluster and used an opensource SQL query engine. The environment proved to be low performance/ high latency, and slow analytics caused multiple functional outages. Unhappy users quickly abandoned ThreatMetrix customer websites.</p>
          <p>The support provider repeatedly fixed problems like slow web page loads, unacceptable downtime, and slow query performance; only to see the challenges repeat. Charges for ongoing support easily exceeded $100,000
          a year.</p>

          <h2 class="mb-6 md:mb-8 mt-10">Yellowbrick Repairs the Road</h2>
          <p>ThreatMetrix depends on the speed and reliability of its underlying data warehouse. When its legacy solution was not working, they tested multiple data warehouses and Hadoop solutions.</p>
          <p>They found that Yellowbrick Data delivered very fast interactive response times to website users, even during high traffic spikes, at much lower cost.</p>
          <p>Yellowbrick purpose-built its Data Warehouse appliance for extreme storage scalability, flexible deployment options, and extensive high-performance analytics. The Data Warehouse serves the world’s largest companies, which have realized dramatic performance improvement and dramatic cost savings on capital and operational expenses.</p>


          <h2 class="mb-6 md:mb-8 mt-10">Benefits</h2>
          <p>Performance sharply improved. Instead of being frustrated at slow webpage loads, authorized users get fast responses to logins and transactions. At the same time, ThreatMetrix shuts down suspicious user identities and transactions within seconds and generates SQL reports so customers can analyze ThreatMetrix determinations and user behavioral patterns.</p>
          <p>ThreatMetrix customers also realized significant capital and operational savings over the legacy system. Compared to the legacy system, Yellowbrick needed only a third of the nodes, 20 times less memory and a quarter of the compute cores to deliver much faster performance. In addition, Yellowbrick’s improved performance sharply reduced support costs.</p>
          <p>Yellowbrick Data Warehouse enables ThreatMetrix to operate at high performance and low latency, with massive big data storage scalability, and very reasonable capital and operations costs.</p>
        </div>

        <div class="w-full md:w-5/12">
          <span class="accent z-10"></span>
          <div class="bg-white shadow-lg p-10 relative text-gray-500 performance-bg">
            <span class="rfs-text-3xl italic">"Following extensive testing of data warehouses and Hadoop-based solutions, we found that Yellowbrick Data provided superior performance."</span>
            <p class="mt-8">- Matthias Baumhof,<br>CTO, ThreatMetrix</p>
          </div>
        </div>

      </div>
    </section> -->

    <MoreInfo />

  </Layout>
</template>

<script>
  import MoreInfo from '~/components/MoreInfo.vue'
  import FeaturedStat from '~/components/FeaturedStat.vue'
  import Details from '~/components/CaseStudyDetails.vue'

  export default {
    metaInfo: {
      title: 'ThreatMetrix Case Study',
      meta: [{
        key: 'description',
        name: 'description',
        content: 'Yellowbrick Data Warehouse accelerated performance over legacy solution with a smaller footprint and lower cost. '
      }]
    },
    components: {
      Details,
      FeaturedStat,
      MoreInfo
    }
  }
</script>
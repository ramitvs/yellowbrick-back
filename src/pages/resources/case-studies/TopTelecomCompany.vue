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

  .enhance-bg {
    background: #0D171C url(/uploads/images/predictability-bg.svg) no-repeat bottom right;
    background-size: 20%;
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
        <span class="rfs-text-xl text-yellow1 mb-0">Case study:</span>
        <h1 class="m-0 p-0 leading-none w-full sm:w-3/4 py-5">
          Top 10 Mobile Operator
        </h1>
        <h2 class="m-0 p-0 leading-none rfs-text-xl w-full sm:w-1/2">Yellowbrick Data Warehouse provides unbeatable price/performance to maintain competitive edge despite massive data growth</h2>
      </div>
    </section>

    <section class="flex py-12 bg-white px-6 xl:px-0">
      <div class="flex flex-col sm:flex-row items-start justify-evenly max-w-1200 mx-auto">

        <div class="w-full md:w-7/12 p-0 md:pr-10 relative">
          <Details 
            industry="Telecommunications"
            business-use-case="Revenue Assurance, Fraud Detection, Marketing Analytics"
            tech-use-case="Enterprise Data Warehouse"
          />

          <h4 class="text-gray-500">Overview</h4>
          <div class="text-gray-500 mb-8 md:mb-0">
            <p>One of the largest mobile operators in Latin America depends on insights from billions of records it collects per day for delivering telephony and value-added services to mobile users and business customers.</p>

            <ul class="rfs-text-base">
              <li>Precise and timely billing reconciliation is critical, with millions in monthly revenue from retail channels at stake.</li>
              <li>Reconciliation speed and accuracy also affects the ability to provide quality customer and partner services and to manage costs, expenses, and revenue.</li>
              <li>Network efficiency depends on access to up-to-date operational data.</li>
              <li>5G adoption is expected to create a 10X-50X increase in data volume (up to several petabytes), presenting challenges as well as opportunities.</li>
            </ul>

            <h4 class="text-gray-500">Netezza can’t keep up</h4>
            <p>Previously, the company used a Netezza data warehouse on top of a data lake to analyze customer data for use by Finance and other departments--for example, to reconcile revenue from prepaid SIM cards sold by retailers. But with an 800% growth in data volume over time, that platform could no longer keep up with business needs:</p>

            <ul class="rfs-text-base">
              <li>The data warehouse struggled to process more than 1 billion records per day.</li>
              <li>Query latency and system availability were highly unreliable.</li>
              <li>Inability to quickly validate SIM card revenue and reconcile payments to retailers put millions in monthly revenue at risk.</li>
            </ul>

            <h4 class="text-gray-500">Modernizing the platform with Yellowbrick</h4>
            <p>The company evaluated several data analytics platforms, with most showing only modest performance improvements and some promising a risky migration process. Yellowbrick Data Warehouse was the exception: its performance at scale, compatibility with existing tools, reliability, and ease of use were superior. It was also critical that Yellowbrick’s integration partner, Appliance Technologies, could take full responsibility for the end- to-end project, from migration, to implementation, to service and support. Today, approximately 100 business-critical applications are utilizing the Yellowbrick data warehouse.</p>

            <img src="/uploads/images/Mobile provider_customer_chart.png" alt="Performance testing results: Full table scan duration - 80TB (in minutes)" class="my-8 w-full" />
            <h4 class="text-gray-500">Results Include:</h4>

            <ul class="rfs-text-base">
              <li><strong>Ad hoc queries complete 20X faster</strong>, with hundreds of concurrent users accessing six months of transactions for deeper, more accurate insights to support upsell and cross-sell</li>
              <li><strong>Operational reports now update in real time</strong>, instead of in hours or even days, contributing to more efficient infrastructure utilization</li>
              <li><strong>8X more data can be ingested for immediate analysis</strong> (up to 1TB per day), enabling analysis of fresher data for use cases like fraud detection</li>
              <li><strong>Revenue reconciliation now happens in real time instead batch</strong>, safeguarding millions in monthly revenue that was at risk</li>
              <li><strong>Millions saved in data center costs</strong>, thanks to a 20X reduction in required rack space</li>
            </ul>
          </div>
        </div>
        <div class="w-full md:w-5/12 relative">
          <h3 class="text-gray-500 rfs-text-4xl font-semibold mb-8 accent-heading mt-8 sm:mt-0">Key Insights</h3>
          <FeaturedStat 
            alt-attribute="20X faster queries at a fraction of the cost" 
            icon-name="tacometer.svg"
            featured-title="20X Faster"
            featured-phrase="20X faster queries at a fraction of the cost" 
            first="true"
          />

          <FeaturedStat 
            alt-attribute="8X more data ingested daily for immediate analysis" 
            icon-name="cloud-computing.svg"
            featured-title="8X More Data"
            featured-phrase="8X more data ingested daily for immediate analysis" 
          />

          <FeaturedStat 
            alt-attribute="Millions in monthly revenue safeguarded" 
            icon-name="db-money.svg"
            featured-title="$Millions "
            featured-phrase="Millions in monthly revenue safeguarded" 
          />

          <div class="bg-white shadow-lg p-10 relative text-gray-500 performance-bg pb-10 relative mt-12">
            <span class="rfs-text-3xl italic">“Game-changing technologies like Yellowbrick do not come around often. Our
              customer was blown away by the impact that the Yellowbrick solution had on its business.”</span>
            <p class="mt-8">- Victor Navarro, Managing Director/Founder<br>Appliance Technologies</p>
            <span class="accent z-10"></span>
          </div>

        </div>
      </div>
    </section>
    <MoreInfo />
  </Layout>
</template>

<script>
  import MoreInfo from '~/components/MoreInfo.vue'
  import FeaturedStat from '~/components/FeaturedStat.vue'
  import Details from '~/components/CaseStudyDetails.vue'

  export default {
    metaInfo: {
      title: 'Yellowbrick improves query performance by 182x for Catalina Marketing',
      meta: [{
        key: 'description',
        name: 'description',
        content: 'Catalina is also looking at how it can take advantage of Yellowbrick’s hybrid cloud architecture to help the company move its computing workloads to the cloud. '
      }]
    },
    components: {
      Details,
      FeaturedStat,
      MoreInfo
    }
  }
</script>
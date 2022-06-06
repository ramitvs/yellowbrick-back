<style scoped>

.hero {
  background-image: url(/uploads/images/tall-bg.svg);
  background-size: cover;
  background-position: center;
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

</style>

<template>
  <Layout>

    <section class="hero flex bg-gray-700 py-12 md:py-24 text-white px-6 xl:px-0">
      <div class="flex flex-col max-w-1200 w-full mx-auto z-10">
        <div class="w-full md:w-1/2">
          <span class="rfs-text-xl text-yellow1 mb-0">Industry Solutions:</span>
          <h1 class="rfs-text-6xl">Yellowbrick for Healthcare & Life Sciences</h1>
          <p class="rfs-text-lg">The world’s only modern data warehouse for hybrid and multi-cloud environments gives healthcare providers and pharma and biotech companies the price/performance, agility, and flexibility they need to improve care and financial outcomes in the face of massive data challenges</p>
        </div>
      </div>
    </section>
    
    <section class="flex pb-8 bg-gray-100 px-6 xl:px-0">
      <div class="flex flex-col justify-center max-w-1200 mx-auto">
        <div class="break-plane p-10 bg-white shadow-lg relative">
          <span class="accent"></span>
          <h3 class="text-gray-500 mb-8">In Life Sciences, the Same Old Options Are No Cure</h3>
          <div class="text-gray-500 w-full">
            <p class="rfs-text-lg">Even in ordinary times, the healthcare industry has to contend what might be the most complicated data problems in the world, including unparalleled data volumes, disparate and heterogeneous data sources, lagging digital transformation, and immense pressure to deliver faster, more accurate results&mdash;all for what are often life-or-death goals. Data-driven use cases include:</p>

            <ul class="flex flex-row flex-wrap rfs-text-lg">
              <li class="w-full sm:w-1/2"><span class="pr-12">Drug discovery and medical device R&D</span></li>
              <li class="w-full sm:w-1/2"><span class="pr-12">Electronic medical records analysis</span></li>
              <li class="w-full sm:w-1/2"><span class="pr-12">Care delivery optimization</span></li>
              <li class="w-full sm:w-1/2"><span class="pr-12">Precision medicine</span></li>
              <li class="w-full sm:w-1/2"><span class="pr-12">Diagnostic & predictive analytics</span></li>
            </ul>
          </div>
        </div>

      </div>
    </section>


    <section class="flex py-12 md:py-16 bg-white px-6 xl:px-0">
      <div class="flex flex-col items-start max-w-1200 mx-auto">
        <div class="w-full lg:w-3/4">
          <p class="rfs-text-lg">The analytics challenges involved above &mdash; such as ad hoc analytics on huge quantities of rapidly changing clinical data &mdash; press infrastructure to its limits. Furthermore, the ongoing pandemic is causing priorities to constantly shift, which makes agility, flexibility, and sound economics even more critical. And for the organizations that rely on web apps or provide data services in this industry, Tier 1 availability is a top priority.</p>

          <p class="rfs-text-lg">For these situations, Yellowbrick Data Warehouse offers breakthrough price/performance at scale and flexibility (with HIPAA compliance) that neither legacy platforms (e.g., IBM Netezza, Teradata, Microsoft SQL Server) nor cloud-only options (e.g., Snowflake) can match.</p>
        </div>


        <h3 class="accent-heading mt-16">Yellowbrick Brings:</h3>
        <div class="flex flex-col flex-wrap mx-0 md:-mx-6 pb-12">
    
          <div class="w-full md:w-3/4 p-6 flex flex-row items-center">
            <img src="~@/assets/images/icons/reduced-time-icon.svg" class="w-32" alt="reduced time icon" />
            <div class="pl-5">
              <h5 class="mb-1">Speed-of-Thought Performance</h5>
              <p class="rfs-text-lg mb-0">Makes lightning-fast complex analytics over very large structured analytic datasets possible &mdash; including real-time ingestion from new data sources (e.g. new test results)</p>
            </div>
          </div>
    
          <div class="w-full md:w-3/4 p-6 flex flex-row items-center">
            <img src="~@/assets/images/icons/high-concurrency-icon.svg" class="w-32" alt="concurrency icon" />
            <div class="pl-5">
              <h5 class="mb-1">Concurrency for 1000s of Users</h5>
              <p class="rfs-text-lg mb-0">Enables entire research teams pursuing multiple lines of inquiry to work on the same dataset with no loss of performance</p>
            </div>
          </div>
    
          <div class="w-full md:w-3/4 p-6 flex flex-row items-center">
            <img src="~@/assets/images/icons/unified-hybrid.svg" class="w-32" alt="unified hybrid icon" />
            <div class="pl-5">
              <h5 class="mb-1">Unified Hybrid Architecture</h5>
              <p class="rfs-text-lg mb-0">Lets researchers work on-premises, in a major public cloud, or both &mdash; allowing for access to shared resources like medical libraries, as well as to HIPAA-regulated data with no risk of disclosure</p>
            </div>
          </div>
    
          <div class="w-full md:w-3/4 p-6 flex flex-row items-center">
            <img src="~@/assets/images/icons/extreme-scalability-icon.svg" class="w-32" alt="scalability icon" />
            <div class="pl-5">
              <h5 class="mb-1">Extreme scalability</h5>
              <p class="rfs-text-lg mb-0">Supports bulk loading and real-time ingestion of massive data volumes along with ability to query new as well as historical data immediately</p>
            </div>
          </div>
        
        </div>

        <div class="w-full lg:w-3/4">
          <p class="rfs-text-lg">For example, for one company in the electronic medical records area that processes billions of complex medical records per day, a legacy Netezza data warehouse had reached the end of its viability. For one of that company’s workloads, Yellowbrick delivers 100X performance over Netezza, reducing processing time from weeks to hours. The company was able to make a successful transition to cloud-based analytics, as well.</p>
        </div>
            

      </div>
    </section>

    <section class="flex py-12 md:py-16 bg-gray-100 px-6 xl:px-0">
      <div class="flex flex-col items-start max-w-1200 mx-auto">

        <div class="w-full">
          <h6 class="accent-heading mb-0">Customer Story:</h6>
          <div class="flex flex-col md:flex-row">
            <div class="w-full md:w-7/12">
              <h4>Top 3 Global Insurance Company</h4>
              <p>One of the biggest insurance companies in the world selected Yellowbrick over Greenplum and others to help it hit IFRS 17 compliance targets, enabling complex and high-performance analytics on billions of rows of data, full data consistency, and 24/7 availability.</p>
              <g-link to="/resources/case-studies/top-global-insurance-company/" class="button yellow mr-4">Read Case Study</g-link>
              <g-link to="/customers/" class="button outline">See Other Customer Stories</g-link>
            </div>
            <div class="flex w-full items-center md:w-5/12">
              <img src="/uploads/customers/insurance-tight.svg" alt="Top 3 Global Insurance Company logo" class="w-full sm:w-3/4 mx-auto"/>
            </div>
            </div>
        </div>
        
        <div class="flex flex-col md:flex-row -mx-3 mt-8">

          <div class="flex w-1/3 p-3">
            <div class="p-6 bg-gray-500 text-white shadow-md">
              <h5 class="rfs-text-3xl font-semibold text-yellow1 leading-none m-0 mb-3">Comprehensive Policy Analysis from Days to Hours</h5>
              <p>A full-cost analysis of all policies across multiple lines of business that took 2 days now takes less than 2 hours with Yellowbrick.</p>
            </div>
          </div>

          <div class="flex w-1/3 p-3">
            <div class="p-6 bg-gray-500 text-white shadow-md">
              <h5 class="rfs-text-3xl font-semibold text-yellow1 leading-none m-0 mb-3">More Accurate Underwriting Across Multiple Months</h5>
              <p>Insurance underwriting analysis is now more accurate for hundreds of concurrent users because much more historical data can be processed than previously.</p>
            </div>
          </div>

          <div class="flex w-1/3 p-3">          
            <div class="p-6 bg-gray-500 text-white shadow-md">
              <h5 class="rfs-text-3xl font-semibold text-yellow1 leading-none m-0 mb-3">Compliance Goals Hit Ahead of Schedule</h5>
              <p>The company will be the first insurer in its country running IFRS 17-compliant systems.</p>
            </div>
          </div>

        </div>

      </div>
    </section>

    <MoreInfo />

  </Layout>
</template>

<script>
import MoreInfo from '~/components/MoreInfo.vue'
import TransitionExpand from '~/components/TransitionExpand.vue'

export default {
  metaInfo: {
    title: 'Yellowbrick for Healthcare & Life Sciences',
    meta: [
      { 
        key: 'description',
        name: 'description',
        content: 'Yellowbrick Hybrid Cloud Data Warehouse gives telecommunication companies a sharpened competitive edge with real-time speed, petabyte scale, and industry-leading deployment flexibility.'
      },
      {
        key: 'og:description',
        name: "og:description",
        content: 'Yellowbrick Hybrid Cloud Data Warehouse gives telecommunication companies a sharpened competitive edge with real-time speed, petabyte scale, and industry-leading deployment flexibility.'
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'Yellowbrick Hybrid Cloud Data Warehouse gives telecommunication companies a sharpened competitive edge with real-time speed, petabyte scale, and industry-leading deployment flexibility.'
      },
      {
        key: 'og:title',
        name: 'og:title',
        content: 'Yellowbrick for Healthcare & Life Sciences'
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'Yellowbrick for Healthcare & Life Sciences'
      }
    ]
  },
  components: {
    MoreInfo,
    TransitionExpand
  },
  data() {
    return {
      expanded: false,
    };
  }

}
</script>

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
          <h1 class="rfs-text-6xl">Yellowbrick for Financial Services</h1>
          <p class="rfs-text-lg">The world’s fastest data warehouse for hybrid and multi-cloud environments gives financial services companies (banks, hedge funds, payment processors, et al) a sharpened competitive edge with real-time speed, petabyte scale, and industry-leading deployment flexibility</p>
        </div>
      </div>
    </section>

    <section class="bg-white pb-16 mb-16 pt-16 px-6 xl:px-0">
      <div class="mx-auto w-full max-w-1200">
        <h2>Financial Services Industry Solutions</h2>

        <div class="flex flex-col md:flex-row -mx-3 mt-6">

          <div class="flex w-full md:w-1/3 p-3">
            <div class="p-6 bg-white shadow-md relative">
              <span class="accent"></span>
              <p class="rfs-text-xl font-semibold"><span class="rfs-text-3xl font-semibold text-gray-400 leading-none m-0">Discover</span> the impact real-time data can have on your organization</p>
            </div>
          </div>

          <div class="flex w-full md:w-1/3 p-3">
            <div class="p-6 bh-white shadow-md relative">
              <span class="accent"></span>
              <p class="rfs-text-xl font-semibold"><span class="rfs-text-3xl font-semibold text-gray-400 leading-none m-0">Learn</span> what the global digital transformation of financial services means for your business and customers</p>
            </div>
          </div>

          <div class="flex w-full md:w-1/3 p-3">
            <div class="p-6 bh-white shadow-md relative">
              <span class="accent"></span>
              <p class="rfs-text-xl font-semibold"><span class="rfs-text-3xl font-semibold text-gray-400 leading-none m-0">See</span>  why the Hybrid Cloud is an essential part of of the new digital financial frontier</p>
            </div>
          </div>


        </div>
      </div>
    </section>

    
    
    <section class="flex pb-8 bg-gray-100 px-6 xl:px-0">
      <div class="flex flex-col justify-center max-w-1200 mx-auto">
        <div class="break-plane p-10 bg-white shadow-lg relative">
          <span class="accent"></span>
          <h3 class="text-gray-500 mb-8">In Financial Services, Investing in Aging Solutions Won't Solve New Problems</h3>
          <div class="text-gray-500 w-full">
            <p class="rfs-text-lg">The financial services industry is undergoing a digital transformation as consumers and even businesses demand a fully integrated customer experience across all channels, from social media and other digital channels to in-person conversations. At the same time, consumers are more educated and empowered to shop around for financial services, requiring financial services companies to put more effort into marketing and maintaining relationships. They need to understand the customer journey in greater detail and be able to instantly act upon it. As a result, financial companies are using more sophisticated data, analytics, and marketing to find, retain, and grow customer relationships and business opportunities. </p>

            <p class="rfs-text-lg">For financial services organizations, aging legacy platforms like IBM Netezza and Teradata (and even Apache Hadoop) don't offer the price/performance and flexibility to fulfill that vision, while the cloud-only data warehouse companies, like Snowflake fail to deliver the predictable performance at scale for enterprise requirements. Instead, the Yellowbrick Data Warehouse delivers 100X performance at enterprise scale whether in a data center or through a major public cloud, while avoiding the risks and unpredictable costs of cloud-only options.</p>

            <!-- <transition-expand>
              <div v-if="expanded">
                <p class="rfs-text-lg">...</p>
              </div>
            </transition-expand>

            <button @click="expanded = !expanded" class="button dark">
              {{ expanded ? `Read Less` : `Read More` }}
            </button> -->

          </div>
        </div>

      </div>
    </section>

    <section class="flex py-12 md:py-16 bg-white px-6 xl:px-0">
      <div class="flex flex-col items-start max-w-1200 mx-auto">

        <div class="w-full">
          <!-- <img src="/uploads/customers/finserv-formatted.svg" alt="Financial Services Top 10 logo" class="w-48 -my-4"/> -->
          <h3 class="accent-heading mb-0">Customer Story:</h3>
          <div class="flex flex-col md:flex-row">
            <div class="w-full md:w-7/12">
              <h4>Top 10 Financial Services Company</h4>
              <p>This multinational financial services corporation captures millions of transactions daily, and Yellowbrick helps it analyze PBs of that data across partner and co-branding programs, merchant services, reward-points programs, and more. Thousands of analysts require immediate access to this data via ad-hoc, interactive queries as well as pre-built reports.</p>
              <g-link to="/resources/case-studies/top-financial-services-company/" class="button yellow mr-4 mb-3">Read Case Study</g-link>
              <g-link to="/customers/" class="button outline mb-3">See Other Customer Stories</g-link>
            </div>
            <div class="flex w-full items-center md:w-5/12">
              <img src="/uploads/customers/finserv-tight.svg" alt="Financial Services Top 10 logo" class="w-full sm:w-3/4 mx-auto"/>
            </div>
            </div>
        </div>
        
        <div class="flex flex-col md:flex-row -mx-3 mt-8">

          <div class="flex w-full md:w-1/3 p-3">
            <div class="p-6 bg-gray-500 text-white shadow-md">
              <span class="rfs-text-3xl font-semibold text-yellow1 leading-none m-0">100X FASTER</span>
              <h6>100X Faster Time-to-Insight</h6>
              <p>Not only are some queries 100X faster than before with Netezza, but analysts can now run queries that were previously impossible.</p>
            </div>
          </div>

          <div class="flex w-full md:w-1/3 p-3">
            <div class="p-6 bg-gray-500 text-white shadow-md">
              <span class="rfs-text-3xl font-semibold text-yellow1 leading-none m-0">DATA IN MINUTES</span>
              <h6>Data Availability in Minutes, Not Hours</h6>
              <p>Some data loads that took 7-10 hours now complete in under 20 minutes, using existing ETL tools.</p>
            </div>
          </div>
          

          <div class="flex w-full md:w-1/3 p-3">          
            <div class="p-6 bg-gray-500 text-white shadow-md">
              <span class="rfs-text-3xl font-semibold text-yellow1 leading-none m-0">HUGE SAVINGS</span>
              <h6>Slashed Data Center Expenses</h6>
              <p>The company replaced entire racks of Netezza with a Yellowbrick instance, dramatically reducing rack-space and power &amp; cooling requirements.</p>
            </div>
          </div>

          <!-- <div class="flex flex-row w-1/4 p-3">          
            <div class="flex bg-gray-500 p-6 shadow-md">
              <span class="text-7xl border-4 border-white self-center text-white rounded-full p-10 w-48 h-48 align-middle text-center mx-auto">+</span>
            </div>
          </div> -->

        </div>

      </div>
    </section>

    <section class="bg-gray-100 pb-32 pt-16 px-6 xl:px-0">
      <div class="mx-auto w-full max-w-1200">
        <h3 class="text-gray-500 rfs-text-3xl">Financial Services Industry Resources</h3>
        <p class="rfs-text-lg pb-6">Read how the digital transformation of financial services will shape your organization and why the Hybrid Cloud is your best resource for making the leap into the new digital environment.</p>
        <div class="flex flex-col sm:flex-row flex-wrap">

          <div class="flex flex-col w-full cc:w-1/3 p-8 cc:p-10 bg-gray-100 shadow-lg">
            <img src="/uploads/ebook-finserv.jpg" alt="" class="w-full shadow-md self-start mb-8" />
            <h4 class="text-gray-400 font-normal rfs-text-sm mb-0">Featured eBook:</h4>
            <h5 class="mb-6">Yellowbrick for Financial Services</h5>
            <a href="/go/yellowbrick-for-banking-and-financial-services/" class="button yellow">Read Now</a>
          </div>

          <div class="flex flex-col flex-wrap md:flex-row w-full cc:w-2/3 py-8 px-0 cc:p-10 cc:pb-24 justify-around">

            <div class="flex flex-row w-full mb-12 md:w-1/3 md:flex-col md:w-1/3 md:pr-6">
              <img src="/uploads/finserv-analytics-brief-thumb.png" alt="" class="w-5/12 md:w-2/3 shadow-md self-start mb-6" />
              <div class="w-7/12 md:w-full pl-5 md:p-0 flex flex-col md:flex-grow">
                <h6 class="text-gray-400 font-normal rfs-text-sm mb-0">Brief:</h6>
                <h5 class="mb-6">Real-time analytics for Financial Services</h5>
                <a href="/uploads/Yellowbrick_Brief_FinServ_Analytics.pdf" id="finserv-analytics-brief" class="button yellow md:mt-auto ungated-asset" target="_blank" rel="noopener">Read Now</a>
              </div>
            </div>


            <div class="flex flex-row w-full mb-12 md:w-1/3 md:flex-col md:w-1/3 md:pr-6">
              <img src="/uploads/cs-top10-financial-services-thumb.jpg" alt="" class="w-5/12 md:w-2/3 shadow-md self-start mb-6" />
              <div class="w-7/12 md:w-full pl-5 md:p-0 flex flex-col md:flex-grow">
                <h4 class="text-gray-400 font-normal rfs-text-sm mb-0">Case Study:</h4>
                <h5 class="mb-6">Top 10 Financial Services</h5>
                <a href="/resources/case-studies/top-financial-services-company/" class="button yellow md:mt-auto">Read Now</a>
              </div>
            </div>

            <div class="flex flex-row w-full mb-12 md:w-1/3 md:flex-col md:w-1/3 md:pr-6">
              <img src="/uploads/cs-threatmetrix-thumb.jpg" alt="" class="w-5/12 md:w-2/3 shadow-md self-start mb-6" />
              <div class="w-7/12 md:w-full pl-5 md:p-0 flex flex-col md:flex-grow">
                <h4 class="text-gray-400 font-normal rfs-text-sm mb-0">Case Study:</h4>
                <h5 class="mb-6">ThreatMetrix</h5>
                <a href="/resources/case-studies/lexisnexis/" class="button yellow md:mt-auto">Read Now</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <MoreInfoSeo />

  </Layout>
</template>

<script>
import MoreInfoSeo from '~/components/MoreInfoSeo.vue'
import TransitionExpand from '~/components/TransitionExpand.vue'

export default {
  metaInfo: {
    title: 'Yellowbrick Financial Services Industry Solutions',
    meta: [
      { 
        key: 'description',
        name: 'description',
        content: 'Yellowbrick data warehousing gives financial services companies a competitive edge with real-time speed, petabyte scale, and premier deployment flexibility.'
      },
      {
        key: 'og:description',
        name: "og:description",
        content: 'Yellowbrick data warehousing gives financial services companies a competitive edge with real-time speed, petabyte scale, and premier deployment flexibility.'
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'Yellowbrick data warehousing gives financial services companies a competitive edge with real-time speed, petabyte scale, and premier deployment flexibility.'
      },
      {
        key: 'og:title',
        name: 'og:title',
        content: 'Yellowbrick Financial Services Industry Solutions'
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'Yellowbrick Financial Services Industry Solutions'
      }
    ]
  },
  components: {
    MoreInfoSeo,
    TransitionExpand
  },
  data() {
    return {
      expanded: false,
    };
  }

}
</script>

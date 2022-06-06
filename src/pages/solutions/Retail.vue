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
          <h1 class="rfs-text-6xl">Yellowbrick for Retail</h1>
          <p class="rfs-text-lg">The world’s fastest data warehouse for hybrid and multi-cloud environments gives retailers a sharpened competitive edge with real-time speed, petabyte scale, and industry-leading deployment flexibility</p>
        </div>
      </div>
    </section>
    
    <section class="bg-white pb-32 pt-16 px-6 xl:px-0">
      <div class="mx-auto w-full max-w-1200">
        <div class="flex flex-col sm:flex-row flex-wrap">

          <div class="flex flex-col w-full md:w-1/3 p-8 md:p-10 bg-gray-100">
            <img src="/uploads/ebook-retail-thumb.png" alt="" class="w-full border-4 border-white shadow-md self-start mb-8" />
            <h6 class="text-gray-400 font-normal rfs-text-sm mb-0">Featured eBook:</h6>
            <h5 class="mb-6">Yellowbrick for Retail</h5>
            <a href="/go/yellowbrick-for-retail/" class="button yellow">Read Now</a>
          </div>

          <div class="flex flex-col md:flex-row w-full md:w-2/3 py-6 px-0 md:p-8 justify-around">

            <div class="flex flex-row md:flex-col w-full md:w-5/12">
              <img src="/uploads/cs-threatmetrix-thumb.jpg" alt="" class="w-5/12 md:w-2/3 shadow-md self-start mb-6" />
              <div class="w-7/12 md:w-full pl-5 md:pl-0">
                <h6 class="text-gray-400 font-normal rfs-text-sm mb-0">Whitepaper:</h6>
                <h5 class="mb-6">Data Lake Augmentation</h5>
                <a href="/go/unlocking-value-in-data-lakes-with-hybrid-cloud-analytics/" class="button yellow">Download</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    
    <section class="flex pb-8 bg-gray-100 px-6 xl:px-0">
      <div class="flex flex-col justify-center max-w-1200 mx-auto">
        <div class="break-plane p-10 bg-white shadow-lg relative">
          <span class="accent"></span>
          <h3 class="text-gray-500 mb-8">In Retail, Tired or Risky Solutions Lead to Buyer's Remorse</h3>
          <div class="text-gray-500 w-full">
            <p class="rfs-text-lg">For mass-market retailers, club stores, grocery stores, drug stores, department stores, specialty stores, and eCommerce companies, quickly and cost effectively analyzing an ever-expanding amount of data for Customer 360 and other goals has never been more important in the face of massive disruption. But it’s never been harder and more complex. Customers, sales, products, merchandise, and channels have always been the core drivers of a retail business, but now those drivers involve an ever-expanding deluge of related data from myriad sources.</p>

            <p class="rfs-text-lg">The Yellowbrick Data Warehouse provides a path for retailers to safely transform their data and analytics infrastructure while leveraging existing systems and data sources. Its highly scalable architecture delivers 100X performance at enterprise scale, enabling retailers to build a real-time, standards-based analytics platform that leverages existing tools, models, and investments in the cloud or on-premises, while providing breakthrough price/performance and flexibility far beyond what legacy platforms like IBM Netezza and Teradata (or even Apache Hadoop), or cloud-only options like Snowflake, can provide. The result? Workloads that complete sub-seconds instead of minutes, and that includes years of historical data instead of just months. That's a huge business advantage.</p>

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
          <h6 class="accent-heading mb-0">Customer Story:</h6>
          <div class="flex flex-col md:flex-row">
            <img src="/uploads/customers/symphony-crop.svg" alt="Symphony RetailAI logo"  class="w-3/4 xs:w-1/2 my-5 block md:hidden"/>
            <div class="w-full md:w-7/12">
              <h4>Symphony RetailAI</h4>
              <p>Symphony RetailAI helps retailers and CPG manufacturers drive profitable revenue growth through AI-enabled decision-making. Its customers include 15 of the world’s 25 largest grocery retailers, thousands of retail brands, and hundreds of national and regional chains. Yellowbrick helped the company consolidate disparate IBM Netezza, 1010 Data, and Microsoft SQL Server data warehouses into a single solution that offers unparalleled price-performance at massive scale.</p>
              <g-link to="/resources/case-studies/symphony-retail-AI/" class="button yellow mr-0 md:mr-4 mb-4 md:mb-0">Read Case Study</g-link>
              <g-link to="/customers/" class="button outline">See Other Customer Stories</g-link>
            </div>
            <div class="flex w-full items-center md:w-5/12 hidden md:flex">
              <img src="/uploads/customers/symphony-crop.svg" alt="Symphony RetailAI logo"  class="w-full sm:w-3/4 mx-auto"/>
            </div>
            </div>
        </div>
        
        <div class="w-full flex flex-col sm:flex-row flex-wrap -mx-3 mt-8">

          <div class="flex flex-row flex-wrap w-full sm:w-1/2 md:w-1/3 p-3">
            <div class="p-6 bg-gray-600 text-white shadow-md">
              <h5 class="rfs-text-3xl font-semibold text-yellow1 leading-none m-0 mb-3">2X Performance with 10X Accuracy</h5>
              <p>The company can now report on 10X more data, and processes those reports twice as fast.</p>
            </div>
          </div>

          <div class="flex flex-row flex-wrap w-full sm:w-1/2 md:w-1/3 p-3">
            <div class="p-6 bg-gray-600 text-white shadow-md">
              <h5 class="rfs-text-3xl font-semibold text-yellow1 leading-none m-0 mb-3">12 Hours Saved per Week on Data Movement</h5>
              <p>Symphony RetailAI clients now get reports much faster because GBs of data needn’t be moved anymore before queries can be run.</p>
            </div>
          </div>

          <div class="flex flex-row flex-wrap w-full sm:w-1/2 md:w-1/3 p-3">          
            <div class="p-6 bg-gray-600 text-white shadow-md">
              <h5 class="rfs-text-3xl font-semibold text-yellow1 leading-none m-0 mb-3">5X Price/Performance Over Alternatives</h5>
              <p>During testing, Yellowbrick proved out price/performance superior to all alternatives.</p>
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
    title: 'Yellowbrick Retail Industry Solutions',
    meta: [
      { 
        key: 'description',
        name: 'description',
        content: 'Yellowbrick Hybrid Cloud Data Warehouse gives retailers a competitive edge compared to other data warehouses.'
      },
      {
        key: 'og:description',
        name: "og:description",
        content: 'Yellowbrick Hybrid Cloud Data Warehouse gives retailers a competitive edge compared to other data warehouses.'
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'Yellowbrick Hybrid Cloud Data Warehouse gives retailers a competitive edge compared to other data warehouses.'
      },
      {
        key: 'og:title',
        name: 'og:title',
        content: 'Yellowbrick Retail Industry Solutions'
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'Yellowbrick Retail Industry Solutions'
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

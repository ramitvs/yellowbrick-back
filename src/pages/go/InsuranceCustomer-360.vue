<style scoped>
  .hero {
    background-image: url(/uploads/images/hero-new.svg);
    background-size: cover;
    background-position: center center;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      @apply bg-gray-700 absolute z-0;
      opacity: .7;
    }
  }

  .accent-heading:before {
    left: auto;
  }
</style>

<template>
  <Layout>

    <section class="hero flex bg-gray-700 py-10 md:py-12 text-white px-6 xl:px-0">
      <div class="flex flex-col md:flex-row max-w-1200 w-full py-8 mx-auto relative z-10">

        <div class="w-full p-0 md:pr-16 text-gray-700 md:text-white">
          <h5 class="text-yellow1 mb-6 md:mb-2">Industry Whitepaper with Systech</h5>
          <div class="bg-white md:bg-transparent p-6 md:p-0">
            <h1 class="p-0">Insurance customer 360° on a distributed cloud architecture</h1>
            <div class="float-none lg:float-left w-full xs:w-3/4 sm:mx-0 shadow-md sm:shadow-none lg:w-1/4 m-0 mb-8 lg:mb-0 lg:mr-10 lg:mb-12 lg:mt-3">
              <img src="/uploads/thumb-whitepaper-systech-insurance-360.png" class="w-full border-8 border-white" alt="Modernize Your Data Warehouse eBook" />
            </div>
            <p class="rfs-text-base">For insurance companies, achieving a “360-degree view” of the customer journey (customer 360) is one of the most important requirements for ensuring excellent customer service, creating precision marketing
              campaigns that lead to upsell/cross-sell, calculating risk thoroughly and accurately, and meeting regulatory requirements.</p>
            <p class="rfs-text-base">This whitepaper presents four use cases of insurance customer 360 analytics and highlights how the insights can be applied to deliver a better customer experience and drive targeted activities to optimize profits.
              To help visualize data, Tableau dashboards are provided for each use case with sample data in Yellowbrick Data Warehouse. </p>
            <h5 class="rfs-text-base accent-heading mt-10 mb-0 pb-0">Download this whitepaper and see how Yellowbrick’s architecture can enable these use cases and deliver real-time analytics with the fastest performance in the industry.</h5>
            <a href="https://ww2.yellowbrick.com/hubfs/Resources/Whitepapers/WP%20Yellowbrick%20Systech%20Distributed%20Clouds%20Customer%20360.pdf" target="_blank" rel="noopener" id="whitepaper_systech-insurance-360"
              class="whitepaper ungated-asset button yellow mt-6">Download Now</a>
          </div>
        </div>
      </div>
    </section>

    <GoCustomers />

  </Layout>
</template>

<script>
  import GoCustomers from "~/components/GoCustomers.vue";
  import Layout from '~/layouts/Landing.vue';

  export default {
    metaInfo: {
      title: 'Insurance customer 360 on a distributed cloud architecture - Whitepaper - Yellowbrick Data',
      meta: [{
          key: 'description',
          name: 'description',
          content: 'Read about four use cases of insurance customer 360 analytics and how insights can be applied to deliver a better customer experience and drive targeted activities to optimize profits.'
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: 'Read about four use cases of insurance customer 360 analytics and how insights can be applied to deliver a better customer experience and drive targeted activities to optimize profits.'
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: 'Read about four use cases of insurance customer 360 analytics and how insights can be applied to deliver a better customer experience and drive targeted activities to optimize profits.'
        },
        {
          key: 'og:image',
          name: 'og:image',
          content: 'https://www.yellowbrick.com/uploads/thumb-whitepaper-systech-insurance-360.png'
        },
        {
          key: 'twitter:image',
          name: 'twitter:image',
          content: 'https://www.yellowbrick.com/uploads/thumb-whitepaper-systech-insurance-360.png'
        }
      ]
    },
    components: {
      GoCustomers,
      Layout
    }
  };
</script>
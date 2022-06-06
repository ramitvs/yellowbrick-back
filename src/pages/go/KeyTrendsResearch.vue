<style scoped>
  .hero {
    background-image: url(/uploads/images/hero-bg.svg);
    background-size: cover;
    background-position: center center;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      @apply bg-gray-600 absolute z-0;
      opacity: .7;
    }
  }

  .predictability-bg {
    background-image: url(/uploads/images/predictability-bg.svg);
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: 50%;
  }

  .dk-bg {
    color: #ffffff !important;
  }


  .float-form {
    @apply relative p-8 bg-gray-200 shadow-lg;
  }
</style>

<template>
  <Layout>
    <section class="hero flex bg-gray-700 py-10 md:py-12 text-white px-6 xl:px-0">
      <div class="flex flex-col md:flex-row max-w-1200 w-full py-8 mx-auto relative z-10">

        <div class="w-full md:w-2/3 p-0 md:pr-16 text-gray-700 md:text-white">
          <h5 class="text-yellow1 mb-6 md:mb-2">Hybrid, Multicloud, and Distributed Cloud</h5>
          <div class="bg-white md:bg-transparent p-6 md:p-0">
            <h1 class="p-0">Key Trends in Cloud Data Warehousing</h1>
            <img src="/uploads/thumb-whitepaper-key-trends-research.png" class="float-none sm:float-left w-1/2 mx-auto sm:mx-0 shadow-md sm:shadow-none sm:w-5/12 m-0 mb-6 sm:mb-0 sm:mr-10 sm:mb-6 sm:mt-3"
              alt="Yellowbrick Data Research Paper: Key Trends in Hybrid, Multicloud and Distributed Cloud for 2021" />
            <p class="rfs-text-lg">To better understand the impact of unprecedented changes on businesses and their IT infrastructures, Yellowbrick Data surveyed enterprise IT managers and executives and uncovered their data warehousing and analytics
              priorities.</p>
            <p class="rfs-text-lg">The survey revealed some initially surprising results, given all the challenges that organizations are coping with.</p>
            <p class="rfs-text-lg">Download this free, insightful report now to learn about key data warehousing trends in 2021.</p>
          </div>
        </div>

        <div class="w-full md:w-1/3 ">
          <div class="float-form">
            <h3 class="text-gray-700">Download today</h3>
            <BaseHubspot id="a948b6d1-a089-429e-860d-fecd2e51edda" sfid="7011G000000KZZzQAO" />
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
      title: 'Key Trends in Cloud Data Warehousing - Yellowbrick Data',
      meta: [{
          name: 'description',
          content: 'Yellowbrick Data surveyed enterprise IT managers and executives and uncovered their data warehousing and analytics priorities.'
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: 'Key Trends in Cloud Data Warehousing'
        },
        {
          key: 'og:description',
          name: "og:description",
          content: 'Yellowbrick Data surveyed enterprise IT managers and executives and uncovered their data warehousing and analytics priorities.'
        },
        {
          key: 'og:image',
          name: 'og:image',
          content: 'https://yellowbrick.com/uploads/YB_KeyTrendsPaperAds_1200x627.png'
        },
        {
          key: 'twitter:title',
          name: 'og:title',
          content: 'Key Trends in Cloud Data Warehousing'
        },
        {
          key: 'twitter:description',
          name: 'og:description',
          content: 'Yellowbrick Data surveyed enterprise IT managers and executives and uncovered their data warehousing and analytics priorities.'
        },
        {
          key: 'twitter:image',
          name: 'og:image',
          content: 'https://yellowbrick.com/uploads/YB_KeyTrendsPaperAds_1200x627.png'
        }
      ]
    },
    components: {
      GoCustomers,
      Layout
    }
  };
</script>
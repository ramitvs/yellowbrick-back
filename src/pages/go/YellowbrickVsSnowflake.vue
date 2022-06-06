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

  .float-form {
    @apply relative p-8 bg-gray-200 shadow-lg;
  }

  .basehubspot-button {
    display: inline-flex;
    padding: .75rem 2rem;
  }

  .basehubspot-button>>>.hs-button {
    background: none;
    font-weight: 600;
  }
</style>

<template>
  <Layout>

    <section class="hero flex bg-gray-700 py-10 md:py-12 text-white px-6 xl:px-0">
      <div class="flex flex-col md:flex-row max-w-1200 w-full py-8 mx-auto relative z-10">

        <div class="w-full md:w-2/3 p-0 md:pr-16 text-gray-700 md:text-white">
          <h5 class="text-yellow1 mb-6 md:mb-2">Yellowbrick vs Snowflake White Paper</h5>
          <div class="bg-white md:bg-transparent p-6 md:p-0">
            <h1 class="p-0">Comparing Yellowbrick Data Warehouse to Snowflake</h1>
            <div class="float-none lg:float-left w-full xs:w-3/4 sm:mx-0 shadow-md sm:shadow-none lg:w-2/5 m-0 mb-8 lg:mb-0 lg:mr-10 lg:mb-12 lg:mt-3">
              <img src="/uploads/thumb-whitepaper-yellowbrick-vs-snowflake.png" class="w-full border-8 border-white" alt="Comparing Yellowbrick Data Warehouse to Snowflake" />
            </div>
            <p class="rfs-text-base">As Snowflake has become more popular, its shortcomings have also become more clear.</p>
            <p class="rfs-text-base">Beyond simple cookie-cutter reporting, Snowflake can’t handle the ever-evolving needs of enterprise analytics. Snowflake can also be very expensive, with costs difficult to predict. And its lack of hybrid or
              inter-cloud options leaves you vulnerable to outages, like the global one we saw in late June 2021.</p>
            <p class="rfs-text-base">Yellowbrick is different. We’ve adopted a cloud-native/Kubernetes-based architecture that provides complete deployment flexibility along with an intense focus on predictable pricing, speed, scale, ease of
              management, and compatibility. This white paper explains how.</p>
          </div>
        </div>

        <div class="w-full md:w-1/3">
          <div class="float-form">
            <h3 class="text-gray-700">Download today</h3>
            <BaseHubspot class="button yellow basehubspot-button" id="c826ff64-739d-4a46-8dc3-0b9552948d6a" sfid="7011G000000KaXQQA0" />
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
      title: 'Whitepaper: Comparing Yellowbrick Data Warehouse to Snowflake - Yellowbrick Data',
      meta: [{
          key: 'description',
          name: 'description',
          content: 'Download this Whitepaper to learn about the differences between Yellowbrick Data Warehouse and Snowflake.'
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: 'Download this Whitepaper to learn about the differences between Yellowbrick Data Warehouse and Snowflake.'
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: 'Download this Whitepaper to learn about the differences between Yellowbrick Data Warehouse and Snowflake.'
        },
        {
          key: 'og:image',
          name: 'og:image',
          content: 'https://www.yellowbrick.com/uploads/thumb-whitepaper-yellowbrick-vs-snowflake.png'
        },
        {
          key: 'twitter:image',
          name: 'twitter:image',
          content: 'https://www.yellowbrick.com/uploads/thumb-whitepaper-yellowbrick-vs-snowflake.png'
        }
      ]
    },
    components: {
      GoCustomers,
      Layout
    }
  };
</script>

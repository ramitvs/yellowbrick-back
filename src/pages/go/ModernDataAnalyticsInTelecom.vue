<style scoped>
  .hero {
    background-image: url(/uploads/images/hero-alt-bg.svg);
    background-size: cover;
    background-position: center center;

    &:before {
      height: 2rem;
    }
  }

  .freedom-bg {
    background-image: url(/uploads/images/freedom-bg.svg);
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: 45%;
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

        <div class="w-full md:w-7/12 p-0 md:pr-16 text-gray-700 md:text-white">

          <h5 class="text-yellow1 mb-2">On-Demand Webcast:</h5>
          <!-- <div class="flex flex-col sm:flex-row justify-between pt-4 pb-8">
            <div class="flex items-center w-3/4 sm:w-5/12"><img src="/uploads/images/webinars/striim.svg" alt="striim logo" class="w-full" /></div>
            <div class="flex items-center w-3/4 md:w-1/6"><span class="text-white rfs-text-6xl text-center w-full">+</span></div>
            <div class="flex items-center w-3/4 sm:w-5/12"><img src="/uploads/images/yb-logo.svg" alt="yellowbrick logo" class="w-full" /></div>
          </div> -->

          <div class="bg-white md:bg-transparent p-6 md:p-0">
            <h1 class="rfs-text-5xl p-0">Modern Data Analytics <span class="whitespace-no-wrap">in Telecom</span></h1>
            <h4>New Risks and Rewards for the Industry</h4>
            <p class="rfs-text-lg">No industry relies more on data analytics for innovation than telecommunications. From increases in data volumes, the rise of 5G, and more and more connected devices, only the organizations that invest in a modern
              data infrastructure will be prepared to integrate, process, and analyze the mountains of new data. What are you doing today to get ready?</p>

            <p class="rfs-text-lg">Sign up to learn from industry experts about: </p>

            <ul class="rfs-text-lg">
              <li>Why legacy data infrastructures are hurting your bottom line</li>
              <li>How data modernization can better prepare your business for 5G</li>
              <li>What path to data-driven success in Telco looks like</li>
            </ul>
          </div>

        </div>

        <div class="w-full md:w-1/3">
          <div class="float-form">
            <h3 class="text-gray-700">Watch On-Demand</h3>
            <BaseHubspot class="button yellow basehubspot-button" id="58a786b3-c61c-46bc-bdbf-ebe0a422da4f" sfid="7011G000000KRDbQAO" />
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
      title: 'Modern Data Analytics in Telco',
      meta: [{
        key: 'description',
        name: 'description',
        content: 'No industry relies more on data analytics for innovation, if not survival, than telecommunications, whether for business support, network operations, customer care, or marketing.'
      }]
    },
    components: {
      GoCustomers,
      Layout
    }
  };
</script>
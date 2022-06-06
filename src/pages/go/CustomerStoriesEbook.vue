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

  .hero-half {
    @apply bg-white;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 60%;
      background-image: url(/uploads/images/hero-new.svg);
      background-size: cover;
      background-position: center center;
      @apply bg-gray-700 absolute z-0;
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

  .ebook-thumb {
    max-height: 400px;
    width: auto;
    margin: auto;
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
          <h5 class="text-yellow1 mb-6 md:mb-2">eBook:</h5>
          <div class="bg-white md:bg-transparent p-6 md:p-0">
            <h1 class="p-0">Yellowbrick Customer Stories eBook</h1>
            <div class="float-none lg:float-right w-full xs:w-3/4 sm:mx-0 shadow-md sm:shadow-none lg:w-1/2 m-0 mb-8 lg:ml-10 lg:mb-12 lg:mt-3">
              <img src="/uploads/thumb-ebook-customer-stories.png" class="w-full ebook-thumb" alt="Yellowbrick Customer Stories - eBook - Yellowbrick Data" />
            </div>
            <p class="rfs-text-lg">Yellowbrick offers massive scalability and supports vast numbers of concurrent users. This means our clients gain deeper, more meaningful insights into their customers more quickly than ever before possible, setting
              us apart from other cloud data warehouses.</p>
            <p class="rfs-text-lg">Download this eBook to check out our customers' stories to see how we’ve increased data warehousing and querying speed, efficiency, and affordability for clients working to support a host of industries.</p>
            <h5 class="rfs-text-lg accent-heading mt-10 mb-0 pb-0">Here’s a few customers and highlights of their achievements with Yellowbrick:</h5>
            <div class="flex flex-col md:flex-row">
              <ul class="rfs-text-base w-full mb-0 pb-0 md:mb-2 md:pb-2">
                <li>Symphony RetailAI experiences faster, more accurate data processing</li>
                <li>TEOCO saves millions of dollars after switching to Yellowbrick</li>
              </ul>
              <ul class="rfs-text-base w-full pt-0 mt-0 md:mt-2 md:pt-2">
                <li>Melco receives 4X more data at less cost with Yellowbrick</li>
                <li>
                  and more!
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="w-full md:w-1/3 ">
          <div class="float-form">
            <h3 class="text-gray-700">Download today</h3>
            <BaseHubspot id="19f5a281-d8f9-4bee-87f5-b96953e24fc5" sfid="7011G000000Kc7oQAC" />
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
      title: 'Yellowbrick Customer Stories - eBook - Yellowbrick Data',
      meta: [{
          key: 'description',
          name: 'description',
          content: 'Don’t take our word for it! Download this eBook to hear why real customers chose Yellowbrick Cloud Data Warehouse.'
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: 'Don’t take our word for it! Download this eBook to hear why real customers chose Yellowbrick Cloud Data Warehouse.'
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: 'Don’t take our word for it! Download this eBook to hear why real customers chose Yellowbrick Cloud Data Warehouse.'
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: 'Yellowbrick Customer Stories'
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: 'Yellowbrick Customer Stories'
        },
        {
          key: 'og:image',
          name: 'og:image',
          content: 'https://www.yellowbrick.com/uploads/YB_CustomerStorieseBook_1200x627.png'
        },
        {
          key: 'twitter:image',
          name: 'twitter:image',
          content: 'https://www.yellowbrick.com/uploads/YB_CustomerStorieseBook_1200x627.png'
        }
      ]
    },
    components: {
      GoCustomers,
      Layout
    }
  };
</script>
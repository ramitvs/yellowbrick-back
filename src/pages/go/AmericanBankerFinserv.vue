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
          <h5 class="text-yellow1 mb-6 md:mb-2">American Banker</h5>
          <div class="bg-white md:bg-transparent p-6 md:p-0">
            <h1 class="p-0">Why Today's Banks Need a Real-Time Data Warehouse</h1>
            <div class="float-none lg:float-right w-full xs:w-3/4 sm:mx-0 shadow-md sm:shadow-none lg:w-1/2 m-0 mb-8 lg:ml-10 lg:mb-12 lg:mt-3">
              <img src="/uploads/thumb-ebook-american-banker-finserv.png" class="w-full ebook-thumb" alt="Why Today’s Banks Need a Real-Time Data Warehouse - eBook - Yellowbrick Data" />
            </div>
            <p class="rfs-text-lg">In today’s disruptive financial services environment, the traditional data warehouse falls woefully short. And that should be a real concern. According to Accenture’s Disruptability Index, banking has structural
              weaknesses that expose financial institutions to significant risk.</p>
            <p class="rfs-text-lg">Banks need to make rapid decisions about how to pivot to face these disruptions head-on or risk falling behind. But their current data warehouse infrastructure gets in the way. Download this eBook to learn about the
              4 benefits of a real-time data warehouse as well as how to minimize the risks of migrating to a modern data warehouse</p>
          </div>
        </div>

        <div class="w-full md:w-1/3 ">
          <div class="float-form">
            <h3 class="text-gray-700">Download today</h3>
            <BaseHubspot id="9c4fb79b-01d6-4a4d-8484-b96b77815de0" sfid="7011G000000KdhzQAC" />
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
      title: 'Why Today’s Banks Need a Real-Time Data Warehouse - eBook - Yellowbrick Data',
      meta: [{
          key: 'description',
          name: 'description',
          content: 'Download this eBook to learn about the 4 benefits of a real-time data warehouse as well as how to minimize the risks of migrating to a modern data warehouse'
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: 'Download this eBook to learn about the 4 benefits of a real-time data warehouse as well as how to minimize the risks of migrating to a modern data warehouse'
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: 'Download this eBook to learn about the 4 benefits of a real-time data warehouse as well as how to minimize the risks of migrating to a modern data warehouse'
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: 'Why Today’s Banks Need a Real-Time Data Warehouse - eBook - Yellowbrick Data'
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: 'Why Today’s Banks Need a Real-Time Data Warehouse - eBook - Yellowbrick Data'
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
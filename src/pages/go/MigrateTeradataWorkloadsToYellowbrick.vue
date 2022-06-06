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

  @media only screen and (min-width: 1201px) {
    div.bg-white div.lg\:mb-12 {
      margin-bottom: 4em;
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
          <h5 class="text-yellow1 mb-6 md:mb-2">Featured eBook:</h5>
          <div class="bg-white md:bg-transparent p-6 md:p-0">
            <h1 class="p-0">Migrate Teradata workloads to Yellowbrick for 10x performance at a tenth of the cost</h1>
            <div class="float-none lg:float-right w-full xs:w-3/4 sm:mx-0 shadow-md sm:shadow-none lg:w-1/2 m-0 mb-8 lg:mb-0 lg:ml-10 lg:mb-12 lg:mt-3">
              <img src="/uploads/ebook-teradata-thumb.png" class="w-full" alt="Migrate Teradata Workloads to Yellowbrick" />
            </div>
            <p class="rfs-text-lg">Teradata, a legacy data warehouse that has been around for decades, has a new offering. Let’s not forget that “legacy” is a very kind euphemism for “outdated.” So, what’s the new offering? A very exciting,
              paradigm-shifting change: name-only; with the same underlying infrastructure. Not a bad maneuver for influencing customers, but it doesn’t improve performance. Download the eBook to learn how you can easily migrate from Teradata's
              legacy to Yellowbrick Data Warehouse and get 10x the performance at a tenth of the cost of Teradata.</p>
            <!-- <p class="rfs-text-lg">Are you or your business users struggling with getting insights quickly from your data lake? Learn how you can save hours of wasted time digging into your data lake with Yellowbrick.</p> -->
            <h5 class="rfs-text-lg accent-heading mt-10 mb-0 pb-0">In this ebook you will learn:</h5>
            <div class="flex flex-col md:flex-row">
              <ul class="rfs-text-base w-full mb-0 pb-0 md:mb-2 md:pb-2">
                <li>The 4 pain points of Teradata users</li>
                <li>The 5 reasons enterprises migrate from Teradata to Yellowbrick</li>
                <li>How a financial services company allowed thousands of users to instantly query 5PB of data following a painless migration </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="w-full md:w-1/3 ">
          <div class="float-form">
            <h3 class="text-gray-700">Download today</h3>
            <BaseHubspot id="87dc4767-4f40-4b09-b8a1-710f8454975d" sfid="7011G000000UvzAQAS" />
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
      title: 'Migrate Teradata Workloads to Yellowbrick eBook',
      meta: [{
          key: 'description',
          name: 'description',
          content: 'Get the free eBook and learn how to migrate your Teradata workloads to Yellowbrick for 10X performance at a fraction of the cost.'
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: 'Get the free eBook and learn how to migrate your Teradata workloads to Yellowbrick for 10X performance at a fraction of the cost.'
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: 'Get the free eBook and learn how to migrate your Teradata workloads to Yellowbrick for 10X performance at a fraction of the cost.'
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: 'Migrate Teradata Workloads to Yellowbrick eBook'
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: 'Migrate Teradata Workloads to Yellowbrick eBook'
        },
        {
          key: 'og:image',
          name: 'og:image',
          content: 'https://www.yellowbrick.com/uploads/ebook-teradata-thumb.png'
        },
        {
          key: 'twitter:image',
          name: 'twitter:image',
          content: 'https://www.yellowbrick.com/uploads/ebook-teradata-thumb.png'
        }
      ]
    },
    components: {
      GoCustomers,
      Layout
    }
  };
</script>
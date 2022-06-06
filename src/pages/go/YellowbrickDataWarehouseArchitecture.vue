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
</style>

<template>
  <Layout>

    <section class="hero flex bg-gray-700 py-10 md:py-12 text-white px-6 xl:px-0">
      <div class="flex flex-col md:flex-row max-w-1200 w-full py-8 mx-auto relative z-10">

        <div class="w-full md:w-2/3 p-0 md:pr-16 text-gray-700 md:text-white">
          <h5 class="text-yellow1 mb-6 md:mb-2">Whitepaper</h5>
          <div class="bg-white md:bg-transparent p-6 md:p-0">
            <h1 class="p-0">Yellowbrick Data Warehouse Architecture</h1>
            <div
              class="float-none lg:float-left w-full xs:w-3/4 sm:mx-0 shadow-md sm:shadow-none lg:w-2/5 m-0 mb-8 lg:mb-0 lg:mr-10 lg:mb-12 lg:mt-3">
              <img src="/uploads/yellowbrick-data-warehouse-architecture-thumb.png" class="w-full border-8 border-white" alt="Modernize Your Data Warehouse eBook" />
            </div>
            <p class="rfs-text-base">Yellowbrick Data Warehouse is an advanced, massively parallel processing (MPP) SQL
              database designed for the most demanding batch, real-time, ad hoc, and mixed workloads. It can run complex
              queries at up to petabyte scale across numerous nodes, with guaranteed sub-second response times.</p>
            <p class="rfs-text-base">Yellowbrick was conceived with the goal of optimizing price/performance. New SQL
              analytics use cases are emerging all the time, and more concurrent users are consuming more ad hoc
              analytics. That requires more performance per dollar spent, and Yellowbrick architecture leapfrogs the
              industry in this respect. It’s not uncommon for customers to see their workloads run tens or hundreds of
              times faster at a fraction of the cost compared to cloud-only or legacy data warehouses.</p>
            <h5 class="rfs-text-base accent-heading mt-10 mb-0 pb-0">Download this white paper to learn about:</h5>
            <div class="flex flex-col md:flex-row">
              <ul class="rfs-text-base w-full mb-0 pb-0 md:mb-2 md:pb-2">
                <li>Design concepts behind Yellowbrick Data Warehouse</li>
                <li>Our new thinking about database design in the context of modern instances</li>
                <li>How we bring truly creative solutions to old problems such as storage management, execution
                  performance, concurrency, speed, and cost</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="w-full md:w-1/3">
          <div class="float-form">
            <h3 class="text-gray-700">Download today</h3>
            <BaseHubspot id="ce48403e-3d30-4d5c-bd27-3bde0c868521" sfid="7011G000000KYNJQA4" />
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
    title: 'Whitepaper: Yellowbrick Data Warehouse Architecture - Yellowbrick Data Warehouse',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'Learn about Yellowbrick Data Warehouse’s advanced, massively parallel processing (MPP) SQL database design and how it can run complex queries at up to petabyte scale across numerous nodes, with guaranteed sub-second response times.'
      },
      {
        key: 'og:description',
        name: 'og:description',
        content: 'Learn about Yellowbrick Data Warehouse’s advanced, massively parallel processing (MPP) SQL database design and how it can run complex queries at up to petabyte scale across numerous nodes, with guaranteed sub-second response times.'
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'Learn about Yellowbrick Data Warehouse’s advanced, massively parallel processing (MPP) SQL database design and how it can run complex queries at up to petabyte scale across numerous nodes, with guaranteed sub-second response times.'
      },
      {
        key: 'og:image',
        name: 'og:image',
        content: 'https://www.yellowbrick.com/uploads/yellowbrick-data-warehouse-architecture-thumb.png'
      },
      {
        key: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.yellowbrick.com/uploads/yellowbrick-data-warehouse-architecture-thumb.png'
      }
    ]
  },
  components: {
    GoCustomers,
    Layout
  }
};
</script>
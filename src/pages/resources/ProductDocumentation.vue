<style scoped>

.hero {
  background-image: url(/uploads/images/product-documentation-bg.svg);
  background-size: cover;
  background-position: center;
}

</style>

<template>
  <Layout>
    <section class="hero flex justify-center bg-gray-700 py-24 text-white capitalize px-6 xl:px-0">

      <div class="flex flex-col max-w-1200 w-full justify-center py-8 mx-auto z-10">
        <h1 class="m-0 p-0 w-full md:w-1/2 leading-tight">Yellowbrick Data Warehouse Documentation</h1>

      </div>
    </section>

    <section class="flex bg-gray-light py-12 md:pt-0 px-6 xl:px-0 z-20 relative">
      <div class="flex max-w-1200 w-full mx-auto">
        <div class="flex flex-wrap w-full sm:-mx-6 -mt-10 mb-6">

          <!-- <a href="/docs/4.1.1/home.html" class="box-link flex w-full px-0 sm:px-6 sm:w-1/3 my-5">
            <div class="flex flex-col w-full bg-gray-100 p-8 rounded-sm relative">
              <span class="accent"></span>
              <h3 class="pt-6">Version 4.1</h3>
              <p class="w-3/4">4.1.1 2020-07-29</p>
              <span class="mt-auto arrow-btn flex"></span>
            </div>
          </a> -->

          <!-- <a href="/docs/5.1.0/home.html" class="box-link flex w-full px-0 sm:px-6 sm:w-1/3 my-5">
            <div class="flex flex-col w-full bg-gray-100 p-8 rounded-sm relative">
              <span class="accent"></span>
              <h3 class="pt-6">Version 5.1.0</h3>
              <p class="w-3/4">5.1.0 2021-02-10</p>
              <span class="mt-auto arrow-btn flex"></span>
            </div>
          </a> -->
          <a href="/docs/5.2/home.html" class="box-link flex w-full px-0 sm:px-6 sm:w-1/3 my-5">
            <div class="flex flex-col w-full bg-gray-100 p-8 rounded-sm relative">
              <span class="accent"></span>
              <h3 class="pt-6">Version 5.2</h3>
              <span class="mt-auto arrow-btn flex"></span>
            </div>
          </a>

          <a href="/docs/4.1/home.html" class="box-link flex w-full px-0 sm:px-6 sm:w-1/3 my-5">
            <div class="flex flex-col w-full bg-gray-100 p-8 rounded-sm relative">
              <span class="accent"></span>
              <h3 class="pt-6">Version 4.1</h3>
              <span class="mt-auto arrow-btn flex"></span>
            </div>
          </a>

          <a href="/docs/testdrive/index.html" class="box-link flex w-full px-0 sm:px-6 sm:w-1/3 my-5">
            <div class="flex flex-col w-full bg-gray-100 p-8 rounded-sm relative">
              <span class="accent"></span>
              <h3 class="pt-6">Test Drive</h3>
              <span class="mt-auto arrow-btn flex"></span>
            </div>
          </a>

          <!-- <a href="/docs/3.3.5/home.html" class="box-link flex w-full px-0 sm:px-6 sm:w-1/3 my-5">
            <div class="flex flex-col w-full bg-gray-100 p-8 rounded-sm relative">
              <span class="accent"></span>
              <h3 class="pt-6">Version 3.3</h3>
              <p class="w-3/4">3.3.5 2020-06-24</p>
              <span class="mt-auto arrow-btn flex"></span>
            </div>
          </a> -->

          <!-- <a href="/docs/3.2/home.html" class="box-link flex w-full px-0 sm:px-6 sm:w-1/3 my-5">
            <div class="flex flex-col w-full bg-gray-100 p-8 rounded-sm relative">
              <span class="accent"></span>
              <h3 class="pt-6">Version 3.2</h3>
              <p class="w-3/4">3.2.0 (20522) 2019-12-06</p>
              <span class="mt-auto arrow-btn flex"></span>
            </div>
          </a> -->

        </div>
      </div>
    </section>

    <section class="bg-gray-light py-20 px-6 xl:px-0">
      <div class="flex flex-wrap max-w-1200 w-full justify-center mx-auto">

        <div class="flex flex-col w-full md:w-7/12 pr-0 md:pr-8 justify-center order-2 md:order-1 mt-6 md:mt-0">
          <h2 class="accent-heading">Yellowbrick Customer Center</h2>
          <h5 class="leading-normal">Customers have access to a full set of technical resources to assist with the operation of their Yellowbrick Data Warehouse.</h5>
          <g-link to="https://support.yellowbrick.com/" class="button yellow mt-4 mx-auto md:mx-0">Customer Center Login</g-link>
        </div>

        <div class="flex w-full md:w-5/12 order-1 md:order-2">
          <img src="/uploads/images/customer-center.png" alt="customer center" class="mx-auto pb-2 px-16 md:px-0 self-center"/>
        </div>

      </div>
    </section>

    <MoreInfo />

  </Layout>
</template>

<script>
import MoreInfo from '~/components/MoreInfo.vue'

export default {
  metaInfo: {
    title: 'Yellowbrick Product Documentation',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'Find the full set of technical resources to assist with the operation of a Yellowbrick Data Warehouse.'
      },
      {
        key: 'og:description',
        name: 'og:description',
        content: 'description',
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'description',
      }
    ]
  },
  components: {
    MoreInfo
  }
}
</script>

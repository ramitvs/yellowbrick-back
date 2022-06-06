<style scoped>
.hero {
  background-image: url(/uploads/images/customers-hero-bg.svg);
  background-size: cover;
}

.storyless {
  padding-top: 64px;
}

.storyless .customer-logo {
  max-height: 120px;
  width: 100%;
}

.storyless img {
  margin: auto;
  max-height: 80px;
  width: auto;
}

@media (max-width: 639px) {
  .storyless > div {
    max-width: 60%;
    padding-left: 0;
    padding-right: 0
  }
}

@media (max-width: 479px) {
  .storyless > div {
    max-width: 80%;
  }
}
</style>

<template>
  <Layout>
    <section
      class="hero flex bg-gray-700 py-12 md:py-24 text-white px-6 xl:px-0"
    >
      <div class="w-full max-w-1200 mx-auto">
        <h1 class="m-0 p-0 leading-tight text-5xl">Yellowbrick customers</h1>
        <p class="rfs-text-2xl max-w-800">
          The world’s top banks, insurers, retailers, telecoms, media companies,
          and more count on Yellowbrick for faster
          <span class="whitespace-no-wrap">time-to-insight</span>, helping them
          innovate and thrive.
        </p>
      </div>
    </section>

    <section class="bg-white py-12 md:py-20 px-6 xl:px-0">
      <div class="max-w-1200 w-full text-gray-700 mx-auto">
        <div class="stories flex flex-row flex-wrap mx-0 sm:-mx-4 md:-mx-5">
          <div
            v-for="(customer, index) in storyCustomers"
            :key="index"
            class="w-full md:w-1/2 lg:w-1/3 flex mb-6 sm:mb-0 px-0 sm:p-4 md:p-5"
          >
            <div class="flex flex-col p-8 shadow-md">
              <div
                class="text-gray-400 font-medium rfs-text-base mb-0"
                v-html="customer.industry"
              />
              <div
                class="rfs-text-base text-gray-500 m-0"
                v-html="customer.name"
              />
              <div class="h-48 flex items-center my-4">
                <img
                  :src="customer.image.src"
                  :alt="customer.name"
                  class="w-full max-h-full"
                />
              </div>
              <div v-html="customer.body" />
              <div class="py-4 mt-auto">
                <g-link :to="customer.url" class="button yellow"
                  >Customer Story</g-link
                >
              </div>
            </div>
          </div>
        </div>

        <div
          class="storyless flex sm:flex-row flex-wrap md:-mx-5 justify-center"
        >
          <div
            v-for="(customer, index) in storylessCustomers"
            :key="index"
            class="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/3 justify-center  py-12 px-24"
          >
            <div class="customer-logo self-center">
              <img :src="customer.image.src" :alt="customer.name" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <MoreInfoDots />
  </Layout>
</template>

<script>
import MoreInfoDots from "~/components/MoreInfoDots.vue";
export default {
  metaInfo: {
    title: "Yellowbrick Customers",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "Yellowbrick helps many businesses realize the potential of their data. The companies listed here are just a few we have helped.",
      },
    ],
  },
  components: {
    MoreInfoDots,
  },
  computed: {
    orderedCustomers: function () {
      return this.$page.customers.customers.sort((a, b) =>
        a.name > b.name ? 1 : -1
      );
    },
    storyCustomers: function () {
      return this.orderedCustomers.filter((item) => item.url !== "");
    },
    storylessCustomers: function () {
      return this.orderedCustomers.filter((item) => item.url === "");
    },
  },
};
</script>

<page-query>
  query Page {
    customers: pages(path: "/data/pages/customers") {
      customers {
        name
        url
        image
        body
        industry
      }
    }
  }
</page-query>

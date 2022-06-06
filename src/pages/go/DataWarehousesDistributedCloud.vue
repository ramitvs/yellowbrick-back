<style scoped>
.hero {
  background-image: url(/uploads/images/hero-bg.svg);
  background-size: cover;
  background-position: center center;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    @apply bg-gray-600 absolute z-0;
    opacity: 0.7;
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
    <section
      class="hero flex bg-gray-700 py-10 md:py-12 text-white px-6 xl:px-0"
    >
      <div
        class="
          flex flex-col
          md:flex-row
          max-w-1200
          w-full
          py-8
          mx-auto
          relative
          z-10
        "
      >
        <div class="w-full md:w-2/3 p-0 md:pr-16 text-gray-700 md:text-white">
          <h5 class="text-yellow1 mb-6 md:mb-2">Report</h5>
          <div class="bg-white md:bg-transparent p-6 md:p-0">
            <h1 class="p-0">Data Warehouses and the Distributed Cloud: Managed Disruption</h1>
            <img
              style="padding-bottom:20px"
              class="
                float-none
                sm:float-left
                w-1/2
                mx-auto
                sm:mx-0
                shadow-md
                sm:shadow-none
                sm:w-5/12
                m-0
                mb-6
                sm:mb-0
                sm:mr-10
                sm:mb-6
                sm:mt-3
              "
              src="/uploads/thumb-whitepaper-gigaom-data-warehouse-distributed-cloud.png"
              alt="Data Warehouses and the Distributed Cloud: Managed Disruption"
            />
            <p class="rfs-text-lg">
              Data warehouse platforms have been around for decades, with a long
              and interesting journey from the appliance-based products that
              typified their early days to the cloud data warehouse counterparts
              that are popular today.
            </p>
            <p class="rfs-text-lg">
              Analytics, data warehousing, and the cloud have changed—and
              changed each other—in permanent and powerful ways. This report is
              designed to help you understand these changes, how they are
              driving the future direction of the industry, and most
              importantly, the steps organizations should take around cloud data
              warehousing now in order to position themselves most
              advantageously for success down the line.
            </p>
          </div>
        </div>

        <div class="w-full md:w-1/3">
          <div class="float-form">
            <h3 class="text-gray-700">Download today</h3>
            <BaseHubspot
              id="4accad52-ff44-4c23-ad49-03ec0002aa08"
              sfid="7011G000000KatqQAC"
            />
          </div>
        </div>
      </div>
    </section>

    <GoCustomers />
  </Layout>
</template>

<script>
import GoCustomers from "~/components/GoCustomers.vue";
import Layout from "~/layouts/Landing.vue";

export default {
  metaInfo: {
    title:
      "Data Warehouses and the Distributed Cloud - Report - Yellowbrick Data",
    meta: [
      {
        name: "description",
        content:
          "Download this report to learn about the changes in data warehousing and analytics and how to position your company most advantageously for success down the line.",
      },
    ],
  },
  components: {
    GoCustomers,
    Layout,
  },
};
</script>
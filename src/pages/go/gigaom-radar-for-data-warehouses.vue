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
            <h1 class="p-0">GigaOm Radar for Data Warehouses</h1>
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
              src="/uploads/thumb-report-gigaom-data-warehouse-radar.png"
              alt="Data Warehouses and the Distributed Cloud: Managed Disruption"
            />
            <p class="rfs-text-lg">
      Data warehouse platforms are an established part of the enterprise technology stable and a go-to solution for managing data at scale within an organization. But recently, features are emerging that transform data warehouses from serving their more traditional technology role of the past into the modern, flexible, cloud-based big data platforms they are today.
            </p>
            <p class="rfs-text-lg">
Download this report to see why GigaOm says that Yellowbrick is emerging as a strong competitor to more established solutions in the areas of cost, performance, and flexibility
            </p>
          </div>
        </div>

        <div class="w-full md:w-1/3">
          <div class="float-form">
            <h3 class="text-gray-700">Download today</h3>
            <BaseHubspot
              id="debe38b2-c50c-45ac-ab13-d75458fe862d"
              sfid="7011G000000KbpzQAC"
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
      "Gigaom's Radar for Data Warehouses - Yellowbrick Data",
    meta: [
      {
        name: "description",
        content:
          "See why GigaOm says that Yellowbrick is emerging as a strong competitor to more established data warehouse solutions in the areas of cost, performance, and flexibility.",
      },
    ],
  },
  components: {
    GoCustomers,
    Layout,
  },
};
</script>
<style scoped>
  .hero {
    background-image: url(/uploads/images/hero-bg.svg);
    background-size: cover;
    background-position: center center;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      @apply bg-gray-600 absolute z-0;
      opacity: .7;
    }
  }

  .predictability-bg {
    background-image: url(/uploads/images/predictability-bg.svg);
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: 50%;
  }

  .dk-bg .mktoForm .mktoFormRow .mktoLabel {
    color: #ffffff !important;
  }


  .float-form {
    @apply relative p-8 bg-gray-200 shadow-lg;

    & .mktoForm {
      margin-top: .5rem !important;
    }

  }
</style>

<template>
  <Layout>
    <section class="hero flex bg-gray-700 py-10 md:py-12 text-white px-6 xl:px-0">
      <div class="flex flex-col md:flex-row max-w-1200 w-full py-8 mx-auto relative z-10">
        <div class="w-full md:w-5/6 p-0 md:pr-16 text-gray-700 md:text-white">
          <h5 class="text-yellow1 mb-6 md:mb-2">ESG Economic Validation Report</h5>
          <div class="bg-white md:bg-transparent p-6 md:p-0">
            <h1 class="p-0">The Economic Benefits of Yellowbrick Data Warehouse</h1>
            <img src="/uploads/economic-benefits-of-yellowbrick.jpg" class="float-none sm:float-left w-1/2 mx-auto sm:mx-0 shadow-md sm:shadow-none sm:w-1/3 m-0 mb-6 sm:mb-0 sm:mr-10 sm:mb-6 sm:mt-3"
              alt="Research Paper: The Economic Benefits of Yellowbrick" />
            <p class="rfs-text-lg">Timely insight is now even more critical to making quality informed decisions. Expanding this ability todifferent parts of the business to quickly query and extract actionable insights from real-time data feeds can
              play a crucial role in overall company performance.</p>
            <p class="rfs-text-lg">ESG validated that, when compared with other on-premises and cloud-only solutions, Yellowbrick Data Warehouse delivers improved and predictable performance and cost with improved operational simplicity and
              deployment.</p>
            <p class="rfs-text-lg">Download this report to see all the benefits your organization can expect by deploying Yellowbrick’s cloud data warehouse.</p>
            <a href="https://ww2.yellowbrick.com/hubfs/Resources/Reports/ESG-Economic-Validation-Yellowbrick-Modern-Data-Warehouse-Oct-2021.pdf" target="_blank" rel="noopener" id="report_esg-economic-benefits"
              class="ungated-asset button yellow mt-6">Download Now</a>
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
      title: 'The economic benefits of Yellowbrick: An ESG economic validation report',
      meta: [{
        name: 'description',
        content: 'ESG evaluates hybrid and multi-cloud environments, comparing the performance and cost of each against Yellowbrick, validating superior price/performance capabilities.'
      }]
    },
    components: {
      GoCustomers,
      Layout
    }
  };
</script>
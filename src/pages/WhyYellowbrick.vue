<style scoped>
  .hero {
    background-image: url("/uploads/images/city-rails-night-bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: bottom;
  }





  .diagonal-lines {
    background-image: url('/uploads/images/yellowbrick_diagonalLines-bg.svg');
    background-position-x: center;
    background-position-y: center;
    background-size: 100%;
  }

  #best-return-on-data>>>.st0 {
    fill: #4D5357;
  }

  #best-return-on-data>>>.st1 {
    fill: #57C0CB;
  }

  #performance-concurrency>>>.st0 {
    fill: #4D5357;
  }

  #performance-concurrency>>>.st1 {
    fill: #FFFFFF;
    stroke: #4D5357;
    stroke-width: 3.44;
    stroke-miterlimit: 10;
  }

  #performance-concurrency>>>.st2 {
    fill: #FFFFFF;
  }

  #performance-concurrency>>>.st3 {
    fill: #57C0CB;
  }

  #enterprise-values>>>.st0 {
    fill: none;
    stroke: #4D5357;
    stroke-width: 3.0578;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
  }

  #enterprise-values>>>.st1 {
    fill: none;
    stroke: #57C0CB;
    stroke-width: 2.2933;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
  }

  #enterprise-values>>>.st2 {
    fill: #57C0CB;
  }

  #enterprise-values>>>.st3 {
    fill: none;
    stroke: #4D5357;
    stroke-width: 2.6755;
    stroke-miterlimit: 10;
  }

  #enterprise-values>>>.st4 {
    fill: none;
    stroke: #57C0CB;
    stroke-width: 3.44;
    stroke-miterlimit: 10;
  }

  #enterprise-values>>>.st5 {
    fill: none;
    stroke: #4D5357;
    stroke-width: 2.6755;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-miterlimit: 10;
  }

  #enterprise-values>>>.st6 {
    fill: none;
    stroke: #4D5357;
    stroke-width: 2.2933;
    stroke-miterlimit: 10;
  }

  #enterprise-values>>>.st7 {
    fill: #4D5357;
  }

  #enterprise-values>>>.st8 {
    fill: none;
    stroke: #57C0CB;
    stroke-width: 2.2933;
    stroke-miterlimit: 10;
  }

  #enterprise-values>>>.st9 {
    fill: none;
    stroke: #4D5357;
    stroke-width: 3.44;
    stroke-miterlimit: 10;
  }

  #enterprise-values>>>.st10 {
    fill: #FFFFFF;
    stroke: #4D5357;
    stroke-width: 3.44;
    stroke-miterlimit: 10;
  }

  #control-data>>>.st0 {
    fill: #4D5357;
  }

  #control-data>>>.st1 {
    fill: #FFFFFF;
    stroke: #4D5357;
    stroke-width: 3.44;
    stroke-miterlimit: 10;
  }

  #control-data>>>.st2 {
    fill: #FFFFFF;
  }

  #control-data>>>.st3 {
    fill: #57C0CB;
  }

  #future-proof>>>.st0 {
    fill: #57C0CB;
  }

  #future-proof>>>.st1 {
    fill: none;
    stroke: #57C0CB;
    stroke-width: 3.0228;
    stroke-miterlimit: 10;
  }

  #future-proof>>>.st2 {
    fill: #4D5357;
  }

  #future-proof>>>.st3 {
    fill-rule: evenodd;
    clip-rule: evenodd;
    fill: #4D5357;
  }

  #future-proof>>>.st4 {
    fill: #FFFFFF;
  }

  #customer-love>>>.st0 {
    fill: #4D5357;
  }

  #customer-love>>>.st1 {
    fill: #57C0CB;
  }

  .free {
    width: 38%;
  }

  .free:nth-child(1) {
    padding-bottom: 20px;
    margin-right: 40px;
  }

  .intro {
    display: flex;
    flex-direction: row;
    margin-left: 50px;
    margin-right: 50px;
    justify-content: center;
  }

  @media only screen and (max-width: 768px) {
    .free:nth-child(1) {
      padding-bottom: 0px;
      margin-right: 40px;
    }

    .intro {
      display: flex;
      flex-direction: column;
    }

    .free {
      width: 100%;
    }
  }

  .my-6 {
    min-height: 60px;
  }
</style>

<template>
  <Layout>

    <base-section class="hero pt-64">
      <div class="w-full lg:w-3/4">
        <h1 class="rfs-text-6xl font-normal text-white">
          How Yellowbrick is Different
        </h1>
      </div>
    </base-section>

    <section class="intro" style="">

      <div class="mt-20 mb-20 free">
        <BaseWistia id="jl7d88uzmd" />
      </div>

      <p class="mt-20 rfs-text-xl free">Yellowbrick Cloud Data Warehouse is a state-of-the-art, MPP analytics database that helps you get the most value from all your data by combining everything you love about on-premises and cloud data
        warehouses-including
        industry-leading speed and concurrency, agile and elastic provisioning, and a predictable subscription pricing model. Unlike other data warehouses, Yellowbrick’s architecture provides a flexible, future-proof platform that meets any
        deployment need across private, public, and hybrid/distributed clouds.</p>

    </section>

    <base-section class="bg-white">

      <div class="relative">
        <div class="break-plane">

          <!-- Best Return on Data -->
          <div class="flex flex-col mx-auto md:flex-row mb-6 md:mb-20 w-full max-w-1000">
            <div class="w-full flex items-center md:w-2/5">
              <i class="block mx-auto" style="width: 250px;">
                <img src="/uploads/YB_BestReturn_Disaster Recovery Costs_Yellow.png" />
              </i>
            </div>
            <div class="w-full md:w-3/5 mb-8 md:mb-0 md:ml-12">
              <h3 class="rfs-text-2xl">Best “Return on Data”</h3>
              <p class="rfs-text-base font-medium">Yellowbrick brings blazing-fast performance to the most demanding batch, real-time, interactive, and mixed workloads for up to 1000s of users, from a single terabyte to multiple petabytes. It’s
                common for customers to see their queries and reports run 10x-100X faster and beyond, and for ETL processes to complete in minutes instead of hours or hours instead of days. That, combined with predictable subscription pricing that
                costs a fraction of alternatives (while preventing cost overruns), provides the best price/performance economics in the industry.</p>
            </div>
          </div>

          <!-- Performance and concurrency for any SQL workload -->
          <div class="flex flex-col mx-auto md:flex-row mb-6 md:mb-20 w-full max-w-1000">
            <div class="w-full order-last md:order-first md:w-3/5 mb-8 md:mb-0 md:mr-12">
              <h3 class="rfs-text-2xl">Performance and concurrency for any SQL&nbspworkload</h3>
              <p class="rfs-text-base font-medium">We’ve re-engineered the scale-out analytic database to do more computation with less CPU, store more data more efficiently, manage more workloads and queries, and move data across networks faster
                than anything else in the industry. Our unique “adaptive cut-through architecture” lets Yellowbrick handle any data processing challenge by getting the most performance value from whatever instance type it runs on, whether in a
                private data center or a public cloud.</p>
            </div>
            <div class="w-full flex items-center md:w-2/5">
              <i class="block mx-auto" style="width: 250px;">
                <img src="/uploads/YB_PerformanceConcurrency.png" />
              </i>
            </div>
          </div>

          <!-- Designed for enterprise values -->
          <div class="flex flex-col mx-auto md:flex-row mb-6 md:mb-20 w-full max-w-1000">
            <div class="w-full flex items-center md:w-2/5">
              <i class="block mx-auto" style="width: 250px;">
                <img src="/uploads/YB_DesignedEnterprise_Data Warehouse 2_Yellow.png" />

              </i>
            </div>
            <div class="w-full md:w-3/5 mb-8 md:mb-0 md:ml-12">
              <h3 class="rfs-text-2xl">Designed for enterprise values</h3>
              <p class="rfs-text-base font-medium">Yellowbrick makes reliability, security, and manageability core design principles for meeting the highest enterprise requirements. Customers like BMW Financial Services,
                LexisNexis, and one of the world’s Top 10 FinServ companies rely on Yellowbrick’s single-system resilience for their most business-critical analytic workloads.</p>
              <p class="rfs-text-base font-medium">Our “private by default” stance on customer data means that there is no risk of human error leading to a data exposure, and virtually zero operational effort is required to keep your workloads
                running at peak performance.</p>
            </div>
          </div>

          <!-- Control your own data -->
          <div class="flex flex-col mx-auto md:flex-row mb-6 md:mb-20 w-full max-w-1000">
            <div class="w-full order-last md:order-first md:w-3/5 mb-8 md:mb-0 md:mr-12">
              <h3 class="rfs-text-2xl">Control your own data, even in the cloud</h3>
              <p class="rfs-text-base font-medium">Control access to your own data in the cloud. Your data warehouse runs in your own VPC and public cloud account, not through an intermediary like Snowflake, which intermixes data from different
                customers. With Yellowbrick your data is fully isolated, providing a true single-tenant solution to help meet compliance needs.</p>
            </div>
            <div class="w-full flex items-center md:w-2/5">
              <i class="block mx-auto" style="width: 250px;">
                <img src="/uploads/YB_ControlOwnData_Untitled 8_Yellow.png" />

              </i>
            </div>
          </div>

          <!-- Future proof and standards based -->
          <div class="flex flex-col mx-auto md:flex-row mb-6 md:mb-20 w-full max-w-1000">
            <div class="w-full flex items-center md:w-2/5">
              <i class="block mx-auto" style="width: 250px;">
                <img src="/uploads/YB_FutureProof_Correct Schema_Yellow.png" />

              </i>
            </div>
            <div class="w-full md:w-3/5 mb-8 md:mb-0 md:ml-12">
              <h3 class="rfs-text-2xl">Future proof and standards based</h3>
              <p class="rfs-text-base font-medium">Yellowbrick works seamlessly in any on-premises or cloud (as DWaaS or self-managed instances) environment and makes migrations fast and easy. PostgreSQL compatibility ensures easy integration with
                all your on-premises BI (Tableau, SAS, etc.), data motion (Kafka, Informatica, etc.), and data science (Python, R) tools, and many workloads can be migrated with no query modifications.
              </p>
            </div>
          </div>

          <!-- Our customers love us -->
          <div class="flex flex-col mx-auto md:flex-row mb-6 md:mb-20 w-full max-w-1000">
            <div class="w-full order-last md:order-first md:w-3/5 mb-8 md:mb-0 md:mr-12">
              <h3 class="rfs-text-2xl">Our customers love us</h3>
              <p class="rfs-text-base font-medium">Customer support is a core competency, and we’re proud to claim an exceptional Net Promoter Score and a virtually perfect retention rate. We won’t rest until you’re completely satisfied with
                your Yellowbrick experience.</p>
            </div>
            <div class="w-full flex items-center md:w-2/5">
              <i class="block mx-auto" style="width: 250px;">
                <img src="/uploads/YB_CustomersLoveus_Standards_Yellow.png" />

              </i>
            </div>

          </div>

        </div>
      </div>

    </base-section>

    <base-section class="bg-gray-500 text-white">


      <h3 class="accent-heading rfs-text-4xl text-white">Get More Information</h3>
      <div class="flex flex-col sm:flex-row flex-wrap -mx-4 md:-mx-8">
        <div class="w-full sm:w-1/2 lg:w-1/4 p-4 md:p-8">
          <img src="https://www.yellowbrick.com/uploads/ds-data-warehouse-thumb.jpg" alt="Eeconomics of yellowbrick data warehouse image" class="w-7/12 shadow-md border-4 border-white" />
          <h5 class="my-6">Yellowbrick Data Warehouse Overview</h5>
          <a href="https://www.yellowbrick.com/resources/data-sheets/yellowbrick-data-warehouse-overview/" class="arrow flex items-center text-teal text-xl">Read Now <icon-arrow-right class="ml-2"></icon-arrow-right></a>
        </div>

        <div class="w-full sm:w-1/2 lg:w-1/4 p-4 md:p-8">
          <img src="https://www.yellowbrick.com/uploads/thumb-ebook-meet-yellowbrick.png" alt="Eeconomics of yellowbrick data warehouse image" class="w-7/12 shadow-md border-4 border-white" />
          <h5 class="my-6">Meet the Yellowbrick Cloud Data Warehouse</h5>
          <a href="https://www.yellowbrick.com/go/meet-yellowbrick/" class="arrow flex items-center text-teal text-xl">Read Now <icon-arrow-right class="ml-2"></icon-arrow-right></a>
        </div>


        <div class="w-full sm:w-1/2 lg:w-1/4 p-4 md:p-8">
          <img src="https://www.yellowbrick.com/uploads/thumb-ebook-customer-stories.png" alt="netezza migration guide image" class="w-7/12 shadow-md border-4 border-white" />
          <h5 class="my-6">Customer Stories <br> eBook</h5>
          <a class="arrow flex items-center text-teal text-xl" href="https://www.yellowbrick.com/go/customer-stories-ebook/">Read Now <icon-arrow-right class="ml-2"></icon-arrow-right></a>
        </div>

        <div class="w-full sm:w-1/2 lg:w-1/4 p-4 md:p-8">
          <img src="https://www.yellowbrick.com/uploads/economic-benefits-of-yellowbrick.jpg" alt="netezza migration guide image" class="w-7/12 shadow-md border-4 border-white" />
          <h5 class="my-6">Economic Benefits of Yellowbrick</h5>
          <a class="arrow flex items-center text-teal text-xl" href="https://www.yellowbrick.com/go/economic-benefits-of-yellowbrick/ ">Read Now <icon-arrow-right class="ml-2"></icon-arrow-right></a>
        </div>

      </div>
    </base-section>
    <MoreInfo />
  </Layout>
</template>

<script>
  import MoreInfo from '~/components/MoreInfo.vue';
  import IconArrowRight from "~/components/icons/IconArrowRight.vue";
  import ArrowLinkButton from '../components/buttons/arrowLinkButton.vue';
  import BaseSection from "../components/BaseSection.vue";
  import BaseWistia from "../components/BaseWistia.vue";
  export default {
    components: {
      ArrowLinkButton,
      BaseSection,
      BaseWistia,
      MoreInfo,
      IconArrowRight
    },

  }
</script>
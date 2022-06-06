<style scoped>
  .hero {
    background-image: url(/uploads/images/cloud-recovery-bg.svg);
    background-size: cover;
    background-position: center;
  }

  .slash-box-small {
    @apply relative z-0 bg-gray-600;

    &:before {
      content: '';
      @apply absolute bg-gray-500;
      left: 0;
      top: -0;
      right: 10%;
      bottom: 0;
      z-index: 1;
    }

    &:after {
      content: '';
      @apply absolute;
      background-image: url("data:image/svg+xml,%3Csvg width='20' height='27' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v27H0z'/%3E%3Cpath d='M13.667 7.09a.663.663 0 00-.911.247L6.089 18.99a.676.676 0 00.244.919.66.66 0 00.911-.246l6.667-11.655a.676.676 0 00-.244-.919' fill='%234B5357'/%3E%3C/g%3E%3C/svg%3E");
      background-repeat: repeat;
      left: 75%;
      right: 0;
      bottom: 20px;
      height: 81px;
      z-index: 2;
    }
  }

  .dot-left {
    @apply relative z-0;

    &:after {
      content: '';
      @apply absolute;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21 21'%3E%3Cpath fill='none' d='M0 0h21v21H0z'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' fill='%234b5357' d='M9 9h3v3H9z'/%3E%3C/svg%3E");
      background-repeat: repeat;
      background-size: 22px;
      left: 0;
      right: 63%;
      bottom: 0;
      top: 0;
      z-index: 1;
      opacity: .5;
    }
  }

  .slash-right {
    @apply relative z-0;

    &:after {
      content: '';
      @apply absolute;
      background-image: url("data:image/svg+xml,%3Csvg width='20' height='27' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v27H0z'/%3E%3Cpath d='M13.667 7.09a.663.663 0 00-.911.247L6.089 18.99a.676.676 0 00.244.919.66.66 0 00.911-.246l6.667-11.655a.676.676 0 00-.244-.919' fill='%234B5357'/%3E%3C/g%3E%3C/svg%3E");
      background-repeat: repeat;
      left: 63%;
      right: 0;
      bottom: 0;
      top: 0;
      z-index: 1;
      opacity: .5;
    }
  }

@media only screen and (max-width: 600px) {
  .mobile-set{
    flex-direction: column !important;
    display: flex !important;
    margin: 0 auto;
    text-align: center;
    justify-content: center;
  }
  .mobile-set img{
    flex-direction: column !important;
    display: flex !important;

    margin: 12px auto;
    text-align: center;
    justify-content: center;
  }
}

  .slash-right,
  .dot-left {
    &>* {
      @apply relative z-10;
    }
}

  .break-plane {
    top: -3rem;
    z-index: 40;
  }
</style>

<template>
  <Layout>

    <section class="hero flex justify-center bg-gray-700 py-16 md:py-20 text-white px-6 xl:px-0">
      <div class="flex flex-col max-w-1200 py-8 mx-auto z-10">
        <div class="w-full md:w-1/2">
          <h1 class="leading-tight rfs-text-6xl">Faster, More Affordable Disaster Recovery as a Service</h1>
          <p class="rfs-text-lg">Building business continuity strategies is hard and expensive, especially for big databases. Our Cloud Disaster Recovery (DR) service relieves both kinds of pain by automatically and asynchronously creating
            up-to-date copies of Yellowbrick Data Warehouses in the cloud, at a more affordable cost than legacy approaches.</p>
          <g-link to="/products/data-warehouse/" class="button yellow">Explore Yellowbrick Data Warehouse</g-link>
        </div>
      </div>
    </section>

    <section class="bg-gray-500 py-12 md:py-24 md:pb-32 px-6 xl:px-0">
      <div class="mx-auto w-full max-w-1200">
        <div class="flex flex-col md:flex-row mx-0 md:-mx-6 text-white">
          <div class="w-full md:w-1/3 px-6 mb-16 md:mb-0">
            <h2 class="rfs-text-4xl font-semibold -my-2 leading-none text-yellow1 mb-4">Get Back in Business Faster</h2>
            <!-- <h3 class="rfs-text-4xl leading-none">Performance</h3> -->
            <p>Don’t endure long back-up recovery times when you can least afford them. Yellowbrick Cloud DR delivers multi-region fail-over and fail-back in seconds.</p>
          </div>
          <div class="w-full md:w-1/3 px-6 mb-16 md:mb-0">
            <h2 class="rfs-text-4xl font-semibold -my-2 leading-none text-yellow1 mb-4">Pay Only for What You Need</h2>
            <!-- <h3 class="rfs-text-4xl leading-none">Scale</h3> -->
            <p>Why pay full price for extra hardware you’re not using? Instead, rely on an instant-on DR service that has a low operating cost and per-use charges.</p>
          </div>
          <div class="w-full md:w-1/3 px-6 mb-16 md:mb-0">
            <h2 class="rfs-text-4xl font-semibold -my-2 leading-none text-yellow1 mb-4">Leave the Maintenance to Us</h2>
            <!-- <h3 class="rfs-text-4xl leading-none">in Savings</h3> -->
            <p>Yellowbrick Cloud DR systems are monitored and maintained as-a-service and ready for your use when needed 24x7x365.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="flex pb-8 bg-gray-700 px-6 xl:px-0">
      <div class="flex flex-col justify-center max-w-1200 mx-auto">
        <div class="break-plane p-10 bg-white shadow-lg relative">
          <span class="accent"></span>
          <h3 class="text-gray-500 mb-8">Making Reliable Disaster Recovery Simple</h3>
          <div class="text-gray-500 w-full">
            <p class="rfs-text-lg">Cloud DR relies on our hybrid cloud architecture to continuously, asynchronously replicate data (with updates in seconds; tested over WANs at +10Gb/sec) between instances in our service regions, or from your
              on-premises instance to our closest region.</p>

            <div class="flex flex-col md:flex-row">
              <div class="mobile-set w-full list-none flex flex-row p-0 m-0 -mx-5 pt-8 ">
                <div class="w-full md:w-1/3 px-5">
                  <img src="~@/assets/images/icons/dr-replicate.svg" alt="replicate icon" class="w-1/2 mb-6" />
                  <h5>Replicate</h5>
                  <p class="rfs-text-lg">Select one or more target databases to replicate to Cloud DR using simple commands</p>
                </div>
                <div class="w-full md:w-1/3 px-5">
                  <img src="~@/assets/images/icons/fail-over.svg" alt="fail-over icon" class="w-1/2 mb-6" />
                  <h5>Fail-over</h5>
                  <p class="rfs-text-lg">If needed, Yellowbrick will promote your cloud instance to primary</p>
                </div>
                <div class="w-full md:w-1/3 px-5">
                  <img src="~@/assets/images/icons/fail-back.svg" alt="fail-back icon" class="w-1/2 mb-6" />
                  <h5>Fail-back</h5>
                  <p class="rfs-text-lg">When possible, you can switch back to your primary warehouse</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>

    <section class="bg-gray-500 text-white no-lockin-bg px-6 xl:px-0 py-20">
      <div class="max-w-1200 mx-auto w-full">

        <h3 class="accent-heading">Get More Information</h3>
        <div class="flex flex-col sm:flex-row flex-wrap -mx-4 md:-mx-8 ">

          <div class="w-full sm:w-1/2 lg:w-1/3 p-4 md:p-8">
            <img src="/uploads/ds-data-warehouse-thumb.jpg" alt="netezza migration guide image" class="w-7/12 shadow-md" />
            <h5 class="my-6">Yellowbrick Data Warehouse Datasheet</h5>
            <a class="button yellow" href="/resources/data-sheets/yellowbrick-data-warehouse-overview/">Read Now</a>
          </div>

          <div class="w-full sm:w-1/2 lg:w-1/3 p-4 md:p-8">
            <img src="/uploads/wp-data-warehouse-modernization-analytics-thumb.jpg" alt="netezza migration guide overview" class="w-7/12 shadow-md" />
            <h5 class="my-6">Data Warehouse Modernization for Hybrid Cloud Analytics</h5>
            <a href="/go/modernizing-your-data-warehouse-for-hybrid-cloud-analytics/" class="button yellow">Download</a>
          </div>

          <div class="w-full sm:w-1/2 lg:w-1/3 p-4 md:p-8">
            <img src="/uploads/wp-unlock-value-in-data-lakes-thumb.jpg" alt="breaking through netezza whitepaper" class="w-7/12 shadow-md" />
            <h5 class="my-6">Unlocking the Value in Data Lakes with Hybrid Cloud Analytics</h5>
            <a href="/go/unlocking-value-in-data-lakes-with-hybrid-cloud-analytics/" class="button yellow">Download</a>
          </div>

        </div>
      </div>
    </section>

    <PartnersMain />
    <MoreInfo />

  </Layout>
</template>

<script>
  import MoreInfo from '~/components/MoreInfo.vue'
  import PartnersMain from '~/components/PartnersMain.vue'

  export default {
    metaInfo: {
      title: 'Yellowbrick Cloud Disaster Recovery',
      meta: [{
          key: 'description',
          name: 'description',
          content: 'A low cost service providing up-to-date, automatic, replicated copies of Yellowbrick databases in the cloud.'
        },
        {
          key: 'og:description',
          name: "og:description",
          content: 'A low cost service providing up-to-date, automatic, replicated copies of Yellowbrick databases in the cloud.'
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: 'A low cost service providing up-to-date, automatic, replicated copies of Yellowbrick databases in the cloud.'
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: 'Yellowbrick Cloud Disaster Recovery'
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: 'Yellowbrick Cloud Disaster Recovery'
        }
      ]
    },
    components: {
      MoreInfo,
      PartnersMain
    }
  }
</script>
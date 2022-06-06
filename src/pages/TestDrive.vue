<style scoped>

.hero {
  background-image: url(/uploads/images/tall-bg.svg);
  background-size: cover;
  background-position: center;
}

.wide-image {
  height: 96px;
  width: auto;
}

</style>

<template>
    <Layout>
        <Hero :heroTitle="heroTitleText"
              :heroDescription="heroDescriptionText"
              :listItems="listItemText"
              :heroFormTitle="formTitle"
              :heroFormId="formId"
              :herosfid="sfid"
              :heroDisclaimer="heroDisclaimerText"
              :heroDisclaimerItems="heroDisclaimerItems" />
        <section class="bg-gray-100 py-12 md:py-16 px-6 xl:px-0">
            <div class="mx-auto w-full max-w-1200">
                <h3 class="accent-heading">Yellowbrick can power your business</h3>
                <div class="flex flex-col justify-center max-w-1200 mx-auto">
                    <div class="flex flex-col md:flex-row flex-wrap mx-0 md:-mx-6">

                        <div class="w-full md:w-1/3 p-6 flex flex-col items-start">
                            <img src="~@/assets/images/icons/speed.svg" class="w-24 mx-auto" alt="speed icon" />
                            <p class="rfs-text-3xl font-medium mt-8 mb-2 leading-tight text-center w-full">10X speeds</p>
                        </div>

                        <div class="w-full md:w-1/3 p-6 flex flex-col items-start">
                            <img src="~@/assets/images/icons/dr-replicate.svg" class="w-24 mx-auto" alt="Data Performance Icon" />
                            <p class="rfs-text-3xl font-medium mt-8 mb-2 leading-tight text-center w-full">10X performance</p>
                        </div>

                        <div class="w-full md:w-1/3 p-6 flex flex-col items-start">
                            <img src="~@/assets/images/icons/personell-yellow-black.svg" class="w-24 mx-auto wide-image" alt="Personel Icon" />
                            <p class="rfs-text-3xl font-medium mt-8 mb-2 leading-tight text-center w-full">10X more concurrent users</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
          <section class="flex py-16 bg-gray-600 px-6 xl:px-0 enhance-bg">
            <div class="flex-1 justify-center max-w-1000 mx-auto">
                <h3 class="accent-heading text-white rfs-text-4xl font-light mb-1">&ldquo;We believe Yellowbrick&rsquo;s data warehouse technology leaps ahead of anything on the market after seeing firsthand what it can do for our analytics. We&rsquo;re thrilled to invest in what will be the new standard in data warehousing and analytics." </h3>
                <p class="text-white rfs-text-lg text-right mb-0">&#8212;  Josh Woods, Head of Options, ETF, CES, and Research Technology, Citadel Securities </p>
            </div>
        </section>
        <GoCustomersOne />
        <GoReviewsOne />
    </Layout>
</template>

<script>

    import GoCustomersOne from "~/components/GoCustomersOne.vue";
    import GoReviewsOne from "~/components/GoReviewsOne.vue";
import MoreInfo from '~/components/MoreInfo.vue'
import Hero from '~/components/HeroComponent'

export default {
  metaInfo: {
    title: 'Free Test Drive',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: ''
      },
      {
        key: 'og:description',
        name: "og:description",
        content: ''
      },
      {
        key: 'og:title',
        name: 'og:title',
        content: ''
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: ''
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: ''
      }
    ]
  },
  methods: {
  },
  components: {
      Hero,
      GoCustomersOne,
      GoReviewsOne,
      MoreInfo
  },
  data() {
    return {
      listItemText: [
        {message: 'Create and manage databases and users on a single-node instance'},
        {message: 'Easily load your own data (without PII) or use sample data and queries; limit of 60TB combined'},
        {message: 'Create and run queries in your browser using a rich SQL editor, or bring your own tools'},
        {message: 'Includes 12x5 support'},
        {message: 'For dev/test workloads only'}
      ],
      heroDisclaimerItems: [
        {message: 'Not for use in production or with data containing PII'},
        {message: 'Limited availability, resource constraints may apply'},
        {message: 'No backups provided and we take no responsibility for loss or corruption of data'},
        {message: 'Not available to users with personal or competitor email accounts. We reserve the right to deny a test drive request, or to terminate an existing test drive, for any reason.'},
      ],
      heroTitleText: 'Take Yellowbrick for a Test Drive',
      heroDescriptionText: 'Try Yellowbrick Data Warehouse, including new Yellowbrick Manager features for developers and analysts, at no charge for 7 days. Currently available on AWS EKS; Azure and Google Cloud availability coming soon.',
      formTitle: 'Request a test drive',
      sfid: '7011G000000KSdVQAW',
      formId: '002333ae-19a9-4ebb-96f7-2513aac4e4fd',
      heroDisclaimerText: 'Fine print:',
      expanded: false,
    };
  }
}


</script>
 
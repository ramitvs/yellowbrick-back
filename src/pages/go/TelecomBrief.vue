<style scoped>
.hero {
  background-image: url(/uploads/images/woman-with-phone-downsampled.png);
  background-size: cover;
  background-position: center center;
  min-height: 935px;
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

.dk-bg .mktoForm .mktoFormRow .mktoLabel {
	color: #ffffff !important;
}

.arrow-only-blue {
  font-size: 36px;
  padding-right: 50px;
  position: relative;
}

.arrow-only-blue::after {
  content: '';
  height: 19px;
  width: 25px;
  background-image: url(/uploads/images/blue-arrow-right.svg);
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-9px);
  transition: right .25s ease-in-out;
}

.arrow-only-blue:hover:after {
  right: -10px;
}

@media(min-width: 768px) {
  .hero-text
  .hero-title {
    padding: 0 212px 0 0;
  }
  .hero-text
  .description-container {
    padding: 0 50px 0 0;
  }
}
</style>

<template>
  <Layout>
    <section class="hero flex bg-gray-700 py-10 md:py-12 text-white px-6 xl:px-0">
      <div class="flex flex-col md:flex-row max-w-1200 w-full py-8 mx-auto relative z-10">
        <div class="w-full lg:w-2/3 text-gray-700 md:text-white hero-text">
          <h5 class="text-teal mb-6 md:mb-2">{{ this.isExec ? 'Executive' : 'Economic' }} brief
            {{ this.selectedCompany ? 'for ' + this.selectedCompany.companyName : '' }}</h5>
          <div class="bg-white md:bg-transparent p-6 md:p-0">
            <h1 class="hero-title" v-if="!this.isExec">
              {{ this.selectedCompany ? this.selectedCompany.headline : `Gain real-time insight across all available data, especially new 5G-generated data, without massive new IT
              investments`}}</h1>
            <h1 class="hero-title" v-if="this.isExec">
              {{ this.selectedCompany ? this.selectedCompany.headline : `Transform your revenue and costs by improving revenue assurance, optimizing networks, and slashing
              customer churn`}}
            </h1>
            <p class="rfs-text-lg description-container">
              {{ this.selectedCompany ? this.selectedCompany.body : `Current options for analyzing vast, complex data like that
              produced by 5G networks are too limited. Legacy approaches like Teradata and Oracle are inflexible and
              expensive to buy and scale. Cloud-only options like Snowflake have poor and unpredictable
              price/performance beyond a few terabytes or tens of users and are unsuitable as edge systems for latency
              reasons. And data lakes have proven to be useful only as low-cost data stores. Those limitations prevent
              any significant progress against telecom challenges. See how Yellowbrick breaks through these barriers as
              it's reimagined the data warehouse.`}}
            </p>
            <a :href="this.selectedCompany ? this.selectedCompany.pdfUrl : this.defaultPdfUrl" id="telecom-brief" class="arrow-only-blue text-teal ungated-asset">Download the brief</a>
          </div>
        </div>
      </div>
    </section>
    <section class="flex py-16 bg-gray-600 px-6 xl:px-0 enhance-bg">
      <div class="flex-1 justify-center max-w-1000 mx-auto">
        <h3 class="accent-heading text-white rfs-text-4xl font-light mb-1">“With the power of Yellowbrick combined with
          our deep knowledge of the data and proprietary algorithms, we will be able to produce insights that have not
          been possible before.”</h3>
        <p class="text-white rfs-text-lg text-right mb-0">– Atul Jain, Chariman & CEO TEOCO</p>
      </div>
    </section>
  </Layout>
</template>

<script>

import Layout from '~/layouts/Landing.vue';

export default {
  metaInfo: {
    title: 'Industry Brief',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'See how Yellowbrick can help drive your business through real-time analytics'
      },
      {
        key: 'og:description',
        name: 'og:description',
        content: 'See how Yellowbrick can help drive your business through real-time analytics'
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'See how Yellowbrick can help drive your business through real-time analytics'
      },
      {
        key: 'og:title',
        name: 'og:title',
        content: 'YellowBrick Data Brief'
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'YellowBrick Data Brief'
      },
      {
        key: 'og:image',
        name: 'og:image',
        content: 'https://www.yellowbrick.com/uploads/ebook-data-lake-thumb.jpg'
      },
      {
        key: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.yellowbrick.com/uploads/ebook-data-lake-thumb.jpg'
      }
    ]
  },
  data() {
    return {
      isExec: false,
      selectedCompany: null,
      defaultPdfUrl: '/uploads/YB_Brief_TelecomAnalytics_v1.20.pdf',
      companies: [
        {
          companyName: 'AT&T',
          pdfUrl: '/uploads/YB_Brief_TelecomAnalytics_ATTCustom.pdf',
          headline: 'Let Yellowbrick modernize the AT&T analytics platforms to take advantage of analyzing data in real-time across DirectTV, landline, and mobile businesses',
          body: `Yellowbrick is the fastest date warehouse ever built.\nIt is also the most cost effective solution on the market. Our predictable pricing allows for you to know what you pay every month (you don’t get that with any other solution). We lock in the price, no guessing every month! No more tradeoffs between cost and queries.\nIt's the only TRUE Hybred DW ever built, giving unlimited flexibility in data deployment. You can run in the cloud and on prem with the same syntax.. No one else does that!`
        },
        {
          companyName: 'Charter',
          pdfUrl: '/uploads/YB_Brief_TelecomAnalytics_CharterCustom.pdf',
          headline: 'Let Yellowbrick take Charter’s analytics to the cloud with 10X performance at tenth of the cost of Teradata',
          body: `Let us de-risk your move to the cloud. Yellowbrick features the best price/performance in the space featuring MPP and hybrid cloud and easy migration from Teradata and Snowflake. It's 10X the performance of both and considerably more affordable.\nYellowbrick offers 10X performance of Teradata at a TENTH of the cost. Enterprises that have moved from Teradata to Yellowbrick have realized the economic benefit almost immediately.\nYellowbrick is half the cost of Snowflake. Snowflake's unpredictable pricing forces enterprises to choose between cost and usage while our pricing allows customers to feel comfortable running queries. It's also flexible allowing customers to move some workloads to the cloud while heavier workloads remain on-prem.`
        },
        {
          companyName: 'Comcast',
          pdfUrl: '/uploads/YB_Brief_TelecomAnalytics_ComcastCustom.pdf',
          headline: 'Let Yellowbrick take Comcast’s analytics to the cloud with 10X performance at tenth of the cost of Teradata',
          body: `Let us de-risk your move to the cloud. Yellowbrick features the best price/performance in the space featuring MPP and hybrid cloud and easy migration from Teradata.\nYellowbrick offers 10X performance of Teradata at a tenth of the cost. Enterprises that have moved from Teradata to Yellowbrick have realized the economic benefit almost immediately.\nYellowbrick is also a considerably more affordable solution than Snowflake or Redshift. Public Cloud DW solution's unpredictable pricing forces enterprises to choose between cost and usage! Yellowbrick features predictable pricing so customers can feel comfortable running queries. It's also flexible allowing customers to move some workloads to the cloud while heavier workloads remain on-prem.`
        },
        {
          companyName: 'Telus',
          pdfUrl: '/uploads/YB_Brief_TelecomAnalytics_TelusCustom.pdf',
          headline: 'Let Yellowbrick modernize Telus analytics platforms to take advantage of analyzing all of your 5G data',
          body: `Yellowbrick features the best price/performance in the space featuring MPP and hybrid cloud and easy migration from Netezza. Enterprises that have moved from Netezza to Yellowbrick have realized the economic benefit almost immediately.\nYellowbrick is half the cost of Snowflake. Snowflake's unpredictable pricing forces enterprises to choose between cost and usage while our pricing allows customers to feel comfortable running queries. It's also flexible allowing customers to move some workloads to the cloud while heavier workloads remain on-prem.`
        },
        {
          companyName: 'T-Mobile',
          pdfUrl: '/uploads/YB_Brief_TelecomAnalytics_TMobileCustom.pdf',
          headline: 'Let Yellowbrick accelerate T-Mobile’s analytics by 10-100x while reducing spend by 75% or more over legacy SAP, Oracle, and Teradata',
          body: `Yellowbrick features the best price/performance in the space, featuring MPP and hybrid cloud with easy migration from Oracle, SAP, and Teradata. It's between 10-100X the performance of these legacy platforms and and it costs 75% less. Yellowbrick also offers more than 300% ROI when augmenting Hadoop.\nIf you're even considering alternatives to your current platforms, I would love to show you how Yellowbrick can beat Oracle, SAP, and Teradata. Performance, Massive Cost Savings and high ROI are the primary reasons companies are choosing YellowBrick.`
        },
        {
          companyName: 'UScellular',
          pdfUrl: '/uploads/YB_Brief_TelecomAnalytics_USCellularCustom.pdf',
          headline: 'Let Yellowbrick modernize UScellular\'s analytics platforms to take advantage of analyzing all your 5G data and giving you a 360 view of your customer',
          body: `Yellowbrick is the fastest date warehouse ever built.\nIt is also the most cost effective solution on the market. Our predictable pricing allows for you to know what you pay every month (you don’t get that with any other solution). We lock in the price, no guessing every month! No more tradeoffs between cost and queries.\nIt's the only TRUE hybrid DW ever built, giving unlimited flexibility in data deployment. You can run in the cloud and on prem with the same syntax.. No one else does that!`
        },
        {
          companyName: 'Verizon',
          pdfUrl: '/uploads/YB_Brief_TelecomAnalytics_VerizonCustom.pdf',
          headline: 'See how Yellowbrick\'s lightning-fast hybrid cloud data warehouse crushes the price/performance of legacy on-premise and cloud-only environments',
          body: `Yellowbrick features the best price/performance in the space featuring MPP and hybrid cloud and easy migration from Teradata.\nYellowbrick offers 10X performance of Teradata at a tenth of the cost. Enterprises that have moved from Teradata to Yellowbrick have realized the economic benefit almost immediately.\nYellowbrick's unique ability to help customers get value out of their existing data lake investments is helping many customers across our customer base.`
        },
        {
          companyName: 'Bell',
          pdfUrl: '/uploads/YB_Brief_TelecomAnalytics_BellCanadaCustom.pdf',
          headline: 'See how Yellowbrick\'s lightning-fast hybrid cloud data warehouse crushes the price/performance of legacy on-premise and cloud-only environments',
          body: 'Yellowbrick is the leader in hybrid cloud analytics. We feature the best price/performance in the data warehouse space with easy migration from Teradata.  It\'s 10X the performance of  Teradata at a tenth the cost. Yellowbrick also offers more than 300% ROI when augmenting Hadoop.\nWhen you\'re considering alternatives to your current platforms, I would love to show you how Yellowbrick can beat all the legacy providers. Performance, massive cost savings and high ROI are the primary reasons companies are choosing YellowBrick.'
        }
      ],
    }
  },
  mounted() {
    const companyNameQuery = this.$route.query.company_name || null;
    if(companyNameQuery !== null) {
      this.selectedCompany = this.companies.find( c => c.companyName.toLowerCase() === companyNameQuery.toLowerCase()) || null;
    }
    const pageQuery = this.$route.query.audience || '';
    if (pageQuery === 'exec') {
      this.isExec = true;
    }
  },
  components: {
    Layout
  }
};
</script>
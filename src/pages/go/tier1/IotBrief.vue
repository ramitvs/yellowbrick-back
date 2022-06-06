<style scoped>
.hero {
  background-image: url(/uploads/images/iot-brief-man-right-bground.png);
  background-size: cover;
  background-position-x: center;
  background-position-y: inherit;
  min-height: 935px;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    @apply bg-gray-700 absolute z-0;
    opacity: 0.7;
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
  content: "";
  height: 19px;
  width: 25px;
  background-image: url(/uploads/images/blue-arrow-right.svg);
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-9px);
  transition: right 0.25s ease-in-out;
}

.arrow-only-blue:hover:after {
  right: -10px;
}

@media (min-width: 768px) {
  .hero-text .hero-title {
    padding: 0 50px 0 0;
  }
  .hero-text .description-container {
    padding: 0 50px 0 0;
  }
}
</style>

<template>
  <Layout>
    <section
      class="hero flex bg-gray-700 py-10 md:py-12 text-white px-6 xl:px-0"
    >
      <div
        class="flex flex-col md:flex-row max-w-1200 w-full py-8 mx-auto relative z-10"
      >
        <div class="w-full lg:w-2/3 text-gray-700 md:text-white hero-text">
          <h5 class="text-teal mb-6 md:mb-2">
            Real-time Data Analytics for IoT
          </h5>
          <div class="bg-white md:bg-transparent p-6 md:p-0">
            <h1 class="hero-title" v-if="!this.isExec">
              Analyze IoT data faster and more efficiently at every point in
              {{this.selectedCompany ? this.selectedCompany.companyName + `'s` : 'your'}} network
            </h1>
            <h1 class="hero-title" v-if="this.isExec">
              Unlock new monetization opportunities for {{this.selectedCompany ? this.selectedCompany.companyName : "your company"}}
            </h1>
            <h3 class="rfs-text-3xl text-yellow1" v-if="this.isExec">Only achievable through real-time interactive access to vast data volumes</h3>
            <p class="rfs-text-lg description-container">
              There is a critical need within {{this.selectedCompany ? this.selectedCompany.companyName : 'your company'}} for
              lightning-fast data analytics solutions that can support initial
              processing at the edge, real-time streaming data and large volumes
              of rapidly changing data, and complex interactive analytics in
              centralized private and/or public cloud environments.
            </p>
            <p class="rfs-text-lg description-container">
              See how Yellowbrick breaks through limitations of legacy and cloud-only alternatives. Based on a redesign/modernization of analytics databases from the ground up to take advantage of highly optimized instances, Yellowbrick offers the best price/performance for real-time workloads available at IoT scale.
            </p>
            <a href="/uploads/Yellowbrick_Brief_IoT-Analytics.pdf" id="iot-brief" class="arrow-only-blue text-teal ungated-asset">Read the IoT Brief</a
            >
          </div>
        </div>
      </div>
    </section>
    <section class="flex py-16 bg-gray-600 px-6 xl:px-0 enhance-bg">
      <div class="flex-1 justify-center max-w-1000 mx-auto">
        <h3 class="accent-heading text-white rfs-text-4xl font-light mb-1">
          “With the power of Yellowbrick combined with our deep knowledge of the
          data and proprietary algorithms, we will be able to produce insights
          that have not been possible before.”
        </h3>
        <p class="text-white rfs-text-lg text-right mb-0">
          – Atul Jain, Chariman & CEO TEOCO
        </p>
      </div>
    </section>
  </Layout>
</template>

<script>
import Layout from "~/layouts/Landing.vue";

export default {
  metaInfo: {
    title: "IoT Brief - Yellowbrick Data",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "Yellowbrick breaks through limitations of legacy and cloud-only alternatives offering the best price/performance for real-time workloads available at IoT scale.",
      },
      {
        key: "og:description",
        name: "og:description",
        content:
          "Yellowbrick breaks through limitations of legacy and cloud-only alternatives offering the best price/performance for real-time workloads available at IoT scale.",
      },
      {
        key: "twitter:description",
        name: "twitter:description",
        content:
          "Yellowbrick breaks through limitations of legacy and cloud-only alternatives offering the best price/performance for real-time workloads available at IoT scale.",
      },
      {
        key: "og:title",
        name: "og:title",
        content: "YellowBrick Data Brief",
      },
      {
        key: "twitter:title",
        name: "twitter:title",
        content: "YellowBrick Data Brief",
      },
      {
        key: "og:image",
        name: "og:image",
        content:
          "https://www.yellowbrick.com/uploads/ebook-data-lake-thumb.jpg",
      },
      {
        key: "twitter:image",
        name: "twitter:image",
        content:
          "https://www.yellowbrick.com/uploads/ebook-data-lake-thumb.jpg",
      },
    ],
  },
  data() {
    return {
      isExec: false,
      selectedCompany: null,
      defaultPdfUrl: "/uploads/YB_Brief_TelecomAnalytics_v1.20.pdf",
      companies: [
        {
          companyName: "AT&T",
          pdfUrl: "#"
        },
        {
          companyName: "Charter",
          pdfUrl: "#"
        },
        {
          companyName: "Comcast",
          pdfUrl: "#"
        },
        {
          companyName: "Telus",
          pdfUrl: "#"
        },
        {
          companyName: "T-Mobile",
          pdfUrl: "#"
        },
        {
          companyName: "UScellular",
          pdfUrl: "#"
        },
        {
          companyName: "Verizon",
          pdfUrl: "#"
        },
        {
          companyName: "Bell",
          pdfUrl: "#"
        },
      ],
    };
  },
  mounted() {
    const companyNameQuery = this.$route.query.company_name || null;
    if (companyNameQuery !== null) {
      this.selectedCompany =
        this.companies.find(
          (c) => c.companyName.toLowerCase() === companyNameQuery.toLowerCase()
        ) || null;
    }
    const pageQuery = this.$route.query.audience || "";
    if (pageQuery === "exec") {
      this.isExec = true;
    }
  },
  components: {
    Layout,
  },
};
</script>
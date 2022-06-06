<style scoped>
.hero {
  background-image: url(/uploads/images/top-10-mobile-case-study-bground.png);
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
            Global Top 10 Mobile Operator Case Study
          </h5>
          <div class="bg-white md:bg-transparent p-6 md:p-0">
            <h1 class="hero-title" v-if="!this.isExec">
              See how Yellowbrick Data Warehouse provided unbeatable price/performance to maintain competitive edge despite massive data growth
            </h1>
            <h1 class="hero-title" v-if="this.isExec">
              See how Yellowbrick accelerated queries 20X faster than Netezza while saving over a million dollars per year
            </h1>
            <p class="rfs-text-lg description-container">
              One of the largest mobile operators in Latin America struggled to analyze insights from billions of records it collects per day for delivering telephony and value-added services to mobile users and business customers. It's Netezza data warehouse couldn't keep up with processing over 1billion records per day and query latency and system availability were highly unreliable.
            </p>
            <p class="rfs-text-lg description-container">
              The company evaluated several data analytics platforms, with most showing only modest performance improvements and some promising a risky migration process. Yellowbrick Data Warehouse was the exception: its performance at scale, compatibility with existing tools, reliability, and ease of use were superior. 
            </p>
            <a href="/uploads/Yellowbrick_Case-Study_Top-10-Mobile-Operator.pdf" id="top-10-mobile-case-study" class="arrow-only-blue text-teal ungated-asset">Read the Case Study</a>
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
    title: "Case Study: Top 10 Mobile Operator - Yellowbrick Data",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "Read how one of the largest mobile operators in Latin America was able to accelerate queries 20x and maintain competitive edge with Yellowbrick",
      },
      {
        key: "og:description",
        name: "og:description",
        content:
          "Read how one of the largest mobile operators in Latin America was able to accelerate queries 20x and maintain competitive edge with Yellowbrick",
      },
      {
        key: "twitter:description",
        name: "twitter:description",
        content:
          "Read how one of the largest mobile operators in Latin America was able to accelerate queries 20x and maintain competitive edge with Yellowbrick",
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
    };
  },
  mounted() {
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
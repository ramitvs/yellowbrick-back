<style scoped>
.hero {
  background-image: url(/uploads/images/teradata-modernization-ebook-bground.png);
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
            Teradata vs Yellowbrick Comparison eBook
          </h5>
          <div class="bg-white md:bg-transparent p-6 md:p-0">
            <h1 class="hero-title">
              Migrate Teradata workloads to Yellowbrick for 10X performance<br>
              <span class="uppercase">At a tenth the cost</span>
            </h1>
            <p class="rfs-text-lg description-container">
              Teradata is slow, expensive, complex, and difficult to migrate data from. Companies are moving from Teradata to Yellowbrick for industry-leading price-performance, fixed pricing with no lock-in, a hybrid structre to allow users to analyze data anywhere, and a painless migration process.
            </p>
            <a href="https://ww2.yellowbrick.com/hubfs/Whitepapers/Yellowbrick_Migrate-from-Teradata_eBook.pdf" id="teradata-ebook" class="arrow-only-blue text-teal ungated-asset">Read the eBook</a>
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
    title: "Migrate Teradata Workloads eBook - Yellowbrick Data",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "See why companies are moving from Teradata to Yellowbrick for industry-leading price-performance, fixed pricing with no lock-in, a hybrid structre",
      },
      {
        key: "og:description",
        name: "og:description",
        content:
          "See why companies are moving from Teradata to Yellowbrick for industry-leading price-performance, fixed pricing with no lock-in, a hybrid structre",
      },
      {
        key: "twitter:description",
        name: "twitter:description",
        content:
          "See why companies are moving from Teradata to Yellowbrick for industry-leading price-performance, fixed pricing with no lock-in, a hybrid structre",
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
    return {};
  },
  components: {
    Layout,
  },
};
</script>
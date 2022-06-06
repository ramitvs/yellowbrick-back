<style scoped>
.hero {
  background-image: url(/uploads/images/woman-with-phone-downsampled.png);
  background-size: cover;
  background-position: center center;
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
    padding: 0 212px 0 0;
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
            Real-time Insights
            {{
              this.selectedCompany && this.selectedCompany.companyName
                ? "for " + this.selectedCompany.companyName
                : ""
            }}
          </h5>
          <div class="bg-white md:bg-transparent p-6 md:p-0">
            <h1 class="hero-title">
              {{
                this.selectedCompany && this.selectedCompany.headline
                  ? this.selectedCompany.headline
                  : this.defaultHeadline
              }}
            </h1>
            <div
              class="rfs-text-lg description-container"
              v-html="
                this.selectedCompany && this.selectedCompany.body
                  ? this.selectedCompany.body
                  : this.defaultBody
              "
            ></div>
            <a
              :href="
                this.selectedCompany && this.selectedCompany.pdfUrl
                  ? this.selectedCompany.pdfUrl
                  : this.defaultPdfUrl
              "
              id="insurance-brief"
              class="arrow-only-blue text-teal ungated-asset"
            >
              Download the
              <!-- {{
                this.selectedCompany && this.selectedCompany.companyName
                  ? this.selectedCompany.companyName + `'s`
                  : `the`
              }} -->
              Brief
            </a>
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
    title: "Industry Brief",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "See how Yellowbrick can help drive your business through real-time analytics",
      },
      {
        key: "og:description",
        name: "og:description",
        content:
          "See how Yellowbrick can help drive your business through real-time analytics",
      },
      {
        key: "twitter:description",
        name: "twitter:description",
        content:
          "See how Yellowbrick can help drive your business through real-time analytics",
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
      defaultHeadline: `See how Yellowbrick's lightning-fast hybrid cloud data warehouse can dramatically improve your business outcomes.`,
      defaultBody: `
        <p>Discover why insurance companies like yours are migrating to Yellowbrick, the world’s fastest and most flexible data warehouse. Yellowbrick’s unique cloud-native architecture allows the data warehouse to be deployed anywhere—on any cloud, data center, at the network edge, or any combination. And, the powerful database engine is designed to provide immediate insights on any amount of data.</p>
        <p>Learn how you can bring this new level of “instant insight”, predictable spend, and deployment flexibility to your business today.</p>
      `,
      defaultPdfUrl: "/uploads/BRIEF_Yellowbrick_Insurance_Analytics.pdf",
      companies: [
        {
          companyName: "Aetna",
          pdfUrl: "/uploads/BRIEF_Yellowbrick_Insurance_Aetna.pdf",
          headline: `See how Yellowbrick's lightning-fast hybrid cloud data warehouse can dramatically improve your business outcomes.`,
          body: `
            <p>Discover why insurance companies like yours are migrating to Yellowbrick, the world’s fastest and most flexible data warehouse. Yellowbrick’s unique cloud-native architecture allows the data warehouse to be deployed anywhere—on any cloud, data center, at the network edge, or any combination. And, the powerful database engine is designed to provide immediate insights on any amount of data.</p>
            <p>Learn how you can bring this new level of “instant insight”, predictable spend, and deployment flexibility to Aetna today.</p>
          `,
        },
        {
          companyName: "Cigna",
          pdfUrl: "/uploads/BRIEF_Yellowbrick_Insurance_Cigna.pdf",
          headline: `See how Yellowbrick's lightning-fast hybrid cloud data warehouse can dramatically improve your business outcomes.`,
          body: `
            <p>Discover why insurance companies like yours are migrating to Yellowbrick, the world’s fastest and most flexible data warehouse. Yellowbrick’s unique cloud-native architecture allows the data warehouse to be deployed anywhere—on any cloud, data center, at the network edge, or any combination. And, the powerful database engine is designed to provide immediate insights on any amount of data.</p>
            <p>Learn how you can bring this new level of “instant insight”, predictable spend, and deployment flexibility to Cigna today.</p>
          `,
        },
        {
          companyName: "Optum",
          pdfUrl: "/uploads/BRIEF_Yellowbrick_Insurance_Optum.pdf",
          headline: `See how Yellowbrick's lightning-fast hybrid cloud data warehouse can dramatically improve your business outcomes.`,
          body: `
            <p>Discover why insurance companies like yours are migrating to Yellowbrick, the world’s fastest and most flexible data warehouse. Yellowbrick’s unique cloud-native architecture allows the data warehouse to be deployed anywhere—on any cloud, data center, at the network edge, or any combination. And, the powerful database engine is designed to provide immediate insights on any amount of data.</p>
            <p>Learn how you can bring this new level of “instant insight”, predictable spend, and deployment flexibility to Optum today.</p>
          `,
        },
        {
          companyName: "Manulife",
          pdfUrl: "/uploads/BRIEF_Yellowbrick_Insurance_Manulife.pdf",
          headline: `See how Yellowbrick's lightning-fast hybrid cloud data warehouse can dramatically improve your business outcomes.`,
          body: `
            <p>Discover why insurance companies like yours are migrating to Yellowbrick, the world’s fastest and most flexible data warehouse. Yellowbrick’s unique cloud-native architecture allows the data warehouse to be deployed anywhere—on any cloud, data center, at the network edge, or any combination. And, the powerful database engine is designed to provide immediate insights on any amount of data.</p>
            <p>Learn how you can bring this new level of “instant insight”, predictable spend, and deployment flexibility to Manulife today.</p>
          `,
        },
        {
          companyName: "Allstate",
          pdfUrl: "/uploads/BRIEF_Yellowbrick_Insurance_Allstate.pdf",
          headline: `See how Yellowbrick's lightning-fast hybrid cloud data warehouse can dramatically improve your business outcomes.`,
          body: `
            <p>Discover why insurance companies like yours are migrating to Yellowbrick, the world’s fastest and most flexible data warehouse. Yellowbrick’s unique cloud-native architecture allows the data warehouse to be deployed anywhere—on any cloud, data center, at the network edge, or any combination. And, the powerful database engine is designed to provide immediate insights on any amount of data.</p>
            <p>Learn how you can bring this new level of “instant insight”, predictable spend, and deployment flexibility to Allstate today.</p>
          `,
        },
        {
          companyName: "Nationwide",
          pdfUrl: "/uploads/BRIEF_Yellowbrick_Insurance_Nationwide.pdf",
          headline: `See how Yellowbrick's lightning-fast hybrid cloud data warehouse can dramatically improve your business outcomes.`,
          body: `
            <p>Discover why insurance companies like yours are migrating to Yellowbrick, the world’s fastest and most flexible data warehouse. Yellowbrick’s unique cloud-native architecture allows the data warehouse to be deployed anywhere—on any cloud, data center, at the network edge, or any combination. And, the powerful database engine is designed to provide immediate insights on any amount of data.</p>
            <p>Learn how you can bring this new level of “instant insight”, predictable spend, and deployment flexibility to Nationwide today.</p>
          `,
        },
        {
          companyName: "Farmers",
          pdfUrl: "/uploads/BRIEF_Yellowbrick_Insurance_Farmers.pdf",
          headline: `See how Yellowbrick's lightning-fast hybrid cloud data warehouse can dramatically improve your business outcomes.`,
          body: `
            <p>Discover why insurance companies like yours are migrating to Yellowbrick, the world’s fastest and most flexible data warehouse. Yellowbrick’s unique cloud-native architecture allows the data warehouse to be deployed anywhere—on any cloud, data center, at the network edge, or any combination. And, the powerful database engine is designed to provide immediate insights on any amount of data.</p>
            <p>Learn how you can bring this new level of “instant insight”, predictable spend, and deployment flexibility to Farmers today.</p>
          `,
        },
        {
          companyName: "Premera Blue Cross",
          pdfUrl: "/uploads/BRIEF_Yellowbrick_Insurance_Premera.pdf",
          headline: `See how Yellowbrick's lightning-fast hybrid cloud data warehouse can dramatically improve your business outcomes.`,
          body: `
            <p>Discover why insurance companies like yours are migrating to Yellowbrick, the world’s fastest and most flexible data warehouse. Yellowbrick’s unique cloud-native architecture allows the data warehouse to be deployed anywhere—on any cloud, data center, at the network edge, or any combination. And, the powerful database engine is designed to provide immediate insights on any amount of data.</p>
            <p>Learn how you can bring this new level of “instant insight”, predictable spend, and deployment flexibility to Premera Blue Cross today.</p>
          `,
        },
        {
          companyName: "Humana",
          pdfUrl: "/uploads/BRIEF_Yellowbrick_Insurance_Humana.pdf",
          headline: `See how Yellowbrick's lightning-fast hybrid cloud data warehouse can dramatically improve your business outcomes.`,
          body: `
            <p>Discover why insurance companies like yours are migrating to Yellowbrick, the world’s fastest and most flexible data warehouse. Yellowbrick’s unique cloud-native architecture allows the data warehouse to be deployed anywhere—on any cloud, data center, at the network edge, or any combination. And, the powerful database engine is designed to provide immediate insights on any amount of data.</p>
            <p>Learn how you can bring this new level of “instant insight”, predictable spend, and deployment flexibility to Humana today.</p>
          `,
        },
        {
          companyName: "HCA",
          pdfUrl: "/uploads/BRIEF_Yellowbrick_Insurance_HCA.pdf",
          headline: `See how Yellowbrick's lightning-fast hybrid cloud data warehouse can dramatically improve your business outcomes.`,
          body: `
            <p>Discover why insurance companies like yours are migrating to Yellowbrick, the world’s fastest and most flexible data warehouse. Yellowbrick’s unique cloud-native architecture allows the data warehouse to be deployed anywhere—on any cloud, data center, at the network edge, or any combination. And, the powerful database engine is designed to provide immediate insights on any amount of data.</p>
            <p>Learn how you can bring this new level of “instant insight”, predictable spend, and deployment flexibility to HCA today.</p>
          `,
        },
        {
          companyName: "Pacific Life",
          pdfUrl: "/uploads/BRIEF_Yellowbrick_Insurance_Pacific_Life.pdf",
          headline: `See how Yellowbrick's lightning-fast hybrid cloud data warehouse can dramatically improve your business outcomes.`,
          body: `
            <p>Discover why insurance companies like yours are migrating to Yellowbrick, the world’s fastest and most flexible data warehouse. Yellowbrick’s unique cloud-native architecture allows the data warehouse to be deployed anywhere—on any cloud, data center, at the network edge, or any combination. And, the powerful database engine is designed to provide immediate insights on any amount of data.</p>
            <p>Learn how you can bring this new level of “instant insight”, predictable spend, and deployment flexibility to Pacific Life today.</p>
          `,
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
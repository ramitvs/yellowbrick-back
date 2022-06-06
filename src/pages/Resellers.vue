<style scoped>
.hero {
  background-image: url(/uploads/Yellowbrick-BlogImage8.jpg);
  background-size: cover;
  background-position: center;
}

.asterisk {
  @apply text-red-800;
}

.contact {
  background-image: url(/uploads/images/contact-bg.svg);
  background-size: cover;
}

.slashed {
  position: relative;
  &:after {
    content: "";
    position: absolute;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21 21'%3E%3Cpath fill='none' d='M0 0h21v21H0z'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' fill='%234b5357' d='M9 9h3v3H9z'/%3E%3C/svg%3E");
    background-repeat: repeat;
    background-position: right;
    background-size: 22px;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.3;
  }
}
</style>

<template>
  <Layout>
    <Hero :heroTitle="heroTitleText" />

    <section class="cc:flex pb-8 bg-gray-100 px-6 xl:px-0 py-20">
      <div class="flex flex-col justify-center max-w-1200 mx-auto">
        <!-- <div class="break-plane p-10 bg-white shadow-lg relative"> -->
        <h2 class="accent-heading">Why become a Yellowbrick reseller?</h2>
        <div class="flex flex-col md:flex-row flex-wrap mx-0 md:-mx-6">
          <div
            class="w-full md:w-1/4 pt-6 pb-6 md:p-6 flex flex-col items-start"
          >
            <img
              src="/uploads/images/resellers/resellers-market-opportunity.svg"
              class="w-24"
              alt="speed icon"
            />
            <h5 class="mt-8 mb-2">Market opportunity</h5>
            <p>
              The data warehouse market is predicted to grow to $24 billion by
              2024.<span class="asterisk">*</span>
            </p>
            <p class="text-xs">
              <span class="asterisk">*</span>Worldwide Big Data and Analytics
              Software Forecast, 2020–2024 (IDC)
            </p>
          </div>
          <div
            class="w-full md:w-1/4 pt-6 pb-6 md:p-6 flex flex-col items-start"
          >
            <img
              src="/uploads/images/resellers/resellers-accelerate-growth.svg"
              class="w-24"
              alt="accuracy icon"
            />
            <h5 class="mt-8 mb-2">Accelerate growth</h5>
            <p>
              Our resellers enjoy a partnership to drive business for mutual
              benefit
            </p>
          </div>
          <div
            class="w-full md:w-1/4 pt-6 pb-6 md:p-6 flex flex-col items-start"
          >
            <img
              src="/uploads/images/resellers/resellers-increase-profitability.svg"
              class="w-24"
              alt="unlocked icon"
            />
            <h5 class="mt-8 mb-2">Increase profitability</h5>
            <p>
              Consistent performance of Yellowbrick ensures continued contracts,
              giving you high ROI
            </p>
          </div>
          <div
            class="w-full md:w-1/4 pt-6 pb-6 md:p-6 flex flex-col items-start"
          >
            <img
              src="/uploads/images/resellers/resellers-better-together.svg"
              class="w-24"
              alt="unlocked icon"
            />
            <h5 class="mt-8 mb-2">Better together</h5>
            <p>
              We have an open, transparent, customer- and partner-focused
              culture
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="cc:flex pb-8 bg-white px-6 xl:px-0 py-20">
      <div class="flex flex-col justify-center max-w-1200 mx-auto">
        <!-- <div class="break-plane p-10 bg-white shadow-lg relative"> -->
        <h2 class="accent-heading">Yellowbrick accelerates performance</h2>
        <div class="flex flex-col md:flex-row flex-wrap mx-0 md:-mx-6">
          <div
            class="w-full md:w-1/4 pt-6 pb-6 md:p-6 flex flex-col items-start"
          >
            <img
              src="/uploads/images/resellers/resellers-price-performance.svg"
              class="w-24"
              alt="speed icon"
            />
            <h5 class="mt-8 mb-2">Price/performance</h5>
            <p>Unmatched speeds at a fraction of the cost</p>
          </div>
          <div
            class="w-full md:w-1/4 pt-6 pb-6 md:p-6 flex flex-col items-start"
          >
            <img
              src="/uploads/images/resellers/resellers-cloud-flexible.svg"
              class="w-24"
              alt="speed icon"
            />
            <h5 class="mt-8 mb-2">Cloud flexible</h5>
            <p>Data agility wherever and whenever</p>
          </div>

          <div
            class="w-full md:w-1/4 pt-6 pb-6 md:p-6 flex flex-col items-start"
          >
            <img
              src="/uploads/images/resellers/resellers-security-compliance.svg"
              class="w-24"
              alt="accuracy icon"
            />
            <h5 class="mt-8 mb-2">Security and compliance</h5>
            <p>Risk mitigation across all industries</p>
          </div>
          
          <div
            class="w-full md:w-1/4 pt-6 pb-6 md:p-6 flex flex-col items-start"
          >
            <img
              src="/uploads/images/resellers/resellers-predictable-pricing.svg"
              class="w-24"
              alt="unlocked icon"
            />
            <h5 class="mt-8 mb-2">Predictable, fixed-cost pricing</h5>
            <p>Customers enjoy budget certainty</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gray-100 flex pb-12 bg-white px-6 xl:px-0 md:pt-20">
      <div class="mx-auto w-full max-w-1200">
        <h2 class="accent-heading">Reseller resources</h2>
        <div class="flex flex-col sm:flex-row flex-wrap -mx-4 md:-mx-8">

          <div class="flex w-full md:w-1/2 xl:w-1/3 p-4 md:p-8">
            <div class="pr-5 w-5/12">
              <img src="/uploads/BRIEF_Yellowbrick_Velocity_Partner_Network-thumb.jpg"  alt="Migration guide: Teradata to Yellowbrick Hybrid Data Warehouse" class="shadow-md" />
            </div>
            <div class="flex flex-col xl:justify-between w-7/12">
              <h6 class="eyebrow uppercase">Brief</h6>
              <h5>Velocity Partner Network Brief</h5>
              <a id="velocity-partner-network-brief" class="button yellow ungated-asset" href="/uploads/BRIEF_Yellowbrick_Velocity_Partner_Network.pdf" target="_blank">Read Brief </a>
            </div>
          </div>

          <div class="flex w-full md:w-1/2 xl:w-1/3 p-4 md:p-8">
            <div class="pr-5 w-5/12">
              <img src="/uploads/thumb-eb-hybrid-cloud-analytics.png"  alt="Migration guide: Teradata to Yellowbrick Hybrid Data Warehouse" class="shadow-md" />
            </div>
            <div class="flex flex-col xl:justify-between w-7/12">
              <h6 class="eyebrow uppercase">Brief</h6>
              <h5>Hybrid Cloud Brief</h5>
              <a id="hybrid-cloud-brief" class="button yellow ungated-asset" href="/uploads/hybrid-cloud-brief.pdf" target="_blank">Read Brief </a>
            </div>
          </div>

          <div class="flex w-full md:w-1/2 xl:w-1/3 p-4 md:p-8">
            <div class="pr-5 w-5/12">
              <img src="/uploads/yellowbrick_dw_economics-thumb.jpg"  alt="Migration guide: Teradata to Yellowbrick Hybrid Data Warehouse" class="shadow-md" />
            </div>
            <div class="flex flex-col xl:justify-between w-7/12">
              <h6 class="eyebrow uppercase mb-0">Brief</h6>
              <h5 class="mb-0">Economics of Yellowbrick Data Warehouse</h5>
              <a class="button yellow" href="/resources/briefs/economics-of-yellowbrick-data-warehouse/" target="_blank">Read Brief </a>
            </div>
          </div>

          <div class="flex w-full md:w-1/2 xl:w-1/3 p-4 md:p-8">
            <div class="pr-5 w-5/12">
              <img src="/uploads/yellowbrick-reseller-brief-thumb.png"  alt="Migration guide: Teradata to Yellowbrick Hybrid Data Warehouse" class="shadow-md" />
            </div>
            <div class="flex flex-col xl:justify-between w-7/12">
              <h6 class="eyebrow uppercase mb-0">Partner Brief</h6>
              <h5 class="mb-0">Yellowbrick Reseller Opportunity</h5>
              <a id="reseller-opportunity-brief" class="button yellow ungated-asset" href="/uploads/BRIEF_Yellowbrick_Reseller_Opportunity.pdf" target="_blank">Read Brief </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section
      id="more-info"
      class="slashed bg-white relative flex justify-center h-auto m-0 py-16 sm:py-24 md:py-32 px-0 z-10"
    >
      <div class="flex justify-center max-w-1200 w-full mx-auto z-10">
        <div
          class="box-link-big w-full flex flex-col bg-gray-100 p-10 md:p-16 relative"
        >
          <span class="accent"></span>
          <h1 class="mb-6 sm:mb-10 leading-tight rfs-text-5xl">
            To learn more about becoming a reseller, contact&nbsp;our&nbsp;team.
          </h1>
          <span
            v-if="!isOpen"
            @click="isOpen = !isOpen"
            href=""
            class="arrow-btn large"
          ></span>

          <transition name="slide">
            <div v-show="isOpen" class="max-w-1200 w-full mx-auto">
              <BaseHubspot
                id="007fec31-69e0-4022-99bc-bc8643a848e0"
                sfid="7011G000000kg9oQAA"
                class="hs-form-light"
              />
            </div>
          </transition>
        </div>
      </div>
    </section>

  </Layout>
</template>

<script>
import Hero from "~/components/HeroComponent";

export default {
  metaInfo: {
    title: "Drive growth with Yellowbrick",
    meta: [
      {
        key: "description",
        name: "description",
        content: "Become a reseller at one of three partner levels",
      },
      {
        key: "og:description",
        name: "og:description",
        content: "Become a reseller at one of three partner levels",
      },
      {
        key: "og:title",
        name: "og:title",
        content: "Drive growth with Yellowbrick",
      },
      {
        key: "twitter:description",
        name: "twitter:description",
        content: "Become a reseller at one of three partner levels",
      },
      {
        key: "twitter:title",
        name: "twitter:title",
        content: "Drive growth with Yellowbrick",
      },
    ],
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/thank-you/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData,
        }),
      })
        .then(() => this.$router.push("/thank-you/"))
        .catch((error) => alert(error));
    },
    openFormCheck() {
      if(typeof(window) !== "undefined") {
        if(window.location.hash === '#more-info') {
          this.isOpen = true;
        }
      }
    }
  },
  mounted() {
   this.openFormCheck();
  },
  watch: {
    $route (to, from){
      this.openFormCheck();
    }
  },
  components: {
    Hero,
  },
  data() {
    return {
      isOpen: false,
      heroTitleText: "Drive growth with Yellowbrick"
    };
  },
};
</script>
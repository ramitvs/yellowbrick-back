<style scoped>
  .hero {
    background-image: url(/uploads/images/yellowbrick_cloudera_hero.png);
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
    font-size: 30px;
    padding-right: 50px;
    position: relative;
  }

  .accent-heading:before {
    background-color: transparent;
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

  .cloudera-mdrn-assesment li {
    color: #FFCA51;
    margin-top: -14px;

  }

  .cloudera-mdrn-assesment li p {
    color: #FFFF;
    font-size: 1.5rem !important;
    margin-bottom: 1.5rem !important;
  }

  .cloudera-mdrn-section h1 {
    font-size: 55px;
  }

  .accent-heading {
    font-size: 25px !important;
  }

  .cloudera-mdrn-section p {
    font-size: 1.6rem !important;
  }

  .cloudera-mdrn-section p:nth-child(2) {
    font-size: 1.6rem !important;
    font-weight: 400;

  }

  .cloudera-mdrn-section p:nth-child(1) {
    font-size: 36px;
    font-weight: light;
  }

  @media(max-width: 768px) {
    button {
      text-align: left !important;
    }

    .cloudera-mdrn-assesment li p {
      color: black;
      font-size: 24x;
    }

    .description-container {
      color: black;
      font-weight: lighter !important;
      margin: 30px 0px 30px 0px;
    }

    .cloudera-mdrn-section h1 {
      font-size: 48px;
      color: black;
    }

    .accent-heading {
      color: black;
      font-size: 24px;

    }

    .cloudera-mdrn-section p:nth-child(2) {
      font-size: 26px;
      font-weight: bold;
    }

    .cloudera-mdrn-section p:nth-child(1) {
      font-size: 24px;
      font-weight: light;
    }

    .arrow-only-blue {
      font-size: 24px;
      margin-top: 20px;
    }

    .arrow-only-blue:after {

      margin-top: 20px;
    }
  }

  .float-form {
    @apply relative p-8 bg-white shadow-lg;

    & .mktoForm {
      margin-top: 0.5rem !important;
    }
  }

  .embellish-bg {
    background-image: url(/uploads/images/predictability-bg.svg);
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: 30%;
  }

  .multi-column {
    column-count: 1;
    column-gap: 0;
  }

  @media (min-width: 768px) {
    .multi-column {
      column-count: 2;
      column-gap: 2.5rem;
    }
  }

  .break-plane {
    top: -3rem;
    z-index: 40;
  }

  .stroke-main {
    stroke: #4b5458;
    stroke-width: 3px;
  }

  .stroke-accent {
    stroke: #fecf41;
    stroke-width: 2.5px;
  }

  .active {
    display: none;
  }

  .gate-form {
    min-height: 300px;
  }

  .expand-enter-active,
  .expand-leave-active {
    transition-property: opacity, height;
  }

  .expand-enter,
  .expand-leave-to {
    opacity: 0;
  }

  .hero-title {
    font-size: 55px !important;
  }
</style>

<template>
  <Layout>
    <section class="hero flex bg-gray-700 py-10 md:py-12 text-black px-6 xl:px-0 cloudera-mdrn-section">
      <div class="flex flex-col md:flex-row max-w-1200 w-full py-8 mx-auto relative z-10">
        <div class="w-full lg:w-2/3 text-gray-700 md:text-black hero-text">

          <div class="bg-white md:bg-transparent p-6 md:p-0">
            <h1 class=" text-white" style=" margin-top: 0px;" v-if="!this.isExec">
              Turbulence in<span style="color: #FFCA51 "> Cloudera</span>?</h1>
            <p class="text-white description-container rfs-text-lg">
              The data lake has been a mainstay among many large companies looking to unleash their wealth of data with real-time analytics.
            </p>
            <p class="text-white description-container rfs-text-lg">
              That promise of turning stagnant, big data into key insights has, unfortunately, failed to materialize.
            </p>
            <p class="text-white description-container rfs-text-lg">
              In this eBook, you’ll learn how most data lake owners are beset by having stored vast amounts of data, yet they fail in gathering real-time analytics. It’s precisely the analytics of that data where the real value exists.
            </p>
            <a href="/go/cloudera-modernization/#cloudera-download-ebook" class="button yellow mr-4 mb-4">Download the eBook</a>
          </div>
        </div>

        <div class="w-full md:w-1/3">

        </div>
      </div>
    </section>
    <section class="flex py-16 bg-white-600 px-6 xl:px-0 enhance-bg">
      <div class="flex-1 justify-center max-w-1000 mx-auto">
        <p class="accent-heading text-black rfs-text-4xl mb-1">
          When you download this eBook you’ll learn the solution: keep the data lake for what it does well. What makes this solution different is adding modern, real-time enterprise analytics that's designed for performance at scale.
        </p>
        <p class="accent-heading text-black rfs-text-4xl font-light mb-1">
          How <i>not</i> to accomplish this? One example is Cloudera, which was considered an innovator. Now as technology has evolved, Cloudera is now known for pushing different kinds of innovation boundaries: the patience of its users along with
          several other “innovations” -- like slow queries and downtime and dependency on extensive new skill sets.
        </p>
        <p class="accent-heading text-black rfs-text-4xl font-light mb-1">
          <i>This eBook demonstrates the new approach to data lakes: Let data lakes do what they do best -- collect data. Pull the business analytics function out of the lake and back to shore.</i>
        </p>
      </div>

    </section>
    <section class="flex pb-8 bg-white px-6 xl:px-0" id="cloudera-download-ebook">
      <div class="flex flex-col justify-center max-w-1200 mx-auto">
        <div class="break-plane p-10 bg-white shadow-lg relative">
          <span class=""></span>
          <p class="accent-heading text-black rfs-text-4xl font-bold mb-1">
            Download our Data Lake eBook to Learn More
          </p>
          <div class="text-gray-500 w-full">
            <p class=""></p>
            <div class="float-form">
              <h3 class="text-gray-700">Download Now</h3>
              <BaseHubspot id="14616080-73d2-4fca-8f26-3bdb6faa95a4" sfid="7011G000000UvfKQAS" webId="8366986" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="flex py-16 bg-white-600 px-6 xl:px-0 enhance-bg" style="padding-top: 0px;">
      <div class="flex-1 justify-center max-w-1000 mx-auto">
        <p class="accent-heading text-black rfs-text-4xl font-light mb-1">
          The eBook also shows how LexisNexis, one of the top U.S. healthcare insurance companies, and one of the top mobile operators in Latin America replaced Impala and Hive with Yellowbrick and their users are now quantifiably happier, with
          queries running up to 100X faster.
        </p>
      </div>
    </section>
  </Layout>
</template>
<script>
  import Layout from '~/layouts/Landing.vue';
  export default {
    metaInfo: {
      title: 'Cloudera Modernization - Yellowbrick Data',
      meta: [{
          key: 'description',
          name: 'description',
          content: 'Move away from Cloudera’s slow queries and downtime. Move to Yellowbrick, a state-of-the-art MPP analytics database that leapfrogs all other data warehouses.'
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: 'Move away from Cloudera’s slow queries and downtime. Move to Yellowbrick, a state-of-the-art MPP analytics database that leapfrogs all other data warehouses.'
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: 'Move away from Cloudera’s slow queries and downtime. Move to Yellowbrick, a state-of-the-art MPP analytics database that leapfrogs all other data warehouses.'
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: 'Cloudera Modernization - Yellowbrick Data'
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: 'Cloudera Modernization - Yellowbrick Data'
        },
        {
          key: 'og:image',
          name: 'og:image',
          content: 'https://www.yellowbrick.com/uploads/images/yellowbrick_cloudera_hero.png'
        },
        {
          key: 'twitter:image',
          name: 'twitter:image',
          content: 'https://www.yellowbrick.com/uploads/images/yellowbrick_cloudera_hero.png'
        }
      ]
    },
    components: {
      Layout,
    },
    data() {
      return {};
    }
  };
</script>
<style scoped>
  .hero {
    background-image: url(/uploads/images/yellowbrick_cloudera_hero.png);
    background-size: cover;
    background-position: center center;
    min-height: 935px;

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
  .accent-heading{
    font-size: 25px !important;
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
 button{
   text-align: left !important;
 }

    .cloudera-mdrn-assesment li p {
      color: black;
 font-size: 24x;
    }

      .description-container{
      color: black;
      font-weight: lighter !important;
      margin: 30px 0px 30px 0px;
    }
    .cloudera-mdrn-section h1 {
      font-size: 48px;
        color: black;
    }
    .accent-heading{
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

.hero-title{
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
              Turbulence in<span style="color: #FFCA51 " > Cloudera</span>?</h1>
            <p class="text-white description-container rfs-text-lg">
            Cloudera was considered an innovator. Now as
              technology has evolved, it’s known for pushing new kinds of boundaries, like the patience of its users and
              other… “innovations.”
            </p>
            <div>
              <ul class="cloudera-mdrn-assesment">
                <li>
                  <p>Slow queries for more a fair share of users</p>
                </li>
                <li>
                  <p>Frequent maintenance downtime—and when is a moment of downtime acceptable?
                  </p>
                </li>
                <li>
                  <p>Dependency on expensive data engineering skill sets</p>
                </li>
              </ul>
            </div>
            <p class="accent-heading text-white rfs-text-4xl font-light mb-1">
              And under its new ownership — a private equity firm — things can get much worse.
            </p>
            <a href="/go/cloudera-modernization-assessment/#cloudera-learn-more" class="button yellow mr-4 mb-4">Learn More</a>
          </div>
        </div>

        <div class="w-full md:w-1/3">

        </div>
      </div>
    </section>
    <section class="flex py-16 bg-white-600 px-6 xl:px-0 enhance-bg" id="cloudera-learn-more">
      <div class="flex-1 justify-center max-w-1000 mx-auto">
        <p class="accent-heading text-black rfs-text-4xl mb-1">
          <span style="color: black; font-weight: bold;">Yellowbrick is different.</span>
          We offer a completely modern, state-of-the-art MPP analytics database that leapfrogs all other data
          warehouses, including Cloudera Data Platform. We’ve built our data warehouse on a Kubernetes architecture,
          which means you can deploy Yellowbrick anywhere—public, private, and hybrid clouds—all managed through a
          simple, unified control plane, with no special skill sets required.
        </p>
        <p class="accent-heading text-black rfs-text-4xl font-light mb-1">
          That, combined with a truly innovative and modern database design, we offer the best price/performance
          available for batch, real-time, ad hoc, and mixed workloads on data lakes—wherever they live, in HDFS or cloud
          object stores.
        </p>
        <p class="accent-heading text-black rfs-text-4xl font-light mb-1">
          LexisNexis, one of the top U.S. healthcare insurance companies, and one of the top mobile operators in Latin
          America replaced Impala and Hive with Yellowbrick and their users are now quantifiably happier, with queries
          running up to 100X faster.
        </p>

      </div>

    </section>
  <section class="flex pb-8 bg-white px-6 xl:px-0">
      <div class="flex flex-col justify-center max-w-1200 mx-auto">
        <div class="break-plane p-10 bg-white shadow-lg relative">
          <span class=""></span>
         <p class="accent-heading text-black rfs-text-4xl font-bold mb-1">
          Getting started with Yellowbrick is fast and easy.
        </p>
          <div class="text-gray-500 w-full">
            <p class=""></p>

            <transition-expand>
              <div v-if="expanded">
                  <div class="float-form">
                  <h3 class="text-gray-700">Schedule Now</h3>
                  <BaseHubspot id="e4e34b7a-6b27-4bb7-8277-fcd8013f6ef7" sfid="7011G000000kh21QAA" webId="8366986" />
              </div>
              </div>
            </transition-expand>

            <button @click="expanded = !expanded" class="rfs-text-2xl font-bold text-teal ungated-asset arrow-only-blue" style="margin-top: 20px;">
              {{ expanded ? `Close Form` : `Schedule a free modernization assessment today!` }}
            </button>

          </div>
        </div>

      </div>
    </section>
  </Layout>
</template>
<script>


  import TransitionExpand from '~/components/TransitionExpand.vue'


  import Layout from '~/layouts/Landing.vue';
  export default {
    metaInfo: {
      title: 'Free Cloudera Modernization Assessment - Yellowbrick Data',
      meta: [
        {
          key: 'description',
          name: 'description',
          content: 'Get a free Cloudera Modernization Assessment and see how Yellowbrick Data is different.'
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: 'Get a free Cloudera Modernization Assessment and see how Yellowbrick Data is different.'
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: 'Get a free Cloudera Modernization Assessment and see how Yellowbrick Data is different.'
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: 'Free Cloudera Modernization Assessment - Yellowbrick Data.'
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: 'Free Cloudera Modernization Assessment - Yellowbrick Data'
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

      TransitionExpand
    },
      data() {
    return {
      expanded: false,
    };
  }
  };
</script>

<style scoped>
  .hero {
    background-image: url(/uploads/images/tall-bg.svg);
    background-size: cover;
    background-position: center;
  }

  .embellish-bg {
    background-image: url(/uploads/images/predictability-bg.svg);
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: 25%;
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

  .html-chart {
    position: relative;

    & .y-axis {
      @apply absolute text-right w-8 text-gray-400 font-medium;

      &:nth-of-type(1) {
        top: calc(0% - 12px);
      }

      &:nth-of-type(2) {
        top: calc(20% - 12px);
      }

      &:nth-of-type(3) {
        top: calc(40% - 12px);
      }

      &:nth-of-type(4) {
        top: calc(60% - 12px);
      }

      &:nth-of-type(5) {
        top: calc(80% - 12px);
      }

      &:nth-of-type(6) {
        top: calc(100% - 12px);
      }
    }

    & .bar-5,
    & .bar-4,
    & .bar-3,
    & .bar-2,
    & .bar-1,
    & .bar-0 {
      @apply absolute bg-gray-200;
      left: 2.5rem;
      right: 0;
      height: 1px;
      z-index: 1;
    }

    & .bar-5 {
      top: 0%;
    }

    & .bar-4 {
      top: 20%;
    }

    & .bar-3 {
      top: 40%;
    }

    & .bar-2 {
      top: 60%;
    }

    & .bar-1 {
      top: 80%;
    }

    & .bar-0 {
      top: 100%;
    }

    & .vertical-chart {
      @apply p-0 m-0 ml-10 mt-6 mb-8 list-none relative h-64 flex flex-row items-end;

      & li {
        @apply mx-auto flex z-10 relative p-0;

        &.yellow {
          @apply bg-yellow1;
        }

        &.gray {
          @apply bg-gray-300;
        }

        & span {
          @apply absolute text-center w-full text-gray-500;
          bottom: -30px;
        }

        & .top-number {
          @apply absolute left-0 text-gray-500 font-medium;
          top: calc(0% - 1.5rem);
        }
      }
    }
  }
</style>

<template>
  <Layout>

    <section class="hero flex bg-gray-700 py-12 md:py-24 text-white px-6 xl:px-0">
      <div class="flex flex-col max-w-1200 w-full mx-auto z-10">
        <div class="w-full md:w-1/2 lg:w-5/12">
          <h2 class="rfs-text-xl text-yellow1 mb-0">Simple, predictable, affordable:</h2>
          <h1 class="rfs-text-6xl">Cloud data warehouse pricing done right</h1>
          <p class="rfs-text-lg">Yellowbrick costs a fraction of options like Snowflake and BigQuery (and don’t get us started on Teradata), while offering transparent, predictable pricing to prevent surprises.</p>
        </div>
      </div>
    </section>


    <PricingTablesSeo />
    <Compare />

    <section class="bg-gray-100 py-12 md:pb-16 px-6 xl:px-0">
      <div class="mx-auto w-full max-w-1200">
        <h2 class="accent-heading">For critical workloads, always-on performance at a predictable cost brings big savings</h2>
        <div class="w-full">
          <p class="rfs-text-lg mb-6">Nothing is more painful and confusing to businesses than budgeting costs for data warehouse needs. Legacy vendor costs are too high, and cloud-only vendors take advantage of charging unpredictable
            consumption-based fees, with no incentive to improve performance. Plus, total charges month-to-month can vary widely, making it difficult for organizations to predict true costs.</p>
          <p class="rfs-text-lg mb-6">Instead, we offer industry-leading price/performance at a predictable monthly rate under three different service plans, whether you deploy Yellowbrick in your data center or public cloud(s).</p>
        </div>
      </div>
    </section>

    <section class="flex py-12 md:py-24 bg-white px-6 xl:px-0">
      <div class="flex flex-col items-start max-w-1200 mx-auto">

        <div class="w-full">
          <div class="flex flex-col md:flex-row">
            <div class="w-full md:w-7/12">
              <h4>The economic benefits of Yellowbrick:<br /> An ESG economic validation report</h4>
              <p>Organizations must fundamentally shift their entire way of doing business. These changes have highlighted the importance of being able to quickly query and extract actionable insights from real-time data feeds and make quality,
                informed decisions.</p>
              <p>ESG’s modeled scenarios, based on validation with real-world Yellowbrick customers, predict significant savings for organizations looking to deploy a modern and agile analytics environment that delivers certain timely insights to
                answer today’s uncertain questions. One customer summed it up very well: <em>“With Yellowbrick, we can now add more retail data, get faster insight, and do not have to add more people or hardware.”</em></p>
              <p>
                Download the report to view the entire ESG study.
              </p>
              <div class="flex justify-center md:block mb-16">
                <a href="/go/economic-benefits-of-yellowbrick/" target="_blank" rel="noopener" class="button yellow mt-6">Download now</a>
              </div>
            </div>
            <div class="flex w-full items-center md:w-5/12">
              <img src="/uploads/economic-benefits-of-yellowbrick.jpg" alt="Economic Benefits of Yellowbrick" class="w-full sm:w-3/4 mx-auto" />
            </div>

          </div>
        </div>

      </div>
    </section>

    <MoreInfo id="more-info" />

  </Layout>
</template>

<script>
  import MoreInfo from '~/components/MoreInfo.vue'
  import PricingTablesSeo from '~/components/PricingTablesSeo.vue'
  import Compare from '~/components/ComparativeServiceTables.vue'


  export default {
    metaInfo: {
      title: 'Data Warehouse Pricing for Hybrid & Multi-Cloud',
      meta: [{
          key: 'description',
          name: 'description',
          content: 'Leverage Yellowbrick, the fastest cloud-native, hybrid data warehouse without the hidden fees of AWS and Snowflake or the high costs of Netezza and Teradata.'
        },
        {
          key: 'og:description',
          name: "og:description",
          content: 'Leverage Yellowbrick, the fastest cloud-native, hybrid data warehouse without the hidden fees of AWS and Snowflake or the high costs of Netezza and Teradata.'
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: 'Data Warehouse Pricing for Hybrid & Multi-Cloud'
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: 'Leverage Yellowbrick, the fastest cloud-native, hybrid data warehouse without the hidden fees of AWS and Snowflake or the high costs of Netezza and Teradata.'
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: 'Data Warehouse Pricing for Hybrid & Multi-Cloud'
        }
      ]
    },
    components: {
      PricingTablesSeo,
      Compare,
      MoreInfo
    },
    data() {
      return {
        expanded: false,
      };
    }

  }
</script>
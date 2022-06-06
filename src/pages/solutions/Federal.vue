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
</style>

<template>
  <Layout>

    <section class="hero flex bg-gray-700 py-12 md:py-24 text-white px-6 xl:px-0">
      <div class="flex flex-col max-w-1200 w-full mx-auto z-10">
        <div class="w-full md:w-1/2">
          <span class="rfs-text-xl text-yellow1 mb-0">Industry Solutions:</span>
          <h1 class="rfs-text-6xl">Yellowbrick for Federal Systems</h1>
          <p class="rfs-text-lg">The world’s fastest data warehouse for hybrid and multi-cloud environments gives Federal customers the industry-leading, real-time performance and scalability they need for mission-critical applications.</p>
          <p class="rfs-text-sm">
            All of Yellowbrick Data, Inc. products meet the requirements of the Trade Agreements Act and are approved to be acquired by the United States Government for use.
          </p>
        </div>
      </div>
    </section>

    <section class="bg-white pb-20 pt-8 px-6 xl:px-0">
      <div class="mx-auto w-full max-w-1200">

        <div class="flex flex-row w-full py-10">
          <div class="w-full md:w-7/12">
            <BaseWistia id="8l83m2i6yd" class="w-full" />
          </div>
          <div class="w-full md:w-5/12 pl-0 md:pl-6">
            <h5 class="mb-4 mt-0">Clarity Innovations Cuts Query Latency from an Hour to Milliseconds</h5>
            <p>Clarity Innovations provides analytic software the US Intelligence Community (IC) uses to support missions to keep the nation safe. Wes Daniels, Clarity Innovation’s COO notes: “In a business sense, time is money, but in a DoD sense
              sometimes time is lives. Having the ability to load data faster, and query data faster is very important in our line of work.”</p>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row flex-wrap -mx-4 md:-mx-8">

          <div class="flex flex-col md:flex-row w-full sm:w-1/2 p-4 md:p-8">
            <img src="/uploads/tb-yellowbrick-netflow-cybersecurity-thumb.jpg" alt="" class="w-1/2 md:w-48 mr-6 shadow-md self-start" />
            <div class="flex flex-col">
              <h6 class="text-gray-400 font-normal rfs-text-sm mb-0 mt-0">Technical Brief:</h6>
              <h5 class="mb-2">Yellowbrick & Netflow</h5>
              <p>Automating risk detection, using predictive analytics to measure the risk of real-time activity against aggregated historical patterns</p>
              <a href="/resources/technical-briefs/cybersecurity-with-netflow-and-yellowbrick/" class="button yellow ">Read Brief</a>
            </div>
          </div>

          <div class="flex flex-col md:flex-row w-full sm:w-1/2 p-4 md:p-8">
            <img src="/uploads/tb-yb-vs-apache-impala-thumb.jpg" alt="" class="w-1/2 md:w-48 mr-6 shadow-md self-start" />
            <div class="flex flex-col">
              <h6 class="text-gray-400 font-normal rfs-text-sm mb-0 mt-0">Technical Brief:</h6>
              <h5 class="mb-2">Yellowbrick Versus Apache Impala</h5>
              <p>Learn about the architectural differences between Yellowbrick and Apache Impala and why they matter</p>
              <a href="/resources/technical-briefs/yellowbrick-versus-apache-impala/" class="button yellow ">Read Brief</a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="flex pb-8 bg-gray-100 px-6 xl:px-0">
      <div class="flex flex-col justify-center max-w-1200 mx-auto">
        <div class="break-plane p-10 bg-white shadow-lg relative">
          <span class="accent"></span>
          <h3 class="text-gray-500 mb-8">When Dealing with National Security, Even Milliseconds Matter</h3>
          <div class="text-gray-500 w-full">
            <p class="rfs-text-lg">National security challenges require real-time decisions. The Yellowbrick Data Warehouse is the first data warehouse that can ingest massive data volumes in real time, make that data instantly queryable, and provide
              context from petabytes of historical data. Unlike <g-link to="/netezza/">Netezza</g-link> and <g-link to="/teradata/">Teradata</g-link>, it’s available as a complete and amazingly compact physical engineered system (as well as a cloud
              service) that doesn’t require complex projects and planning to deploy, and it’s designed to be largely self-managing -- there are no indexes or partitions to manually create.</p>

            <p class="rfs-text-lg">For example, Yellowbrick offers a simple solution to the massive scale and latency requirements associated with production-level Netflow analysis. Utilizing a specialized system engineered for breakthrough
              performance,Yellowbrick can ingest Netflow and other data sets at line rate while still serving queries and other application needs.</p>

            <p class="rfs-text-lg">Yellowbrick Data Warehouse is FedRAMP-ready (in addition to HIPAA and SOC checkboxes) and supports FIPS 140-2 compliant AES-256 encryption and fast erase so you can safely deploy it wherever required. Installation
              is easy and accomplished within hours, so you can be up and running meaningful analytics within a day, with no manual data preparation required -- just load and go. An experienced team of analytics consultants specializing in Federal
              customers are at the ready if and when you need them.</p>

            <!-- <transition-expand>
              <div v-if="expanded">
                <p class="rfs-text-lg">...</p>
              </div>
            </transition-expand>

            <button @click="expanded = !expanded" class="button dark">
              {{ expanded ? `Read Less` : `Read More` }}
            </button> -->

          </div>
        </div>

      </div>
    </section>

    <section class="flex py-12 md:py-16 bg-white px-6 xl:px-0">
      <div class="flex flex-col items-start max-w-1200 mx-auto">

        <div class="w-full">
          <h6 class="accent-heading mb-0">Customer Story:</h6>
          <div class="flex flex-col md:flex-row">
            <div class="w-full md:w-7/12">
              <h4>Clarity Innovations</h4>
              <p>Clarity Innovations provides analytic software the US Intelligence Community uses to support missions to keep the nation safe. As customer datasets grew to petabytes, Clarity Innovations found that its traditional disk-based solution
                could no longer return data as fast as its customers required--until Yellowbrick transformed its business with lightning-fast queries on top of PBs of data.</p>
              <g-link to="/customers/" class="button yellow mr-4">Read Case Study</g-link>
              <g-link to="/customers/" class="button outline">See Other Customer Stories</g-link>
            </div>
            <div class="flex w-full items-center md:w-5/12">
              <img src="/uploads/customers/clarity-tight.svg" alt="Top 3 Global Insurance Company logo" class="w-full sm:w-3/4 mx-auto" />
            </div>
          </div>
        </div>

        <div class="flex flex-col md:flex-row -mx-3 mt-8">

          <div class="flex w-1/3 p-3">
            <div class="p-6 bg-gray-500 text-white shadow-md">
              <h5 class="rfs-text-3xl font-semibold text-yellow1 leading-none m-0 mb-3">From 60 Minutes to Milliseconds</h5>
              <p>Queries that took nearly an hour to run now complete in milliseconds.</p>
            </div>
          </div>

          <div class="flex w-1/3 p-3">
            <div class="p-6 bg-gray-500 text-white shadow-md">
              <h5 class="rfs-text-3xl font-semibold text-yellow1 leading-none m-0 mb-3">Billions of Rows Instantly Queryable</h5>
              <p>Clarity’s customers can now ingest massive amounts of data and give end-users instant access to it for analysis.</p>
            </div>
          </div>

          <div class="flex w-1/3 p-3">
            <div class="p-6 bg-gray-500 text-white shadow-md">
              <h5 class="rfs-text-3xl font-semibold text-yellow1 leading-none m-0 mb-3">From Racks to a Single Instance</h5>
              <p>Customers can replace entire racks of hardware with a single Yellowbrick instance, saving millions in the process.</p>
            </div>
          </div>

          <!-- <div class="flex flex-row w-1/4 p-3">
            <div class="flex bg-gray-500 p-6 shadow-md">
              <h5 class="text-7xl border-4 border-white self-center text-white rounded-full p-10 w-48 h-48 align-middle text-center mx-auto">+</h5>
            </div>
          </div> -->

        </div>

      </div>
    </section>

    <PartnersFederal />

    <MoreInfo />

  </Layout>
</template>

<script>
  import MoreInfo from '~/components/MoreInfo.vue'
  import PartnersFederal from '~/components/PartnersFederal.vue'
  import TransitionExpand from '~/components/TransitionExpand.vue'

  export default {
    metaInfo: {
      title: 'Yellowbrick Federal Solutions',
      meta: [{
          key: 'description',
          name: 'description',
          content: 'Yellowbrick Hybrid Cloud Data Warehouse gives Federal customers the industry-leading, real-time performance and scalability they need for mission-critical applications.'
        },
        {
          key: 'og:description',
          name: "og:description",
          content: 'Yellowbrick Hybrid Cloud Data Warehouse gives Federal customers the industry-leading, real-time performance and scalability they need for mission-critical applications.'
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: 'Yellowbrick Hybrid Cloud Data Warehouse gives Federal customers the industry-leading, real-time performance and scalability they need for mission-critical applications.'
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: 'Yellowbrick Federal Solutions'
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: 'Yellowbrick Federal Solutions'
        }
      ]
    },
    components: {
      MoreInfo,
      PartnersFederal,
      TransitionExpand
    },
    data() {
      return {
        expanded: false,
      };
    }

  }
</script>
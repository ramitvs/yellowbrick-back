<style scoped>
.hero {
  background-image: url(/uploads/images/cloud-recovery-bg.svg);
  background-size: cover;
  background-position: center;
}
.basehubspot-button {
  display: inline-flex;
  padding: 0.75rem 2rem;
}
.basehubspot-button >>> .hs-button {
  background: none;
  font-weight: 600;
}
.freedom-bg {
  background-image: url(/uploads/images/freedom-bg.svg);
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 25%;
}

.performance-bg {
  background-image: url(/uploads/images/performance-bg.svg);
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 60%;
}

.multi-column {
  column-count: 2;
  column-gap: 2.5rem;
}
.float-form {
  @apply relative p-8 bg-gray-200 shadow-lg;
}
@media (max-width: 768px) {
  .multi-column {
    column-count: 1;
    column-gap: 0;
  }
}
.number {
  @apply absolute text-yellow1 rfs-text-7xl font-bold leading-none;
  top: -0.75rem;
  left: -3.5rem;
}
h3 {
  font-weight: bold;
  font-size: 26px;
  letter-spacing: 0.25px;
}
h4 {
  font-weight: bold;
  font-size: 22px;
  color: #57c0cb;
  margin-top: 10px;
}
@media only screen and (min-width: 768px) {
  .img-2 {
    margin-left: -60px;
  }
}
@media only screen and (max-width: 768px) {
  .flexer {
    flex-direction: column !important;
  }
  .flexer img {
    max-height: auto !important;
  }
  .flexer .float-form {
    max-height: auto !important;
    margin-top: 30px;
    width: auto;
  }
  .flexer-chld {
    margin-left: 0px !important;
    text-align: center !important;
    border: 1px solid;
    width: 100% !impor;
  }
  .flexer-chld img {
    height: 200px;
    margin-top: 20px;
    width: auto;
  }
}
</style>

<template>
  <Layout>
    <section
      class="hero flex bg-gray-700 py-12 md:py-24 text-white px-6 xl:px-0"
    >
      <div
        class="flex flex-col max-w-1000 w-full mx-auto z-10 flexer"
        style="display: flex; flex-direction: row"
      >
        <div style="width: 100%">
          <span class="rfs-text-xl text-yellow1 mb-0">Migration Guide:</span>
          <h1 class="m-0 p-0 leading-none sm:w-1/2 md:w-8/12">
            Automated migration from Oracle to Yellowbrick with Nexus Server
          </h1>
        </div>
        <div class="w-full md:w-2/4">
          <div class="float-form">
            <img
              src="/uploads/MIGRATION_GUIDE_from_Oracle_to_Yellowbrick_with_Nexus_Server_thumb.png"
            />

            <BaseHubspot id="43a4feda-983c-4162-8585-3cb6814351e1" sfid="7011G000000KelWQAS" />
          </div>
        </div>
      </div>
    </section>

    <section class="flex py-12 bg-white px-6 xl:px-0">
      <div
        class="
          flex flex-col
          md:flex-row
          items-center
          justify-evenly
          max-w-1000
          mx-auto
        "
      >
        <div class="w-full md:w-full relative pr-0 md:pr-10">
          <h2>
            Replace Oracle with Yellowbrick for 100X performance at a fraction
            of the cost
          </h2>

          <ul class="rfs-text-base">
            <li>
              <strong>Industry-leading economics:</strong> While Oracle is
              expensive to scale and involves complex licensing that makes
              virtualized environments extremely costly, Yellowbrick delivers
              the best price/performance in the industry along with MPP
              scalability. Our subscription service plans offer predictability
              and full transparency of included features and support.
            </li>
            <li>
              <strong>Simpler operations:</strong> Oracle requires highly
              specialized DBAs and solution architects with many years of
              experience. In contrast, Yellowbrick can be up and running in a
              day, integrates with your existing data flow, and ANSI SQL and
              PostgreSQL compatibility means little to no learning curve or need
              for specialized skills.
            </li>
            <li>
              <strong>Peak performance out of the box:</strong> Yellowbrick
              delivers peak performance out of the box – no manually created
              indexes, partitions or query tuning required; just load and go.
              And advanced workload management makes it easy to control queries
              in a granular way.
            </li>
            <li>
              <strong>High performance at scale for mixed workloads:</strong>
              Oracle was designed for online transaction processing (OLTP) and
              struggles with mixed workloads at scale, resulting in concurrency
              and latency issues. With Yellowbrick, you can run high performance
              analytics 24x7 and support hundreds of concurrent users.
              Yellowbrick also excels at mixed workloads (batch and interactive
              queries/reports).
            </li>
            <li>
              <strong>High availability designed for big data:</strong>
              Yellowbrick natively offers a full spectrum of business continuity
              tools, including a real-time geo-replication capability. With our
              disaster recovery service, you only pay per use, lowering the cost
              of a business continuity solution.
            </li>
            <li>
              <strong>Consistent experience across clouds:</strong> Yellowbrick
              provides the same performance and user experience across private
              and multiple public clouds and is easily managed with a unified
              control plane.
            </li>
            <li>
              <strong>Open ecosystem:</strong> Yellowbrick supports open-source
              interfaces (Spark, Kafka, Postgres) and fits right into enterprise
              BI and data motion ecosystems.
            </li>
          </ul>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import MoreInfo from "~/components/moreinfonet.vue";
import BaseHubspot from '~/components/BaseHubspot.vue';

export default {
  metaInfo: {
    title: "Automated migration from Oracle to Yellowbrick with Nexus Server",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "Automated migration from Oracle to Yellowbrick with Nexus Server",
      },
    ],
  },
  components: {
    MoreInfo,
  },
};
</script>

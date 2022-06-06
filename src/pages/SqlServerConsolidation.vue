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
          <h2 class="rfs-text-xl text-yellow1 mb-0">Keep it simple</h2>
          <h1 class="rfs-text-5xl">Save time, money, and headaches:<br />Replace SQL Server Sprawl with Yellowbrick</h1>
        </div>
      </div>
    </section>

    <section class="bg-white py-12 md:py-24 md:pb-32 px-6 xl:px-0">
      <div class="mx-auto w-full max-w-1200">
        <div class="flex flex-col md:flex-row mx-0 md:-mx-6 mb-6 text-gray-500">
          <div class="w-full md:w-1/3 px-6 mb-16 md:mb-0">
            <h2 class="rfs-text-6xl font-semibold -my-2 leading-none text-teal">100X</h2>
            <h3 class="rfs-text-4xl leading-none">performance</h3>
            <p>Yellowbrick dramatically shortens time-to-insight over SQL Server data marts, with some customers reporting 100X improvement and beyond.</p>
          </div>
          <div class="w-full md:w-1/3 px-6 mb-16 md:mb-0">
            <h2 class="rfs-text-6xl font-semibold -my-2 leading-none text-teal whitespace-no-wrap">Any</h2>
              <h3 class="rfs-text-4xl leading-none">scale</h3>
            <p>With Yellowbrick, whether your data scale is in single terabytes or multiple petabytes, performance and concurrency are consistently excellent.</p>
          </div>
          <div class="w-full md:w-1/3 px-6 mb-16 md:mb-0">
            <h2 class="rfs-text-6xl font-semibold -my-2 leading-none text-teal">Millions</h2>
              <h3 class="rfs-text-4xl leading-none">in savings</h3>
            <p>Upgrading from SQL Server to Yellowbrick can save millions in licensing and operating costs. Why do anything else?</p>
          </div>
        </div>
        <div class="flex align-center">
          <a href="/performance" class="button yellow mx-auto" target="_blank">Learn about our unmatched price/performance</a>
        </div>
      </div>
    </section>
    
    <section class="flex pb-8 bg-gray-100 px-6 xl:px-0">
      <div class="flex flex-col justify-center max-w-1200 mx-auto">
        <div class="break-plane p-10 bg-white shadow-lg relative">
          <span class="accent"></span>
          <h3 class="text-gray-500 mb-8">Don’t let managing SQL Server silos drag you down</h3>
          <div class="text-gray-500 w-full">
            <p class="rfs-text-lg">Sometimes less is more. It’s hard to deliver on world-class performance, reduce costs, decrease maintenance requirements, meet SLAs, and reduce security risks when too many moving parts--like dozens, scores, or even hundreds of Microsoft SQL Server databases—are involved, with each of them requiring significant maintenance, management, and resources. </p>

            <transition-expand>
              <div v-if="expanded">
                <p class="rfs-text-lg">SQL Server data marts and data warehouses are slow for doing analytics at scale, with ongoing tuning and other admin investments needed just to keep them viable. And don’t get us started on licensing costs, hardware costs, and the joys of ensuring business continuity (backup/restore, replication, and DR).</p>
                <p class="rfs-text-lg">The Yellowbrick Data Warehouse breaks that pattern by offering a solution that improves on SQL Server performance by 100X and beyond and scales to thousands of users and multiple PBs. Its familiar PostgreSQL front end makes the migration and consolidation process fast and easy &mdash; you can be up and running in hours or days, not weeks or months &mdash; and the user/developer experience feels just like you’re building for, and working with, the most advanced open source database in the world.</p>
                <p class="rfs-text-lg">Furthermore, for on-premises deployments, an amazingly compact all-flash design reduces data center footprint by over 90%. For cloud deployments, Yellowbrick’s hybrid cloud architecture lets you run workloads from any private and/or major public cloud (AWS, Azure, and GCP), avoiding lock-in and hidden costs to streamline and remove risk from migrations.</p>
              </div>
            </transition-expand>

            <button @click="expanded = !expanded" class="button dark">
              {{ expanded ? `Read Less` : `Read more` }}
            </button>

          </div>
        </div>

      </div>
    </section>

    <section class="flex mb-12 md:mb-20 py-16 bg-gray-700 px-6 xl:px-0 diamond-bg">
      <div class="max-w-1200 mx-auto">

        <div class="flex flex-col md:flex-row justify-center">

          <div class="w-full text-white pr-0 md:pr-12">
            <h3 class="accent-heading text-white">Get started easily with Yellowbrick</h3>
            <p class="rfs-text-lg">Our Standard Service Plan offers industry-leading price/performance and the ultimate in deployment flexibility for $10K/month. This plan is ideal for SQL Server replacement and other use cases such as new data warehouse initiatives, departmental data marts, and dev/test.</p>
            <a href="/pricing/" class="rounded-sm px-6 py-2 button yellow ml-auto mt-3">Explore Standard</a>
          </div>

        </div>
      </div>
    </section>

    <section class="bg-gray-100 pb-12 px-6 xl:px-0">
      <div class="mx-auto w-full max-w-1200">
        <h2 class="accent-heading">Downloadable resources</h2>
        <div class="flex flex-col sm:flex-row flex-wrap -mx-4 md:-mx-8">

          <div class="w-full sm:w-1/2 p-4 md:p-8">
            <div class="flex flex-col md:flex-row">
              <div class="w-5/12 pr-0 md:pr-5">
                <img src="/uploads/brief-yellowbrick-vs-sql-server-thumb.jpg" alt="Yellowbrick vs. SQL Server" class="shadow-md" />
              </div>
              <div class="w-full md:w-1/2">
                <div class="font-semibold rfs-text-lg">Brief:</div>
                <h5 class="mb-6">Yellowbrick vs. SQL Server</h5>
                <a href="https://ww2.yellowbrick.com/hubfs/Briefs/7%20Reasons%20to%20Replace%20SQL%20Server.pdf" class="button yellow" target="_blank">Download</a>
              </div>
            </div>
          </div>

          <div class="w-full sm:w-1/2 p-4 md:p-8">
            <div class="flex flex-col md:flex-row">
              <div class="w-5/12 pr-0 md:pr-5">
                <img src="/uploads/ebook-sql-server.jpg" alt="Migrate SQL Server Workloads" class="shadow-md" />
              </div>
              <div class="w-full md:w-1/2">
                <div class="font-semibold rfs-text-lg">Featured eBook:</div>
                <h5 class="mb-6">Migrate SQL Server workloads to Yellowbrick</h5>
                <a href="/go/migrate-sql-server-workloads-to-yellowbrick/" class="button yellow" target="_blank">Download</a>
              </div>
            </div>
          </div>

          <div class="w-full sm:w-1/2 p-4 md:p-8">
            <div class="flex flex-col md:flex-row">
              <div class="w-5/12 pr-0 md:pr-5">
                <img src="/uploads/cs-melco-thumb.jpg" alt="top casino customer" class="shadow-md" />
              </div>
              <div class="w-full md:w-1/2">
                <div class="font-semibold rfs-text-lg">Case study:</div>
                <h5 class="mb-6">Top 10 Hospitality &amp; Casino customer</h5>
                <a href="/resources/case-studies/melco/" class="button yellow" target="_blank">Read more</a>
              </div>
            </div>
          </div>

          <div class="w-full sm:w-1/2 p-4 md:p-8">
            <div class="flex flex-col md:flex-row">
              <div class="w-5/12 pr-0 md:pr-5">
                <img src="/uploads/wp-data-warehouse-modernization-analytics-thumb.jpg" alt="data warehouse modernization guide" class="shadow-md" />
              </div>
              <div class="w-full md:w-1/2">
                <div class="font-semibold rfs-text-lg">Whitepaper:</div>
                <h5 class="mb-6">Data Warehouse modernization</h5>
                <a href="/go/modernizing-your-data-warehouse-for-hybrid-cloud-analytics/" class="button yellow" target="_blank">Read more</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>


    

    <section class="flex bg-gray-700 py-16 px-6 xl:px-0">
      <div class="max-w-1200 mx-auto text-white">
        
        <div class="flex flex-col md:flex-row items-center">
          <div class="w-full md:w-1/2 pr-0 md:pr-8">
            <h2>Migration partners</h2>
            <p>Move your data away from SQL Server easily and quickly with Yellowbrick’s best of breed partners. Our partners help you plan your transition, understand your data flows, and manage your cutover to the Yellowbrick platform.</p>
            <g-link to="/company/partners/" class="button yellow">View our partners</g-link>
          </div>
          <div class="flex flex-col sm:flex-row flex-wrap w-full md:w-1/2 pl-0 md:pl-8">
            <img src="/uploads/partners-nextpathway.svg" class="w-full sm:w-1/2 p-8" alt="next pathway logo"/>
            <img src="/uploads/partners-systech.svg" class="w-full sm:w-1/2 p-8" alt="systech logo"/>
            <img src="/uploads/partners-coffing.svg" class="w-full sm:w-1/2 p-8" alt="coffing logo"/>
          </div>
        </div>
      </div>
    </section>

    <MoreInfoNetezza />

  </Layout>
</template>

<script>
import MoreInfoNetezza from '~/components/MoreInfoNetezza.vue'
import TransitionExpand from '~/components/TransitionExpand.vue'

export default {
  metaInfo: {
    title: 'SQL Server Consolidation',
    meta: [
      { 
        key: 'description',
        name: 'description',
        content: 'From multiple Netezza racks to 6u – Reduce footprint and modernize the data warehouse environment with Yellowbrick'
      },
      {
        key: 'og:description',
        name: 'og:description',
        content: 'description',
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'description',
      }
    ]
  },
  components: {
    MoreInfoNetezza,
    TransitionExpand
  },
  data() {
    return {
      expanded: false,
    };
  }

}
</script>

<style scoped>

.hero {
  background-image: url(/uploads/images/cloud-recovery-bg.svg);
  background-size: cover;
  background-position: center;
}

.freedom-bg {
  background-image: url(/uploads/images/freedom-bg.svg);
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 45%;
}

.performance-bg {
  background-image: url(/uploads/images/performance-bg.svg);
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 45%;
}

.multi-column {
  column-count: 2;
  column-gap: 2.5rem;
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

</style>

<template>
  <Layout>
    <section class="hero flex bg-gray-700 py-12 md:py-24 text-white px-6 xl:px-0">
      <div class="flex flex-col max-w-1200 w-full mx-auto z-10">
        <h1 class="m-0 p-0 leading-none w-full sm:w-1/2 md:w-5/12">SQL Server Consolidation</h1>
      </div>
    </section>

    <section class="flex py-12 bg-white px-6 xl:px-0">
      <div class="flex flex-col md:flex-row items-start justify-evenly max-w-1200 mx-auto">

        <div class="w-full sm:w-7/12 md:w-2/3 relative pr-0 md:pr-10">
          <h3 class="text-gray-500 mb-8">Overview</h3>
          <p>Sometimes less is more. It’s hard to deliver on world-class performance, reduce costs, decrease maintenance requirements, meet SLAs, and reduce security risks when too many moving parts&mdash;like dozens, scores, or even hundreds of Microsoft SQL Server databases—are involved, with each of them requiring significant maintenance, management, and resources.</p>

          <h3>Challenges</h3>
          <p>As a result, many organizations are facing challenges from database proliferation and fragmentation, including:</p>
          <ul class="rfs-text-base">
            <li>
              <strong>Management complexity:</strong> Simply put, more databases means more management, more tuning, more balancing, more oversight, and more expensive DBA skills required—across different database servers, different versions, and different hardware.
            </li>
            <li>
              <strong>Performance problems:</strong>  Individual databases are limited by the platforms they’re deployed on. As individual systems, unexpected database loads can’t always be met efficiently or in a timely manner, resulting in performance problems for applications or business analytics.
            </li>
            <li>
              <strong>Increased cost:</strong> Database proliferation follows business and application needs, but it can generate increased costs—additional licenses, data center costs, increased maintenance and security costs, and addition management overhead for additional hardware and systems.
            </li>
            <li>
              <strong>Reduced agility:</strong>  In a time when economic and competitive pressures are forcing organizations to do more and respond faster to business change than ever before, having to manage and maintain a wide collection of fragmented databases increases complexity and the time required to make changes, increase performance, or simply respond.
            </li>
            <li>
              <strong>Reduced security:</strong> All those different databases, versions, and systems increase security risks. Even for organizations that have multiple deployments of the same database, such as Microsoft SQL Server, ensuring consistent and current security across different instances takes time and valuable resources.
            </li>
          </ul>

          <p>The vast numbers of databases that enterprises have spread across different systems reduce agility, increase costs, and make it difficult to stay competitive. Yet, there is a straightforward and effective approach to eliminating or reducing all those challenges: SQL Server database consolidation.</p>

          <h3>Yellowbrick Solution</h3>
          <p>Yellowbrick Data Warehouse is an innovative database consolidation solution for on-premises, hybrid, and multi-cloud deployments that can efficiently enable organizations to consolidate data from multiple databases onto a single, extremely high-performing Yellowbrick instance.</p>
          <p>Yellowbrick’s superior performance at great scale (multi-PB) simplifies management by allowing companies to manage all their data in one place, saving a ton of money and management complexity. Using Yellowbrick to consolidate databases increases corporate agility, simplifies and increases security, and reduces costs.</p>

          <img src="/uploads/images/sql-consolidation.svg" alt="SQL Server Consolidation" class="w-full py-10 my-8" />

          <h3>Only Yellowbrick Lets You:</h3>
          
          <ul class="rfs-text-base">
            <li>
              <strong>Analyze Data 100X Faster</strong> Yellowbrick’s unique architecture radically expands data bandwidth to support lightning-fast queries on petabytes of data for thousands of concurrent users, allowing a single Yellowbrick Data Warehouse to consolidate data from multiple databases without performance overhead. In fact, the performance will probably be significantly better&mdash;100X and beyond versus SQL Server.
            </li>
            <li>
              <strong>Scale Effortlessly</strong> Yellowbrick delivers unparalleled predictable performance on petabytes of data—with orders of magnitude more speed than alternatives—for even the most complex and mixed SQL workloads, all while servicing thousands of concurrent users. In fact, ad hoc workloads on Yellowbrick run faster than heavily tuned, indexed queries on other databases.
            </li>
            <li>
              <strong>Simplify and Streamline Data Operations</strong> With Yellowbrick, unlike SQL Server, there’s no need for mundane time-consuming tasks like query tuning or building indexes, and management is done through a clean and simple UI.
            </li>
            <li>
              <strong>Reduce Your Datacenter Footprint and Save Money</strong> Forget fork-lifting racks. Yellowbrick replaces racks of database hardware, significantly reducing floor space, power, and cooling costs. It’s easy to deploy and easier to maintain.
            </li>
          </ul>

        </div>

        <!-- RIGHT COLUMN -->

				<div class="w-full sm:w-5/12 md:w-1/3 relative">
          <span class="accent yellow z-10"></span>
          
          <div class="bg-gray-500 shadow-lg p-10 relative text-white performance-bg">
            <h3 class="rfs-text-7xl font-semibold leading-none text-yellow1 my-0">100X</h3>
            <h3 class="rfs-text-4xl font-medium ">Data Analytics Performance for Faster, Richer Results from Your Data</h3>
          </div>

          <div class="bg-white shadow-lg p-10 relative text-gray-500 performance-bg mt-12">
            <h6 class="accent-heading">Challenges:</h6>
            <ul class="rfs-text-base">
              <li>Management complexity</li>
              <li>Performance problems</li>
              <li>Increased cost</li>
              <li>Reduced agility</li>
              <li>Reduced security</li>
            </ul>
          </div>

          <div class="bg-gray-700 shadow-lg p-10 relative text-white performance-bg mt-12">
            <h6 class="accent-heading">Yellowbrick Benefits:</h6>
            <ul class="rfs-text-base">
              <li>Analyze data 100X faster</li>
              <li>Scale effortlessly</li>
              <li>Simplify and streamline data operations</li>
              <li>Reduce your datacenter footprint and save money</li>
            </ul>
          </div>

        </div>
      </div>
    </section>

    <MoreInfo />

  </Layout>
</template>

<script>
import MoreInfo from '~/components/MoreInfo.vue'

export default {
  metaInfo: {
    title: 'Less is More: SQL Server Consolidation Brief',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'Yellowbrick’s superior performance at great scale (multi-PB) simplifies management by allowing companies to manage all their data in one place, saving a ton of money and management complexity.' }
    ]
  },
  components: {
    MoreInfo
  }
}
</script>

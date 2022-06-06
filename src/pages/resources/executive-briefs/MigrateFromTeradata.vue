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
        <span class="rfs-text-xl text-yellow1 mb-0">Executive Brief:</span>
        <h1 class="m-0 p-0 leading-none w-full sm:w-1/2 md:w-5/12">Migrate from Teradata</h1>
        <a href="/uploads/eb-migrate-from-teradata.pdf" target="_blank" class="button yellow mt-8">Download the PDF</a>
      </div>
    </section>

    <section class="flex py-12 bg-white px-6 xl:px-0">
      <div class="flex flex-col md:flex-row items-start justify-evenly max-w-1200 mx-auto">
        <div class="w-full md:w-7/12 relative pr-0 md:pr-10">
          <h3 class="text-gray-500 mb-8">Overview</h3>
          <p>Teradata is an established legacy data warehouse that has been around for decades, and it shows. Most deployments require complex scripting and an army of people to maintain them. As a Teradata user, you have experienced first-hand the challenges of administering and maintaining this platform coupled with unpredictable performance and low concurrency. Now Teradata is offering a newer platform, but the only thing that’s new is the name. The underlying infrastructure hasn’t changed.</p>

          <p>Most Teradata users are looking for ways to modernize their data warehouse and want to leverage all of the benefits the cloud has to offer, but without paying the exorbitant and unpredictable costs. Teradata systems are inherently complex, with support for extremely large data sets, so migration plans for even a small number of workloads are unwieldy as well as time- and resource-intensive. Migration does not happen overnight and is often high risk.</p>

          <p>The Yellowbrick hybrid cloud data warehouse is the only data warehouse that can manage your very large data sets with ease while providing unparalleled performance in a very small form factor both on premises and in the cloud—and at a fraction of the cost of Teradata. You can migrate away from Teradata on premises right away without having to invest in the complex “lifts and shifts” cloud-only data warehouses force you to do. You are assured of a successful migration, because Yellowbrick Data provides a unified database that makes cloud migration extremely quick and easy and works with partners that are experts in streamlining and even automating Teradata offloads. No need for multistep migration strategies: you need only one simple step with Yellowbrick.</p>
          
          <h3>Yellowbrick Solution</h3>
          <p>Yellowbrick, the fastest data warehouse for hybrid and multi-cloud environments, offers a unified hybrid cloud solution that enables you to run your workloads where your business needs to run them, whether it be on premises and/or in a major public cloud. </p>

          <p>Migrating data from Teradata is a complex process, and you don’t need to complicate it more by having to rethink your data warehouse and cloud strategy. You can quickly migrate your data to a Yellowbrick system on premises and significantly reduce your data warehouse footprint by consolidating multiple racks of Teradata into 6u of Yellowbrick hardware. Almost instantly, you will benefit from reduced real estate and data center cooling costs. And when you’re ready for it, you have the option of letting users access that same data from a public cloud just as they’d access any other cloud service.</p>
        <p class="mb-0">Additional Yellowbrick advantages include:</p>
        <ul class="rfs-text-lg">
          <li>
            <strong>Best Price/Performance</strong><br>
            Yellowbrick scales to the largest data sets—all the way to hundreds of petabytes—with 10x faster performance than other legacy or cloud-based data warehouses, and all at a fraction of the cost. Yellowbrick has predictable subscription pricing, with no hidden costs and no extra charges for data movement.          
          </li>
          <li>
            <strong>Flexibility with no lock-in</strong><br>
            Yellowbrick’s innovations enable you to deploy a modern data warehouse with high scalability either on premises in a private cloud, in the public cloud, or both. Yellowbrick supports all major cloud platforms so you’re not locked in to a particular vendor, providing you with ultimate flexibility in deployment options. Furthermore, users can run queries on the same data from multiple clouds simultaneously. 
          </li>
          <li>
            <strong>Seamless integration</strong><br>
            Yellowbrick helps you meet infrastructure reduction initiatives with a cloud solution that can completely eliminate the data warehouse footprint, while the on-premises solution can shrink racks of hardware and shelves of disks to just 6U of space. The Yellowbrick system’s highly available architecture has no single point of failure and built-in redundancy, so you don’t have to add extra instances for added resiliency.
          </li>
          <li>
            <strong>Broad ecosystem</strong><br>
            Yellowbrick works with a variety of partners to help ease and simplify the migration of your data to a Yellowbrick system. These partners offer migration tools, consulting services, and more to ensure your migration is as successful as possible.
          </li>
        </ul>

        <h3>Get Started</h3>
        <p>Yellowbrick Data empowers companies to make faster decisions with all of their data. Built for enterprises and the hybrid cloud, the Yellowbrick Data Warehouse deploys powerful analytics anywhere, with best in-class economics.</p>
      </div>

				<div class="w-full md:w-5/12 relative">
          <span class="accent yellow z-10"></span>
          
          <div class="bg-white shadow-lg p-10 relative text-gray-500 performance-bg">
            <h5>Real-world Performance Improvements</h5>

            <h6 class="accent-heading mt-12">Large health care insurance provider:</h6>
            <p>A large national health and wellness organization migrated billions of rows of customer data from Teradata directly into a Yellowbrick system. Installation was completed in fewer than four hours, and meaningful results were derived from migrated data in less than two days.</p>
            <p class="mb-0">Other benefits include:</p>
            <ul class="rfs-text-base">
              <li>Very little administration required</li>
              <li>Subsecond out-of-the-box performance with little to no tuning required</li>
              <li>Multiple Teradata racks consolidated into 10u of Yellowbrick equipment</li>
              <li>Consistent ad hoc query performance</li>
            </ul>

            <h6 class="accent-heading mt-12">Top 10 financial services company</h6>
            <p>In evaluating its options for data lake augmentation, a top 10 financial services company compared a 15-node, 6U Yellowbrick system against a 20-rack Teradata 6800. The company loaded two years of historical data from MapR into each system and then evaluated their performance across a set of 240 queries, with Yellowbrick beating the Teradata system on all but two. </p>
            <p>Shortly thereafter, the company purchased its first Yellowbrick system, which has become the company’s primary enterprise data warehouse. Every new transaction across the company’s lines of business is loaded into Yellowbrick, which, thanks to the system’s 5PB capacity, is able to store five full years of transaction data. Even better, thanks to Yellowbrick’s unique architecture, all of this data remains “hot” at all times, making it instantly queryable for thousands of daily users.</p>

          </div>

          <div class="p-10 bg-gray-500 text-white freedom-bg">
            <h4>Ecosystem tools: Ease migration with purpose-built tools</h4>
            <p>Yellowbrick has a broad ecosystem of partners with tools that can significantly speed your data migration from Teradata to Yellowbrick.</p>

            <img src="/uploads/images/partners/nextpathways.svg" alt="nextpathway" class="w-32 pr-5 pb-4" />
            <p>Next Pathway brands itself as an automated cloud migration company: its SHIFT Migration Suite automates the end-to-end challenges customers experience when migrating applications to the cloud.</p>

            <img src="/uploads/images/partners/compilerworks.svg" alt="compilerworks logo" class="w-32 pr-5 pb-4" />
            <p>CompilerWorks was founded with the idea of applying compilers and optimizers to new application areas, helping customers with a task that is one of the most challenging and most fundamental fields in computing: language design and implementation.</p>

            <img src="/uploads/images/partners/systech.svg" alt="systech logo" class="w-32 pr-5 pb-4" />
            <p>Systech provides end-to-end digital strategy, data engineering, and advanced analytics services to build data-driven capabilities into clients’ core business operations to drive continuous growth.</p>

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
    title: 'Teradata Migration Executive Brief',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'The Yellowbrick  hybrid  cloud  data  warehouse  is  the  only  data  warehouse  that  can  manage  your  very  large data  sets  with  ease  while  providing  unparalleled  performance  in  a  very  small  form  factor both on premisesand in the cloud—and at a fraction of the cost of Teradata.' }
    ]
  },
  components: {
    MoreInfo
  }
}
</script>

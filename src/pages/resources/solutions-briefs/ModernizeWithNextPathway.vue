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
        <span class="rfs-text-xl text-yellow1 mb-0">Solution Brief:</span>
        <h1 class="m-0 p-0 leading-none w-full sm:w-1/2 md:w-5/12">Modernize Your Data Warehouse in Minutes</h1>
        <a href="/uploads/Yellowbrick_NextPathway_solution_brief.pdf" target="_blank" class="button yellow mt-8">Download the PDF</a>
      </div>
    </section>

    <section class="flex py-12 bg-white px-6 xl:px-0">
      <div class="flex flex-col md:flex-row items-start justify-evenly max-w-1200 mx-auto">
        <div class="w-full md:w-2/3 relative pr-0 md:pr-10">
          <h3 class="text-gray-500 mb-8">Overview</h3>
          <p>Your enterprise can’t take full advantage of the powerful analytics and BI tools and skillset investments if your legacy data warehouse is too inflexible, too expensive to scale, and too difficult to manage. However,
          migration away from a legacy data warehouse requires significant operational overhead, such as rethinking your entire data warehouse strategy, translating complex workloads, and reorganizing and retraining your skilled resources.</p>

          <p>Yellowbrick and Next Pathway, an industry leader in cloud migration, have partnered together on an end-to-end solution that streamlines your move from a legacy data warehouse technology to Yellowbrick’s modern hybrid cloud data warehouse—giving you the business insight you need without the usual resource intensive and business disrupting operational overhead.</p>

          <p>Together, Yellowbrick and Next Pathway provides an efficient and accelerated path to a modernized data warehouse, removing the traditional bottlenecks of the migration journey.</p>
          
          <h3>Yellowbrick Solution</h3>
          <p>Yellowbrick, the fastest data warehouse for hybrid and multi-cloud environments, offers a unified hybrid cloud solution that enables you to run your workloads where your business needs to run them, whether it be on premises and/or in a major public cloud. </p>

          <p>Together with Yellowbrick and Next Pathway your business can:</p>
        <p class="mb-0">Additional Yellowbrick advantages include:</p>
        <ul class="rfs-text-lg">
          <li>
            <strong>Fast-track Migration</strong><br>
            Accelerate your end-to-end migration timeline by 40% with Next Pathway’s SHIFT™ Migration Suite automation capabilities. SHIFT™ automates the:
            <ul>
              <li>Planning process for how data flows into your warehouse</li>
              <li>Translation of complex legacy code to run in the cloud</li>
              <li>Cut over process, to define your data’s migration path</li>
            </ul>
          </li>
          <li>
            <strong>Optimize Resources</strong><br>
            <p>SHIFT™’s automation technology removes the need for developers with special skills—even while supporting custom requirements.</p>
            <p>Yellowbrick snaps seamlessly into your choosen data movement and BI and data science tools, so your investments aren’t wasted.</p>
            <p>And unlike purely on-prem or cloudnative options, Yellowbrick supports natively run mixed workloads where it makes economical sense, whether on-prem, private cloud, or on a major public cloud platform. </p>
          </li>
          <li>
            <strong>Increase Data Insights</strong><br>
            <p>Get the insights you need by analyzing petabytes of data with exponentially faster speeds than traditional or cloud-only data warehouses.</p>
            <p>Use your high-value data resources on your high-value data problems by simplifying and streamlining data operations—eliminating mundane time-consuming tasks like query tuning and building indexes.</p>
          </li>
        </ul>

        <h3>Solution Details</h3>
        <p>Yellowbrick and Next Pathway are both focused on two core principles: efficiency and performance. With Yellowbrick, you can unleash the power of your data with a modernized data warehouse that leverages existing investments and ensures scale and flexibility. Next Pathway’s industry-leading automation technology can simplify and accelerate the end-to-end migration timeline. Both companies understand the value of providing ultrafast and predictable performance for any legacy to Yellowbrick migration journey, making it a cutting-edge solution for customers looking for a flexible and pragmatic approach to the cloud.</p>

        <div class="mb-10 mt-4">
          <img src="/uploads/images/resource-library/shift-diagram.jpg" alt="SHIFT™ Migration Suite" />
        </div>

        <h4>Key Features of Next Pathway's SHIFT Migration Suite</h4>
        <ul>
          <li>
            <p><strong>SHIFT™ CRAWLER</strong> scans and catalogs legacy data sources, including ETL pipelines, scheduler jobs, and downstream consuming applications, to uncover actionable insights to plan your migration efficiently.</p>
          </li>
          <li>
            <p><strong>SHIFT™ ANALYZER</strong> assesses various legacy application code types to create inventories of all objects, define complexity, and provide automation rates in order to right-size your migration. </p>
          </li>
          <li>
            <p><strong>SHIFT™ TRANSLATOR</strong> automates the translation of complex workloads, including SQL, Stored Procedures, ETL, and various other code types for various source and target platforms. </p>
          </li>
          <li>
            <p><strong>SHIFT™ JET INTERPRETER</strong> serves as a migration accelerator to get customers off of Teradata by eliminating the need to re-write Teradata utilities like BTEQ and FLOAD, and thus, move these utilities off of the migration critical path.</p>
          </li>
          <li>
            <p><strong>SHIFT™ TESTER</strong> automates key tasks in the testing life-cycle when executing and optimizing workloads within the cloud.</p>
          </li>
        </ul>
      </div>

				<div class="w-full md:w-1/3 relative">
          <span class="accent yellow z-10"></span>
          
          <div class="bg-gray-500 shadow-lg p-10 relative text-white performance-bg">
            <img src="/uploads/images/partners/nextpathways.svg" alt="Next Pathway Logo" class="w-1/2" />

            <p class="rfs-text-lg italic pt-8">“We are excited to be partnered with Yellowbrick and together we are able to address our customers’ need for low risk, ease of migration away from legacy data warehouses to a more modern, hybrid cloud architecture like what Yellowbrick offers. Modernizing your data warehouse environment has never been easier with Next Pathway and Yellowbrick.”<br></p>
            <p><strong>Vinay Mathur,</strong><br>CSO, Next Pathway</p></p>
          </div>

          <div class="p-10 bg-white text-gray-500 freedom-bg shadow-lg">
            <h4>Yellowbrick - The only modern data warehouse for hybrid cloud</h4>
            <p>Yellowbrick is the world’s only modern data warehouse for hybrid cloud. Enterprises rely on Yellowbrick to do the impossible in data analytics: get answers to the hardest business questions for improved profitability, better customer loyalty, and faster innovation in near real time, and at a fraction of the cost of alternatives.</p>

            <p>Yellowbrick offers superior price/performance for thousands of concurrent users on petabytes of data, along with the unique ability to run analytic workloads on-premises, in a private cloud, and/or any public cloud and manage them in a simple, consistent way--all with predictable pricing via annual subscription.</p>

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
    title: 'Data Warehouse Modernization with Next Pathway Solution Brief',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'Yellowbrick and Next Pathway, an industry leader in cloud migration, have partnered together on an end-to-end solution that streamlines your move from a legacy data warehouse technology to Yellowbrick’s modern hybrid cloud data warehouse.' }
    ]
  },
  components: {
    MoreInfo
  }
}
</script>

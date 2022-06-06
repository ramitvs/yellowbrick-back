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
        <h1 class="m-0 p-0 leading-none w-full sm:w-1/2 md:w-5/12">Yellowbrick for Insurance Providers</h1>
        <a href="/uploads/eb-yb-insurance.pdf" target="_blank" class="button yellow mt-8">Download the PDF</a>
      </div>
    </section>

    <section class="flex py-12 bg-white px-6 xl:px-0">
      <div class="flex flex-col md:flex-row items-start justify-evenly max-w-1200 mx-auto">

        <div class="w-full md:w-7/12 relative pr-0 md:pr-10">
          <h3 class="text-gray-500 mb-8">Overview</h3>
          <p>When it comes to insurance, assuming and diversifying risk in a profitable way is the name of the game. Whether it’s health insurance, life insurance, property and casualty insurance, or reinsurance, insurance companies need to price risk and charge a premium for it.</p>            
          <p>But you can’t do that without data and data analysis. The most successful insurance and reinsurance companies will be the ones that can correctly analyze the greatest amount of data the fastest—about risk assessment, pricing, modeling, portfolio management, and more.</p>
          <p>Consider a few of the most critical types of analysis insurance companies need to run. Exposure. Risk/loss. Modeled losses. Portfolio rollups. EP curves. Policy limit aggregation. Insurance companies need be able to do these analytics and others and do them quickly and accurately, using detailed data that covers long time periods. Doing so enables revenue growth, improved efficiency, easier compliance, and more-competitive offerings.</p>

          <h3>The Insurance Industry Challenge</h3>
          <p>Unfortunately, that’s not the scenario in which most insurance and reinsurance companies find themselves. There’s too much data to analyze. There is not enough time to run all the models and simulations they’d like to run. And there are too many users slowing down systems by running more and more queries, reports, and models.</p>

          <p>Like Hurricane Katrina in 2005 that broke the city of New Orleans, required insurers to pay out more than $40 billion, and caused reinsurers to require a lot more risk modeling, the data and analysis tsunami hitting the insurance industry will separate successful companies from second-tier ones.</p>
          <p>Even after investing considerable resources and time in data analysis and data warehouse systems, many insurance companies find themselves behind where they want to be. Their systems aren’t responsive enough to the business needs, and they risk falling farther behind. Consider just a few of the reasons existing platforms are failing even proactive insurance companies:</p>
          <ul class="rfs-text-lg">
            <li>
              <strong>Lack of speed.</strong> Running models on existing platforms frequently takes too long to complete, limiting the number of times they can be run and as a result generating less accurate metrics.
            </li>
            <li><strong>Non-scalable architecture.</strong> Models build on architectures relying on legacy products like Netezza are simply too inefficient or too expensive to meet today’s modeling and analytics needs.</li>
            <li><strong>Inability to efficiently handle a large number of variables.</strong> Risk and profitability is driven by understanding and modeling an ever-increasing number of variables and streams of data. Today’s systems can’t accommodate those increases.</li>
            <li><strong>Inability to tune models in a timely manner.</strong> Today’s systems are so overloaded that companies can’t run additional analyses to tune systems for increased accuracy.</li>
            <li><strong>Lack of support for more-dynamic, real-time business models.</strong> If a hurricane were bearing down on South Florida, wouldn’t it make sense to run an analysis of uninsured properties ahead of time? For too many insurance companies, that’s impossible given the lengthy processing times required.</li>
            <li><strong>Require summarized data in order to run.</strong> Current platforms too often require companies to summarize or roll up data because they can’t store or process more-detailed data. In this scenario, critical information related to risks and profitability is lost.</li>
          </ul>

          <p>For even the most enlightened retailers, this tremendous amount of data has overwhelmed existing IT infrastructures, systems, and data architectures. And that’s not even considering the expansion of real-time data sources or the potential avalanche of information from other available sources such as IoT.</p>

          <h3>Why Yellowbrick</h3>
          <p>For insurance companies, the road to addressing these challenges isn’t ripping and replacing but extending and accelerating with the Yellowbrick Hybrid Cloud Data Warehouse.</p>
          <p>Yellowbrick is ideal for addressing the data analysis complexities and speed the insurance industry requires. It allows organizations to build a real-time, standards-based analytics platform that leverages existing tools, models, and investments in the cloud or on premises. As a native hybrid cloud data warehouse, Yellowbrick’s benefits for the insurance industry include:</p>
          <ul class="rfs-text-lg">
            <li><strong>100X performance, support for 1000s of users on PBs of data, and no hidden costs.</strong> Yellowbrick is architected in a way that provides superior performance to systems that operate only on premises or in public clouds. With its flash memory-based architecture, Yellowbrick is optimized for data access and analysis in ways that traditional legacy or cloud data warehouses are not (and without the hidden, unpredictable costs).</li>
            <li><strong>Open to data from anywhere.</strong> Yellowbrick is data agnostic and has standard ANSI SQL and Postgres- compatible interfaces, allowing access to and from any data set or model.</li>
            <li><strong>Instant access to more “hot” data. Yellowbrick doesn’t limit your analyses data sets.</strong> Instead of having to pull data from an archive just to run a year-over-year analysis, Yellowbrick’s massive data bandwidth allows it to store and access years’ worth of detailed data. And it won’t get bogged down by multiple reports or many concurrent users.</li>
            <li><strong>More-granular data analysis.</strong> Give your analysts the ability to ask any question at any time. Whether it’s life insurance or property insurance, specific geographic locations such as a street address can have a huge impact on risk and premiums. Rather than model or price based on rolled-up or summarized data, Yellowbrick’s speed and throughput allows companies to model and price based on granular data such as street address or zip code, providing a significantly more accurate analysis of risks and pricing options.</li>
            <li><strong>Quick identification of geographic or line-of-business issues driving loss in your portfolio.</strong> Yellowbrick enables organizations to quickly identify the relevant variables for a specific scenario and enables underwriters to respond quickly and accurately to new business requests instead of being held back by slow or summarized data.</li>
            <li><strong>Efficient management and optimization of portfolio risk.</strong> Yellowbrick’s speed not only enables insurance companies to optimize the pricing of individual risks but also helps companies balance and optimize their overall portfolios by speeding up model tuning and enabling the identification of critical variables.</li>
          </ul>

        </div>

        <!-- RIGHT COLUMN -->

				<div class="w-full md:w-5/12 relative">
          <span class="accent yellow z-10"></span>
          
          <div class="bg-gray-500 shadow-lg p-10 relative text-white performance-bg">
            <h3 class="rfs-text-7xl font-semibold leading-none text-yellow1 my-0">100X</h3>
            <h3 class="rfs-text-4xl font-medium ">Data Analytics Performance for Faster, Richer Results from Insurance Data</h3>
          </div>

          <div class="bg-white shadow-lg p-10 relative text-gray-500 performance-bg mt-12">

            <h6 class="accent-heading">Challenges:</h6>
            <ul class="rfs-text-base">
              <li>Data frozen in data lakes</li>
              <li>Compliance and regulatory requirements keep changing and increasing</li>
              <li>Critical customer data from outside sources needs to be integrated</li>
              <li>Existing system performance is unpredictable</li>
              <li>Real-time data challenges</li>
            </ul>
          </div>

          <div class="bg-gray-500 shadow-lg p-10 relative text-gray-100 freedom-bg mt-12">
            <h6 class="accent-heading">Case Study</h6>
            <p class="italic rfs-text-2xl">For one of the world’s largest insurance companies, Yellowbrick reduced the time to do a full-cost analysis of all policies across multiple lines of business from 2 full days to less than 2 hours.</p>
            <g-link to="/resources/case-studies/top-global-insurance-company/" class="button yellow mt-4">Read Case Study</g-link>
          </div>

          <div class="bg-white shadow-lg p-10 relative text-gray-500 performance-bg mt-12 relative">

          <span class="accent z-10"></span>
            <h3>Yellowbrick for Financial Services</h3>
            <p>The best insurance for insurance company profitability is speeding up data analysis and modeling capabilities. Yellowbrick can do that better than any existing on-premises or cloud-based platform while reducing risk, increasing compliance, and meeting companies’ rapidly evolving business requirements. It’s ideal for underwriting, rating, policies, risk management, claims, and any insurance application that requires superior speed, accuracy, and flexibility.</p>
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
    title: 'Yellowbrick for Insurance Companies',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: ' Yellowbrick is uniquely qualified to address the data and analytical challenges facing insurance companies.' }
    ]
  },
  components: {
    MoreInfo
  }
}
</script>

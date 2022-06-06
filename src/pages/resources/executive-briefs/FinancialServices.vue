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
        <h1 class="m-0 p-0 leading-none w-full sm:w-1/2 md:w-5/12">Yellowbrick for Financial Services</h1>
        <a href="/uploads/eb-yb-finserv.pdf" target="_blank" class="button yellow mt-8">Download the PDF</a>
      </div>
    </section>

    <section class="flex py-12 bg-white px-6 xl:px-0">
      <div class="flex flex-col md:flex-row items-start justify-evenly max-w-1200 mx-auto">

        <div class="w-full md:w-7/12 relative pr-0 md:pr-10">
          <h3 class="text-gray-500 mb-8">Overview</h3>
          <p>The financial services industry is undergoing a digital transformation as consumers and even businesses demand a fully integrated customer experience across all channels and modes of interaction, from social media and other digital channels to in-person conversations. At the same time, consumers are more educated and empowered to shop around for financial services, requiring financial services companies to put more effort into acquiring customers and maintaining relationships. They need to understand the customer journey in greater detail and be able to instantly act upon it. As a result, financial companies are using more-sophisticated data, analytics, and marketing to find, retain, and grow customer relationships and opportunities. For example, they may use credit-card campaigns to build market share, or incentives and coupons that drive go-to-market strategies, all requiring vast amounts of cost-effective data analytics.</p>
            
          <p>And on the business operations side, financial services organizations have to work harder than ever to meet changing regulatory and compliance requirements while protecting assets and transactions from increasingly sophisticated security threats.</p>
          
          <p>All this puts a tremendous load on financial services firms’ data analytics platforms, at the same time that most companies are attempting to migrate more business and analytical functionality to the cloud. </p>

          <h3>Financial Services Challenges</h3>
          <p>For even the most sophisticated financial services organizations, this tremendous amount of data has overwhelmed existing IT infrastructures, systems, and data architectures, leaving them vulnerable to faster or more sophisticated competitors. Consider just a few of the business and IT challenges facing most financial services firms:</p>
          <ul class="rfs-text-lg">
            <li>
              <strong>Data frozen in data lakes.</strong> Data lakes may be good at storing data, but most financial services firms are realizing it’s much too hard to turn all that data into valuable business information that can be acted upon. Using data lakes for business analytics too often turns out to be time-consuming, difficult, or unpredictable.           
            </li>
            <li>
              <strong>Compliance and regulatory requirements keep changing and increasing.</strong> Compliance and regulatory requirements are a major part of any financial services organization’s data strategy. Those requirements may impose restrictions on where financial services firms can store data (for example, inside the organization or in the cloud), increasing complexity and costs. 
            </li>
            <li>
              <strong>Critical customer data from outside sources needs to be integrated.</strong> Financial services firms are no longer islands of information. Instead, critical data related to customers may reside on external systems, whether it’s location data from Google, spending data from credit cards, or something else. Combining all that external data with internal customer data can take huge amounts of processing power that impacts available resources. 
            </li>
            <li>
              <strong>Existing system performance is unpredictable.</strong> Like many companies, financial services firms rely on dashboards, reports, and analytics to make business decisions. But too often important query execution times vary. Performance of internal (and external) analytics reports may fluctuate, calling into question the underlying reliability of the existing platforms. 
            </li>
            <li>
              <strong>Real-time data challenges.</strong> As the world increasingly shifts to electronic payment methods, financial services organizations are faced with consuming more real-time data than they ever expected. Fraud detection systems need to be able respond instantly, driving up the business analytics requirements and complexity. 
            </li>
          </ul>

          <h3>Why Yellowbrick</h3>
          <p>For financial services organizations, the road to addressing these challenges isn’t ripping and replacing, but extending and accelerating, with the Yellowbrick Data Warehouse. Yellowbrick is uniquely qualified to address the data and analytic challenges facing financial services in three critical ways:</p>
          <ul class="rfs-text-lg">
            <li>
              <strong>100X performance, support for 1000s of users on PBs of data, and no hidden costs.</strong> Yellowbrick Data recognized that was needed for a modern data warehouse was not just an optimization of existing data warehouses, but a complete re-architecture of them--with the critical component being a radical expansion of data bandwidth far beyond traditional boundaries. The result was a modern hybrid cloud data warehouse that radically expands data bandwidth to support lightning-fast queries on petabytes of data for thousands of concurrent users. Yellowbrick allows organizations to consolidate all their corporate data, regardless of where it resides, into a single infrastructure for easy, fast access. It accelerates standards-based access to business analytics and reporting data spread across public clouds, private clouds, or existing on-premises infrastructures, running analytics up to 100x faster than competitive legacy platforms at a fraction of the cost (and without the hidden costs of cloud-only options), while providing unparalleled support for concurrency and scale.      
            </li>
            <li>
              <strong>Designed for hybrid cloud.</strong> Yellowbrick was built from the ground up for hybrid cloud, allowing retailers to unify their on-premises and cloud analytics to create a flexible, predictable, resilient hybrid platform without the risk. Unlike purely on-premises or cloud-native options, Yellowbrick lets you natively run mixed workloads wherever it makes the most economic sense: in on-premises data centers, private clouds, and/or from any major public cloud platform with no cloud lock-in. It supports the applications, users, and public clouds of your choice. Yellowbrick’s native hybrid-cloud architecture eliminates risk for financial services companies by providing a flexible deployment path to the cloud that complements and accelerates existing business transformation initiatives. 
            </li>
            <li>
              <strong>It can deliver all the “hot” data you need.</strong> Rather than shifting customer data into and out of data lakes or other data stores, Yellowbrick’s wide-bandwidth data architecture allows financial services firms to keep significantly more “hot” data on tap, instantly available for data analysis, modeling, or reports, enabling faster and more thorough business decisions based on larger data sets.  
            </li>
          </ul>

          <p>With Yellowbrick, financial services firms can get a true 360-degree view of customers via real-time access to more data and transactions than ever before. Yellowbrick makes it possible to:</p>

          <ul class="rfs-text-lg">            
            <li>Understand and make effective business decisions based on increasingly complex customer journeys </li>
            <li>Increase marketing effectiveness and agility via rapid and cost-efficient analysis of complex data sets </li>
            <li>Reduce security and compliance risks via high-speed real-time data processing </li>
            <li>Increase IT resilience by seamlessly integrating data regardless where it resides while providing a flexible, low-risk path to the cloud </li>
          </ul>

          

        </div>

        <!-- RIGHT COLUMN -->

				<div class="w-full md:w-5/12 relative">
          <span class="accent yellow z-10"></span>
          
          <div class="bg-gray-500 shadow-lg p-10 relative text-white performance-bg">
            <h3 class="rfs-text-7xl font-semibold leading-none text-yellow1 my-0">100X</h3>
            <h3 class="rfs-text-4xl font-medium ">Data Analytics Performance for Faster, Richer Results from Financial Data</h3>
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
            <p class="italic rfs-text-2xl">One of the top 3 credit card companies in the world uses Yellowbrick to power its merchant services portal, facilitating several billion transactions per month.</p>
            <g-link to="/resources/case-studies/top-financial-services-company/" class="button yellow">Read Case Study</g-link>
          </div>

          <div class="bg-white shadow-lg p-10 relative text-gray-500 performance-bg mt-12 relative">

          <span class="accent z-10"></span>
            <h3>Yellowbrick for Financial Services</h3>
            <p>Yellowbrick Data’s unique solution provides a path for financial services companies to safely transform their data  and  analytics  infrastructure  while  leveraging  existing  systems  and  data  sources.  Its  highly  scalable  architecture delivers significantly faster performance at enterprise scale, while reducing risk and providing a much higher price/performance ratio than other solutions.</p>
            <p>Whether  you  need  to  integrate  your  customer  experience,  understand  your  customer  journeys,  increase  compliance, detect fraud or threats, analyze risks, deliver integrated financial services, optimize portfolios, or manage investments, Yellowbrick is an investment that has a big payback. Contact us to learn what dividends Yellowbrick can pay to your organization.</p>
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
    title: 'Yellowbrick for Financial Services',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: ' Yellowbrick is uniquely qualified to address the data and analytic challenges facing financial services.' }
    ]
  },
  components: {
    MoreInfo
  }
}
</script>

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
        <span class="rfs-text-xl text-yellow1 mb-0">Case Study:</span>
        <h1 class="m-0 p-0 leading-none w-full sm:w-2/3 md:w-1/2">For Clarity Innovations, Yellowbrick Slashes Processing Time for Billions of Rows from an Hour to Milliseconds</h1>
        <!-- <a href="/uploads/cs-symphony.pdf" target="_blank" class="button yellow mt-8">Download the PDF</a> -->
      </div>
    </section>

    <section class="flex py-12 bg-white px-6 xl:px-0">
      <div class="flex flex-col sm:flex-row items-start justify-evenly max-w-1200 mx-auto">

        <div class="w-full md:w-7/12 p-0 md:pr-10 relative">
          <h3 class="text-gray-500 mb-8">Business Challenge</h3>
          <div class="text-gray-500 mb-8 md:mb-0">
            <p>Clarity Innovations provides analytic software the US Intelligence Community (IC) uses to support missions to keep the nation safe. Wes Daniels, Clarity Innovation’s COO notes: “In a business sense, time is money, but in a DoD sense sometimes time is lives. Having the ability to load data faster, and query data faster is very important in our line of work.”</p>

            <p>As customer datasets grew to petabytes, Clarity Innovations found that its traditional disk-based solution could no longer return data as fast as its customers required. Daniels said: “90% of all the data produced, has been produced in the last two years, so architecture from 10 years ago are just not going to be able to keep up with it.” Enter Yellowbrick Data.
</p>

            <BaseWistia id="8ombnnb84k" class="mb-10" />

            <h4>Solution</h4>
            <p>Traditional solutions might require days or weeks to load data. Yellowbrick loaded data much faster, enabling Clarity Innovations to keep its focus on business. Daniels told us: “From the time that we had access to Yellowbrick, we were able to jump right in. We were able to load billions of rows in minutes.”</p>

            <p>Software Engineer Bob Calder also noted how easy the database was to implement, saying Yellowbrick was “a far cry from databases I’ve had to configure in the past, where you can measure the work in hours, compared to minutes that it took with the Yellowbrick solution.”</p>

            <p>Jed Elliott, Senior Software Engineer, noted the benefits of the Yellowbrick compact footprint: “One of the things that interests me most about Yellowbrick is that fact that you get the kind of performance you do out of such a small footprint. A lot of the competitors are offering solutions that are racks, and that does not work for our customer.”</p>

            <h4>Results</h4>
            <p>The phenomenal performance Yellowbrick delivers enables Clarity Innovations to more effectively meet customer needs. Calder told us of one real-world scenario: “We were asked to pull back geographic information from billions of rows of data. It was taking almost 60 minutes to cull through the data with our existing system, whereas data results came back in milliseconds in the Yellowbrick solution.”</p>

            <p>Elliott also observed how its SQL-standard architecture helps to deliver real insight: “Yellowbrick is doing something that a lot of the performance-based data store solutions are not, and that’s keeping relationships embedded from the ground up. Sometimes it’s the relationship that matters more than the data itself. Yellowbrick has that baked in. Instead of having to worry about replicating [data] in twenty different tables, flattened out five different ways to answer the same question, you can just run in Yellowbrick with one simple join.”</p>

            <p>Clarity Innovations is delighted with the Yellowbrick solution, as it helps them deliver faster, higher quality insights to its customer, without racks of hardware, and without a complex migration.</p>

          </div>

        </div>

				<div class="w-full md:w-5/12 relative">
          
          <div class="bg-white shadow-lg p-10 relative text-gray-500 performance-bg pb-10 relative">
            <span class="rfs-text-3xl italic">“From the time that we had access to Yellowbrick, we were able to jump right in. We were able to load billions of rows in minutes.”</span>
            <p class="mt-8">- Wes Daniels, COO<br>Clarity Innovations</p>
            <span class="accent z-10"></span>
          </div>
          
          <div class="bg-gray-500 shadow-lg mt-12 p-10 relative text-white performance-bg">
						<h4 class="accent-heading">Overview</h4>
            <p class="rfs-text-base"><strong>Industry:</strong> Government</p>
						<h4 class="">Customer Profile</h4>
            <p class="rfs-text-base">Clarity Innovations provides analytic software the US Intelligence Community (IC) uses to support missions to keep the nation safe.</p>
          </div>

          <div class="bg-white shadow-lg p-10 relative text-gray-500 performance-bg">
						<h4 class="accent-heading mt-12">Situation</h4>
            <p>The company’s legacy systems were too slow to meet SLA requirements for a GIS-oriented application with billions of rows.</p>
          <h4>Solution</h4>
          <p>The company selected Yellowbrick to reduce processing time from an hour to milliseconds.</p>

          <h4>Benefits</h4>
          <ul class="rfs-text-base">
            <li>Fast data loading accelerates migration</li>
            <li>Open-standards database provides a seamless transition</li>
            <li>Compact footprint decreases costs, increases agility</li>
            <li>Analytics-optimized architecture delivers faster, high-quality insights</li>
          </ul>

          </div>

          <div class="bg-white shadow-lg mt-12 p-10 relative text-gray-500 performance-bg pb-10 relative">
            <span class="rfs-text-3xl italic">“One of the things that interests me most about Yellowbrick is that fact that you get the kind of performance you do out of such a small footprint. A lot of the competitors are offering solutions that are racks, and that does not work for our customer.”</span>
            <p class="mt-8">- Jed Elliott, Sr. Software Engineer<br>Clarity Innovations</p>
            <span class="accent z-10"></span>
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
    title: 'Yellowbrick Reduces Processing Time from an Hour to Milliseconds',
    meta: [
      {
				key: 'description',
				name: 'description',
				content: 'The phenomenal performance Yellowbrick delivers enables Clarity Innovations to more effectively meet customer needs. Yellowbrick was able to cull through all Clarity\'s data in milliseconds - a vast improvement.' }
    ]
  },
  components: {
    MoreInfo
  }
}
</script>

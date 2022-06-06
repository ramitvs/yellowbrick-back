<style scoped>
.hero {
  background-image: url(/uploads/images/hero-alt-bg.svg);
  background-size: cover;
	background-position: center center;
	&:before {
		height: 2rem;
	}
}

.freedom-bg {
  background-image: url(/uploads/images/freedom-bg.svg);
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 45%;
}

.float-form {
	@apply relative p-8 bg-gray-200 shadow-lg;
}

</style>

<template>
  <Layout>
    <section class="hero flex bg-gray-700 py-10 md:py-12 text-white px-6 xl:px-0">
      <div class="flex flex-col md:flex-row max-w-1200 w-full py-8 mx-auto relative z-10">
          
					<div class="w-full md:w-2/3 p-0 md:pr-16 text-gray-700 md:text-white">

					<h5 class="text-yellow1 mb-2">On-Demand Webcast:</h5>
          <div class="flex flex-col sm:flex-row justify-between pt-4 pb-8">
            <div class="flex items-center w-3/4 sm:w-5/12"><img src="/uploads/images/webinars/microstrategy.svg" alt="microstrategy logo" class="w-full" /></div>
            <div class="flex items-center w-3/4 md:w-1/6"><span class="text-white rfs-text-6xl text-center w-full">+</span></div>
            <div class="flex items-center w-3/4 sm:w-5/12"><img src="/uploads/images/yb-logo.svg" alt="yellowbrick logo" class="w-full" /></div>
          </div>

						<div class="bg-white md:bg-transparent p-6 md:p-0">
							<h1 class="rfs-text-5xl p-0">Speed-of-Thought Analytics</h1>
							<h3 class="mb-8 font-light text-yellow1">Query billions of rows in milliseconds</h3>
							<p class="rfs-text-lg">In this 30 minute demo, you'll see a demo of how easy it is to connect to Yellowbrick data warehouse from MicroStrategy, query tables with billions of rows from a TPC-DS workload, and see results in milliseconds or seconds.</p>
							<p class="rfs-text-lg">The facts are in: Legacy data warehouses are slow, expensive, and inflexible; Hadoop has failed to enable analytics at scale; and cloud-only options provide unpredictable performance and costs for large datasets. Instead, the Yellowbrick Data Warehouse delivers 100X performance for thousands of users on multiple PBs  and the flexibility to consume analytics from any private and/or major public cloud using common BI tools -- all at a fraction of the cost and with no hidden fees.</p>

						</div>
					</div>

          <div class="w-full md:w-1/3">
            <div class="float-form">
              <h3 class="text-gray-700">Watch On-Demand</h3>
              <BaseHubspot id="873bf2d3-e5f2-4c66-8b3c-d83f707df995" sfid="7011G000000UvyMQAS" />
            </div>
          </div>

				</div>
		</section>

		<GoCustomers />

  </Layout>
</template>

<script>
import GoCustomers from "~/components/GoCustomers.vue";
import Layout from '~/layouts/Landing.vue';

export default {
  metaInfo: {
    title: 'Speed-of-Thought Analytics with Yellowbrick and Microstrategy',
    meta: [
			{
        key: 'description',
				name: 'description',
				content: 'Watch this demo and see how Yellowbrick and Microstrategy can bring speed-of-thought analytics to life and query billions of rows in milliseconds.'
			}
    ]
  },
  components: {
		GoCustomers,
		Layout
  }
};
</script>

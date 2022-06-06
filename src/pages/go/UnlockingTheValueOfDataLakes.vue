<style scoped>
.hero {
  background-image: url(/uploads/images/hero-bg.svg);
  background-size: cover;
  background-position: center center;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    @apply bg-gray-600 absolute z-0;
    opacity: .7;
  }
}

.predictability-bg {
  background-image: url(/uploads/images/predictability-bg.svg);
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 50%;
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
					<h5 class="text-yellow1 mb-6 md:mb-2">Featured Whitepaper:</h5>
						<div class="bg-white md:bg-transparent p-6 md:p-0">
							<h1 class="p-0">Unlocking the Value of Data Lakes</h1>
              <img src="/uploads/wp-unlock-value-in-data-lakes-thumb.jpg" class="float-none sm:float-left w-1/2 mx-auto sm:mx-0 shadow-md sm:shadow-none sm:w-5/12 m-0 mb-6 sm:mb-0 sm:mr-10 sm:mb-6 sm:mt-3" alt="Unlocking Data Lake Value Whitepaper" />
							<p class="rfs-text-lg">Many large companies today have invested in some form of data lake to get value from them in the form of real-time analytics. Unfortunately, that promise has failed to materialize. As a result, most data lake owners have discovered that while their investments are very effective for storing vast amounts of raw data, most fall short for meeting the main requirement for doing real-time, large-scale analytics.</p>
              <p class="rfs-text-lg">The solution is to continue using a data lake for what it does well, and augmenting it with a modern, real-time enterprise analytics environment that is designed for performance at scale.</p>
              <p class="rfs-text-lg">In this paper, you’ll learn how Yellowbrick has re-thought Massively Parallel Processing (MPP) analytic database architecture across storage, CPU, networking, and software to create a specialized  platform that finally delivers on the data lake promise.</p>
							
						</div>
					</div>

					<div class="w-full md:w-1/3 ">
            <div class="float-form">
              <h3 class="text-gray-700">Download today</h3>
              <BaseHubspot id="fab06a10-db25-4889-8aa5-a974d9c00240" sfid="7011G000000Uv5lQAC" />
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
    title: 'Unlocking the Value in Data Lakes',
    meta: [
      { name: 'description', content: 'Yellowbrick has re-thought Massively Parallel Processing (MPP) analytic database architecture across storage, CPU, networking, and software to create a specialized  platform that finally delivers on the data lake promise.' }
    ]
  },
  components: {
    GoCustomers,
    Layout
  }
};
</script>
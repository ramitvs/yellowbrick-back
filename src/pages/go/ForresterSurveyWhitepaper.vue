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

.dk-bg {
	color: #ffffff !important;
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
					<h5 class="text-yellow1 mb-6 md:mb-2">The Forrester Wave&#8482;: Cloud Data Warehouse, Q1 2021</h5>
						<div class="bg-white md:bg-transparent p-6 md:p-0">
							<h1 class="p-0">Yellowbrick Named a Contender in Cloud Data Warehouses by Independent Analyst Firm</h1>
              <img src="/uploads/forrester-wave-2021.png" class="float-none sm:float-left w-1/2 mx-auto sm:mx-0 shadow-md sm:shadow-none sm:w-5/12 m-0 mb-6 sm:mb-0 sm:mr-10 sm:mb-6 sm:mt-3" alt="451 Research Paper: Hybrid Cloud Strategic Advantages" />
							<p class="rfs-text-lg">The world’s only modern data warehouse designed for unmatched performance and ultimate deployment flexibility, today announced that it was named as a contender in the Forrester Research, Inc., report, The Forrester Wave: Cloud Data Warehouse, Q1 2021 report. The report evaluated 13 vendors based on 26 criteria, including performance features, scalability features, data lake integration, and support.</p>
						</div>
					</div>

					<div class="w-full md:w-1/3 ">
            <div class="float-form">
              <h3 class="text-gray-700">Download today</h3>
              <BaseHubspot id="775904f8-6720-48bc-af4a-0db0f4ad5ff6" sfid="7011G000000KX8DQAW" />
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
    title: 'Yellowbrick Named Contender in Cloud Data Warehouse by Independent Analyst Firm',
    meta: [
      { name: 'description', content: 'Yellowbrick Data recently surveyed 1000 enterprise IT managers and executives to uncover their infrastructure priorities during this era of economic uncertainty and disruption.' }
    ]
  },
  components: {
    GoCustomers,
    Layout
  }
};
</script>
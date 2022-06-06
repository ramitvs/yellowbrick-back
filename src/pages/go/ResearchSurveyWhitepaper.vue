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
					<h5 class="text-yellow1 mb-6 md:mb-2">White Paper:</h5>
						<div class="bg-white md:bg-transparent p-6 md:p-0">
							<h1 class="p-0">Analytics and Cloud Infrastructure Spending During Disruption</h1>
              <img src="/uploads/wp-yb-research-survey-thumb.jpg" class="float-none sm:float-left w-1/2 mx-auto sm:mx-0 shadow-md sm:shadow-none sm:w-5/12 m-0 mb-6 sm:mb-0 sm:mr-10 sm:mb-6 sm:mt-3" alt="451 Research Paper: Hybrid Cloud Strategic Advantages" />
							<p class="rfs-text-lg">The world has changed dramatically since March 2020. The rapid spread of the novel coronavirus and its resulting illness, COVID-19, have completely altered business, personal, and social life for the immediate future.</p>
              <p class="rfs-text-lg">To better understand the immediate impact of all these unprecedented changes on businesses and their IT infrastructures, Yellowbrick Data recently surveyed 1000 enterprise IT managers and executives to uncover their infrastructure priorities during this era of economic uncertainty and disruption.</p>
							
						</div>
					</div>

					<div class="w-full md:w-1/3 ">
            <div class="float-form">
              <h3 class="text-gray-700">Download today</h3>
              <BaseHubspot id="b94f1c35-e594-4346-8c62-e04ac5062aa5" sfid="7011G000000Uv5WQAS" />
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
    title: 'Analytics and Cloud Infrastructure Spending During Disruption',
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
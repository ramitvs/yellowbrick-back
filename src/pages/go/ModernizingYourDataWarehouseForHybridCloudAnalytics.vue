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
            <h5 class="text-yellow1 mb-6 md:mb-2">Whitepaper:</h5>
						<div class="bg-white md:bg-transparent p-6 md:p-0">
							<h1 class="p-0">Modernize your data warehouse for near-real time insights across distributed clouds</h1>
              <img src="/uploads/wp-data-warehouse-modernization-analytics-thumb.jpg" class="float-none sm:float-left w-1/2 mx-auto sm:mx-0 shadow-md sm:shadow-none sm:w-5/12 m-0 mb-6 sm:mb-0 sm:mr-10 sm:mb-6 sm:mt-3" alt="Data Warehouse Modernization White Paper" />
							<p class="rfs-text-lg">Legacy data warehouse platforms, which are based on decades-old architectures, are challenged to keep up with modern workloads.They’re too inflexible, too expensive to expand and scale, and require too many technical resources to manage and optimize.</p>
              <p class="rfs-text-lg">What these organizations need is a modern platform that not only supports today’s requirements but provides a path to the future, with flexible deployment options and expand-as-you-grow architecture. And although cloud-only options are often perceived to be the obvious choice for reaching those goals, the truth is usually more complicated.</p>
              <p class="rfs-text-lg">In this white paper, learn about considerations for modernizing your data warehouse to bring near real-time analytics to distributed clouds (comprising private clouds, public clouds, and the network edge).</p>
						</div>
					</div>

					<div class="w-full md:w-1/3 ">
            <div class="float-form">
              <h3 class="text-gray-700">Download today</h3>
              <BaseHubspot id="bee995fd-777c-4c07-a778-d8ba71101514" sfid="7011G000000Uv5bQAC" />
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
    title: 'Modernizing Your Data Warehouse for Hybrid Cloud Analytics',
    meta: [
      { name: 'description', content: 'Learn how a modern data strategy based on hybrid cloud only supports all of today’s requirements, including superior price/performance regardless of data scale, but also provides a path to the future, with flexible deployment options and expand-as-you-grow architecture.' }
    ]
  },
  components: {
    GoCustomers,
    Layout
  }
};
</script>
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

.dk-bg .mktoForm .mktoFormRow .mktoLabel {
	color: #ffffff !important;
}


.float-form {
	@apply relative p-8 bg-gray-200 shadow-lg;
	& .mktoForm {
		margin-top: .5rem !important;
	}

}
</style>

<template>
  <Layout>
    <section class="hero flex bg-gray-700 py-10 md:py-12 text-white px-6 xl:px-0">
      <div class="flex flex-col md:flex-row max-w-1200 w-full py-8 mx-auto relative z-10">
          
					<div class="w-full md:w-2/3 p-0 md:pr-16 text-gray-700 md:text-white">
					<h5 class="text-yellow1 mb-6 md:mb-2">Featured Research Paper:</h5>
						<div class="bg-white md:bg-transparent p-6 md:p-0">
							<h1 class="p-0">The Strategic Advantages of Hybrid Cloud Data Warehousing</h1>
              <img src="/uploads/wp-451-research-hybrid-cloud-thumb.jpg" class="float-none sm:float-left w-1/2 mx-auto sm:mx-0 shadow-md sm:shadow-none sm:w-5/12 m-0 mb-6 sm:mb-0 sm:mr-10 sm:mb-6 sm:mt-3" alt="451 Research Paper: Hybrid Cloud Strategic Advantages" />
							<p class="rfs-text-lg">Today, hybrid cloud is viewed not only as the logical and inevitable consequence of an abundance of choice in relation to computing and data storage location options, but also as a strategic imperative that enables enterprises to make the most efficient use of the variety of infrastructure location options.</p>
              <p class="rfs-text-lg">In this white paper from 451 Research, you’ll learn how hybrid cloud is viewed as a strategic imperative to enable enterprises to make the most efficient use of their data warehouse infrastructure.</p>
							
						</div>
					</div>

					<div class="w-full md:w-1/3 ">
            <div class="float-form">
              <h3 class="text-gray-700">Download today</h3>
              <BaseHubspot id="cf0c67f7-e753-4824-bed5-45fa029cc28c" sfid="7011G000000Uv5qQAC" />
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
    title: 'The Strategic Advantages of Hybrid Cloud Data Warehousing',
    meta: [
      { name: 'description', content: 'Learn how hybrid cloud is viewed as a strategic imperative to enable enterprises to make the most efficient use of their data warehouse infrastructure.' }
    ]
  },
  components: {
    GoCustomers,
    Layout
  }
};
</script>
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
	& .mktoForm {
		margin-top: .5rem !important;
	}

}
</style>

<template>
	<Layout>

		<section class="hero flex bg-gray-700 py-10 md:py-20 text-white px-6 xl:px-0">
			<div class="flex flex-col md:flex-row max-w-1200 w-full py-8 mx-auto relative z-10">

				<div class="w-full md:w-7/12 p-0 md:pr-16 text-gray-700 md:text-white">
					<h5 class="text-yellow1 mb-2">Yellowbrick Demo:</h5>
					<div class="bg-white md:bg-transparent p-6 md:p-0">
						<!-- <span class="accent"></span> -->
						<h1 class="p-0 mt-4">Learn More About the Only Modern Data Warehouse for Hybrid Cloud</h1>

						<h3 class="mt-8">Yellowbrick Data Warehouse is:</h3>
						<div class="flex flex-row flex-wrap -mx-2 md:-mx-6">
							<div class="flex flex-col w-full md:w-1/2 p-2 md:p-6">
								<h4>Faster</h4>
								<p class="mb-0 block">Run analytics 10 to 100x FASTER to achieve analytic insights that have never been possible.</p>
							</div>
							<div class="flex flex-col w-full md:w-1/2 p-2 md:p-6">
								<h4>Economical</h4>
								<p class="mb-0 block">Shrink your data warehouse footprint by as much as 97% and save millions in operational and management costs.</p>
							</div>
							<div class="flex flex-col w-full md:w-1/2 p-2 md:p-6">
								<h4>Simpler to Manage</h4>
								<p class="mb-0 block">Configure, load and query billions of rows in minutes.</p>
							</div>
							<div class="flex flex-col w-full md:w-1/2 p-2 md:p-6">
								<h4>Accessible Anywhere</h4>
								<p class="mb-0 block">Achieve high speed analytics in your data center or in any cloud.</p>
							</div>
						</div>
					</div>
				</div>

				<div class="float-form w-full md:w-1/3">
					<h3 class="text-gray-700">Book a Demo</h3>
					<BaseHubspot id="e4e34b7a-6b27-4bb7-8277-fcd8013f6ef7" sfid="7011G000000kh21QAA" />
				</div>
			</div>
		</section>
		<section class="flex py-16 bg-gray-600 px-6 xl:px-0 enhance-bg">
			<div class="flex-1 justify-center max-w-1000 mx-auto">
				<h3 class="accent-heading text-white rfs-text-4xl font-light mb-1">&ldquo;We believe Yellowbrick&rsquo;s data warehouse technology leaps ahead of anything on the market after seeing firsthand what it can do for our analytics. We&rsquo;re thrilled to invest in what will be the new standard in data warehousing and analytics." </h3>
				<p class="text-white rfs-text-lg text-right mb-0">&#8212;  Josh Woods, Head of Options, ETF, CES, and Research Technology, Citadel Securities </p>
			</div>
		</section>

		<GoCustomersOne />
		<GoReviewsOne />
	</Layout>
</template>

<script>
    import GoCustomersOne from "~/components/GoCustomersOne.vue";
import GoReviewsOne from "~/components/GoReviewsOne.vue";
import Layout from '~/layouts/Landing.vue';

export default {
  metaInfo: {
    title: 'Book a Demo with Yellowbrick',
    meta: [
      { name: 'description', content: 'Schedule a demo to see the benefit of running your data on the Yellowbrick Data Warehouse.' }
    ]
  },
  components: {
      GoCustomersOne,
      GoReviewsOne,
		Layout
  }
};
</script>

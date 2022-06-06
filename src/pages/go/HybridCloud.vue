<style scoped>
.hero {
  background-image: url(/uploads/images/hero-bg.svg);
  background-size: cover;
  background-position: center center;
}

.performance-bg {
  background-image: url(/uploads/images/performance-bg.svg);
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 50%;
}

.freedom-bg {
  background-image: url(/uploads/images/freedom-bg.svg);
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 50%;
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

</style>

<template>
	<Layout>
    <section class="hero flex justify-center bg-gray-700 py-10 md:py-20 text-white capitalize px-6 xl:px-0">
			<div class="flex flex-col max-w-1200 w-full py-8 mx-auto relative z-10">
				<div class="w-full md:w-1/2 pr-12">
					<h1 class="m-0 pb-6">Insights quicker than you can blink</h1>
					<h4>Find out how to reach actionable insights in moments with our free info sheet.</h4>
					<a href="~/uploads/infosheet.pdf" class="button yellow mt-8">Download Now</a>
				</div>
			</div>
    </section>

		<section class="py-20 bg-gray-400">
			<div class="max-w-1000 w-full mx-auto relative px-6">
				<h2 class="flex text-white max-w-1000 mb-12 text-center">Speed is only one part of what makes Yellowbrick the best choice for your data warehousing needs</h2>

				<div class="flex flex-wrap sm:-mx-6 mb-6">

					<div class="flex w-full px-0 sm:px-6 sm:w-1/2 mb-6">
						<div class="performance-bg flex flex-col w-full bg-white p-8 md:pb-20 rounded-sm relative">
							<span class="accent"></span>
							<h3>Speed</h3>
							<p class="w-full sm:w-3/4">Faster, by far, than other leading data warehouses.</p>
						</div>
					</div>

					<div class="flex w-full px-0 sm:px-6 sm:w-1/2 mb-6">
						<div class="freedom-bg flex flex-col w-full bg-white p-8 md:pb-20 rounded-sm relative">
							<span class="accent"></span>
							<h3>Flexibility</h3>
							<p class="w-full sm:w-3/4">Works with all clouds—and works identically across on-premises and in the cloud.</p>
						</div>
					</div>

					<div class="flex w-full px-0 sm:px-6 sm:w-1/2 mb-6">
						<div class="predictability-bg flex flex-col w-full bg-white p-8 md:pb-20 rounded-sm relative">
							<span class="accent"></span>
							<h3>Scalability</h3>
							<p class="w-full sm:w-3/4">Go from terabytes to petabytes and up to hundreds of CPU cores.</p>
						</div>
					</div>

					<div class="flex w-full px-0 sm:px-6 sm:w-1/2 mb-6">
						<div class="performance-bg flex flex-col w-full bg-white p-8 md:pb-20 rounded-sm relative">
							<span class="accent"></span>
							<h3>Cost</h3>
							<p class="w-full sm:w-3/4">Predictable, economical pricing that’s available as a subscription (added bonus: we’ll handle the upgrades).</p>
						</div>
					</div>

				</div>

			</div>
		</section>

		<section class="bg-gray-600 py-24 z-10">

			<div class="flex flex-col max-w-1000 w-full mx-auto relative px-6">
				<h4 class="flex text-white text-center self-center max-w-1000">If Yellowbrick sounds like something your business needs, get in touch with an expert. We’ll show you how to unlock the true value of your data.</h4>
				<div class="dk-bg">
					<BaseHubspot id="2f110ccd-fa4e-4547-83f5-abf2a18c5906" sfid="7011G000000KRg9QAG" />
				</div>
			</div>

		</section>

  </Layout>
</template>

<script>

import BaseHubspot from "~/components/BaseHubspot.vue";
import Layout from '~/layouts/Landing.vue';

export default {
  metaInfo: {
    title: 'Book a Demo with Yellowbrick',
    meta: [
      { name: 'description', content: 'Schedule a demo to see the benefit of running your data on the Yellowbrick Data Warehouse.' }
    ]
  },
  components: {
    BaseHubspot,
	Layout
  }
};
</script>
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
<section class="hero flex bg-gray-700 py-10 md:py-12 text-white px-6 xl:px-0">
      <div class="flex flex-col md:flex-row max-w-1200 w-full py-8 mx-auto relative z-10">
				
					<div class="w-full md:w-7/12 p-0 md:pr-16 text-gray-700 md:text-white">

					<h5 class="text-yellow1 mb-2">Live Demo Presented by:</h5>
          <div class="flex flex-col sm:flex-row justify-between pt-4 pb-8">
            <div class="flex items-center w-3/4 sm:w-5/12"><img src="/uploads/images/webinars/striim.svg" alt="striim logo" class="w-full" /></div>
            <div class="flex items-center w-3/4 md:w-1/6"><span class="text-white rfs-text-6xl text-center w-full">+</span></div>
            <div class="flex items-center w-3/4 sm:w-5/12"><img src="/uploads/images/yb-logo.svg" alt="yellowbrick logo" class="w-full" /></div>
          </div>

						<div class="bg-white md:bg-transparent p-6 md:p-0">
							<h1 class="rfs-text-5xl p-0">There's No Better Time for <span class="whitespace-no-wrap">Real-Time</span> Analytics</h1>
              <h4>Enabling Modern Data Analytics</h4>
							<p class="rfs-text-lg">One of the main premises of modern data analytics is the ability to ingest data continuously and in real time so that insights will always be based on up-to-date information. It's also a key requirement for doing migrations between legacy and cloud environments. In this webinar, learn/see how Striim enables low-risk, fast, and either bulk or continuous data ingestion for Yellowbrick data warehouses.</p>

              <h5><span class="text-teal md:text-yellow1">Date:</span> Wednesday, August 19th</h5>
              <h5><span class="text-teal md:text-yellow1">Time:</span> 10:00AM PT | 1:00PM ET</h5>
            </div>

				</div>

				<div class="w-full md:w-1/3">
					<div class="float-form">
						<h3 class="text-gray-700">Register Here</h3>
						<BaseHubspot id="edb21aa1-e959-468e-a187-5c5dc633216b" sfid="7011G000000UxA9QAK" />
					</div>
				</div>
			</div>
		</section>

		<!-- <section class="hero flex bg-gray-700 py-10 md:py-12 text-white px-6 xl:px-0">
      <div class="flex flex-col md:flex-row max-w-1200 w-full py-8 mx-auto relative z-10">
          
					<div class="w-full md:w-2/3 p-0 md:pr-16 text-gray-700 md:text-white">

					<h5 class="text-yellow1 mb-2">Live Bi-Weekly Demos:</h5>

						<div class="bg-white md:bg-transparent p-6 md:p-0">
							<h1 class="rfs-text-5xl p-0">Check Back Soon to Register for the Next Live Demo</h1>
							<p class="rfs-text-lg">Every other week, Yellowbrick will host a live webinar to demonstrate the many benefits of implementing the Yellowbrick Hybrid Cloud Warehouse.</p>
            </div>
					</div>

				</div>
		</section> -->

		<GoCustomers />

  </Layout>
</template>

<script>
import GoCustomers from "~/components/GoCustomers.vue";
import Layout from '~/layouts/Landing.vue';

export default {
  metaInfo: {
    title: 'Yellowbrick Bi-Weekly Demo',
    meta: [
			{
        key: 'description',
				name: 'description',
				content: 'Join us for our bi-weekly demos to discover Yellowbrick and the power of the only true hybrid cloud data warehouse.'
			}
    ]
  },
  components: {
		GoCustomers,
		Layout
  }
};
</script>

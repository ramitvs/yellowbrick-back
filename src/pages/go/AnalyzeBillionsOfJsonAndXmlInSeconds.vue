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
            <div class="flex items-center w-3/4 sm:w-5/12"><img src="/uploads/images/webinars/sonra.svg" alt="sonra logo" class="w-full" /></div>
            <div class="flex items-center w-3/4 md:w-1/6"><span class="text-white rfs-text-6xl text-center w-full">+</span></div>
            <div class="flex items-center w-3/4 sm:w-5/12"><img src="/uploads/images/yb-logo.svg" alt="yellowbrick logo" class="w-full" /></div>
          </div>

						<div class="bg-white md:bg-transparent p-6 md:p-0">
							<h1 class="rfs-text-5xl p-0">Analyze Billions of JSON and XML Documents in Seconds</h1>
							<p class="rfs-text-lg">JSON has become a popular file format for large data collections.  Unfortunately, most data warehouses are woefully inadequate at handling JSON and XML documents, and rely on time-consuming techniques like schema-on-read to process them.  In this webinar, we will show you how you can avoid that trap, and analyze billions of JSON and XML documents in SECONDS by combining Yellowbrick with Sonra Flexter.</p>

						</div>
					</div>

          <div class="w-full md:w-1/3">
            <div class="float-form">
              <h3 class="text-gray-700">Watch On-Demand</h3>
              <BaseHubspot id="4b21c2f8-d520-4cfd-8609-3df67d5936a4" sfid="7011G000000UwPwQAK" />
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
    title: 'Analyze Billions of JSON and XML Documents in Seconds',
    meta: [
			{
        key: 'description',
				name: 'description',
				content: 'Watch this demo to see how Yellowbrick and Sonra Flexter can analyze billions of JSON and XML documents in seconds.'
			}
    ]
  },
  components: {
		GoCustomers,
		Layout
  }
};
</script>

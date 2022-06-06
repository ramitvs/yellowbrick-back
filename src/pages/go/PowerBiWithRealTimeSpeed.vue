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
          
					<div class="w-full md:w-7/12 p-0 md:pr-16 text-gray-700 md:text-white">

            <div class="flex flex-col sm:flex-row justify-between items-center pb-12">
              <img src="/uploads/images/partners/power-bi-tight.svg" class="w-5/12" />
              <span class="font-semibold rfs-text-4xl text-white">+</span>
              <img src="/uploads/images/yb-logo.svg" class="w-5/12" />
            </div>

					<h5 class="text-yellow1 mb-2">On-Demand:</h5>
						<div class="bg-white md:bg-transparent p-6 md:p-0">
							<h1 class="p-0">Powering Your <span class="whitespace-no-wrap">Power BI</span> with <span class="whitespace-no-wrap">Real-Time</span> Speed</h1>
							<h4>See how you can query petabytes of data in sub-seconds</h4>
							<p class="rfs-text-lg max-w-800">In this demo, we will be presenting the healthcare dataset with the Power BI tool. We will demonstrate how queries can work against petabytes of data in sub-seconds with Power BI.</p>
              <p>Register today to see how Yellowbrick can help get you to faster insights, manage your largest datasets, and integrate into your data warehouse environment seamlessly.</p>
              <!-- <h5><span class="text-teal md:text-yellow1">Date:</span> Thursday, June 4th</h5>
              <h5><span class="text-teal md:text-yellow1">Time:</span> 10:00AM PT | 1:00PM ET</h5> -->
							
						</div>
					</div>
          <div class="w-full md:w-5/12">
            <div class="float-form">
              <h3 class="text-gray-700">Watch On-Demand</h3>
              <BaseHubspot id="99ce3f8a-62cb-4023-8f95-28b7c89c1b0a" sfid="7011G000000UveMQAS" />
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
    title: 'Power Your Power BI with Real-Time Speed',
    meta: [
			{
        key: 'description',
				name: 'description',
				content: 'Join our 30-minute demo to see a healthcare dataset with the Power BI tool. We will demonstrate how queries can work against petabytes of data in sub-seconds with Power BI.'
			}
    ]
  },
  components: {
		GoCustomers,
		Layout
  }
};
</script>

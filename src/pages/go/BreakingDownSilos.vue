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

					<h5 class="text-yellow1 mb-2">On-Demand Demo:</h5>
          <div class="flex flex-col sm:flex-row justify-between pt-4 pb-8">
            <div class="flex items-center w-3/4 sm:w-5/12"><img src="/uploads/images/webinars/denodo.svg" alt="denodo logo" class="w-full" /></div>
            <div class="flex items-center w-3/4 md:w-1/6"><span class="text-white rfs-text-6xl text-center w-full">+</span></div>
            <div class="flex items-center w-3/4 sm:w-5/12"><img src="/uploads/images/yb-logo.svg" alt="yellowbrick logo" class="w-full" /></div>
          </div>

						<div class="bg-white md:bg-transparent p-6 md:p-0">
							<h1 class="rfs-text-5xl p-0">Breaking Down Silos for <span class="whitespace-no-wrap">Real-Time</span> Data Analytics</h1>
              <h4>High-Speed Virtualization for Analyzing  <span class="whitespace-no-wrap">Billions of Rows</span></h4>
							<p class="rfs-text-lg">Data Virtualization provides a logical data layer that integrates data siloed across disparate systems and delivers it to business users in real-time. In this webinar and demo, learn how Denodo and Yellowbrick work together to provide an integrated view of billions of rows of enterprise data across multiple sources for lightning-fast ad hoc exploration.</p>

              <!-- <h5><span class="text-teal md:text-yellow1">Date:</span> Thursday, August 27th</h5>
              <h5><span class="text-teal md:text-yellow1">Time:</span> 10:00AM PT | 1:00PM ET</h5> -->
            </div>

				</div>

				<div class="w-full md:w-1/3">
					<div class="float-form">
						<h3 class="text-gray-700">Watch On-Demand</h3>
						<BaseHubspot id="edb21aa1-e959-468e-a187-5c5dc633216b" sfid="7011G000000UxA9QAK" />
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
    title: 'Breaking Down Silos for Real-time Data Analytics',
    meta: [
			{
        key: 'description',
				name: 'description',
				content: 'In this webinar and demo, learn how Denodo and Yellowbrick work together to provide an integrated view of billions of rows of enterprise data across multiple sources for lightning-fast ad hoc exploration.'
			}
    ]
  },
  components: {
		GoCustomers,
		Layout
  }
};
</script>

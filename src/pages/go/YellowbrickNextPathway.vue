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
          
					<div class="w-full md:w-2/3 p-0 md:pr-16 text-gray-700 md:text-white">

					<h5 class="text-yellow1 mb-2">Webinar Presented by:</h5>
          <div class="flex flex-col sm:flex-row justify-between pt-4 pb-8">
            <div class="flex items-center w-3/4 sm:w-5/12"><img src="/uploads/images/webinars/nextpathway-logo.svg" alt="next pathway logo" class="w-full" /></div>
            <div class="flex items-center w-3/4 md:w-1/6"><span class="text-white rfs-text-6xl text-center w-full">+</span></div>
            <div class="flex items-center w-3/4 sm:w-5/12"><img src="/uploads/images/yb-logo.svg" alt="yellowbrick logo" class="w-full" /></div>
          </div>

						<div class="bg-white md:bg-transparent p-6 md:p-0">
							<!-- <span class="accent"></span> -->
							<h1 class="p-0">Real-time Migration from Teradata</h1>
							<h4>Convert millions of lines of code to Yellowbrick in minutes</h4>
							<p class="rfs-text-lg max-w-800">Migration away from a legacy data warehouse is complex and typically requires lots of operational overhead.  Yellowbrick and Next Pathway, cloud migration industry leader,  have partnered together to provide enterprises with an end-to-end solution that eases the migration from legacy data warehouse technologies such as Teradata to Yellowbrick’s modern hybrid cloud data warehouse.</p>
              <p class="rfs-text-lg max-w-800">Join us for this webinar where you will learn about how this solution can benefit your organization and help you modernize your data warehouse environment.</p>
              <!-- <h5><span class="text-teal md:text-yellow1">Date:</span> June 16th</h5>
              <h5><span class="text-teal md:text-yellow1">Time:</span> 9:00AM PT | 12:00PM ET</h5> -->
							<!-- <div class="flex flex-row flex-wrap items-start -mx-2 md:-mx-6">

								<div class="w-full sm:w-1/2 lg:w-5/12 p-6 text-center">
									<img src="/uploads/images/webinars/vinay-mathur.jpg" alt="Vinay Mathur" class="w-2/3 sm:w-full rounded-full border-4 border-gray-500 md:border-white mx-auto" />
									<h4 class="pt-4">Vinay Mathur</h4>
									<p class="font-semibold m-0">Chief Strategy Officer</p>
                  <p class="rfs-text-base leading-none">Next Pathway</p>
								</div>

								<div class="w-full sm:w-1/2 lg:w-5/12 p-6 text-center">
									<img src="/uploads/images/hema.jpg" alt="Hema Ganapathy" class="w-2/3 sm:w-full rounded-full border-4 border-gray-500 md:border-white mx-auto" />
									<h4 class="pt-4">Hema Ganapathy</h4>
									<p class="font-semibold m-0">Product Marketing</p>
                  <p class="rfs-text-base leading-none">Yellowbrick</p>
								</div>
							</div> -->
						</div>
					</div>
          <div class="w-full md:w-1/3">
            <div class="float-form">
              <h3 class="text-gray-700">Watch On-Demand</h3>
              <BaseHubspot id="1d7a8cf0-1175-422b-b055-07caf97e965f" sfid="7011G000000UvCIQA0" />
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
    title: 'Yellowbrick Demo',
    meta: [
			{
        key: 'description',
				name: 'description',
				content: 'Come and see a live demonstration of how the Yellowbrick Data Warehouse works.'
			}
    ]
  },
  components: {
		GoCustomers,
		Layout
  }
};
</script>

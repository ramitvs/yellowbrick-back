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

					<h5 class="text-yellow1 mb-2">Webinar Presented by:</h5>
          <div class="flex flex-col sm:flex-row justify-between py-4">
            <div class="flex items-center w-3/4 sm:w-5/12"><img src="/uploads/images/webinars/451-logo.svg" alt="451 Research logo" class="w-full" /></div>
            <div class="flex items-center w-3/4 md:w-1/6"><span class="text-white rfs-text-6xl text-center w-full">+</span></div>
            <div class="flex items-center w-3/4 sm:w-5/12"><img src="/uploads/images/yb-logo.svg" alt="yellowbrick logo" class="w-full" /></div>
          </div>

						<div class="bg-white md:bg-transparent p-6 md:p-0">
							<!-- <span class="accent"></span> -->
							<h1 class="p-0">The Strategic Advantages of Hybrid Cloud Data Warehousing </h1>
							<p class="rfs-text-lg">Join us for a joint presentation by 451 Research and Yellowbrick, to learn about how hybrid cloud is viewed as a strategic imperative that enables enterprises to make the most efficient use of their data warehouse infrastructure.</p>
              <p class="rfs-text-lg">We will share with you:</p>
              <ul class="rfs-text-lg pt-0 mt-0">
                <li>Compelling research from 451 Research that shows what the key trends are for data warehouses</li>
                <li>How enterprises are managing their workloads and why they are moving to the hybrid cloud.</li>
              </ul>
              <p class="rfs-text-lg">This webinar will navigate decision makers through the issues surrounding hybrid cloud data warehouses, explore the business value of adoption and offer a set of recommendations and considerations for the decision-making process.</p>

              <!-- <h5><span class="text-teal md:text-yellow1">When:</span> Tuesday, May 19th</h5>
              <h5><span class="text-teal md:text-yellow1">Time:</span> 9:00AM PT | 12:00PM ET</h5> -->

              <!-- <div class="flex flex-row flex-wrap items-center -mx-2 md:-mx-6"> 
								<div class="w-full sm:w-5/12 p-6 text-center">
									<img src="/uploads/images/webinars/matt-aslett-451.jpg" alt="Hema Ganapathy" class="w-2/3 sm:w-3/4 rounded-full border-4 border-white mx-auto" />
									<h5 class="pt-4 mb-1">Matt Aslett</h5>
                  <p>Research Vice President<br>451 Research</p>
								</div>
                <div class="w-full sm:w-5/12 p-6 text-center">
									<img src="/uploads/images/hema.jpg" alt="Hema Ganapathy" class="w-2/3 sm:w-3/4 rounded-full border-4 border-white mx-auto" />
									<h5 class="pt-4 mb-1">Hema Ganapathy</h5>
                  <p>Sr. Director, Product Marketing<br>Yellowbrick</p>
								</div>
							</div> -->
							
						</div>
					</div>

					<div class="w-full md:w-1/3">

            <div class="float-form">
              <h3 class="text-gray-700">Watch On-Demand</h3>
              <BaseHubspot id="55bd7c46-7bc4-467e-a331-a52284a801e8" sfid="7011G000000UueVQAS" />
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
    title: 'Strategic Advantages of hybrid cloud data warehousing',
    meta: [
			{
        key: 'description',
				name: 'description',
				content: 'This webinar will navigate decision makers through the issues surrounding hybrid cloud data warehouses, explore the business value of adoption and offer a set of recommendations and considerations for the decision-making process.'
			}
    ]
  },
  components: {
		GoCustomers,
		Layout
  }
};
</script>

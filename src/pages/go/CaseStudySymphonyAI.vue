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
						<div class="bg-white md:bg-transparent p-6 md:p-0">
							<!-- <span class="accent"></span> -->
							<h1 class="p-0">Retail Giant Upgrades from Netezza: A Customer Story </h1>
							<p class="rfs-text-lg max-w-800">Find out how Symphony Retail uses the Yellowbrick platform for blazing performance and faster time to insights. Symphony RetailAI is a global leader in AI-enabled decision platforms, solutions and insights for driving profitable revenue growth for retailers and CPG manufacturers.</p>
							<p>In this webinar you will learn how to:</p>

              <ul class="rfs-text-lg pt-0 mt-0">
                <li>Achieve 100x performance and millions in savings </li>
                <li>Migrate from Netezza without pain in record time </li>
                <li>Accelerate decision making by improving data availability </li>
              </ul>
              <p class="rfs-text-lg">Don’t miss this opportunity to see for yourself how Symphony Retail took advantage of Yellowbrick’s innovations to streamline and accelerate their data warehouse environment.</p>
              <!-- <h5><span class="text-teal md:text-yellow1">Date:</span> Thursday, May 28th</h5>
              <h5><span class="text-teal md:text-yellow1">Time:</span> 11:00AM PT | 2:00PM ET</h5> -->
							<div class="flex flex-row flex-wrap items-start -mx-2 md:-mx-6">

								<div class="w-full sm:w-1/2 lg:w-5/12 p-6 text-center">
									<img src="/uploads/images/webinars/nigel-pratt-symphony.jpg" alt="Nigel Pratt Symphony AI" class="w-2/3 sm:w-full rounded-full border-4 border-gray-500 md:border-white mx-auto" />
									<h4 class="pt-4">Nigel Pratt</h4>
									<p class="font-semibold m-0">Senior Vice President</p>
                  <p class="rfs-text-base leading-none">Symphony Retail AI</p>
								</div>

								<div class="w-full sm:w-1/2 lg:w-5/12 p-6 text-center">
									<img src="/uploads/images/hema.jpg" alt="Hema Ganapathy" class="w-2/3 sm:w-full rounded-full border-4 border-gray-500 md:border-white mx-auto" />
									<h4 class="pt-4">Hema Ganapathy</h4>
									<p class="font-semibold m-0">Sr. Director, Product Marketing</p>
                  <p class="rfs-text-base leading-none">Yellowbrick</p>
								</div>
							</div>
						</div>
					</div>
          <div class="w-full md:w-1/3">
            <div class="float-form">
              <h3 class="text-gray-700">Watch On-Demand</h3>
              <BaseHubspot id="df92ad17-2bc2-48d6-b066-334942878ce9" sfid="7011G000000UuZVQA0" />
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
    title: 'Symphony AI Case Study',
    meta: [
			{
        key: 'description',
				name: 'description',
				content: 'Symphony AI Case Study by Yellowbrick reveals the advantages of the Yellowbrick Modern Hybrid Data Warehouse.'
			}
    ]
  },
  components: {
		GoCustomers,
		Layout
  }
};
</script>

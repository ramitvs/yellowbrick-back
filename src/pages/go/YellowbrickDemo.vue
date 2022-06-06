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
					<h5 class="text-yellow1 mb-2">On-Demand Webinar:</h5>
						<div class="bg-white md:bg-transparent p-6 md:p-0">
							<!-- <span class="accent"></span> -->
							<h1 class="p-0">Yellowbrick Demo</h1>
							<p class="rfs-text-lg max-w-600">Check out our Yellowbrick demo webinar to see how Yellowbrick can help get you to faster insights, manage your largest datasets and integrate into your data warehouse environment seamlessly. Learn more about why Yellowbrick is the only modern data warehouse for hybrid cloud.</p>
							<!-- <div class="flex flex-row flex-wrap items-center -mx-2 md:-mx-6">
								<div class="w-full sm:w-1/3 p-6 text-center">
									<img src="/uploads/images/ray.jpg" alt="Ray Canuel" class="w-2/3 sm:w-full rounded-full border-4 border-white mx-auto" />
									
									<h5 class="pt-4"><span class="rfs-text-base">with</span><br>Ray Canuel</h5>
								</div>
							</div> -->
						</div>
					</div>

					<div class="float-form w-full md:w-1/3">
						<h3 class="text-gray-700">Watch On-Demand</h3>
						<BaseHubspot id="9381ec46-ee13-43e8-9a33-87ab248443b8" sfid="7011G000000cS8wQAE" />
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

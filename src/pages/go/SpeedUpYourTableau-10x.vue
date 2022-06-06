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
					<h5 class="text-yellow1 mb-2">Webcast:</h5>
						<div class="bg-white md:bg-transparent p-6 md:p-0">
							<h1 class="p-0">Speed your Tableau by 10X</h1>
							<h4>A Live Demo</h4>
							<p class="rfs-text-lg max-w-800">In this 30-minute demo, we will be presenting Netflow dataset with Tableau BI tool. See how Yellowbrick can help get you to faster insights, manage your largest datasets and integrate into your data warehouse environment seamlessly.</p>
              <p class="rfs-text-lg max-w-800"><span class="font-semibold">Highlight:</span> We will show you how you can query >20 billion rows in seconds!</p>
              <p class="rfs-text-lg max-w-800">Too good to be true? Sign up for this on-demand demo. Seeing is believing!</p>
              <!-- <h5><span class="text-teal md:text-yellow1">Date:</span> Thursday, June 4th</h5>
              <h5><span class="text-teal md:text-yellow1">Time:</span> 10:00AM PT | 1:00PM ET</h5> -->
							
						</div>
					</div>
          <div class="w-full md:w-1/3">
            <div class="float-form">
              <h3 class="text-gray-700">Watch On-Demand</h3>
              <BaseHubspot id="12148ede-e944-45e3-bcea-00e8d8a5e014" sfid="7011G000000UvA2QAK" />
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
    title: 'Yellowbrick Demos',
    meta: [
			{
        key: 'description',
				name: 'description',
				content: 'Join us for our bi-weekly demos as we discover Yellowbrick and the power of the only true hybrid cloud data warehouse.'
			}
    ]
  },
  components: {
		GoCustomers,
		Layout
  }
};
</script>

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
        <div class="flex flex-col w-full md:w-2/3 p-0 md:pr-16 text-white">
          <div class="flex flex-col">
            <h5 class="text-yellow1 mb-2">Netezza Migration Guide:</h5>
            <h1 class="p-0">Migrating from Netezza to Yellowbrick is Fast and Painless</h1>
          </div>

          <div class="flex flex-col sm:flex-row py-8 ">
       
            <p class="rfs-text-lg max-w-800">The Yellowbrick hybrid cloud data warehouse is designed to make migrating from Netezza fast and simple. With Yellowbrick you can simplify your operations with intelligent automation and seamlessly cutover your data to Yellowbrick.  Learn more about the technical features that Yellowbrick provides and the steps you need to take to have a running system that is compatible with your environment, faster, easier to manage and incrementally scalable.</p>	
          </div>
        </div>
        <div class="w-full md:w-1/3">
          <div class="float-form">
            <h3 class="text-gray-700">Read it Now</h3>
            <img src="/uploads/images/thumb-migration-guide-netezza.png" alt="Netezza Migration Guide" class="flex w-full  shadow-lg mr-8 self-start" />
            <a class="button yellow basehubspot-button" href="/resources/migration-guides/netezza/ " style="margin-top: 30px;">Read Now</a>
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
    title: 'Netezza Migration Guide',
    meta: [
			{
        key: 'description',
				name: 'description',
				content: 'Migrating from Netezza to Yellowbrick is fast and painless. View the technical guide for a detailed overview.'
			}
    ]
  },
  components: {
		GoCustomers,
		Layout
  }
};
</script>

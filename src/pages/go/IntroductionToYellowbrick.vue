<style scoped>
.hero {
  background-image: url(/uploads/images/hero-bg.svg);
  background-size: cover;
  background-position: center center;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    @apply bg-gray-600 absolute z-0;
    opacity: .7;
  }
}

.predictability-bg {
  background-image: url(/uploads/images/predictability-bg.svg);
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 50%;
}

.dk-bg .mktoForm .mktoFormRow .mktoLabel {
	color: #ffffff !important;
}

</style>

<template>
  <Layout>
    <section class="hero flex justify-center bg-gray-700 py-10 md:py-20 text-white px-6 xl:px-0">
			<div class="flex flex-col md:flex-row max-w-1200 w-full py-8 mx-auto relative z-10 items-center">
				<div class="w-full md:w-7/12 pr-0 md:pr-6 order-2 md:order-1">
					<h1 class="mb-2 pb-1">Introduction to Yellowbrick</h1>
					<h3><span class="text-yellow1">On-Demand Webinar</span></h3>

          <!-- <div class="w-full md:w-1/2 pl-0 md:pl-6 order-1 md:order-2 flex flex-row md:hidden justify-center text-center">
            <div class="w-full md:w-1/2 px-2">
              <img src="/uploads/images/hema.jpg" class="mx-auto"/>
              <h5 class="mb-0 mt-4">Hema Ganapathy</h5>
              <p class="mb-0">Head of Product Marketing</p>
            </div>
            <div class="w-full md:w-1/2 px-2">
              <img src="/uploads/images/ray.jpg" class="mx-auto" />
              <h5 class="mb-0 mt-4">Ray Canuel</h5>
              <p class="mb-0">Working with Customers</p>
            </div>
          </div> -->

					<a href="" class="button yellow mt-6" v-scroll-to="'#form'">Watch Recording</a>
				</div>
        <!-- <div class="w-full md:w-5/12 pl-0 md:pl-6 order-1 md:order-2 hidden md:flex flex-row justify-center text-center">
          <div class="w-full md:w-1/2 px-2">
            <img src="/uploads/images/hema.jpg" class="mx-auto"/>
            <h5 class="mb-0 mt-4">Hema Ganapathy</h5>
            <p class="mb-0">Head of Product Marketing</p>
          </div>
          <div class="w-full md:w-1/2 px-2">
            <img src="/uploads/images/ray.jpg" class="mx-auto" />
            <h5 class="mb-0 mt-4">Ray Canuel</h5>
            <p class="mb-0">Working with Customers</p>
          </div>
        </div> -->
			</div>
    </section>

		<section class="py-20 bg-white text-gray-500">

			<div class="flex flex-col md:flex-row max-w-1200 w-full mx-auto relative px-6 xl:px-0 ">

        <div class="w-full md:w-1/2">
          <h2>Learn Why a Modern Data Warehouse is Critical Now</h2>
          <p class="rfs-text-lg">In today’s uncertain environment, it’s more imperative than ever that IT, data, and analytics departments have strong, dynamic plans to support their businesses with powerful and immediate insights -</p>

          <ul class="rfs-text-lg">
            <li>Insights that require a data warehouse that is scalable, flexible, highly available and dependable</li>
            <li>Provides superior performance at an economical price</li>
          </ul>
  
          <p class="rfs-text-lg mt-8">As a standards-compliant data warehouse, learn how Yellowbrick:</p>

          <ul class="rfs-text-lg">
            <li>Works seamlessly with all of your analytics tools, speeding their performance</li>
            <li>Provides the quickest time-to-insight, just at the moment when your business needs it most</li>
          </ul>
          
          <p class="rfs-text-lg">Watch what makes Yellowbrick the world’s only modern data warehouse purpose-built for hybrid cloud, providing ultimate flexibility and performing with unmatched speed either in your data center or in any cloud.</p>
        </div>

        <div class="w-full md:w-1/2">
          <div class="dk-bg single-col w-full sm:w-3/4 mx-auto">
            <div class="bg-gray-500 p-8 predictability-bg" id="form">
            <h3 class="text-white-700" style="color: white;">Watch On-Demand</h3>
            <BaseHubspot id="590cc341-ebdf-43dd-a6f8-ecb73047daf6" sfid="7011G000000cROFQA2" />
            </div>
          </div>
        </div>
			</div>
		</section>
  </Layout>
</template>

<script>

import BaseHubspot from "~/components/BaseHubspot.vue";
import Layout from '~/layouts/Landing.vue';

export default {
  metaInfo: {
    title: 'Introduction to Yellowbrick',
    meta: [
      { name: 'description', content: 'Learn how the Modern Data Warehouse can benefit your business with Yellowbrick Data.' }
    ]
  },
  components: {
    BaseHubspot,
    Layout
  }
};
</script>

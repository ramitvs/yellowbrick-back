<style scoped>
.hero-alt {
  background-image: url(/uploads/images/hero-alt-bg.svg);
  background-size: cover;
  background-position: center center;
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

.clipped {
	@apply w-full h-auto;
	clip-path: url(#parallelogram);
}

.clipme {
	background-image: url(/uploads/images/webinars/ed-bernier.png);
	background-size: cover;
	background-position: top right;
	background-repeat: no-repeat;
	bottom: 0;
	right: -30%;
	left: 40%;
	z-index: 10;
	position: absolute;
	top: 0;
	& .title {
		@apply absolute;
		bottom: 5%;
		left: 20%;
	}
}

@media only screen and (min-width: 900px) {
	.clipme {
		left: 30%;
		right: -25%;
	}
}

@media only screen and (min-width: 1100px) {
	.clipme {
		left: 34%;
		right: -10%;
	}
}

@media only screen and (min-width: 1460px) {
	.clipme {
		left: 45%;
		right: -8%;
	}
}

.yellow-flag {
	position: absolute;
	height: 100%;
	width: 100%;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: 1;
		&:after {
		content: '';
		background: #fecf41;
		width: 1000px;
		height: 1000px;
		position: absolute;
		bottom: 0;
		top: -6rem;
		left: 100%;
		z-index: 1;
	}
}

.unclipped {
	& .title {
		@apply absolute;
		bottom: .5rem;
		left: 1.5rem;
	}
}
</style>

<template>
  <Layout>

    <section class="hero-alt flex flex-col md:flex-row justify-center bg-gray-700 py-10 md:pb-24 md:pt-24 text-white px-6 xl:px-0 relative overflow-hidden">
			
			<div class="clipme hidden md:flex text-white">
				<div class="title">
					<h4 class="mb-0 font-light">Ed Bernier</h4>
					<h6>Sr. Systems Engineer</h6>
				</div>
			</div>

			<div class="unclipped flex md:hidden mt-20 mb-0 relative">
				<img src="/uploads/images/webinars/ed-bernier-small.jpg" class="w-3/4 xs:w-1/2" />
				<div class="title">
					<h4 class="mb-0 font-light">Ed Bernier</h4>
					<h6>Sr. Systems Engineer</h6>
				</div>
			</div>

			<div class="hidden md:flex yellow-flag w-full h-full"></div>


			<div class="flex flex-col md:flex-row max-w-1200 w-full mx-auto py-8 relative z-10 items-center">
				<div class="w-full md:w-1/2 pr-0 md:pr-6">
					<h5><span class="text-yellow1">On-Demand Webinar</span></h5>
					<h1 class="rfs-text-4xl mb-2 pb-1 pt-6 md:pt-0">Key Benefits of a Modern Hybrid Cloud Data Warehouse</h1>
					<a href="" class="button yellow mt-6" v-scroll-to="'#form'">Watch Recording</a>
				</div>
			</div>

    </section>

		<section class="py-20 bg-white text-gray-500">
			<div class="flex flex-col md:flex-row max-w-1200 w-full mx-auto relative px-6 xl:px-0 ">
        <div class="w-full md:w-1/2">
          <h3>Webinar Overview</h3>
          <p class="rfs-text-lg">Analytics have become the lifeline for the enterprise business and as analytics become more mission critical, there are a lot of challenges that enterprises need to address. More users and more data sources drive the requirement for increased capacity and performance. However, higher performance often comes with unpredictable or exponential costs.</p> 
          <p class="rfs-text-lg">Organizations need a flexible architecture to solve their current analytics problems and the scale to meet future demands. In this webinar, we will highlight the key benefits that a modern hybrid cloud data warehouse provides to your business users including:</p>
					<ul class="rfs-text-lg pl-8">
						<li>Flexible deployment options</li>
						<li>Support for multiple clouds</li>
						<li>Accelerated analytics for thousands of concurrent users</li>
						<li>Predictable costs over time</li>
					</ul>
          <p class="rfs-text-lg">Learn how Yellowbrick is the only data warehouse that provides a truly flexible cloud architecture with support for the hybrid cloud – both on-premises and public cloud. Register now to reserve your spot!</p>
        </div>
        <div class="w-full md:w-1/2">
          <div class="dk-bg single-col w-full sm:w-3/4 mx-auto">
            <div class="bg-gray-500 p-8 predictability-bg" id="form">
				              <h3 class="text-white-700" style="color: white;">Watch On-Demand</h3>
            <BaseHubspot id="f3c07114-0a26-4468-a732-89e9d68b887e" sfid="7011G000000cRVpQAM" />
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
    title: 'Key Benefits of a Modern Hybrid Cloud Data Warehouse',
    meta: [
      { name: 'description', content: 'Learn how the benefits of running a Yellowbrick Modern Hybrid Cloud Data Warehouse.' }
    ]
  },
  components: {
    BaseHubspot,
    Layout
  }
};
</script>
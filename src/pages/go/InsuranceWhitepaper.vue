<style scoped>
.hero {
  background-image: url(/uploads/images/hero-new.svg);
  background-size: cover;
  background-position: center center;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    @apply bg-gray-700 absolute z-0;
    opacity: .7;
  }
}
.hero-half {
  @apply bg-white;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 60%;
    background-image: url(/uploads/images/hero-new.svg);
    background-size: cover;
    background-position: center center;
    @apply bg-gray-700 absolute z-0;
  }
}

.predictability-bg {
  background-image: url(/uploads/images/predictability-bg.svg);
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 50%;
}

.dk-bg {
	color: #ffffff !important;
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
            <h5 class="text-yellow1 mb-6 md:mb-2">Industry Whitepaper</h5>
						<div class="bg-white md:bg-transparent p-6 md:p-0">
							<h1 class="p-0">Real-time Analytics<br>in Insurance</h1>
              <div class="float-none lg:float-right w-full xs:w-3/4 sm:mx-0 shadow-md sm:shadow-none lg:w-2/5 m-0 mb-8 lg:mb-0 lg:ml-10 lg:mb-12 lg:mt-3">
                <img src="/uploads/thumb-whitepaper-insurance-industry.png" class="border-4 border-white w-full" alt="Data Warehouse Modernization White Paper" />
              </div>
							<p class="rfs-text-lg">Success in the insurance business depends on understanding, evaluating, and pricing risks. That is hard enough in a predictable environment, while today’s insurance companies must now rapidly adapt to much more varied and unpredictable business situations.</p>
              <p class="rfs-text-lg">Insurance companies need to focus more aggressively on transformative projects that will build long-term, innovative foundations. There needs to be a more agile and more responsive approach to looking at customers and opportunities in completely new ways. Traditional approaches with internal siloed systems based on line-of-business limitations can no longer support continued growth.</p>
              <h5 class="rfs-text-lg accent-heading mt-10 mb-0 pb-0">Download this whitepaper to learn about:</h5>
              <div class="flex flex-col md:flex-row">
                <ul class="rfs-text-base w-full mb-0 pb-0 md:mb-2 md:pb-2">
                  <li>Analytics challenges and opportunities in the insurance industry</li>
                  <li>The necessity of real-time analytics for claims processing to underwriting</li>
                </ul>
                <ul class="rfs-text-base w-full pt-0 mt-0 md:mt-2 md:pt-2">
                  <li>How distributed cloud architecture can break down siloed data</li>
                  <li>Transforming insurance data analytics with Yellowbrick</li>
                </ul>
              </div>
						</div>
					</div>


					<div class="w-full md:w-1/3 ">
            <div class="float-form">
              <h3 class="text-gray-700">Download today</h3>
              <BaseHubspot id="753bc585-1c50-4ce6-bed2-f4de9d614ff6" sfid="7011G000000KYpmQAG" class="text-gray-700"/>
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
    title: 'Real-time Analytics in Insurance Whitepaper',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'Download this whitepaper to learn about data challenges in the insurance industry and how to transform data analytics with Yellowbrick.'
      },
      {
        key: 'og:description',
        name: 'og:description',
        content: 'Download this whitepaper to learn about data challenges in the insurance industry and how to transform data analytics with Yellowbrick.'
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'Download this whitepaper to learn about data challenges in the insurance industry and how to transform data analytics with Yellowbrick.'
      },
      {
        key: 'og:image',
        name: 'og:image',
        content: 'https://www.yellowbrick.com/uploads/thumb-whitepaper-insurance-industry.png'
      },
      {
        key: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.yellowbrick.com/uploads/thumb-whitepaper-insurance-industry.png'
      }
    ]
  },
  components: {
    GoCustomers,
    Layout
  }
};
</script>
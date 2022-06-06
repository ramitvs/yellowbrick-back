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
            <h5 class="text-yellow1 mb-6 md:mb-2">Featured eBook:</h5>
						<div class="bg-white md:bg-transparent p-6 md:p-0">
							<h1 class="p-0">Powering Top Hedge Funds</h1>
              <p class="rfs-text-3xl leading-none">Modernize legacy platforms like SAP Sybase IQ</p>
              <div class="float-none lg:float-right w-full xs:w-3/4 sm:mx-0 shadow-md sm:shadow-none lg:w-1/2 m-0 mb-8 lg:mb-0 lg:ml-10 lg:mb-12 lg:mt-3">
                <img src="/uploads/go/powering-top-hedge-funds.png" class="border-4 border-white w-full" alt="Powering Top Hedge Funds White Paper" />
              </div>
			<p class="rfs-text-lg">In today’s market, data and analytics play a critical role in maximizing profits for hedge funds.</p>
              <p class="rfs-text-lg">The need for both data and analytics has exploded in the past few years. What's driving the change? Hedge funds’ use of big data, alternative data, risk analytics, and data-powered investing.</p>
			  <p class="rfs-text-lg">More than 50% of market-leading hedge fund managers use seven or more alternative data sets. And analysts need to use that data to explore new ideas, create new models, and make faster decisions.</p>
			  <p class="rfs-text-lg">Legacy platforms and cloud data warehouses like SAP Sybase IQ and Microsoft SQL Server can’t meet your specialized needs. </p>
			  <p class="rfs-text-lg">By modernizing legacy technology, hedge funds can make faster and more profitable decisions.</p>
              <h5 class="rfs-text-lg accent-heading mt-10 mb-0 pb-0">In this ebook you will learn:</h5>
              <div class="flex flex-col md:flex-row">
                <ul class="rfs-text-base w-full mb-0 pb-0 md:mb-2 md:pb-2">
                  <li>The limitations of legacy and cloud data warehouse providers</li>
                  <li>How a top hedge fund and market maker dropped daily order processing from five hours to four minutes</li>
				  <li>Why faster analytics and processing capabilities provide a competitive edge.</li>
                </ul>
                <ul class="rfs-text-base w-full pt-0 mt-0 md:mt-2 md:pt-2">
                  <li>How to deliver 100x performance for thousands of users at a fraction of the cost</li>
                  <li>How Yellowbrick loaded 1 billion records in less than three minutes for a top-10 hedge fund</li>
                </ul>
              </div>
						</div>
					</div>


					<div class="w-full md:w-1/3 ">
            <div class="float-form md:w-3/4">
              <h3 class="text-gray-700">Download today</h3>
              <BaseHubspot id="36841f4c-9668-4105-b789-85c473cf9681" sfid="7011G000000KgQeQAK" class="text-gray-700"/>
            </div>
<GoReviews />        

					</div>
				</div>
		</section>

		<GoCustomers />

  </Layout>
</template>

<script>

import GoCustomers from "~/components/GoCustomers.vue";
import GoReviews from "~/components/GoReviews.vue";
import Layout from '~/layouts/Landing.vue';

export default {
  metaInfo: {
    title: 'eBook: Powering Top Hedge Funds',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'Download this eBook today to learn Real-time analytics for hedge funds.'
      },
      {
        key: 'og:description',
        name: 'og:description',
        content: 'Download this eBook today to learn Real-time analytics for hedge funds.'
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'Download this eBook today to learn Real-time analytics for hedge funds.'
      },
      {
        key: 'og:image',
        name: 'og:image',
        content: 'https://www.yellowbrick.com/uploads/ebook-hedge-funds-thumb.png'
      },
      {
        key: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.yellowbrick.com/uploads/ebook-hedge-funds-thumb.png'
      }
    ]
  },
  components: {
    GoCustomers,
    GoReviews,
    Layout
  }
};
</script>

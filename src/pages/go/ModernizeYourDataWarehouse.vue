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
							<h1 class="p-0">Modernize Your Data Warehouse for Faster, Deeper Insights</h1>
              <div class="float-none lg:float-right w-full xs:w-3/4 sm:mx-0 shadow-md sm:shadow-none lg:w-1/2 m-0 mb-8 lg:mb-0 lg:ml-10 lg:mb-12 lg:mt-3">
                <img src="/uploads/ebook-modernize.jpg" class="w-full" alt="Modernize Your Data Warehouse eBook" />
              </div>
							<p class="rfs-text-base">Company survival depends on understanding the market better than the competition and acting more quickly. Being able to quickly process, understand, and make profitable decisions from all your data is key to being successful. Unfortunately, legacy data warehouses can be a dead end with their slow speed and inflexibility while cloud data warehouses become unreliable at scale. Learn about Yellowbrick’s hybrid cloud approach and how modernizing your data warehouse will improve query performance and reduce overall data center costs.</p>
              <h5 class="rfs-text-base accent-heading mt-10 mb-0 pb-0">In this ebook you will learn:</h5>
              <div class="flex flex-col md:flex-row">
                <ul class="rfs-text-base w-full mb-0 pb-0 md:mb-2 md:pb-2">
                  <li>The limitations of legacy and cloud data warehouse providers</li>
                  <li>How hybrid cloud delivers scalability and speed </li>
                  <li>How Yellowbrick helped TEOCO save $5 million in data center costs</li>
                </ul>
                <ul class="rfs-text-base w-full pt-0 mt-0 md:mt-2 md:pt-2">
                  <li>How a leading financial services firm delivered 10x faster query results for 1000s of users </li>
                  <li>How Yellowbrick enabled 182x better query performance for Catalina Marketing</li>
                </ul>
              </div>
						</div>
					</div>

					<div class="w-full md:w-1/3 ">
            <div class="float-form">
              <h3 class="text-gray-700">Download today</h3>
              <BaseHubspot id="5b4b715d-2140-42d0-86fe-9cf117bfdf7d" sfid="7011G000000UwqsQAC" />
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
    title: 'eBook: Modernize Your Data Warehouse',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'Download this eBook today to learn how Yellowbrick modernize your data warehouse for Faster, Deeper Insights.'
      },
      {
        key: 'og:description',
        name: 'og:description',
        content: 'Download this eBook today to learn how Yellowbrick modernize your data warehouse for Faster, Deeper Insights.'
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'Download this eBook today to learn how Yellowbrick modernize your data warehouse for Faster, Deeper Insights.'
      },
      {
        key: 'og:image',
        name: 'og:image',
        content: 'https://www.yellowbrick.com/uploads/ebook-modernize.jpg'
      },
      {
        key: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.yellowbrick.com/uploads/ebook-modernize.jpg'
      }
    ]
  },
  components: {
    GoCustomers,
    Layout
  }
};
</script>
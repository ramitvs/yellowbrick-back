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
							<h1 class="p-0">Yellowbrick for Banking and Financial Services</h1>
              <div class="float-none lg:float-right w-full xs:w-3/4 sm:mx-0 shadow-md sm:shadow-none lg:w-5/12 m-0 mb-8 lg:mb-0 lg:ml-10 lg:mb-12 lg:mt-3">
                <img src="/uploads/ebook-finserv.jpg" class="w-full" alt="Migrate Teradata Workloads to Yellowbrick" />
              </div>
							<p class="rfs-text-xl mt-6">Banks and financial services firms are more dependent than ever on effective and efficient data analytics. Learn how to modernize your data warehouse and turn large, complex data sets into profitable business decisions.</p>
              <h5 class="rfs-text-lg accent-heading mt-10 mb-0 pb-0">In this ebook you will learn:</h5>
              <div class="flex flex-col md:flex-row">
                <ul class="rfs-text-base w-full mb-0 pb-0 md:mb-2 md:pb-2">
                  <li>How a hybrid cloud approach protects your firm’s analytic investment and existing infrastructure</li>
                  <li>How Yellowbrick addresses data analysis complexities and real-time speed banks and financial services firms require</li>
                </ul>
                <ul class="rfs-text-base w-full pt-0 mt-0 md:mt-2 md:pt-2">
                  <li>Why financial service companies are pursuing hybrid cloud</li>
                  <li>How Yellowbrick improved a risk-management firm’s fraud-detection system performance while reducing costs</li>
                </ul>
              </div>
						</div>
					</div>

					<div class="w-full md:w-1/3 ">
            <div class="float-form">
              <h3 class="text-gray-700">Download today</h3>
              <BaseHubspot id="e36808d2-a2c4-472a-8376-8296085506b1" sfid="7011G000000Uw9jQAC" />
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
    title: 'eBook: Yellowbrick for Banking and Financial Services',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'Download this eBook today to learn how Yellowbrick Data can help the financial services and banking industries improve time-to-insight.'
      },
      {
        key: 'og:description',
        name: 'og:description',
        content: 'Download this eBook today to learn how Yellowbrick Data can help the financial services and banking industries improve time-to-insight.'
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'Download this eBook today to learn how Yellowbrick Data can help the financial services and banking industries improve time-to-insight.'
      },
      {
        key: 'og:image',
        name: 'og:image',
        content: 'https://www.yellowbrick.com/uploads/ebook-finserv.jpg'
      },
      {
        key: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.yellowbrick.com/uploads/ebook-finserv.jpg'
      }
    ]
  },
  components: {
    GoCustomers,
    Layout
  }
};
</script>
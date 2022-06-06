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
							<h1 class="p-0">Faster, More Accurate<br>Insights for Insurers</h1>
              <p class="rfs-text-3xl leading-none">A Hybrid Cloud Approach to Analytics</p>
              <div class="float-none lg:float-right w-full xs:w-3/4 sm:mx-0 shadow-md sm:shadow-none lg:w-1/2 m-0 mb-8 lg:mb-0 lg:ml-10 lg:mb-12 lg:mt-3">
                <img src="/uploads/ebook-insurance-thumb.png" class="border-4 border-white w-full" alt="Data Warehouse Modernization White Paper" />
              </div>
							<p class="rfs-text-lg">Insurance industry success is driven by how fast and accurately a company turns large, complex data sets into profitable business decisions.</p>
              <p class="rfs-text-lg">A hybrid cloud approach helps protect your insurance company’s unique analytics investments and existing infrastructure while moving toward a more flexible, cloud-based future.</p>
              <h5 class="rfs-text-lg accent-heading mt-10 mb-0 pb-0">In this ebook you will learn:</h5>
              <div class="flex flex-col md:flex-row">
                <ul class="rfs-text-base w-full mb-0 pb-0 md:mb-2 md:pb-2">
                  <li>The current challenges and limitations with complex data sets in the data intense insurance industry</li>
                  <li>How to scale with speed using Yellowbrick Hybrid Cloud approach to analytics</li>
                </ul>
                <ul class="rfs-text-base w-full pt-0 mt-0 md:mt-2 md:pt-2">
                  <li>How you can use a modern data warehouse to move past the barriers of large, complex data sets</li>
                  <li>How a top 3 global insurance company used Yellowbrick to accelerate virtually all business processes</li>
                </ul>
              </div>
						</div>
					</div>


					<div class="w-full md:w-1/3 ">
            <div class="float-form">
              <h3 class="text-gray-700">Download today</h3>
              <BaseHubspot id="c4161c0f-a673-4330-b4b2-05991a17a1cb" sfid="7011G000000Uw9eQAC" class="text-gray-700"/>
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
    title: 'eBook: Yellowbrick for Insurance',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'Download this eBook today to learn how Yellowbrick Data can help the insurance industry improve time-to-insight.'
      },
      {
        key: 'og:description',
        name: 'og:description',
        content: 'Download this eBook today to learn how Yellowbrick Data can help the insurance industry improve time-to-insight.'
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'Download this eBook today to learn how Yellowbrick Data can help the insurance industry improve time-to-insight.'
      },
      {
        key: 'og:image',
        name: 'og:image',
        content: 'https://www.yellowbrick.com/uploads/ebook-insurance-thumb.png'
      },
      {
        key: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.yellowbrick.com/uploads/ebook-insurance-thumb.png'
      }
    ]
  },
  components: {
    GoCustomers,
    Layout
  }
};
</script>
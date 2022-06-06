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

.dk-bg .mktoForm .mktoFormRow .mktoLabel {
	color: #ffffff !important;
}


.float-form {
	@apply relative p-8 bg-gray-200 shadow-lg;
	& .mktoForm {
    margin-top: .5rem !important;
    & .mktoFormRow {
      & label.mktoLabel {
        color: #edc124 !important;
      }
    }
  }
}
</style>

<template>
  <Layout>

    <section class="hero flex bg-gray-700 py-10 md:py-12 text-white px-6 xl:px-0">
      <div class="flex flex-col md:flex-row max-w-1200 w-full py-8 mx-auto relative z-10">
          
					<div class="w-full md:w-2/3 p-0 md:pr-16 text-gray-700 md:text-white">
            <h5 class="text-yellow1 mb-6 md:mb-2">Yellowbrick Whitepaper:</h5>
						<div class="bg-white md:bg-transparent p-6 md:p-0">
							<h1 class="p-0 pr-4">The Case for a New Cloud Native Data Warehouse</h1>
              <div class="float-none lg:float-right w-full xs:w-3/4 sm:mx-0 shadow-md sm:shadow-none lg:w-1/2 m-0 mb-8 lg:mb-0 lg:ml-10 lg:mb-12 lg:mt-3">
                <img src="/uploads/yb-cloud-native.png" class="w-3/4" alt="Get real-time insights from your data lake" />
              </div>
								<p class="rfs-text-lg">
                             Learn why cloud-native matters and how Yellowbrick has become the first data warehouse specifically engineered for modern cloud native architecture. Discover how we are leapfrogging the traditional, outdated architectures of Snowflake, Amazon, Microsoft and Google.  Find out how we provide separate storage and compute, full elasticity, and the ways that we combined with the best features of enterprise-class data warehouses like support for high concurrency and workload management… all tightly integrated with Kubernetes running anywhere.  
                            </p>
       

              <h5 class="rfs-text-lg accent-heading mt-10 mb-0 pb-0">In this white paper, get more details on:</h5>
              <div class="flex flex-col md:flex-row">
                <ul class="rfs-text-base w-full mb-0 pb-0 md:mb-2 md:pb-2">
                <li>
                                  Why cloud-native matters and the requirements of a modern cloud-native data warehouse
                                </li>
                               <li>
                                   The 6 levels of data warehouse capability on separate storage and compute
                                </li>
                </ul>
                <ul class="rfs-text-base w-full pt-0 mt-0 md:mt-2 md:pt-2">
                             <li>
                          Full elasticity with Kubernetes-based architecture that runs across all public clouds
                                </li>
                               <li>
                            How Yellowbrick maintains predictable, low-cost and optimal performance
                                </li>
                </ul>
              </div>
						</div>
					</div>

					<div class="w-full md:w-1/3 ">
            <div class="float-form">
              <h3 class="text-gray-700">Download today</h3>
              <BaseHubspot id="e4f1ed94-ee46-4fb4-b818-58a87285aecd" sfid="7011G000000KdK7QAK" />
            </div>
					</div>
				</div>
		</section>

		<!-- <section class="bg-white py-8 pb-12 pt-0 z-10 px-6 xl:px-0"> -->
      <section class="bg-white py-16 px-6 xl:px-0">

			<div class=" max-w-1200 w-full mx-auto relative">
      <!--  <span class="accent"></span>
        <h2 class="accent-heading rfs-text-sm font-light mb-0"></h2>
        <div class="flex flex-col md:flex-row -mx-8 pt-0 mt-0">
          <div class="w-full md:w-5/12 bg-white md:bg-transparent px-8">
            <p class="rfs-text-lg">Data Lakes are effective low-cost repositories for vast amounts of data. But when it comes to delivering business insights, data lakes are slow and provide unreliable analytics at scale.</p>
            <p class="rfs-text-lg">Are you or your business users struggling with getting insights quickly from your data lake? Learn how you can save hours of wasted time digging into your data lake with Yellowbrick.</p>
            
          </div>

          <div class="w-full md:w-1/2 bg-white md:bg-transparent px-8">
          <p class="rfs-text-lg">In this ebook you will learn:</p>
            <ul class="rfs-text-lg mt-0 pt-0">
              <li>The current challenges and limitations with data lakes</li>
              <li>The problems with traditional options for fixing data lake challenges and how to solve them</li>
              <li>How you can use a modern data warehouse to extract real-time and historical data</li>
              <li>How a financial services firm queried results for 1,000s of users 10x faster than before</li>
            </ul>
          </div>
			</div> -->
      <h2 class="text-center max-w-1000 mx-auto font-normal italic">“Our Yellowbrick system has made our analytics team a lot more productive. These are power users doing deep and complex analytics—using tools like SAS, R, and Python to query three years of point-of-sale data.”<br><i class="rfs-text-xl">– Aaron Augustine, Executive Director, Data Science, Catalina Marketing</i></h2>
				<!-- <div class="flex flex-row flex-wrap -mx-8 p-8">
					<div class="flex w-full xs:w-1/2 md:w-1/3 lg:w-1/4 p-6 sm:px-4 md:px-8"><img src="/uploads/images/customers/symphony.svg" alt="Symphony Logo" class="w-3/4 mx-auto xs:w-full sm:w-3/4 self-start" /></div>
					<div class="flex w-full xs:w-1/2 md:w-1/3 lg:w-1/4 p-6 sm:px-4 md:px-8"><img src="/uploads/images/customers/lexisnexis.svg" alt="LexisNexis Logo" class="w-3/4 mx-auto xs:w-full sm:w-3/4 self-start" /></div>
					<div class="flex w-full xs:w-1/2 md:w-1/3 lg:w-1/4 p-6 sm:px-4 md:px-8"><img src="/uploads/images/customers/sf-express.svg" alt="SF Express Logo" class="w-3/4 mx-auto xs:w-full sm:w-3/4 self-start" /></div>
					<div class="flex w-full xs:w-1/2 md:w-1/3 lg:w-1/4 p-6 sm:px-4 md:px-8"><img src="/uploads/images/customers/alliance.svg" alt="Alliance Logo" class="w-3/4 mx-auto xs:w-full sm:w-3/4 self-start" /></div>
					<div class="flex w-full xs:w-1/2 md:w-1/3 lg:w-1/4 p-6 sm:px-4 md:px-8"><img src="/uploads/images/customers/allscripts.svg" alt="AllScripts Logo" class="w-3/4 mx-auto xs:w-full sm:w-3/4 self-start" /></div>
					<div class="flex w-full xs:w-1/2 md:w-1/3 lg:w-1/4 p-6 sm:px-4 md:px-8"><img src="/uploads/images/customers/clarity.svg" alt="Clarity Logo" class="w-3/4 mx-auto xs:w-full sm:w-3/4 self-start" /></div>
					<div class="flex w-full xs:w-1/2 md:w-1/3 lg:w-1/4 p-6 sm:px-4 md:px-8"><img src="/uploads/images/customers/melco.svg" alt="Melco Logo" class="w-3/4 mx-auto xs:w-full sm:w-3/4 self-start" /></div>
					<div class="flex w-full xs:w-1/2 md:w-1/3 lg:w-1/4 p-6 sm:px-4 md:px-8"><img src="/uploads/images/customers/teoco.svg" alt="Teoco Logo" class="w-3/4 mx-auto xs:w-full sm:w-3/4 self-start" /></div>
				</div> -->

        </div>
		</section>

    				

  </Layout>
</template>

<script>

import BaseHubspot from '~/components/BaseHubspot.vue';
import Layout from '~/layouts/Landing.vue';

export default {
  metaInfo: {
    title: 'The Case for a New Cloud Native Data Warehouse - Whitepaper - Yellowbrick Data',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'Learn about how the history of data warehouses and how Yellowbrick was re-engineered to be truly cloud-native and why your business needs a cloud-native data warehouse.'
      },
      {
        key: 'og:description',
        name: 'og:description',
        content: 'Learn about how the history of data warehouses and how Yellowbrick was re-engineered to be truly cloud-native and why your business needs a cloud-native data warehouse.'
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'Learn about how the history of data warehouses and how Yellowbrick was re-engineered to be truly cloud-native and why your business needs a cloud-native data warehouse.'
      },
      {
        key: 'og:title',
        name: 'og:title',
        content: 'The Case for a New Cloud Native Data Warehouse - Whitepaper - Yellowbrick Data'
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'The Case for a New Cloud Native Data Warehouse - Whitepaper - Yellowbrick Data'
      },
      {
        key: 'og:image',
        name: 'og:image',
        content: 'https://www.yellowbrick.com/uploads/ebook-data-lake-thumb.png'
      },
      {
        key: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.yellowbrick.com/uploads/ebook-data-lake-thumb.png'
      }
    ]
  },
  components: {
    BaseHubspot,
    Layout
  }
};
</script>
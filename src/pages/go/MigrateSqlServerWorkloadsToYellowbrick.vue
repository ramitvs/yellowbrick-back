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
    <!-- <section class="hero-half bg-gray-700 pt-20 pb-8 text-white px-6 xl:px-0">
      <div class="flex flex-col md:flex-row max-w-1200 w-full py-8 mx-auto relative z-10">
          
					<div class="w-full md:w-7/12 p-0 md:pr-16 text-gray-700 md:text-white">
            <h5 class="text-yellow1 mb-6 md:mb-2">Featured eBook:</h5>
							<h1 class="p-0 text-white mb-0 leading-none">Turbocharge Your Data Lake</h1>
              <h2 class="rfs-text-3xl font-light text-white">Deliver Real-Time Insights at Scale</h2>
              <img src="/uploads/fTyBr/ebook-data-lake-cover.jpg" class="shadow-lg mt-8" alt="Data Lake eBook" />
					</div>

					<div class="w-full md:w-1/3 ">
            <div class="float-form">
              <h3 class="text-gray-700">Download today</h3>
              <BaseHubspot id="1706" class="text-white"/>
            </div>
					</div>
				</div>
          
      </div>
		</section> -->

    <section class="hero flex bg-gray-700 py-10 md:py-12 text-white px-6 xl:px-0">
      <div class="flex flex-col md:flex-row max-w-1200 w-full py-8 mx-auto relative z-10">
          
					<div class="w-full md:w-2/3 p-0 md:pr-16 text-gray-700 md:text-white">
            <h5 class="text-yellow1 mb-6 md:mb-2">Featured eBook:</h5>
						<div class="bg-white md:bg-transparent p-6 md:p-0">
							<h1 class="p-0">Migrate SQL Server Workloads to Yellowbrick for 100X Performance at a Fraction of the Cost</h1>
              <div class="float-none lg:float-right w-full xs:w-3/4 sm:mx-0 shadow-md sm:shadow-none lg:w-1/2 m-0 mb-8 lg:mb-0 lg:ml-10 lg:mb-12 lg:mt-3">
                <img src="/uploads/ebook-sql-server.jpg" class="w-full" alt="Migrate SQL Server Workloads to Yellowbrick" />
              </div>
							<p class="rfs-text-lg">Microsoft SQL Server may not make an ideal foundation for a world-class data analytics strategy. Deploying large numbers of SQL Server databases reduce agility and increases costs – making it hard to stay competitive</p>
							<p class="rfs-text-lg">Learn how Yellowbrick delivers a SQL Server database consolidation solution that is quick to deploy and easy to expand.</p>
              <!-- <p class="rfs-text-lg">Are you or your business users struggling with getting insights quickly from your data lake? Learn how you can save hours of wasted time digging into your data lake with Yellowbrick.</p> -->
              <h5 class="rfs-text-lg accent-heading mt-10 mb-0 pb-0">In this ebook you will learn:</h5>
              <div class="flex flex-col md:flex-row">
                <ul class="rfs-text-base w-full mb-0 pb-0 md:mb-2 md:pb-2">
                  <li>Some of the common SQL Server Pain Points</li>
                  <li>How to eliminate SQL Server analytics challenges </li>
                </ul>
                <ul class="rfs-text-base w-full pt-0 mt-0 md:mt-2 md:pt-2">
                  <li>How Yellowbrick helped one of the world’s largest casinos improve their cost efficiency.</li>
                </ul>
              </div>
						</div>
					</div>

					<div class="w-full md:w-1/3 ">
            <div class="float-form">
              <h3 class="text-gray-700">Download today</h3>
              <BaseHubspot id="be795c65-adf4-42c3-87b6-a53815cde9c4" sfid="7011G000000KRKIQA4" />
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
    title: 'Migrate SQL Server Workloads to Yellowbrick',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'Get the free eBook and learn how to migrate your SQL Server Workloads to Yellowbrick for 100x Performance at a Fraction of the Cost.'
      },
      {
        key: 'og:description',
        name: 'og:description',
        content: 'Get the free eBook and learn how to migrate your SQL Server Workloads to Yellowbrick for 100x Performance at a Fraction of the Cost.'
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'Get the free eBook and learn how to migrate your SQL Server Workloads to Yellowbrick for 100x Performance at a Fraction of the Cost.'
      },
      {
        key: 'og:title',
        name: 'og:title',
        content: 'Migrate SQL Server Workloads to Yellowbrick'
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'Migrate SQL Server Workloads to Yellowbrick'
      },
      {
        key: 'og:image',
        name: 'og:image',
        content: 'https://www.yellowbrick.com/uploads/ebook-sql-server.jpg'
      },
      {
        key: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.yellowbrick.com/uploads/ebook-sql-server.jpg'
      }
    ]
  },
  components: {
    GoCustomers,
    Layout
  }
};
</script>
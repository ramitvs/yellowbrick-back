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
            <h5 class="text-yellow1 mb-6 md:mb-2">451 Research: Market Insight Report Reprint</h5>
						<div class="bg-white md:bg-transparent p-6 md:p-0">
							<h1 class="p-0 pr-4">Yellowbrick adopts Kubernetes, adds control plane for data warehousing in the distributed cloud era</h1>
              <div class="float-none lg:float-left w-1/2 mx-auto sm:mx-0 shadow-md sm:shadow-none lg:w-1/3 m-0 mb-6 lg:mr-10 lg:mt-3">
                <img src="/uploads/yb-adopts-kubernetes-451-thumb.png" class="w-full" alt="Yellowbrick adopts Kubernetes, adds control plane for data warehousing in the distributed cloud era" />
              </div>
							<p class="rfs-text-lg">"Yellowbrick Data is seeing increasing customer demand for cloud-based adoption. That, along with a greater emphasis on performance from the cloud providers themselves, is helping to boost its case for hybrid and multi-cloud data warehousing." - Matt Aslett, 451 Research</p>
              <p class="rfs-text-lg">Download the full report to learn more!</p>
						</div>
					</div>

					<div class="w-full md:w-1/3 ">
            <div class="float-form">
              <h3 class="text-gray-700">Download today</h3>
              <BaseHubspot id="10056854-ec45-4c45-b5c9-2902832e37b8" sfid="7011G000000KYTWQA4" />
            </div>
					</div>
				</div>
		</section>

		<GoCustomers />

  </Layout>
</template>

<script>

import BaseHubspot from '~/components/BaseHubspot.vue';
import GoCustomers from "~/components/GoCustomers.vue";
import Layout from '~/layouts/Landing.vue';

export default {
  metaInfo: {
    title: '451 Report: Yellowbrick Adopts Kubernetes - Yellowbrick Data Warehouse',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'Yellowbrick adopts Kubernetes and adds control plane for data warehousing in the distributed cloud era. Download the free report to learn more.'
      },
      {
        key: 'og:description',
        name: 'og:description',
        content: 'Yellowbrick adopts Kubernetes and adds control plane for data warehousing in the distributed cloud era. Download the free report to learn more.'
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'Yellowbrick adopts Kubernetes and adds control plane for data warehousing in the distributed cloud era. Download the free report to learn more.'
      },
      {
        key: 'og:title',
        name: 'og:title',
        content: '451 Report: Yellowbrick Adopts Kubernetes - Yellowbrick Data Warehouse'
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: '451 Report: Yellowbrick Adopts Kubernetes - Yellowbrick Data Warehouse'
      },
      {
        key: 'og:image',
        name: 'og:image',
        content: 'https://www.yellowbrick.com/uploads/yb-adopts-kubernetes-451-thumb.png'
      },
      {
        key: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.yellowbrick.com/uploads/yb-adopts-kubernetes-451-thumb.png'
      }
    ]
  },
  components: {
    BaseHubspot,
    GoCustomers,
    Layout
  }
};
</script>
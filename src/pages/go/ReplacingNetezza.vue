<style scoped>
@media (max-width: 500px) {
 .checkmark::before { 
    left: 20px !important;
    }
}
.heading_form {
    font-size: 26px;
}
.whitebg {
    background: #fff;
    color: #000;
}
    @supports (-webkit-touch-callout: none) {
        .checkmark::before {
            top: 20px !important;
        }

        .checkmark::before {
            left: 38px !important;
        }

        span.tabletext {
            margin-top: 33px !important;
        }
    }
.greybg {
    background: #e3e3e6;
    color: #000;
}
.checkmark::before {
    border-style: solid;
    border-color: #00C3CD;
    -o-border-image: none;
    border-image: none;
    -o-border-image: initial;
    border-image: initial;
    border-width: 0px 2px 2px 0px;
    content: '';
    height: 13px;
    left: 54px ;
    position: absolute;
    top: -9px;
    width: 8px;
    transform: rotate(45deg);
    text-align: center !important;
}
.replacingtable th, td {
    border: 1px solid grey;
    padding: 10px 10px 10px 18px;
}
.replacingtable {
    margin-bottom: 30px;
}
.replacingtable th {
    background: #cbd5e0;
    color: #000;
    text-align: left;
}
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
							<h1 class="p-0">Replacing Netezza</h1>
              <div class="float-none lg:float-right w-full xs:w-3/4 sm:mx-0 shadow-md sm:shadow-none lg:w-1/2 m-0 mb-8 lg:ml-10 lg:mb-12 lg:mt-3">
                <img alt="replacement for Netezza" title="replacement for Netezza" src="/uploads/ebook-netezza.jpg" class="w-full"  />
              </div>
							<p class="rfs-text-lg">In 2003, Netezza introduced the first data warehouse appliance designed for the rapid analysis of large amounts of data. Initially, the large-scale solution was a significant improvement in terms of data analysis performance compared to more general-purpose databases. Yet Netezza didn’t keep up with innovations in hardware and software and didn’t make the leap to the cloud. After acquiring Netezza IBM tried unsuccessfully to fold Netezza into its suite of data products, eventually announcing End of Service or End of Life for April 2023.</p>
              <p class="rfs-text-lg">Yellowbrick’s hybrid cloud data warehouse is an <b>optimal replacement for Netezza</b> users, meeting or exceeding the Netezza experience in many areas. Its simplified deployment and seamless integration make Yellowbrick easy and fast to deploy.</p>
			  
  <table class="table-auto replacingtable">
  <thead>
    <tr>
      <th>Optimal for Netezza</th>
      <th>Similar to Netezza</th>
      <th>Better than Netezza</th>
    </tr>
  </thead>
  <tbody>
    <tr class="whitebg">
      <td>PostgreSQL compatibility</td>
      <td><span class="checkmark"></span></td>
      <td></td>
    </tr>
     <tr class="greybg">
      <td>Support for stored procedures</td>
      <td><span class="checkmark"></span></td>
      <td></td>
    </tr>
     <tr class="whitebg">
      <td>On-premises, off-premises, and cloud</td>
      <td></td>
      <td><span class="checkmark"></span></td>
      
    </tr>
     <tr class="greybg">
      <td>Peak performance in a small footprint </td>
      <td></td>
      <td><span class="checkmark"></span></td>      
    </tr>
     <tr class="whitebg">
      <td>Workload management</td>
      <td></td>
      <td><span class="checkmark"></span></td>      
    </tr>
     <tr class="greybg">
      <td>Utilities </td>
      <td></td>
      <td><span class="checkmark"></span></td>
      
    </tr>
     <tr class="whitebg">
      <td>Fast, simple installation</td>
      <td></td>
      <td><span class="checkmark"></span></td>      
    </tr>
     <tr class="greybg">
      <td>Real-time data ingest</td>
      <td></td>
      <td><span class="checkmark"></span></td>      
    </tr>
  </tbody>
</table>
        
        
        
        
        
        <p class="rfs-text-lg">Download this eBook if you are looking for an easy, reliable way to upgrade to a high-performing system.</p>
              <h5 class="rfs-text-lg accent-heading mt-10 mb-0 pb-0">In this ebook you will learn:</h5>
              <div class="flex flex-col md:flex-row">
                <ul class="rfs-text-base w-full mb-0 pb-0 md:mb-2 md:pb-2">
                  <li>The pain points and critical problems Netezza users face</li>
                  <li>Why Yellowbrick is the clear <a href="/press-releases/yellowbrick-data-kicks-off-netezza-countdown-campaign/"><b>replacement for Netezza</b></a></li>
                </ul>
                <ul class="rfs-text-base w-full pt-0 mt-0 md:mt-2 md:pt-2">
                  <li>How a Top 3 mobile company transformed its business with the upgrade to Yellowbrick </li>
                </ul>
              </div>

						</div>
					</div>

					<div class="w-full md:w-1/3 ">
            <div class="float-form md:w-3/4">
              <h3 class="text-gray-700 heading_form">Download the eBook </h3>
              <BaseHubspot id="5e1bd485-7681-4c10-9ab9-e54d01c946d4" sfid="7011G000000UvDQQA0" />
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
        title: '﻿eBook: Replacing Netezza - Yellowbrick Data',
    meta: [
      {
        key: 'description',
        name: 'description',
            content: '﻿IBM Netezza Performance Server for Data is an advanced data warehouse and analytics platform available both on premises and on cloud.'
      },
      {
        key: 'og:description',
        name: 'og:description',
          content: '﻿IBM Netezza Performance Server for Data is an advanced data warehouse and analytics platform available both on premises and on cloud.'
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
          content: '﻿IBM Netezza Performance Server for Data is an advanced data warehouse and analytics platform available both on premises and on cloud.'
      },
      {
        key: 'og:title',
        name: 'og:title',
          content: '﻿eBook: Replacing Netezza - Yellowbrick Data'
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
          content: '﻿eBook: Replacing Netezza - Yellowbrick Data'
      },
      {
        key: 'og:image',
        name: 'og:image',
        content: 'https://www.yellowbrick.com/uploads/ebook-netezza-thumb.jpg'
      },
      {
        key: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.yellowbrick.com/uploads/ebook-netezza-thumb.jpg'
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

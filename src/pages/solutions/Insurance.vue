<style scoped>
  .hero {
    background-image: url(/uploads/images/tall-bg.svg);
    background-size: cover;
    background-position: center;
  }

  .embellish-bg {
    background-image: url(/uploads/images/predictability-bg.svg);
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: 30%;
  }
  .accent{
    background-color:#00C3CD !important;
  }
  .multi-column {
    column-count: 1;
    column-gap: 0;
  }

  @media (min-width: 768px) {
    .ins-desc {
      flex-grow: 1;
    }

    .ins-img {
      height: 245px;
    }

    .ins-img>img {
      margin: auto 0;
    }

    .multi-column {
      column-count: 2;
      column-gap: 2.5rem;
    }
  }

  .break-plane {
    top: -3rem;
    z-index: 40;
  }

  .stroke-main {
    stroke: #4b5458;
    stroke-width: 3px;
  }

  .stroke-accent {
    stroke: #fecf41;
    stroke-width: 2.5px;
  }

  .active {
    display: none;
  }

  .gate-form {
    min-height: 300px;
  }

  .expand-enter-active,
  .expand-leave-active {
    transition-property: opacity, height;
  }

  .expand-enter,
  .expand-leave-to {
    opacity: 0;
  }
  .ins-para-1{
    min-height: 220px;
  }
  
  
</style>

<template>
  <Layout>

    <section class="hero flex bg-gray-700 py-12 md:py-24 text-white px-6 xl:px-0 ">
      <div class="flex flex-col max-w-1200 w-full mx-auto z-10">
        <div class="w-full md:w-1/2">
          <span class="rfs-text-xl text-yellow1 mb-0">Industry Solutions:</span>
          <h1 class="rfs-text-6xl">Yellowbrick for Insurance Companies </h1>
          <p class="rfs-text-lg">Yellowbrick Data Warehouse gives insurers a sharpened competitive edge by reducing risk, improving compliance, and increasing efficiency</p>
        </div>
      </div>
    </section>
    <section class="flex py-12 md:py-16 bg-white px-6 xl:px-0" style="margin-bottom: 100px;">
      <div class="flex flex-col items-start max-w-1200 mx-auto">

        <div class="w-full">
          <h6 class="accent-heading mb-0">Customer Story:</h6>
          <div class="flex flex-col md:flex-row">
            <div class="w-full md:w-7/12">
              <h4>Top 3 Global Insurance Company</h4>
              <p>One of the biggest insurance companies in the world selected Yellowbrick over Greenplum and others to help it hit IFRS 17 compliance targets, enabling complex and high-performance analytics on billions of rows of data, full data
                consistency, and 24/7 availability.</p>
              <g-link to="/resources/case-studies/top-global-insurance-company/" class="button yellow mr-4">Read Case Study</g-link>
              <g-link to="/customers/" class="button outline">See Other Customer Stories</g-link>
            </div>
            <div class="flex w-full items-center md:w-5/12">
              <img src="/uploads/customers/insurance-tight.svg" alt="Top 3 Global Insurance Company logo" class="w-full sm:w-3/4 mx-auto" />
            </div>
          </div>
        </div>

        <div class="flex flex-col md:flex-row -mx-3 mt-8">

          <div class="flex w-1/3 p-3">
            <div class="p-6 bg-gray-500 text-white shadow-md">
              <h5 class="rfs-text-3xl font-semibold text-yellow1 leading-none m-0 mb-3">Comprehensive Policy Analysis from Days to Hours</h5>
              <p>A full-cost analysis of all policies across multiple lines of business that took 2 days now takes less than 2 hours with Yellowbrick.</p>
            </div>
          </div>

          <div class="flex w-1/3 p-3">
            <div class="p-6 bg-gray-500 text-white shadow-md">
              <h5 class="rfs-text-3xl font-semibold text-yellow1 leading-none m-0 mb-3">More Accurate Underwriting Across Multiple Months</h5>
              <p>Insurance underwriting analysis is now more accurate for hundreds of concurrent users because much more historical data can be processed than previously.</p>
            </div>
          </div>

          <div class="flex w-1/3 p-3">
            <div class="p-6 bg-gray-500 text-white shadow-md">
              <h5 class="rfs-text-3xl font-semibold text-yellow1 leading-none m-0 mb-3">Compliance Goals Hit Ahead of Schedule</h5>
              <p>The company will be the first insurer in its country running IFRS 17-compliant systems.</p>
            </div>
          </div>

          <!-- <div class="flex flex-row w-1/4 p-3">
            <div class="flex bg-gray-500 p-6 shadow-md">
              <h5 class="text-7xl border-4 border-white self-center text-white rounded-full p-10 w-48 h-48 align-middle text-center mx-auto">+</h5>
            </div>
          </div> -->

        </div>

      </div>
    </section>
    <section class="flex pb-8 bg-gray-100 px-6 xl:px-0">
      
      <div class="flex flex-col justify-center max-w-1200 mx-auto">
        <div class="break-plane p-10 bg-white shadow-lg relative">
          <span class="accent"></span>
          <h3 class="text-gray-500 mb-8">In Insurance, Choosing the Wrong Data Warehouse Platform is a Big Risk</h3>
          <div class="text-gray-500 w-full">
            <p class="rfs-text-lg">Consider a few of the most critical types of analysis insurance companies need to run: Exposure. Risk/loss. Modeled losses. Portfolio rollups. EP curves. Policy limit aggregation. These companies need be able to do
              these analyses and others quickly and accurately, using detailed data that covers long time periods. Doing so enables revenue growth, improved efficiency, easier compliance, and more-competitive offerings. But even after investing
              considerable resources and time in data warehouse systems (and possibly Apache Hadoop as well), many insurance companies find themselves behind where they want to be, and they risk falling farther behind.</p>

            <p class="rfs-text-lg">The Yellowbrick Data Warehouse is ideal for addressing the data analysis complexities and speed the insurance industry requires. It allows organizations to build a real-time, standards-based analytics platform that
              leverages existing tools, models, and investments in the cloud or on-premises, while providing breakthrough price/performance and flexibility far beyond what legacy platforms like IBM Netezza and Teradata, or cloud-only options like
              Snowflake, can provide. The result? Workloads that complete sub-seconds instead of minutes, and that includes years of historical data instead of just months. That's a huge business advantage.</p>
          </div>
        </div>

      </div>
    </section>
        <section class="pb-0 bg-gray-100 px-6 xl:px-0" style="padding-top: 60px;">
         	<div class="max-w-1200 w-full mx-auto relative" style="margin-bottom: 80px;">
			<h2 class="accent-heading">On Demand Webinars</h2>
      </div>
      <div class="flex flex-col md:flex-row justify-center max-w-1200 mx-auto">
        <div class="break-plane w-full sm:w-1/2 flex flex-col sm:flex-row p-6 sm:p-10 shadow-lg relative embellish-bg ml-0 md:ml-4" style="background-color: white; ">
          <span class="accent"></span>
          <div class="flex flex-col w-full ">
            <a href="https://www.yellowbrick.com/go/transforming-insurance/">
            <img src="/uploads/yb-web01.png" alt="Data Warehouse Modernization Exec Brief" class="shadow-md" style="width: 100%;"/>
            </a>
            <br>
            <p class="ins-para-1">In this unique event, data analytics leaders discuss how a modern and fast analytics platform that can be deployed anywhere - in data centers, in public clouds, and eventually at the edge--can give insurance companies a sharpened competitive edge.</p>
            <a class="button yellow" href="https://www.yellowbrick.com/go/transforming-insurance/" target="_blank">Watch the Webinar</a>
          </div>

        </div>

        <div class="break-plane w-full sm:w-1/2 flex flex-col sm:flex-row p-6 sm:p-10 shadow-lg relative embellish-bg ml-0 md:ml-4" style="background-color: white;">
          <span class="accent"></span>
          <div class="flex flex-col w-full ">
              <a href="https://www.yellowbrick.com/go/achieving-real-time-analytics-for-insurance/">
            <img src="/uploads/yb-web02.png" alt="Data Warehouse Modernization Exec Brief" class="shadow-md" style="width: 100%;"/>
              </a>
            <br>
            <p class="ins-para-1">Watch the session to learn about a data warehouse that addresses the complexities and speed the insurance industry requires. You’ll discover how to build a real-time, standards-based analytics platform that leverages existing tools, models, and investments in both public and private clouds.</p>
            <a class="button yellow" href="https://www.yellowbrick.com/go/achieving-real-time-analytics-for-insurance/" target="_blank">Watch the Webinar</a>
          </div>

        </div>

      </div>
    </section>
    <section class="bg-white pb-20 pt-8 px-6 xl:px-0" style="margin-top: 70px;">
              	<div class="max-w-1200 w-full mx-auto relative">
			<h2 class="accent-heading">Additional Resources</h2>
      </div>
      <div class="mx-auto w-full max-w-1200">
        <div class="flex flex-row flex-wrap -mx-4 md:-mx-8">

          <!-- Yellowbrick for Insurance -->
          <div class="flex flex-col w-full md:w-1/2 lg:w-1/4 p-4 md:p-8">
            <div class="flex ins-img">
              <img src="/uploads/ebook-insurance-thumb.png" alt="" class="w-1/2 md:w-48 mr-6 border-4 border-white shadow-md self-start" />
            </div>
            <div class="flex flex-col ins-desc">
              <h6 class="text-gray-400 font-normal rfs-text-sm mb-0 mt-0 pt-6">Featured eBook:</h6>
              <h5 class="mb-1">Yellowbrick for Insurance</h5>
              <p>100X Data Analytics Performance for Faster, Richer Results from Financial Data</p>
              <a href="/go/yellowbrick-for-insurance/" class="button yellow flex mt-auto ">Read Now</a>
            </div>
          </div>

          <!-- Modern analytics for the insurance industry -->
          <div class="flex flex-col w-full md:w-1/2 lg:w-1/4 p-4 md:p-8">
            <div class="flex ins-img">
              <img src="/uploads/thumb-partner-brief-systech-insurance.png" alt="" class="w-1/2 md:w-48 mr-6 border-4 border-white shadow-md self-start" />
            </div>
            <div class="flex flex-col ins-desc">
              <h6 class="text-gray-400 font-normal rfs-text-sm mb-0 mt-0 pt-6">Solution Brief:</h6>
              <h5 class="mb-1">Modern analytics for the insurance industry</h5>
              <p>100X performance on real-time and at-rest data for thousands of users, at a fraction of the cost of alternatives.</p>
              <a id="systech-insurance-partner-brief" href="/uploads/BRIEF-Insurance-Analytics-Systech-Yellowbrick.pdf" alt="Yellowbrick Insurance Analytics" class="button yellow flex mt-auto ungated-asset">Read Now</a>
            </div>
          </div>

          <!-- Real-time data analytics for the insurance industry -->
          <div class="flex flex-col w-full md:w-1/2 lg:w-1/4 p-4 md:p-8">
            <div class="flex ins-img">
              <img src="/uploads/insurance-industry-brief-thumbnail.png" alt="" class="w-1/2 md:w-48 mr-6 border-4 border-white shadow-md self-start" />
            </div>
            <div class="flex flex-col ins-desc">
              <h6 class="text-gray-400 font-normal rfs-text-sm mb-0 mt-0 pt-6">Brief:</h6>
              <h5 class="mb-1">Real-time data analytics for the insurance industry</h5>
              <p>Learn how to save millions by removing risk, building complete customer views, and slashing underwriting time.</p>
              <a href="/uploads/BRIEF_Yellowbrick_Insurance_Analytics.pdf" alt="Yellowbrick Insurance Analytics" class="button yellow flex mt-auto ">Read Now</a>
            </div>
          </div>

          <!-- Achieving True Customer 360 in Insurance -->
          <div class="flex flex-col w-full md:w-1/2 lg:w-1/4 p-4 md:p-8">
            <div class="flex ins-img">
              <img src="/uploads/customer-360-insurance-thumb.jpg" alt="" class="w-1/2 md:w-48 mr-6 shadow-md border-4 border-white self-start" />
            </div>
            <div class="flex flex-col ins-desc">
              <h6 class="text-gray-400 font-normal rfs-text-sm mb-0 mt-0 pt-6">Brief:</h6>
              <h5 class="mb-1">Achieving True Customer 360 in Insurance</h5>
              <p>Achieving a “360-degree view” of the customer journey is important to remain competitive.</p>
              <a href="https://ww2.yellowbrick.com/hubfs/Briefs/YB_Brief_Customer360Insurance.pdf" class="button yellow flex mt-auto ungated asset " id="customer-360-insurance-brief">Read Now</a>
            </div>
          </div>

          <!-- Product Overview Yellowbrick for Insurance Analytics -->
          <div class="flex flex-col w-full md:w-1/2 lg:w-1/4 p-4 md:p-8">
            <div class="flex ins-img">
              <img src="/uploads/thumb-data-sheet-insurance-analytics.png" alt="" class="w-1/2 md:w-48 mr-6 shadow-md border-4 border-white self-start" />
            </div>
            <div class="flex flex-col ins-desc">
              <h6 class="text-gray-400 font-normal rfs-text-sm mb-0 mt-0 pt-6">Data Sheet:</h6>
              <h5 class="mb-1">Product Overview Yellowbrick for Insurance Analytics</h5>
              <p>Learn why Yellowbrick is best choice for data warehouse modernization, BI acceleration, or data lake augmentation projects in insurance companies.</p>
              <a id="insurance-analytics-data-sheet" href="/uploads/DS-Yellowbrick-for-Insurance.pdf" class="button yellow flex mt-auto ungated asset">Read Now</a>
            </div>
          </div>

          <div class="flex flex-col w-full md:w-1/2 lg:w-1/4 p-4 md:p-8">
            <div class="flex ins-img">
              <img src="/uploads/thumb-whitepaper-systech-insurance-360.png" alt="" class="w-1/2 md:w-48 mr-6 shadow-md border-4 border-white self-start" />
            </div>
            <div class="flex flex-col ins-desc">
              <h6 class="text-gray-400 font-normal rfs-text-sm mb-0 mt-0 pt-6">Industry Whitepaper:</h6>
              <h5 class="mb-1">Insurance customer 360° on a distributed cloud architecture</h5>
              <p>Read about four use cases of insurance customer 360 analytics and how insights can be applied to deliver a better customer experience and drive targeted activities to optimize profits.</p>
              <a href="/go/insurance-customer-360" class="button yellow flex mt-auto ungated asset">Read Now</a>
            </div>
          </div>

        </div>
      </div>
    </section>
    <MoreInfo />
  </Layout>
</template>

<script>
  import MoreInfo from '~/components/MoreInfo.vue'
  import TransitionExpand from '~/components/TransitionExpand.vue'

  export default {
    metaInfo: {
      title: 'Insurance Data Warehouse Solutions - Yellowbrick Data',
      meta: [{
          key: 'description',
          name: 'description',
          content: 'Choose the Insurance Data Warehouse that provides breakthrough price/performance and flexibility while processing workloads in sub-seconds instead of minutes.'
        },
        {
          key: 'og:description',
          name: "og:description",
          content: 'Yellowbrick Hybrid Cloud Data Warehouse gives insurers and re-insurers a sharpened competitive edge with real-time speed, petabyte scale, and industry-leading deployment flexibility.'
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: 'Yellowbrick Hybrid Cloud Data Warehouse gives insurers and re-insurers a sharpened competitive edge with real-time speed, petabyte scale, and industry-leading deployment flexibility.'
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: 'Yellowbrick Insurance Industry Solutions'
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: 'Yellowbrick Insurance Industry Solutions'
        }
      ]
    },
    components: {
      MoreInfo,
      TransitionExpand
    },
    data() {
      return {
        expanded: false,
      };
    }

  }
</script>
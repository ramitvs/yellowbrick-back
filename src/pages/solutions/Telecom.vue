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

.multi-column {
  column-count: 1;
  column-gap: 0;
}
@media (max-width: 1000px) {
  .wistia_responsive_padding{
    margin-top: 80px;
  }
}
.adjvideo{
 width: 72.5%; margin-left: 6px; margin-top: 60px;
}

@media (max-width: 768px) {
  .imageadj{
  padding-top: 0px !important;

}
.teoco-img img{
  text-align: center;
  width: 80% !important;
  
}
.adjvideo{
 width: 100%; margin-left: 0px; margin-top: 40px;
}
.wistia_responsive_padding{
  width: 100% !important;
  margin-top: -30px !important;
}
.adjwrapper{
  display: flex;
  flex-direction: column !important;
}
.-mx-3{
  margin-left: 10px;
}
.adjmain{
    min-height: 260px !important;
    max-height: 260px !important;
    margin-left: 30px;
}
  .px-6 {
    padding-left: 0rem;
    padding-right: 1.5rem;
}
  .cs-bx-wrapper{
    flex-direction: column !important; 
 
  }
  .cs-bx-1{
   margin-bottom: 30px;
  }
}
@media (min-width: 768px) {
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
.cs-bx-1{
  min-height: 335px;
  max-height: 335px;
  background-color: #172126;
  width: 365px;
  margin-right: 20px;
  margin-left: 20px;
  justify-content: center !important;
  color: white;
  display: flex;
 text-align: center;
}
.cs-bx-wrapper{
  justify-content: center !important;
  display: flex !important;
  align-items: flex-start;
  width: 100%;
}
.cs-bx-bl{
  color: #3bcbd8 !important;
  font-size: 42px;
  font-weight: bold;
}
.cs-bx-1 img{
  min-height: 160px;
  max-height: 160px;
  width: 160px;

  display: block;
  margin: 0 auto;

}
.cs-bx-1 p {
  font-weight: 600;
   font-size: 24px;
   padding-left: 10px;
   padding-right: 10px;
}
.teoco-img img{
  width: 50%;
  margin-left: -4px;
}
.imageadj{
  padding-top: -400px;

}
.adjmain{

  min-height: 550px;
  max-height: 550px;
}
</style>

<template>
  <Layout>

    <section class="hero flex bg-gray-700 py-12 md:py-24 text-white px-6 xl:px-0">
      <div class="flex flex-col max-w-1200 w-full mx-auto z-10">
        <div class="w-full md:w-1/2">
          <span class="rfs-text-xl text-yellow1 mb-0">Industry Solutions:</span>
          <h1 class="rfs-text-6xl">Yellowbrick for Telecom</h1>
          <p class="rfs-text-lg">The world’s fastest data warehouse for hybrid and multi-cloud environments gives telecommunication companies a sharpened competitive edge (especially when preparing for 5G) with real-time speed, petabyte scale, and industry-leading deployment flexibility.</p>
        </div>
      </div>
    </section>
        <section class="flex py-12 md:py-16 bg-white px-6 xl:px-0">
      <div class="flex flex-col items-start max-w-1200 mx-auto">

        <div class="w-full">
          <h6 class="accent-heading mb-0">Customer Stories:</h6>
          <div class="flex flex-col md:flex-row">
            <div class="w-full md:w-7/12">
              <h4>Top 10 Telecom Company</h4>
              <p>One of the largest mobile operators in Latin America, and one of the top 10 operators in the world, provides telecommunications and value-added services to millions of mobile users and business customers. Yellowbrick helps it analyze billions of records of data daily, safeguarding millions in revenue that was at risk with a legacy Netezza system that was incapable of doing real-time reconciliation.</p>
              <!-- <g-link to="/uploads/cs-catalina.pdf" class="button yellow mb-0 md:mb-4 mr-0 md:mr-4">Read Case Study</g-link> -->
   
            </div>
            <div class="flex w-full items-center md:w-5/12">
            <img src="/uploads/customers/telecom-crop.svg" alt="Top 10 Telecom Company logo"  class="w-full sm:w-3/4 mx-auto"/>
            </div>

          </div>
        </div>
        
        <div class="w-full flex flex-row flex-wrap -mx-3 mt-8">

          <div class="flex flex-row flex-wrap w-full sm:w-1/2 p-3">
            <div class="p-6 bg-gray-600 text-white shadow-md">
              <h5 class="rfs-text-3xl font-semibold text-yellow1 leading-none m-0 mb-3">20X Performance</h5>
              <p>Analysts can run queries 20X faster on a 600TB database than with the legacy Netezza platform.</p>
            </div>
          </div>

          <div class="flex flex-row flex-wrap w-full sm:w-1/2 p-3">
            <div class="p-6 bg-gray-600 text-white shadow-md">
              <h5 class="rfs-text-3xl font-semibold text-yellow1 leading-none m-0 mb-3">8X More Data to Analyze Daily</h5>
              <p>1TB of new data can now be analyzed instantly on a daily basis, an 8X improvement.</p>
            </div>
          </div>

          <div class="flex flex-row flex-wrap w-full sm:w-1/2 p-3">          
            <div class="p-6 bg-gray-600 text-white shadow-md">
              <h5 class="rfs-text-3xl font-semibold text-yellow1 leading-none m-0 mb-3">Millions in Revenue Safeguarded</h5>
              <p>Yellowbrick has safeguarded millions per month that were at risk due to the inability to validate revenue and reconcile payments to SIM card retailers in real time. </p>
            </div>
          </div>

          <div class="flex flex-row flex-wrap w-full sm:w-1/2 p-3">          
            <div class="p-6 bg-gray-600 text-white shadow-md ">
              <h5 class="rfs-text-3xl font-semibold text-yellow1 leading-none m-0 mb-3">Millions in Data Center Savings</h5>
              <p>The operator replaced several racks of Netezza with a Yellowbrick system that takes only 10U of space in a single rack--saving several million dollars in data center costs per year.</p>
            </div>
          </div>
        <div class="flex flex-row  w-full adjwrapper" style="margin-left: 25px; margin-right: 20px; margin-top: 30 px;">


          <div class="flex sm:w-3/4 teoco-img" style="flex-direction: column; "> 
            <img src="/uploads\teoco-corporation-vector-logo.png" alt=""/>
            <p style="padding-right: 40px;">TEOCO (The Employee Owned Company) is a leading provider of analytics, assurance and optimization solutions to the Telecom industry. It has over 300 communication service providers (CSPs) and OEM customers to which it provides actionable intelligence about revenue assurance, network quality of service, and customer experience.</p>
            <p style="padding-right: 40px;">Watch the video and hear from TEOCO’s Chairman and CEO, Atul Jain, on how Yellowbrick has helped TEOCO gain actionable insights on large volumes of data. </p>
          </div>


        <div class="w-full mx-auto adjvideo" >
          <BaseWistia id="c8topc32v9" />
        </div>

        </div>

        </div>

      </div>

    </section>
    <section class="flex pb-8 px-6 xl:px-0 w-full" style="margin-bottom: 100px;">
      <div class="flex cs-bx-wrapper" >
        <div class="cs-bx-1 flex flex-col"  >
          <img src="https://www.yellowbrick.com/assets/img/tacometer.16b8ac55.svg"/>
          <h3 class="cs-bx-bl">100X Faster</h3>
            <p>Up to 100X faster queries <br>at 1/5th of the cost</p>
        </div>
        <div class="cs-bx-1 flex flex-col"  >
          <img src="https://www.yellowbrick.com/assets/img/cloud-computing.8bce5127.svg"/>
          <h3 class="cs-bx-bl">40 Billion</h3>
            <p>40 billion new rows ingested daily, with no impact on performance</p>
        </div>
        <div class="cs-bx-1 flex flex-col"  >
          <img src="https://www.yellowbrick.com/assets/img/db-money.b49c261e.svg"/>
          <h3 class="cs-bx-bl">$5 Million</h3>
            <p>$5M saved in data <br> center expenses <br></p>
        </div>
      </div>
        </section>
    <section class="flex pb-8 bg-gray-100 px-6 xl:px-0">
      <div class="flex flex-col justify-center max-w-1200 mx-auto">
        <div class="break-plane p-10 bg-white shadow-lg relative">
          <span class="accent"></span>
          <h3 class="text-gray-500 mb-8">In the Telecom Industry, Legacy and Cloud-only Options Fail to Answer the Call</h3>
          <div class="text-gray-500 w-full">
            <p class="rfs-text-lg">While most industries today rely on data and data analytics, perhaps none do that to the same level as telecommunications companies. From business support systems to network operations (including preparation for 5G) to customer care to marketing, telecom companies have a greater need than ever for fast, efficient, data analytics. But, unfortunately, neither aging legacy platforms like IBM Netezza and Teradata (or even Apache Hadoop), nor cloud-only options like Snowflake, offer the price/performance and flexibility they need.</p>

            <p class="rfs-text-lg">Whether the need is to optimize the customer experience, generate profitable business decisions from data trapped in of data lakes, or take full advantage of all the possibilities of new 5G networks, the Yellowbrick Data Warehouse delivers an unfair competitive advantage. Its highly scalable architecture delivers 100X performance at enterprise scale, enabling telecom companies to build a real-time, standards-based analytics platform that leverages existing tools, models, and investments in the cloud or on-premises, while providing breakthrough price/performance and flexibility far beyond what alternatives can provide.</p>

            <!-- <transition-expand>
              <div v-if="expanded">
                <p class="rfs-text-lg">...</p>
              </div>
            </transition-expand>

            <button @click="expanded = !expanded" class="button dark">
              {{ expanded ? `Read Less` : `Read More` }}
            </button> -->

          </div>
        </div>

      </div>
    </section>


    <section class="bg-white pb-32 pt-16 px-6 xl:px-0">
      <div class="mx-auto w-full max-w-1200">
        <div class="grid items-start md:items-end grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">

                   <div class="flex flex-row items-center lg:items-start lg:flex-col px-0 py-10 md:px-4 adjmain">
            <img src="/uploads/ebook-telecom-thumb.png" alt="" class="w-5/12 lg:w-2/3 shadow-md imageadj" />
            <div class="w-7/12 lg:w-full pl-5 lg:pl-0">
              <h6 class="text-gray-400 font-normal rfs-text-sm mb-0 lg:mt-6">Featured eBook:</h6>
          <h5 class="mb-6">Faster Insights for Telecommunications<br> Companies</h5>
              <a href="/go/yellowbrick-for-telecom/" class="button yellow">Read Now</a>
            </div>
          </div>


          <div class="flex flex-row items-center lg:items-start lg:flex-col px-0 py-10 md:px-4 adjmain">
            <img src="/uploads/Yellowbrick_ModernDataAnalyticsCover.png" alt="" class="w-5/12 lg:w-2/3 shadow-md" />
            <div class="w-7/12 lg:w-full pl-5 lg:pl-0">
              <h6 class="text-gray-400 font-normal rfs-text-sm mb-0 lg:mt-6">Webinar:</h6>
              <h5 class="mb-6">Modern Data Analytics<br> in Telecom</h5>
              <a href="/media/data-analytics-in-telecom/" class="button yellow">Watch Now</a>
            </div>
          </div>

          <div class="flex flex-row items-center lg:items-start lg:flex-col px-0 py-10 md:px-4 adjmain">
            <img src="/uploads/real-time-data-thumb.png" alt="" class="w-5/12 lg:w-2/3 shadow-md" />
            <div class="w-7/12 lg:w-full pl-5 lg:pl-0">
              <h6 class="text-gray-400 font-normal rfs-text-sm mb-0 lg:mt-6">Industry Brief:</h6>
              <h5 class="mb-6">Real-time data analytics for telecommunications</h5>
              <a href="/resources/briefs/telecom-analytics/" class="button yellow">Read Now</a>
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
import BaseWistiaTeoco from '~/components/BaseWistiaTeoco.vue'

export default {
  metaInfo: {
    title: 'Yellowbrick Telecom Industry Solutions',
    meta: [
      { 
        key: 'description',
        name: 'description',
        content: 'Yellowbrick Hybrid Cloud Data Warehouse gives telecommunication companies a sharpened competitive edge with real-time speed, petabyte scale, and industry-leading deployment flexibility.'
      },
      {
        key: 'og:description',
        name: "og:description",
        content: 'Yellowbrick Hybrid Cloud Data Warehouse gives telecommunication companies a sharpened competitive edge with real-time speed, petabyte scale, and industry-leading deployment flexibility.'
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'Yellowbrick Hybrid Cloud Data Warehouse gives telecommunication companies a sharpened competitive edge with real-time speed, petabyte scale, and industry-leading deployment flexibility.'
      },
      {
        key: 'og:title',
        name: 'og:title',
        content: 'Yellowbrick Telecom Industry Solutions'
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'Yellowbrick Telecom Industry Solutions'
      }
    ]
  },
  components: {
    MoreInfo,
    TransitionExpand,
    BaseWistiaTeoco
  },
  data() {
    return {
      expanded: false,
    };
  }

}
</script>

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

.enhance-bg {
  background-image: url(/uploads/images/predictability-bg.svg);
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 20%;
}

.multi-column {
  column-count: 1;
  column-gap: 0;
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

</style>

<template>
  <Layout>
    <section class="hero flex bg-gray-700 py-12 md:py-24 text-white px-6 xl:px-0">
      <div class="flex flex-col max-w-1200 w-full mx-auto z-10">
        <div class="w-full md:w-1/2">
          <span class="text-yellow1 rfs-text-2xl">Solutions:</span>
          <h1 class="rfs-text-6xl">Data Lake Augmentation for Hadoop, S3, and Azure</h1>
          <h3>Leave the unreliability, poor concurrency, and lackluster performance of data lake query engines like Impala and Hive behind.</h3>
        </div>
      </div>
    </section>    
    
    <section class="flex pb-8 bg-gray-100 px-6 xl:px-0">
      <div class="flex-1 justify-center max-w-1200 mx-auto">
        <div class="break-plane p-10 bg-white shadow-lg relative">
          <span class="accent"></span>
          <h2 class="text-gray-500 mb-8">Get value from your data lake like never before</h2>
          <div class="multi-column text-gray-500">
            <p class="rfs-text-lg">Enterprises have invested heavily in data lakes (whether based on Hadoop or cloud object stores), yet are often frustrated by the inability to get timely data-driven insights out of them using existing query engines like Hive, Impala, or Spark SQL.</p>
            <p class="rfs-text-lg">Instead, Yellowbrick augments the data lake with a modern, real-time enterprise analytics environment that is purpose-built for enabling analysts and data scientists to answer the hardest questions, accurately and within SLA windows, using their favorite tools.</p>
          </div>
          <!-- <div class="flex flex-col md:flex-row p-8">
            <img src="/uploads/cs-threatmetrix-thumb.jpg" alt="Data Lake Whitepaper" />
            <div class="ml-8">
              <h4>Unlocking the Value in Data Lakes with Hybrid Cloud Analytics</h4>
              <g-link class="button yellow">Access the Whitepaper</g-link>
            </div>
          </div> -->
        </div>
      </div>
    </section>
    
    <BiWeeklyBanner />

    <section class="flex py-12 md:py-16 bg-white px-6 xl:px-0">
      <div class="flex-1 justify-center max-w-1200 mx-auto">
        <h2 class="text-gray-500 mb-12">Only Yellowbrick lets you:</h2>

        <div class="flex flex-col sm:flex-row text-gray-500 -mx-6">
          <div class="w-full flex flex-col sm:flex-row flex-wrap mx-auto">

            <div class="flex flex-col md:flex-row relative mb-8 w-full md:w-1/2 px-6">
              <div class="w-1/2 sm:w-1/6">
                <img src="~@/assets/images/icons/new/data-eye.svg" alt="High-Value Data" class="w-full p-0 md:pr-2 mx-auto md:mx-0" />
              </div>
              <div class="w-full sm:w-5/6">
                <h3 class="text-gray-500">Get value from all your data, immediately</h3>
                <p class="">Yellowbrick lets you immediately query data in multiple formats, ingested from any data lake source at industry-leading volumes in bulk or as a stream. And it works seamlessly with common data integration tools such as Informatica, Talend, and Denodo.</p>
              </div>
            </div>

            <div class="flex flex-col md:flex-row relative mb-8 w-full md:w-1/2 px-6">
              <div class="w-1/2 sm:w-1/6">
                <img src="~@/assets/images/icons/new/speedometer.svg" alt="Lightning Fast Queries" class="w-full p-0 md:pr-2 mx-auto md:mx-0" />
              </div>
              <div class="w-full sm:w-5/6">
                <h3 class="text-gray-500">Enable thousands of analysts to run queries at lightning speed</h3>
                <p class="">Yellowbrick delivers unparalleled predictable performance (in milliseconds) — with orders of magnitude more speed than alternatives — for even the most complex SQL, all while servicing up to thousands of concurrent users.</p>
              </div>
            </div>

            <div class="flex flex-col md:flex-row relative mb-8 w-full md:w-1/2 px-6">
              <div class="w-1/2 sm:w-1/6">
                <img src="~@/assets/images/icons/new/magnify-data.svg" alt="Use Existing Analytics Tools" class="w-full p-0 md:pr-2 mx-auto md:mx-0" />
              </div>
              <div class="w-full sm:w-5/6">
                <h3 class="text-gray-500">Use investments in familiar data analytics tools</h3>
                <p class="">Yellowbrick works seamlessly with leading reporting, BI, and data science tools, including Tableau, SAS, Microsoft Power BI, MicroStrategy, Python, R, and more, supporting the use of existing applications.</p>
              </div>
            </div>

            <div class="flex flex-col md:flex-row relative mb-8 w-full md:w-1/2 px-6">
              <div class="w-1/2 sm:w-1/6">                
                <img src="~@/assets/images/icons/new/multi-use.svg" alt="Hybrid Cloud Flexibility" class="w-full p-0 md:pr-2 mx-auto md:mx-0" />
              </div>
              <div class="w-full sm:w-5/6">
                <h3 class="text-gray-500">Ensure flexibility through support for hybrid and multi-cloud</h3>
                <p class="">Unlike purely on-premises or cloud-native options, Yellowbrick lets you natively run mixed workloads wherever it makes the most economical sense: in on-premises data centers, private clouds, or any major public cloud platform. </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section class="flex py-16 bg-gray-600 px-6 xl:px-0 enhance-bg">
      <div class="flex-1 justify-center max-w-1000 mx-auto">
        <p class="accent-heading text-white rfs-text-4xl font-light mb-1">“Our Yellowbrick system has made our analytics team a lot more productive. These are power users doing deep and complex analytics—using tools like SAS, R, and Python to query three years of point-of-sale data.”</p>
        <p class="text-white rfs-text-lg text-right mb-0">– Aaron Augustine, Executive Director, Data Science, Catalina Marketing</p>
      </div>
    </section>

    <section class="bg-gray-100 pb-20 pt-8 px-6 xl:px-0">
      <div class="mx-auto w-full max-w-1200">
        <div class="flex flex-col sm:flex-row flex-wrap -mx-4 md:-mx-8">

          <div class="w-full sm:w-1/2 lg:w-1/3 p-4 md:p-8">
            <img src="/uploads/fTyBr/ebook-data-lake-thumb.jpg" class="h-48 shadow-md self-start" alt="Turbocharge Your Data Lake eBook" />
            <h6 class="text-gray-700 font-normal rfs-text-base mb-0 mt-6">eBook:</h6>
            <h5 class="mb-6 text-gray-500">Turbocharge Your Data Lake: Deliver Real-Time Insights at Scale</h5>
            <g-link to="/go/turbocharge-your-data-lake/" class="button yellow">Read now</g-link>
          </div>

          <div class="w-full sm:w-1/2 lg:w-1/3 p-4 md:p-8">
            <img src="/uploads/wp-unlock-value-in-data-lakes-thumb.jpg" alt="Unlocking the Value of Data Lakes with Hybrid Cloud Analytics - Brief" class="h-48 shadow-md self-start" />
            <h6 class="text-gray-700 font-normal rfs-text-base mb-0 mt-6">Brief:</h6>
            <h5 class="mb-6 text-gray-500">Unlocking the Value of Data Lakes with Hybrid Cloud Analytics</h5>
            <g-link to="/go/unlocking-the-value-of-data-lakes/" class="button yellow whitespace-no-wrap">Read now</g-link>
          </div>

          <div class="w-full sm:w-1/2 lg:w-1/3 p-4 md:p-8">
            <img src="/uploads/cs-top10-financial-services-thumb.jpg" alt="ThreatMetrix Case Study" class="h-48 shadow-md self-start" />
            <h6 class="text-gray-700 font-normal rfs-text-base mb-0 mt-6">Case Study:</h6>
            <h5 class="mb-6 text-gray-500">Dramatically Improved Performance of Critical Fraud-Detection</h5>
            <g-link to="/resources/case-studies/lexisnexis/" class="button yellow whitespace-no-wrap">Read now</g-link>
          </div>

          <div class="w-full sm:w-1/2 lg:w-1/3 p-4 md:p-8">
            <img src="/uploads/thumb-data-lake-augmentation.png" alt="Unlock Value in Your Data Lake" class="h-48 shadow-md self-start" />
            <h6 class="text-gray-700 font-normal rfs-text-base mb-0 mt-6">White Paper:</h6>
            <h5 class="mb-6 text-gray-500">Build a “data lakehouse” with Yellowbrick</h5>
            <a href="/resources/briefs/yellowbrick-data-lake-augmentation/" class="button yellow">Read now</a>
          </div>

        </div>
      </div>
    </section>

    <section class="flex py-8 md:py-16 bg-white px-6 xl:px-0">
      <div class="flex-1 justify-center max-w-1200 mx-auto">

        <div class="px-0 sm:px-10">
          <h4 class="accent-heading mb-6">The Yellowbrick Data Lake Solution</h4>
          <img src="/uploads/data-lake-augmentation-chart.jpg" alt="yellowbrick data lake diagram" class="w-full"/>
        </div>

      </div>
    </section>

    <MoreInfo />

  </Layout>
</template>

<script>
import MoreInfo from '~/components/MoreInfo.vue'
import BiWeeklyBanner from '~/components/BiWeeklyBanner.vue'

export default {
  metaInfo: {
    title: 'Hadoop, S3, and Azure Data Lake Augmentation | Yellowbrick Data',
    meta: [
      { 
        key: 'description',
        name: 'description',
        content: 'Yellowbrick is an innovative data analytics solution. Learn more about our data lake augmentation and how to get 100X performance without the headaches.'
      },
      {
        key: 'og:description',
        name: "og:description",
        content: 'Yellowbrick is an innovative data analytics solution. Learn more about our data lake augmentation and how to get 100X performance without the headaches.'
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'Yellowbrick is an innovative data analytics solution. Learn more about our data lake augmentation and how to get 100X performance without the headaches.'
      },
      {
        key: 'og:title',
        name: 'og:title',
        content: 'Hadoop, S3, and Azure Data Lake Augmentation | Yellowbrick Data'
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'Hadoop, S3, and Azure Data Lake Augmentation | Yellowbrick Data'
      }
    ]
  },
  components: {
    MoreInfo,
    BiWeeklyBanner
  }
}
</script>

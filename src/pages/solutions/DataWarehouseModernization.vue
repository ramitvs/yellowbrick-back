<style scoped>

.hero {
  background-image: url(/uploads/images/cloud-recovery-bg.svg);
  background-size: cover;
  background-position: center;
}

.performance-bg {
  background-image: url(/uploads/images/performance-bg.svg);
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 35%;
}

.enhance-bg {
  background-image: url(/uploads/images/performance-bg.svg);
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

.number {
  @apply absolute text-yellow1 rfs-text-7xl font-bold leading-none;
  top: -0.75rem;
  left: -3.5rem;
}

.break-plane {
  top: -3rem;
  z-index: 40;
}

.stroke-main {
  stroke: #1F292E;
  stroke-width: 3px;
}

.stroke-accent {
  stroke: #fecf41;
  stroke-width: 3px;
}

</style>

<template>
  <Layout>
    <section class="hero flex bg-gray-700 py-12 md:py-20 md:pb-32 text-white px-6 xl:px-0">
      <div class="flex flex-col max-w-1200 w-full mx-auto z-10">
        <div class="w-full md:w-1/2">
          <span class="text-yellow1 rfs-text-2xl">Solutions:</span>
          <h1 class="rfs-text-6xl leading-none">Data warehouse modernization</h1>
          <p class="rfs-text-2xl">Get price/performance, flexibility, and simplicity that IBM, Teradata, and Oracle can't match.</p>
        </div>
        <div class="w-full">
          <a href="/netezza/" class="button yellow mr-4 mb-4">Netezza replacement</a>
          <a href="/teradata/" class="button yellow mr-4 mb-4">Teradata migration</a>
          <a href="/sql-server-consolidation/" class="button yellow mr-4 mb-4">SQL Server consolidation</a>
        </div>
      </div>
    </section>

    <section class="flex pt-6 pb-8 bg-gray-100 px-6 xl:px-0">
      <div class="flex-1 justify-center max-w-1200 mx-auto">
      <h2 class="text-gray-500 mb-6">What is data warehouse modernization?</h2>
      <p class="rfs-text-lg">Data warehouse modernization helps businesses adapt to the modern business environment and enables businesses to meet strategic goals using data in an ever-changing data landscape. With the agility and flexibility of data warehouse modernization, users can quickly meet business requirements to stay competitive.</p>
      <ul>
        <li class="rfs-text-lg">A data warehouse can quickly become obsolete if it is not capable of supporting new data inputs. Modernizing your data warehouse in part means that your warehouse is constantly adding new data inputs as your company seeks new data source opportunities.</li>
        <li class="rfs-text-lg">Data is the lifeblood of a modern business. Without having the infrastructure in place to move with the data, it becomes difficult to create new business to stay compatible with market changes. Enable data warehouse modernization within your organization and take advantage of the continuously transforming data environment.</li>
      </ul>
      <h3 class="text-gray-500 mb-6">Data Warehouse Models</h3>
      <ul>
        <li class="rfs-text-lg">Are there different data warehouse models?
          <ul>
            <li class="rfs-text-lg">There are several different types of data warehouse models, including virtual warehouse, data mart, enterprise data warehouse, and an operational data store</li>
            <li class="rfs-text-lg">Virtual warehouse: a group of computer servers dedicated to carrying out queries by users, supporting various data warehouse needs</li>
            <li class="rfs-text-lg">Enterprise data warehouse: supports large amounts of historical data over an extended period of time, including a wide variety of data collections and sources</li>
            <li class="rfs-text-lg">Data mart: a focused stream or collection of data that is less than 100 terabytes, sometimes referred to as a subsidiary of a data warehouse</li>
            <li class="rfs-text-lg">Operational data store: supports data in real-time for operational use cases and is usually reported within a short period of data, but can be updated multiple times a day as needed</li>
          </ul>
        </li>
        <li class="rfs-text-lg">What is the kind of model Yellowbrick uses, and why is it better?</li>
          <ul>
            <li class="rfs-text-lg">Yellowbrick provides an innovative data warehousing platform for on-premises, hybrid, and multi-cloud deployments that eliminates the performance/scale limitations of legacy approaches. And, unlike other data warehouse providers, it’s designed to simplify operations to keep long-term costs under control.</li>
          </ul>
      </ul>
      </div>
    </section>

    <section class="flex pb-8 bg-gray-500 px-6 xl:px-0">
      <div class="flex-1 justify-center max-w-1200 mx-auto">
        <div class="break-plane p-10 bg-white shadow-lg relative">
          <span class="accent"></span>
          <h3 class="text-gray-500 mb-8">Get answers from more data faster, simplify operations, and deploy anywhere</h3>
          <div class="multi-column text-gray-500">
            <p class="rfs-text-lg">The status quo approach to data warehousing is out of step with the times: Many enterprises can’t take full advantage of powerful analytic and BI tools and skill sets because their legacy data warehouse is too inflexible, too expensive to scale, and too difficult to manage. And when real-time decisions are needed—those are insights you can’t afford to lose.</p>
            <p class="rfs-text-lg">Yellowbrick provides an innovative data warehousing platform for on-premises, hybrid, and multi-cloud deployments that eliminates the performance/scale limitations of legacy approaches. And, it’s designed to simplify operations to keep long-term costs under control.</p>
          </div>
        </div>
      </div>
    </section>

    <BiWeeklyBanner />

    <section class="flex py-12 md:py-16 bg-white px-6 xl:px-0">
      <div class="flex-1 justify-center max-w-1200 mx-auto">
        <h2 class="text-gray-500 mb-12">Only Yellowbrick lets you:</h2>

        <div class="flex flex-col sm:flex-row text-gray-500 -mx-6">
          <div class="w-full flex flex-col lg:flex-row flex-wrap mx-auto">

            <div class="flex flex-col sm:flex-row relative mb-8 w-full lg:w-1/2 px-6">
              <div class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6">
                <img src="~@/assets/images/icons/new/speedometer.svg" alt="Lightning Fast Queries" class="w-full pr-0 md:pr-2" />
              </div>
              <div class="w-full sm:w-2/3 md:w-3/4 lg:w-5/6">
                <h4 class="text-gray-500">Enable thousands of analysts to run queries at lightning speed</h4>
                <p class="">Yellowbrick delivers unparalleled predictable performance on petabytes of data — with orders of magnitude more speed than alternative resources — for even the most complex and mixed SQL workloads, all while servicing thousands of concurrent users.</p>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row relative mb-8 w-full lg:w-1/2 px-6">
              <div class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6">
                <img src="~@/assets/images/icons/new/data-eye.svg" alt="Streamline Data Warehouse" class="w-full pr-0 md:pr-2" />
              </div>
              <div class="w-full sm:w-2/3 md:w-3/4 lg:w-5/6">
                <h4 class="text-gray-500">Simplify and streamline data operations</h4>
                <p class="">With Yellowbrick, there’s no need for mundane, time-consuming tasks like query tuning and building indexes, and management is done through a clean and simple UI — saving precious time for higher-value data operations and analytics.</p>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row relative mb-8 w-full lg:w-1/2 px-6">
              <div class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6">
                <img src="~@/assets/images/icons/new/magnify-data.svg" alt="Familiar Analytics Tools" class="w-full pr-0 md:pr-2" />
              </div>
              <div class="w-full sm:w-2/3 md:w-3/4 lg:w-5/6">
                <h4 class="text-gray-500">Use existing investments in familiar tools</h4>
                <p class="">Yellowbrick works seamlessly with leading data movement (including Informatica, SyncSort, Talend, and Kafka) and BI (including Tableau, SAS, Microsoft Power BI, MicroStrategy, Python, and R) tools.</p>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row relative mb-8 w-full lg:w-1/2 px-6">
              <div class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6">                
                <img src="~@/assets/images/icons/new/multi-use.svg" alt="Hybrid Cloud Flexibility" class="w-full pr-0 md:pr-2" />
              </div>
              <div class="w-full sm:w-2/3 md:w-3/4 lg:w-5/6">
                <h4 class="text-gray-500">Ensure flexibility through support for hybrid and multi-cloud</h4>
                <p class="">Unlike purely on-prem or cloud-native options, Yellowbrick lets you natively run mixed workloads wherever it makes the most economical sense: in on-prem data centers, private clouds, or any major public cloud platform.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>


    <section class="flex py-16 bg-gray-600 px-6 xl:px-0 enhance-bg">
      <div class="flex-1 justify-center max-w-1000 mx-auto">
        <p class="accent-heading text-white rfs-text-4xl font-light mb-1">“With the power of Yellowbrick combined with our deep knowledge of the data and proprietary algorithms, we will be able to produce insights that were impossible before.”</p>
        <p class="text-white rfs-text-lg text-right mb-0">– Atul Jain, Chairman & CEO, TEOCO</p>
      </div>
    </section>

    <!-- NEW WHITE PAPER FORM -->

    <section class="flex py-2 md:py-2  px-6 xl:px-0">
      <div class="flex-1 justify-center bg-white max-w-1200 mx-auto">
      <h3 class="text-gray-500 mb-6 pt-8">Data Warehouse Modernization Resources</h3>
      <p class="rfs-text-lg pb-4">Data modernization speeds up decision making with more confident results. These resources show how users can take advantage of the analytical prowess and data-processing power of Yellowbrick’s Data Warehouse.</p>
        <div class="p-10 bg-gray-100 shadow-lg max-w-800 mx-auto embellish-bg break-plane relative mt-20">
        <span class="accent"></span>
          <div class="flex flex-col pt-6 mx-auto max-w-800">
            <p class="pb-0 mb-0 text-gray-500">Featured eBook:</p>
            <h3>Data warehouse modernization for faster, deeper insights</h3>
            <p>Company survival depends on understanding the market better than the competition and acting more quickly. Being able to quickly process, understand, and make profitable decisions from all your business data is key to being successful.</p>
          </div>
          <div class="flex flex-col md:flex-row items-center pb-8 mx-auto max-w-800">
            <div class="self-start mt-8 w-1/3">
              <img src="/uploads/ebook-modernize.jpg" class="shadow-md" alt="Data Warehouse Modernization eBook" />
            </div>
            <div class="w-full md:w-2/3 p-0 md:pl-16 flex-start">
              <BaseHubspot id="5b4b715d-2140-42d0-86fe-9cf117bfdf7d" sfid="7011G000000UwqsQAC" />
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- END WHITEPAPER FORM -->

    <section class="flex py-8 md:pt-0 md:pb-16 bg-white px-6 xl:px-0">
      <div class="flex-1 justify-center max-w-1200 mx-auto">

        <div class="pt-6 sm:pt-0 pb-16 px-0 sm:px-10 md:px-32 my-16">
          <h3 class="accent-heading mb-6">A modern data warehouse with Yellowbrick</h3>
          <img src="/uploads/Yellowbrick-Architecture.png" class="w-full" alt="modern data warehouse" />
          <p class="py-4">An architecture diagram showing how Yellowbrick’s Data Warehouse takes in streaming, change, and batch data sources, operates on containerized hybrid-cloud environments, and allows data scientists, business users, and analysts to process and report the data.</p>
        </div>
      </div>
    </section>

    <section class="flex pb-0 bg-gray-500 px-6 xl:px-0">
      <div class="flex flex-col md:flex-row justify-center max-w-1200 mx-auto">

        <div class="break-plane w-full sm:w-1/2 flex flex-col sm:flex-row p-6 sm:p-10 bg-gray-100 shadow-lg relative embellish-bg mr-0 md:mr-4 mb-8 md:mb-0">
          <span class="accent"></span>
          <div class="w-full sm:w-1/4">
            <img src="/uploads/wp-data-warehouse-modernization-analytics-thumb.jpg" class="shadow-md" alt="teoco case study" />
          </div>
          <div class="w-full sm:w-3/4 pt-5 sm:pt-0 pl-0 sm:pl-5">
            <span class="rfs-text-base text-gray-500">Whitepaper:</span>
            <h4>Data warehouse modernization</h4>
            <p>You can't afford to lose insights when real-time decisions are needed. Our data analytics solution eliminates trade-offs between performance and scale, yet keeps long-term costs under control.</p>
            <a href="/go/modernizing-your-data-warehouse-for-hybrid-cloud-analytics/" class="button yellow whitespace-no-wrap">Download</a>
          </div>
        </div>

        <div class="break-plane w-full sm:w-1/2 flex flex-col sm:flex-row p-6 sm:p-10 bg-gray-100 shadow-lg relative embellish-bg ml-0 md:ml-4">
          <span class="accent"></span>
          <div class="w-full sm:w-1/4">
            <img src="/uploads/ds-data-warehouse-without-limits-thumb.jpg" alt="Data Warehouse Modernization Exec Brief" class="shadow-md"/>
          </div>
          <div class="w-full sm:w-3/4 pt-5 sm:pt-0 pl-0 sm:pl-5">
            <span class="rfs-text-base text-gray-500">Datasheet:</span>
            <h4>Data warehousing without limits</h4>
            <p>Legacy and cloud-only platforms have extensive limitations. Learn how Yellowbrick is unmatched when it comes to price/performance, flexibility, and TCO.</p>
            <a class="button yellow" href="/resources/data-sheets/yellowbrick-data-warehouse-overview/" target="_blank">Read Now</a>
          </div>
        </div>

      </div>
    </section>

    <section class="flex py-12 md:py-24 bg-white px-6 xl:px-0">
      <div class="flex flex-col sm:flex-row justify-center max-w-1200 mx-auto">
        <div class="w-full sm:w-1/2 px-6 pb-6 md:pb-0">
          <img src="/uploads/Yellowbrick_ModernHybridCloud_Card.jpg" alt="yellowbrick key benefits"/>
        </div>
        <div class="w-full sm:w-1/2 px-6">
          <h5 class="mb-0 text-teal">On-demand webinar:</h5>
          <h4>Key benefits of a modern hybrid cloud data warehouse</h4>
          <p>Organizations need a flexible architecture to solve their current analytics problems and the scale to meet future demands. In this webinar, we will highlight the key benefits that a modern hybrid cloud data warehouse provides.</p>
          <a href="/go/key-benefits-of-a-modern-hybrid-cloud-data-warehouse/" class="button yellow">Watch now</a>
        </div>
      </div>
    </section>

    <MoreInfo />

  </Layout>
</template>

<script>
import MoreInfo from '~/components/MoreInfo.vue';
import BaseHubspot from '~/components/BaseHubspot.vue';
import BiWeeklyBanner from '~/components/BiWeeklyBanner.vue'

export default {
  metaInfo: {
    title: 'Data Warehouse Modernization with Yellowbrick Data',
    meta: [
      { 
        key: 'description',
        name: 'description',
        content: 'Modernize your data warehouse and control long-term costs with Yellowbrick. Simplify operations and deploy anywhere with a modern cloud data warehouse solution.'
      },
      {
        key: 'og:description',
        name: "og:description",
        content: 'Modernize your data warehouse and control long-term costs with Yellowbrick. Simplify operations and deploy anywhere with a modern cloud data warehouse solution.'
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'Modernize your data warehouse and control long-term costs with Yellowbrick. Simplify operations and deploy anywhere with a modern cloud data warehouse solution.'
      },
      {
        key: 'og:title',
        name: 'og:title',
        content: 'Data Warehouse Modernization with Yellowbrick Data'
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'Data Warehouse Modernization with Yellowbrick Data'
      }
    ]
  },
  components: {
    BaseHubspot,
    MoreInfo,
    BiWeeklyBanner
  }
}
</script>

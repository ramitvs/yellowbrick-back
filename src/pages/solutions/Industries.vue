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

    <section class="hero flex bg-gray-700 py-12 md:py-16 text-white px-6 xl:px-0">
      <div class="flex flex-col md:flex-row max-w-1200 w-full mx-auto z-10 justify-between">
        <div class="w-full md:w-1/2 pr-8">
          <span class="text-yellow1 rfs-text-2xl">Industry Solutions:</span>
          <h1 class="rfs-text-5xl">Yellowbrick is the Data Warehouse for Any Industry</h1>
          <p class="rfs-text-xl">Yellowbrick serves many industries, helping each to achieve amazing results through faster queries, bigger datasets, and hybrid/multi-cloud flexibility - which ultimately saves money.</p>
        </div>

      </div>
    </section>    
    
    <!-- <section class="flex pb-8 bg-gray-100 px-6 xl:px-0">
      <div class="flex-1 justify-center max-w-1200 mx-auto">
        <div class="break-plane p-10 bg-white shadow-lg relative">
          <span class="accent"></span>
          <h3 class="text-gray-500 mb-8">Get value from your Apache Hadoop-based data lake like never before</h3>
          <div class="multi-column text-gray-500">
            <p class="rfs-text-lg">Enterprises have invested heavily in Apache Hadoop-based data lakes yet are often frustrated by the inability to get timely data-driven insights out of them. Although data lakes are useful as low-cost storage for structured and unstructured data, they don’t meet demands for large-scale, real-time analytics, including support for concurrent BI users in great numbers, sophisticated ad hoc queries, or data-intensive reports.</p>
            <p class="rfs-text-lg">Instead, Yellowbrick augments the data lake with a modern, real-time enterprise analytics environment that is purpose-built for enabling analysts and data scientists to answer the hardest questions, accurately and within SLA windows, using their favorite tools.</p>
          </div>
        </div>
      </div>
    </section> -->

    <section class="flex py-12 md:py-16 bg-white px-6 xl:px-0">
      <div class="flex-1 justify-center max-w-1200 mx-auto">
        <h2 class="accent-heading text-gray-500 mb-12">Industries</h2>

        <div class="flex flex-col sm:flex-row text-gray-500 -mx-6">
          <div class="w-full flex flex-col sm:flex-row flex-wrap mx-auto">

            <div class="flex flex-col md:flex-row relative mb-8 w-full md:w-1/2 px-6 pb-8">
              <div class="w-1/2 sm:w-1/6">
                <img src="~@/assets/images/icons/industries/finserv-icon.svg" alt="Financial Services Icon" class="w-full p-0 md:pr-2 mx-auto md:mx-0" />
              </div>
              <div class="w-full sm:w-5/6">
                <h3 class="text-gray-500">Financial Services</h3>
                <p class="">For even the most sophisticated financial services organizations, a tremendous amount of data to analyze can overwhelm existing data analytics platforms, leaving them vulnerable to faster or more sophisticated competitors&mdash;unless Yellowbrick is there</p>
                <g-link to="/solutions/financial-services/" class="button yellow">Learn More</g-link>
              </div>
            </div>

            <div class="flex flex-col md:flex-row relative mb-8 w-full md:w-1/2 px-6 pb-8">
              <div class="w-1/2 sm:w-1/6">                
                <img src="~@/assets/images/icons/industries/insurance-icon.svg" alt="Insurance icon" class="w-full p-0 md:pr-2 mx-auto md:mx-0" />
              </div>
              <div class="w-full sm:w-5/6">
                <h3 class="text-gray-500">Insurance</h3>
                <p class="">Exposure. Risk/loss. Modeled losses. Portfolio rollups. EP curves. Policy limit aggregation. Learn how insurance companies can do these analyses faster and more accurately than competitors with Yellowbrick.</p>
                <g-link to="/solutions/insurance/" class="button yellow">Learn More</g-link>
              </div>
            </div>

            <div class="flex flex-col md:flex-row relative mb-8 w-full md:w-1/2 px-6 pb-8">
              <div class="w-1/2 sm:w-1/6">
                <img src="~@/assets/images/icons/industries/retail-icon.svg" alt="Retail Icon" class="w-full p-0 md:pr-2 mx-auto md:mx-0" />
              </div>
              <div class="w-full sm:w-5/6">
                <h3 class="text-gray-500">Retail</h3>
                <p class="">Customers, sales, products, merchandise, and channels have always been the core drivers of a retail business, but now those drivers entail an expanding deluge of related data--and nothing helps you take advantage of it like Yellowbrick.</p>
                <g-link to="/solutions/retail/" class="button yellow">Learn More</g-link>
              </div>
            </div>

            <div class="flex flex-col md:flex-row relative mb-8 w-full md:w-1/2 px-6 pb-8">
              <div class="w-1/2 sm:w-1/6">
                <img src="~@/assets/images/icons/industries/telecom-icon.svg" alt="Telecom Icon" class="w-full p-0 md:pr-2 mx-auto md:mx-0" />
              </div>
              <div class="w-full sm:w-5/6">
                <h3 class="text-gray-500">Telecom</h3>
                <p class="">While most industries today rely on data and data analytics for competitive advantage, none more so than telecommunications companies. Learn how Yellowbrick gives them the real-time insight they need.</p>
                <g-link to="/solutions/telecom/" class="button yellow">Learn More</g-link>
              </div>
            </div>

            <!-- BEGIN TEMP SEPARATION -->

                                <!-- <div class="flex pt-12">

                                <div class="flex flex-col relative mb-8 w-full md:w-1/4 px-6 pb-8">
                                  <div class="w-1/2 sm:w-1/3 pb-8">
                                    <img src="~@/assets/images/icons/industries/government-icon.svg" alt="Government Icon" class="w-full p-0 md:pr-2 mx-auto md:mx-0" />
                                  </div>
                                  <div class="w-full sm:w-5/6">
                                    <h3 class="text-gray-500">Government</h3>
                                    <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                    <g-link to="/solutions/government/" class="button yellow">Learn More</g-link>
                                  </div>
                                </div>

                                <div class="flex flex-col relative mb-8 w-full md:w-1/4 px-6 pb-8">
                                  <div class="w-1/2 sm:w-1/3 pb-8">
                                    <img src="~@/assets/images/icons/industries/banking-icon.svg" alt="Banking Icon" class="w-full p-0 md:pr-2 mx-auto md:mx-0" />
                                  </div>
                                  <div class="w-full sm:w-5/6">
                                    <h3 class="text-gray-500">Banking</h3>
                                    <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                    <g-link to="/solutions/banking/" class="button yellow">Learn More</g-link>
                                  </div>
                                </div>

                                <div class="flex flex-col relative mb-8 w-full md:w-1/4 px-6 pb-8">
                                  <div class="w-1/2 sm:w-1/3 pb-8">
                                    <img src="~@/assets/images/icons/industries/life-sciences-icon.svg" alt="Life Sciences Icon" class="w-full p-0 md:pr-2 mx-auto md:mx-0" />
                                  </div>
                                  <div class="w-full sm:w-5/6">
                                    <h3 class="text-gray-500">Life Sciences</h3>
                                    <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                    <g-link to="/solutions/life-sciences/" class="button yellow">Learn More</g-link>
                                  </div>
                                </div>

                                <div class="flex flex-col relative mb-8 w-full md:w-1/4 px-6 pb-8">
                                  <div class="w-1/2 sm:w-1/3 pb-8">                
                                    <img src="~@/assets/images/icons/industries/analytics-icon.svg" alt="Analytics Icon" class="w-full p-0 md:pr-2 mx-auto md:mx-0" />
                                  </div>
                                  <div class="w-full sm:w-5/6">
                                    <h3 class="text-gray-500">Analytics</h3>
                                    <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                                    <g-link to="/solutions/analytics/" class="button yellow">Learn More</g-link>
                                  </div>
                                </div>

                                </div> -->

            <!-- END TEMP SEPARATION -->

            <!-- <div class="flex flex-col md:flex-row relative mb-8 w-full md:w-1/2 px-6 pb-8">
              <div class="w-1/2 sm:w-1/6">
                <img src="~@/assets/images/icons/industries/government-icon.svg" alt="Government Icon" class="w-full p-0 md:pr-2 mx-auto md:mx-0" />
              </div>
              <div class="w-full sm:w-5/6">
                <h3 class="text-gray-500">Government</h3>
                <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                <g-link to="/solutions/government/" class="button yellow">Learn More</g-link>
              </div>
            </div>

            <div class="flex flex-col md:flex-row relative mb-8 w-full md:w-1/2 px-6 pb-8">
              <div class="w-1/2 sm:w-1/6">
                <img src="~@/assets/images/icons/industries/banking-icon.svg" alt="Banking Icon" class="w-full p-0 md:pr-2 mx-auto md:mx-0" />
              </div>
              <div class="w-full sm:w-5/6">
                <h3 class="text-gray-500">Banking</h3>
                <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                <g-link to="/solutions/banking/" class="button yellow">Learn More</g-link>
              </div>
            </div>

            <div class="flex flex-col md:flex-row relative mb-8 w-full md:w-1/2 px-6 pb-8">
              <div class="w-1/2 sm:w-1/6">
                <img src="~@/assets/images/icons/industries/life-sciences-icon.svg" alt="Life Sciences Icon" class="w-full p-0 md:pr-2 mx-auto md:mx-0" />
              </div>
              <div class="w-full sm:w-5/6">
                <h3 class="text-gray-500">Life Sciences</h3>
                <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                <g-link to="/solutions/life-sciences/" class="button yellow">Learn More</g-link>
              </div>
            </div>

            <div class="flex flex-col md:flex-row relative mb-8 w-full md:w-1/2 px-6 pb-8">
              <div class="w-1/2 sm:w-1/6">                
                <img src="~@/assets/images/icons/industries/analytics-icon.svg" alt="Analytics Icon" class="w-full p-0 md:pr-2 mx-auto md:mx-0" />
              </div>
              <div class="w-full sm:w-5/6">
                <h3 class="text-gray-500">Analytics</h3>
                <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                <g-link to="/solutions/analytics/" class="button yellow">Learn More</g-link>
              </div>
            </div> -->

          </div>
        </div>
      </div>
    </section>

    

    <section class="flex bg-gray-100 py-12 md:py-20 px-6 xl:px-0">
      <div class="max-w-1200 w-full mx-auto">

        <h3 class="accent-heading">eBook Resources</h3>
        <div class="flex flex-col md:flex-row flex-wrap pt-8 -mx-4 w-full">

          <div class="flex flex-row w-full md:w-1/2 px-4 mb-10 md:mb-0">
            <img alt="migrate" src="/uploads/ebook-hybrid-cloud-thumb.jpg" class="w-5/12 flex self-start g-image" />
            <div class="ml-8">
              <h4 class="mt-0">A Hybrid Cloud Approach to Analytics</h4>
              <a href="/go/yellowbrick-for-insurance/" class="button yellow">Download</a>
            </div>
          </div>

          <div class="flex flex-row w-full md:w-1/2 px-4">
            <img alt="migrate" src="/uploads/fTyBr/ebook-data-lake-thumb.jpg" class="w-5/12 flex self-start g-image" />
            <div class="ml-8">
              <h4 class="mt-0">Turbocharge Your Data Lake</h4>
              <a href="/go/turbocharge-your-data-lake/" class="button yellow">Download</a>
            </div>
          </div>

        </div>

      </div>
    </section>

    
  <!-- THREE EBOOK STRUCTURE -->

    <!-- <section class="flex bg-gray-100 py-12 md:py-20 px-6 xl:px-0">
      <div class="max-w-1200 w-full mx-auto">
        <h3 class="accent-heading">eBook Resources</h3>
        <div class="flex flex-col md:flex-row flex-wrap pt-8 -mx-4 w-full">

          <div class="flex flex-col w-full sm:w-1/2 md:w-1/3 px-4">
            <img alt="migrate" src="/uploads/ebook-hybrid-cloud-thumb.jpg" class="w-64 flex self-start g-image">
            <div class="mt-8">
              <h5>A Hybrid Cloud Approach to Analytics</h5>
              <a href="/uploads/wp.pdf" class="button yellow">Download</a>
            </div>
          </div>

          <div class="flex flex-col w-full sm:w-1/2 md:w-1/3 px-4">
            <img alt="migrate" src="/uploads/fTyBr/ebook-data-lake-thumb.jpg" class="w-64 flex self-start g-image">
            <div class="mt-8">
              <h5>A Hybrid Cloud Approach to Analytics</h5>
              <a href="/uploads/wp.pdf" class="button yellow">Download</a>
            </div>
          </div>

          <div class="flex flex-col w-full sm:w-1/2 md:w-1/3 px-4">
            <img alt="migrate" src="/uploads/ebook-hybrid-cloud-thumb.jpg" class="w-64 flex self-start g-image">
            <div class="mt-8">
              <h5>A Hybrid Cloud Approach to Analytics</h5>
              <a href="/uploads/wp.pdf" class="button yellow">Download</a>
            </div>
          </div>

        </div>
      </div>
    </section> -->

    

    <section class="flex bg-gray-700 py-16 px-6 xl:px-0">
      <div class="max-w-1200 mx-auto text-white">
        
        <div class="flex flex-col lg:flex-row items-center">
          <div class="w-full lg:w-1/3 pr-0 md:pr-8">
            <h2>Partner Ecosystem</h2>
            <p class="">Yellowbrick Data partners offer best-of-breed solutions for BI/data visualization, security, data motion, and consulting and integration, complementing Yellowbrick Data Warehouse’s industry-leading speed and flexibility. The ecosystem is growing fast, so check back here often for updates.</p>
            <g-link to="/company/partners/" class="button yellow">View our Partners</g-link>
          </div>
          <div class="flex flex-row flex-wrap w-full lg:w-2/3 pt-8 lg:pt-0 pl-0 lg:pl-8">
            <img src="/uploads/partners-apptec.svg" class="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-6 self-start" alt="next pathway logo"/>
            <img src="/uploads/partners-attunity.svg" class="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-6 self-start" alt="systech logo"/>
            <img src="/uploads/partners-collibra.svg" class="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-6 self-start" alt="next pathway logo"/>
            <img src="/uploads/partners-compilerworks.svg" class="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-6 self-start" alt="systech logo"/>
            <img src="/uploads/partners-confluent.svg" class="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-6 self-start" alt="next pathway logo"/>
            <img src="/uploads/partners-dbeaver.svg" class="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-6 self-start" alt="systech logo"/>
            <img src="/uploads/partners-dbvis.svg" class="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-6 self-start" alt="next pathway logo"/>
            <img src="/uploads/partners-denodo.svg" class="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-6 self-start" alt="systech logo"/>
            <img src="/uploads/partners-domo.svg" class="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-6 self-start" alt="next pathway logo"/>
            <img src="/uploads/partners-emtec.svg" class="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-6 self-start" alt="systech logo"/>
            <img src="/uploads/partners-ibm.svg" class="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-6 self-start" alt="next pathway logo"/>
            <img src="/uploads/partners-icedq.svg" class="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-6 self-start" alt="systech logo"/>
            <img src="/uploads/partners-informatica.svg" class="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-6 self-start" alt="next pathway logo"/>
            <img src="/uploads/partners-intellisoft.svg" class="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-6 self-start" alt="systech logo"/>
            <img src="/uploads/partners-maestro.svg" class="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-6 self-start" alt="next pathway logo"/>
            <img src="/uploads/partners-manta.svg" class="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-6 self-start" alt="systech logo"/>
            <img src="/uploads/partners-microstrategy.svg" class="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-6 self-start" alt="next pathway logo"/>
            <img src="/uploads/partners-nexla.svg" class="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-6 self-start" alt="systech logo"/>
            <img src="/uploads/partners-nextpathway.svg" class="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-6 self-start" alt="next pathway logo"/>
            <img src="/uploads/partners-oracle.svg" class="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-6 self-start" alt="systech logo"/>
            <img src="/uploads/partners-powerbi.svg" class="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-6 self-start" alt="next pathway logo"/>
            <img src="/uploads/partners-sas.svg" class="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-6 self-start" alt="systech logo"/>
            <img src="/uploads/partners-scalematrix.svg" class="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-6 self-start" alt="next pathway logo"/>
            <img src="/uploads/partners-sisense.svg" class="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-6 self-start" alt="systech logo"/>
            <img src="/uploads/partners-sonra.svg" class="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-6 self-start" alt="next pathway logo"/>
            <img src="/uploads/partners-sotero.svg" class="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-6 self-start" alt="systech logo"/>
            <img src="/uploads/partners-striim.svg" class="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-6 self-start" alt="next pathway logo"/>
            <img src="/uploads/partners-synametrics.svg" class="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-6 self-start" alt="systech logo"/>
            <img src="/uploads/partners-syncsort.svg" class="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-6 self-start" alt="next pathway logo"/>
            <img src="/uploads/partners-systech.svg" class="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-6 self-start" alt="systech logo"/>
            <img src="/uploads/partners-tableau.svg" class="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-6 self-start" alt="systech logo"/>
            <img src="/uploads/partners-talend.svg" class="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-6 self-start" alt="next pathway logo"/>
            <img src="/uploads/partners-tonic.svg" class="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-6 self-start" alt="systech logo"/>
            <img src="/uploads/partners-vion.svg" class="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-6 self-start" alt="systech logo"/>
            <img src="/uploads/partners-virtusa.svg" class="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-6 self-start" alt="next pathway logo"/>
          </div>
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
    title: 'Yellowbrick Industry Solutions',
    meta: [
      { 
        key: 'description',
        name: 'description',
        content: 'Yellowbrick serves many industries, including: Government, Financial Services, Banking, Insurance, Retail, Telecom, Life Sciences, and Analytics.'
      },
      {
        key: 'og:description',
        name: "og:description",
        content: 'Yellowbrick serves many industries, including: Government, Financial Services, Banking, Insurance, Retail, Telecom, Life Sciences, and Analytics.'
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'Yellowbrick serves many industries, including: Government, Financial Services, Banking, Insurance, Retail, Telecom, Life Sciences, and Analytics.'
      },
      {
        key: 'og:title',
        name: 'og:title',
        content: 'Yellowbrick Industry Solutions'
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'Yellowbrick Industry Solutions'
      }
    ]
  },
  components: {
    MoreInfo,
    BiWeeklyBanner
  }
}
</script>

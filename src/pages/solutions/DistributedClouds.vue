<style scoped>
    .resource-box h5{
        min-height: 90px;
    }
   .hero {
   background-color: #10191d;
   padding-top: 12.5rem;
   }
   .hero:after {
   background: url(/uploads/color_globe.svg) 100% 60% no-repeat;
   background-size: 50%;
   content: "";
   height: 100%;
   opacity: 0.75;
   position: absolute;
   right: 0;
   top: 0;
   width: 100%;
   z-index: 1;
   }
   @media (min-width: 768px) {
   .hero:after {
   background-position: 80% 60%;
   }
   }
   @media (min-width: 990px) {
   .hero:before {
   background: url(/uploads/color_globe.svg) -50% 110% no-repeat;
   background-size: 50%;
   content: "";
   height: 100%;
   opacity: 0.25;
   position: absolute;
   right: 0;
   top: 0;
   width: 100%;
   z-index: 1;
   }
   }
   .diag-lines {
   position: relative;
   &:after {
   content: "";
   position: absolute;
   background-image: url(/uploads/Yellowbrick_DiagonalLines.jpg);
   background-repeat: repeat;
   left: 0;
   right: 0;
   top: 0;
   bottom: 0;
   z-index: 0;
   opacity: 0.025;
   background-size: 100% auto;
   }
   }
   .arrow-only-blue {
   font-size: 18px;
   padding-right: 20px;
   position: relative;
   }
   .arrow-only-blue::after {
   content: "";
   height: 14px;
   width: 18px;
   background-image: url(/uploads/images/blue-arrow-right.svg);
   position: absolute;
   right: -20px;
   top: 50%;
   transform: translateY(-7px);
   transition: right 0.25s ease-in-out;
   }
   .arrow-only-blue:hover:after {
   right: -30px;
   }
   .arrow-only-yellow {
   font-size: 18px;
   padding-right: 20px;
   position: relative;
   }
   .arrow-only-yellow::after {
   content: "";
   height: 14px;
   width: 18px;
   background-image: url(/uploads/images/yellow-arrow-right.svg);
   position: absolute;
   right: -20px;
   top: 50%;
   transform: translateY(-7px);
   transition: right 0.25s ease-in-out;
   }
   .arrow-only-yellow:hover:after {
   right: -30px;
   }
   .resouce-caption{
   width: 100%;
   text-align: center;
   margin-top: 24px;
   }
</style>
<template>
   <Layout>
      <base-section class="hero py-8">
         <div class="w-full md:w-1/2 pr-0 md:pr-10">
            <h1 class="rfs-text-5xl leading-tight text-white">
               Cloud Data Warehouse for Distributed Clouds | Yellowbrick Data
            </h1>
            <p class="rfs-text-xl text-white">
               Bring blazing-fast analytics to private clouds, public clouds, and the network edge
            </p>
         </div>
      </base-section>
      <base-section class="text-center">
      <div>
         <h2 class="rfs-text-lg" style="display: inline;">What is a distributed cloud?</h2>
         <p class="rfs-text-lg" style="display: inline;">
            A distributed cloud is a mesh of interconnected resources (private data centers, public clouds, and edge networks) that are managed in a consistent, unified way. With most enterprise data soon to be originating outside of data centers, data is becoming more distributed. At the same time, companies in regulated industries are increasingly forced to keep data on-premises and/or in specific geographies. These trends are forcing data warehouses to evolve by bringing processing to the data.
         </p>
      </div>
         <p class="rfs-text-lg">
            <br>To meet that emerging need, Yellowbrick lets you provision data warehouses wherever needed—in private data centers, multiple public clouds, and the network edge—with its adaptive architecture ensuring blazing-fast performance on any infrastructure, whether physical or virtual. Yellowbrick Manager lets you manage all your data warehouses, wherever deployed, bringing analytics to the data instead of data to the analytics.
         </p>
         <section class="bg-white py-12 md:py-20 z-10">
            <div class="w-full max-w-1200 mx-auto">
               <BaseWistia id="jl7d88uzmd" />
            </div>
         </section>
      </base-section>
      <base-section class="bg-gray-100 diag-lines">
         <h2 class="rfs-text-4xl mb-6">
            Why Yellowbrick for distributed clouds
         </h2>
         <div class="flex flex-col md:flex-row mb-6 lg:px-6">
            <div class="w-full md:w-2/12 mb-0">
               <img
                  class="w-52 h-52 lg:w-50"
                  src="/uploads/YB Iconography_CONVERTED_Performance_Yellow.png"
                  />
            </div>
            <div
               class="w-full md:w-10/12 md:ml-12 flex flex-col justify-center"
               >
               <h4 class="rfs-text-lg">
                  Superb economics for every requirement
               </h4>
               <p>
                  Some applications involve a single data center, while others, such as IoT analytics for network telemetry, extend all the way to the edge and back. Yellowbrick’s unique adaptive architecture brings excellent price/performance economics to them all, whether on bare metal or virtualized infrastructure.
               </p>
            </div>
         </div>
         <div class="flex flex-col md:flex-row mb-6 lg:px-6">
            <div class="w-full md:w-2/12 mb-0">
               <img
                  class="w-52 h-52 lg:w-50"
                  src="/uploads/YB Iconography_CONVERTED_Security_Yellow.png"
                  />
            </div>
            <div
               class="w-full md:w-10/12 md:ml-12 flex flex-col justify-center"
               >
               <h4 class="rfs-text-lg">
                  Compliance along with flexibility
               </h4>
               <p>
                  Companies in regulated industries like insurance, banking, and healthcare can run workloads in private data centers for compliance purposes, while keeping cloud pathways open for other datasets that don’t contain PII.
               </p>
            </div>
         </div>
         <div class="flex flex-col md:flex-row mb-6 lg:px-6">
            <div class="w-full md:w-2/12 mb-0">
               <img
                  class="w-52 h-52 lg:w-50"
                  src="/uploads/YB Iconography_CONVERTED_Scalability_Yellow.png"
                  />
            </div>
            <div
               class="w-full md:w-10/12 md:ml-12 flex flex-col justify-center"
               >
               <h4 class="rfs-text-lg">
                  Future-proof architecture for IoT analytics
               </h4>
               <p>
                  Telecom, manufacturing, O&G, and logistics companies can standardize on a future-proof architecture that includes data services, security, and management and monitoring for emerging IoT analytics use cases, with no platform or cloud lock-in.
               </p>
            </div>
         </div>
         <div class="flex flex-col md:flex-row mb-6 lg:px-6">
            <div class="w-full md:w-2/12 mb-0">
               <img
                  class="w-52 h-52 lg:w-50"
                  src="/uploads/YB Iconography_CONVERTED_Untitled 12_Yellow.png"
                  />
            </div>
            <div
               class="w-full md:w-10/12 md:ml-12 flex flex-col justify-center"
               >
               <h4 class="rfs-text-lg">Single, unified management</h4>
               <p>
                  Yellowbrick Manager lets you easily control instances, databases, and users across every deployment with a single management experience. Plus, you can run queries and explore data from your browser (or, bring your own tools).
               </p>
            </div>
         </div>
         <div class="flex flex-col md:flex-row mb-6 lg:px-6">
            <div class="w-full md:w-2/12 mb-0">
               <img
                  class="w-52 h-52 lg:w-50"
                  src="/uploads/YB Iconography_CONVERTED_Untitled 4_Yellow.png"
                  />
            </div>
            <div
               class="w-full md:w-10/12 md:ml-12 flex flex-col justify-center"
               >
               <h4 class="rfs-text-lg">Always-on availability</h4>
               <p>
                  Companies with SaaS products can build fault-tolerant, highly available services by combining private cloud and public cloud infrastructure for business applications like cloud disaster recovery.
               </p>
            </div>
         </div>
      </base-section>
      <base-section>
         <h2 class="rfs-text-4xl mb-12">Yellowbrick in Distributed Clouds</h2>
         <div class="w-full">
            <button @click="displayChart = !displayChart">
               <img
                  src="/uploads/images/DLR-Diagram-01-FINAL.jpg"
                  alt="Distributed Clouds"
                  class="mx-auto"
                  />
               <span class="inline-flex items-center">
                  <expand-arrows class="pr-2"></expand-arrows>
                  (click to enlarge)
               </span>
            </button>
            <modal-dialog v-if="displayChart" @close="displayChart=false">
               <img
                  src="/uploads/images/DLR-Diagram-01-FINAL.jpg"
                  alt="Distributed Clouds"
                  class="mx-auto"
                  />
            </modal-dialog>
         </div>
         <div class="resouce-caption">
            <p>
               Yellowbrick’s Kubernetes-based, cloud-agnostic architecture brings data warehousing to distributed clouds for the first time
            </p>
         </div>
      </base-section>
      <base-section>
         <h2 class="rfs-text-4xl mb-12">Learn More about the Cloud Data Warehouse</h2>
         <div class="flex flex-row flex-wrap">
            <div
               class="w-full sm:w-1/2 md:w-1/4 flex flex-col mb-12 md:mb-0 px-4 md:px-8  resource-box"
               >
               <img
                  src="/uploads/distributed-cloud-whitepaper-thumb.png"
                  alt="451 Research Report thumbnail"
                  class="w-7/12 mb-3 shadow-md self-start border-4 border-white"
                  />
               <div class="flex flex-col justify-between flex-grow w-4/5">
                  <div>
                     <h5>Distributed Cloud Whitepaper</h5>
                     <p class="leading-tight">
                        Learn how Yellowbrick is bringing data
                        warehousing to distributed clouds.
                     </p>
                  </div>
                  <span>
                  <a
                     class="ungated-asset arrow-only-blue text-teal"
                     href="/go/distributed-cloud-whitepaper"
                     ><strong>Download</strong></a
                     >
                  </span>
               </div>
            </div>
            <div
               class="w-full sm:w-1/2 md:w-1/4 flex flex-col mb-12 md:mb-0 px-4 md:px-8 resource-box"
               >
               <img
                  src="/uploads/real-time-data-thumb.png"
                  alt="data warehouse whitepaper thumbnail"
                  class="w-7/12 mb-3 shadow-md self-start border-4 border-white"
                  />
               <div class="flex flex-col justify-between flex-grow w-4/5">
                  <div>
                     <h5>Real-time analytics for telecommunications</h5>
                     <p class="leading-tight">
                        Modernizing your data warehouse is easier than
                        ever with Yellowbrick, learn how.
                     </p>
                  </div>
                  <span>
                  <a
                     href="/resources/briefs/telecom-analytics/"
                     class="arrow-only-blue text-teal"
                     ><strong>Download</strong></a
                     >
                  </span>
               </div>
            </div>
            <div
               class="w-full sm:w-1/2 md:w-1/4 flex flex-col mb-0 px-4 md:px-8  resource-box"
               >
               <img
                  src="/uploads/451-reprint-yellowbrick.png"
                  alt="hybrid cloud brief thumbnail"
                  class="w-7/12 mb-3 shadow-md self-start border-4 border-white"
                  />
               <div class="flex flex-col justify-between flex-grow w-4/5">
                  <div>
                     <h5>451 Research report</h5>
                     <p class="leading-tight">
                        Get the details on what makes the Yellowbrick
                        Modern Hybrid Cloud the best.
                     </p>
                  </div>
                  <span>
                  <a
                     id="451-research-reprint"
                     href="https://ww2.yellowbrick.com/hubfs/Briefs/451_Reprint_Yellowbrick.pdf"
                     class="arrow-only-blue text-teal"
                     ><strong>Download</strong></a
                     >
                  </span>
               </div>
            </div>
            <div
               class="w-full sm:w-1/2 md:w-1/4 flex flex-col mb-0 px-4 md:px-8  resource-box">
               <img
                  src="https://www.yellowbrick.com/uploads/thumb-whitepaper-gigaom-data-warehouse-distributed-cloud.png"
                  alt="hybrid cloud brief thumbnail"
                  class="w-7/12 mb-3 shadow-md self-start border-4 border-white"
                  />
               <div class="flex flex-col justify-between flex-grow w-4/5">
                  <div>
                     <h5>Data Warehouses and the Distributed Cloud</h5>
                     <p class="leading-tight">
                        Learn how to position your organization most advantageously for success down the line.
                     </p>
                  </div>
                  <span>
                  <a
                     id="451-research-reprint"
                     href="https://www.yellowbrick.com/go/data-warehouses-distributed-cloud/"
                     class="arrow-only-blue text-teal"
                     ><strong>Download</strong></a
                     >
                  </span>
               </div>
            </div>
         </div>
      </base-section>
      <base-section class="bg-gray-700 text-white">
         <div class="flex flex-col items-center">
            <div class="w-full px-8">
               <h2>Analytics partners</h2>
               <p>
                  Yellowbrick Data works with leading data management,
                  data integration, and BI partners to unleash the power
                  of your data with faster analytics.
               </p>
               <a
                  href="/company/partners/"
                  class="arrow-only-yellow text-yellow1"
                  >View our partners</a
                  >
            </div>
            <div class="flex flex-row flex-wrap w-full">
               <div
                  class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-8 self-start"
                  >
                  <img src="/uploads/partners-coffing.svg" />
               </div>
               <img
                  src="/uploads/partners-attunity.svg"
                  class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-8 self-start"
                  />
               <img
                  src="/uploads/partners-dbeaver.svg"
                  class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-8 self-start"
                  />
               <img
                  src="/uploads/partners-denodo.svg"
                  class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-8 self-start"
                  />
               <img
                  src="/uploads/partners-emtec.svg"
                  class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-8 self-start"
                  />
               <img
                  src="/uploads/partners-icedq.svg"
                  class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-8 self-start"
                  />
               <img
                  src="/uploads/partners-nexla.svg"
                  class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-8 self-start"
                  />
               <img
                  src="/uploads/partners-nextpathway.svg"
                  class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-8 self-start"
                  />
               <img
                  src="/uploads/partners-sas.svg"
                  class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-8 self-start"
                  />
               <img
                  src="/uploads/partners-striim.svg"
                  class="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-8 self-start"
                  />
            </div>
         </div>
      </base-section>
      <MoreInfoHybrid />
   </Layout>
</template>
<script>
   import BaseSection from "~/components/BaseSection";
   import ExpandArrows from "~/components/icons/ExpandArrows.vue";
   import ModalDialog from "~/components/ModalDialog.vue";
   import MoreInfoHybrid from "~/components/MoreInfoHybrid.vue";
   import TransitionExpand from "~/components/TransitionExpand.vue";
   
   export default {
       metaInfo: {
           title: "Cloud Data Warehouse for Distributed Clouds",
           meta: [
               {
                   key: "description",
                   name: "description",
                   content:
                       "Yellowbrick's adaptive architecture lets you provision data warehouses wherever needed—in private data centers, multiple public clouds, and the network edge.",
               },
               {
                   key: "og:description",
                   name: "og:description",
                   content:
                       "Yellowbrick's adaptive architecture lets you provision data warehouses wherever needed—in private data centers, multiple public clouds, and the network edge.",
               },
               {
                   key: "og:title",
                   name: "og:title",
                   content: "Cloud Data Warehouse for Distributed Clouds",
               },
               {
                   key: "twitter:description",
                   name: "twitter:description",
                   content:
                       "Yellowbrick's adaptive architecture lets you provision data warehouses wherever needed—in private data centers, multiple public clouds, and the network edge.",
               },
               {
                   key: "twitter:title",
                   name: "twitter:title",
                   content: "Cloud Data Warehouse for Distributed Clouds",
               },
           ],
       },
       components: {
           ExpandArrows,
           ModalDialog,
           MoreInfoHybrid,
           TransitionExpand,
       },
       data() {
           return {
               displayChart: false,
               expanded: false,
           };
       },
   };
</script>
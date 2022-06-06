<style scoped>

.accent-heading {
 font-size: 2rem;
}
.rfs-text-2xl {
    font-size: 25px;
}
.sub-hdr{
       font-size: 1.6rem !important;
}
ul li{
   font-size: 1.5rem !important;
}
   .hero {
   background-image: url(/uploads/images/teradata-migration-bg.png);
   background-size: cover;
   background-position: center center;
   min-height: 935px;
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
   .dk-bg .mktoForm .mktoFormRow .mktoLabel {
   color: #ffffff !important;
   }
   .float-form {
   @apply relative shadow-lg;
   background-color: #f3f6f6;
   padding: 1rem 2rem 1rem;
   & .mktoForm {
   margin-top: .5rem !important;
   & .mktoFormRow {
   & label.mktoLabel {
   color: #edc124 !important;
   }
   }
   }
   }
   .float-form::after {
   content: "";
   top: 0;
   left: 0;
   bottom: 0;
   right: 0;
   position: absolute;
   z-index: 0;
   background-repeat: no-repeat;
   background-position-x: center;
   }
   .float-form .form-container {
   position: relative;
   z-index: 3;
   }
   .float-form .floating-image {
   position: absolute;
   bottom: 0;
   right: 0;
   width: 100%;
   height: auto;
   z-index: 1;
   }
   .float-form .description-container h2>.text-orange1 {
   color: #d9832a;
   }
   .arrow-only-blue {
       font-size: 30px;
   padding-right: 50px;
   position: relative;
   }
   .arrow-only-blue::after {
   content: '';
   height: 19px;
   width: 25px;
   background-image: url(/uploads/images/blue-arrow-right.svg);
   position: absolute;
   right: 0;
   top: 50%;
   transform: translateY(-9px);
   transition: right .25s ease-in-out;
   }
   .arrow-only-blue:hover:after {
   right: -10px;
   }
   @media(min-width: 320px) {

   .float-form .floating-image {
   position: absolute;
   bottom: 0;
   right: 0;
   width: 100%;
   max-width: 320px;
   height: auto;
   }
   .float-form::after {
   background-position-y: 35%;
   background-size: 65% auto;
   }
   }
   @media(min-width: 480px) {
   .image-container .description-container {
   max-width: 345px;
   margin-right: auto;
   }
   .float-form::after {
   background-size: 80%;
   }
   }
   @media(max-width: 768px) { 
   .hero-title{
    font-size: 2.2rem !important; 
 
   width: 700px;
   margin-top: 0px;
   color: black !important;
   }
   
   }
   @media(min-width: 768px) {
    .arrow-only-blue {
   font-size: 20px !important;

   }
   
   }
   @media(min-width: 768px) {
   .hero-title{
   padding: 0 212px 0 0;
   }
   .hero-text .description-container {
   padding: 0 50px 0 0;
   }
   .float-form .floating-image {
   transform: translateY(-10%);
   max-width: 60%;
   }
   .float-form::after {
   background-position-y: 45%;
   }
   }
   @media(min-width: 990px) {
   .float-form::after {
   background-size: 125px auto;
   }
   }
   @media(max-width: 990px) {
   .float-form {
   box-shadow: none;
   }
   .float-form .form-container {
   margin-bottom: 0px;
   }
   .float-form::after {
   opacity: 0.15;
   }
   }
</style>
<style>
   .telecom-brief-offer-form form {
   position: relative;
   & .hs-email {
   width: 60%;
   }
   & .hs-submit {
   position: absolute;
   top: 1.5rem;
   right: 0;
   width: 100%;
   max-width: 40%;
   }
   & input.hs-input {
   width: 100%;
   font-size: 1.125rem;
   display: inline-flex;
   line-height: 1.25;
   padding: .75rem 1rem;
   border-radius: .125rem;
   border: 1px solid #cbd6e2;
   border-right: none;
   }
   & input.hs-button {
   border-color: #00c3cd;
   background-color: #00c3cd;
   font-weight: 600;
   border-radius: 0 .125rem .125rem 0;
   text-decoration: none;
   color: #FFFFFF;
   font-size: 1.125rem;
   width: auto;
   text-align: center;
   display: inline-flex;
   width: 100%;
   justify-content: center;
   line-height: 1.35;
   padding: .75rem 2rem;
   align-self: flex-start;
   transition: all .2s ease;
   }
   & .legal-consent-container {
   padding-top: 1rem;
   & p {
   font-size: .8rem;
   line-height: 1rem;
   }
   }
   }
   @media (max-width: 990px) {
   .telecom-brief-offer-form form {
   & input.hs-input {
   border: 1px solid #cbd6e2;
   }
   & input.hs-button {
   border-radius: .125rem;
   }
   & .hs-email {
   width: 100%;
   }
   & .hs-submit {
   position: static;
   max-width: 100%;
   }
   }
   }
   .text-yellow {
   color: #FFCA51;
   }
   .bullet-list li::before {
   content: "\2022";
   color: #FFCA51;
   font-weight: bold;
   display: inline-block;
   width: 1em;
   margin-left: -1em;
   }
   .rfs-text-2xl{
   margin-top: 20px;
   }
   .hero-title{
   font-size: 55px !important;
   width: 700px;
   margin-top: 0px;
   color: white !important;
   }
</style>
<template>
   <Layout>
      <section class="hero flex bg-gray-700 py-10 md:py-12 text-white px-6 xl:px-0">
         <div class="flex flex-col md:flex-row max-w-1000 w-full py-8 mx-auto relative z-10">
            <div class="w-full md:w-7/12 p-0 md:pr-16 text-gray-700 md:text-white">
               <div class="bg-white md:bg-transparent p-6 md:p-0">
                  <h1 class="hero-title" style="">Looking for<br />the Teradata <span class="text-yellow">exit?</span></h1>
                  <p class="rfs-text-2xl sub-hdr" style="font-weight:500">Teradata was the gold standard in data warehousing. Now it’s earned a reputation for other…"features:"</p>
                  <ul style="list-style: none;" class="bullet-list rfs-text-2xl">
                     <li>Huge maintenance costs and overhead</li>
                     <li>A massive, eco-unfriendly footprint</li>
                     <li>Inflexibility for modern workloads</li>
                     <li>Outsourced support to IBM</li>
                  </ul>
                  
               </div> 
              <div class="go-btn-main" >
                <a href="#anchor-go-btn" class="button yellow mr-4 mb-4" data-v-508e4a39="" data-v-b7bcd708="">Learn More</a>
              </div>
            </div>
            <!-- <div class="w-full md:w-1/3">
               <div class="float-form" >
                 <h3 class="text-gray-700">Want to learn more?</h3>
                 <div class="text-gray-700">
                   <BaseHubspot id="" sfid=""
                     class="form-container telecom-brief-offer-form" />
                 </div>
               </div>
               </div> -->
         </div>
      </section>
      <section class="flex py-16 bg-white-600 px-6 xl:px-0 enhance-bg">
         <div class="flex-1 justify-center max-w-1000 mx-auto">
            <p class=" text-black rfs-text-2xl mb-1">
               <span style="color: black; font-weight: bold;">Yellowbrick is different.</span> 
               We offer a state-of-the-art cloud data warehouse that gets you the most value from all your data, much more easily than Teradata—and much affordably.
            </p>
            <p class=" text-black rfs-text-2xl font-light mb-1">
               Yellowbrick is incredibly fast and cost-effective, even for thousands of users. And, the freedom is yours to run your data warehouse in your own public cloud VPC, in private clouds, and on-premises—without lock-in.
            </p>
            <p class=" text-teal rfs-text-2xl font-bold mb-1">
               Want to learn more?
            </p>
            <p class=" text-black rfs-text-2xl font-light mb-1">
               Yellowbrick and Next Pathway, the cloud migration industry leader, have partnered to provide an end-to-end solution that eases offload from Teradata to Yellowbrick Cloud Data Warehouse. Contact us for a free assessment.
            </p>

         </div>
      </section>
        <section class="flex pb-8 bg-white px-6 xl:px-0">
      <div class="flex flex-col justify-center max-w-1200 mx-auto">
        <div class="break-plane p-10 bg-white shadow-lg relative">
          <span class=""></span>
         <p class="accent-heading text-black rfs-text-4xl font-bold mb-1" id="anchor-go-btn">
          Getting started with Yellowbrick is fast and easy.
        </p>
          <div class="text-gray-500 w-full">

            <transition-expand>
              <div v-if="expanded">
                  <div class="float-form">
                  <h3 class="text-gray-700">Schedule Now</h3>
                  <BaseHubspot id="e4e34b7a-6b27-4bb7-8277-fcd8013f6ef7" sfid="7011G000000kh21QAA" webId="8366986" />
              </div>
              </div>
            </transition-expand>

            <button @click="expanded = !expanded" class="rfs-text-2xl font-bold text-teal ungated-asset arrow-only-blue" style="margin-top: 20px;">
              {{ expanded ? `Close Form` : `Get started now` }}
            </button>

          </div>
        </div>

      </div>
    </section>
   </Layout>
</template>
<script>
   import TransitionExpand from '~/components/TransitionExpand.vue'
   import Layout from '~/layouts/Landing.vue';
   
   export default {
     metaInfo: {
       title: 'Free Teradata Migration Assessment - Yellowbrick Data',
       meta: [
         {
           key: 'description',
           name: 'description',
           content: 'Yellowbrick and Next Pathway have partnered to provide an end-to-end solution that eases offload from Teradata to Yellowbrick Cloud Data Warehouse.'
         },
         {
           key: 'og:description',
           name: 'og:description',
           content: 'Yellowbrick and Next Pathway have partnered to provide an end-to-end solution that eases offload from Teradata to Yellowbrick Cloud Data Warehouse.'
         },
         {
           key: 'twitter:description',
           name: 'twitter:description',
           content: 'Yellowbrick and Next Pathway have partnered to provide an end-to-end solution that eases offload from Teradata to Yellowbrick Cloud Data Warehouse.'
         },
         {
           key: 'og:title',
           name: 'og:title',
           content: 'Free Teradata Migration Assessment - Yellowbrick Data'
         },
         {
           key: 'twitter:title',
           name: 'twitter:title',
           content: 'Free Teradata Migration Assessment - Yellowbrick Data'
         }
       ]
     },
     data() {
       return {
         selectedCompany: null,
         defaultPdfUrl: '/uploads/YB_Brief_TelecomAnalytics_v1.20.pdf',
         companies: [],
       }
     },
     mounted() {
       const companyNameQuery = this.$route.query.company_name || null;
       if (companyNameQuery !== null) {
         this.selectedCompany = this.companies.find(c => c.companyName.toLowerCase() === companyNameQuery.toLowerCase()) || null;
       }
     },
     components: {
       Layout,
       TransitionExpand
     },
       data() {
     return {
       expanded: false,
     };
   }
   };
</script>
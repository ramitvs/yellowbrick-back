<style scoped>
   .hero {
   background-image: url(/uploads/images/Yellowbrick_WebinarMobileBackground.jpg);
   background-size: cover;
   background-position: center center;
   &:before {
   height: 2rem;
   }
   }
   @media (min-width: 768px) {
   .hero {
   background-image: url(/uploads/images/Yellowbrick_WebinarDarkBackground.jpg);
   }
   }
   .space-around{
   justify-content: flex-start;
   }
   .systech{
   text-align: center;
   display: flex;
   flex-direction: row;
   justify-content: center;
   }
   .systech img{
   width: 60% !important;
   }
   .sysmain img{
   width: 90% !important;
   }
   @media (max-width: 768px) {
   .systech{
   text-align: center;
   display: flex;
   flex-direction: row;
   justify-content: center;
   }
   .systech img{
   width: 60% !important;
   }
   }
   .float-form {
   @apply relative p-8 bg-white shadow-lg;
   & .mktoForm {
   margin-top: 0.5rem !important;
   }
   }
   .eyebrow,
   .date-time {
   color: #57c0cb;
   & span {
   display: inline-block;
   }
   }
</style>
<template>
   <Layout>
      <section class="hero flex bg-gray-700 py-10 md:py-12 text-white px-6 xl:px-0">
         <div class="
            flex flex-col
            md:flex-row
            max-w-1200
            w-full
            py-8
            mx-auto
            relative
            z-10
            ">
            <div class="w-full md:w-7/12 p-0 md:pr-16 text-gray-700 md:text-white">
               <div class="bg-white md:bg-transparent p-6 md:p-0">
                  <h1 class="rfs-text-6xl p-0">
                     Transforming financial services with real-time analytics
                  </h1>
                  <p class="date-time">
                     <br />
                  </p>
                  <p class="rfs-text-lg">
                     Increased industry regulation a growing demand for a fully integrated, 360-degree view of customers, and data security are just some of the current challenges facing financial institutions.
                  </p>
                  <p class="rfs-text-lg">
                     However, by taking advantage of real-time data analytics at scale, banks can improve the speed and efficiency of financial close, detect fraud more efficiently and much more in real time.
                  </p>
                  <p class="rfs-text-lg">
                     In this webinar, data analytics experts discuss:
                  </p>
                  <ul class="rfs-text-lg">
                     <li>
                        How modernizing your data warehouse will allow you to gain access to real-time data can help grow your business
                     </li>
                     <li>
                        How a fast, cloud or on-premises data analytics platform can handle any data scale or complexity
                     </li>
                     <li>
                        Why full flexibility makes deployment easy anywhere, from data centers to public or private clouds
                     </li>
                  </ul>
               </div>
            </div>
            <div class="w-full md:w-1/3">
               <div class="float-form">
                  <h3 class="text-gray-700">Watch on-demand</h3>
                  <a href="/media/transforming-financial-services-with-real-time-analytics" class="rfs-text-sm button yellow basehubspot-button webcast" >Watch Now</a>
               </div>
            </div>
         </div>
      </section>
      <GoCustomers />
   </Layout>
</template>
<script>
   import GoCustomers from "~/components/GoCustomers.vue";
   import Layout from "~/layouts/Landing.vue";
   
   export default {
     metaInfo: {
       title: "Transforming financial services with real-time analytics - Yellowbrick Data",
       meta: [{
         key: "description",
         name: "description",
         content: " Learn how taking advantage of real-time data analytics at scale, can help improve the speed and efficiency of financial close, detect fraud more efficiently and much more in real time",
       }, ],
     },
     components: {
       GoCustomers,
       Layout,
     },
   };
</script>
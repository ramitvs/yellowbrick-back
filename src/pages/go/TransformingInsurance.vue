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
          <p class="eyebrow md:mb-0"><strong>Insurance industry data webinar</strong></p>
          <div class="flex flex-col sm:flex-row space-around pt-4 pb-8">
            <div class="flex items-center sysmain">
              <img src="/uploads/images/yb-logo.svg" alt="yellowbrick logo" class="w-full" />
            </div>
            <div class="flex items-center">
              <span class="text-white rfs-text-6xl text-center w-full">&nbsp;</span>
            </div>
            <div class="flex items-center systech">
              <img src="/uploads/partners-systech.svg" alt="protegrity logo" class="w-full" />
            </div>
          </div>
          <div class="bg-white md:bg-transparent p-6 md:p-0">
            <h1 class="rfs-text-6xl p-0">
            Transforming insurance services with real-time analytics
            </h1>
            <p class="date-time">
            
              <br />
              <span class="duration"><strong>Duration: </strong>60 minutes</span>
            </p>
            <p class="rfs-text-lg">
In the insurance industry, having the ability to access vast data volumes in real-time can solve for slow or inaccurate underwriting, outdated risk models, and fragmented customer records. It also enables new opportunities, such as targeted rate classes and expansion into new markets.
Unlocking the full value of data demands a modern data analytics platform that can handle any data scale or complexity, offers full deployment flexibility, and delivers insights in real time.
            </p>
            <p class="rfs-text-lg">
In this unique event, data analytics leaders discuss how a modern and fast analytics platform that can be deployed anywhere - in data centers, in public clouds, and eventually at the edge--can give insurance companies a sharpened competitive edge.
            </p>

          </div>
        </div>
         <div class="w-full md:w-1/3">
          <div class="float-form">
            <h3 class="text-gray-700">Watch on-demand</h3>
            <a href="/media/transforming-insurance" class="rfs-text-sm button yellow basehubspot-button webcast" >Watch Now</a>
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
      title: "Transforming insurance services with real-time analytics. Presented by Digital Insurance and sponsored by Yellowbrick Data",
      meta: [{
        key: "description",
        name: "description",
        content: "In this unique webinar, data analytics leaders discuss how a modern and fast analytics platform that can be deployed anywhere - in data centers, in public clouds, and eventually at the edge.",
      }, ],
    },
    components: {
      GoCustomers,
      Layout,
    },
  };
</script>
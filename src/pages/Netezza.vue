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

.expand-enter-active,
.expand-leave-active {
  transition-property: opacity, height;
}
.expand-enter,
.expand-leave-to {
  opacity: 0;
}

</style>

<template>
  <Layout>

    <section class="hero flex bg-gray-700 py-12 md:py-24 text-white px-6 xl:px-0">
      <div class="flex flex-col max-w-1200 w-full mx-auto z-10">
        <div class="w-full md:w-1/2">
          <span class="rfs-text-xl text-yellow1 mb-0">Modernize Your Infrastructure:</span>
          <h1 class="rfs-text-6xl">Yellowbrick is the #1 <a href="/uploads/ov-netezza-migration.pdf">Netezza Replacement</a></h1>
        </div>
      </div>
    </section>

    <section class="bg-white py-12 md:py-24 md:pb-32 px-6 xl:px-0">
      <div class="mx-auto w-full max-w-1200">
        <div class="flex flex-col md:flex-row mx-0 md:-mx-6 text-gray-500">
          <div class="w-full md:w-1/3 px-6 mb-16 md:mb-0">
            <h2 class="rfs-text-7xl font-semibold -my-2 leading-none text-teal">100X</h2>
              <h3 class="rfs-text-4xl leading-none">Performance</h3>
            <p>Yellowbrick dramatically shortens time-to-insight over Netezza, with some customers reporting up to 100X improvement.</p>
            <g-link to="/resources/case-studies/top-financial-services-company/" class="button yellow">Read Case Study</g-link>
          </div>
          <div class="w-full md:w-1/3 px-6 mb-16 md:mb-0">
            <h2 class="rfs-text-7xl font-semibold -my-2 leading-none text-teal">10X</h2>
              <h3 class="rfs-text-4xl leading-none">Scale</h3>
            <p>With Yellowbrick, scaling to multiple petabytes as you grow is easy, with no noticeable impact on query performance.</p>
            <g-link to="/resources/case-studies/symphony-retail-AI/" class="button yellow">Read Case Study</g-link>
          </div>
          <div class="w-full md:w-1/3 px-6 mb-16 md:mb-0">
            <h2 class="rfs-text-7xl font-semibold -my-2 leading-none text-teal">Millions</h2>
              <h3 class="rfs-text-4xl leading-none">in Savings</h3>
            <p>Thanks to an amazingly compact design with a footprint 1/30th that of Netezza, saving millions in data center costs is within reach.</p>
            <g-link to="/resources/case-studies/teoco/" class="button yellow">Read Case Study</g-link>
          </div>
        </div>
      </div>
    </section>
    
    <section class="flex pb-8 bg-gray-100 px-6 xl:px-0">
      <div class="flex flex-col justify-center max-w-1200 mx-auto">
        <div class="break-plane p-10 bg-white shadow-lg relative">
          <span class="accent"></span>
          <h3 class="text-gray-500 mb-8">Netezza Replacement: Don't Settle for More of the Same</h3>
          <div class="text-gray-500 w-full">
            <p class="rfs-text-lg">The writing has been on the wall for years: Netezza owners need an innovative, fast, and scalable replacement—one that is enterprise-grade, migration-ready, and extends natively to the cloud.</p>

            <transition-expand>
              <div v-if="expanded">
                <p class="rfs-text-lg">Unfortunately, despite years of trying, IBM has failed to provide a solution for customers that can be called anything other than warmed-over, overly complex legacy technology. As a result, many organizations have taken what turned out to be dead-end paths to unreliable, hard-to-manage alternatives like Apache Hadoop.</p>
                <p class="rfs-text-lg">Yellowbrick breaks that pattern by offering a standards-based solution that not only improves on Netezza performance (by up to 100X) and scale (to thousands of users and multiple PBs) at a fraction of the cost, but makes the migration process fast and easy-- you can be up and running in days, not weeks or months, thanks to Yellowbrick's Postgres frontend. Furthermore, its hybrid cloud architecture lets you run workloads from any private and/or major public cloud, avoiding lock-in and hidden cloud costs to streamline and remove risk from cloud journeys.</p>
              </div>
            </transition-expand>

            <button @click="expanded = !expanded" class="button dark">
              {{ expanded ? `Read Less` : `Read More` }}
            </button>

          </div>
        </div>

      </div>
    </section>
    
    <section class="bg-gray-100 pb-12 px-6 xl:px-0">
      <!-- <div class="mx-auto w-full max-w-1200">
        <div class="flex flex-col sm:flex-row flex-wrap -mx-4 md:-mx-8">

          <div class="w-full sm:w-1/2 lg:w-1/3 p-4 md:p-8">
            <img src="/uploads/ov-netezza-migration-thumb.jpg" alt="netezza migration guide overview" class="w-7/12 shadow-md" />
            <h5 class="my-6">Netezza Replacement: Modernize and Improve Performance</h5>
            <a href="/resources/overviews/netezza-migration/" class="button yellow">Read Overview</a>
          </div>

          <div class="w-full sm:w-1/2 lg:w-1/3 p-4 md:p-8">
            <img src="/uploads/wp-breaking-through-thumb.jpg" alt="breaking through netezza whitepaper" class="w-7/12 shadow-md" />
            <h5 class="my-6">Executive Whitepaper: Breaking Through Netezza End-of-Life</h5>
            <a href="/uploads/wp-breaking-through.pdf" class="button yellow">Executive Whitepaper</a>
          </div>

          <div class="w-full sm:w-1/2 lg:w-1/3 p-4 md:p-8">
            <img src="/uploads/mg-netezza-migration-guide-thumb.jpg" alt="netezza migration guide image" class="w-7/12 shadow-md" />
            <h5 class="my-6">Migrating from Netezza to Yellowbrick is Fast and Painless</h5>
            <a href="/go/netezza-migration-guide/" class="button yellow">Get Migration Guide</a>
          </div>

        </div>
      </div> -->

      <div class="mx-auto w-full max-w-1200">
        <h2 class="accent-heading">Downloadable Resources</h2>
        <div class="flex flex-col sm:flex-row flex-wrap -mx-4 md:-mx-8">

          <div class="w-full sm:w-1/2 p-4 md:p-8">
            <div class="flex flex-col md:flex-row">
              <div class="w-5/12 pr-0 md:pr-5">
                <img src="/uploads/ebook-netezza.jpg" alt="" class="shadow-md" />
              </div>
              <div class="w-full md:w-1/2">
                <div class="font-semibold rfs-text-lg">Featured eBook:</div>
                <h5 class="mb-6"><b>Replacing Netezza</b>: How to Achieve 100x Performance, 10x Scale, and Millions in Savings.</h5>
                <a href="/go/replacing-netezza/" class="button yellow" target="_blank">Download</a>
              </div>
            </div>
          </div>

          <div class="w-full sm:w-1/2 p-4 md:p-8">
            <div class="flex flex-col md:flex-row">
              <div class="w-5/12 pr-0 md:pr-5">
                <img src="/uploads/thumb-migration-guide-netezza.png" alt="" class="shadow-md" />
              </div>
              <div class="w-full md:w-1/2">
                <div class="font-semibold rfs-text-lg">Migration Guide:</div>
                <h5 class="mb-6"><b>Migrating from Netezza</b> to Yellowbrick is Fast and Painless</h5>
                <a href="/resources/migration-guides/netezza/ " class="button yellow">Get the Guide</a>
              </div>
            </div>
          </div>

          <div class="w-full sm:w-1/2 p-4 md:p-8">
            <div class="flex flex-col md:flex-row">
              <div class="w-5/12 pr-0 md:pr-5">
                <img src="/uploads/wp-breaking-through-thumb.jpg" alt="" class="shadow-md" />
              </div>
              <div class="w-full md:w-1/2">
                <div class="font-semibold rfs-text-lg">Executive White Paper:</div>
                <h5 class="mb-6">Executive Whitepaper: Breaking Through <b></b>Netezza End-of-Life</h5>
                <a href="/uploads/wp-breaking-through.pdf" class="button yellow" target="_blank">Read Paper</a>
              </div>
            </div>
          </div>

          <div class="w-full sm:w-1/2 p-4 md:p-8">
            <div class="flex flex-col md:flex-row">
              <div class="w-5/12 pr-0 md:pr-5">
                <img src="/uploads/ov-netezza-migration-thumb.jpg" alt="" class="shadow-md" />
              </div>
              <div class="w-full md:w-1/2">
                <div class="font-semibold rfs-text-lg">Migration Guide:</div>
                <h5 class="mb-6">Netezza Replacement: Modernize and Improve Performance</h5>
                <a href="/resources/overviews/netezza-migration/" class="button yellow" target="_blank">Read Guide</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>


    
    <section class="flex pb-8 bg-white py-16 px-6 xl:px-0">
      <div class="max-w-1200 mx-auto">
        <h3>With Yellowbrick you can:</h3>
        <div class="flex flex-col md:flex-row flex-wrap mx-0 md:-mx-6">
          
          <div class="w-full md:w-1/2 p-6 flex flex-row items-start">
            <img src="~@/assets/images/icons/checkmark-2.svg" class="w-16" alt="checkmark icon" />
            <p class="rfs-text-2xl pl-6">Be production ready in hours with quick migration of data</p>
          </div>
          
          <div class="w-full md:w-1/2 p-6 flex flex-row items-start">
            <img src="~@/assets/images/icons/checkmark-2.svg" class="w-16" alt="checkmark icon" />
            <p class="rfs-text-2xl pl-6">Significantly reduce footprint and reduce costs</p>
          </div>
          
          <div class="w-full md:w-1/2 p-6 flex flex-row items-start">
            <img src="~@/assets/images/icons/checkmark-2.svg" class="w-16" alt="checkmark icon" />
            <p class="rfs-text-2xl pl-6">Analyze all workloads including structured and unstructured data</p>
          </div>
          
          <div class="w-full md:w-1/2 p-6 flex flex-row items-start">
            <img src="~@/assets/images/icons/checkmark-2.svg" class="w-16" alt="checkmark icon" />
            <p class="rfs-text-2xl pl-6">Integrate all existing applications and tools seamlessly right out of the box</p>
          </div>
          
          <div class="w-full md:w-1/2 p-6 flex flex-row items-start">
            <img src="~@/assets/images/icons/checkmark-2.svg" class="w-16" alt="checkmark icon" />
            <p class="rfs-text-2xl pl-6">Future proof your data warehouse environment with massive scale, support for thousands of concurrent users and easy migration to the cloud</p>
          </div>
          
          <div class="w-full md:w-1/2 p-6 flex flex-row items-start">
            <img src="~@/assets/images/icons/checkmark-2.svg" class="w-16" alt="checkmark icon" />
            <p class="rfs-text-2xl pl-6">Get hands-on support from Yellowbrick experts to help with your <a href="/uploads/ov-netezza-migration.pdf" >Netezza migration</a></p>
          </div>

        </div>
      </div>
    </section>

    <g-link to="/blog/the-walking-dead-enterprise-edition/" class="flex flex-row flex-wrap text-white bg-gray-600 hover:bg-yellow1 hover:text-gray-600 px-6 xl:px-0">
      <div class="max-w-1200 w-full mx-auto flex flex-col md:flex-row py-8 items-center justify-around">
        
        <div class="flex flex-row items-center">
          <img src="/uploads/blog-walking-dead.jpg" class="w-32 sm:w-48 pr-4" />
          <div class="flex flex-col">
            <h6 class="mb-0">From the Blog</h6>
            <p class="mb-0 rfs-text-2xl">The Walking Dead: Enterprise Edition</p>
          </div>
        </div>

        <div class="hidden md:flex flex-col button light self-center">Read More</div>

      </div>
    </g-link>

    <!-- <section class="flex bg-gray-100 py-12 px-6 xl:px-0">
      <div class="flex w-full max-w-800 mx-auto items-center">
        <div class="w-32 mr-6">
          <img src="/uploads/ov-netezza-migration-thumb.jpg" alt="" class="w-32 shadow-md" />
        </div>
        <div class="flex flex-col items-start w-1/2">
          <h3>Don’t wait – modernize now!</h3>
          <p class="rfs-text-xl">Read more about Yellowrick migration.</p>
          <a href="/uploads/ov-netezza-migration.pdf" class="button yellow">Migrating to Yellowbrick</a>
        </div>
        <div>
          <a href="/" class="button yellow">Migrating to Yellowbrick</a>
        </div>
      </div>
    </section> -->

    <section class="flex py-12 md:py-24 bg-gray-100 px-6 xl:px-0">
      <div class="flex flex-col sm:flex-row justify-center max-w-1200 mx-auto">
        <div class="w-full sm:w-1/2 px-6 pb-6 md:pb-0">
          <img src="/uploads/blog-webinar-symphony-retail-ai.jpg" alt="Retail Giant Upgrades from Netezza: A Customer Story" />
        </div>
        <div class="w-full sm:w-1/2 px-6">
          <h5 class="mb-0 text-gray-500">On-Demand Webinar:</h5>
          <h3>Retail Giant Upgrades from Netezza: A Customer Story</h3>
          <p>Find out how Symphony RetailAI uses the Yellowbrick platform for blazing fast performance and faster time to insights. Symphony RetailAI is a global leader in AI-enabled decision platforms, solutions and insights for driving profitable revenue growth for retailers and CPG manufacturers.</p>
          <a href="/go/case-study-symphony-AI/" class="button yellow">Watch Now</a>
        </div>
      </div>
    </section>

    <section class="flex bg-gray-700 py-16 px-6 xl:px-0">
      <div class="max-w-1200 mx-auto text-white">
        
        <div class="flex flex-col md:flex-row items-center">
          <div class="w-full md:w-1/2 pr-0 md:pr-8">
            <h2>Migration Partners</h2>
            <p class="">Move your data away from Netezza easily and quickly with Yellowbrick’s best of breed partners. Our partners help you plan your transition, understand your data flows, and manage your cutover to the Yellowbrick platform.</p>
            <g-link to="/company/partners/" class="button yellow">View our Partners</g-link>
          </div>
          <div class="flex flex-col sm:flex-row flex-wrap w-full md:w-1/2 pl-0 md:pl-8">
            <img src="/uploads/partners-nextpathway.svg" class="w-full sm:w-1/2 p-8" alt="next pathway logo"/>
            <img src="/uploads/partners-systech.svg" class="w-full sm:w-1/2 p-8" alt="systech logo"/>
          </div>
        </div>
      </div>
    </section>

    <MoreInfoNetezza />

  </Layout>
</template>

<script>
import MoreInfoNetezza from '~/components/MoreInfoNetezza.vue'
import TransitionExpand from '~/components/TransitionExpand.vue'

export default {
  metaInfo: {
        title: 'Netezza End of Support: Now is the time to modernize - Yellowbrick Data',
    meta: [
      { 
        key: 'description',
        name: 'description',
            content: '﻿Netezza’s end of life is here. Yellowbrick is the perfect replacement with 100X performance, 10X scale, all with huge savings. Book a demo today.'
      },
      {
        key: 'og:description',
        name: "og:description",
          content: '﻿Netezza’s end of life is here. Yellowbrick is the perfect replacement with 100X performance, 10X scale, all with huge savings. Book a demo today.'
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
          content: '﻿Netezza’s end of life is here. Yellowbrick is the perfect replacement with 100X performance, 10X scale, all with huge savings. Book a demo today.'
      },
      {
        key: 'og:title',
        name: 'og:title',
          content: 'Netezza End of Support: Now is the time to modernize - Yellowbrick Data'
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
          content: 'Netezza End of Support: Now is the time to modernize - Yellowbrick Data'
      }
    ]
  },
  components: {
    MoreInfoNetezza,
    TransitionExpand
  },
  data() {
    return {
      expanded: false,
    };
  }

}
</script>

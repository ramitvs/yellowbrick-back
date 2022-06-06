<style scoped>
  .hero {
    background-image: url(/uploads/images/generic-bg.svg);
    background-size: cover;
    background-position: center;
  }

  .box-small-dots {
    @apply relative overflow-hidden;

    &:before {
      content: '';
      position: absolute;
      top: 44px;
      bottom: 30px;
      left: 0;
      right: 10%;
      @apply bg-gray-100;
      z-index: 1;
    }

    &:after {
      content: '';
      position: absolute;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21 21'%3E%3Cpath fill='none' d='M0 0h21v21H0z'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' fill='%234b5357' d='M9 9h3v3H9z'/%3E%3C/svg%3E");
      background-repeat: repeat;
      background-position: right;
      background-size: 22px;
      z-index: 2;
      height: 160px;
      top: 0;
      left: 0;
      right: 64%;
      transform: translateY(-40px);
      opacity: .2;
    }
  }

  .dots-left-top {
    @apply relative overflow-hidden;

    &:before {
      content: '';
      position: absolute;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21 21'%3E%3Cpath fill='none' d='M0 0h21v21H0z'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' fill='%234b5357' d='M9 9h3v3H9z'/%3E%3C/svg%3E");
      background-repeat: repeat;
      background-position: right;
      background-size: 22px;
      z-index: 2;
      height: 540px;
      top: 0;
      left: 0;
      right: 85%;
      transform: translateY(60px);
      opacity: .2;
    }
  }

  .slash-right {
    @apply relative z-0;

    &:after {
      content: '';
      @apply absolute;
      background-image: url("data:image/svg+xml,%3Csvg width='20' height='27' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v27H0z'/%3E%3Cpath d='M13.667 7.09a.663.663 0 00-.911.247L6.089 18.99a.676.676 0 00.244.919.66.66 0 00.911-.246l6.667-11.655a.676.676 0 00-.244-.919' fill='%234B5357'/%3E%3C/g%3E%3C/svg%3E");
      background-repeat: repeat;
      left: 83%;
      right: 0;
      top: 0;
      height: 331px;
      z-index: 1;
      opacity: .2
    }
  }

  .slash-right-mid {
    @apply relative z-0;

    &:after {
      content: '';
      @apply absolute;
      background-image: url("data:image/svg+xml,%3Csvg width='20' height='27' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v27H0z'/%3E%3Cpath d='M13.667 7.09a.663.663 0 00-.911.247L6.089 18.99a.676.676 0 00.244.919.66.66 0 00.911-.246l6.667-11.655a.676.676 0 00-.244-.919' fill='%234B5357'/%3E%3C/g%3E%3C/svg%3E");
      background-repeat: repeat;
      left: 83%;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      height: 331px;
      z-index: 1;
      opacity: .2
    }
  }

  .secondary-menu {
    top: calc(100% + 5px);

    & button {
      @apply bg-yellow1;
      transition: background 0.2s cubic-bezier(.4, 0, .2, 1);

      &:hover {
        @apply bg-yellow3;
      }
    }
  }

  .back-to-top {
    padding-right: 1.25rem;
    margin-bottom: .75rem;

    &:after {
      content: '';
      @apply absolute z-0;
      top: .5rem;
      right: 0;
      transform: translateY(-50%);
      height: .75rem;
      width: .5rem;
      transform: rotate(-180deg);
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.1 30.6'%3E%3Cg fill='none' stroke='%231f292e' stroke-width='3' stroke-linecap='round'%3E%3Cpath d='M9.6 1.5V27'/%3E%3Cpath stroke-linejoin='round' d='M1.5 20.6l8.1 8.5 8-8.5'/%3E%3C/g%3E%3C/svg%3E");
      background-repeat: no-repeat;
      transition: all 0.2s cubic-bezier(.4, 0, .2, 1);
    }

    &:hover {
      @apply text-yellow3;

      &:after {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.1 30.6'%3E%3Cg fill='none' stroke='%23DB8319' stroke-width='3' stroke-linecap='round'%3E%3Cpath d='M9.6 1.5V27'/%3E%3Cpath stroke-linejoin='round' d='M1.5 20.6l8.1 8.5 8-8.5'/%3E%3C/g%3E%3C/svg%3E");
        transform: translateY(-25%) rotate(-180deg);
      }
    }
  }
</style>
<template>
  <Layout>
    <section class="hero flex flex-col justify-center bg-gray-600 py-12 md:py-24 text-white px-6 xl:px-0">
      <div class="flex flex-col max-w-1200 w-full py-8 mx-auto z-10">
        <h1 class="m-0 p-0">Resource Library</h1>
        <h5 class="leading-normal py-4 w-full md:w-1/2 font-normal">Discover resources to help you understand what makes Yellowbrick Data and our solutions so great.</h5>
      </div>
    </section>

    <section id="navigation" class="py-12 md:pt-24 px-6 xl:px-0 bg-gray-light z-20">
      <div class="flex flex-col max-w-1200 w-full mx-auto">
        <div class="flex flex-wrap flex-col sm:flex-row justify-start mt-8 -mx-4">

          <div class="flex flex-col flex-wrap w-full sm:w-1/2 md:w-1/3 py-2 sm:py-5 px-4 md:mx-0 mb-8 md:mb-0 secondary">
            <div @mouseover="breifsHover = true" @mouseleave="breifsHover = false" class="text-left underline-button cursor-pointer relative">
              Resources
              <div class="flex flex-col bg-yellow1 absolute left-0 min-w-full whitespace-no-wrap bg-yellow1 rounded-b-sm secondary-menu z-10" :class="{ hidden: !breifsHover }">
                <button v-for="(resource, resourceIndex) in resourceDocuments" :key="'resource-' + resourceIndex" v-scroll-to="'#' + resource.id" class="text-left rfs-text-base capitalize px-4 py-2">
                  {{resource.categoryName | pluralize()}}
                </button>
              </div>
            </div>
          </div>

          <div class="flex flex-col flex-wrap w-full sm:w-1/2 md:w-1/3 py-2 sm:py-5 px-4 md:mx-0 mb-8 md:mb-0 secondary">
            <div @mouseover="inDepthResourcesHover = true" @mouseleave="inDepthResourcesHover = false" class="text-left underline-button cursor-pointer relative">
              In-Depth Resources
              <div class="flex flex-col bg-yellow1 absolute left-0 min-w-full whitespace-no-wrap bg-yellow1 rounded-b-sm secondary-menu z-10" :class="{ hidden: !inDepthResourcesHover }">
                <button v-for="(resource, inDepthResourceIndex) in inDepthResourcesDocuments" :key="'resource-' + inDepthResourceIndex" v-scroll-to="'#' + resource.id" class="text-left rfs-text-base capitalize px-4 py-2">
                  {{resource.categoryName | pluralize()}}
                </button>
              </div>
            </div>
          </div>

          <div class="flex flex-row flex-wrap w-full sm:w-1/2 md:w-1/3 py-2 sm:py-5 px-4 md:mx-0 mb-8 md:mb-0 secondary">
            <button v-scroll-to="'#helpfullinks'" class="text-left underline-button">Helpful Links</button>
          </div>
          <div class="flex flex-row flex-wrap w-full sm:w-1/2 md:w-1/3 py-2 sm:py-5 px-4 md:mx-0 mb-8 md:mb-0 secondary">
            <button v-scroll-to="'#podcasts'" class="text-left underline-button">Podcasts</button>
          </div>
          <div class="flex flex-row flex-wrap w-full sm:w-1/2 md:w-1/3 py-2 sm:py-5 px-4 md:mx-0 mb-8 md:mb-0 secondary">
            <button v-scroll-to="'#videos'" class="text-left underline-button">Videos</button>
          </div>
        </div>
      </div>
    </section>

    <!-- BRIEFS -->
    <section v-for="(resource, resourceIndex) in resourceDocuments" :key="resourceIndex" :id="resource.id" :class="resourceIndex % 2 === 0 ? 'bg-white' : 'bg-gray-light' " class="py-12 md:py-24 slash-right-mid dots-left-top px-6 xl:px-0">
      <div class="max-w-1200 w-full mx-auto relative z-10">
        <div class="flex justify-between items-center">
          <h2 class="accent-heading capitalize">{{resource.categoryName | pluralize()}}</h2>
          <button class="relative rfs-text-base back-to-top z-10" v-scroll-to="'#navigation'">Back to top</button>
        </div>
        <div class="flex flex-row flex-wrap -mx-5">
          <div class="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-5 mt-10" v-for="(document, docIndex) in resource.documents" :key="docIndex">
            <component :is="document.url || document.documentLink ? 'a' : 'div'" @click="handleEvent(document.url || document.documentLink || undefined)" :to="document.url || document.documentLink || undefined" :target="document.documentLink ? '_blank' : '_self'" :rel="document.documentLink ? 'noopener' : null">
              <img v-if="document.image" :src="document.image.src" class="cursor-pointer shadow-md w-2/3" :alt="document.title" />
            </component>
            <h6 class="pb-0 pt-6 mb-0 uppercase" v-text="document.category.replace('-', ' ')" />
            <p class="mb-4" v-text="document.title" />
            <component :class="`flex button yellow mt-auto ${document.class ? document.class : ''}`" :id="document.id ? document.id : ''" :is="document.url || document.documentLink ? 'a' : 'div'"
              @click="handleEvent(document.url || document.documentLink || undefined)"  :to="document.url || document.documentLink || undefined"  :target="document.documentLink ? '_blank' : '_self'" :rel="document.documentLink ? 'noopener' : null">
              <span v-if="document.url">Read Guide</span>
              <span v-if="document.documentLink">Learn more</span>
            </component>
          </div>
        </div>
      </div>
    </section>

    <!-- In-Depth Resources -->
    <section v-for="(resource, resourceIndex) in inDepthResourcesDocuments" :key="resource.resourceIndex" :id="resource.id" :class="resourceIndex % 2 === 0 ? 'bg-gray-light' : 'bg-white' "
      class="slash-right-mid dots-left-top py-12 md:py-32 md:pt-48 px-6 xl:px-0">
      <div class="max-w-1200 w-full mx-auto z-10 relative">
        <div class="flex justify-between items-center">
          <h2 class="accent-heading capitalize">{{resource.categoryName | pluralize()}}</h2>
          <button class="relative rfs-text-base back-to-top z-10" v-scroll-to="'#navigation'">Back to top</button>
        </div>
        <div class="flex flex-row flex-wrap -mx-5">
          <div class="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-5 mt-10" v-for="(document, docIndex) in resource.documents" :key="docIndex">
            <component :is="document.url || document.documentLink ? 'a' : 'div'" @click="handleEvent(document.url || document.documentLink || undefined)" :to="document.url || document.documentLink || undefined"  :target="document.documentLink ? '_blank' : '_self'" :rel="document.documentLink ? 'noopener' : null">
              <img v-if="document.image" :src="document.image.src" class="cursor-pointer shadow-md w-2/3" :alt="document.title" />
            </component>
            <h6 class="pb-0 pt-6 mb-0 uppercase" v-text="document.category.replace('-', ' ')" />
            <p class="mb-4" v-text="document.title" />
            <component :class="`flex button yellow mt-auto ${document.class ? document.class : ''}`" :id="document.id ? document.id : ''" :is="document.url || document.documentLink ? 'a' : 'div'"
              @click="handleEvent(document.url || document.documentLink || undefined)" :target="document.documentLink ? '_blank' : '_self'" :rel="document.documentLink ? 'noopener' : null">
              <span v-if="document.url">Download</span>
            </component>
          </div>
        </div>

      </div>
    </section>

    <section class="bg-white slash-right-mid dots-left-top py-12 md:py-32 md:pt-48 px-6 xl:px-0" id="podcasts">
      <div class="max-w-1200 w-full mx-auto z-10 relative">
        <div class="flex justify-between items-center">
          <h2 class="accent-heading">Podcasts</h2>
          <button class="relative rfs-text-base back-to-top z-10" v-scroll-to="'#navigation'">Back to top</button>
        </div>
        <a id="podcasts" name="podcasts"></a>
        <iframe class="mb-10" height="200px" width="100%" frameborder="no" scrolling="no" seamless src="https://player.simplecast.com/68afe6e7-55c6-43b3-b2f6-7112aeb4c722?dark=false"></iframe>

        <iframe src="https://castbox.fm/app/castbox/player/id2983312?v=8.22.10&autoplay=0" frameborder="0" width="100%" height="500"></iframe>

        <h6>Subscribe to the podcast from any of these services:</h6>
        <a href="https://anchor.fm/realtimequeries" class="bg-yellow1 hover:bg-yellow3 rfs-text-base w-auto text-center inline-flex leading-tight self-start rounded-sm p-3 mr-4" target="_blank" rel="noopener"><span class="h-6 w-6">
            <g-image src="/uploads/images/podcasts/anchor.svg" alt="anchor podcast icon" />
          </span></a>
        <a href="https://podcasts.apple.com/us/podcast/real-time-queries/id1517061054" class="bg-yellow1 hover:bg-yellow3 rfs-text-base w-auto text-center inline-flex leading-tight self-start rounded-sm p-3 mr-4" target="_blank" rel="noopener"><span
            class="h-6 w-6">
            <g-image src="/uploads/images/podcasts/apple.svg" alt="apple podcast icon" />
          </span></a>
        <a href="https://www.breaker.audio/real-time-queries" class="bg-yellow1 hover:bg-yellow3 rfs-text-base w-auto text-center inline-flex leading-tight self-start rounded-sm p-3 mr-4" target="_blank" rel="noopener"><span class="h-6 w-6">
            <g-image src="/uploads/images/podcasts/breaker.svg" alt="breaker podcasts icon" />
          </span></a>
        <a href="https://castbox.fm/ch/2983312" class="bg-yellow1 hover:bg-yellow3 rfs-text-base w-auto text-center inline-flex leading-tight self-start rounded-sm p-3 mr-4" target="_blank" rel="noopener"><span class="h-6 w-6">
            <g-image src="/uploads/images/podcasts/castbox.svg" alt="castbox podcasts icon" />
          </span></a>
        <a href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8yM2VlODE5NC9wb2RjYXN0L3Jzcw==" class="bg-yellow1 hover:bg-yellow3 rfs-text-base w-auto text-center inline-flex leading-tight self-start rounded-sm p-3 mr-4"
          target="_blank" rel="noopener"><span class="h-6 w-6">
            <g-image src="/uploads/images/podcasts/google.svg" alt="google podcasts icon" />
          </span></a>
        <a href="https://overcast.fm/itunes1517061054/real-time-queries" class="bg-yellow1 hover:bg-yellow3 rfs-text-base w-auto text-center inline-flex leading-tight self-start rounded-sm p-3 mr-4" target="_blank" rel="noopener"><span
            class="h-6 w-6">
            <g-image src="/uploads/images/podcasts/overcast.svg" alt="overcast podcasts icon" />
          </span></a>
        <a href="https://pca.st/e5on9au0" class="bg-yellow1 hover:bg-yellow3 rfs-text-base w-auto text-center inline-flex leading-tight self-start rounded-sm p-3 mr-4" target="_blank" rel="noopener"><span class="h-6 w-6">
            <g-image src="/uploads/images/podcasts/pocketcast.svg" alt="pocket cast podcasts icon" />
          </span></a>
        <a href="https://radiopublic.com/realtime-queries-GOeDko" class="bg-yellow1 hover:bg-yellow3 rfs-text-base w-auto text-center inline-flex leading-tight self-start rounded-sm p-3 mr-4" target="_blank" rel="noopener"><span class="h-6 w-6">
            <g-image src="/uploads/images/podcasts/radiopublic.svg" alt="radio public podcasts icon" />
          </span></a>
        <a href="https://open.spotify.com/show/2sLfrADem5R8prFRBqoHbY" class="bg-yellow1 hover:bg-yellow3 rfs-text-base w-auto text-center inline-flex leading-tight self-start rounded-sm p-3 mr-4" target="_blank" rel="noopener"><span class="h-6 w-6">
            <g-image src="/uploads/images/podcasts/spotify.svg" alt="spotify podcasts icon" />
          </span></a>
        <a href="https://www.stitcher.com/podcast/realtime-queries" class="bg-yellow1 hover:bg-yellow3 rfs-text-base w-auto text-center inline-flex leading-tight self-start rounded-sm p-3 mr-4" target="_blank" rel="noopener"><span class="h-6 w-6">
            <g-image src="/uploads/images/podcasts/stitcher.svg" alt="stitcher podcasts icon" />
          </span></a>
      </div>
    </section>

    <section class="bg-white box-small-dots py-12 md:py-32 md:pt-48 px-6 xl:px-0" id="helpfullinks">
      <div class="max-w-1200 w-full mx-auto z-10 relative">
        <div class="flex justify-between items-center">
          <h2 class="accent-heading">Helpful Links</h2>
          <button class="relative rfs-text-base back-to-top z-10" v-scroll-to="'#navigation'">Back to top</button>
        </div>

        <div class="flex flex-row flex-wrap -mx-4">
          <a @click="handleEvent('/press-releases/yellowbrick-ceo-qa-with-neil-carson/')" to="/press-releases/yellowbrick-ceo-qa-with-neil-carson/" class="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-8">
            <g-image class="shadow-md" src="/uploads/blog-BLOG-CEO-QA-1-1024x512.jpg" alt="Q&A with Neil Carson part 1" />
            <span class="pt-2">Q&amp;A with Neil Carson, Part 1</span>
          </a>

          <a  @click="handleEvent('/press-releases/yellowbrick-ceo-qa-part-2-cloud/')" to="/press-releases/yellowbrick-ceo-qa-part-2-cloud/" class="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-8">
            <g-image class="shadow-md" src="/uploads/blog-BLOG-CEO-QA-Cloud-1024x512.png" alt="Q&A with Neil Carson part 2" />
            <span class="pt-2">Q&amp;A with Neil Carson, Part 2</span>
          </a>

          <a @click="handleEvent('/blog/open-the-dam-in-your-data-lake/')" to="/blog/open-the-dam-in-your-data-lake/" class="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-8">
            <g-image class="shadow-md" src="/uploads/blog-Open-The-Dam-In-Your-Data-Lake-2.jpg" alt="Open the Dam in your Data Lake" />
            <span class="pt-2">Open the Dam in Your Data Lake</span>
          </a>

          <a  @click="handleEvent('/blog/succeeding-with-telecom-analytics/')" to="/blog/succeeding-with-telecom-analytics/" class="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-8">
            <g-image class="shadow-md" src="/uploads/blog-Telecom-Success-banner.jpg" alt="Succeeding with Telecom Analytics" />
            <span class="pt-2">Succeeding with Telecom Analytics</span>
          </a>

          <a @click="handleEvent('/resources/case-studies/teoco/')" to="/resources/case-studies/teoco/" class="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-8">
            <g-image class="shadow-md" src="/uploads/blog-TEOCO-Blog-Header-1024x512.jpg" alt="Yellowbrick Data Insights and Innovations" />
            <span class="pt-2">Yellowbrick Data Enables Insights Innovation and Savings at Teoco</span>
          </a>

          <a @click="handleEvent('/blog/financial-services-companies-gain-a-competitive-edge-with-yellowbrick/')" to="/blog/financial-services-companies-gain-a-competitive-edge-with-yellowbrick/" class="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-8">
            <g-image class="shadow-md" src="/uploads/blog-Financial-Services-blog-banner.jpg" alt="Yellowbrick helps financial services companies" />
            <span class="pt-2">Financial Services Companies Gain a Competitive Edge with Yellowbrick</span>
          </a>

          <a @click="handleEvent('/blog/yellowbrick-helps-banks-achieve-analytics-and-data-warehousing-goals/')" to="/blog/yellowbrick-helps-banks-achieve-analytics-and-data-warehousing-goals/" class="flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-8">
            <g-image class="shadow-md" src="/uploads/blog-Banks-blog-banner.jpg" alt="Yellowbrick helps banks with Data Warehouses" />
            <span class="pt-2">Yellowbrick Helps Banks Achieve Analytics and Data Warehousing Goals</span>
          </a>
        </div>
      </div>
    </section>

    <section class="py-12 md:py-20 slash-right px-6 xl:px-0" id="videos">
      <div class="max-w-1200 w-full mx-auto">
        <div class="flex justify-between items-center">
          <h2 class="accent-heading capitalize">Videos</h2>
          <button class="relative rfs-text-base back-to-top z-10" v-scroll-to="'#navigation'">Back to top</button>
        </div>

        <div class="flex flex-row flex-wrap -mx-5">

          <div class="flex flex-col w-full md:w-1/2 lg:w-1/3 px-5 py-8">
            <BaseWistia class="w-full" id="jl7d88uzmd" />
            <h6 class="mt-6">
              <a @click="handleEvent('/media/sas-yellowbrick/')"  to="/media/sas-yellowbrick/">Yellowbrick Explained</a>
            </h6>
          </div>

          <div class="flex flex-col w-full md:w-1/2 lg:w-1/3 px-5 py-8">
            <BaseWistia class="w-full" id="zhxu93wd5o" />
            <h6 class="mt-6">
              <a @click="handleEvent('/media/sas-yellowbrick/')" to="/media/sas-yellowbrick/">SAS + Yellowbrick</a>
            </h6>
          </div>

          <div class="flex flex-col w-full md:w-1/2 lg:w-1/3 px-5 py-8">
            <BaseWistia class="w-full" id="pslx2b3yri" />
            <h6 class="mt-6">
              <a @click="handleEvent('/media/yellowbrick-tableau-demo/')" to="/media/yellowbrick-tableau-demo/">Yellowbrick Overview with Tableau Demo</a>
            </h6>
          </div>

          <div class="flex flex-col w-full md:w-1/2 lg:w-1/3 px-5 py-8">
            <BaseWistia class="w-full" id="qj0ki5ex4d" />
            <h6 class="mt-6">Symphony RetailAI Customer Video</h6>
          </div>

          <div class="flex flex-col w-full md:w-1/2 lg:w-1/3 px-5 py-8">
            <BaseWistia class="w-full" id="8ombnnb84k" />
            <h6 class="mt-6">Clarity Customer Video</h6>
          </div>

          <div class="flex flex-col w-full md:w-1/2 lg:w-1/3 px-5 py-8">
            <BaseWistia class="w-full" id="la4zrp63ow" />
            <h6 class="mt-6">Teoco Customer Video</h6>
          </div>

          <!-- <div class="flex flex-col w-full md:w-1/2 lg:w-1/3 px-5 py-8">
            <div class="yt-wrap">
              <iframe
                class="w-full"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/tL5WeZgm2yI?rel=0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                title="Teoco Customer Video"
                allowfullscreen
              ></iframe>
            </div>
            <h6 class="mt-6">Webcast: Architecting a Modern Data Warehouse</h6>
          </div> -->

        </div>
      </div>
    </section>

    <MoreInfoDots />

  </Layout>
</template>

<script>
  import MoreInfoDots from '~/components/MoreInfoDots.vue'

  export default {
    metaInfo: {
      title: 'Resource Library',
      meta: [{
          key: 'description',
          name: 'description',
          content: 'Browse the collection of Yellowbrick Data Warehouse resources.'
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: 'description',
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: 'description',
        }
      ]
    },
    data: () => ({
      breifsHover: false,
      inDepthResourcesHover: false,
      documents: [],
      resourceDocuments: [],
      inDepthResources: [],
      inDepthResourcesDocuments: [],
      podcasts: [],
      videos: []
    }),
    components: {
      MoreInfoDots
    },
    methods: {
            handleEvent(open) {
                window.location.href = open;
        },

    },
    mounted() {
      this.documents = this.$page.resources.documents;
      const resourceDocumentCategories = [...new Set(this.documents.map(doc => doc.category))];

      if (resourceDocumentCategories.length) {
        resourceDocumentCategories.map(categoryName => {
          const catDocs = this.documents.filter(doc => doc.category === categoryName);
          this.resourceDocuments.push({
            id: categoryName,
            categoryName: categoryName.replace('-', ' '),
            documents: catDocs
          });
        })
      }

      // TODO break category and results into reusable method.
      this.inDepthResources = this.$page.resources.inDepthResources;
      const inDepthResourcesDocumentCategories = [...new Set(this.inDepthResources.map(doc => doc.category))];

      if (inDepthResourcesDocumentCategories.length) {
        inDepthResourcesDocumentCategories.map(categoryName => {
          const catDocs = this.inDepthResources.filter(doc => doc.category === categoryName);
          this.inDepthResourcesDocuments.push({
            id: categoryName,
            categoryName: categoryName.replace('-', ' '),
            documents: catDocs
          });
        })
      }

    }
  };
</script>

<page-query>
  query Page {
  resources: pages(path: "/data/pages/resources") {
  documents {
  title
  url
  image
  category
  documentLink
  class
  id
  },
  inDepthResources {
  category
  title
  image
  url
  }
  }
  }
</page-query>

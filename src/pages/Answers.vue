<style scoped>
  #app {
    background-image: url(/uploads/images/diamond-light.svg);
    background-size: 100%;
    background-position: top right;
    background-repeat: no-repeat;
    background-attachment: fixed;
    z-index: 1;
  }

  .hero {
    background-image: url(/uploads/images/answers-bg.jpg);
    background-size: cover;
    background-position: center center;
    z-index: 1;
  }

  .predictability-bg {
    background-image: url(/uploads/images/predictability-bg.svg);
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: 50%;
  }

  .dk-bg .mktoForm .mktoFormRow .mktoLabel {
    color: #ffffff !important;
  }

  .colorized {
    &:hover {
      transition: all .2s ease;
      filter: url(#yellowize);
    }
  }

  .aspect-ratio {
    padding-bottom: 40.36%;
    height: 100%;
    position: relative;
  }

  .youtube-embed {
    width: 100%;
    height: 325px;
  }

  /* RESPONSIVE TEXT FORMULA */
  /* target font size + (large size - small size) * (100vw - smallest breakpoint) / (largest breakpoint - smallest breakpoint) */
</style>

<template>
  <Layout>
    <section class="hero flex relative z-10">
      <div class="flex flex-col justify-center py-12 sm:pt-8 sm:pb-32 relative z-20">

        <h2 class="mx-8">
          <img src="/uploads/images/answers-lockup.svg" class="w-1/3 mx-auto" alt="yellowbrick answers virtual event" />
        </h2>
        <div class="w-full md:w-3/4 py-8 my-8 mx-auto">
          <BaseWistia id="xikm8rwlll" />
        </div>
      </div>
    </section>
    <section class="py-12 md:py-24 md:pb-0 bg-white overflow-hidden px-6 xl:px-0 z-10" id="upcoming">
      <div class=" max-w-1200 w-full mx-auto">
        <h2 class="accent-heading">Watch individual sessions</h2>
        <div class="flex flex-wrap -mx-6 z-10">
          <div class="flex flex-col p-6 pb-16 relative w-full sm:w-full md:w-1/2">
            <iframe class="w-full youtube-embed"
              src="https://www.youtube.com/embed/1Kd5te11w4w?rel=0"
              title="A Vision Of Analytics Video"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
            <h6 class="text-gray-600 font-semibold my-6 uppercase">Keynote address: A vision of analytics</h6>
            <p class="mb-2">The pandemic and related disruptions have caused companies to think hard about their data and analytics strategies and how they get real-time answers. Yellowbrick CEO, Neil Carson, discusses why the single most important set of technologies a company should be investing in today is an analytics infrastructure. Carson explains why these are the technologies that will determine whether your business survives.</p>
            <div class="flex flex-wrap justify-between -mx-6 z-10">
              <div class="flex flex-col p-6 pb-16 relative w-full">
                <strong>Featuring:</strong> Neil Carson, Chief Executive Officer at Yellowbrick
              </div>
            </div>
          </div>
          <div class="flex flex-col p-6 pb-16 relative w-full sm:w-full md:w-1/2">
            <iframe class="w-full youtube-embed"
              title="Hybrid/multi-cloud approaches for data analytics video"
              src="https://www.youtube.com/embed/mLFBRLCI3EM?rel=0?rel=0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
            <h6 class="text-gray-600 font-semibold my-6 uppercase">Hybrid/Multi-Cloud approaches for data analytics</h6>
            <p>
              The coronavirus pandemic has provided a dramatic reminder of the critical importance of data and analytics and the need for agile approaches to data-driven decision-making. Matt Aslett from 451 Research explores the latest trends related to database adoption and migration plans as enterprises look to accelerate agility while also making the most efficient use of existing investments.
            </p>
            <div class="flex flex-wrap justify-between -mx-6 z-10">
              <div class="flex flex-col p-6 pb-16 relative w-full">
                <strong>Featuring:</strong> Matt Aslett, Research Director, Data Platforms and Analytics at 451 Research
              </div>
            </div>
          </div>
          <div class="flex flex-col p-6 pb-16 relative w-full sm:w-full md:w-1/2">
            <iframe class="w-full youtube-embed"
              title="Ecosystem Roundtable: Building the best-of-breed data analytics cloud video"
              src="https://www.youtube.com/embed/N1FDMtJ7wzM?rel=0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
            <h6 class="text-gray-600 font-semibold my-6 uppercase">Ecosystem Roundtable: Building the best-of-breed data analytics cloud</h6>
            <p>The current business climate is a reminder of how quickly business can change. Forward-thinking business strategies based on data insights prepare and propel growth and competitiveness. Deploying data analytics is now more critical than ever. In this panel, executives from Yellowbrick partners will share their views on how companies should modernize data analytics to improve responsiveness and agility in these challenging times.</p>
            <div class="flex flex-wrap justify-between -mx-6 z-10">
              <div class="flex flex-col p-6 pb-16 relative w-full">
                <strong>Moderator:</strong> Allen Holmes, Vice President of Business Development at Yellowbrick
                <strong class="mt-3">Panelists:</strong>
                <ul class="mt-0">
                  <li class="mb-0">Ramesh Indraghanti, Sr. Director, Platforms & AI Engineering at Capgemini</li>
                  <li class="mb-0">Ravi Shankar, Senior VP & Chief Marketing Officer at Denodo</li>
                  <li class="mb-0">Saurabh Abhyankar, EVP and Chief Product Officer at MicroStrategy</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="flex flex-col p-6 pb-16 relative w-full sm:w-full md:w-1/2">
            <iframe class="w-full youtube-embed"
              title="Industry Roundtable: Investing in analytics during disruption"
              src="https://www.youtube.com/embed/OohMnlYZ97w?rel=0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
            <h6 class="text-gray-600 font-semibold my-6 uppercase">Industry Roundtable: Investing in analytics during disruption</h6>
            <p>Data-driven organizations everywhere are seeing changes in enterprise data never encountered before, stressing data analytics infrastructure (if not business models themselves) in unexpected ways. How should investments in that infrastructure change to meet that challenge? In this panel, technical leaders from innovative companies in the telecommunications, insurance, and electronic payments industries share their experiences from along that journey.</p>
            <div class="flex flex-wrap justify-between -mx-6 z-10">
              <div class="flex flex-col p-6 pb-16 relative w-full">
                <strong>Moderator:</strong> Justin Kestelyn, Vice President of Product Marketing at Yellowbrick
                <strong class="mt-3">Panelists:</strong>
                <ul class="mt-0">
                  <li class="mb-0">Faye Henris, Vice President, Business Analytics at TEOCO Corporation</li>
                  <li class="mb-0">Steve Emmerich, Chief Architect at ACI Worldwide, Inc.</li>
                  <li class="mb-0">Mitch Kwiatkowski, VP Enterprise Data Hub, Enterprise Analytics at Highmark Health</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-black py-8 sm:pb-16 sm:pt-32 z-10 px-6 xl:px-0">
      <div class="flex flex-col max-w-1200 w-full mx-auto relative text-white">
        <h2 class="accent-heading rfs-text-7xl font-bold w-full">Thanks to our sponsors</h2>
        <div class="pt-4 pb-10 md:pb-24 text-center">
          <span class="text-left w-full inline-block rfs-text-4xl text-gray-200 uppercase font-medium">Platinum</span>
          <div class="flex flex-row flex-wrap justify-start w-3/4">
            <img class="w-1/2 px-3 py-8 sm:px-5 md:px-12 self-center" src="/uploads/sponsors-denodo.svg" alt="denodo" />
            <img class="w-1/2 px-3 py-8 sm:px-5 md:px-12 self-center" src="/uploads/sponsors-microstrategy.svg" alt="microstrategy" />
          </div>
        </div>
        <div class="pt-4 pb-10 md:pb-24 text-center">
          <span class="text-left w-full inline-block rfs-text-4xl text-gray-200 uppercase font-medium">Gold</span>
          <div class="flex flex-row flex-wrap justify-start w-3/4">
            <img class="w-1/2 px-3 py-8 sm:px-6 md:px-20 self-center" src="/uploads/sponsors-converge.svg" alt="converge technology solutions" />
            <img class="w-1/2 px-3 py-8 sm:px-6 md:px-20 self-center" src="/uploads/sponsors-digital-realty.svg" alt="sisense" />
            <img class="w-1/2 px-3 py-8 sm:px-6 md:px-20 self-center" src="/uploads/sponsors-icedq.svg" alt="icedq" />
            <img class="w-1/2 px-3 py-8 sm:px-6 md:px-20 self-center" src="/uploads/sponsors-sisense.svg" alt="sisense" />
          </div>
        </div>
        <div class="pt-4 pb-10 md:pb-24 text-center">
          <span class="text-left w-full inline-block rfs-text-4xl text-gray-200 uppercase font-medium">Silver</span>
          <div class="flex flex-row flex-wrap justify-start w-3/4">
            <img class="w-1/3 py-8 px-3 sm:px-5 md:px-12 self-center" src="/uploads/sponsors-coffing.svg" alt="coffing data warehouse" />
            <img class="w-1/3 py-8 px-3 sm:px-5 md:px-12 self-center" src="/uploads/sponsors-emtec.svg" alt="emtec" />
            <img class="w-1/3 py-8 px-3 sm:px-5 md:px-12 self-center" src="/uploads/sponsors-lightwell.svg" alt="lightwell" />
            <img class="w-1/3 py-8 px-3 sm:px-5 md:px-12 self-center" src="/uploads/sponsors-manta.svg" alt="manta" />
            <img class="w-1/3 py-8 px-3 sm:px-5 md:px-12 self-center" src="/uploads/sponsors-nexla.svg" alt="nexla" />
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query Page {
    speakers: pages(path: "/data/pages/speakers") {
      path
      id
      members {
        name
        position
        photo
        body
      }
    }
  }
</page-query>

<script>
  import Layout from '~/layouts/AnswersLiveHeader.vue'
  import CountdownDark from '~/components/CountdownDark.vue'
  import TransitionExpand from '~/components/TransitionExpand.vue'
  import slugify from '@sindresorhus/slugify'

  export default {
    metaInfo: {
      title: 'Yellowbrick Virtual Event: Answers for a World That Can\'t Wait',
      meta: [{
          key: 'description',
          name: 'description',
          content: 'Join this fast-paced 120 minutes of talk about many exciting industry topics.'
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: 'Join this fast-paced 120 minutes of talk about many exciting industry topics.'
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: 'Join this fast-paced 120 minutes of talk about many exciting industry topics.'
        },
        {
          key: 'og:image',
          name: 'og:image',
          content: 'https://www.yellowbrick.com/uploads/yellowbrick-answers-event.jpg'
        },
        {
          key: 'twitter:image',
          name: 'twitter:image',
          content: 'https://www.yellowbrick.com/uploads/yellowbrick-answers-event.jpg'
        }
      ]
    },
    components: {
      Layout,
      CountdownDark,
      TransitionExpand
    },
    data: () => ({
      show: false,
      expanded: false,
      selectedBio: null
    }),
    methods: {
      slugify,
    },
    mounted() {
      this.show = true;
    }
  }
</script>
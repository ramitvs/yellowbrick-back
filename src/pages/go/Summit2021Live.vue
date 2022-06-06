<style scoped>
  .hero {
    background-image: url('/uploads/Yellowbrick_AprilSummitHeroImage.jpg');
    background-size: cover;
    background-position: center center;
    z-index: 1;
  }
</style>

<template>
  <Layout>
    <section class="hero flex relative z-10">
      <div class="flex flex-col justify-center py-12 sm:pt-8 sm:pb-32 relative z-20">

        <div class="w-full md:max-w-1200 px-12 mx-auto">
          <div class="title-container py-2 mb-8">
            <h4 class="title text-2xl md:text-3xl text-yellow1 font-semibold leading-none">
              Welcome to Yellowbrick Summit 2021 On-demand
            </h4>
          </div>
          <div class="flex flex-col xl:flex-row">
            <div class="w-full md:max-w-1200 mx-auto mb-12 xl:mb-0">
              <BaseWistia id="7jgcy9mpfk" class="mx-auto" />
            </div>
          </div>
        </div>

        <a href="#business-sessions" v-scroll-to="{el: '#business-sessions',}" title="See Individual Sessions" class="button yellow mx-auto mt-20">See Individual Sessions</a>

      </div>
    </section>

    <section class="bg-gray-100 text-center pt-0 pb-16">
      <div class="flex-wrap max-w-1200 pt-16 mx-auto">
        <h2 class="text-5xl leading-none text-gray-600">About this Summit</h2>
        <p class="rfs-text-xl">Learn about the future of faster, more flexible cloud data warehouses. This deep dive into Yellowbrick's innovative platform is a must for data professionals and IT leaders from all industries.</p>
      </div>
      <div class="flex flex-wrap max-w-1200 py-16 mx-auto">
        <div class="w-full md:w-1/3 px-12">
          <div class="image-container w-full mb-4">
            <img class="h-20 w-auto mx-auto" src="/uploads/icons/yb-fin-blue.png" alt="Data Analytics Leaders | Yellowbrick"/>
          </div>
          <h4 class="text-base text-teal">Data Analytics Leaders</h4>
          <p class="text-sm">Understand how to achieve real-time analytics and the new paradigms in analytics infrastructure</p>
        </div>
        <div class="w-full md:w-1/3 px-12">
          <div class="image-container w-full mb-4">
            <img class="h-20 w-auto mx-auto" src="/uploads/icons/yb-data-blue.png" alt="Data Analytics Leaders | Yellowbrick"/>
          </div>
          <h4 class="text-base text-teal">Architects & Data Engineers</h4>
          <p class="text-sm">Dive into Yellowbrick architectural details, capabilities, and best practices that give more data consumers access to more up-to-the-second data in near real time</p>
        </div>
        <div class="w-full md:w-1/3 px-12">
          <div class="image-container w-full mb-4">
            <img class="h-20 w-auto mx-auto" src="/uploads/icons/yb-perf-blue.png" alt="Data Analytics Leaders | Yellowbrick"/>
          </div>
          <h4 class="text-base text-teal">Data Consumers</h4>
          <p class="text-sm">Learn how simultaneous, speed-of-thought access to vast amounts of streaming and at-rest data makes data insight faster and more impactful</p>
        </div>
      </div>
      <div class="button-container mb-20 hidden">
        <a href="#hero-section" class="btn button bg-yellow1 rfs-text-xl cta-button font-bold">RSVP today</a>
      </div>
    </section>

    <section class="py-12 md:py-24 md:pb-0 bg-white overflow-hidden px-6 xl:px-0 z-10" id="business-sessions">
      <div class=" max-w-1200 w-full mx-auto">
        <h2 class="accent-heading">Watch individual business sessions</h2>
        <div class="flex flex-wrap -mx-6 z-10">
          <div v-for="(session, index) in buessinessSessions" :key=index class="flex flex-col p-6 pb-16 relative w-full sm:w-full md:w-1/2">
            <base-wistia :id="session.wistiaID"></base-wistia>
            <h6 class="text-gray-600 font-semibold my-6 uppercase" v-html="session.title"></h6>
            <p class="mb-2" v-html="session.description"></p>
            <div class="flex flex-wrap justify-between -mx-6 z-10">
              <div class="flex flex-col p-6 pb-16 relative w-full">
                <strong>Featuring:</strong>
                <p class="text-base" v-for="(speaker, index) in session.speakers" :key=index>{{speaker}}</p>
                <template v-if="session.panelists">
                  <strong>Panelists:</strong>
                  <ul>
                    <li v-for="(panelist, index) in session.panelists" :key="index">{{panelist}}</li>
                  </ul>
                </template>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="py-12 md:pb-0 bg-white overflow-hidden px-6 xl:px-0 z-10" id="technical-sessions">
      <div class="max-w-1200 w-full mx-auto">
        <h2 class="accent-heading">Watch individual technical sessions</h2>
        <div class="flex flex-wrap -mx-6 z-10">
          <div v-for="(session, index) in technicalSessions" :key=index class="flex flex-col p-6 pb-16 relative w-full sm:w-full md:w-1/2">
            <base-wistia :id="session.wistiaID"></base-wistia>
            <h6 class="text-gray-600 font-semibold my-6 uppercase">{{session.title}}</h6>
            <p class="mb-2">{{session.description}}</p>
            <div class="flex flex-wrap justify-between -mx-6 z-10">
              <div class="flex flex-col p-6 pb-16 relative w-full">
                <strong>Featuring:</strong>
                <p class="text-base mb-0" v-for="(speaker, index) in session.speakers" :key=index>{{speaker}}</p>
              </div>
            </div>
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
  import slugify from '@sindresorhus/slugify'
  import BaseWistia from '../../components/BaseWistia.vue'

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
      BaseWistia
    },
    data() {

      return {
        buessinessSessions: [ {
          title: `Keynote:`,
            description: `The technology behind the world’s fastest, most flexible data warehouse`,
            speakers: [`Neil Carson, CEO, Yellowbrick`],
            wistiaID: `t37k3kbcb1`
        }

        ,
          {
            title: `GigaOm session:`,
            description: `Trends and Innovation in Data Warehouses`,
            speakers: [`Andrew Brust, GigaOm Analyst`],
            wistiaID: `axfo0zwtld`
        }

        ,
          {
            title: `Thought Leadership Panel:`,
            description: `The Next Frontier: Data warehousing for distributed clouds`,
            speakers: [`Mark Cusack, CTO, Yellowbrick`],
            panelists: [
              `Matthias Baumhof, CTO, Threatmetrix`,
              `Srinivasan Sankar, Enterprise Data Leader, Hanover Insurance Group`,
              `Salema Rice, Chief Data Officer, Geometric Results, Inc.`
            ],
            wistiaID: `6msurnxwdg`
        }

        ,
          {
            title: `Partner Panel:`,
            description: `Building a partner ecosystem for next-generation analytic platforms`,
            speakers: [`Allen Holmes, VP, Business Development, Yellowbrick`],
            panelists: [
              `Jay Chitnis, VP Global Alliances, Partners, and Business Development, Protegrity`,
              `Nandakumar Sivaraman, Practice Head, Data and Insights, Emtec, Inc.`,
              `Vinay Mathur, Chief Strategy, Next Pathway`,
            ],
            wistiaID: `3ueieltjon`
        }

        ,
        ],
        technicalSessions: [ {
            title: `Getting Started with Yellowbrick`,
            description: `Learn how to manage instances, create databases and users, load data, and query and explore your data using the Yellowbrick Manager web UI`,
            speakers: [`Mike McWhorter, Systems Engineer, Yellowbrick`],
            wistiaID: `vaktn8zz55`
        }

        ,
          {
            title: `Yellowbrick Architecture 101: Concepts`,
            description: `“How is Yellowbrick so fast?”, you may ask? Get the answer in this introduction to Yellowbrick concepts and design principles, including its unique adaptive cut-through architecture.`,
            speakers: [`Christian Shrauder VP, Systems Engineering, Yellowbrick`],
            wistiaID: `uwpfzl634j`
        }

        ,
          {
            title: `Intro to Yellowbrick Architecture 102: Advanced Concepts`,
            description: `Learn about workload management, security, replication, and other key Yellowbrick features that make it stand out from other data warehouses`,
            speakers: [`Joey Foley, Senior Systems Engineer, Yellowbrick`],
            wistiaID: `5mmwfwf5xq`
        }

        ,
          {
          title: `Demo: Data warehousing for Distributed Clouds`,
            description: `Data is everywhere, and data warehouses have to adapt. Watch this demo to see Yellowbrick bring near-real-time performance to data across multiple private cloud and public cloud environments`,
            speakers: [`Joey Foley, Senior Systems Engineer, Yellowbrick`],
            wistiaID: `fg2n1qr65z`
        }

        ,
          {
            title: `Building a Self-service Distributed Cloud`,
            description: `Learn how the combination of Yellowbrick and Denodo allow you to create a self-service distributed cloud environment in which 1000s of users can get near-real time results from data wherever it's physically located--in private clouds, public clouds, or at the edge.`,
            speakers: [
              `Lorenzo Danesi, Senior Systems Engineer, Yellowbrick`,
              `Suntosh Murthy, Sales Engineer, Denodo`
            ],
            wistiaID: `asolvgz10m`
        }

        ]
      }

    }

    ,
    methods: {
      slugify,
      hubspotLoaded() {
        window.hbspt.cta.load(8366986, 'ca399297-882d-41a6-b393-c7f7f5900333', {});
      }
    },
    mounted() {
      this.show = true;
    }
  }
</script>
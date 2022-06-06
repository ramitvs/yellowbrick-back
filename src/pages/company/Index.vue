<style scoped>

.hero {
  background-image: url(/uploads/images/cloud-hero-bg.svg);
  background-size: cover;
}
.modal-details {
  @apply bg-white;
}
.dots-square-mix {
  position: relative;
  z-index: 1;
  &:before {
    @apply absolute top-0 left-0;
    content: '';
    right: 60%;
    bottom: 40px;
    position: absolute;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21 21'%3E%3Cpath fill='none' d='M0 0h21v21H0z'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' fill='%234b5357' d='M9 9h3v3H9z'/%3E%3C/svg%3E");
    background-repeat: repeat;
    background-size: 22px;
    z-index: 1;
    opacity: .25;
  }
  &:after {
    @apply absolute bottom-0 right-0;
    content: '';
    left: 34%;
    top: 40px;
    position: absolute;
    background: #d8d9e0;
    z-index: 2;
    opacity: .25;
  }
}

.dots-square-mix-alt {
  position: relative;
  z-index: 1;
  &:before {
    @apply absolute top-0 right-0;
    content: '';
    left: 60%;
    bottom: 40px;
    position: absolute;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21 21'%3E%3Cpath fill='none' d='M0 0h21v21H0z'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' fill='%234b5357' d='M9 9h3v3H9z'/%3E%3C/svg%3E");
    background-repeat: repeat;
    background-size: 22px;
    z-index: 1;
    opacity: .25;
  }
  &:after {
    @apply absolute bottom-0;
    content: '';
    right: 34%;
    left: 100px;
    top: 40px;
    position: absolute;
    background: #d8d9e0;
    z-index: 2;
    opacity: .25;
  }
}
.child-p {
  & > p {
    line-height: 1.5;
    font-size: 1.25rem !important;
  }
}

.bio:nth-child(even) {
  position: relative;
  z-index: 1;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 20%;
    right: -100px;
    @apply bg-gray-light;
  }
}

.bio-pic {
  @apply relative z-10 w-3/4;
  & .bio-btn {
    @apply absolute rfs-text-xl text-gray-500 mx-auto rounded-sm whitespace-no-wrap z-30 opacity-0;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    transition: all ease .2s;
  }
  &:after {
    content: '';
    @apply absolute top-0 left-0 bottom-0 right-0 w-full h-full rounded-full bg-yellow1 border-yellow1 opacity-0 z-20;
    transition: all ease .2s;
  }
  &:hover {
    cursor: pointer;
    &:after {
      @apply opacity-100;
    }
    & .bio-btn {
      @apply opacity-100;
    }
  }
}

.bio-body {
  & p {
    @apply text-gray-500 rfs-text-sm leading-loose;
  }
}

</style>

<template>
  <Layout>
    <section class="hero flex py-24 text-white capitalize px-6 xl:px-0">
      <div class="max-w-1200 w-full mx-auto z-10">
      <h1 class="m-0 p-0">Company</h1>
      </div>
    </section>

    <section class="flex bg-gray-light text-gray-700 py-12 sm:py-32 px-6 xl:px-0 z-10">
      <div class="max-w-1200 w-full mx-auto">
        <h2 class="accent-heading">About Yellowbrick Data</h2>
        <p class="rfs-text-lg">Yellowbrick Data was founded in 2014 by experts in database and flash memory technologies to simplify data warehousing. We wanted to solve the challenges of high availability, running complex mixed workloads, support for ad-hoc SQL, computing correct answers on any schema, massive scalability and supporting large numbers of concurrent users.</p>
        <p class="rfs-text-lg">Ultimately, we built the Yellowbrick Data Warehouse which is quick to deploy, easy to expand and simple to manage. And in doing so, we also fundamentally changed the economics of enterprise data warehousing to deliver the lowest acquisition and operating costs, and highest performance to our customers.</p>
        <button v-scroll-to="'#more-info'" class="button yellow mt-8">Get in Touch</button>
      </div>
    </section>

    <a name="teammembers" id="teammembers" class=""></a>
    <section class="z-10 pt-16">
      <div class="flex flex-col max-w-1200 w-full mx-auto pb-24">
        <h2 class="accent-heading">Leadership Team</h2>
        <div class="flex flex-row flex-wrap my-6 md:my-12 md:mb-0 relative z-10 pt-12">
          <div v-for="(member, index) in $page.team.members" :key="index" :id="slugify(member.name)" class="w-full sm:w-1/2 lg:w-1/3 p-6" >
            <div class="flex flex-col pr-10" @click="selectedBio=member">
              <div class="bio-pic">
                <span class="bio-btn">Read Bio</span>
                <img v-if="member.photo" :src="member.photo" class="self-start rounded-full" :alt="member.name"/>
              </div>
              <h3 class="mt-8 mb-0" v-text="`${member.name}`" />
              <h5 class="pb-3 text-gray-400" v-text="`${member.position}`" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="z-10 pt-16 bg-gray-200">
      <div class="flex flex-col max-w-1200 w-full mx-auto pb-24">
        <h2 class="accent-heading">Yellowbrick Founders</h2>
        <p class="rfs-text-lg">
          In 2014, Neil Carson, Jim Dawson, and Mark Brinicombe began working on a revolutionary new design for a data warehouse, one that would leverage advances in memory, storage, networking, and software design. The trio founded Yellowbrick Data, a company focused on bringing fast analytics to enterprises of all sizes, and eventually capable of deploying anywhere. The resulting data warehouse is highly performant, easy to deploy, runs on any cloud, is secure, and helps business solve their biggest analytics challenges.
        </p>
        <div class="flex flex-row flex-wrap my-6 md:my-12 md:mb-0 relative z-10 pt-12">
          <div class="w-full sm:w-1/2 lg:w-1/3 p-6" id="neil">
            <div class="flex flex-col pr-10" @click="selectedBio=neil">
              <div class="bio-pic">
                <span class="bio-btn">Read Bio</span>
                <img src="/uploads/team/team-neil-2021.jpg" alt="Neil Carson | Yellowbrick Chief Executive Officer And Co-Founder" class="self-start rounded-full"/>
              </div>
              <h3 class="mt-8 mb-0">Neil Carson</h3>
              <h5 class="pb-3 text-gray-400">Chief Executive Officer and Co-founder</h5>
            </div>
          </div>
          <div class="w-full sm:w-1/2 lg:w-1/3 p-6" id="jim">
            <div class="flex flex-col pr-10" @click="selectedBio=jim">
              <div class="bio-pic">
                <span class="bio-btn">Read Bio</span>
                <img src="/uploads/jimdawson.jpg" alt="Jim Dawson | Co-founder of Yellowbrick" class="self-start rounded-full"/>
              </div>
              <h3 class="mt-8 mb-0">Jim Dawson</h3>
              <h5 class="pb-3 text-gray-400">Co-founder</h5>
            </div>
          </div>
          <div class="w-full sm:w-1/2 lg:w-1/3 p-6" id="mark">
            <div class="flex flex-col pr-10" @click="selectedBio=mark">
              <div class="bio-pic">
                <span class="bio-btn">Read Bio</span>
                <img src="/uploads/brinicombe.jpg" alt="Neil Carson | Co-Founder and Architect" class="self-start rounded-full"/>
              </div>
              <h3 class="mt-8 mb-0">Mark Brinicombe</h3>
              <h5 class="pb-3 text-gray-400">Co-founder and architect</h5>
            </div>
          </div>
        </div>
      </div>
    </section>

    <modal-dialog v-if="selectedBio" @close="selectedBio=null">
      <div class="max-w-800 flex flex-row flex-wrap">
        <div class="w-full sm:w-1/4 pt-0 sm:pt-8 pr-0 sm:pr-4">
          <img v-html="selectedBio.photo" :src="selectedBio.photo" :alt="selectedBio.name" class="hidden sm:flex rounded-full w-3/4 mx-auto sm:ml-0 mb-5"/>
          <div v-html="selectedBio.name" class="flex rfs-text-2xl text-gray-700 font-medium mb-0 sm:mb-2 leading-none" />
          <div v-html="selectedBio.position" class="flex rfs-text-sm text-gray-500 leading-tight pb-5" />
        </div>
        <div id="scroll-lock" class="w-full sm:w-3/4 overflow-y-scroll md:overflow-y-auto pt-2 sm:pt-0 pl-0 sm:pl-4" style="max-height: 50vh">
          <img v-html="selectedBio.photo" :src="selectedBio.photo" class="flex sm:hidden rounded-full w-2/3 mx-auto" :alt="selectedBio.name"/>
          <div v-html="selectedBio.body" class="bio-body pt-4 sm:pt-8 text-gray-500" />
        </div>
      </div>
    </modal-dialog>

    <MoreInfo />

    <section class="bg-gray-light relative flex justify-center py-12 md:py-24 px-6 xl:px-0">
      <div class="max-w-1200 w-full flex-col ">
        <h2 class="accent-heading">Careers</h2>
        <p class="rfs-text-lg">At Yellowbrick Data, we’re building the best, brightest and most driven team in the data warehousing industry. What we’re doing isn’t easy but, if you’re up for a challenge and want to be part of a company that’s going to make some history, we want to talk to you.</p>
        <g-link to="/company/careers/" class="button yellow mt-8">View Jobs</g-link>
      </div>
    </section>

    <section class="bg-gray-light relative flex py-20 px-6 xl:px-0">
      <div class="max-w-1200 w-full mx-auto">
        <h2 class="accent-heading">Investors</h2>
        <div class="flex flex-row flex-wrap -mx-8">
          <div class="flex w-full xs:w-1/2 md:w-1/4 p-12"><img src="/uploads/investors/dfj-growth-logo.svg" alt="DFJ Ventures Logo" class="w-1/2 mx-auto xs:w-3/4 self-center" /></div>
          <div class="flex w-full xs:w-1/2 md:w-1/4 p-12"><img src="/uploads/investors/threshold-logo.svg" alt="Threshold Logo" class="w-1/2 mx-auto xs:w-3/4 self-center" /></div>
          <div class="flex w-full xs:w-1/2 md:w-1/4 p-12"><img src="/uploads/investors/menlo-logo.svg" alt="Menlo Ventures Logo" class="w-1/2 mx-auto xs:w-3/4 self-center" /></div>
          <div class="flex w-full xs:w-1/2 md:w-1/4 p-12"><img src="/uploads/investors/next47-logo.svg" alt="Next47 Logo" class="w-1/2 mx-auto xs:w-3/4 self-center" /></div>
          <div class="flex w-full xs:w-1/2 md:w-1/4 p-12"><img src="/uploads/investors/gv-logo.svg" alt="GV Logo" class="w-1/2 mx-auto xs:w-3/4 self-center" /></div>
          <div class="flex w-full xs:w-1/2 md:w-1/4 p-12"><img src="/uploads/investors/samsung-logo.svg" alt="Samsung Logo" class="w-1/2 mx-auto xs:w-3/4 self-center" /></div>
          <div class="flex w-full xs:w-1/2 md:w-1/4 p-12"><img src="/uploads/investors/thirdpoint-logo.svg" alt="Thirdpoint Logo" class="w-1/2 mx-auto xs:w-3/4 self-center" /></div>
          <div class="flex w-full xs:w-1/2 md:w-1/4 p-12"><img src="/uploads/investors/ivp-logo.png" alt="Thirdpoint Logo" class="w-1/2 mx-auto xs:w-3/4 self-center" /></div>
          <div class="flex w-full xs:w-1/2 md:w-1/4 p-12"><img src="/uploads/investors/bmw-iventures-logo.png" alt="Thirdpoint Logo" class="w-1/2 mx-auto xs:w-3/4 self-center" /></div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query Page {
    team: pages(path: "/data/pages/team") {
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
import ModalDialog from '~/components/ModalDialog.vue'
import slugify from '@sindresorhus/slugify'
import MoreInfo from '~/components/MoreInfo.vue'

export default {
  data: () => ({
    selectedBio: null,
    jim: {
      name: 'Jim Dawson',
      position: 'Co-founder',
      photo: '/uploads/jimdawson.jpg',
      body: 'Prior to Yellowbrick, Jim was at Menlo Ventures, where he focused on sourcing investments in the enterprise technology sector. He has twice stood on the podium of the New York Exchange and rung in venture-backed start-up IPOs, creating billions of dollars of market capitalization for investors. His expertise is defining and executing successful sales strategies in the enterprise technology space. Previously, Jim was the Chief Sales Officer at Fusion-io, Vice President of World Wide Sales at 3PAR, Vice President of Worldwide Sales at Scale 8, and a Vice President at Data General Corporation responsible for the Clariion storage business internationally, starting as a member of the original Clariion business unit.<br><br>Jim graduated from Weber State College with a BA in Economics and completed an internship working for the US Senate Committee of Banking, Housing, and Urban Affairs. Jim has worked and lived in Washington D.C., Tokyo Japan, Singapore, Hong Kong, London, the San Francisco Bay Area, and Cameron, Montana. Jim is fluent in Japanese and can make sushi.'
    },
    neil: {
      name: 'Neil Carson',
      position: 'Chief Executive Officer and Co-founder',
      photo: '/uploads/team/team-neil-2021.jpg',
      body: 'Previously, Neil served as Executive Vice President and Chief Technology Officer at Fusion-io where he was responsible for company strategy, product definitions, roadmaps, corporate development and strategic partnerships and key customer acquisitions.<br><br>Prior to Fusion-io, Neil was Chief Application Architect at Dell, where he led the platform architecture team across MessageOne, Everdream, Silverback Networks and other acquired development groups. Neil joined Dell through the acquisition of Everdream where he was Chief Architect.<br><br>Neil has also held roles at BMC/Remedy and Liberate Technologies, including Principal Product Architect and Principal Engineer. Neil has served as a technical advisor for startups Oxygen Finance and Datera Inc.<br><br>Neil earned a Bachelor’s degree in Computer Software Engineering from Cranfield University.'
    },
    mark: {
      name: 'Mark Brinicombe',
      position: 'Co-founder and architect',
      photo: '/uploads/brinicombe.jpg',
      body: 'Mark Brinicombe is the co-founder and architect of Yellowbrick Data. Prior to cofounding Yellowbrick, Mark was a principal architect at Fusion-io (acquired by SanDisk) where he was responsible for significant developments in memory products, firmware, and drivers. Before Fusion-io, Mark was a principal engineer and architect for Everdream, a SaaS IT systems management platform acquired by Dell where he then held positions as a product strategist and architect. Mark has also held architect and developer positions at BMC Software, Liberate Technologies, and Network Computer Inc, and he cofounded the OS consulting company, Casualty Limited.<br><br>Mark holds Bsc and advanced degrees in science, astrophysics, and physics from King’s College in London.'
    }
  }),
  methods: {
    slugify,
  },
  metaInfo: {
    title: 'Yellowbrick Company Story',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'We fundamentally changed the economics of enterprise data warehousing to deliver the lowest acquisition and operating costs, and highest performance to our customers. This is our story'
      }
    ]
  },
  components: {
    MoreInfo,
    ModalDialog
  }
}
</script>

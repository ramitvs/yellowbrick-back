<style scoped>
.hero {
  background-image: linear-gradient(
      90deg,
      rgba(13, 23, 28, 1) 3%,
      rgba(13, 23, 28, 0.15) 60%,
      rgba(13, 23, 28, 1) 100%
    ),
    url(/uploads/images/bmw-hero-bg.jpg);
  background-size: cover;
  background-position: center;
}

.dots-square-mix {
  position: relative;
  z-index: 1;
  &:before {
    @apply absolute top-0 left-0;
    content: "";
    right: 60%;
    bottom: 40px;
    position: absolute;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21 21'%3E%3Cpath fill='none' d='M0 0h21v21H0z'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' fill='%234b5357' d='M9 9h3v3H9z'/%3E%3C/svg%3E");
    background-repeat: repeat;
    background-size: 22px;
    z-index: 1;
    opacity: 0.25;
  }
  &:after {
    @apply absolute bottom-0 right-0;
    content: "";
    left: 34%;
    top: 40px;
    position: absolute;
    background: #d8d9e0;
    z-index: 2;
    opacity: 0.25;
  }
}

.slash-right-mid {
  @apply relative z-0;
  &:after {
    content: "";
    @apply absolute;
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='27' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v27H0z'/%3E%3Cpath d='M13.667 7.09a.663.663 0 00-.911.247L6.089 18.99a.676.676 0 00.244.919.66.66 0 00.911-.246l6.667-11.655a.676.676 0 00-.244-.919' fill='%234B5357'/%3E%3C/g%3E%3C/svg%3E");
    background-repeat: repeat;
    left: 83%;
    right: 0;
    transform: translateY(-180%);
    height: 331px;
    z-index: 1;
    opacity: 0.2;
  }
}

.video-list {
  @media all and (min-width: 768px) {
    max-height: 26.5rem;
  }
  &::-webkit-scrollbar-track
   {
     -webkit-box-shadow: inset 0 0 2px rgba(0,0,0,0.2);
     border-radius: 10px;
     background-color: #f3f6f6;
   }
   &::-webkit-scrollbar
    {
      width: 6px;
      background-color: #f3f6f6;
    }
    &::-webkit-scrollbar-thumb
     {
       border-radius: 10px;
       background-color: #FFCD32;
     }
}
</style>

<template>
  <Layout>
    <Hero :heroTitle="heroTitleText" :heroDescription="heroDescriptionText"/>

    <section class="dots-square-mix bg-gray-light relative flex justify-center py-12 md:py-32 px-6 xl:px-0">
      <div class="flex flex-wrap w-full max-w-1200 mx-auto">
        <div class="flex flex-col justify-center w-full lg:w-4/6 pb-6 md:pr-16 md:pb-16 z-10">
          <BaseWistia class="w-full h-2/3 mb-6" id="50gjkfbh26" allowPopover="true"/>
          <p class="rfs-text-lg">Listen to the full-length conversation between Yellowbrick CEO Neil Carson and Kasper
            Sage of BMW i Ventures.</p>
        </div>
        <div class="video-list flex flex-col w-full overflow-y-auto lg:w-2/6 start p-0 z-10">
          <div class="flex flex-shrink-0 mb-4">
            <div class="flex-shrink-0 w-2/6">
              <BaseWistia class="w-full h-1/3" id="dg16j8q0op" allowPopover="true"/>
            </div>
            <div class="flex w-4/6 flex-col pl-6">
              <h6>How Yellowbrick (and BMW) achieve superior performance (1:31)</h6>
            </div>
          </div>
          <div class="flex flex-shrink-0 mb-4">
            <div class="flex-shrink-0 w-2/6">
              <BaseWistia class="w-full h-1/3" id="n3w46kx2re" allowPopover="true"/>
            </div>
            <div class="flex w-4/6 flex-col pl-6">
              <h6>Yellowbrick can be deployed to cloud, on-premises, or both (1:30)</h6>
            </div>
          </div>
          <div class="flex flex-shrink-0 mb-4">
            <div class="flex-shrink-0 w-2/6">
              <BaseWistia class="w-full h-1/3" id="t1rs6eu5qr" allowPopover="true"/>
            </div>
            <div class="flex w-4/6 flex-col pl-6">
              <h6>Yellowbrick is standards-compatible; all tools work seamlessly (2:18)</h6>
            </div>
          </div>

          <div class="flex flex-shrink-0 mb-4">
            <div class="flex-shrink-0 w-2/6">
              <BaseWistia class="w-full h-1/3" id="n4eco08qzb" allowPopover="true"/>
            </div>
            <div class="flex w-4/6 flex-col pl-6">
              <h6>Real-time answers are essential to businesses, here are real-world examples (1:36)</h6>
            </div>
          </div>

          <div class="flex flex-shrink-0 mb-4">
            <div class="flex-shrink-0 w-2/6">
              <BaseWistia class="w-full h-1/3" id="yjg9j6psuz" allowPopover="true"/>
            </div>
            <div class="flex w-4/6 flex-col pl-6">
              <h6>Yellowbrick is unique in the world of data warehouses (1:58)</h6>
            </div>
          </div>

          <div class="flex flex-shrink-0 mb-4">
            <div class="flex-shrink-0 w-2/6">
              <BaseWistia class="w-full h-1/3" id="u6ekt2tf3f" allowPopover="true"/>
            </div>
            <div class="flex w-4/6 flex-col pl-6">
              <h6>Companies need an easy path to migrate to cloud data warehouses (1:48)</h6>
            </div>
          </div>

          <div class="flex flex-shrink-0 mb-4">
            <div class="flex-shrink-0 w-2/6">
              <BaseWistia class="w-full h-1/3" id="9zjrnqd4p4" allowPopover="true"/>
            </div>
            <div class="flex w-4/6 flex-col pl-6">
              <h6>Yellowbrick takes advantage of advances in hardware for performance gains (1:41)</h6>
            </div>
          </div>

          <div class="flex flex-shrink-0 mb-4">
            <div class="flex-shrink-0 w-2/6">
              <BaseWistia class="w-full h-1/3" id="usk8nufrgo" allowPopover="true"/>
            </div>
            <div class="flex w-4/6 flex-col pl-6">
              <h6>Yellowbrick supports data streaming and bulk uploads easily (2:04)</h6>
            </div>
          </div>

          <div class="flex flex-shrink-0 mb-4">
            <div class="flex-shrink-0 w-2/6">
              <BaseWistia class="w-full h-1/3" id="lbqag30ksv" allowPopover="true"/>
            </div>
            <div class="flex w-4/6 flex-col pl-6">
              <h6>Learn about Kasper's experiences on the autobahn (1:29)</h6>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="bg-gray-700 py-8 px-6 xl:px-0">
      <div class="mx-auto w-full max-w-1200">
        <div class="flex flex-col">
          <h3 class="accent-heading text-white">Unmatched price/performance</h3>
          <p class="rfs-text-lg text-white">
            In today’s business climate, your business needs real-time insights
            to address ever-increasing data challenges. The Yellowbrick analytics
            database was designed for speed and performance in ways that make
            legacy and cloud-only platforms seem slow. With Yellowbrick, you get
            faster speed-to-insight, with answers to more complex questions than
            ever before. Learn how Yellowbrick can drive your data strategy
            forward.
          </p>
          <g-link to="/performance/" class="button yellow mx-auto">Learn more</g-link>
        </div>
      </div>
    </section>

    <section class="bg-gray-100 slash-right-mid relative py-12 md:py-24 px-6 xl:px-0">
      <div class="flex w-full mx-auto max-w-1200">
        <div class="flex flex-col w-full md:w-1/2">
          <p class="rfs-text-lg">
            BMW is known for innovation and performance. Yet, their financial services data warehouse couldn’t keep up
            when it came to delivering for their customers.
          </p>
          <p class="rfs-text-lg">
            BMW Group Financial Services selected Yellowbrick to help improve the speed and quality of insights from
            their large database, ultimately delivering customers faster finance and leasing answers, finance packages
            tailored for customers’ unique needs, and a superior customer experience.
          </p>
          <div>
            <p class="rfs-text-lg">
              BMW Group Financial Services uses Yellowbrick to:
            </p>
            <ul class="rfs-text-base">
              <li>Accelerate query and ETL performance</li>
              <li>Improve workload management and monitoring capabilities</li>
              <li>
                Integrate seamlessly with existing business intelligence (BI)
                tools in place, including Tableau, SAS, TOAD Data Point, and
                Informatica
              </li>
              <li>Reduce ongoing database maintenance and associated costs</li>
              <li>Leverage existing skill sets</li>
            </ul>
          </div>
          <p class="rfs-text-lg">
            Initial tests and work with Yellowbrick have met these goals with
            query performance that is 152X faster on average across 17
            representative queries and space usage that is 70 percent lower.
          </p>
        </div>
        <div class="flex w-full items-center md:w-1/2 pl-12 z-10">
          <BaseWistia class="w-full h-2/3" id="hsw8k2i7xj"/>
        </div>
      </div>
    </section>

    <section class="bg-gray-700 text-white no-lockin-bg px-6 xl:px-0 py-20">
      <div class="max-w-1200 mx-auto w-full">
        <h3 class="accent-heading">Yellowbrick delivers on performance</h3>
        <div class="flex flex-col sm:flex-row flex-wrap -mx-4 md:-mx-8">
          <div class="w-full lg:w-3/6 p-4 md:p-8">
            <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/1Kd5te11w4w"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
            <h5 class="my-6">
              A vision of analytics from Yellowbrick CEO Neil Carson
            </h5>
          </div>

          <div class="w-full md:w-1/2 lg:w-1/4 p-4 md:p-8">
            <img
                src="/uploads/bmw-top-financial-services-thumb.jpg"
                alt="Top Financial Services company makes data-driven decisions 100X faster with Yellowbrick"
                class="w-5/12 md:w-2/3 shadow-md self-start mb-6"
            />
            <h5 class="my-6">
              Top Financial Services company makes data-driven decisions 100X
              faster with Yellowbrick
            </h5>
            <a
                href="/resources/case-studies/top-financial-services-company/"
                class="button yellow"
            >Read the case study</a
            >
          </div>

          <div class="w-full md:w-1/2 lg:w-1/4 p-4 md:p-8">
            <img
                src="/uploads/bmw-yb-press-release-thumb.jpg"
                alt="BMW selects Yellowbrick to drive performance"
                class="w-5/12 md:w-2/3 shadow-md self-start mb-6"
            />
            <h6 class="pb-0 mb-0 text-yellow1">Press Release</h6>
            <h5 class="mb-6">BMW selects Yellowbrick to drive performance</h5>
            <a
                href="/press-releases/yellowbrick-selected-to-accelerate-bmw-group-financial-services-analytics-performance-and-capabilities/"
                class="button yellow"
            >Read the press release</a
            >
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import Hero from "~/components/HeroComponent";
import ModalDialog from '~/components/ModalDialog.vue';

export default {
  metaInfo: {
    title: "BMW and Yellowbrick partner to keep BMW moving forward",
    meta: [
      {
        key: "description",
        name: "description",
        content: "",
      },
      {
        key: "og:description",
        name: "og:description",
        content: "",
      },
      {
        key: "og:title",
        name: "og:title",
        content: "",
      },
      {
        key: "twitter:description",
        name: "twitter:description",
        content: "",
      },
      {
        key: "twitter:title",
        name: "twitter:title",
        content: "",
      },
    ],
  },
  methods: {},
  components: {
    Hero,
    ModalDialog
  },
  data() {
    return {
      heroTitleText: "Performance is not a destination— it’s a journey.",
      heroDescriptionText: "Yellowbrick keeps BMW moving forward",
      displayWistia1: null
    };
  },
};
</script>

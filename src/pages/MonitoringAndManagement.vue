
<style scoped>
.hero {
  background-image: url(/uploads/images/tall-bg.svg);
  background-size: cover;
  background-position: center;
}

.enhance-bg {
  background-image: url(/uploads/images/predictability-bg.svg);
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 20%;
}

.resouce-caption {
  width: 100%;
  text-align: center;
  margin-top: 24px;
}
</style>

<template>
<Layout>

  <section class="hero py-12 md:py-24 text-white px-6 xl:px-0">
    <div class="md:flex max-w-1200 mx-auto">
      <div class="md:w-1/2">
        <span class="rfs-text-xl text-yellow1 mb-0">Fast answers made easy:</span>
        <h1 class="rfs-text-5xl">Insights with speed and simplicity</h1>
        <p class="rfs-text-lg">We built Yellowbrick with industry-leading manageability (including advanced workload management, automated operations, and granular observability) so you can focus on what matters: game changing insights.</p>
      </div>
      <div class="md:w-1/2 my-16 md:my-0 md:ml-16">
        <img src="/uploads/images/monitoring-and-management/Yellowbrick_TimelineScreen_iMac.png" alt="Dashboard" />
      </div>
    </div>
  </section>

  <section class="flex py-16 px-6 xl:px-0 enhance-bg text-gray-400 bg-gray-100">
    <div class="flex-1 justify-center max-w-1000 mx-auto">
      <h3 class="accent-heading rfs-text-4xl font-light mb-1">“Our standard process saw a 3X to 10X performance improvement, without any performance tuning.”</h3>
      <p class="rfs-text-lg text-right mb-0">&mdash; Nigel Pratt SVP Development Symphony RetailAI</p>
    </div>
  </section>

  <section class="pb-8 bg-white px-6 xl:px-0 py-20">
    <div class="flex flex-col justify-center max-w-1200 mx-auto">

      <h3 class="accent-heading">Self-managing &mdash; no training needed</h3>
      <p>Yellowbrick delivers native peak performance and lets you focus on running your business rather than managing a data warehouse. While other complex solutions can take a long time to learn, your team won’t need special skills with us: we are
        standards-based and integrate with the most common industry tools. </p>

      <div class="flex flex-col md:flex-row flex-wrap">

        <div class="w-full md:w-1/3 p-6 flex flex-col itesms-start">
          <img src="~@/assets/images/icons/white-teal/cloud-sync.svg" class="w-40 text-gray-600" alt="lego icon" />
          <p class="rfs-text-3xl font-medium mb-2 leading-tight">Load and go</p>
          <p>No partitions, cubes, indexes, or query tuning required</p>
        </div>

        <div class="w-full md:w-1/3 p-6 flex flex-col items-start">
          <img src="~@/assets/images/icons/white-teal/circle-checkmark.svg" class="w-40 text-gray-600" alt="lego icon" />
          <p class="rfs-text-3xl font-medium mb-2 leading-tight">Standards-based</p>
          <p>Easy to use with ANSI SQL, Postgres front end, and open APIs</p>
        </div>

        <div class="w-full md:w-1/3 p-6 flex flex-col items-start">
          <img src="~@/assets/images/icons/white-teal/lego.svg" class="w-40 text-gray-600" alt="lego icon" />
          <p class="rfs-text-3xl font-medium mb-2 leading-tight">Out-of-the-box integrations</p>
          <p>Plug and play with BI, data science, and data motion tools</p>
        </div>

      </div>
    </div>
  </section>

  <g-link to="/go/book-a-demo/" class="flex flex-row flex-wrap text-white bg-gray-600 hover:bg-yellow1 hover:text-gray-600 px-6 xl:px-0">
    <div class="max-w-1200 w-full mx-auto flex flex-col md:flex-row py-8 items-center justify-around">

      <div class="flex flex-row items-center">
        <img src="~@/assets/images/icons/white-teal/lego.svg" class="w-32 pr-4" />
        <div class="flex flex-col">
          <p class="mb-0 rfs-text-2xl">See Yellowbrick in action!</p>
        </div>
      </div>

      <div class="hidden md:flex flex-col button light self-center">Request a Demo</div>

    </div>
  </g-link>

  <section class="py-20 px-8">
    <div class="md:flex max-w-1200 mx-auto">
      <div class="md:px-8 py-8 md:py-0">
        <h4>Deep analytics and granular control</h4>
        <p>Get full visibility of your data warehouse with a high-level view of your system including cluster resource utilization and detailed metrics such as open user sessions and running queries or jobs. Maximize the insights to your business
          with granular control of workloads, users, and roles.</p>
        <button @click="displayAnalytics = !displayAnalytics">
          <img alt="speed icon" src="/uploads/images/monitoring-and-management/Query_plan.png" />
          <span class="inline-flex items-center">
            <expand-arrows class="pr-2"></expand-arrows>(click to enlarge)
          </span>
        </button>
        <modal-dialog v-if="displayAnalytics" @close="displayAnalytics=false">
          <img alt="speed icon" src="/uploads/images/monitoring-and-management/Query_plan.png" />
        </modal-dialog>
        <div class="resouce-caption">
          <p>
            Yellowbrick gives you deep visibility into query plans and other details.
          </p>
        </div>
      </div>
      <div class="md:px-8 py-8 md:py-0">
        <h4>Advanced workload management</h4>
        <p>Optimize performance and protect your mission critical workloads with advanced workload management. Gain sub-second control for query execution or cancellation, map queries to system resources such as disks, CPU, and RAM, and define query
          priority. </p>
        <button @click="displayWorkload = !displayWorkload">
          <img alt="speed icon" src="/uploads/images/monitoring-and-management/WLM.png" />
          <span class="inline-flex items-center">
            <expand-arrows class="pr-2"></expand-arrows>(click to enlarge)
          </span>
        </button>
        <modal-dialog v-if="displayWorkload" @close="displayWorkload=false">
          <img alt="speed icon" src="/uploads/images/monitoring-and-management/WLM.png" />
        </modal-dialog>
        <div class="resouce-caption">
          <p>
            Advanced workload management lets you assign resources to workloads based on their business priority.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="flex py-16 px-6 xl:px-0 enhance-bg text-gray-400 bg-gray-100">
    <div class="flex-1 justify-center max-w-1000 mx-auto">
      <h3 class="accent-heading rfs-text-4xl font-light mb-1">“From the time that we had access to Yellowbrick, we were able to jump right in. We were able to load billions of rows in minutes.”</h3>
      <p class="rfs-text-lg text-right mb-0">&mdash; Wes Daniels, COO Clarity Innovations</p>
    </div>
  </section>

  <MoreInfo />

</Layout>
</template>

<script>
import ExpandArrows from "~/components/icons/ExpandArrows.vue";
import ModalDialog from "~/components/ModalDialog.vue";
import MoreInfo from '~/components/MoreInfo.vue'
import PartnersMain from '~/components/PartnersMain.vue'
import TransitionExpand from '~/components/TransitionExpand.vue'

export default {
  metaInfo: {
    title: 'Game Changing Insights',
    meta: [{
        key: 'description',
        name: 'description',
        content: 'We built Yellowbrick with leading simplicity so that you can focus on what matters: game changing insights. Self-managing and native peak performance while giving you deep analytics and granular control to take your business to the next level.'
      },
      {
        key: 'og:description',
        name: "og:description",
        content: 'We built Yellowbrick with leading simplicity so that you can focus on what matters: game changing insights. Self-managing and native peak performance while giving you deep analytics and granular control to take your business to the next level.'
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'We built Yellowbrick with leading simplicity so that you can focus on what matters: game changing insights. Self-managing and native peak performance while giving you deep analytics and granular control to take your business to the next level.'
      },
      {
        key: 'og:title',
        name: 'og:title',
        content: 'Game Changing Insights'
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'Game Changing Insights'
      }
    ]
  },
  components: {
    ExpandArrows,
    ModalDialog,
    MoreInfo,
    PartnersMain,
    TransitionExpand
  },
  data() {
    return {
      expanded: false,
      displayAnalytics: false,
      displayWorkload: false,
    };
  }

}
</script>

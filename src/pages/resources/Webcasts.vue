<template>
  <Layout>

    <section v-if="this.upcomingSummitWebcasts.length" class="p-8 sm:px-16 sm:pb-16 md:pt-24 md:pb-12 bg-white">
      <div class="max-w-1200 w-full mx-auto pt-12">
        <h2 class="accent-heading">Yellowbrick Virtual Summit - On-demand</h2>
        <div class="flex flex-row flex-wrap upcoming">
          <webcast-section :cta="this.upcomingWebcastsCta" :webcasts="this.upcomingSummitWebcasts" />
        </div>
      </div>
    </section>

    <section v-if="this.upcomingWebcasts.length" class="p-8 sm:px-16 sm:pb-16 md:pt-24 md:pb-12 bg-gray-100">
      <div class="max-w-1200 w-full mx-auto">
        <h2 class="accent-heading">Upcoming webinars</h2>
        <div class="flex flex-row flex-wrap upcoming">
          <webcast-section :cta="this.upcomingWebcastsCta" :webcasts="this.upcomingWebcasts" />
        </div>
      </div>
    </section>

    <section class="py-16 md:pt-24 md:pb-12 bg-white overflow-hidden px-8 sm:px-12 z-10" id="past" :class="this.upcomingWebcasts.length ? '' : 'extra-padding'">
      <div class=" max-w-1200 w-full mx-auto">
        <h2 class="accent-heading">On-demand videos</h2>
        <div class="flex flex-wrap z-10">
          <webcast-section :cta="this.webcastsCta" :webcasts="pastWebcasts" />
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import { Pager } from 'gridsome'
import WebcastSection from '~/components/WebcastSection.vue'

export default {
  metaInfo: {
    title: 'Yellowbrick On-Demand Webcasts',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'Discover the many on-demand webcasts that range from customer demonstrations to unique data issues in analytics.'
      },
      {
        key: 'og:description',
        name: 'og:description',
        content: 'Discover the many on-demand webcasts that range from customer demonstrations to unique data issues in analytics.',
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'Discover the many on-demand webcasts that range from customer demonstrations to unique data issues in analytics.',
      }
    ]
  },
  components: {
    WebcastSection
  },
  data: () => ({
    upcomingWebcasts: [],
    pastWebcasts: [],
    upcomingSummitWebcasts: [],
    choice: '',
    webcastsCta: "Watch now",
    upcomingWebcastsCta: "Register now"
  }),
  mounted () {

    this.$page.allWebcasts.edges.forEach((webcast) => {
      const node = webcast.node;
      node.date = node.date.split('T')[0];
      if (node.upcoming) {
        if (node.isSummit) {
          this.upcomingSummitWebcasts.push(node);
          return;
        }
        this.upcomingWebcasts.push(node);
      } else this.pastWebcasts.push(node);
    })
    this.upcomingWebcasts.sort((a, b) => new Date(a.date) - new Date(b.date));
    this.pastWebcasts.sort((a, b) => new Date(b.date) - new Date(a.date));
  },
  methods: {
    updateUpcomingWebinar(e) {
      console.log('the current target', e.currentTarget);
      let currentActive = document.querySelector('.current-post.-isActive');

      currentActive.classList.remove('-isActive');
      e.currentTarget.classList.add('-isActive');
    }
  }
}
</script>

<page-query>
  query Webcasts {
    allWebcasts(filter: { hidden: { ne: true }}) {
      edges {
        node {
          id
          title
          coverImage
          webcastLink
          date(format: "MMMM D, YYYY")
          time
          pinned
          upcoming
          isSummit
        }
      }
    }
  }
</page-query>

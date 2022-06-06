<style scoped>

.hero {
  background-image: url(/uploads/images/news-bg.svg);
  background-size: cover;
  background-position: center;
}

.slash-box-big {
  @apply relative z-0;
  &:before {
    content: '';
    @apply absolute bg-gray-100;
    left: 0;
    top: 0;
    right: 10%;
    bottom: 0;
    z-index: 1;
  }
  &:after {
    content: '';
    @apply absolute;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21 21'%3E%3Cpath fill='none' d='M0 0h21v21H0z'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' fill='%234b5357' d='M9 9h3v3H9z'/%3E%3C/svg%3E");
    background-repeat: repeat;
    background-size: 22px;
    left: 70%;
    right: 5%;
    top: -40px;
    height: 108px;
    z-index: 2;
    opacity: .2;
  }
}

.slash-left {
  @apply relative z-0;
  &:before {
    content: '';
    @apply absolute;
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='27' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v27H0z'/%3E%3Cpath d='M13.667 7.09a.663.663 0 00-.911.247L6.089 18.99a.676.676 0 00.244.919.66.66 0 00.911-.246l6.667-11.655a.676.676 0 00-.244-.919' fill='%234B5357'/%3E%3C/g%3E%3C/svg%3E");
    background-repeat: repeat;
    background-position: right;
    left: 0;
    right: 90%;
    top: 40px;
    height: 400px;
    z-index: 1;
    opacity: .2
  }
}

</style>

<template>
  <Layout>

    <!-- <section class="hero flex flex-col py-24 text-white px-6 xl:px-0">
      <div class="w-full max-w-1200 mx-auto z-10">
        <h1 v-text="$page.event.hero.title" />
      </div>
    </section> -->

    <section class="hero py-12 md:py-24 px-6 xl:px-0 z-10">
      <div class="w-full max-w-1200 mx-auto z-10 text-white">
        <h1>Events</h1>
        <h4 class="w-full md:w-1/2">Due to all the events cancellations we are going online! Please visit our webcasts page for the latest webinars.</h4>
        <g-link to="/resources/webcasts/" class="button yellow mt-6">View Available Webcasts</g-link>
      </div>
    </section>

    <section class="bg-gray-light py-16 slash-left px-6 xl:px-0 z-10">
      <event-section :title="$page.event.upcomingSection.title" :events="upcomingEvents" />
    </section>

    <section class="bg-gray-light py-16 slash-box-big px-6 xl:px-0">
      <event-section :title="$page.event.pastSection.title" :events="pastEvents" />
    </section>

  </Layout>
</template>

<script>
import EventSection from '@/components/EventSection'

export default {
  metaInfo: {
    title: 'Events',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'Looking for an opportunity to learn about Yellowbrick? Find us at an event near you.'
      }
    ]
  },
  components: { EventSection },
  data: () => ({
    upcomingEvents: [],
    pastEvents: []
  }),
  mounted () {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    this.$page.event.events.forEach((event) => {
      const eventDate = new Date(event.date)
      eventDate >= tomorrow ? this.upcomingEvents.push(event) : this.pastEvents.push(event)
    })
    this.upcomingEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
    this.pastEvents.sort((a, b) => new Date(b.date) - new Date(a.date));
  },
}
</script>

<page-query>
  query Page {
    event: pages(path: "/data/pages/events") {
      hero {
        title
      }
      upcomingSection {
        title
      }
      pastSection {
        title
      }
      events {
        title
        date
        endDate
        location
        image
        url
      }
    }
  }
</page-query>

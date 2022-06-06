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
    <section
      class="hero flex bg-gray-700 py-10 md:py-12 text-white px-6 xl:px-0"
    >
      <div
        class="
          flex flex-col
          md:flex-row
          max-w-1200
          w-full
          py-8
          mx-auto
          relative
          z-10
        "
      >
        <div class="w-full md:w-7/12 p-0 md:pr-16 text-gray-700 md:text-white">
          <p class="eyebrow md:mb-0"><strong>Live webinar</strong></p>
          <div class="flex flex-col sm:flex-row justify-between pt-4 pb-8">
            <div class="flex items-center w-3/4 sm:w-5/12">
              <img
                src="/uploads/images/yb-logo.svg"
                alt="yellowbrick logo"
                class="w-full"
              />
            </div>
            <div class="flex items-center">
              <span class="text-white rfs-text-6xl text-center w-full">&nbsp;</span>
            </div>
            <div class="flex items-center w-3/4 sm:w-5/12">
              <img
                src="/uploads/Protegrity-Logo-Rev.png"
                alt="protegrity logo"
                class="w-full"
              />
            </div>
          </div>
          <div class="bg-white md:bg-transparent p-6 md:p-0">
            <h1 class="rfs-text-6xl p-0">
              A Top-ten Financial Services Company Gets Valuable Insights from
              Protected Data
            </h1>
            <p class="date-time">
              <span class="duration"
                ><strong>Date: </strong>Jul 29 | Time: 8 am PT / 11 am ET</span
              >
              <br />
              <span class="duration"
                ><strong>Duration: </strong>30 minutes</span
              >
            </p>
            <p class="rfs-text-lg">
              Financial services organizations want to immediately convert data
              into valuable insights, but they often move cautiously and slow
              the pace of their data analytics initiatives because of increased
              security requirements and regulatory pressures—depriving
              themselves of innovative opportunities.
            </p>
            <p class="rfs-text-lg">
              In this session, learn how a top-ten financial services company
              modernized its data warehouse for the best price/performance with
              Yellowbrick, while using the Protegrity Data Protection Platform
              for an extra layer of data-centric security. We will discuss:
            </p>
            <ul class="rfs-text-lg">
              <li>
                How Protegrity integrates with Yellowbrick for petabyte-scale
                data security and analytics at a top financial services
                institution.
              </li>
              <li>
                How to create a policy managed in the Protegrity platform and
                carry it over to Yellowbrick.
              </li>
              <li>
                How Yellowbrick and Protegrity can easily scale and deliver
                secure, real-time analytics on billions of data rows – a must
                for large financial services organizations.
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full md:w-1/3">
          <div class="float-form">
            <h3 class="text-gray-700">Watch On-Demand</h3>
            <BaseHubspot
              id="2ed2f6ff-801b-45c3-a37b-f79c83607136"
              sfid="7011G000000Kad9QAC"
              webId="6645267275017173519"
            />
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
    title:
      "A Top-ten Financial Services Company Gets Valuable Insights from Protected Data",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "Financial services organizations want to immediately convert data into valuable insights, but they often move cautiously and slow the pace of their data analytics initiatives because of increased security requirements and regulatory pressures—depriving themselves of innovative opportunities.",
      },
    ],
  },
  components: {
    GoCustomers,
    Layout,
  },
};
</script>

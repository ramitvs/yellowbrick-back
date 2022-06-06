<style scoped>
.hero {
  background-image: url(/uploads/images/hero-alt-bg.svg);
  background-size: cover;
  background-position: center center;

&
:before {
  height: 2rem;
}

}

.float-form {
  @apply relative p-8 bg-white shadow-lg;

&
.mktoForm {
  margin-top: .5rem !important;
}

}

.eyebrow,
.date-time {
  color: #57c0cb;

&
span {
  display: inline-block;
}

}
</style>

<template>
  <Layout>
    <section class="hero flex bg-gray-700 py-10 md:py-12 text-white px-6 xl:px-0">
      <div class="flex flex-col md:flex-row max-w-1200 w-full py-8 mx-auto relative z-10">
        <div class="w-full md:w-7/12 p-0 md:pr-16 text-gray-700 md:text-white">
          <div class="bg-white md:bg-transparent p-6 md:p-0">
            <p class="eyebrow md:mb-0"><strong>On-demand video</strong></p>
            <h1 class="rfs-text-6xl p-0">Fast, Simple, and Secure: Working with Encrypted Data in Yellowbrick</h1>
            <p class="date-time">
              <span class="duration"><strong> Duration: </strong>20 minutes</span>
            </p>
            <p class="rfs-text-lg">Customers in regulated industries have strict requirements around managing PII in
              their data. Yellowbrick Data Warehouse supports encryption of any SQL expression that evaluates to a
              character string, creation of tables with encrypted columns, and fast access to that data based on role.
              In this demo, you'll see:</p>
            <ul class="rfs-text-lg">
              <li>How to easily create encrypted tables</li>
              <li>How to configure ACLs on encrypted tables and how users access them</li>
              <li>The minimal performance impact of encryption on data access</li>
            </ul>
          </div>
        </div>
        <div class="w-full md:w-1/3">
          <div class="float-form">
            <h3 class="text-gray-700">Watch On-Demand</h3>
            <BaseHubspot
                id="c1c66f8d-7b2d-4b98-9545-b70c2ad10b09"
                sfid="7011G000000KVZvQAO"
                webId="255541208760209424"
            />
          </div>
        </div>
      </div>
    </section>

    <GoCustomers/>
  </Layout>
</template>

<script>
import GoCustomers from "~/components/GoCustomers.vue";
import Layout from '~/layouts/Landing.vue';

export default {
  metaInfo: {
    title: 'Fast, Simple, and Secure: Working with Encrypted Data in Yellowbrick',
    meta: [{
      key: 'description',
      name: 'description',
      content: 'Learn how Yellowbrick Data Warehouse breaks through analytics limitations.'
    }]
  },
  components: {
    GoCustomers,
    Layout
  }
};
</script>
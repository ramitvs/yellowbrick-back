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
}

.date-time span {
  display: inline-block;
}

.date-time span.duration {
  display: block;
}
</style>

<template>
  <Layout>
    <section class="hero flex bg-gray-700 py-10 md:py-12 text-white px-6 xl:px-0">
      <div class="flex flex-col md:flex-row max-w-1200 w-full py-8 mx-auto relative z-10">
        <div class="w-full md:w-7/12 p-0 md:pr-16 text-gray-700 md:text-white">
          <div class="bg-white md:bg-transparent p-6 md:p-0">
            <p class="eyebrow mb-0"><strong>On-demand:</strong></p>
            <h1 class="rfs-text-6xl p-0">Data replication across data centers and clouds with Yellowbrick</h1>
            <p class="date-time">
              <span class="duration"><strong>Duration:</strong> 20 minutes</span>
            </p>
            <p class="rfs-text-lg">Yellowbrick's unified hybrid cloud architecture lets you deploy your data warehouse
              as an instance in data centers, as SaaS in public clouds, or both at the same time, with the same data and
              performance everywhere. That capability is based on a simple, powerful approach to near real-time,
              asynchronous data replication.</p>
            <h5>Watch this demo to learn how Yellowbrick Data Warehouse:</h5>
            <ul class="rfs-text-lg">
              <li>Automatically synchronizes data between data centers and the cloud to ensure the same data is
                available everywhere
              </li>
              <li>Allows data to be loaded from any source, for any cloud application, at line speed</li>
              <li>Provides the same performance and user experience everywhere, across private and public clouds</li>
            </ul>
          </div>
        </div>
        <div class="w-full md:w-1/3">
          <div class="float-form">
            <h3 class="text-gray-700">Watch On-Demand</h3>
            <BaseHubspot
                id="abf8c269-a7f7-4411-bb0b-828f19c19ff5"
                sfid="7011G000000KTyoQAG"
                webId="7800021661058479629"
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
    title: 'Data Replication Across Data Centers and Clouds with Yellowbrick',
    meta: [{
      key: 'description',
      name: 'description',
      content: 'Demoing how Yellowbrick\'s unified hybrid cloud architecture lets you deploy your data warehouse as an instance in data centers, as SaaS in public clouds, or both at the same time, with the same data and performance everywhere.'
    }]
  },
  components: {
    GoCustomers,
    Layout
  }
};
</script>

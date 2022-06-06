<style scoped>
.hero {
  background-image: url(/uploads/images/yb-webinar-dark-bg-desktop.jpg);
  background-size: cover;
  background-position: center center;
  
  @media only screen and (max-width: 768px) {
    background-image: url(/uploads/images/yb-webinar-dark-bg-mobile.jpg);
  }
  
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
        <div class="w-full md:w-8/12 p-0 md:pr-16 text-gray-700 md:text-white">
          <div class="bg-white md:bg-transparent p-6 md:p-0">
            <p class="eyebrow md:mb-0"><strong>Webinar on-demand</strong></p>
            <h1 class="rfs-text-4xl p-0">Protecting privacy with data masking in Yellowbrick Data Warehouse</h1>
            <p class="date-time">
              <span class="duration"><strong>Duration: </strong>20 minutes + Q&amp;A</span>
            </p>
            <p class="rfs-text-lg">Analysts and data scientists love exploring data, and the more of it they have, the better the business result. But in many industries, the need to protect PII can limit what data those users can see. Tune in to:</p>
            <ul class="rfs-text-lg">
              <li>Learn how Immuta brings seamless data masking to Yellowbrick so that users can access sensitive data when needed</li>
              <li>Understand what Yellowbrick's lightning-fast speed brings to the data masking process</li>
              <li>Watch a demo of Immuta + Yellowbrick in action with call data records from a telecom use case</li>
            </ul>
          </div>
        </div>
        <div class="w-full md:w-4/12">
          <div class="float-form">
            <h3 class="text-gray-700">Watch On-Demand</h3>
            <BaseHubspot
                id="83fbbe88-525d-4a6e-9719-32efb5e752cd"
                sfid="7011G000000KWKNQA4"
                webId="7970487746439939853"
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
    title: 'Protecting privacy with data masking in Yellowbrick Data Warehouse',
    meta: [{
      key: 'description',
      name: 'description',
      content: 'Analysts and data scientists love exploring data, and the more of it they have, the better the business result. But in many industries, the need to protect PII can limit what data those users can see.'
    }]
  },
  components: {
    GoCustomers,
    Layout
  }
};
</script>
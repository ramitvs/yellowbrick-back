<style scoped>

.hero {
  background-image: url(/uploads/images/generic-bg.svg);
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
    right: 5%;
    bottom: 0;
    z-index: 1;
  }
  &:after {
    content: '';
    @apply absolute;
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='27' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v27H0z'/%3E%3Cpath d='M13.667 7.09a.663.663 0 00-.911.247L6.089 18.99a.676.676 0 00.244.919.66.66 0 00.911-.246l6.667-11.655a.676.676 0 00-.244-.919' fill='%234B5357'/%3E%3C/g%3E%3C/svg%3E");
    background-repeat: repeat;
    left: 0%;
    right: 90%;
    top: -60px;
    height: 488px;
    z-index: 2;
    opacity: .2;
  }
}

.dots-right {
  @apply relative z-0;
  &:before {
    content: '';
    @apply absolute;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21 21'%3E%3Cpath fill='none' d='M0 0h21v21H0z'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' fill='%234b5357' d='M9 9h3v3H9z'/%3E%3C/svg%3E");
    background-repeat: repeat;
    background-size: 22px;
    left: 90%;
    right: 0;
    top: 40px;
    height: 400px;
    z-index: 1;
    opacity: .2
  }
}

</style>

<template>
  <Layout>
    <section class="hero flex flex-col py-24 text-white px-6 xl:px-0">
      <div class="w-full max-w-1200 mx-auto z-10">
        <h1>Contact Us</h1>
      </div>
    </section>

    <section class="bg-gray-light py-12 md:py-32 dots-right px-6 xl:px-0 z-10">
      <div class="max-w-1200 w-full mx-auto flex flex-row flex-wrap relative z-10">
        <div class="w-full">
          <h2 class="accent-heading">Send us a message</h2>
          <p>If you would like more information about Yellowbrick Data and the ground-breaking Yellowbrick Data Warehouse, please send us a message.</p>
          <BaseHubspot id="7db41cab-fa9d-454e-95af-efb145b5da2a" sfid="7011G000000kg9oQAA" class="hs-form-light"/>
        </div>
      </div>
    </section>

    <section class="bg-gray-light py-12 md:py-32 slash-box-big px-6 xl:px-0">
      <div class="max-w-1200 w-full mx-auto relative z-10">

      <div class="py-12">
        <h2 class="accent-heading">United States</h2>
        <div class="flex flex-row flex-wrap">
            <div class="w-full md:w-1/3 mb-8 md:mb-0">
                <h6 class="font-semibold">Phone</h6>
                <p>877.492.3282<br>(Toll-free in North America)</p>
                <h6 class="font-semibold">Email</h6>
                <p><a href="mailto:info@yellowbrick.com">info@yellowbrick.com</a></p>
                <p><a href="mailto:sales@yellowbrick.com">sales@yellowbrick.com</a></p>
            </div>
          <div class="w-full md:w-1/3 mb-8 md:mb-0">
            <h6 class="font-semibold">US Headquarters</h6>
            <p>660 W. Dana Street<br />Mountain View, CA 94041 USA</p>
          </div>

        </div>
      </div>

      <div class="py-12">
        <h2 class="accent-heading">International</h2>
        <div class="flex flex-row flex-wrap">
            <div class="w-full md:w-1/3 mb-8 md:mb-0">
                <h6 class="font-semibold">Phone</h6>
                <p>+1.650.687.0896</p>
                <h6 class="font-semibold">Email</h6>
                <p><a href="mailto:info@yellowbrick.com">info@yellowbrick.com</a></p>
                <p><a href="mailto:sales@yellowbrick.com">sales@yellowbrick.com</a></p>
            </div>
          <div class="w-full md:w-1/3 mb-8 md:mb-0">
            <h6 class="font-semibold">Europe Headquarters</h6>
            <p class="mb-8">
                60 Trafalgar Square<br />
                London, WC2N 5DS UK
            </p>
          </div>
          <div class="w-full md:w-1/3 mb-8 md:mb-0">
            <h6 class="font-semibold">Asia Headquarters</h6>
            <p class="mb-8">2 Blenheim Ave<br />13th Floor<br />Tsim Sha Tsui, Hong Kong</p>
          </div>
        </div>
      </div>

      </div>
    </section>

  </Layout>
</template>


<script>

import BaseHubspot from '~/components/BaseHubspot.vue'

export default {
  metaInfo: {
    title: 'Contact Us',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'We want to hear from you! Please contact us and let us know how we can help.'
      }
    ]
  },
  components: {
    BaseHubspot
  },
}
</script>

<template>
  <section id="more-info" class="dots bg-white relative flex justify-center h-auto m-0 py-16 sm:py-24 md:py-32 px-0 z-10">
    <div class="flex justify-center max-w-1200 w-full mx-auto z-10">
      <div class="box-link-big w-full flex flex-col bg-gray-100 p-10 md:p-16 relative">
        <span class="accent"></span>
        <h3 class="mb-6 sm:mb-10 leading-tight rfs-text-5xl">Talk to one of our experts today to find out how Yellowbrick can help you.</h3>
        <h5 class="pb-10 w-full sm:w-2/3 leading-tight rfs-text-lg sm:rfs-text-3xl text-gray-400">For more information about Yellowbrick Data and the ground-breaking Yellowbrick Data Warehouse, please send us a message.</h5>

        <span v-if="!isOpen" @click="isOpen = !isOpen" href="" class="arrow-btn large"></span>

        <transition name="slide">
          <div v-show="isOpen" class="max-w-1200 w-full mx-auto">
            <BaseHubspot id="7db41cab-fa9d-454e-95af-efb145b5da2a" sfid="7011G000000kg9oQAA" class="hs-form-light"/>
          </div>
        </transition>

      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background-image: url(/uploads/images/contact-bg.svg);
  background-size: cover;
}  

.dots {
  position: relative;
  &:after {
    content: '';
    @apply absolute;
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='27' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v27H0z'/%3E%3Cpath d='M13.667 7.09a.663.663 0 00-.911.247L6.089 18.99a.676.676 0 00.244.919.66.66 0 00.911-.246l6.667-11.655a.676.676 0 00-.244-.919' fill='%234B5357'/%3E%3C/g%3E%3C/svg%3E");
    background-repeat: repeat;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    opacity: .4;
  }
}
</style>

<script>
export default {
  data: () => ({
    isOpen: false
  })
}
</script>
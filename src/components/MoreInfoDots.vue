<template>
  <section id="more-info" class="slashed bg-white relative flex justify-center h-auto m-0 py-16 sm:py-24 md:py-32 px-0 z-10">
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

.slashed {
  position: relative;
  &:after {
    content: '';
    position: absolute;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21 21'%3E%3Cpath fill='none' d='M0 0h21v21H0z'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' fill='%234b5357' d='M9 9h3v3H9z'/%3E%3C/svg%3E");
    background-repeat: repeat;
    background-position: right;
    background-size: 22px;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: .3;
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
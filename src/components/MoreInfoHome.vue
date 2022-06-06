<style scoped>
.unleash {
  z-index: 1;
  max-width: ;
  &:before {
    content: '';
    left: 0;
    right: 100px;
    top: 0;
    bottom: 20px;
    position: absolute;
    background-image: url("data:image/svg+xml,%3Csvg data-name='dots' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 22'%3E%3Ccircle fill='%234b5357' cx='1' cy='1' r='1'/%3E%3C/svg%3E");
    background-repeat: repeat;
    background-size: 22px;
    z-index: 1;
    opacity: .3;
  }
}

.floating-background {
  height: calc(100% + 100px);
  transform: translateY(-50px);
  top: -20px;
  min-height: 300px;
}


@media only screen and (max-width: 768px) {
  .unleash {
    display: none;
  }
}

@media(max-width: 640px) {
  .floating-background {
    display: none;
  }
  .floating-dots {
    display: none;
  }
}
</style>
<template>
  <section id="more-info" class="more-info  bg-gray-light md:bg-white white relative flex justify-center h-auto m-0 py-16 sm:py-24 md:py-32 px-8 z-10">
    <div class="flex justify-center max-w-1200 w-full mx-auto">
      <div class="w-full flex flex-col relative md:px-0">
        <div class="floating-background absolute w-full top-0 bottom-0 bg-gray-light right-1/5 z-0"></div>
        <div class="absolute w-full h-full unleash left-1/2 z-0 floating-dots" style="bottom: -30px; min-height: 300px;"></div>
        <h3 class="accent-heading mb-2 sm:mb-6 leading-tight rfs-text-4xl w-full md:w-1/2 z-20">Find out how Yellowbrick can help, talk to one of our experts today.</h3>
        <h5 class="pb-10 w-full sm:w-2/3 rfs-text-xl sm:rfs-text-3xl text-black w-full md:w-1/2 z-20">For more information about Yellowbrick Data and the ground-breaking Yellowbrick Data Warehouse, please send us a message.</h5>

        <span v-if="!isOpen" @click="isOpen = !isOpen" href="" class="button yellow z-20">Learn more</span>

        <transition name="slide">
          <div v-show="isOpen" class="max-w-xl w-full mr-auto z-50 bg-gray-light">
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
</style>

<script>
export default {
  data: () => ({
    isOpen: false
  })
}
</script>

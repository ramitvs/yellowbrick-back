<template>
  <section id="more-info" class="contact bg-gray-600 relative flex justify-center h-auto m-0 py-16 sm:py-24 md:py-32 px-0 z-10">
    <div class="flex justify-center max-w-1200 w-full mx-auto">
      <div class="box-link-big w-full flex flex-col bg-white p-10 md:p-16 relative">
        <span class="accent"></span>
        <h3 class="mb-6 sm:mb-10 leading-tight rfs-text-5xl">Let us help you find out how easy a migration to Yellowbrick can be</h3>
        <h5 class="pb-10 w-full sm:w-2/3 leading-tight rfs-text-lg sm:rfs-text-3xl text-gray-400">Contact us to learn more about easily migrating from Teradata to Yellowbrick.</h5>

        <span v-if="!isOpen" @click="isOpen = !isOpen" href="" class="arrow-btn large"></span>

        <transition name="slide">
          <div v-show="isOpen" class="max-w-1200 w-full mx-auto">
            <BaseHubspot id="e4e34b7a-6b27-4bb7-8277-fcd8013f6ef7" sfid="7011G000000kh21QAA" class="hs-form-light" />
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
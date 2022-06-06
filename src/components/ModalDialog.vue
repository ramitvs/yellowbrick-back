<style scoped>
.modal {
  z-index: 100;
}
.modal-closer {
  @apply absolute bg-yellow1 p-2 rounded-sm cursor-pointer;
  z-index: 100;
  top: -.5rem;
  right: -.5rem;
}

</style>

<template>
  <transition name="dialog" appear>
    <div class="modal fixed inset-0 bg-transparent-75 flex items-center justify-center trans-opacity shadow-lg" @click="close">
      <div class="trans-transform bg-white m-4 py-6 px-6 sm:px-8 relative rounded-md max-w-screen-sm sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl" role="dialog" @click.stop="">
        <div class="modal-closer" @click="close">
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#1F292E" d="M21.5 24l2.5-2.5-9.5-9.5L24 2.5 21.5 0 12 9.5 2.5 0 0 2.5 9.5 12 0 21.5 2.5 24l9.5-9.5z"/></svg>
        </div>
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

export default {
  mounted() {
    const scrollLock = document.getElementById('scroll-lock')
    disableBodyScroll(scrollLock ? scrollLock : this.$el, { reserveScrollBarGap: true })
    document.activeElement.blur()
    setTimeout(() => {
      document.addEventListener('keydown', this.keyed)
    }, 100)
  },

  beforeDestroy() {
    document.removeEventListener('keydown', this.keyed)
  },

  methods: {
    close() {
      clearAllBodyScrollLocks()
      this.$emit('close')
    },
    keyed(event) {
      if (event.keyCode === 27) this.close()
    }
  }
}
</script>

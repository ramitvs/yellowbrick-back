<style scoped>
.fader {
  &:after {
    position: absolute;
    content: '';
    top: 70%;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fff 70%, #fff 100%);
  }
}
</style>

<template>
  <div class="flex w-full px-0 sm:w-1/2 sm:px-6 mb-12 overflow-hidden" :class="{ 'h-400': !isExpanded }">
    <div class="flex flex-col bg-white w-full p-8 relative">
      <div class="h-full" :class="{fader: isOverflowded && !isExpanded}">
        <h3 class="mb-24 flex justify-between items-center">
          <slot name="title" />
          <span v-if="isOverflowded" class="text-yellow1 rfs-text-5xl cursor-pointer select-none trans-transform" :class="{ 'rotate-45': isExpanded }" @click="isExpanded = !isExpanded">+</span>
        </h3>
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isOverflowded: false,
    isExpanded: false
  }),
  mounted() {
    this.isOverflowded = this.$el.scrollHeight > this.$el.clientHeight
  }
}
</script>

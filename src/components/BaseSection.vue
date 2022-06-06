<template>
  <section :class="classNames">
      <div class="flex flex-col max-w-1200 w-full mx-auto">
        <slot></slot>
      </div>
  </section>
</template>

<script>
export default {
  props: {
    id: {
      type: [String]
    },
    classNames: {
      type: [String],
      default: "flex py-12 px-6 xl:px-0"
    }
  },
}
</script>
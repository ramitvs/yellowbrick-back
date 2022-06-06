<template>
  <span class="hidden" />
</template>

<script>
export default {
  props: ['src'],
  mounted() {
    const elem = document.createElement('script')
    document.head.appendChild(elem)
    elem.onload = () => this.$nextTick(() => this.$emit('loaded'))
    elem.src = this.src
  }
}
</script>

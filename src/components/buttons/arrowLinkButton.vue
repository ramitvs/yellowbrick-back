<style scoped>
  a i {
    display: inline-block;
    margin-top: .2rem;
    transform: translateX(0);
    transition: transform 213ms ease-in-out;
    font-weight: inherit;
    color: inherit;
  }
  a:hover i {
    transform: translateX(0.5rem);
  }
</style>

<template>
  <a :href="href" class="inline-flex items-center">
    <slot></slot>
    <icon-arrow-right class="ml-2"></icon-arrow-right>
  </a>
</template>

<script>
import IconArrowRight from "../icons/IconArrowRight.vue";
export default {
	components: { IconArrowRight },
  props: {
    href: {
      type: String,
      default: null
    },
    id: {
      type: String,
      default: null
    },
    arrowDirection: {
      type: String,
      default: 'right'
    }
  },
};
</script>
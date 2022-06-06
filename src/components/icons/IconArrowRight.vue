<style>
  .yb-icon {
    transform: translateY(2px);
  }
</style>
<template>
  <i class="yb-icon inline-block">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      :width="width"
      :height="height"
      :aria-labelledby="iconName"
    >
      <path
        :fill="fillColor"
        d="M274.42 98.11l31.77-33.89L512 255.88l-205.81 191.9-31.77-33.89 144.42-134.46L0 278.71v-46.5h418.48L274.42 98.11z"
      />
    </svg>
  </i>
</template>

<script>
export default {
  props: {
    width: {
      type: [String, Number],
      default: "1em"
    },
    height: {
      type: [String, Number],
      default: "1em"
    },
    fillColor: {
      type: String,
      default: "currentColor",
    },
    iconName: {
      type: String,
      default: "arrow right"
    }
  },
};
</script>
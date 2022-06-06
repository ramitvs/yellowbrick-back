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
        d="M128.8 31.48v-32h-112a16 16 0 00-16 16v112h32V54l148.64 148.68L204 180.12 55.36 31.48zM496.8-.52h-112v32h73.44L309.6 180.12l22.56 22.56L480.8 54v73.44h32v-112a16 16 0 00-16-15.96zM480.8 456.92L332.16 308.28l-22.56 22.56 148.64 148.64H384.8v32h112a16 16 0 0016-16v-112h-32zM181.44 308.12L32.8 456.92v-73.44H.8v112a16 16 0 0016 16h112v-32H55.36L204 330.84z" transform="translate(-.8 .52)"
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
      default: "expand"
    }
  },
};
</script>
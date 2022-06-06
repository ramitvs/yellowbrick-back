<style scoped>

.play-icon {
  @apply absolute v-center w-6 left-4;
  & .circle {
    stroke: #ffcd32;
    transition: all .2s ease-in-out;
  }
  & .triangle {
    fill: #ffcd32;
    transition: all .2s ease-in-out;

  }
}

.yellow-bordered {
  &:hover {
    & .play-icon {
      @apply text-black;
      & .circle {
        stroke: #000;
      }
      & .triangle {
        fill: #000;

      }
    }
  }
}

.v-center {
  top: 50%;
  transform: translateY(-50%);
}
</style>

<template>
  <div>
    <BaseScript :src="`https://fast.wistia.com/embed/medias/${this.videoId}.jsonp`" />
    <BaseScript :src="`https://fast.wistia.com/assets/external/E-v1.js`" />
    <span :class="`wistia_embed wistia_async_${this.videoId} popover=true popoverContent=link`" style="display:inline;position:relative">
      <button href="#" class="button yellow-bordered mr-4 my-4 md:mb-0 whitespace-no-wrap relative"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" class="play-icon"><path class="circle" d="M8.5,1.55a7,7,0,1,1-6.95,7,6.95,6.95,0,0,1,7-6.95m0-1a8,8,0,1,0,8,8A8,8,0,0,0,8.5.55Z"/><polygon class="triangle" points="6.49 5.01 12.03 8.51 6.49 11.99 6.49 5.01"/></svg> <span class="ml-5">{{ this.videoText }}</span></button>
    </span>
  </div>
</template>

<script>
export default {
  props: [
    'videoId',
    'videoText'
  ]
}
</script>
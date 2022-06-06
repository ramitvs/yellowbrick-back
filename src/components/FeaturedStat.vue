<template>
  <div :class="first ? '' : 'mt-12'" class="bg-gray-500 shadow-lg p-10 relative text-gray-500 pb-10 relative text-center featured-stats">
    <div class="icon-container">
			<img v-if="iconName" :src="require('~/assets/images/icons/' + iconName)" :alt="`${altAttribute}`" class="icon" />
    </div>
    <h4 v-if="featuredTitle" class="text-teal w-full text-center mx-auto featured-title">{{ featuredTitle }}</h4>
    <h5 v-if="featuredPhrase" class="text-white rsf-text-5xl font-semibold max-w-xs w-full text-center mx-auto">{{ featuredPhrase }}</h5>
	</div>
</template>
 
<script>
  export default {
    props: ['iconName', 'altAttribute', 'featuredTitle', 'featuredPhrase', 'first'],
    mounted() {}
  }
</script>

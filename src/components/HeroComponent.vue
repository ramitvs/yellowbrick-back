<style scoped>
.list-hyphen {
  list-style: none;
  list-style-image: none;
  list-style-position: outside;
  list-style-type: "- ";
  margin-left: 0;
}
</style>

<template>
  <section class="hero flex bg-gray-700 py-12 md:py-24 text-white px-6 xl:px-0 relative">
    <div class="flex flex-col md:flex-row max-w-1200 w-full py-8 mx-auto relative z-10">

      <div class="hero-image" v-if="heroBgImage">
        <img :src="require(`!!assets-loader!@images/${heroBgImage}`)" :alt="heroTitle" class="hero-bgImage"/>
      </div>

      <div class="flex flex-col max-w-1200 w-full mx-auto z-10" :class="{'order-2 md:order-1': heroRightImage}">
        <div class="w-full" :class="(!heroFormId && !heroRightImage) ? 'md:w-1/2' : 'md:w-10/12'">
          <h2 class="rfs-text-xl text-yellow1 mb-0" v-if="heroPreTitle">{{ heroPreTitle }}</h2>
          <img v-if="heroLogoIcon" :src="require('~/assets/images/icons/' + heroLogoIcon)" :alt="`${altAttribute}`" class="icon" />
          <h1 class="rfs-text-6xl" v-if="heroTitle">{{ heroTitle }}</h1>
          <p class="rfs-text-lg" v-if="heroDescription">{{ heroDescription }}</p>
          <ul class="rfs-text-base" v-if="listItems">
            <li class="list-item" v-for="item in listItems" v-bind:key="item.message">{{item.message}}</li>
          </ul>
          <p v-if="heroDisclaimer" class="text-xs text-gray-400 mb-0"><sup class="text-yellow1">*</sup>{{ heroDisclaimer }}</p>
          <ul class="text-xs list-hyphen text-gray-400" v-if="heroDisclaimerItems">
            <li class="list-item pb-0" v-for="item in heroDisclaimerItems" v-bind:key="item.message">{{item.message}}</li>
          </ul>
          <div class="button-container px-2 lg:pt-4 mt-1 w-full md:w-2/4">
            <button v-if="heroButtonCta" v-scroll-to="{el: heroButtonCta,}" class="text-center shadow button bg-yellow1 button-md border-none text-gray2 font-bold whitespace-no-wrap px-3 py-3 w-full block rounded-smmr-2">{{heroButton}}</button>
            <a v-if="buttonLink" :href="buttonLink" :title="heroButton" class="button yellow">{{heroButton}}</a>
          </div>
        </div>
      </div>

      <div v-if="heroFormId" class="w-full md:w-3/4 bg-gray-200 p-8">
        <div class="float-form">
          <h3 class="text-gray-700">{{ heroFormTitle }}</h3>
          <BaseHubspot
              :id="heroFormId"
              :sfid="herosfid"
              :webId="heroWebId"
          />
        </div>
      </div>

      <div v-if="heroRightImage" class="flex w-full order-1 md:order-2 flex-shrink-0 items-center justify-center mb-12 md:mb-0 md:w-1/2">
        <img :src="heroRightImage" :alt="heroRightImageTitle" class="hero-rightImg"/>
      </div>

    </div>
  </section>
</template>
<script>
export default {
  props:[
    'buttonLink',
    'heroBgImage',
    'heroButton',
    'heroButtonCta',
    'heroDescription',
    'heroDisclaimer',
    'heroDisclaimerItems',
    'heroFormId',
    'heroFormTitle',
    'heroImage',
    'heroLogoIcon',
    'heroPreTitle',
    'heroRightImage',
    'heroRightImageTitle',
    'herosfid',
    'heroTitle',
    'heroWebId',
    'listItems',
    'testItems',
  ],
  data() {
    return {
      loadForm: false,
    }
  }
}
</script>

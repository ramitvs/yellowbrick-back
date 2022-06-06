<template>

<span class="hs-cta-wrapper" id="hs-cta-wrapper-dc28fcc2-b621-4960-b935-2ac8c7206f86">
 <span class="hs-cta-node hs-cta-dc28fcc2-b621-4960-b935-2ac8c7206f86" id="hs-cta-dc28fcc2-b621-4960-b935-2ac8c7206f86">
 <a href="https://cta-redirect.hubspot.com/cta/redirect/8366986/dc28fcc2-b621-4960-b935-2ac8c7206f86"  target="_blank" >
     <BaseScript src="https://js.hscta.net/cta/current.js" @loaded="create"/>
 <img class="hs-cta-img" id="hs-cta-img-dc28fcc2-b621-4960-b935-2ac8c7206f86" style="border-width:0px;" src="https://no-cache.hubspot.com/cta/default/8366986/dc28fcc2-b621-4960-b935-2ac8c7206f86.png"  alt="Download the PDF"/>
     <div :class="`w-full hs-form-wrapper hsid${id}`" :id="id" :sfid="sfid" :goToWebinarWebinarKey="webId"></div>
 </a>
 </span>
 </span>
</template>



<script>
export default {
  methods: {
    create() {
      window.hbspt.forms.create({
        portalId: "8366986",
        formId: "dc28fcc2-b621-4960-b935-2ac8c7206f86",
      })
    }
  }
}
</script>
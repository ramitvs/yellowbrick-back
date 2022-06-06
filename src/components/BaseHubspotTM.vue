<template>
  <div class="flex align-center justify-center md:px-0">
    <BaseScript src="https://js.hsforms.net/forms/v2.js" @loaded="create"/>
    <div :class="`w-full hs-form-wrapper hsid${id}`" :id="id" :sfid="sfid" :goToWebinarWebinarKey="webId"></div>

  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: [String, Number]
    },
    sfid: {
      type: [String, Number]
    },
    webId: {
      type: [String, Number],
      default: null
    }
  },
  methods: {
    create() {
      window.hbspt.forms.create({
        portalId: "8366986",
        formId: this.id,
        sfdcCampaignId: this.sfid,
        goToWebinarWebinarKey: this.webId,
        target: `.hsid${this.id}`
      })
    }
  }
}
</script>

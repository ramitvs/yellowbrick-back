<template>
    <div class="flex flex-col align-center justify-center md:px-0 ">
        <div>
        <BaseScript src="https://js.hsforms.net/forms/v2.js" @loaded="create" />
        <BaseScript src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"  />
        <div :class="`w-full hs-form-wrapper hsid${id}` " :id="id" :sfid="sfid" :goToWebinarWebinarKey="webId"></div>
            </div>
        <div class="text-black font-normal text-xs" style="margin-top:10px;font-size:13px">Yellowbrick uses the information you provide to us to contact you about our relevant content, products, and services. You can unsubscribe from communications from Yellowbrick at any time. For more information, check out Yellowbrick's <span class="underline"><a href="/terms">Privacy Policy</a></span>.</div>
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
          target: `.hsid${this.id}`,
          onFormSubmit: function (form) {
              _oktrk('send', {
                  tag: 'yellowbrick_hubspot_oktopost_forms',
                  firstName: form.find('input[name="firstname"]').val(),
                  lastName: form.find('input[name="lastname"]').val(),
                  email: form.find('input[name="email"]').val(),
                  company: form.find('input[name="company"]').val()
              });
          }
      })
    }
  }
}
</script>

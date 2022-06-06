<style scoped>

</style>

<template>
  <Layout>
    <div>
      <h2>Customer Onboarding</h2>
      <slot name="content" />
    </div>
  </Layout>
</template>

<script>

import FirstStep from '~/components/form/FirstStep.vue'
import SecondStep from '~/components/form/SecondStep.vue'
import ThirdStep from '~/components/form/ThirdStep.vue'
import FourthStep from '~/components/form/FourthStep.vue'
import FormNav from '~/components/form/FormNav.vue'

export default {

  metaInfo: {
    title: 'Yellowbrick Cloud Onboarding',
    meta: [
      { 
        key: 'description',
        name: 'description',
        content: 'Yellowbrick is an innovative data analytics solution for on-premises, hybrid, and multi-cloud deployments that eliminates trade-offs between performance and scale.'
      }
    ]
  },
  components: {
		FirstStep,
		SecondStep,
		ThirdStep,
		FourthStep,
		FormNav
  }
}
</script>

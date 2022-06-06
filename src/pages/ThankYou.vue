<style scoped>

.hero {
  background-image: url(/uploads/images/news-bg.svg);
  background-size: cover;
  background-position: center;
}


</style>

<template>
  <Layout>
    <section class="hero flex flex-col bg-gray-700 py-24 px-6 xl:px-0">
      <div class="max-w-1200 w-full mx-auto z-10">
        <h1 class="text-white">Thank You</h1>
      </div>
    </section>

    <section class="py-12 md:py-20 bg-gray-light dot-right px-6 xl:px-0 z-10" id="companynews">
      <div class="max-w-1200 w-full mx-auto">
        <h2 class="accent-heading">Your request has been received!</h2>
        <p class="text-lg mb-16">Thank you for your interest in Yellowbrick. We will respond shortly.</p>

        <g-link class="button yellow" to="/">
          Return to the homepage
        </g-link>
      </div>
    </section>

  </Layout>
</template>

<script>

export default {
  metaInfo: {
    title: 'Thank You for Contacting Yellowbrick',
    meta: [
      { name: 'description', content: 'Thank you so much for contacting us. We will respond to your inquiry as soon as possible. Have a great day!' }
    ]
  }
}

</script>
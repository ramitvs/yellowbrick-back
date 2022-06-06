<style scoped>

.hero {
  background-image: url(/uploads/images/generic-bg.svg);
  background-size: cover;
}
</style>

<template>
    <Layout>

    <section class="hero py-20">
        <div class="max-w-1200 mx-auto px-3 md:px-32 text-white z-10">
            <h1 class="leading-nonej">Umm...Awkward.</h1>
            <div style="font-size: 12vw;" class="font-bold p-0 m-0 mb-12 leading-none">404 Error</div>
            <h3>We apologize. For some reason, this page doesn't want to be found. We always try our best to keep this site organized. Unfortunately for us, this time we weren't able to catch it before you got here.</h3>
            <h4>Thank you for your patience!</h4>

            <g-link to="/contact-us/" class="mt-8 button yellow mr-6">Contact Us</g-link>
            <g-link to="/" class="mt-8 button yellow">Return to Homepage</g-link>
        </div>
    </section>

    </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: '404 - Page Not Found',
    meta: [
      { name: 'description', content: 'Oops! We are sorry you got here. We will work on fixing this issue as soon as we can. Thanks for your patience.' }
    ]
  }
}
</script>
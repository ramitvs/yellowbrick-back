<style scoped>

.hero {
  background-image: url(/uploads/images/generic-bg.svg);
  background-size: cover;
}

</style>

<template>
	<Layout>

	<section class="hero py-20">
		<div class="w-full max-w-1200 mx-auto text-white z-10">
			<h1>NetFlow with Yellowbrick and SiLK</h1>
		</div>
	</section>

	<section class="bg-white py-12 md:py-20 z-10">
		<div class="w-full max-w-1200 mx-auto">
			<BaseWistia id="pvbe39c7rr" />
		</div>
	</section>

	

	</Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'NetFlow with Yellowbrick and SiLK',
    meta: [
      {
				key: 'description',
				name: 'description',
				content: 'Use SiLK to load NetFlow data from Yellowbrick.' }
    ]
  }
}
</script>

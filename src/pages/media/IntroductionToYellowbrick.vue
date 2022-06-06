<style scoped>

.hero {
  background-image: url(/uploads/images/generic-bg.svg);
  background-size: cover;
}

.yeellow {
	fill: none;
	animation: clean 15s infinite linear;
}

.bleuu {
	stroke-dashoffset: 0;
	fill: none;
	animation: dash 10s infinite linear;
}

.white {
	stroke-dashoffset: 0;
	fill: none;
	animation: dash 5s infinite linear;
}

@keyframes dash {
	to {
		stroke-dashoffset: 500;
	}
}

@keyframes clean {
	from {
		stroke-dashoffset: 0;
	}
	to {
		stroke-dashoffset: 1000;
	}
}

</style>

<template>
	<Layout>

	<section class="hero py-20">
		<div class="w-full max-w-1200 mx-auto text-white z-10">
			<h1>Introduction to Yellowbrick</h1>
		</div>
	</section>

	<section class="bg-white py-12 md:py-20 z-10">
		<div class="w-full max-w-1200 mx-auto">
			<BaseWistia id="mw371y8dkh" />
		</div>
	</section>

	

	</Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Introduction to Yellowbrick',
    meta: [
      {
				key: 'description',
				name: 'description',
				content: 'Yellowbrick is the world’s only modern data warehouse purpose-built for hybrid cloud, providing ultimate flexibility and performing with unmatched speed either in your data center or in any cloud.' }
    ]
  }
}
</script>



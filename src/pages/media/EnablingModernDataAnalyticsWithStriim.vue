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

	<section class="hero">
		<div class="w-full max-w-1200 mx-auto text-white z-10">
			<h1>Enabling Modern Data Analytics</h1>
		</div>
	</section>


	

	</Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Enabling Modern Data Analytics with Striim',
    meta: [
      {
				key: 'description',
				name: 'description',
				content: 'See how Striim enables low-risk, fast, and either bulk or continuous data ingestion for Yellowbrick data warehouses.' }
    ]
  }
}
</script>



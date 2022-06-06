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

	<section class="hero py-20 px-6 xl:px-0">
		<div class="w-full max-w-1200 mx-auto text-white z-10">
			<h1>Symphony RetailAI Customer Video</h1>
		</div>
	</section>

	<section class="bg-white py-12 md:py-20 z-10  px-6 xl:px-0">
		<div class="w-full max-w-1200 mx-auto">
			<BaseWistia id="08aecxpoow" />
      <a href="/resources/case-studies/symphony-retail-AI/" class="button yellow mt-8">Read Case Study</a>
		</div>
	</section>

	</Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Yellowbrick Hybrid Cloud Data Warehouse and Symphony RetailAI',
    meta: [
      {
				key: 'description',
				name: 'description',
				content: 'Learn how to Yellowbrick Hybrid Cloud Data Warehouse dramatically imporved performance for Symphony RetailAI.'
			}
    ]
  }
}
</script>
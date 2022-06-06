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
            <h5 class="text-yellow1">Webcast:</h5>
			<h1>Driving Value From Your Data Lake</h1>
		</div>
	</section>

	<section class="bg-white py-12 md:py-20 z-10">
		<div class="w-full max-w-1200 mx-auto">
			<BaseWistia id="w4oz1jh445" />
		</div>
	</section>
	

	</Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Driving Value From Your Data Lake',
    meta: [
      {
        key: 'description',
        name: 'description',
				content: 'Driving Value From Your Data Lake with Yellowbrick Hybrid Cloud Data Warehouse.'
			}
    ]
  }
}
</script>
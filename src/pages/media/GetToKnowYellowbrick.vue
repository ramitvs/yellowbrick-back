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
			<h1>Introduction to Yellowbrick</h1>
		</div>
	</section>

	<section class="bg-white py-12 md:py-20 z-10  px-6 xl:px-0">
		<div class="w-full max-w-1200 mx-auto">
			<BaseWistia id="esxzegjkey" />
		</div>
	</section>

	</Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Get to know Yellowbrick',
    meta: [
      { 
        key: 'description',
        name: 'description',
        content: 'Watch to learn what makes Yellowbrick unique and why Yellowbrick is the world\'s fastest data warehouse for hybrid and multi-cloud environments.'
      },
      {
        key: 'og:title',
        name: 'og:title',
        content: 'Get to know Yellowbrick'
      },
      {
        key: 'og:description',
        name: 'og:description',
        content: 'Watch to learn what makes Yellowbrick unique and why Yellowbrick is the world\'s fastest data warehouse for hybrid and multi-cloud environments.'
      },
      {
        key: 'twitter:title',
        name: 'twitter:title',
        content: 'Get to know Yellowbrick'
      },
      {
        key: 'twitter:description',
        name: 'twitter:description',
        content: 'Watch to learn what makes Yellowbrick unique and why Yellowbrick is the world\'s fastest data warehouse for hybrid and multi-cloud environments.'
			}
		]
	}
}
</script>
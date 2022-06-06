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
			<h1>Understanding Yellowbrick Data with Tableau Demonstration </h1>
		</div>
	</section>

	<section class="bg-white py-12 md:py-20 z-10">
		<div class="w-full max-w-1200 mx-auto">
			<BaseWistia id="pslx2b3yri" />
		</div>
	</section>

	<section class="hidden">
		<svg class="animated-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 320">
			<path d="M0 0h1920v320H0V0z" fill-rule="evenodd" clip-rule="evenodd" fill="#1f292e"/>
			<path class="bleuu" d="M1086.8 0L900.6 322.4M1326.4 252.5H1541l39 67.5" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=".745,4.969"/>
			<path class="bleuu" d="M1142 320l19.2-32.9H1301l90.2-155.9H1571L1680 320" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=".754,5.024"/>
			<path class="bleuu" d="M946.8 0L871 131.2h-77.1" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=".745,4.969"/>
			<path class="bleuu" d="M382 320l39-67.5M0 183.2h120.4" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round"/>
			<path class="white" d="M600.6 322.4l38.9-67.5M1222 320l129.4-224.1" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=".745,4.969"/>
			<path class="white" d="M1286.4 217.8H1761l30.1 52H1920" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=".755,5.034"/>
			<path class="white" d="M1920 96.6h-309l-55-95.3" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=".745,4.969"/>
			<path class="white" d="M1261 252.5h-.4" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round"/>
			<path class="white" d="M1255.6 252.5h-214.7L941 79.2H780.8L735.2 0M146.4 79.2H361L406.8 0M635.2 0L661 44.6 502 320" fill="none" stroke="#fff" stroke-dasharray=".745,4.969" stroke-linecap="round" stroke-linejoin="round"/>
			<path class="bleuu" d="M0 113.9h181L246 1.3" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3.078,10.261"/>
			<path class="bleuu" d="M486.7 0L481 10l60 103.9h180l86.8 150.3" fill="none" stroke="#00c3cd" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="2.967,9.888"/>
			<path class="white" d="M824.6 319.5l48.9-84.8M1248 1l-144.3 250" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=".745,4.969"/>
			<path class="yeellow" d="M1661 79.2l-70 121.2H791l-70.4 121.9" fill="none" stroke="#ffcd32" stroke-linecap="round" stroke-linejoin="round"/>
			<path class="yeellow" d="M451 304.4L590.7 61.9 556 1.3M1735.2 0l15.8 27.3h169M56 0l25 43.3-30 52H0" fill="none" stroke="#ffcd32" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
	</section>

	

	</Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Yellowbrick Data and Tableau',
    meta: [
      {
				key: 'description',
				name: 'description',
				content: 'Yellowbrick Data Warehouse and Tableau team up to create a fantastic user experience.' }
    ]
  }
}
</script>
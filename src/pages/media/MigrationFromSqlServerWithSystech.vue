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
			<h1>Fast and effortless migration from SQL Server to Yellowbrick</h1>
		</div>
	</section>

	<section class="bg-white py-12 md:py-20 z-10">
		<div class="w-full max-w-1200 mx-auto">
			<BaseWistia id="7moyaxkvth" />
		</div>
	</section>

	</Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Fast and effortless migration from SQL Server to Yellowbrick',
    meta: [
      {
				key: 'description',
				name: 'description',
				content: 'Upgrading from SQL Server to Yellowbrick unlocks a competitive advantage with 100X performance at a fraction of the cost. However, migrating the whole data and analytics environment from SQL Server can present several challenges. With Systech’s proven migration methodology along with its purpose-built tools and utilities, organizations can simplify and accelerate migration in a cost-effective way.'
			}
    ]
  }
}
</script>
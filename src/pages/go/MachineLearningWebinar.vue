<style scoped>
	.hero {
		background-image: url(/uploads/images/hero-alt-bg.svg);
		background-size: cover;
		background-position: center center;

		&:before {
			height: 2rem;
		}
	}

	.freedom-bg {
		background-image: url(/uploads/images/freedom-bg.svg);
		background-position: bottom right;
		background-repeat: no-repeat;
		background-size: 45%;
	}

	.float-form {
		@apply relative p-8 bg-white shadow-lg;

		& .mktoForm {
			margin-top: .5rem !important;
		}
	}

	.date-time {
		color: #FFCD32;
	}

	.date-time span {
		display: inline-block;
	}
</style>

<template>
	<Layout>
		<section class="hero flex bg-gray-700 py-10 md:py-12 text-white px-6 xl:px-0">
			<div class="flex flex-col md:flex-row max-w-1200 w-full py-8 mx-auto relative z-10">
				<div class="w-full md:w-7/12 p-0 md:pr-16 text-gray-700 md:text-white">
					<div class="bg-white md:bg-transparent p-6 md:p-0">
						<h5 class="text-yellow1 mb-2">On-demand webinar</h5>
						<h1 class="rfs-text-5xl p-0">Accelerate machine learning with Yellowbrick Data Warehouse</h1>
						<p class="rfs-text-lg">When it comes to analytics, it's hard to beat the convenience of a data warehouse.
							They allow you to analyze billions of records in seconds, just by running a few simple queries. But if
							you're only focusing on the raw data, you might be missing the bigger picture. Buried underneath that raw
							data is a rich layer of hidden information that can provide useful insights to shorten processes or save
							thousands in costs. For those who know how to access it, this information can be extremely valuable.</p>
						<p class="rfs-text-lg">Learn how the right machine learning algorithm
							can unlock hidden fields and new insights that were not previously possible. Plus, see a live demo of the
							latest machine learning techniques to expand the capabilities of your data warehouse and take your
							analytics to the next level.</p>
						<ul class="rfs-text-lg">
							<li>Shorten processes</li>
							<li>Identify cost-savings opportunities</li>
							<li>Uncover new insights more quickly for faster speed-to-insight</li>
						</ul>
					</div>
				</div>
				<div class="w-full md:w-1/3">
					<div class="float-form">
						<h3 class="text-gray-700">Watch On-Demand</h3>
						<BaseHubspot 
							id="ce3355d4-96aa-4fca-808c-813e94ed66b1" 
							sfid="7011G000000KSZxQAO"
							webId="6678206438479248912"
						/>
					</div>
				</div>
			</div>
		</section>

		<GoCustomers />

	</Layout>
</template>

<script>
	import GoCustomers from "~/components/GoCustomers.vue";
	import Layout from '~/layouts/Landing.vue';

	export default {
		metaInfo: {
			title: 'Accelerate machine learning with Yellowbrick Data Warehouse',
			meta: [{
				key: 'description',
				name: 'description',
				content: 'Learn how the right machine learning algorithm can unlock hidden fields and new insights that were not previously possible.'
			}]
		},
		components: {
			GoCustomers,
			Layout
		}
	};
</script>
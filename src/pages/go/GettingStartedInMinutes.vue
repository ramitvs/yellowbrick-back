<style scoped>
	.hero {
		background-image: url(/uploads/images/hero-alt-bg.svg);
		background-size: cover;
		background-position: center center;

		&:before {
			height: 2rem;
		}
	}

	.float-form {
		@apply relative p-8 bg-white shadow-lg;

		& .mktoForm {
			margin-top: .5rem !important;
		}
	}
</style>

<template>
	<Layout>
		<section class="hero flex bg-gray-700 py-10 md:py-12 text-white px-6 xl:px-0">
			<div class="flex flex-col md:flex-row max-w-1200 w-full py-8 mx-auto relative z-10">
				<div class="w-full md:w-7/12 p-0 md:pr-16 text-gray-700 md:text-white">
					<div class="bg-white md:bg-transparent p-6 md:p-0">
						<h5 class="text-teal mb-2">Live demo</h5>
						<h1 class="rfs-text-5xl p-0">Get started with Yellowbrick in minutes</h1>
						<p class="date-time text-teal">
							<!-- <span><strong>When:</strong> Thursday, June 24&nbsp;&nbsp;|&nbsp;&nbsp;</span>
							<span><strong>Time:</strong> 10 am PT / 1 pm ET&nbsp;&nbsp;|&nbsp;&nbsp;</span> -->
							<span class="duration"><strong>Duration: </strong>15 minutes + Q&A</span>
						</p>
						<p class="rfs-text-lg">Yellowbrick Data Warehouse makes it easy for analysts and developers to get started via a cloud-native test drive experience on AWS (free for 7 days; no credit card required). In this demo, you'll see how to:</p>
						<ul class="rfs-text-lg">
							<li>Create and manage databases and users on a single-node instance</li>
							<li>Easily load your own data (without PII) from an S3 bucket or use sample data and queries</li>
							<li>Create and run queries in your browser using a rich SQL editor (and explore results with visualization); or, bring your own tools</li>
						</ul>
					</div>
				</div>
				<div class="w-full md:w-1/3">
					<div class="float-form">
						<h3 class="text-gray-700">Watch On-Demand</h3>
						<BaseHubspot id="8f262cb1-d4b9-411d-9a3d-e4dcc418d8b2" sfid="7011G000000KZOhQAO" webId="8148411819482914063" />
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
			title: 'Get started with Yellowbrick in minutes',
			meta: [{
				key: 'description',
				name: 'description',
				content: 'Yellowbrick Data Warehouse makes it easy for analysts and developers to get started via a cloud-native test drive experience on AWS'
			}]
		},
		components: {
			GoCustomers,
			Layout
		}
	};
</script>
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

	.date-time {
		color: #57c0cb;

		& span {
			display: inline-block;
		}
	}
</style>

<template>
	<Layout>
		<section class="hero flex bg-gray-700 py-10 md:py-12 text-white px-6 xl:px-0">
			<div class="flex flex-col md:flex-row max-w-1200 w-full py-8 mx-auto relative z-10">
				<div class="w-full md:w-7/12 p-0 md:pr-16 text-gray-700 md:text-white">
					<div class="bg-white md:bg-transparent p-6 md:p-0">
						<h5 class="text-yellow1 mb-2"><strong>On-demand Video</strong></h5>
						<h1 class="rfs-text-6xl p-0">The best is yet to come in Data Warehousing</h1>
						<h5>A conversation with Yellowbrick CTO Mark Cusack</h5>
						<p class="rfs-text-lg">Businesses want more from their data platforms &mdash; more performance, more flexibility, and more agility &mdash; to enable real-time analytics at any scale, but legacy and public cloud-only solutions are only delivering bigger bills. The time has come for a modern alternative that breaks the status quo limitations on price/performance, deployment flexibility, and user experience, all in a single package.</p>
						<h5>In this conversation with Yellowbrick CTO Mark Cusack you will learn:</h5>
						<ul class="rfs-text-lg">
							<li>Why price/performance is the most critical requirement for data warehouse modernization</li>
							<li>How rejecting the false choice between on-premises and cloud deployments unlocks long-term innovation</li>
							<li>How analytics-as-a-service providers are the best model for data analytics architecture across every industry</li>
						</ul>
					</div>
				</div>
				<div class="w-full md:w-1/3">
					<div class="float-form">
						<h3 class="text-gray-700">Watch On-Demand</h3>
						<BaseHubspot 
							id="70338edc-4e24-4016-8f48-c2e53da6b5ab" 
							sfid="7011G000000KSp2QAG"
							webId="1525893851380366348"
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
			title: 'The Best is Yet to Come in Data Warehousing',
			meta: [{
				key: 'description',
				name: 'description',
				content: 'Join Yellowbrick CTO Mark Cusack for a fireside chat about Data Warehouses'
			}]
		},
		components: {
			GoCustomers,
			Layout
		}
	};
</script>
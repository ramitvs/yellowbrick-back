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
						<h5 class="text-teal mb-2">Fireside chat On-demand</h5>
						<h1 class="rfs-text-5xl p-0">The top 5 things to know about cloud-native data warehousing for distributed clouds</h1>
						<p class="date-time text-teal">
							<span class="duration"><strong>Duration: </strong>20 minutes + Q&A</span>
						</p>
						<p class="rfs-text-lg">The Gartner Top Strategic Technical Trends for 2021 report suggests that the distributed cloud model will emerge to address the explosion of data growth, particularly at the network edge. But to take full advantage of the benefits that distributed clouds offer, we must rethink our approach to how data is managed, processed, and analyzed in such a homogeneous, geographically separated and logically interconnected environment.</p>
						<p class="rfs-text-lg">Tune into this fireside chat with Yellowbrick CTO Mark Cusack to learn:</p>
						<ul class="rfs-text-lg">
							<li>Why the most useful data management and analytic applications for distributed clouds will be based on Kubernetes-based microservices and managed by a unified control plane</li>
							<li>Why authentic "cloud-native" architecture extends not only across public cloud environments, but into private data centers and out to the network edge, as well</li>
							<li>Yellowbrick's vision for bringing cloud-native, Kubernetes-based data warehousing to the distributed cloud model</li>
						</ul>
					</div>
				</div>
				<div class="w-full md:w-1/3">
					<div class="float-form">
						<h3 class="text-gray-700">Watch On-Demand</h3>
						<BaseHubspot 
							id="a02208c3-64fb-4ded-9c07-84ea0acc7712" 
							sfid="7011G000000KZSZQA4"
							webId="4521566062657396748"
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
			title: 'The top 5 things to know about cloud-native data warehousing for distributed clouds',
			meta: [{
				key: 'description',
				name: 'description',
				content: 'The Gartner Top Strategic Technical Trends for 2021 report suggests that the distributed cloud model will emerge to address the explosion of data growth, particularly at the network edge. But to take full advantage of the benefits that distributed clouds offer, we must rethink our approach to how data is managed, processed, and analyzed in such a heterogeneous, geographically separated and logically interconnected environment.'
			}]
		},
		components: {
			GoCustomers,
			Layout
		}
	};
</script>
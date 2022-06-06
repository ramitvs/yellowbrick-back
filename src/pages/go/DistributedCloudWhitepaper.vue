<style scoped>
.hero {
	background-image: url(/uploads/images/hero-bg.svg);
	background-size: cover;
	background-position: center center;
	&:after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		@apply bg-gray-600 absolute z-0;
		opacity: 0.7;
	}
}

.predictability-bg {
	background-image: url(/uploads/images/predictability-bg.svg);
	background-position: bottom right;
	background-repeat: no-repeat;
	background-size: 50%;
}

.dk-bg .mktoForm .mktoFormRow .mktoLabel {
	color: #ffffff !important;
}

.float-form {
	@apply relative p-8 bg-gray-200 shadow-lg;
	& .mktoForm {
		margin-top: 0.5rem !important;
	}
}
</style>

<template>
	<Layout>
		<section
			class="hero flex bg-gray-700 py-10 md:py-12 text-white px-6 xl:px-0"
		>
			<div
				class="flex flex-col md:flex-row max-w-1200 w-full py-8 mx-auto relative z-10"
			>
				<div
					class="w-full md:w-2/3 p-0 md:pr-16 text-gray-700 md:text-white"
				>
					<h5 class="text-yellow1 mb-6 md:mb-2">
						Featured Research Paper:
					</h5>
					<div class="bg-white md:bg-transparent p-6 md:p-0">
						<h1 class="p-0">
							Data warehousing for distributed clouds
						</h1>
						<img
							src="/uploads/distributed-cloud-whitepaper-thumb.png"
							class="float-none sm:float-left w-1/2 mx-auto sm:mx-0 shadow-md sm:shadow-none sm:w-5/12 m-0 mb-6 sm:mb-0 sm:mr-10 sm:mb-6 sm:mt-3"
							alt="Whitepaper: Data warehousing for distributed clouds"
						/>
						<p class="rfs-text-lg">
							The Gartner Top Strategic Technical Trends for 2021
							report suggests that the distributed cloud model
							will emerge to address the explosion of data growth,
							particularly at the network edge.
						</p>
						<p class="rfs-text-lg">
							Distributed clouds can be seen as an inevitable
							consequence of the hybrid cloud deployment model
							that incorporates public cloud, private cloud, and
							cloud stacks at the network edge, and provides
							seamless integration of resources, data, and
							analytics across multi-cloud boundaries,
							orchestrated from a single control plane.
						</p>
						<p class="rfs-text-lg">
							Data warehouse platforms will have to evolve to meet
							those requirements. Managed from a single control
							plane, they will enable analytic applications to be
							provisioned at the point of need on a right-sized
							blend of physical and virtualized infrastructure,
							based on data gravity, data sovereignty, data
							governance, and latency requirements.
						</p>
						<p class="rfs-text-lg">
							Download the whitepaper to learn more.
						</p>
					</div>
				</div>

				<div class="w-full md:w-1/3">
					<div class="float-form">
						<h3 class="text-gray-700">Download today</h3>
						<BaseHubspot
							id="66d294e4-1d4a-4b18-af55-1664a22790df"
							sfid="7011G000000KXRoQAO"
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
import Layout from "~/layouts/Landing.vue";

export default {
	metaInfo: {
		title: "Distributed Cloud Whitepaper",
		meta: [
			{
				name: "description",
				content:
					"Data warehousing for distributed clouds.",
			},
		],
	},
	components: {
		GoCustomers,
		Layout,
	},
};
</script>
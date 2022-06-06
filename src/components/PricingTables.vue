<template>
	<section class="flex bg-white px-6 xl:px-0 py-20">
		<div class="max-w-1200 w-full mx-auto relative">
			<h3 class="accent-heading">Yellowbrick Data Warehouse service plans</h3>
			<div class="flex sm:flex-row flex-wrap -mx-6 sm:-mx-3 mt-12">
				<div class="w-full sm:w-full mb-20 cc:w-1/3 relative pl-5 pr-5 bg-transparent">
					<div
						class="w-full bg-white shadow text-center rounded relative pb-2 flex flex-col justify-start priceTable-container highlight">
						<h5 class="m-0 w-full bg-white pt-6 px-6 text-gray2 mb-2 relative z-1 package-title">STANDARD</h5>
						<div class="sm:px-4 sm:pt-4 pb-0 lg:pt-6 lg:px-6 features-container">
							<h6 class="m-0 text-gray2 px-8 pb-6">
								For standard use cases
								<div class="pt-2 mt-2">In public clouds or data centers</div>
							</h6>
							<h5 class="rfs-text-2xl text-gray2 font-semibold w-full leading-none m-0 pricing">$10k/month</h5>
							<ul class="feature-list pl-12 text-left">
								<li class="list-item list-none">
									<h6 class="m-0 text-gray2 list-title">Features include:</h6>
								</li>
								<li class="list-item list-none"><span class="checkmark"></span>Industry-leading price/performance</li>
								<li class="list-item list-none"><span class="checkmark"></span>Unified hybrid architecture</li>
								<li class="list-item list-none"><span class="checkmark"></span>Encryption everywhere</li>
								<li class="list-item list-none"><span class="checkmark"></span>Native streaming support</li>
								<li class="list-item list-none"><span class="checkmark"></span>Up to 10TB of user data</li>
								<li class="list-item list-none"><span class="checkmark"></span>Standard support, 24 hour SLA</li>
								<li class="list-item list-none"><span class="checkmark"></span>And more</li>
							</ul>
							<!-- <div class="button-container px-2 lg:pt-4 mt-1 w-full">
								<button @click="popLink" class="drift-open-chat bg-yellow1 text-gray2 font-bold whitespace-no-wrap px-3 py-3 w-full block rounded-sm mr-2">Contact us</button>
							</div> -->
						</div>
					</div>
				</div>

				<div class="w-full sm:w-full mb-20 cc:w-1/3 relative pl-5 pr-5">
					<div
						class="w-full bg-white shadow text-center rounded relative pb-2 flex flex-col h-full justify-start priceTable-container">
						<h5 class="m-0 w-full bg-white pt-6 px-6 text-gray2 mb-2 relative z-1 package-title">ENTERPRISE</h5>
						<div class="p-4 cc:p-5 lg:px-6 lg:pt-6 lg:pb-0 features-container">
							<h6 class="m-0 text-gray2 px-8 pb-6">
								For enterprise use cases
								<div class="pt-2 mt-2">In public clouds or data centers</div>
							</h6>
							<h5 class="rfs-text-2xl text-gray2 font-semibold w-full leading-none m-0 pricing">Contact for pricing</h5>
							<ul class="feature-list text-left pl-12">
								<li class="list-item list-none">
									<h6 class="m-0 text-gray2 list-title">All the features of Standard, plus:</h6>
								</li>
								<li class="list-item list-none"><span class="checkmark"></span>Up to 6PB of user data</li>
								<li class="list-item list-none"><span class="checkmark"></span>Enterprise support, 4-hour SLA</li>
							</ul>
						</div>
						<!-- <div class="button-container px-2 lg:pt-4 mt-1 w-full">
							<button @click="popLink" class="drift-open-chat bg-yellow1 text-gray2 font-bold whitespace-no-wrap px-3 py-3 w-full block rounded-sm mr-2">Contact us</button>
						</div> -->
					</div>
				</div>

				<div class="w-full sm:w-full mb-20 cc:w-1/3 relative pl-5 pr-5">
					<div
						class="w-full h-full bg-white shadow text-center rounded relative pb-2 flex flex-col justify-start priceTable-container">
						<h5 class="m-0 w-full bg-white pt-6 px-6 text-gray2 mb-2 relative z-1 package-title">ENTERPRISE +</h5>
						<div class="p-4 cc:p-5 lg:px-6 lg:pt-6 lg:pb-0 features-container">
							<h6 class="m-0 text-gray2 px-8 pb-6">
								For compliance
								<div class="pt-2 mt-2">In public clouds or data centers</div>
							</h6>
							<h5 class="rfs-text-2xl text-gray2 font-semibold w-full leading-none m-0 pricing">Contact for pricing</h5>
							<ul class="feature-list text-left pl-12">
								<li class="list-item list-none">
									<h6 class="m-0 text-gray2 list-title">All the features of Enterprise, plus:</h6>
								</li>
								<li class="list-item list-none"><span class="checkmark"></span>HIPAA support</li>
								<li class="list-item list-none"><span class="checkmark"></span>PCI-DSS support</li>
							</ul>
						</div>
						<!-- <div class="button-container px-2 lg:pt-4 mt-1 w-full">
							<button @click="popLink" class="drift-open-chat bg-yellow1 text-gray2 font-bold whitespace-no-wrap px-3 py-3 w-full block rounded-sm mr-2">Contact us</button>
						</div> -->
					</div>
				</div>

				<div class="flex flex-col md:flex-row w-4/5 mx-auto">
					<div class="button-container px-2 lg:pt-4 mt-1 w-full md:w-2/4 mx-auto">
						<button v-scroll-to="{el: '#more-info',}" class="text-center shadow button bg-yellow1 button-md border-none text-gray2 font-bold whitespace-no-wrap px-3 py-3 w-full block rounded-smmr-2">Contact us</button>
					</div>
				</div>
					
			</div>
		</div>
	</section>
</template>
<script>
export default {
	methods: {
		popLink() {
			window.drift.api.startInteraction({ interactionId: '211295', goToConversation: true });
		}
	}
}
</script>
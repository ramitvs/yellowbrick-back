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

	.eyebrow,
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
						<p class="eyebrow md:mb-0"><strong>Live webinar</strong></p>
						<h1 class="rfs-text-6xl p-0">Real-time analytics for reinsurance </h1>
						<p class="date-time">
							<span><strong>When:</strong> Thursday, February 18<sup>th</sup>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
							<span><strong>Time:</strong> 8 am PT / 11 am ET</span>
							<span class="duration"><strong>Duration: </strong>30 minutes (Includes Q&amp;A)</span>
						</p>
						<p class="rfs-text-lg">Speed is essential in today’s reinsurance market. You must be able to process and analyze huge amounts of data at extreme speed and at scale. But most analytics technologies aren’t up to the task.</p>
						<p class="rfs-text-lg">Join us and learn how Yellowbrick Data Warehouse breaks through analytics limitations with:</p>
						<ul class="rfs-text-lg">
							<li>Linearly scalable performance that beats alternatives by at least 100X</li>
							<li>The best price/performance available</li>
							<li>Real-time insights on up-to-the-second data for understanding risk/loss, exposures, policy limits, and more</li>
						</ul>
						<p class="rfs-text-lg">Don’t wait! Discover how to get real-time insights from your portfolio and begin dramatically increasing profitability today.</p>
					</div>
				</div>
				<div class="w-full md:w-1/3">
					<div class="float-form">
						<h3 class="text-gray-700">Register today</h3>
						<BaseHubspot 
							id="a13e86ad-f8e2-4f34-8b58-171faf0de9af" 
							sfid="7011G000000KV1UQAW"
							webId="8288887618464599054"
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
			title: 'Real-Time Analytics for Reinsurance',
			meta: [{
				key: 'description',
				name: 'description',
				content: 'Learn how Yellowbrick Data Warehouse breaks through analytics limitations.'
			}]
		},
		components: {
			GoCustomers,
			Layout
		}
	};
</script>
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
					<p class="eyebrow md:mb-0"><strong>On-demand video</strong></p>
					<div class="flex flex-col sm:flex-row justify-between pt-4 pb-8">
						<div class="flex items-center w-3/4 sm:w-5/12"><img src="/uploads/partners-protegrity-cropped.png" alt="protegrity logo" class="w-full" /></div>
						<div class="flex items-center"><span class="text-white rfs-text-6xl text-center w-full">+</span></div>
						<div class="flex items-center w-3/4 sm:w-5/12"><img src="/uploads/images/yb-logo.svg" alt="yellowbrick logo" class="w-full" /></div>
					</div>

					<div class="bg-white md:bg-transparent p-6 md:p-0">
						<h1 class="rfs-text-6xl p-0">Real-time analytics with data-centric security</h1>
						<p class="date-time">
							<span class="duration"><strong>Duration: </strong>28 minutes</span>
						</p>
						<p class="rfs-text-lg">Turning data into valuable insights demands an analytics solution that is fast and easily deployed. However, with increased security requirements and regulatory pressures, an analytics solution must now be fast, flexible, AND secure. In this session, we will highlight how you can modernize your data warehouse for the best price/performance with Yellowbrick, while using the Protegrity Data Protection Platform for an extra layer of data-centric security. You'll learn:</p>
						<ul class="rfs-text-lg">
							<li>How the Protegrity Data Protection Platform integrates with Yellowbrick for petabyte-scale data security</li>
							<li>How to create a policy managed in Protegrity and how it is propagated and executed on Yellowbrick</li>
							<li>How Yellowbrick can easily scale and deliver real-time analytics on billions of rows</li>
						</ul>
					</div>
				</div>
				<div class="w-full md:w-1/3">
					<div class="float-form">
						<h3 class="text-gray-700">Watch On-Demand</h3>
						<BaseHubspot 
							id="402714d4-1181-4427-a670-3f6335c8a842" 
							sfid="7011G000000KViTQAW"
							webId="6595702387120368910"
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

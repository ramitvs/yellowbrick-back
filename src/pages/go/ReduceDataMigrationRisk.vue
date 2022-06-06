<style scoped>
    .hero {
    background-image: url(/uploads/images/Yellowbrick_WebinarMobileBackground.jpg);
		background-size: cover;
		background-position: center center;

		&:before {
			height: 2rem;
		}
	}

  @media (min-width: 768px) {
    .hero {
        background-image: url(/uploads/images/Yellowbrick_WebinarDarkBackground.jpg);
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
					<p class="eyebrow md:mb-0"><strong>On-demand</strong></p>
					<div class="flex flex-col sm:flex-row justify-between pt-4 pb-8">
						<div class="flex items-center w-3/4 sm:w-5/12"><img src="/uploads/iCEDQ Logo W&B.jpg" alt="protegrity logo" class="w-full" /></div>
						<div class="flex items-center"><span class="text-white rfs-text-6xl text-center w-full">+</span></div>
						<div class="flex items-center w-3/4 sm:w-5/12"><img src="/uploads/images/yb-logo.svg" alt="yellowbrick logo" class="w-full" /></div>
					</div>

					<div class="bg-white md:bg-transparent p-6 md:p-0">
						<h1 class="rfs-text-6xl p-0">Fast-track SQL server migration with automated testing and validation</h1>
						<p class="date-time">
              <span class="duration"><strong>Duration: </strong>20 minutes</span>
            </p>
						<p class="rfs-text-lg">Modernizing a data warehouse typically involves migrating data from an existing platform to a new platform. However, manually testing migration is nearly impossible and error prone. To help organizations modernize quickly, iCEDQ and Yellowbrick have partnered to mitigate data migration risk and reduce the project duration by using the iCEDQ DataOps platform to automate and certify data migration testing. In this video:</p>
						<ul class="rfs-text-lg">
							<li>We will demo how the iCEDQ platform validates data migration from SQL Server to Yellowbrick to expedite data testing.</li>
							<li>We will highlight key steps such as schema migration and testing as well as cutover certification.</li>
						</ul>
					</div>
				</div>
				<div class="w-full md:w-1/3">
					<div class="float-form">
						<h3 class="text-gray-700">Watch On-Demand</h3>
						<BaseHubspot 
							id="bdaae7bc-0321-4250-9b1a-a4ff60708e25" 
							sfid="7011G000000KX9pQAG"
							webId="237978710899131404"
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
			title: 'Reduce data migration risk and modernize your data warehouse quickly',
			meta: [{
				key: 'description',
				name: 'description',
				content: 'To help organizations modernize quickly, iCEDQ and Yellowbrick have partnered to mitigate data migration risk and reduce the project duration by using the iCEDQ DataOps platform to automate and certify data migration testing.'
			}]
		},
		components: {
			GoCustomers,
			Layout
		}
	};
</script>

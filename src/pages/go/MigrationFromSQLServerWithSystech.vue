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
						<div class="flex items-center pr-20 w-3/4 sm:w-5/12"><img src="/uploads/partners-systech.svg" alt="systech logo" class="w-full" /></div>
						<div class="flex items-center pr-20 sm:w-2/12"><span class="text-white rfs-text-6xl text-center w-full">+</span></div>
						<div class="flex items-center w-3/4 sm:w-5/12"><img src="/uploads/images/yb-logo.svg" alt="yellowbrick logo" class="w-full" /></div>
					</div>

					<div class="bg-white md:bg-transparent p-6 md:p-0">
						<h1 class="rfs-text-5xl p-0">Fast and effortless migration from SQL Server to Yellowbrick</h1>
						<p class="date-time">
              <span class="duration"><strong>Duration: </strong>20 minutes</span>
            </p>
						<p class="rfs-text-lg">Upgrading from SQL Server to Yellowbrick unlocks a competitive advantage with 100X performance at a fraction of the cost. However, migrating the whole data and analytics environment from SQL Server can present several challenges. With Systech’s proven migration methodology along with its purpose-built tools and utilities, organizations can simplify and accelerate migration in a cost-effective way.</p>
						<p class="rfs-text-lg">In this session, you will learn:</p>
						<ul class="rfs-text-lg">
							<li>Why Yellowbrick is the ultimate SQL Server upgrade, delivering 100X performance at a fraction of the cost</li>
							<li>What is the process and sequence of steps in migrating from SQL Server</li>
							<li>How Systech’s utility helps automate migration, with a demo of migrating the data pipelines built in Informatica from SQL Server to Yellowbrick</li>
						</ul>
					</div>
				</div>
				<div class="w-full md:w-1/3">
					<div class="float-form">
						<h3 class="text-gray-700">Watch On-Demand</h3>
						<BaseHubspot 
							id="d9dd10a7-cf79-41fd-bc1c-ff0747024309" 
							sfid="7011G000000KXosQAG"
							webId="2586391511898176524"
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
			title: 'Fast and effortless migration from SQL Server to Yellowbrick',
			meta: [{
				key: 'description',
				name: 'description',
				content: 'Upgrading from SQL Server to Yellowbrick unlocks a competitive advantage with 100X performance at a fraction of the cost. However, migrating the whole data and analytics environment from SQL Server can present several challenges. With Systech’s proven migration methodology along with its purpose-built tools and utilities, organizations can simplify and accelerate migration in a cost-effective way.'
			}]
		},
		components: {
			GoCustomers,
			Layout
		}
	};
</script>

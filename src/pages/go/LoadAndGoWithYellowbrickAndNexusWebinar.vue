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

					<h5 class="text-yellow1 mb-2">On-demand webinar presented by:</h5>
					<div class="flex flex-col sm:flex-row justify-between pt-4 pb-8">
            <div class="flex items-center w-3/4 sm:w-5/12"><img src="/uploads/sponsors-coffing.svg" alt="striim logo" class="w-full" /></div>
            <div class="flex items-center w-3/4 md:w-1/6"><span class="text-white rfs-text-6xl text-center w-full">+</span></div>
            <div class="flex items-center w-3/4 sm:w-5/12"><img src="/uploads/images/yb-logo.svg" alt="yellowbrick logo" class="w-full" /></div>
          </div>

					<div class="bg-white md:bg-transparent p-6 md:p-0">
						<h1 class="rfs-text-6xl p-0">Load & Go with Yellowbrick and Nexus</h1>
						<p class="rfs-text-lg">Yellowbrick Data Warehouse offers the best price/performance in the industry, while Coffing Data Warehousing's Nexus products make it quick and easy to move millions of rows out of Teradata, Oracle, SQL Server, DB2, Snowflake, or Redshift, and join and query multiple tables across different systems. Our live demo will show you how they work in combination to:
							<ul class="rfs-text-lg">
							<li>Set up the loading of thousands of tables from multiple databases into Yellowbrick</li>
							<li>Move flat files from HDFS, MapR, or S3 into Yellowbrick</li>
							<li>Join tables from across multiple systems</li>
							<li>Run thousands of parallel queries in Yellowbrick without contention</li>
						</ul>
						</p>
					</div>
				</div>
				<div class="w-full md:w-1/3">
					<div class="float-form">
						<h3 class="text-gray-700">Watch On-Demand</h3>
						<BaseHubspot 
							id="ac725985-8c4d-4e58-b8de-2d710866bfd1" 
							sfid="7011G000000KSt9QAG"
							webId="6563588948640276494"
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
			title: 'Load & Go with Yellowbrick and Nexus',
			meta: [{
				key: 'description',
				name: 'description',
				content: 'Yellowbrick Data Warehouse offers the best price/performance in the industry.'
			}]
		},
		components: {
			GoCustomers,
			Layout
		}
	};
</script>
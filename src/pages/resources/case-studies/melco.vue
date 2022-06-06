<style scoped>
	.hero {
		background-image: url(/uploads/images/cloud-recovery-bg.svg);
		background-size: cover;
		background-position: center;
	}

	.freedom-bg {
		background-image: url(/uploads/images/freedom-bg.svg);
		background-position: bottom right;
		background-repeat: no-repeat;
		background-size: 25%;
	}

	.performance-bg {
		background-image: url(/uploads/images/performance-bg.svg);
		background-position: bottom right;
		background-repeat: no-repeat;
		background-size: 60%;
	}

	.multi-column {
		column-count: 2;
		column-gap: 2.5rem;
	}

	@media (max-width: 768px) {
		.multi-column {
			column-count: 1;
			column-gap: 0;
		}
	}

	.number {
		@apply absolute text-yellow1 rfs-text-7xl font-bold leading-none;
		top: -0.75rem;
		left: -3.5rem;
	}
</style>

<template>
	<Layout>
		<section class="hero flex bg-gray-700 py-12 md:py-24 text-white px-6 xl:px-0">
			<div class="flex flex-col max-w-1200 w-full mx-auto z-10">
				<span class="rfs-text-xl text-yellow1 mb-0">Case study:</span>
				<img src="/uploads/images/customers/white/melco.png" alt="Melco Resorts &amp; Entertainment" />
				<h2 class="m-0 p-0 leading-none rfs-text-2xl w-full sm:w-1/2 md:w-5/12">Yellowbrick Data Warehouse helps analyze more data, more quickly, for more robust and targeted campaigns</h2>
			</div>
		</section>

		<section class="flex py-12 bg-white px-6 xl:px-0">
			<div class="flex flex-col sm:flex-row justify-evenly max-w-1200 mx-auto">
				<div class="w-full md:w-7/12 p-0 md:pr-10 relative">
					<Details 
            industry="Travel & Hospitality"
            business-use-case="Marketing Analytics/Customer 360"
            tech-use-case="Data Lake Augmentation"
          />

					<h4 class="text-gray-500">Overview</h4>
					<div class="text-gray-500 mb-8 md:mb-0">
						<p>Melco, one of the world’s largest casinos and integrated resort operators ($5B+ annual revenue), had adopted a “Customer 360" initiative in which data from multiple customer touchpoints would be aggregated in a data warehouse to yield data-driven insights by analysts using Tableau and SAS. These insights would enable the company to tailor more targeted marketing initiatives that build loyalty and trust, and to increase company revenue and profitability.</p>
					</div>
					<div class="w-full">
						<h4 class="mb-6 mb-8">SQL Server on Hadoop inadequate</h4>
						<p>The immediate choke point in the project was Melco’s legacy SQL Server data warehouse on top of a Hadoop-based data lake. Although Hadoop was valued as a low-cost, highly scalable storage tier, SQL Server was too slow to sustain concurrent users, and the more data ingested, the slower it got.</p>
						<ul class="rfs-text-base">
							<li>Performance became unacceptably slow when concurrent users tried to access the same dataset.</li>
							<li>Data loads were not only slow but often subject to manual input, and massive data growth affected performance and scalability.</li>
							<li>Because so little data could be analyzed at once, marketing campaigns could build on only a couple months of customer history, blocking full monetization of seasonality.</li>
							<li>The sophistication of analytics was inadequate for supporting the Customer 360 project’s goals.</li>
						</ul>

						<h4 class="text-gray-500">Modernizing the platform with Yellowbrick</h4>
						<p>After reviewing several providers, Melco chose Yellowbrick Data Warehouse for its ability to transform the digital environment into a high-performance analytics powerhouse, while complementing Hadoop and existing tools and ensuring a smooth transition for end users.</p>
						<img src="/uploads/images/Hospitality_customer_chart.png" alt="Performance testing results: Yellowbrick versus competitor (in seconds)" class="w-full my-8" />
						<h4 class="text-gray-500">Results Include:</h4>
						<ul class="rfs-text-lg">
							<li><strong>Loading complex dashboards and analytic data structures now take a few seconds instead of several minutes,</strong> with Yellowbrick providing headroom to add more concurrent users and easily scale to support user growth</li>
							<li><strong>Faster access to new data</strong>, thanks to rapid ingestion and the ability to query new data immediately, so that analysts can work with the latest information</li>
							<li><strong>4X historical data (nearly 12 months) is available for analysis</strong>, allowing the company to build more targeted campaigns and monetize seasonality much more effectively</li>
							<li><strong>Up to 300X faster queries</strong>, dramatically reducing the time to insight and accelerating the speed of decision making</li>
						</ul>
					</div>
				</div>
				<div class="w-full md:w-5/12 relative">
					<h3 class="text-gray-500 rfs-text-4xl font-semibold mb-8 sm:mt-0 accent-heading">Key insights</h3>
					<div class="relative bg-transparent">
						<FeaturedStat
							alt-attribute="300X faster queries at a fraction of the cost"
							icon-name="tacometer.svg"
							featured-title="300X faster"
							featured-phrase="Improved query speed by 300X at a fraction of the cost"
							first="true"
						/>
					</div>
					<div class="relative bg-transparent">
						<FeaturedStat
							alt-attribute="4X more data available for analysis"
							icon-name="data-analytics.svg"
							featured-title="4X more data"
							featured-phrase="Quadrupled the amount of data available for analysis"
						/>
					</div>
					<div class="relative bg-transparent mb-12">
						<FeaturedStat
							alt-attribute="12 months of customer history enables more targeted campaigns"
							icon-name="target.svg"
							featured-title="12 months"
							featured-phrase="Targeted campaigns were enabled with 12 months of historical customer data"
						/>
					</div>
					<div class="bg-white shadow-lg mt-8 p-10 relative text-gray-500 performance-bg">
            <span class="accent z-10"></span>
            <span class="rfs-text-3xl font-light">"Yellowbrick allows us to tailor meaningful solutions for our clients and analyze preferences and behaviors across millions of data points in real time."</span>
            <p class="mt-8">- Jonathan Ozark, EVP Chief Strategy and Analytics Officer, Melco Resorts & Entertainment</p>
          </div>
				</div>
			</div>
		</section>
		<MoreInfo />

	</Layout>
</template>

<script>
	import MoreInfo from '~/components/MoreInfo.vue'
	import FeaturedStat from '~/components/FeaturedStat.vue'
	import Details from '~/components/CaseStudyDetails.vue'

	export default {
		metaInfo: {
			title: 'Case Studies: Hospitality and Casino',
			meta: [{
				key: 'description',
				name: 'description',
				content: 'Yellowbrick helped one of the world’s largest casinos and integrated resort operators adopt a Customer 360 initiative.'
			}]
		},
		components: {
			Details,
			FeaturedStat,
			MoreInfo
		}
	}
</script>
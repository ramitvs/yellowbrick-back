<style scoped>
	.hero {
		background-image: url(/uploads/images/road-w-arrow-bg.jpg);
		background-size: cover;
		background-position: center;
		position: relative;

		&:before {
			content: "";
			background: linear-gradient(90deg,
					rgba(0, 0, 0, 0.95) 20%,
					rgba(0, 0, 0, 0) 100%);
			position: absolute;
			height: 100%;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		&:after {
			content: "";
			position: absolute;
			height: 100%;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-image: url("/uploads/images/brick-overlay.png");
			background-repeat: no-repeat;
			background-position-x: right;
			background-position-y: bottom;
		}
	}

	.chart-bg-gray-1 {
		background-color: #c6c7ca;
	}

	.chart-bg-gray-2 {
		background-color: #9e9fa1;
	}

	.chart-bg-gray-3 {
		background-color: #57575c;
	}

	.chart-bg-gray-4 {
		background-color: #211f1f;
	}

	.chart-text-title {
		font-weight: 600;
		font-size: smaller;
		line-height: 1.1em;
	}

	.legend {
		padding-top: 50px;
	}


	.bg-grey-chart {
		background-color: #4D5357;
	}

	.bg-aqua-chart {
		background-color: #57C0CB;
	}

	.arrow .yb-icon {
		transition: transform 213ms ease-in-out;
	}

	.arrow:hover .yb-icon {
		transform: translate(0.6rem, 2px);
	}

	.customer-results {
		position: relative;
		z-index: 10;
		background-size: 2%;
		background-position-x: center;
		background-position-y: top;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M223.71 255.58a32 32 0 1032-32 32 32 0 00-32 32z' fill='%23fff' opacity='.15'/%3E%3C/svg%3E%0A");
	}

	.html-chart {
		position: relative;

		& .y-axis {
			@apply absolute text-right w-8 text-gray-400 font-medium;

			&:nth-of-type(1) {
				top: calc(0% - 12px);
			}

			&:nth-of-type(2) {
				top: calc(20% - 12px);
			}

			&:nth-of-type(3) {
				top: calc(40% - 12px);
			}

			&:nth-of-type(4) {
				top: calc(60% - 12px);
			}

			&:nth-of-type(5) {
				top: calc(80% - 12px);
			}

			&:nth-of-type(6) {
				top: calc(100% - 12px);
			}
		}

		& .bar-5,
		& .bar-4,
		& .bar-3,
		& .bar-2,
		& .bar-1,
		& .bar-0 {
			@apply absolute bg-gray-200;
			left: 2.5rem;
			right: 0;
			height: 1px;
			z-index: 1;
		}

		& .bar-5 {
			top: 0%;
		}

		& .bar-4 {
			top: 20%;
		}

		& .bar-3 {
			top: 40%;
		}

		& .bar-2 {
			top: 60%;
		}

		& .bar-1 {
			top: 80%;
		}

		& .bar-0 {
			top: 100%;
		}

		& .vertical-chart {
			@apply p-0 m-0 ml-10 mt-6 mb-8 list-none relative h-64 flex flex-row items-end;

			& li {
				@apply mx-auto flex z-10 relative p-0;

				&.yellow {
					@apply bg-yellow1;
				}

				&.gray {
					@apply bg-gray-300;
				}

				& span {
					@apply absolute text-center w-full text-gray-500;
					bottom: -60px;
				}

				& .top-number {
					@apply absolute left-0 text-gray-500 font-medium;
					top: calc(0% - 1.5rem);
				}
			}
		}
	}

	.partner-ecosystem {
		background-image: url("/uploads/images/bricks-overlay.png");
		background-repeat: no-repeat;
		background-position-x: right;
		background-position-y: bottom;
		background-size: contain;
	}
</style>

<template>
	<Layout>

		<base-section :classNames="'hero flex pt-24 pb-12 md:py-12 md:pt-40 md:pb-20 px-6 xl:px-0 text-white'">
			<div class="w-full md:w-1/2 z-10">
				<h1 class="rfs-text-6xl font-normal">Performance that nobody can match</h1>
				<p class="rfs-text-2xl">Yellowbrick is designed from the ground up for blazing-fast performance at any scale (single TBs to multiple PBs), in any or cloud or data center.</p>
			</div>
		</base-section>

		<base-section class="text-center">
			<p class="rfs-text-xl max-w-1200 mx-auto">Snowflake and other cloud-native data warehouses demand more and more expensive compute resources as your needs grow, and their consumption-based pricing provides no incentive to improve performance.
				And legacy platforms are based on decades-old architectures that can’t keep up with modern workloads.</p>
			<p class="rfs-text-xl max-w-1000 mx-auto mb-0">Instead, Yellowbrick offers blazing-fast performance at a fraction of their cost via predictably priced subscriptions, delivering the best economics in the industry. </p>
		</base-section>

		<base-section class="bg-gray-100">
			<h3 class="rfs-text-4xl mb-12">Inside Yellowbrick performance</h3>
			<div class="flex flex-col md:flex-row">
				<div class="w-full md:w-2/6">
					<p class="rfs-text-lg md:mr-8">
						We’ve re-engineered the core software kernel of MPP analytic databases to make Yellowbrick Data Warehouse do more computation with less CPU, store more data far more efficiently, and move data across networks faster than anything else
						available. The result is adaptive database architecture that blows the doors off rivals for batch, real-time, interactive, and mixed workloads in any environment across distributed clouds, whether based on Kubernetes, virtual machines, or
						bare metal.
					</p>
				</div>
				<div class="w-full md:w-4/6 md:ml-10">
					<h4>Real World Results</h4>
					<p>Yellowbrick offers least 5x better performance than Snowflake (even with multiple virtual data warehouses spun up), for 10x more concurrent users, at 1/5th the cost per query.</p>
					<div class="html-chart my-10">
						<div class="bar-5"></div>
						<div class="bar-4"></div>
						<div class="bar-3"></div>
						<div class="bar-2"></div>
						<div class="bar-1"></div>
						<div class="bar-0"></div>
						<span class="y-axis">25</span>
						<span class="y-axis">20</span>
						<span class="y-axis">15</span>
						<span class="y-axis">10</span>
						<span class="y-axis">5</span>
						<span class="y-axis">0</span>
						<ul class="vertical-chart flex flex-row items-end">
							<li class="flex flex-row justify-around items-end w-1/5 h-full">
								<div class="relative bg-yellow1 w-1/5" style="height:2%"></div>
								<div class="relative bg-yellow1 w-1/5" style="height:6%"></div>
								<div class="relative bg-yellow1 w-1/5" style="height:8%"></div>
								<div class="relative bg-yellow1 w-1/5" style="height:10%"></div>
								<span class="chart-text-title">Yellowbrick<br />16 nodes</span>
							</li>
							<li class="flex flex-row justify-around items-end w-1/5 h-full">
								<div class="relative chart-bg-gray-1 w-1/5" style="height:5%"></div>
								<div class="relative chart-bg-gray-2 w-1/5" style="height:25%"></div>
								<div class="relative chart-bg-gray-3 w-1/5" style="height:31%"></div>
								<div class="relative chart-bg-gray-4 w-1/5" style="height:58%"></div>
								<span class="chart-text-title">Snowflake<br />32 nodes<br />(Price Equivalent)</span>
							</li>
							<li class="flex flex-row justify-around items-end w-1/5 h-full">
								<div class="relative chart-bg-gray-1 w-1/5" style="height:5%"></div>
								<div class="relative chart-bg-gray-2 w-1/5" style="height:19%"></div>
								<div class="relative chart-bg-gray-3 w-1/5" style="height:25%"></div>
								<div class="relative chart-bg-gray-4 w-1/5" style="height:41%"></div>
								<span class="chart-text-title">Snowflake<br />64 nodes</span>
							</li>
							<li class="flex flex-row justify-around items-end w-1/5 h-full">
								<div class="relative chart-bg-gray-1 w-1/5" style="height:5%"></div>
								<div class="relative chart-bg-gray-2 w-1/5" style="height:19%"></div>
								<div class="relative chart-bg-gray-3 w-1/5" style="height:25%"></div>
								<div class="relative chart-bg-gray-4 w-1/5" style="height:34%"></div>
								<span class="chart-text-title">Snowflake<br />128 nodes</span>
							</li>
						</ul>
					</div>
					<div class="flex justify-center legend">
						<div class="flex flex-row items-center px-3">
							<div class="w-4 h-4 chart-bg-gray-1">&nbsp;</div>
							<div class="pl-2 rfs-text-sm">50 pctile</div>
						</div>
						<div class="flex flex-row items-center px-3">
							<div class="w-4 h-4 chart-bg-gray-2">&nbsp;</div>
							<div class="pl-2 rfs-text-sm">90 pctile</div>
						</div>
						<div class="flex flex-row items-center px-3">
							<div class="w-4 h-4 chart-bg-gray-3">&nbsp;</div>
							<div class="pl-2 rfs-text-sm">95 pctile</div>
						</div>
						<div class="flex flex-row items-center px-3">
							<div class="w-4 h-4 chart-bg-gray-4">&nbsp;</div>
							<div class="pl-2 rfs-text-sm">99 pctile</div>
						</div>
					</div>
				</div>
			</div>
		</base-section>

		<base-section class="customer-results bg-gray-700">
			<h3 class="text-white rfs-text-4xl mb-8">Customer results tell the story</h3>
			<div class="grid grid-cols-2 md:grid-cols-5 gap-6">
				<div class="flex flex-col justify-center p-6 bg-white">
					<img src="/uploads/customers/bmw-formatted.png" alt="BMW logo" />
					<h4 class="text-teal rfs-text-2xl text-center">152x faster time to insight</h4>
				</div>
				<div class="flex flex-col justify-center p-6 bg-white">
					<img src="/uploads/customers/catalina-formatted.svg" alt="Catalina logo" />
					<h4 class="text-teal rfs-text-2xl text-center">182x faster time to insight</h4>
				</div>
				<div class="flex flex-col justify-center p-6 bg-white">
					<img src="/uploads/customers/teoco-formatted.svg" alt="Teoco logo" />
					<h4 class="text-teal rfs-text-2xl text-center">100x faster time to insight</h4>
				</div>
				<div class="flex flex-col justify-center p-6 bg-white">
					<img src="/uploads/customers/melco-formatted.png" alt="Melco logo" />
					<h4 class="text-teal rfs-text-2xl text-center">300x faster time to insight</h4>
				</div>
				<div class="flex flex-col justify-center p-6 bg-white">
					<img src="/uploads/customers/yb-customerFinancial-formatted.png" alt="Top 10 Financial Services" />
					<h4 class="text-teal rfs-text-2xl text-center">100x faster time to insight</h4>
				</div>
			</div>
		</base-section>

		<base-section class="bg-gray-100">
			<h3 class="rfs-text-4xl">Resources</h3>
			<div class="flex flex-col sm:flex-row flex-wrap">
				<div class="flex flex-col md:flex-row w-full md:w-1/2 p-4">
					<img src="/uploads/thumb-whitepaper-yellowbrick-vs-snowflake.png" alt="netezza replacement: modernize and improve performance" class="w-1/3 shadow-md self-start mb-12 md:mb-0" />
					<div class="flex flex-col pl-0 md:px-8">
						<h5 class="mb-6">Comparing Yellowbrick Data Warehouse to Snowflake</h5>
						<a href="https://www.yellowbrick.com/go/yellowbrick-vs-snowflake/" class="arrow flex items-center text-teal rfs-text-lg">
							Download<icon-arrow-right class="ml-2"></icon-arrow-right>
						</a>
					</div>
				</div>
				<div class="flex flex-col md:flex-row w-full md:w-1/2 p-4">
					<img src="/uploads/economic-benefits-of-yellowbrick.jpg" alt="netezza replacement: modernize and improve performance" class="w-1/3 shadow-md self-start mb-12 md:mb-0" />
					<div class="flex flex-col pl-0 md:px-8">
						<h5 class="mb-6">ESG Report: The economic benefits of Yellowbrick</h5>
						<a href="https://www.yellowbrick.com/uploads/esg-economic-validation-report-oct-2020.pdf" class="arrow flex items-center text-teal rfs-text-lg">
							Read More<icon-arrow-right class="ml-2"></icon-arrow-right>
						</a>
					</div>
				</div>
				<div class="flex flex-col md:flex-row w-full md:w-1/2 p-4">
					<img src="/uploads/wp-data-warehouse-modernization-analytics-thumb.jpg" alt="breaking through netezza whitepaper" class="w-1/3 shadow-md self-start mb-12 md:mb-0" />
					<div class="flex flex-col pl-0 md:pl-8">
						<h5 class="mb-6">Data Warehouse Modernization for Hybrid Cloud Analytics</h5>
						<a href="/go/modernizing-your-data-warehouse-for-hybrid-cloud-analytics/" class="arrow flex items-center text-teal rfs-text-lg">
							Download<icon-arrow-right class="ml-2"></icon-arrow-right>
						</a>
					</div>
				</div>
			</div>
		</base-section>

		<base-section>
			<div class="w-full">
				<div class="flex flex-col md:flex-row">
					<div class="flex w-full items-center md:w-5/12">
						<img src="/uploads/customers/yb-customerFinancial-formatted.png" alt="Financial Services Top 10 logo" class="w-full sm:w-3/4 mx-auto" />
					</div>
					<div class="w-full md:w-7/12">
						<h4 class="rfs-text-lg uppercase text-teal mb-2">Customer Story</h4>
						<p>
							This multinational financial services corporation captures millions of transactions daily, and Yellowbrick helps it analyze PBs of that data across partner and co-branding programs, merchant services, reward-points programs, and more.
							Thousands of analysts require immediate access to this data via ad-hoc, interactive queries as well as pre-built reports.
						</p>
						<a href="/resources/case-studies/top-financial-services-company/" class="arrow flex md:inline-flex items-center rfs-text-lg text-teal mb-6 lg:mb-0 mr-12">Read Case Study<icon-arrow-right class="ml-2"></icon-arrow-right>
						</a>
						<a href="/customers/" class="arrow flex md:inline-flex items-center rfs-text-lg text-teal">See Other Customer Stories<icon-arrow-right class="ml-2"></icon-arrow-right>
						</a>
					</div>
				</div>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-40 mt-12">
				<div class="text-center">
					<i class="block mx-auto h-20 w-20 mb-2">
						<svg class="w-auto h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 506.58 420.51">
							<path
								d="M439.17 420.52l-164.54-96.89a73 73 0 01-94.42-68.21c-1.2-41.16 30.08-74.36 71.29-75.56s74.36 30.12 75.56 71.29a69.91 69.91 0 01-.21 7.63L453.51 403.2zm-167.36-120l9.87.81 108 63.59-83.27-94.94-2.7-9.2a50.42 50.42 0 00.59-9c-.83-28.41-23.86-50.19-52.13-49.19a50.69 50.69 0 1019.65 97.92z"
								fill="#60c0c9" />
							<path
								d="M253.29 0C113.62 0 0 113.63 0 253.26a252.94 252.94 0 0033.58 126l4.54 7.9 98.37-30.57-6.76-21.75-80.78 25.14a230.18 230.18 0 01-25.84-95.43h38.41v-22.77H23.06a228.84 228.84 0 0125.33-93.9l33.26 19.2 11.38-19.72-33.2-19.17a232.25 232.25 0 0168.4-68.39l19.19 33.23 19.72-11.38-19.21-33.28a228.64 228.64 0 0193.92-25.3V61.6h22.77V23.06a228.85 228.85 0 0193.94 25.26l-19.27 33.32 19.72 11.39 19.28-33.29a232.34 232.34 0 0168.64 68.67l-33.34 19.23 11.39 19.72 33.31-19.24a228.73 228.73 0 0125.21 93.66h-38.55v22.77h38.49a231.06 231.06 0 01-30.07 103.24l19.77 11.3a253.86 253.86 0 0033.44-125.83C506.58 113.63 392.96 0 253.29 0z"
								fill="#4b5459" />
						</svg>
					</i>
					<h4 class="rfs-text-xl text-teal capitalize">100x faster</h4>
					<h5 class="rfs-text-base">Time-to-Insight</h5>
					<p>Not only are some queries 100X faster than before with Netezza, but analysts can now run queries that were previously impossible.</p>
				</div>
				<div class="text-center">
					<i class="block mx-auto h-20 w-20 mb-2">
						<svg class="w-auto h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 402.4 502.35">
							<path fill="#60c0c9"
								d="M395.9 151.33l-43.78-44.78-13.36 13.06 15.44 15.79-23.99 23.98 13.21 13.21 23.84-23.84 15.29 15.64 13.35-13.06zM37.19 148.75l23.84 23.84 13.21-13.21-23.99-23.98 15.43-15.79-13.35-13.06-43.78 44.78 13.35 13.06 15.29-15.64z" />
							<path fill="#60c0c9"
								d="M265 257.34a48.83 48.83 0 00-44.89 17.34l-164.89 13-.72 18.53 162 25.52c.65 1.05 1.34 2.06 2.07 3A48.73 48.73 0 10265 257.34zM287.53 310a30 30 0 01-54 13.62 28.71 28.71 0 01-2.77-4.57l-6.92-5.05-88.23-13.9 90.13-7.1 7-4.09A30.15 30.15 0 01287.53 310z"
								transform="translate(-54.45 -4.47)" />
							<path
								d="M293.34 109.6V73h21.49V4.47H198.18V73h19.91v37A200.18 200.18 0 0062.62 255.9l18.07 4.71A181.63 181.63 0 01256.5 124.83c100.17 0 181.67 81.49 181.67 181.65s-81.5 181.66-181.67 181.66c-86.86 0-161.87-61.8-178.34-146.95l-18.34 3.55C78 438.65 160.71 506.82 256.5 506.82c110.5 0 200.34-89.82 200.34-200.34 0-97.87-70.58-179.48-163.5-196.88zm-76.49-86.45h79.31v31.13h-79.31zm19.91 84.06V73h37.9v34c-6-.54-12-.86-18.16-.86-6.65.01-13.22.43-19.74 1.07z"
								transform="translate(-54.45 -4.47)" fill="#4b5459" />
						</svg>
					</i>
					<h4 class="rfs-text-xl text-teal capitalize">Data in minutes</h4>
					<h5 class="rfs-text-base">Data Availability in Minutes, Not Hours</h5>
					<p>Some data loads that took 7-10 hours now complete in under 20 minutes, using existing ETL tools.</p>
				</div>
				<div class="text-center">
					<i class="block mx-auto h-20 w-20 mb-2">
						<svg class="w-auto h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 499.94 483.64">
							<path fill="#60c0c9" d="M237.46 345.95l-107-107.45 15.41-15.35 91.13 91.5L484.08 51.33l15.86 14.88-262.48 279.74z" />
							<path
								d="M242.12 483.64a242.68 242.68 0 01-46.48-4.5C64.8 453.73-20.97 326.55 4.47 195.73A242 242 0 01287.92 4.5a237.92 237.92 0 01100.2 45.15l-13.25 17.26a219 219 0 00-256-7.4 218.55 218.55 0 00-93 140.33c-23.14 119.09 54.91 234.8 174 258a220.27 220.27 0 00258-174 216.55 216.55 0 00.82-77l21.47-3.56a239.67 239.67 0 01-103.13 239 240.2 240.2 0 01-134.91 41.36z"
								fill="#4b5459" />
						</svg>
					</i>
					<h4 class="rfs-text-xl text-teal capitalize">Huge savings</h4>
					<h5 class="rfs-text-base">Slashed Data Center Expenses</h5>
					<p>The company replaced entire racks of Netezza with a Yellowbrick instance, dramatically reducing rack-space and power & cooling requirements.</p>
				</div>
			</div>
		</base-section>

		<base-section class="partner-ecosystem bg-black">
			<h3 class="rfs-text-4xl text-white">Partner ecosystem</h3>
			<p class="rfs-text-xl text-white">Yellowbrick Data partners offer best-of-breed solutions for BI/data visualization, security, data motion, and consulting and integration, complementing Yellowbrick Data Warehouse’s industry-leading speed and
				flexibility. The ecosystem is growing fast, so check back here often for updates.</p>
			<div class="grid grid-cols-2 md:grid-cols-5 gap-x-20 gap-y-0 p-6 md:p-0">
				<img alt="coffing logo" src="/uploads/partners-coffing.svg" />
				<img alt="attunity logo" src="/uploads/partners-attunity.svg" />
				<img alt="dbeaver logo" src="/uploads/partners-dbeaver.svg" />
				<img alt="denodo logo" src="/uploads/partners-denodo.svg" />
				<img alt="emtec logo" src="/uploads/partners-emtec.svg" />
				<img alt="icedq logo" src="/uploads/partners-icedq.svg" />
				<img alt="nexla logo" src="/uploads/partners-nexla.svg" />
				<img alt="nextpathway logo" src="/uploads/partners-nextpathway.svg" />
				<img alt="sas logo" src="/uploads/partners-sas.svg" />
				<img alt="striim logo" src="/uploads/partners-striim.svg" />
			</div>
			<a class="arrow rfs-text-xl text-yellow1 flex items-center" href="/company/partners/">View our partners<icon-arrow-right class="ml-2"></icon-arrow-right></a>
		</base-section>

	</Layout>
</template>

<script>
	import BaseSection from "~/components/BaseSection.vue";
	import PartnersMain from "~/components/PartnersMain.vue";
	import TransitionExpand from "~/components/TransitionExpand.vue";
	import IconArrowRight from '../components/icons/IconArrowRight.vue';

	export default {
		metaInfo: {
			title: "Competitors Can't Match the Price and Performance of Yellowbrick",
			meta: [{
					key: "description",
					name: "description",
					content: "Yellowbrick removes bottlenecks between storage and CPU that put ceilings on query latency, concurrency, and amount of instantly query-able data—leaving legacy platforms and the cloud-only players in the dust, and at a fraction of their cost.",
				},
				{
					key: "og:description",
					name: "og:description",
					content: "Yellowbrick removes bottlenecks between storage and CPU that put ceilings on query latency, concurrency, and amount of instantly query-able data—leaving legacy platforms and the cloud-only players in the dust, and at a fraction of their cost.",
				},
				{
					key: "twitter:description",
					name: "twitter:description",
					content: "Yellowbrick removes bottlenecks between storage and CPU that put ceilings on query latency, concurrency, and amount of instantly query-able data—leaving legacy platforms and the cloud-only players in the dust, and at a fraction of their cost.",
				},
				{
					key: "og:title",
					name: "og:title",
					content: "Competitors Can't Match the Price and Performance of Yellowbrick",
				},
				{
					key: "twitter:title",
					name: "twitter:title",
					content: "Competitors Can't Match the Price and Performance of Yellowbrick",
				},
			],
		},
		components: {
			BaseSection,
			PartnersMain,
			TransitionExpand,
			IconArrowRight
		},
		data() {
			return {
				expanded: false,
			};
		},
	};
</script>
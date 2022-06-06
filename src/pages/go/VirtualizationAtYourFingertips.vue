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
						<p class="eyebrow md:mb-0"><strong>On-demand webinar</strong></p>
						
						<div class="flex flex-col sm:flex-row pt-4 -ml-8 -my-8">
							<div class="flex items-center w-3/4 justify-center sm:w-4/12"><img src="/uploads/partners-sotero.svg" alt="sotero parter logo" /></div>
							<div class="flex items-center w-3/4 justify-center md:w-1/12"><span class="text-white rfs-text-6xl text-center w-full">+</span></div>
							<div class="flex items-center w-3/4 justify-center sm:w-4/12"><img src="/uploads/partners-coffing.svg" alt="coffing parter logo" /></div>
						</div>

						<!-- <div class="flex flex-row flex-wrap w-full mb-12 md:mb-0">
							<div class="bg-gray-700 w-1/2 px-8 md:px-6 xl:pr-24">
								<img src="/uploads/partners-sotero.svg" alt="sotero parter logo" />
							</div>
							<div class="bg-gray-700 w-1/2 px-8 md:px-6 xl:pr-24">
								<img src="/uploads/partners-coffing.svg" alt="coffing parter logo" />
							</div>
						</div> -->

						<h1 class="rfs-text-6xl p-0">Data virtualization at your fingertips</h1>
						<p class="date-time">
							<span class="duration"><strong>Duration: </strong>20-minute demo</span>
						</p>
						<p class="rfs-text-lg">What do you get when you bundle a Yellowbrick Data Warehouse with Soterosoft and Nexus? Virtualization! It’s the best combination of a modern data warehouse for hybrid cloud that allows users to securely point-and-click to join data across the universe.</p>
						<p class="rfs-text-lg">The Yellowbrick system with Nexus desktops and Nexus Servers provides migration and data transfers with ease-of-use and record-breaking speeds while making Yellowbrick the only data warehouse platform to join tables across every system in your enterprise. Soterosoft adds the security to your virtualization roadmap that allows users to have access to only the data their roles provide.</p>
						<ul class="rfs-text-lg">
							<li>Hear about the importance of encryption from Soterosoft and how it is easier to implement than you think</li>
							<li>Get a peek into best practices for virtualization from Nexus and how to join data across every major on-premises and cloud system with a button click</li>
							<li>Watch a demo of the incredible speeds for federated queries on billion-row tables from Yellowbrick, getting a chance to see how security and virtualization come together to support multiple lines of business</li>
						</ul>
					</div>
				</div>
				<div class="w-full md:w-1/3">
					<div class="float-form">
						<h3 class="text-gray-700">Watch On-Demand</h3>
						<BaseHubspot 
							id="a09a96c0-5f01-4e65-be73-324333331a51" 
							sfid="7011G000000KUGJQA4"
							webId="5316324949470406413"
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
			title: 'Data virtualization at your fingertips',
			meta: [{
				key: 'description',
				name: 'description',
				content: 'What do you get when you bundle a Yellowbrick Data Warehouse with Soterosoft and Nexus? Virtualization! It’s the best combination of a modern data warehouse for hybrid cloud that allows users to securely point-and-click to join data across the universe.'
			}]
		},
		components: {
			GoCustomers,
			Layout
		}
	};
</script>
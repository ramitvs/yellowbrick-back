<style scoped>
	.hero {
		background-image: linear-gradient(to right, rgba(23,33,38,.97) 50%, rgba(12,55,84,.10)), url(/uploads/images/HealthcareWebinar.jpg);
		background-size: cover;
		background-position: center center;

		&:before {
			height: 2rem;
		}
	}

	.freedom-bg {
		background-image: url(/uploads/images/freedom-bg.svg);
		background-position: bottom right;
		background-repeat: no-repeat;
		background-size: 45%;
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
	}

	.date-time span {
		display: inline-block;
	}
</style>

<template>
	<Layout>
		<section class="hero flex bg-gray-700 py-10 md:py-12 text-white px-6 xl:px-0">
			<div class="flex flex-col md:flex-row max-w-1200 w-full py-8 mx-auto relative z-10">
				<div class="w-full md:w-7/12 p-0 md:pr-16 text-gray-700 md:text-white">
					<div class="bg-white md:bg-transparent p-6 md:p-0">
						<p class="eyebrow mb-0"><strong>VIP Roundtable:</strong></p>
						<h1 class="rfs-text-6xl p-0">Strategies for modernizing data analytics at Blue Cross Blue Shield companies</h1>
						<p class="date-time">
							<span><strong>When:</strong> Tuesday, December 8<sup>th</sup>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
							<span><strong>Time:</strong> 5 PM ET&nbsp;&nbsp;|&nbsp;&nbsp;</span>
							<span><strong>Duration:</strong> 60 minutes</span>
						</p>
						<p class="rfs-text-lg">Join Yellowbrick and our hand-picked group of ten senior leaders for an exclusive and unique virtual roundtable event and informal mixer. It’s a virtual wine tasting with a side of shop talk!</p>
						<p class="rfs-text-lg">RSVP as soon as possible to reserve your seat!</p>
						<p class="rfs-text-lg">Every BCBS company has business-critical financial and clinical goals that necessitate a system of real-time answers, from providing care at a lower cost and enhancing patient engagement and experience to improving care delivery and outcomes.</p>
						<h5>Join us for a focused roundtable where we will share thoughts and experiences about  analytics modernization, in addition to discussing:</h5>
						<ul class="rfs-text-lg">
							<li>The internal and external data challenges (e.g., data volume and complexity) that demand a new, modern approach to analytics</li>
							<li>The value of real-time analytics for measuring, understanding, and predicting outcomes</li>
							<li>Considerations for building predictive models that further clinical and care delivery goals (e.g., to minimize ER visits)</li>
							<li>Requirements for building "Patient 360" views that lead to new insights about care, costs, and outcomes</li>
						</ul>
					</div>
				</div>
				<div class="w-full md:w-1/3">
					<div class="float-form">
						<h3 class="text-gray-700">Register</h3>
						<BaseHubspot 
							id="2ad47632-d8b2-4c34-acdb-f9dabed9611e" 
							sfid="7011G000000KT0AQAW"
						/>
					</div>
				</div>
			</div>
		</section>

		<section class="bg-gray-100 py-8 sm:pt-24 sm:pb-10 z-10 px-6 xl:px-0">
			<div class="flex flex-col max-w-1200 w-full mx-auto relative">
				<h2 class="">Yellowbrick Helps Enterprises Innovate and Thrive</h2>
				<div class="flex flex-row flex-wrap -mx-8 p-8">
					<div class="flex w-full xs:w-1/2 md:w-1/3 lg:w-1/4 p-6 sm:px-4 md:px-8">
						<img src="/uploads/images/customers/symphony.svg" alt="Symphony Logo"
							class="w-3/4 mx-auto xs:w-full sm:w-3/4 self-start" />
					</div>
					<div class="flex w-full xs:w-1/2 md:w-1/3 lg:w-1/4 p-6 sm:px-4 md:px-8">
						<img src="/uploads/images/customers/lexisnexis.svg" alt="LexisNexis Logo"
							class="w-3/4 mx-auto xs:w-full sm:w-3/4 self-start" />
					</div>
					<div class="flex w-full xs:w-1/2 md:w-1/3 lg:w-1/4 p-6 sm:px-4 md:px-8">
						<img src="/uploads/images/customers/sf-express.svg" alt="SF Express Logo"
							class="w-3/4 mx-auto xs:w-full sm:w-3/4 self-start" />
					</div>
					<div class="flex w-full xs:w-1/2 md:w-1/3 lg:w-1/4 p-6 sm:px-4 md:px-8">
						<img src="/uploads/images/customers/alliance.svg" alt="Alliance Logo"
							class="w-3/4 mx-auto xs:w-full sm:w-3/4 self-start" />
					</div>
					<div class="flex w-full xs:w-1/2 md:w-1/3 lg:w-1/4 p-6 sm:px-4 md:px-8">
						<img src="/uploads/images/customers/allscripts.svg" alt="AllScripts Logo"
							class="w-3/4 mx-auto xs:w-full sm:w-3/4 self-start" />
					</div>
					<div class="flex w-full xs:w-1/2 md:w-1/3 lg:w-1/4 p-6 sm:px-4 md:px-8">
						<img src="/uploads/images/customers/clarity.svg" alt="Clarity Logo"
							class="w-3/4 mx-auto xs:w-full sm:w-3/4 self-start" />
					</div>
					<div class="flex w-full xs:w-1/2 md:w-1/3 lg:w-1/4 p-6 sm:px-4 md:px-8">
						<img src="/uploads/images/customers/melco.svg" alt="Melco Logo"
							class="w-3/4 mx-auto xs:w-full sm:w-3/4 self-start" />
					</div>
					<div class="flex w-full xs:w-1/2 md:w-1/3 lg:w-1/4 p-6 sm:px-4 md:px-8">
						<img src="/uploads/images/customers/teoco.svg" alt="Teoco Logo"
							class="w-3/4 mx-auto xs:w-full sm:w-3/4 self-start" />
					</div>
				</div>
			</div>
		</section>

	</Layout>
</template>

<script>
	import BaseHubspot from "~/components/BaseHubspot.vue";
	import Layout from '~/layouts/Landing.vue';

	export default {
		metaInfo: {
			title: 'Roundtable: Strategies for modernizing data analytics at Blue Cross Blue Shield companies',
			meta: [{
				key: 'description',
				name: 'description',
				content: 'Join Yellowbrick and our hand-picked group of ten senior leaders for an exclusive virtual roundtable event, including a wine tasting with a certified wine master.'
			}]
		},
		components: {
			BaseHubspot,
			Layout
		}
	};
</script>
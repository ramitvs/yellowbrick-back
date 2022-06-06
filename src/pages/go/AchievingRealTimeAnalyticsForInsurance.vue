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
        			<p class="eyebrow md:mb-0"><strong>On-demand webinar</strong></p>
        			<div class="flex flex-col sm:flex-row justify-between pt-4 pb-8">
        				<div class="flex items-center pr-20 w-3/4 sm:w-5/12"><img src="/uploads/partners-systech.svg"
        						alt="systech logo" class="w-full" /></div>
        				<div class="flex items-center pr-20 sm:w-2/12"><span
        						class="text-white rfs-text-6xl text-center w-full">+</span></div>
        				<div class="flex items-center w-3/4 sm:w-5/12"><img src="/uploads/images/yb-logo.svg"
        						alt="yellowbrick logo" class="w-full" /></div>
        			</div>

        			<div class="bg-white md:bg-transparent p-6 md:p-0">
        				<h1 class="rfs-text-5xl p-0">Achieving Real-time Analytics for Insurance</h1>
        				<h1 class="rfs-text-2xl p-0">Discover a data and analytics platform designed for scale, speed, and
        					hybrid cloud</h1>
        				<p class="rfs-text-lg">The pressure on analytics systems of insurance companies is immense. These data
        					and analytics systems must support claims processing, dynamic underwriting, risk modeling, Customer
        					360, fraud detection, and more—all while the need for speed, data volumes, and regulations continue to
        					grow.</p>
        				<p class="rfs-text-lg">Few data warehouses can keep up with the scale or processing needs of insurance
        					companies, let alone help these companies modernize or plan a move to the cloud.</p>
        				<p class="rfs-text-lg">Watch the session to learn about a data warehouse that addresses the complexities and speed
        					the insurance industry requires. You’ll discover how to build a real-time, standards-based analytics
        					platform that leverages existing tools, models, and investments in both public and private clouds.</p>

        				<p class="rfs-text-lg">At this interactive event, you’ll discover:</p>
        				<ul class="rfs-text-lg">
        					<li>How to achieve “real-time” analytics within your insurance company</li>
        					<li>How to incorporate your data lake into your real-time analytics system</li>
        					<li>The benefits of a standards-based platform (and protecting your existing tools-investment)</li>
        					<li>Migrating to a new data warehouse can actually be simple</li>
        					<li>How insurance companies have built real-time analytics systems that operate a massive scale</li>
        					<li>The future of clouds is….distributed </li>
        				</ul>
        			</div>
        		</div>
        		<div class="w-full md:w-1/3">
        			<div class="float-form">
						<h3 class="text-gray-700">Watch On-Demand</h3>
        				<BaseHubspot id="08e1d066-aeed-48c1-8771-0589229a30fc" sfid="7011G000000KYf8QAG"
        					webId="8211641434180542476" />
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
			title: 'Achieving Real-time Analytics for Insurance',
			meta: [{
				key: 'description',
				name: 'description',
				content: 'Discover a data and analytics platform designed for scale, speed, and hybrid cloud'
			}]
		},
		components: {
			GoCustomers,
			Layout
		}
	};
</script>

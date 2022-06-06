<style scoped>
    .hero {
        background-image: url(/uploads/images/hero-alt-bg.svg);
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
</style>

<template>
    <Layout>
        <section class="hero flex bg-gray-700 py-10 md:py-12 text-white px-6 xl:px-0">
            <div class="flex flex-col md:flex-row max-w-1200 w-full py-8 mx-auto relative z-10">
                <div class="w-full md:w-7/12 p-0 md:pr-16 text-gray-700 md:text-white">
                    <h5 class="text-yellow1 mb-2">On-Demand Webcast:</h5>
                    <div class="bg-white md:bg-transparent p-6 md:p-0">
                        <h1 class="rfs-text-5xl p-0">Reach next-level performance with advanced workload management</h1>
                        <p class="rfs-text-lg">Nothing stymies progress for your business like poor data warehouse performance. In this webinar, we share how advanced workload management with Yellowbrick gives you full visibility and granular control over your queries, a key differentiator for optimizing performance. Plus, watch an exciting, deep-dive demo of our capabilities.</p>

                        <h4>Register and hear how advanced workload management helps to: </h4>
                        <ul class="rfs-text-lg">
                            <li>Enable teams to boost speed-to-insights</li>
                            <li>Improve alignment of business priorities to operations</li>
                            <li>Drives improved performance at unrivaled cost savings</li>
                        </ul>
                    </div>
                </div>
                <div class="w-full md:w-1/3">
                    <div class="float-form">
                        <h3 class="text-gray-700">Watch On-Demand</h3>
                        <BaseHubspot id="74d2d277-09c8-49c1-adf8-e40d0b4f328e" sfid="7011G000000KS6WQAW" webId="5506715281586689547" />
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
            title: 'Advanced workload management webinar',
            meta: [{
                key: 'description',
                name: 'description',
                content: 'Advanced workload management with Yellowbrick gives you full visibility and granular control over your queries, a key differentiator for optimizing performance.'
            }]
        },
        components: {
            GoCustomers,
            Layout
        }
    };
</script>
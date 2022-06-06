<style scoped>
    @media (max-width: 500px) {
        .checkmark::before {
            left: 38px !important;
        }

        .replacingtable th, td {
            border: 1px solid grey;
            padding: 10px 4px 10px 4px !important;
        }
    }

    .herotagline {
        margin-bottom: 4px;
    }

    span.tabletext {
        margin-top: 15px;
        display: block;
        text-align: center;
    }

    .heading_form {
        font-size: 26px;
    }

    .whitebg {
        background: #fff;
        color: #000;
    }

    .greybg {
        background: #e3e3e6;
        color: #000;
    }

    .checkmark::before {
        border-style: solid;
        border-color: #00C3CD;
        -o-border-image: none;
        border-image: none;
        -o-border-image: initial;
        border-image: initial;
        border-width: 0px 2px 2px 0px;
        content: '';
        height: 13px;
        left: 70px;
        position: absolute;
        top: -9px !important;
        width: 8px;
        transform: rotate(45deg);
        text-align: center !important;
    }

    .replacingtable th, td {
        border: 1px solid grey;
        padding: 10px 10px 10px 18px;
    }

    .replacingtable {
        margin-bottom: 30px;
    }

        .replacingtable th {
            background: #cbd5e0;
            color: #000;
            text-align: left;
        }

    .hero {
        background-image: url(/uploads/images/hero-new.svg);
        background-size: cover;
        background-position: center center;
        &:after

    {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        @apply bg-gray-700 absolute z-0;
        opacity: .7;
    }

    }

    .hero-half {
        @apply bg-white;
        &:after

    {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 60%;
        background-image: url(/uploads/images/hero-new.svg);
        background-size: cover;
        background-position: center center;
        @apply bg-gray-700 absolute z-0;
    }

    }

    .predictability-bg {
        background-image: url(/uploads/images/predictability-bg.svg);
        background-position: bottom right;
        background-repeat: no-repeat;
        background-size: 50%;
    }

    .dk-bg {
        color: #ffffff !important;
    }


    .float-form {
        @apply relative p-8 bg-gray-200 shadow-lg;
    }
</style>

<template>
    <Layout>
        <section class="hero flex bg-gray-700 py-10 md:py-12 text-white px-6 xl:px-0">
            <div class="flex flex-col md:flex-row max-w-1200 w-full py-8 mx-auto relative z-10">

                <div class="w-full md:w-2/3 p-0 md:pr-16 text-gray-700 md:text-white">
                    <h5 class="text-yellow1 mb-6 md:mb-2">Featured eBook:</h5>
                    <div class="bg-white md:bg-transparent p-6 md:p-0">
                        <h1 class="p-0">Real-time Analytics for Banks and Financial Services Companies</h1>
                        
                        <div class="float-none lg:float-right w-full xs:w-3/4 sm:mx-0 shadow-md sm:shadow-none lg:w-1/2 m-0 mb-8 lg:ml-10 lg:mb-12 lg:mt-3">
                            <img src="/uploads/go/eBook_Real-time_analytics_for_banks_and_financial_services_companies.png" class="w-full" alt="sap iq replacement" title="sap iq replacement" />
                        </div>
                        <p class="rfs-text-lg">Banks and financial services firms depend on effective and efficient data analytics. Turning large, complex data sets into profitable business decisions is critical to success.</p>

                        <p class="rfs-text-lg">According to McKinsey, storing and maintaining data can eat up between 15 to 20% of the average IT budget. A hybrid cloud approach empowers organizations to</p>
                           <ul class="rfs-text-base w-full mb-0 pb-0 md:mb-2 md:pb-2">
                                <li>Scale faster without compromising data security</li>
                                <li>Minimize latency and get data where it needs to go</li>
                                <li>Control cloud costs</li>
                            </ul>
                        <p class="rfs-text-lg">Yellowbrick completely changes data analytics possibilities. With Yellowbrick, you can turn large, complex data sets into profitable business decisions. The modern data warehouse architecture also improves security and increases resiliency.</p>
                        
                        <h5 class="rfs-text-lg accent-heading mt-10 mb-0 pb-0">In this eBook, learn how a modern cloud data warehouse enables you to</h5>
                        <div class="flex flex-col md:flex-row">
                            <ul class="rfs-text-base w-full mb-0 pb-0 md:mb-2 md:pb-2">
                                <li>Gain a true 360-degree view of customers</li>
                                <li>Detect fraudulent activity as it happens</li>
                                <li>Accelerate loan pipelines</li>
                            </ul>
                            <ul class="rfs-text-base w-full pt-0 mt-0 md:mt-2 md:pt-2">
                                <li>Build richer, more accurate risk models</li>
                                <li>Reduce security and compliance risks</li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div class="w-full md:w-1/3 ">
                    <div class="float-form md:w-3/4">
                        <h3 class="text-gray-700 heading_form">Download the eBook </h3>
                        <BaseHubspot id="f863c78d-7171-4c45-a7d7-eac8e46af55b" sfid="7011G000000OBrlQAG" />
                    </div>
                    <GoReviews />
                </div>

            </div>
        </section>

        <GoCustomers />

    </Layout>
</template>

<script>

    import GoCustomers from "~/components/GoCustomers.vue";
    import GoReviews from "~/components/GoReviews.vue";
    import Layout from '~/layouts/Landing.vue';

    export default {
        metaInfo: {
            title: 'Real-time Analytics for Banks and Financial Services Companies',
            meta: [
                {
                    key: 'description',
                    name: 'description',
                    content: 'Banks and financial services firms depend on effective and efficient data analytics. Turning large, complex data sets into profitable business decisions is critical to success.'
                },
                {
                    key: 'og:description',
                    name: 'og:description',
                    content: 'Banks and financial services firms depend on effective and efficient data analytics. Turning large, complex data sets into profitable business decisions is critical to success.'
                },
                {
                    key: 'twitter:description',
                    name: 'twitter:description',
                    content: 'Banks and financial services firms depend on effective and efficient data analytics. Turning large, complex data sets into profitable business decisions is critical to success.'
                },
                {
                    key: 'og:title',
                    name: 'og:title',
                    content: 'Real-time Analytics for Banks and Financial Services Companies'
                },
                {
                    key: 'twitter:title',
                    name: 'twitter:title',
                    content: 'Real-time Analytics for Banks and Financial Services Companies'
                },
                {
                    key: 'og:image',
                    name: 'og:image',
                    content: 'https://www.yellowbrick.com/uploads/go/eBook_Real-time_analytics_for_banks_and_financial_services_companies.png'
                },
                {
                    key: 'twitter:image',
                    name: 'twitter:image',
                    content: 'https://www.yellowbrick.com/uploads/go/eBook_Real-time_analytics_for_banks_and_financial_services_companies.png'
                }
            ]
        },
        methods: {
            handleEvent(open) {
                window.location.href = open;
            }
        },
        components: {
            GoCustomers,
            GoReviews,
            Layout
        }
    };
</script>
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
    @supports (-webkit-touch-callout: none) {
        	.checkmark::before {
		top: 17px !important;
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
        top: -9px;
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
.accent-heading {
    position: relative;
    padding-top: 6px;
    padding-bottom: 0;
    margin-bottom: 0px;
}
</style>

<template>
    <Layout>
        <section class="hero flex bg-gray-700 py-10 md:py-12 text-white px-6 xl:px-0">
            <div class="flex flex-col md:flex-row max-w-1200 w-full py-8 mx-auto relative z-10">

                <div class="w-full md:w-2/3 p-0 md:pr-16 text-gray-700 md:text-white">
                    <h5 class="text-yellow1 mb-6 md:mb-2">Featured Whitepaper:</h5>
                    <div class="bg-white md:bg-transparent p-6 md:p-0">
                        <h1 class="p-0">Visual analytics for insurance customer 360°</h1>
                        <h3 class="p-0 font-light">Key use cases for insurance customer analytics delivered with Yellowbrick Cloud Data Warehouse and Tableau</h3><br>
                        <div class="float-none lg:float-right w-full xs:w-3/4 sm:mx-0 shadow-md sm:shadow-none lg:w-1/2 m-0 mb-8 lg:ml-10 lg:mb-12 lg:mt-3">
                            <img src="/uploads/go/visual-analytics-for-insurance-customer360.png" class="w-full" alt="sap iq replacement" title="sap iq replacement" />
                        </div>
                        <p class="rfs-text-lg">For insurance companies, achieving a “360-degree view” of the customer journey (customer 360) is one of the most importantrequirements for ensuring excellent customer service, creating precision marketing campaigns that lead to upsell/cross-sell, calculating risk thoroughly and accurately, and meeting regulatory requirements. </p>
                        <p class="rfs-text-lg">This whitepaper presents four use cases of insurance customer 360 analytics and highlights how the insights can be applied to deliver a better customer experience and drive targeted activities to optimize profits. To help visualize data, Tableau dashboards are provided for each use case with sample data in Yellowbrick Data Warehouse. </p>
                        <p class="rfs-text-lg">Finally, Yellowbrick’s architecture for distributed clouds is described in detail as the technology solution that can enable these use cases and deliver real-time analytics with the fastest performance in the industry – at a fraction of the cost of other solutions. </p>
                                  <br/>             
                        <p class="rfs-text-lg accent-heading">Download the whitepaper to learn how to:</p>
                        <div class="flex flex-col md:flex-row">
                            <ul class="rfs-text-base w-full mb-0 pb-0 md:mb-2 md:pb-2">
                                <li>Vehicle Telematics</li>
                                <li>Customer Sentiment (NPS)</li>
                            </ul>
                            <ul class="rfs-text-base w-full pt-0 mt-0 md:mt-2 md:pt-2">
                                <li>Customer Conversion</li>
                                <li>Product Propensity</li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div class="w-full md:w-1/3 ">
                    <div class="float-form md:w-3/4">
                        <h3 class="text-gray-700 heading_form">Download the eBook </h3>
                        <BaseHubspot id="a3cc4863-0b8f-45b1-818a-bdfb4d374709" sfid="7011G000000OBx9QAG" />
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
            title: 'Visual analytics for insurance customer 360° - Yellowbrick Data',
            meta: [
                {
                    key: 'description',
                    name: 'description',
                    content: 'Key use cases for insurance customer analytics delivered with Yellowbrick Cloud Data Warehouse and Tableau'
                },
                {
                    key: 'og:description',
                    name: 'og:description',
                    content: 'Key use cases for insurance customer analytics delivered with Yellowbrick Cloud Data Warehouse and Tableau'
                },
                {
                    key: 'twitter:description',
                    name: 'twitter:description',
                    content: 'Key use cases for insurance customer analytics delivered with Yellowbrick Cloud Data Warehouse and Tableau'
                },
                {
                    key: 'og:title',
                    name: 'og:title',
                    content: 'Visual analytics for insurance customer 360° - Yellowbrick Data'
                },
                {
                    key: 'twitter:title',
                    name: 'twitter:title',
                    content: 'Visual analytics for insurance customer 360° - Yellowbrick Data'
                },
                {
                    key: 'og:image',
                    name: 'og:image',
                    content: 'https://www.yellowbrick.com/uploads/go/visual-analytics-for-insurance-customer360.png'
                },
                {
                    key: 'twitter:image',
                    name: 'twitter:image',
                    content: 'https://www.yellowbrick.com/uploads/go/visual-analytics-for-insurance-customer360.png'
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
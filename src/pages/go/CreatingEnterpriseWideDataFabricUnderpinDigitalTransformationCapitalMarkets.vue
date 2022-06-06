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
    .hero:before {
    content: '';
    height: 45px !important;
    position: relative;
    width: 100%;
}
</style>

<template>
    <Layout>
        <section class="hero flex bg-gray-700 py-10 md:py-12 text-white px-6 xl:px-0">
            <div class="flex flex-col md:flex-row max-w-1200 w-full py-8 mx-auto relative z-10">

                <div class="w-full md:w-2/3 p-0 md:pr-16 text-gray-700 md:text-white">
                    <h5 class="text-yellow1 mb-6 md:mb-2">Featured Whitepaper:</h5>
                    <div class="bg-white md:bg-transparent p-6 md:p-0">
                        <h1 class="p-0">Creating an Enterprise-Wide Data Fabric to Underpin Digital Transformation in Capital Markets </h1>
                        
                        <div class="float-none lg:float-right w-full xs:w-3/4 sm:mx-0 shadow-md sm:shadow-none lg:w-1/2 m-0 mb-8 lg:ml-10 lg:mb-12 lg:mt-4">
                            <img src="/uploads/go/enterprise-wide-datafabric-underpin-digital-transformation-capital-markets-pdf.png" class="w-full" alt="sap iq replacement" title="Creating an Enterprise-Wide Data Fabric to Underpin Digital Transformation in Capital Markets" />
                        </div>
                        <p class="rfs-text-lg pt-4">Companies undergoing a digital transformation must have a common data fabric that provides a single view of the truth and underpins analytics, reporting, and regulatory processes. But to meet the requirements needed for transformation, many Capital Markets organizations are realizing the need to modernize legacy data systems.</p>

                        <p class="rfs-text-lg">Data modernization is more than just upgrading legacy platforms. By building a cohesive data fabric, organizations can unlock opportunities and differentiate. </p>
<br>
                        <h5 class="rfs-text-lg accent-heading mt-16 mb-0 pb-0">The top 5 takeaways for data modernization in Capital Markets:</h5>
                        <div class="flex flex-col md:flex-row">
                            <ul class="rfs-text-base w-full mb-0 pb-0 md:mb-2 md:pb-2">
                                <li>A modern data infrastructure will unlock the potential of digital transformation through analytics, streamlined operations, and improved customer outcomes.</li>
                                <li>The right cloud implementation takes time as well as reskilling and rethinking of IT processes.</li>
                                <li>The hybrid model is proving to be the new normal with some data remaining on-premises for the foreseeable future.</li>
                            </ul>
                            <ul class="rfs-text-base w-full pt-0 mt-0 md:mt-2 md:pt-2">

                                <li>Data platform usage will explode as businesses realize the potential it's unlocking.</li>
								<li>Real-time offers opportunities for firms to identify and respond rapidly to new business situations and client requests.</li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div class="w-full md:w-1/3 ">
                    <div class="float-form md:w-3/4">
                        <h3 class="text-gray-700 heading_form">Download today</h3>
                        <BaseHubspot id="6de0dfed-4bad-454f-8d87-320e49c0cf0a" sfid="7011G0000003rzPQAQ" />
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
                    content: 'Creating an Enterprise-Wide Data Fabric to Underpin Digital Transformation in Capital Markets'
                },
                {
                    key: 'og:description',
                    name: 'og:description',
                    content: 'Creating an Enterprise-Wide Data Fabric to Underpin Digital Transformation in Capital Markets'
                },
                {
                    key: 'twitter:description',
                    name: 'twitter:description',
                    content: 'Creating an Enterprise-Wide Data Fabric to Underpin Digital Transformation in Capital Markets'
                },
                {
                    key: 'og:title',
                    name: 'og:title',
                    content: 'Creating an Enterprise-Wide Data Fabric to Underpin Digital Transformation in Capital Markets'
                },
                {
                    key: 'twitter:title',
                    name: 'twitter:title',
                    content: 'Creating an Enterprise-Wide Data Fabric to Underpin Digital Transformation in Capital Markets'
                },
                {
                    key: 'og:image',
                    name: 'og:image',
                    content: 'https://www.yellowbrick.com/uploads/go/enterprise-wide-datafabric-underpin-digital-transformation-capital-markets-pdf.png'
                },
                {
                    key: 'twitter:image',
                    name: 'twitter:image',
                    content: 'https://www.yellowbrick.com/uploads/go/enterprise-wide-datafabric-underpin-digital-transformation-capital-markets-pdf.png'
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
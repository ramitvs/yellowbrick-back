<style scoped>
    .hero {
        background-image: url(/uploads/images/generic-bg.svg);
        background-size: cover;
        background-position: center;
    }

    .asterisk {
        @apply text-red-800;
    }

    :target {
        scroll-margin-top: 90px;
    }

    .hs-form-dark .hs-form-wrapper .form-columns-2 .hs-form-field {
        display: inline-block;
    }
</style>

<template>
    <Layout>
        <section class="hero flex flex-col bg-gray-700 py-24 px-6 xl:px-0">
            <div class="max-w-1200 w-full mx-auto text-white z-10">
                <h1 class="">Partners</h1>
                <p class="rfs-text-xl w-full md:w-1/2">
                    Yellowbrick Data works with leading data management, data integration, and BI partners to unleash the power of your data with faster
                    analytics.
                </p>
                <button v-scroll-to="`#reseller`" class="button yellow mr-4 mb-4">Reseller Partners</button>
                <button v-scroll-to="`#solution`" class="button yellow mr-4 mb-4">Solution Partners</button>
                <button v-scroll-to="`#technology`" class="button yellow mr-4 mb-4">Technology Partners</button>
                <button v-scroll-to="`#become`" class="button yellow mr-4 mb-4" @click="expanded = true">Become a Partner</button>
                <a href="https://yellowbrick.channeltivity.com/">
                    <button class="button yellow">Partner Portal</button>
                </a>
            </div>
        </section>


        <section class="cc:flex pb-8 bg-gray-100 px-6 xl:px-0 py-20">
            <div class="flex flex-col justify-center max-w-1200 mx-auto">
                <!-- <div class="break-plane p-10 bg-white shadow-lg relative"> -->
                <h2 class="accent-heading">Why become a Yellowbrick reseller?</h2>
                <div class="flex flex-col md:flex-row flex-wrap mx-0 md:-mx-6">
                    <div class="w-full md:w-1/4 pt-6 pb-6 md:p-6 flex flex-col items-start">
                        <img src="/uploads/images/resellers/resellers-market-opportunity.svg"
                             class="w-24"
                             alt="speed icon" />
                        <h5 class="mt-8 mb-2">Market opportunity</h5>
                        <p>
                            The data warehouse market is predicted to grow to $24 billion by
                            2024.<span class="asterisk">*</span>
                        </p>
                        <p class="text-xs">
                            <span class="asterisk">*</span>Worldwide Big Data and Analytics
                            Software Forecast, 2020–2024 (IDC)
                        </p>
                    </div>
                    <div class="w-full md:w-1/4 pt-6 pb-6 md:p-6 flex flex-col items-start">
                        <img src="/uploads/images/resellers/resellers-accelerate-growth.svg"
                             class="w-24"
                             alt="accuracy icon" />
                        <h5 class="mt-8 mb-2">Accelerate growth</h5>
                        <p>
                            Our resellers enjoy a partnership to drive business for mutual
                            benefit
                        </p>
                    </div>
                    <div class="w-full md:w-1/4 pt-6 pb-6 md:p-6 flex flex-col items-start">
                        <img src="/uploads/images/resellers/resellers-increase-profitability.svg"
                             class="w-24"
                             alt="unlocked icon" />
                        <h5 class="mt-8 mb-2">Increase profitability</h5>
                        <p>
                            Consistent performance of Yellowbrick ensures continued contracts,
                            giving you high ROI
                        </p>
                    </div>
                    <div class="w-full md:w-1/4 pt-6 pb-6 md:p-6 flex flex-col items-start">
                        <img src="/uploads/images/resellers/resellers-better-together.svg"
                             class="w-24"
                             alt="unlocked icon" />
                        <h5 class="mt-8 mb-2">Better together</h5>
                        <p>
                            We have an open, transparent, customer- and partner-focused
                            culture
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="cc:flex pb-8 bg-white px-6 xl:px-0 py-20">
            <div class="flex flex-col justify-center max-w-1200 mx-auto">
                <!-- <div class="break-plane p-10 bg-white shadow-lg relative"> -->
                <h2 class="accent-heading">Yellowbrick accelerates performance</h2>
                <div class="flex flex-col md:flex-row flex-wrap mx-0 md:-mx-6">
                    <div class="w-full md:w-1/4 pt-6 pb-6 md:p-6 flex flex-col items-start">
                        <img src="/uploads/images/resellers/resellers-price-performance.svg"
                             class="w-24"
                             alt="speed icon" />
                        <h5 class="mt-8 mb-2">Price/performance</h5>
                        <p>Unmatched speeds at a fraction of the cost</p>
                    </div>
                    <div class="w-full md:w-1/4 pt-6 pb-6 md:p-6 flex flex-col items-start">
                        <img src="/uploads/images/resellers/resellers-cloud-flexible.svg"
                             class="w-24"
                             alt="speed icon" />
                        <h5 class="mt-8 mb-2">Cloud flexible</h5>
                        <p>Data agility wherever and whenever</p>
                    </div>

                    <div class="w-full md:w-1/4 pt-6 pb-6 md:p-6 flex flex-col items-start">
                        <img src="/uploads/images/resellers/resellers-security-compliance.svg"
                             class="w-24"
                             alt="accuracy icon" />
                        <h5 class="mt-8 mb-2">Security and compliance</h5>
                        <p>Risk mitigation across all industries</p>
                    </div>

                    <div class="w-full md:w-1/4 pt-6 pb-6 md:p-6 flex flex-col items-start">
                        <img src="/uploads/images/resellers/resellers-predictable-pricing.svg"
                             class="w-24"
                             alt="unlocked icon" />
                        <h5 class="mt-8 mb-2">Predictable, fixed-cost pricing</h5>
                        <p>Customers enjoy budget certainty</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-gray-100 flex pb-12 bg-white px-6 xl:px-0 md:pt-20">
            <div class="mx-auto w-full max-w-1200">
                <h2 class="accent-heading">Reseller resources</h2>
                <div class="flex flex-col sm:flex-row flex-wrap -mx-4 md:-mx-8">

                    <div class="flex w-full md:w-1/2 xl:w-1/3 p-4 md:p-8">
                        <div class="pr-5 w-5/12">
                            <img src="/uploads/BRIEF_Yellowbrick_Velocity_Partner_Network-thumb.jpg" alt="Migration guide: Teradata to Yellowbrick Hybrid Data Warehouse" class="shadow-md" />
                        </div>
                        <div class="flex flex-col xl:justify-between w-7/12">
                            <h6 class="eyebrow uppercase">Brief</h6>
                            <h5>Velocity Partner Network Brief</h5>
                            <a id="velocity-partner-network-brief" class="button yellow ungated-asset" href="/uploads/BRIEF_Yellowbrick_Velocity_Partner_Network.pdf" target="_blank">Read Brief </a>
                        </div>
                    </div>

                    <div class="flex w-full md:w-1/2 xl:w-1/3 p-4 md:p-8">
                        <div class="pr-5 w-5/12">
                            <img src="/uploads/thumb-eb-hybrid-cloud-analytics.png" alt="Migration guide: Teradata to Yellowbrick Hybrid Data Warehouse" class="shadow-md" />
                        </div>
                        <div class="flex flex-col xl:justify-between w-7/12">
                            <h6 class="eyebrow uppercase">Brief</h6>
                            <h5>Hybrid Cloud Brief</h5>
                            <a id="hybrid-cloud-brief" class="button yellow ungated-asset" href="/uploads/hybrid-cloud-brief.pdf" target="_blank">Read Brief </a>
                        </div>
                    </div>

                    <div class="flex w-full md:w-1/2 xl:w-1/3 p-4 md:p-8">
                        <div class="pr-5 w-5/12">
                            <img src="/uploads/yellowbrick_dw_economics-thumb.jpg" alt="Migration guide: Teradata to Yellowbrick Hybrid Data Warehouse" class="shadow-md" />
                        </div>
                        <div class="flex flex-col xl:justify-between w-7/12">
                            <h6 class="eyebrow uppercase mb-0">Brief</h6>
                            <h5 class="mb-0">Economics of Yellowbrick Data Warehouse</h5>
                            <a class="button yellow" href="/resources/briefs/economics-of-yellowbrick-data-warehouse/" target="_blank">Read Brief </a>
                        </div>
                    </div>

                    <div class="flex w-full md:w-1/2 xl:w-1/3 p-4 md:p-8">
                        <div class="pr-5 w-5/12">
                            <img src="/uploads/yellowbrick-reseller-brief-thumb.png" alt="Migration guide: Teradata to Yellowbrick Hybrid Data Warehouse" class="shadow-md" />
                        </div>
                        <div class="flex flex-col xl:justify-between w-7/12">
                            <h6 class="eyebrow uppercase mb-0">Partner Brief</h6>
                            <h5 class="mb-0">Yellowbrick Reseller Opportunity</h5>
                            <a id="reseller-opportunity-brief" class="button yellow ungated-asset" href="/uploads/BRIEF_Yellowbrick_Reseller_Opportunity.pdf" target="_blank">Read Brief </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section id="more-info"
                 class="slashed bg-white relative flex justify-center h-auto m-0 py-16 sm:py-24 md:py-24 px-0 z-10">
            <div class="flex justify-center max-w-1200 w-full mx-auto z-10">
                <div class="box-link-big w-full flex flex-col bg-gray-100 p-10 md:p-16 relative">
                    <span class="accent"></span>
                    <h1 class="mb-6 sm:mb-10 leading-tight rfs-text-5xl">
                        To learn more about becoming a reseller, contact&nbsp;our&nbsp;team.
                    </h1>
                    <span v-scroll-to="`#become`" @click="expanded = true"
                          class="arrow-btn large"></span>
                </div>
            </div>
        </section>

        <section class="bg-white py-12 md:py-20 px-6 xl:px-0" id="reseller">
            <div class="w-full max-w-1200 mx-auto">
                <h2>Reseller Partners</h2>
            </div>
            <section class="flex flex-row flex-wrap py-16 max-w-1200 w-full mx-auto">
                <div v-for="resellerPartner in $page.partnerPage.resellerPartners" class="zoomer w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
                    <div class="p-2 h-full">
                        <a v-if="resellerPartner.url" :href="resellerPartner.url" target="_blank" class="bg-gray-700 h-full flex p-5 xs:p-8 md:p-10 relative">
                            <img v-if="resellerPartner.photo" :src="resellerPartner.photo" class="w-full flex self-center" :alt="resellerPartner.name" />
                            <div class="hvr-reveal flex">
                                <div v-html="resellerPartner.body" class="flex text-lg leading-tight self-center" />
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </section>


        <section class="bg-gray-100 py-12 md:py-20 px-6 xl:px-0" id="solution">
            <div class="w-full max-w-1200 mx-auto">
                <h2>Solution Partners</h2>
            </div>
            <section class="flex flex-row flex-wrap py-16 max-w-1200 w-full mx-auto">
                <div v-for="solutionPartner in $page.partnerPage.solutionPartners" class="zoomer w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
                    <div class="p-2 h-full">
                        <a v-if="solutionPartner.url" :href="solutionPartner.url" target="_blank" class="bg-gray-700 h-full flex p-5 xs:p-8 md:p-10 relative">
                            <img v-if="solutionPartner.photo" :src="solutionPartner.photo" class="w-full flex self-center" :alt="solutionPartner.name" />
                            <div class="hvr-reveal flex">
                                <div v-html="solutionPartner.body" class="flex text-lg leading-tight self-center" />
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </section>




        <section class="bg-white py-12 md:py-20 px-6 xl:px-0" id="technology">
            <div class="w-full max-w-1200 mx-auto">
                <h2>Technology Partners</h2>
            </div>
            <section class="flex flex-row flex-wrap py-16 max-w-1200 w-full mx-auto">
                <div v-for="techPartner in $page.partnerPage.techPartners" class="zoomer w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
                    <div class="p-2 h-full">
                        <a v-if="techPartner.url" :href="techPartner.url" target="_blank" class="bg-gray-700 h-full flex p-5 xs:p-8 md:p-10 relative">
                            <img v-if="techPartner.photo" :src="techPartner.photo" class="w-full flex self-center" :alt="techPartner.name" />
                            <div class="hvr-reveal flex">
                                <div v-html="techPartner.body" class="flex text-lg leading-tight self-center" />
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </section>

        <section class="bg-gray-600 text-white py-12 md:py-20 px-6 xl:px-0" id="become">
            <div class="w-full max-w-1200 mx-auto" id="form-start">
                <h2 class="accent-heading">Become a Partner</h2>
                <p class="w-full md:w-1/2">Yellowbrick is growing rapidly, as is our partner ecosystem. We're looking for valuable partners that can enhance our offering and provide a customer-focused vision. Sign up below to get started.</p>

                <transition-expand>
                    <div v-show="expanded" class="hs-form-light hs-form-inline bg-gray-100 text-gray-500 p-8 mb-8">
                        <BaseHubspot :id="'007fec31-69e0-4022-99bc-bc8643a848e0'" :sfid="'7011G000000kg9oQAA'" />
                    </div>
                </transition-expand>
                <button v-scroll-to="`#form-start`" @click="expanded = !expanded" class="button yellow">{{ expanded ? `Close Form` : `Get Started` }}</button>
            </div>
        </section>

    </Layout>
</template>

<script>
    import TransitionExpand from '~/components/TransitionExpand.vue'

    export default {
        components: {
            TransitionExpand
        },
        metaInfo: {
            title: 'Yellowbrick Partners',
            meta: [{
                key: 'description',
                name: 'description',
                content: 'Discover the amazing partnerships we have developed here at Yellowbrick or join us and see why so many are partnering with us.'
            }]
        },
        data() {
            return {
                expanded: false,
                formData: {}
            }
        },
        methods: {
            encode(data) {
                return Object.keys(data)
                    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
                    .join('&')
            },
            handleSubmit(e) {
                fetch('/thank-you/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: this.encode({
                        'form-name': e.target.getAttribute('name'),
                        ...this.formData,
                    }),
                })
                    .then(() => this.$router.push('/thank-you/'))
                    .catch(error => alert(error))
            }
        }
    }
</script>


<page-query>
    query Page {
    partnerPage: pages(path: "/data/pages/partners") {
    solutionPartners {
    name
    url
    photo
    body
    categories
    }
    techPartners {
    name
    url
    photo
    body
    categories
    }
    resellerPartners {
    name
    url
    photo
    body
    categories
    }
    }
    }
</page-query>

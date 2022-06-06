<style scoped>
    .herotagline {
        margin-bottom: 4px;
    }

    .hero {
        background-image: url(/uploads/images/tall-bg.svg);
        background-size: cover;
        background-position: center;
    }

    .embellish-bg {
        background-image: url(/uploads/images/predictability-bg.svg);
        background-position: bottom right;
        background-repeat: no-repeat;
        background-size: 30%;
    }

    .multi-column {
        column-count: 1;
        column-gap: 0;
    }

    @media (min-width: 768px) {
        .multi-column {
            column-count: 2;
            column-gap: 2.5rem;
        }
    }

    .break-plane {
        top: -3rem;
        z-index: 40;
    }

    .stroke-main {
        stroke: #4b5458;
        stroke-width: 3px;
    }

    .stroke-accent {
        stroke: #fecf41;
        stroke-width: 2.5px;
    }

    .active {
        display: none;
    }

    .gate-form {
        min-height: 300px;
    }

    .expand-enter-active,
    .expand-leave-active {
        transition-property: opacity, height;
    }

    .expand-enter,
    .expand-leave-to {
        opacity: 0;
    }
</style>

<template>
    <Layout>

        <section class="hero flex bg-gray-700 py-12 md:py-24 text-white px-6 xl:px-0">
            <div class="flex flex-col max-w-1200 w-full mx-auto z-10">
                <div class="w-full md:w-1/2">
                    <span class="rfs-text-xl text-yellow1 mb-0">Industry Solutions:</span>
                    <h1 class="rfs-text-6xl"><b>SAP IQ End of Life</b></h1>
                    <p class="rfs-text-lg font-medium herotagline">“We believe Yellowbrick’s data warehouse technology leaps ahead of anything on the market after seeing firsthand what it can do for our analytics.”</p>
                    <p class="rfs-text-lg italic">--Josh Woods, Citadel Securities</p>
                    <p class="rfs-text-lg">For decades, SAP IQ has enjoyed popularity as a data warehousing platform for many regulated industries, especially the Financial Services Industry (FSI). Like all traditional data warehouse architectures, the SAP IQ solution is aging. The only SAP support will be updates for bug fixes and security modifications. As the SAP IQ end of life draws closer, the platform offers limited performance with rising costs.</p>
                </div>
            </div>
        </section>

        <section class="bg-white pb-16 mb-16 pt-16 px-6 xl:px-0">
            <div class="mx-auto w-full max-w-1200">
                <h2>More Than an <b>SAP IQ Replacement</b> </h2>

                <div class="flex flex-col md:flex-row -mx-3 mt-6">

                    
                        <div class="flex w-full md:w-1/5 p-4">
                            <div class="p-4 bh-white shadow-md relative">
                                <span class="accent"></span>
                                <p class="rfs-text-lg"><span class="rfs-text-1xl font-semibold text-gray-400 leading-none m-0">Achieve</span>  10-10,000x more speed of data-load and complex query performance response times.</p>
                            </div>
                        </div>

                        
                            <div class="flex w-full md:w-1/5 p-4">
                                <div class="p-4 bh-white shadow-md relative">
                                    <span class="accent"></span>
                                    <p class="rfs-text-lg"><span class="rfs-text-1xl font-semibold text-gray-400 leading-none m-0">Choose</span> between flexible deployment models: cloud-native, on-premises, and hybrid.</p>
                                </div>
                            </div>


                            
                                <div class="flex w-full md:w-1/5 p-4">
                                    <div class="p-4 bg-white shadow-md relative">
                                        <span class="accent"></span>
                                        <p class="rfs-text-lg"><span class="rfs-text-1xl font-semibold text-gray-400 leading-none m-0">Generate</span> more value from analytics and scale to increasing data volumes, numbers of users, and system capacity.</p>
                                    </div>
                                </div>

                                
                                    <div class="flex w-full md:w-1/5 p-4">
                                        <div class="p-4 bg-white shadow-md relative">
                                            <span class="accent"></span>
                                            <p class="rfs-text-lg"><span class="rfs-text-1xl font-semibold text-gray-400 leading-none m-0">Get</span> superior total cost-of-ownership and price / performance.</p>
                                        </div>
                                    </div>

                                    
                                        <div class="flex w-full md:w-1/5 p-4">
                                            <div class="p-4 bg-white shadow-md relative">
                                                <span class="accent"></span>
                                                <p class="rfs-text-lg"><span class="rfs-text-1xl font-semibold text-gray-400 leading-none m-0">Simplify</span> application development costs, third-party tools integration, DBA management and maintenance.</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
        </section>



        <section class="flex pb-8 bg-gray-100 px-6 xl:px-0">
            <div class="flex flex-col justify-center max-w-1200 mx-auto">
                <div class="break-plane p-10 bg-white shadow-lg relative">
                    <span class="accent"></span>
                    <h3 class="text-gray-500 mb-8">Modernize Your SAP IQ Solution with Yellowbrick</h3>
                    <div class="text-gray-500 w-full">
                        <p class="rfs-text-lg">Many FSI organizations find that their legacy analytic database platform used for analyzing and reporting trades, investments, risk, and compliance is no longer a fit for their growing needs. Companies must manage higher data volumes and velocities, while meeting the challenges of heightening security and regulatory challenges.</p>
                        <p class="rfs-text-lg">While today’s mixed workloads require a high-performance solution and as the number and diversity of workloads increase it is critical for FSIs to specify, control, and automate the work that matters most.</p>
                        <p class="rfs-text-lg herotagline">“We believe Yellowbrick’s data warehouse technology leaps ahead of anything on the market after seeing firsthand what it can do for our analytics. We’re thrilled to invest in what will be the new standard in <b>data warehousing and analytics"</b></span></p>
                        <p class="rfs-text-lg italic">said Josh Woods, head of options, ETF, CES, and research technology for Citadel Securities.</p>
                        <p class="rfs-text-lg">Yellowbrick’s modern cloud data warehouse reduces query time to seconds, accelerates time to value and insight, and reduces costs through a predictable subscription model. By delivering high performance on massive volumes of live data with the fastest and most efficient execution necessary, organizations can make critical, better informed business decisions.</p>

                        <!-- <transition-expand>
                          <div v-if="expanded">
                            <p class="rfs-text-lg">...</p>
                          </div>
                        </transition-expand>

                        <button @click="expanded = !expanded" class="button dark">
                          {{ expanded ? `Read Less` : `Read More` }}
                        </button> -->

                    </div>
                </div>

            </div>
        </section>

        <section class="flex py-12 md:py-16 bg-white px-6 xl:px-0">
            <div class="flex flex-col items-start max-w-1200 mx-auto">

                <div class="w-full">
                    <!-- <img src="/uploads/customers/finserv-formatted.svg" alt="Financial Services Top 10 logo" class="w-48 -my-4"/> -->
                    <h3 class="accent-heading mb-0">Featured Whitepaper:</h3>
                    <div class="flex flex-col md:flex-row">
                        <div class="w-full md:w-7/12">
                            <h4>Replacing SAP IQ – Why Yellowbrick?</h4>
                            <p><b>Yellowbrick: the Next Best Step for SAP IQ End of Life</b></p>
                            <p>Legacy platforms cannot meet your specialized needs. As SAP support ends, the next logical step is to migrate your data rather than investing in aging solutions or SAP IQ replacements.</p>
                            <p>Many SAP IQ customers are seeking the simplest and most cost effective and scalable analytics database platform that can be quickly deployed and substituted for the SAP IQ solution (cloud or on-premises). With Yellowbrick, your investment is future proofed.</p>
                            <p>To achieve success, FSIs needs all tools and technologies to work in concert. This is Yellowbrick’s strength—software and hardware and integration with customers’ computing environments, designed from the ground-up to work together with maximum performance and scalability and ease-of-integration with minimal initial effort or ongoing maintenance.</p>
                            <p>Yellowbrick is designed to deliver high performance to the mixed workloads that modern enterprises require.</p>
                            <p>Yellowbrick’s deployment and migration journey to the cloud, or on-premises, or a hybrid of the two, is fast and simple. A modern, open, and elastic data warehouse, Yellowbrick runs consistently across the cloud and on-premises with predictable and controllable costs.</p>
                            <a href="/go/sap-iq-replacement-why-yellowbrick/" @click.prevent="handleEvent('/go/sap-iq-replacement-why-yellowbrick/')" class="button yellow mr-4 mb-3">Read the Whitepaper</a>
                            <a href="/customers/" @click.prevent="handleEvent('/customers/')" class="button outline mb-3">See Other Customer Stories</a>
                        </div>
                        <div class="flex w-full items-center md:w-5/12">
                            <img src="/uploads/replacing-sap-iq-yb-thumb.png" alt="sap iq replacement" title="sap iq replacement" class="w-full sm:w-3/4 mx-auto" />
                        </div>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row -mx-3 mt-8">

                    <div class="flex w-full md:w-1/3 p-3">
                        <div class="p-6 bg-gray-500 text-white shadow-md">
                            <span class="rfs-text-3xl font-semibold text-yellow1 leading-none m-0 pb-2">ACCELERATE TIME TO INSIGHT</span>
                            <h6 class="pt-2">Load Data in Parallel from Multiple Files</h6>
                            <p>Reduce the complexity of data loading operations with bulk loading capability and in-database transformations (ELT). </p>
                        </div>
                    </div>

                    <div class="flex w-full md:w-1/3 p-3">
                        <div class="p-6 bg-gray-500 text-white shadow-md">
                            <span class="rfs-text-3xl font-semibold text-yellow1 leading-none m-0 pb-2">DATA IN MINUTES</span>
                            <h6 class="pt-2">Data Availability in Minutes, Not Hours</h6>
                            <p>Yellowbrick can rapidly access trillions of rows for analysis with data loading in minutes versus hours. Queries run in seconds, not minutes.</p>
                        </div>
                    </div>


                    <div class="flex w-full md:w-1/3 p-3">
                        <div class="p-6 bg-gray-500 text-white shadow-md">
                            <span class="rfs-text-3xl font-semibold text-yellow1 leading-none m-0 pb-2">HUGE SAVINGS</span>
                            <h6 class="pt-2">Reduce Cost Overruns</h6>
                            <p>Reduce total cost of ownership with additional savings from predictable and the lowest possible costs. Remove the risk of cost overruns associated with other data warehouses.</p>
                        </div>
                    </div>

                    <!-- <div class="flex flex-row w-1/4 p-3">
                      <div class="flex bg-gray-500 p-6 shadow-md">
                        <span class="text-7xl border-4 border-white self-center text-white rounded-full p-10 w-48 h-48 align-middle text-center mx-auto">+</span>
                      </div>
                    </div> -->

                </div>

            </div>
        </section>

        <section class="bg-gray-100 pb-32 pt-16 px-6 xl:px-0">
            <div class="mx-auto w-full max-w-1200">
                <h3 class="text-gray-500 rfs-text-3xl">Financial Services Industry Resources</h3>
                <p class="rfs-text-lg pb-6">Read how the digital transformation of financial services will shape your organization and why a data warehouse is your best resource for making the leap into the new digital environment.</p>
                <div class="flex flex-col sm:flex-row flex-wrap">

                    <div class="flex flex-col w-full cc:w-1/3 p-8 cc:p-10 bg-gray-100 shadow-lg">
                        <img src="/uploads/go/powering-top-hedge-funds.png" alt="" class="w-full shadow-md self-start mb-8" />
                        <h4 class="text-gray-400 font-normal rfs-text-sm mb-0">Featured eBook:</h4>
                        <h5 class="mb-6">Powering Hedge Funds eBook </h5>
                        <a href="/go/powering-top-hedge-funds/" @click.prevent="handleEvent('/go/powering-top-hedge-funds/')" class="button yellow">Read Now</a>
                    </div>

                    <div class="flex flex-col flex-wrap md:flex-row w-full cc:w-2/3 py-8 px-0 cc:p-10 cc:pb-24 justify-around">

                        <div class="flex flex-row w-full mb-12 md:w-1/3 md:flex-col md:w-1/3 md:pr-6">
                            <img src="/uploads/ebook-finserv.jpg" alt="" class="w-5/12 md:w-2/3 shadow-md self-start mb-6" />
                            <div class="w-7/12 md:w-full pl-5 md:p-0 flex flex-col md:flex-grow">
                                <h4 class="text-gray-400 font-normal rfs-text-sm mb-0">eBook:</h4>
                                <h5 class="mb-6">Yellowbrick for Financial Services</h5>
                                <a href="/go/yellowbrick-for-banking-and-financial-services/" @click.prevent="handleEvent('/go/yellowbrick-for-banking-and-financial-services/')" class="button yellow md:mt-auto">Read Now</a>
                            </div>
                        </div>




                        <div class="flex flex-row w-full mb-12 md:w-1/3 md:flex-col md:w-1/3 md:pr-6">
                            <img src="/uploads/finserv-analytics-brief-thumb.png" alt="" class="w-5/12 md:w-2/3 shadow-md self-start mb-6" />
                            <div class="w-7/12 md:w-full pl-5 md:p-0 flex flex-col md:flex-grow">
                                <h6 class="text-gray-400 font-normal rfs-text-sm mb-0">Brief:</h6>
                                <h5 class="mb-6">Real-time Analytics for Financial Services</h5>
                                <a href="/uploads/Yellowbrick_Brief_FinServ_Analytics.pdf" id="finserv-analytics-brief" class="button yellow md:mt-auto ungated-asset" target="_blank" rel="noopener">Read Now</a>
                            </div>
                        </div>


                        <div class="flex flex-row w-full mb-12 md:w-1/3 md:flex-col md:w-1/3 md:pr-6">
                            <img src="/uploads/cs-top10-financial-services-thumb.jpg" alt="" class="w-5/12 md:w-2/3 shadow-md self-start mb-6" />
                            <div class="w-7/12 md:w-full pl-5 md:p-0 flex flex-col md:flex-grow">
                                <h4 class="text-gray-400 font-normal rfs-text-sm mb-0">Case Study:</h4>
                                <h5 class="mb-6">Top 10 Financial Services</h5>
                                <a href="/resources/case-studies/top-financial-services-company/" @click.prevent="handleEvent('/resources/case-studies/top-financial-services-company/')" class="button yellow md:mt-auto">Read Now</a>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </section>

        <MoreInfoSeo />

    </Layout>
</template>

<script>
    import MoreInfoSeo from '~/components/MoreInfoSeo.vue'
    import TransitionExpand from '~/components/TransitionExpand.vue'

    export default {
        metaInfo: {
            title: 'Modernize SAP IQ with Yellowbrick Data Warehouse Technology',
            meta: [
                {
                    key: 'description',
                    name: 'description',
                    content: 'As SAP support ends, the next logical step is to migrate your data rather than investing in aging solutions or SAP IQ replacements. With Yellowbrick, your investment is future proofed.'
                },
                {
                    key: 'og:description',
                    name: "og:description",
                    content: 'As SAP support ends, the next logical step is to migrate your data rather than investing in aging solutions or SAP IQ replacements. With Yellowbrick, your investment is future proofed.'
                },
                {
                    key: 'twitter:description',
                    name: 'twitter:description',
                    content: 'As SAP support ends, the next logical step is to migrate your data rather than investing in aging solutions or SAP IQ replacements. With Yellowbrick, your investment is future proofed.'
                },
                {
                    key: 'og:title',
                    name: 'og:title',
                    content: 'Modernize SAP IQ with Yellowbrick Data Warehouse Technology'
                },
                {
                    key: 'twitter:title',
                    name: 'twitter:title',
                    content: 'Modernize SAP IQ with Yellowbrick Data Warehouse Technology'
                }
            ]
        },
        methods: {
            handleEvent(open) {
                window.location.href = open;
            }
        },
        components: {
            MoreInfoSeo,
            TransitionExpand
        },
        data() {
            return {
                expanded: false,
            };
        }

    }
</script>

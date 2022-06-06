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
</style>

<template>
    <Layout>
        <section class="hero flex bg-gray-700 py-10 md:py-12 text-white px-6 xl:px-0">
            <div class="flex flex-col md:flex-row max-w-1200 w-full py-8 mx-auto relative z-10">

                <div class="w-full md:w-2/3 p-0 md:pr-16 text-gray-700 md:text-white">
                    <h5 class="text-yellow1 mb-6 md:mb-2">Featured Whitepaper:</h5>
                    <div class="bg-white md:bg-transparent p-6 md:p-0">
                        <h1 class="p-0">Replacing SAP IQ – Why Yellowbrick?</h1>
                        <h3 class="p-0">Yellowbrick: the Next Best Step for <b>SAP IQ End of Life</b></h3><br>
                        <div class="float-none lg:float-right w-full xs:w-3/4 sm:mx-0 shadow-md sm:shadow-none lg:w-1/2 m-0 mb-8 lg:ml-10 lg:mb-12 lg:mt-3">
                            <img src="/uploads/replacing-sap-iq-yb-thumb.png" class="w-full" alt="sap iq replacement" title="sap iq replacement" />
                        </div>
                        <p class="rfs-text-lg">For decades, <b>SAP IQ</b> has enjoyed popularity as a data warehousing platform for many regulated industries, especially the Financial Services Industry (FSI). Like all traditional data warehouse architectures, the SAP IQ solution is aging. The only SAP IQ support will be updates for bug fixes and security modifications. The platform offers limited performance with rising costs as SAP IQ end of life draws closer.</p>
                        <p class="rfs-text-lg">Many customers are seeking the simplest, least expensive, most scalable analytics database platform that can be quickly deployed and substituted for <a href="/replace/sap-iq/" @click.prevent="handleEvent('/replace/sap-iq/')">SAP IQ</a>.</p>
                        <p class="rfs-text-lg herotagline font-medium">“We believe Yellowbrick’s data warehouse technology leaps ahead of anything on the market after seeing firsthand what it can do for our analytics.” </p>
                        <p class="rfs-text-lg italic">--Josh Woods, Citadel Securities</p>
                        <h5 class="rfs-text-lg accent-heading mt-10 mb-0 pb-0">Yellowbrick Expands on All the Benefits of <b>SAP IQ</b></h5><br>
                        <p class="rfs-text-lg">Yellowbrick’s architecture provides a flexible, future-proof platform that meets any deployment need. A modern, open, and elastic data warehouse, Yellowbrick runs consistently across cloud and on-premises with predictable and controllable costs. Here are the features that make Yellowbrick a superior replacement for SAP IQ customers:</p>

                        <table class="table-auto replacingtable">
                            <thead>
                                <tr>
                                    <th class="w-1/2">Features</th>
                                    <th class="w-1/4">Yellowbrick</th>
                                    <th class="w-1/4">SAP IQ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="whitebg">
                                    <td>Public Cloud, Private Cloud, Hybrid Cloud, or On-Premises Deployment</td>
                                    <td><span class="checkmark"></span></td>
                                    <td></td>
                                </tr>
                                <tr class="greybg">
                                    <td>Best-of-Breed Data Load Performance</td>
                                    <td><span class="checkmark"></span></td>
                                    <td></td>
                                </tr>
                                <tr class="whitebg">
                                    <td>Best-of-Breed Query Performance</td>
                                    <td><span class="checkmark"></span></td>
                                    <td></td>

                                </tr>
                                <tr class="greybg">
                                    <td>Best-of-Breed System Scalability (e.g., as data volumes and # of users grow)</td>
                                    <td><span class="checkmark"></span></td>
                                    <td></td>
                                </tr>
                                <tr class="whitebg">
                                    <td>Best-of-Breed Query Concurrency (i.e., Workload) Management </td>
                                    <td><span class="checkmark"></span></td>
                                    <td></td>
                                </tr>
                                <tr class="greybg">
                                    <td>No Need to Declare Indexes </td>
                                    <td><span class="checkmark"></span></td>
                                    <td></td>

                                </tr>
                                <tr class="whitebg">
                                    <td>Multi-Database Support </td>
                                    <td><span class="checkmark"></span></td>
                                    <td></td>
                                </tr>
                                <tr class="greybg">
                                    <td>Data Encryption at Rest with Zero Performance Impact</td>
                                    <td><span class="checkmark"></span></td>
                                    <td></td>
                                </tr>
                                <tr class="whitebg">
                                    <td>Fully Transactional Behavior for Multiple Writers and Readers-vs.-Writers</td>
                                    <td><span class="checkmark"></span></td>
                                    <td></td>
                                </tr>
                                <tr class="greybg">
                                    <td>Performance Scalability</td>
                                    <td><span class="checkmark"></span></td>
                                    <td></td>
                                </tr>
                                <tr class="whitebg">
                                    <td>Dynamically (Transparently) Redistributes Data Across Additional Nodes When Capacity is Added</td>
                                    <td><span class="checkmark"></span></td>
                                    <td></td>
                                </tr>
                                <tr class="greybg">
                                    <td>Architecture Emphasizes Minimal Human Maintenance</td>
                                    <td><span class="checkmark"></span></td>
                                    <td></td>
                                </tr>
                                <tr class="whitebg">
                                    <td>Superior Integration with ETL and BI Tools (By Virtue of SQL Compatibility with Postgres)</td>
                                    <td><span class="checkmark"></span></td>
                                    <td></td>
                                </tr>
                                <tr class="greybg">
                                    <td>Simple, Cost-Effective Subscription Pricing </td>
                                    <td><span class="checkmark"></span></td>
                                    <td></td>
                                </tr>
                                <tr class="whitebg">
                                    <td>High-Availability with Built-In Replication Services</td>
                                    <td><span class="checkmark"></span><span class="tabletext">(Built-In)</span></td>
                                    <td><span class="tabletext">Partially Supported <br>(Add-On Component</span></td>
                                </tr>

                                <tr class="greybg">
                                    <td>Ready Availability of DBA’s</td>
                                    <td><span class="checkmark"></span><span class="tabletext">(Postgres)</span></td>
                                    <td><span class="tabletext">Retiring</span></td>
                                </tr>

                                <tr class="whitebg">
                                    <td>Proven Columnstore Relational Database</td>
                                    <td><span class="checkmark"></span></td>
                                    <td><span class="checkmark"></span></td>
                                </tr>

                                <tr class="greybg">
                                    <td>Compliant with SQL Standards</td>
                                    <td><span class="checkmark"></span></td>
                                    <td><span class="checkmark"></span></td>
                                </tr>

                                <tr class="whitebg">
                                    <td>Designed for Analytics Workload on Large Data Sets</td>
                                    <td><span class="checkmark"></span></td>
                                    <td><span class="checkmark"></span></td>
                                </tr>

                                <tr class="greybg">
                                    <td>Deploy On-Premises and On Infrastructure as a Service</td>
                                    <td><span class="checkmark"></span></td>
                                    <td><span class="checkmark"></span></td>
                                </tr>
                            </tbody>
                        </table>



                        <h5 class="rfs-text-lg accent-heading mt-10 mb-0 pb-0">The Next Step for SAP IQ Users</h5><br>
                        <p class="rfs-text-lg">Organizations looking for an SAP IQ upgrade need a solution that keeps up with modern-day market volumes.</p>
                        <p class="rfs-text-lg">Download the whitepaper to learn how to:</p>
                        <div class="flex flex-col md:flex-row">
                            <ul class="rfs-text-base w-full mb-0 pb-0 md:mb-2 md:pb-2">
                                <li>Load data in minutes vs. hours</li>
                                <li>Run queries in seconds, not minutes</li>
                            </ul>
                            <ul class="rfs-text-base w-full pt-0 mt-0 md:mt-2 md:pt-2">
                                <li>Save millions with predictable costs</li>
                                <li>Avoid vendor lock-in with open standards that ensure portability of data and workloads</li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div class="w-full md:w-1/3 ">
                    <div class="float-form md:w-3/4">
                        <h3 class="text-gray-700 heading_form">Download the eBook </h3>
                        <BaseHubspot id="339d8663-9c23-4767-b6d8-b0d608f41a16" sfid="7011G000000KgXHQA0" />
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
            title: '﻿Whitepaper: Replacing SAP IQ – Why Yellowbrick? - Yellowbrick Data',
            meta: [
                {
                    key: 'description',
                    name: 'description',
                    content: 'Consider a modern cloud data warehouse for their SAP IQ replacement? SAP IQ support is ending, and the only updates will be bug fixes and security modifications.'
                },
                {
                    key: 'og:description',
                    name: 'og:description',
                    content: 'Consider a modern cloud data warehouse for their SAP IQ replacement? SAP IQ support is ending, and the only updates will be bug fixes and security modifications.'
                },
                {
                    key: 'twitter:description',
                    name: 'twitter:description',
                    content: 'Consider a modern cloud data warehouse for their SAP IQ replacement? SAP IQ support is ending, and the only updates will be bug fixes and security modifications.'
                },
                {
                    key: 'og:title',
                    name: 'og:title',
                    content: '﻿Whitepaper: Replacing SAP IQ – Why Yellowbrick? - Yellowbrick Data'
                },
                {
                    key: 'twitter:title',
                    name: 'twitter:title',
                    content: '﻿Whitepaper: Replacing SAP IQ – Why Yellowbrick? - Yellowbrick Data'
                },
                {
                    key: 'og:image',
                    name: 'og:image',
                    content: 'https://www.yellowbrick.com/uploads/replacing-sap-iq-yb-thumb.png'
                },
                {
                    key: 'twitter:image',
                    name: 'twitter:image',
                    content: 'https://www.yellowbrick.com/uploads/replacing-sap-iq-yb-thumb.png'
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
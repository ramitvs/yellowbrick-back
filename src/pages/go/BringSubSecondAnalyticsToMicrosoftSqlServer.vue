<style scoped>
.hero {
    background-image: url(/uploads/images/Yellowbrick_WebinarMobileBackground.jpg);
    background-size: cover;
    background-position: center center;

    & :before {
        height: 2rem;
    }
}

@media screen and (min-width: 768px) {
    .hero {
        background-image: url(/uploads/images/Yellowbrick_WebinarDarkBackground.jpg);
    }
}

.float-form {
    @apply relative p-8 bg-white shadow-lg;

    & .mktoForm {
        margin-top: 0.5rem !important;
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
        <section
            class="hero flex bg-gray-700 py-10 md:py-12 text-white px-6 xl:px-0"
        >
            <div
                class="flex flex-col md:flex-row max-w-1200 w-full py-8 mx-auto relative z-10"
            >
                <div
                    class="w-full md:w-7/12 p-0 md:pr-16 text-gray-700 md:text-white"
                >
                    <div class="bg-white md:bg-transparent p-6 md:p-0">
                        <p class="eyebrow md:mb-0">
                            <strong>On-demand</strong>
                        </p>
                        <h1 class="rfs-text-6xl p-0">
                            Bring sub-second analytics to Microsoft SQL Server
                            with Yellowbrick
                        </h1>
                        <p class="date-time">
                            <span class="duration"
                                ><strong
                                    >Duration:</strong
                                >
                                20 minutes</span
                            >
                        </p>
                        <p class="rfs-text-lg">
                            For many SQL Server users, sub-second
                            query response time is just a pipe dream when larger
                            datasets are involved. Yellowbrick Data Warehouse
                            makes it possible, bringing ad hoc, near-real time
                            analytics to SQL Server for billions of records.
                            Watch this session to:
                        </p>
                        <ul class="rfs-text-lg">
                            <li>
                                Learn how Yellowbrick brings industry-leading
                                price/performance to data warehousing
                            </li>
                            <li>
                                Understand how Yellowbrick can accelerate SQL
                                Server transparently to the application -- no
                                ETL or T-SQL changes required
                            </li>
                            <li>
                                Watch a live demo of Yellowbrick-enhanced SQL
                                Server in action, with Polybase working under
                                the covers for data virtualization
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="w-full md:w-1/3">
                    <div class="float-form">
                        <h3 class="text-gray-700">Watch On-Demand</h3>
                        <BaseHubspot
                            id="e2b8eb74-24c7-443e-a846-78f151810362"
                            sfid="7011G000000KWOZQA4"
                            webId="756066390068651023"
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
import Layout from "~/layouts/Landing.vue";

export default {
    metaInfo: {
        title:
            "Bring sub-second analytics to Microsoft SQL Server with Yellowbrick",
        meta: [
            {
                key: "title",
                name: "title",
                content: "Bring sub-second analytics to Microsoft SQL Server with Yellowbrick"
            },
            {
                key: "description",
                name: "description",
                content:
                    "Learn how Yellowbrick Data Warehouse breaks through analytics limitations",
            },
        ],
    },
    components: {
        GoCustomers,
        Layout,
    },
};
</script>
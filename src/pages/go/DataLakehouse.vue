<style scoped>
.hero-wrapper {
    position: relative;
}

.overlay {
    bottom: 0;
    left: 20%;
    opacity: 0.7;
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 30%;

    @media (min-width: 1280px) {
        left: 20%;
        top: 30%;
    }

    @media (min-width: 1280px) {
        left: 40%;
        top: 40%;
    }
}

.overlay img {
    height: 140%;
    width: auto;
    margin-left: auto;
    margin-right: -10px;
}

.hero {
    background-image: linear-gradient(
            90deg,
            rgba(13, 23, 28, 1) 3%,
            rgba(13, 23, 28, 0.15) 60%,
            rgba(13, 23, 28, 1) 100%
        ),
        url(/uploads/bmw-background.jpg);
    background-size: cover;
    background-position: center;

    @media (min-width: 768px) {
        padding: 16rem 1.5rem 3rem;
    }

    @media (min-width: 1280px) {
        padding-left: 0;
        padding-right: 0;
    }
}

.hero-text {
    max-width: 700px;
}

.eyebrow {
    color: #ffcd32;
    margin: 0;
}

.slash-right-mid {
    @apply relative z-0;
    &:after {
        content: "";
        @apply absolute;
        background-image: url("data:image/svg+xml,%3Csvg width='20' height='27' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v27H0z'/%3E%3Cpath d='M13.667 7.09a.663.663 0 00-.911.247L6.089 18.99a.676.676 0 00.244.919.66.66 0 00.911-.246l6.667-11.655a.676.676 0 00-.244-.919' fill='%234B5357'/%3E%3C/g%3E%3C/svg%3E");
        background-repeat: repeat;
        left: 83%;
        right: 0;
        transform: translateY(-90%);
        height: 231px;
        opacity: 0.2;
    }
}

h1 {
    margin-bottom: 0;
}

.cta,
span {
    color: #ffcd32;
}

p {
    margin-bottom: 1rem;
}

svg {
    display: inline-block;
    margin-top: -2px;
    transform: scale(0.65);
}
</style>

<template>
    <Layout>
        <div class="hero-wrapper">
            <section
                class="hero flex bg-gray-700 py-12 md:py-24 text-white px-6 xl:px-0 relative"
            >
                <div
                    class="flex flex-col md:flex-row max-w-1200 w-full py-8 mx-auto relative z-10"
                >
                    <div class="flex flex-col hero-text w-full mr-auto z-10">
                        <div class="content w-full">
                            <p class="eyebrow mb-0">
                                <strong>Technical use case</strong>
                            </p>
                            <h1 class="rfs-text-5xl">
                                Get insights from your data lake. At
                                <span>impossible</span> speeds.
                            </h1>
                            <p class="rfs-text-xl">
                                How to transform your data lake into a "data
                                lakehouse"
                            </p>
                            <a
                                href="/uploads/BRIEF_Yellowbrick_Data_Lake_Augmentation.pdf"
                                class="cta rfs-text-xl ungated-asset"
                                id="data-lake-augmentation"
                                target="_blank"
                                >Download the technical use case
                                <svg
                                    width="37"
                                    height="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g
                                        stroke="#FFCD32"
                                        stroke-width="4"
                                        fill="none"
                                        fill-rule="evenodd"
                                        stroke-linecap="round"
                                    >
                                        <path d="M2 12h30" />
                                        <path
                                            stroke-linejoin="round"
                                            d="M24.5 21.5l10-9.5-10-9.5"
                                        />
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <div class="overlay">
                <img
                    src="/uploads/images/diamond-light.svg"
                    class="w-full"
                />
            </div>
        </div>

        <section class="bg-gray-100 relative py-12 px-6 xl:px-0">
            <div class="flex w-full mx-auto max-w-1200">
                <div class="flex flex-col w-full">
                    <p class="rfs-text-2xl">
                        Get insights from your data lake (finally) with
                        real-time, ad hoc SQL analytics! The Yellowbrick Data
                        Warehouse is now the fastest and most modern solution
                        available for data lake analytics, letting thousands of
                        concurrent BI users explore all your data at the speed
                        of thought using common tools. This technical brief
                        shows Yellowbrick's unmatched capabilities and shows how
                        current customers are redrawing their businesses with
                        real-time analytics as their competitive advantage.
                    </p>
                </div>
            </div>
        </section>
    </Layout>
</template>

<script>
import Hero from "~/components/HeroComponent";
import Layout from "~/layouts/Landing.vue";
import ModalDialog from "~/components/ModalDialog.vue";

export default {
    metaInfo: {
        title:
            'Transform Your Data Lake into a "Data Lakehouse"',
        meta: [
            {
                key: "description",
                name: "description",
                content:
                    "Get the technical brief and see Yellowbrick's unmatched data lake analytics capabilities. Real-time, ad hoc SQL analytics.",
            },
            {
                key: "og:description",
                name: "og:description",
                content:
                    "Get the technical brief and see Yellowbrick's unmatched data lake analytics capabilities. Real-time, ad hoc SQL analytics.",
            },
            {
                key: "og:title",
                name: "og:title",
                content:
                    'Transform Your Data Lake into a "Data Lakehouse"',
            },
            {
                key: "twitter:description",
                name: "twitter:description",
                content:
                    "Get the technical brief and see Yellowbrick's unmatched data lake analytics capabilities. Real-time, ad hoc SQL analytics.",
            },
            {
                key: "twitter:title",
                name: "twitter:title",
                content:
                    'Transform Your Data Lake into a "Data Lakehouse"',
            },
        ],
    },
    methods: {},
    components: {
        Layout,
        ModalDialog,
    },
};
</script>

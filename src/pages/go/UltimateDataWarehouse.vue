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
        transform: translateY(-110%);
        height: 331px;
        opacity: 0.2;
    }
}

.modal {
    background-color: rgba(0, 0, 0, 0.5);
    transition: opacity 0.3s;
    z-index: 101;
}

.modal-video {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.close {
    cursor: pointer;
    margin-top: 6px;
    transition: opacity 0.3s, transform 0.3s;
}

.close:hover {
    transform: scale(1.1);
}

.closed {
    opacity: 0;
}

.video-text-left {
    margin: auto;
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
                    class="flex flex-col md:flex-row max-w-1200 w-full pb-4 mx-auto relative z-10"
                >
                    <div
                        class="flex flex-col max-w-800 w-full mr-auto mt-auto z-10"
                    >
                        <div class="content w-full">
                            <p class="eyebrow mb-0">
                                <strong>Video case study: BMW</strong>
                            </p>
                            <h1 class="rfs-text-5xl">
                                How the Ultimate Data Warehouse Yellowbrick
                                accelerates BMW's analytics
                            </h1>
                            <a
                                class="cta rfs-text-xl ungated-asset"
                                id="bmw-full-video"
                                @click="toggleModal"
                                >Watch the full video (21:37)
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
                    <div class="flex w-full items-center pl-10 z-10">
                        <BaseWistia
                            class="w-full h-2/3"
                            id="hsw8k2i7xj"
                            allowPopover="true"
                        />
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

        <div
            class="closed fixed overflow-y-scroll w-full h-full top-0 modal p-6 md:py-12"
            id="full-video-modal"
            @click="toggleModal"
            style="display: none"
        >
            <div class="w-full h-full relative">
                <div class="modal-video w-4/5 lg:w-3/4 absolute" @click.stop>
                    <div
                        class="wistia_responsive_padding"
                        style="padding: 56.25% 0 0 0; position: relative"
                    >
                        <div
                            class="wistia_responsive_wrapper"
                            style="
                                height: 100%;
                                left: 0;
                                position: absolute;
                                top: 0;
                                width: 100%;
                            "
                        >
                            <div
                                class="wistia_embed wistia_async_50gjkfbh26 videoFoam=true"
                                style="
                                    height: 100%;
                                    position: relative;
                                    width: 100%;
                                "
                            >
                                <div
                                    class="wistia_swatch"
                                    style="
                                        height: 100%;
                                        left: 0;
                                        opacity: 0;
                                        overflow: hidden;
                                        position: absolute;
                                        top: 0;
                                        transition: opacity 200ms;
                                        width: 100%;
                                    "
                                >
                                    <img
                                        src="https://fast.wistia.com/embed/medias/50gjkfbh26/swatch"
                                        style="
                                            filter: blur(5px);
                                            height: 100%;
                                            object-fit: contain;
                                            width: 100%;
                                        "
                                        alt=""
                                        aria-hidden="true"
                                        onload="this.parentNode.style.opacity=1;"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="bg-gray-100 relative py-12 px-6 xl:px-0">
            <div class="flex w-full mx-auto max-w-1200">
                <div class="flex flex-col w-full">
                    <p class="rfs-text-xl video-text-left">
                        BMW is known for innovation and performance. Yet, their
                        financial services data warehouse couldn’t keep up when
                        it came to delivering for their customers. This video
                        shows Yellowbrick's CEO Neil Carson and BMW's Kasper
                        Sage discussing BMW Group Financial Services' analytics
                        challenges prior to partnering with Yellowbrick and how
                        their insights were then accelerated
                        <strong>by 152x;</strong> allowing the group to give
                        customers faster finance and leasing answers, finance
                        packages tailored for customers' unique needs, and
                        deliver a superior customer experience.
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
        title: "How Yellowbrick Acclerates BMW's Analytics",
        meta: [
            {
                key: "description",
                name: "description",
                content:
                    "Yellowbrick and BMW discuss BMW Group Financial Services' analytics challenges and how their insights were accelerated 152x with Yellowbrick.",
            },
            {
                key: "og:description",
                name: "og:description",
                content:
                    "Yellowbrick and BMW discuss BMW Group Financial Services' analytics challenges and how their insights were accelerated 152x with Yellowbrick.",
            },
            {
                key: "og:title",
                name: "og:title",
                content: "How Yellowbrick Acclerates BMW's Analytics",
            },
            {
                key: "twitter:description",
                name: "twitter:description",
                content:
                    "Yellowbrick and BMW discuss BMW Group Financial Services' analytics challenges and how their insights were accelerated 152x with Yellowbrick.",
            },
            {
                key: "twitter:title",
                name: "twitter:title",
                content: "How Yellowbrick Acclerates BMW's Analytics",
            },
        ],
    },
    methods: {
        toggleModal: function () {
            document
                .getElementById("full-video-modal")
                .setAttribute("style", "");
            setTimeout(() => {
                document
                    .getElementById("full-video-modal")
                    .classList.toggle("closed");
                if (
                    document
                        .getElementById("full-video-modal")
                        .classList.contains("closed")
                ) {
                    setTimeout(() => {
                        document
                            .getElementById("full-video-modal")
                            .setAttribute("style", "display:none;");
                    }, 300);
                }
            });
        },
    },
    components: {
        Layout,
        ModalDialog,
    },
};
</script>

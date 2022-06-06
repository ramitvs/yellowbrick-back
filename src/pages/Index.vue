<style scoped>
    @media only screen and (max-width: 600px) {
        .announcement-box a {
            margin: 0px 0 20px 0 !important;
        }

        .yellowbrickbtn button {
            padding-left: 10px !important;
            padding-right: 10px !important;
        }

        .hydrated.rw-badge2 {
            margin-top: 30px !important;
        }
    }
    .logo-images {
        height: 80px;
    }
    .home-reviews {
        background-image: url(/uploads/reviews.png);
        background-repeat: no-repeat;
        background-size: cover;
    }

    .hooper-slide {
        width: 100% !important;
    }

    .slidebg-transparent {
        background-color: #00000036;
        border-radius: 10px;
    }

    .yellowbrickbtn button:hover {
        color: #000;
        background: #ffffff;
        padding-left: 28px;
        padding-right: 28px;
    }

    .yellowbrickbtn button {
        padding-left: 28px;
        padding-right: 28px;
    }

    .hero {
        background-image: url("/uploads/images/train-tunnel.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position-x: center;
        background-position-y: 85%;
        &:before

    {
        content: "";
        background: linear-gradient(90deg, rgba(0, 0, 0, 0.95) 10%, rgba(0, 0, 0, 0) 100%);
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
    }

    &:after {
        content: "";
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        background-image: url("/uploads/images/brick-overlay.png");
        background-repeat: no-repeat;
        background-position-x: right;
        background-position-y: bottom;
    }

    }

    .arrow .yb-icon {
        transition: transform 213ms ease-in-out;
    }

    .arrow:hover .yb-icon {
        transform: translate(0.6rem, 2px);
    }

    .announcement-box .announcement-box__card {
        position: relative;
        overflow: hidden;
        z-index: 1;
        & .bg-container

    {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        overflow: hidden;
        transition: all 0.5s;
        z-index: -1;
    }

    &:hover {
        & .bg-container

    {
        transform: scale(1.2);
        filter: lighten(130%);
        opacity: 0.8;
    }

    }
    }

    .announcement-box .announcement-box__card.cant-wait .bg-container {
        background-image: url(/uploads/images/answers-bg.jpg);
    }

    .announcement-box a {
        margin: 20px;
        border: 0.5px solid #e5e5e5;
    }

    .announcement-box .arrow-only-white {
        flex-direction: row;
        position: relative;
        align-items: baseline;
        font-size: 1.25rem;
        font-weight: 400;
        --text-opacity: 1;
        color: #000;
        color: rgba(0, 0, 0, var(--text-opacity));
        transition: all 0.2s ease;
        &:after

    {
        display: flex;
        margin-left: 0.5rem;
        content: "";
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 30'%3E%3Cpath d='M47.2 13.2L34 .7c-1-1-2.6-.9-3.6.1s-.9 2.6.1 3.6l8.6 8.1H2.5C1.1 12.5 0 13.6 0 15s1.1 2.5 2.5 2.5h36.6l-8.6 8.1c-1 1-1.1 2.6-.1 3.6.5.5 1.2.8 1.8.8.6 0 1.3-.2 1.7-.7l13.2-12.5c.5-.5.8-1.1.8-1.8.1-.7-.2-1.4-.7-1.8z' fill='%231f292e'/%3E%3C/svg%3E");
        background-repeat: no-repeat;
        width: 20px;
        height: 12px;
        transform: translateX(0);
        transition: all 0.2s ease;
    }

    }

    .announcement-box .announcement-box__card:hover .arrow-only-white {
        &:after

    {
        transform: translateX(0.8rem);
    }

    }

    .diagonal-lines {
        background-image: url('/uploads/images/yellowbrick_diagonalLines-bg.svg');
        background-position-x: center;
        background-position-y: center;
    }

    .bullets-colored {
        list-style: none;
        padding: 0;
        margin-left: 0;
        & li::before

    {
        content: "•";
        margin-right: .3rem;
        @apply text-teal;
    }

    }

    .learnMore-grid {
        position: relative;
        margin: -12px;
        grid-template-rows: 350px 300px;
        grid-auto-rows: 350px 300px;
        background-image: url(/uploads/images/city-trail-rails.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position-x: center;
        background-position-y: center;
        &:before

    {
        content: "";
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 10%, rgba(0, 0, 0, 0.85) 100%);
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    }

    .learnMore-grid__item {
        &:hover

    {
        text-decoration: underline;
    }

    &:before {
        position: absolute;
        top: 0;
        left: 24px;
        content: "";
        display: block;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 11px 13px 0 13px;
        border-color: #ffffff transparent transparent transparent;
    }

    }

    .tm {
        display: inline-block;
        font-size: .5rem;
        padding: .2rem;
        transform: translateY(-.3rem);
    }

    .hooper-slide {
        flex-shrink: 0;
        height: 100%;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .hover-text:hover, .hover-text {
        padding: 10px;
    }

    .hooper-progress {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        height: 4px;
        background-color: #efefef;
    }

    .hooper-progress-inner {
        height: 100%;
        background-color: #4285f4;
        transition: 300ms;
    }

    .quote1 {
        font-size: 1.25rem;
    }

    .hooper-pagination {
        position: absolute;
        bottom: -30px;
        right: 50%;
        transform: translateX(50%);
        display: flex;
        padding: 5px 10px;
    }

    .hooper-indicators {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }


    .hooper-indicator:hover, .hooper-indicator.is-active {
        background-color: #ffcd32;
    }

    .hooper-indicator {
        margin: 0 2px;
        width: 12px;
        height: 4px;
        border-radius: 4px;
        border: none;
        padding: 0;
        background-color: #fff;
        cursor: pointer;
    }

    .hooper-slide.is-active.is-current {
        background: rgba(128,128,128,0.36078);
        border-radius: 10px;
    }

    .hooper-pagination.is-vertical {
        bottom: auto;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }

        .hooper-pagination.is-vertical .hooper-indicators {
            flex-direction: column;
        }

        .hooper-pagination.is-vertical .hooper-indicator {
            width: 6px;
        }

    .hooper-next,
    .hooper-prev {
        background-color: transparent;
        border: none;
        padding: 1em;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
    }

        .hooper-next.is-disabled,
        .hooper-prev.is-disabled {
            opacity: 0.3;
            cursor: not-allowed;
        }

    .hooper-next {
        right: 0;
    }

    .hooper-prev {
        left: 0;
    }

    .hooper-navigation.is-vertical .hooper-next {
        top: auto;
        bottom: 0;
        transform: initial;
    }

    .hooper-navigation.is-vertical .hooper-prev {
        top: 0;
        bottom: auto;
        right: 0;
        left: auto;
        transform: initial;
    }

    .hooper-navigation.is-rtl .hooper-prev {
        left: auto;
        right: 0;
    }

    .hooper-navigation.is-rtl .hooper-next {
        right: auto;
        left: 0;
    }

    .slide-prev,
    .slide-next {
        display: inline-block;
        height: 50px;
        transform: translateY(.2em);
        & svg

    {
        height: 100%;
        width: auto;
    }

    }

    .hooper {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 250px;
        height: min-content;
    }

        .hooper * {
            box-sizing: border-box;
        }

    .hooper-list {
        overflow: hidden;
        width: 100%;
        height: 100%;
    }

    .hooper-slide__image {
        max-height: 90px;
        margin-top: 5px;
        max-width: 190px;
    }

    .hooper-track {
        display: flex;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
    }

    .hooper.is-vertical .hooper-track {
        flex-direction: column;
        height: 200px;
    }

    .hooper.is-rtl {
        direction: rtl;
    }

    .hooper-sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
    }

    .slash-box-big {
        background-image: url("/uploads/images/bricks-overlay.png");
        background-repeat: no-repeat;
        background-position-x: right;
        background-position-y: bottom;
        background-size: contain;
    }

    .get-started {
        background-image: url("/uploads/images/bricks-with-yellow-overlay.png");
        background-repeat: no-repeat;
        background-position-x: right;
        background-position-y: bottom;
        background-size: contain;
    }

    .sub-title {
        padding-bottom: 20px;
    }

    .st0 {
        fill: #4B5458;
    }

    .st1 {
        fill: #FDBF14;
    }

    .hooper .rfs-text-base {
        margin-top: 5px;
        margin-bottom: 0px;
    }
</style>
<template>
    <Layout>
        <base-section :classNames="'hero flex pt-24 pb-12 md:pt-20 md:pb-10 px-5 xl:px-0'">
            <div class="w-full lg:w-5/6 z-10">
                <h3 class="rfs-text-4xl text-white sub-title mb-6 md:pt-16">
                    Run all your data anywhere. Across cloud and on-premises.<br>
                    <span class="text-yellow1">Yellowbrick Data Warehouse</span>
                </h3>
            </div>
            <div class="flex flex-col w-full md:max-w-1200 mx-auto lg:pt-6">
                <div class="z-10 relative lg:w-5/6">
                    <hooper ref="carousel" @slide="updateCarousel" :autoPlay="true" :playSpeed="10000">
                        <slide>
                            <a href="https://www.yellowbrick.com/replace/sap-iq?utm_source=click-from-homepage-hero-sap-iq ">
                                <div class="flex flex-col px-12 pt-12 slidebg-transparent">
                                    <div class="md:flex">
                                        <div class="w-100" style="padding-right: 20px;">
                                            <img src="/uploads/images/customers/white/iq1.jpg" class="hooper-slide__image sapiq-hero" />
                                        </div>
                                        <div class="w-4/5">
                                            <p class="rfs-text-lg mb-1 font-medium">
                                                Learn why the Yellowbrick Data Warehouse is the next step for SAP IQ End of Life.
                                            </p>
                                            <p class="rfs-text-lg mb-1 quote1">
                                                Trillions of rows load in minutes vs. hours. Queries run in seconds
                                            </p>
                                            <p class="rfs-text-base font-bold">Download the Whitepaper</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </slide>
                        <slide>
                            <a href="https://www.yellowbrick.com/netezza?utm_source=click-from-homepage-hero-to-netezza">
                                <div class="flex flex-col px-12 pt-12 slidebg-transparent">
                                    <div class="md:flex">
                                        <div class="w-100" style="padding-right: 20px;">
                                            <img src="/uploads/images/customers/white/nz1.jpg" class="hooper-slide__image netezza-hero" />
                                        </div>
                                        <div class="w-5/5">
                                            <p class="rfs-text-lg mb-1 font-medium">
                                                Learn why the Yellowbrick Data Warehouse delivers the optimal migration strategy for Netezza users.
                                            </p>
                                            <p class="rfs-text-lg mb-1 quote1">
                                                100x faster. 10x more scale. Millions in savings.
                                            </p>
                                            <p class="rfs-text-base font-bold">
                                                Download the eBook
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </slide>
                        <slide>
                            <div class="flex flex-col px-12 pt-12 slidebg-transparent">
                                <div class="md:flex">
                                    <div class="w-100" style="padding-right: 20px;">
                                        <img src="/uploads/images/customers/white/melco-new.png" class="hooper-slide__image" />
                                    </div>
                                    <div class="w-4/5">
                                        <p class="rfs-text-lg mb-1 quote1">
                                            “Yellowbrick allows us to tailor meaningful solutions for our
                                            clients and analyze preferences and behaviors across millions
                                            of data points in real time.”
                                        </p><p class="rfs-text-base font-bold">
                                            Jonathan Ozark, EVP Chief Strategy and Analytics
                                            Officer, Melco Resorts & Entertainment
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </slide>
                        <slide>
                            <div class="flex flex-col px-12 pt-12 slidebg-transparent">
                                <div class="md:flex">
                                    <div class="w-100" style="padding-right: 20px;">
                                        <img src="/uploads/images/customers/white/teoco.png" class="hooper-slide__image" />
                                    </div>
                                    <div class="w-4/5">
                                        <p class="rfs-text-lg mb-1 quote1">
                                            “The power of Yellowbrick, combined with our deep knowledge of
                                            the data and proprietary algorithms, will produce insights
                                            that were impossible before.”
                                        </p><p class="rfs-text-base font-bold">
                                            Atul Jain, Chairman & CEO
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </slide>
                        <slide>
                            <div class="flex flex-col px-12 pt-12 slidebg-transparent">
                                <div class="md:flex">
                                    <div class="w-100" style="padding-right: 20px;">
                                        <img src="/uploads/images/customers/white/lexisnexis.png" class="hooper-slide__image" />
                                    </div>
                                    <div class="w-4/5">
                                        <p class="rfs-text-lg mb-1 quote1">
                                            “Following extensive testing of data warehouses and
                                            Hadoop-based solutions, we found that Yellowbrick provided
                                            superior performance.”
                                        </p><p class="rfs-text-base font-bold">
                                            Matthias Baumhof, CTO
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </slide>
                        <slide>
                            <div class="flex flex-col px-12 pt-12 slidebg-transparent">
                                <div class="md:flex">
                                    <div class="w-100" style="padding-right: 20px;">
                                        <img src="/uploads/images/customers/white/symphony.png" class="hooper-slide__image" />
                                    </div>
                                    <div class="w-4/5">
                                        <p class="rfs-text-lg mb-1 quote1">
                                            “It’s a big benefit to customers—and a big win for us—when we
                                            tell them they’ll get 10X more data accuracy and 2X
                                            performance gain. Our largest data set is about 60TB, which
                                            Yellowbrick is handling with ease.”
                                        </p><p class="rfs-text-base font-bold">
                                            Nigel Pratt, SVP Development
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </slide>
                        <slide>
                            <div class="flex flex-col px-12 pt-12 slidebg-transparent">
                                <div class="md:flex">
                                    <div class="w-100" style="padding-right: 20px;">
                                        <img src="/uploads/images/customers/white/catalina.png" class="hooper-slide__image" />
                                    </div>
                                    <div class="w-4/5">
                                        <p class="rfs-text-lg mb-1 quote1">
                                            “Catalina’s partnership with Yellowbrick has significantly enhanced the
                                            performance of our on-premises data platform, enabling our teams to more
                                            efficiently deliver actionable insights and new data-driven solutions to our
                                            CPG, retail and agency partners.”
                                        </p><p class="rfs-text-base font-bold">
                                            Michael Bailey, CTO, Catalina
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </slide>
                        <hooper-pagination slot="hooper-addons"></hooper-pagination>
                    </hooper>
                    <br />
                    <div class="z-10 lg:pt-6 md:pb-6">
                        <div class="block sm:flex yellowbrickbtn">
                            <a @click="handleEvent('/why-yellowbrick/')" href="/why-yellowbrick/">
                                <button class="hover-text text-black px-10 rfs-text-lg bg-yellow1 mt-6">
                                    How Yellowbrick is Different
                                </button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>

        </base-section>


        <base-section>
            <h4 class="rfs-text-4xl mb-5 max-w-screen-md font-bold mt-0" style="padding-left:20px">
                In the News
            </h4>

            <div class="w-full flex flex-col md:flex-row announcement-box">
                <a @click="handleEvent('https://www.crn.com/slide-shows/cloud/the-coolest-data-warehouse-companies-of-the-2022-big-data-100/6')" href="https://www.crn.com/slide-shows/cloud/the-coolest-data-warehouse-companies-of-the-2022-big-data-100/6" target="_blank" class="banner-left flex flex-col w-full md:w-1/3 relative md:border-white">
                    <div class="flex flex-col w-full h-full justify-content-center announcement-box__card bmw-group">
                        <div class="max-w-xl w-full h-full">
                            <h4 class="leading-tight mb-0 w-full" :class="'text-black' || 'text-black'">
                                <img class=" w-full" src="/uploads/images/whats-new/crn-bigdata.jpg" />
                            </h4>
                            <div class="p-3 px-5">
                                <h5 class="leading-tight mb-0" style="text-transform:uppercase;font-weight:600" :class="'text-black' || 'text-black'">
                                   News
                                </h5>
                                <p class="font-normal" style="margin-top:5px">Yellowbrick named to CRN's Big Data 100 2022 and The Coolest Data Warehouse Companies Of The 2022 Big Data 100.</p>
                            </div>
                        </div>
                    </div>
                </a>
                <a @click="handleEvent($page.home.bannerLeft.url)" :href="$page.home.bannerLeft.url" class="banner-right flex flex-col w-full md:w-1/3 relative md:border-white">
                    <div class="flex flex-col w-full h-full justify-center md:align-center announcement-box__card bmw-group">
                        <div class="bg-container"></div>
                        <div class="max-w-xl w-full h-full">
                            <h4 class="leading-tight mb-0 w-full" :class="'text-black' || 'text-black'">
                                <img class=" w-full" :src="$page.home.bannerLeft.image.src" style="height:240px;" />
                            </h4>  <div class="p-3 px-5">
                                <h5 class="leading-tight mb-0" style="text-transform:uppercase;font-weight:600" :class="'text-black' || 'text-black'">
                                    {{ $page.home.bannerLeft.eyebrow }}
                                </h5>
                                <p class="font-normal" style="margin-top:5px">
                                    {{ $page.home.bannerLeft.title }}
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
                <a @click="handleEvent($page.home.bannerRight.url)" :href="$page.home.bannerRight.url" class="banner-right flex flex-col w-full md:w-1/3 relative  md:border-white">
                    <div class="flex flex-col w-full h-full justify-center md:align-center announcement-box__card bmw-group">
                        <div class="bg-container"></div>
                        <div class="max-w-xl w-full h-full">
                            <h4 class="leading-tight mb-0 w-full" :class="'text-black' || 'text-black'">
                                <img class=" w-full" :src="$page.home.bannerRight.image.src" style="height:240px;" />
                            </h4>
                            <div class="p-3 px-5">
                                <h5 class="leading-tight mb-0 text-black" style="text-transform:uppercase;font-weight:600">
                                    {{ $page.home.bannerRight.eyebrow }}
                                </h5>
                                <p class="font-normal" style="margin-top:5px">
                                    {{ $page.home.bannerRight.title }}
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </base-section>
        <base-section class="hidden">
            <div class="mx-auto">
                <h2 class="rfs-text-4xl mb-16 max-w-screen-md text-center mx-auto">
                    Get real-time analytics from all of your data, wherever it resides
                </h2>
                <img src="/uploads/DataLakeAugmentationInfographic.png" alt="Data lake augmentation infograpic" />
            </div>
        </base-section>

        <base-section class="bg-white">
            <div class="flex flex-col mx-auto md:flex-row my-6 md:my-10 w-full max-w-1000 items-center">
                <div class="w-full pb-16 md:pb-0 md:w-2/5">
                    <i class="block mx-auto w-full">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 76.15 64.54" style="enable-background:new 0 0 76.15 64.54;" xml:space="preserve">
                        <g>
                        <g>
                        <path class="st0" d="M73.48,23.86l-4.74,5.37c-0.55-5.36-2.51-10.57-5.67-14.93C58.26,7.68,51.15,3.32,43.04,2.03
			c-8.1-1.29-16.21,0.65-22.83,5.46c-4.37,3.17-7.83,7.45-10.01,12.36l2.29,1.01c2-4.51,5.18-8.44,9.19-11.35
			c6.08-4.42,13.53-6.2,20.97-5.01c7.44,1.18,13.97,5.18,18.39,11.27c2.89,3.98,4.68,8.74,5.2,13.63l-5.38-4.76l-1.66,1.87
			l8.57,7.58l7.58-8.57L73.48,23.86z" />
                        <path class="st0" d="M54.79,55.17c-6.08,4.42-13.53,6.2-20.97,5.01C26.37,59,19.84,55,15.43,48.92c-2.89-3.98-4.68-8.74-5.2-13.63
			l5.38,4.76l1.66-1.87l-8.57-7.58l-7.58,8.57l1.87,1.66l4.74-5.37c0.55,5.36,2.51,10.57,5.67,14.93
			c4.81,6.62,11.92,10.98,20.02,12.27c1.63,0.26,3.27,0.39,4.89,0.39c6.42,0,12.66-2.01,17.94-5.85c4.37-3.17,7.83-7.45,10.01-12.36
			l-2.29-1.01C61.98,48.33,58.8,52.26,54.79,55.17z" />
                </g>
                        <path class="st1" d="M47.49,38.32c0-4.02-2.29-6.52-7.9-8.64c-4.38-1.67-6.6-3-6.6-5.63c0-2.14,1.79-4.31,5.8-4.31
		c1.86,0,3.62,0.33,5.25,0.98l0.93-2.32c-1.75-0.7-3.63-1.07-5.59-1.13V11.7h-2.5v5.7c-4.37,0.7-6.39,3.77-6.39,6.66
		c0,4.83,4.74,6.64,8.21,7.97c5.23,1.97,6.29,3.87,6.29,6.3c0,2.78-2.63,5.65-7.04,5.65c-2.92,0-5.93-0.91-7.13-1.55l-1.18,2.21
		c1.49,0.79,4.4,1.63,7.24,1.8v5.73h2.5v-5.78C44.49,45.78,47.49,42,47.49,38.32z" />
              </g>
            </svg>
                    </i>
                </div>
                <div class="w-full md:w-3/5 mb-8 md:mb-0 md:ml-12">
                    <h3 class="rfs-text-4xl font-bold">Best economics</h3>
                    <p class="rfs-text-base font-medium mb-0">
                        Yellowbrick offers the best price/performance ratio you can get in a
                        data warehouse, speeding time to insight while slashing costs.
                    </p>
                    <ul class="bullets-colored rfs-text-base font-medium">
                        <li>100X performance at 1/5th the price​</li>
                        <li>1000s of concurrent users​</li>
                        <li>Adaptive architecture ensures best performance everywhere</li>
                    </ul>
                    <arrow-link-button class="rfs-text-base text-teal font-medium" title="performance" href="/performance/">Performance</arrow-link-button>
                </div>
            </div>

            <div class="flex flex-col mx-auto md:flex-row mb-6 md:mb-20 w-full max-w-1000 items-center">
                <div class="w-full order-last md:order-first md:w-3/5 mb-8 md:mb-0 md:mr-12">
                    <h3 class="rfs-text-4xl font-bold">Easy to adopt and manage</h3>
                    <p class="rfs-text-base font-medium mb-0">
                        Yellowbrick works with all your existing tools, and migrations are fast and easy from any legacy platform.
                    </p>
                    <ul class="bullets-colored rfs-text-base font-medium">
                        <li>ANSI SQL and PostgreSQL compatible</li>
                        <li>Most migrations complete in weeks</li>
                        <li>Simple, unified management across all deployments</li>
                    </ul>
                    <arrow-link-button class="rfs-text-base text-teal font-medium" title="migration" href="/blog/">Migration</arrow-link-button>
                </div>
                <div class="w-full pb-16 md:pb-0 flex items-center md:w-2/5">
                    <i class="block w-full" style="max-height: 400px">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 93.98 92" style="enable-background:new 0 0 93.98 92;" xml:space="preserve">
                        <g>
                        <path class="st1" d="M46.61,24.58c-12,0-21.76,9.76-21.76,21.76S34.61,68.1,46.61,68.1s21.76-9.76,21.76-21.76
		S58.61,24.58,46.61,24.58z M27.41,47.61h9.24c0.07,3.69,0.46,6.76,1.02,9.29h-7.15C28.73,54.19,27.63,51.02,27.41,47.61z
		 M36.65,45.11h-9.24c0.21-3.36,1.29-6.49,3.01-9.17h7.15C37.06,38.41,36.71,41.44,36.65,45.11z M40.13,35.94h12.93
		c0.53,2.4,0.91,5.41,0.98,9.17h-14.9C39.22,41.35,39.59,38.34,40.13,35.94z M39.15,47.61h14.89c-0.08,3.77-0.5,6.83-1.08,9.29
		H40.23C39.65,54.43,39.23,51.37,39.15,47.61z M56.54,47.61h9.27c-0.22,3.41-1.33,6.59-3.1,9.29h-7.18
		C56.08,54.37,56.47,51.29,56.54,47.61z M56.54,45.11c-0.07-3.67-0.41-6.7-0.92-9.17h7.17c1.73,2.68,2.8,5.8,3.01,9.17H56.54z
		 M60.87,33.44h-5.86c-0.66-2.31-1.44-4.02-2.16-5.3C55.96,29.21,58.71,31.05,60.87,33.44z M49.33,27.29
		c0.77,1.06,2.04,2.88,3.07,6.15H40.79c1.03-3.27,2.3-5.08,3.07-6.14c0.9-0.13,1.81-0.22,2.75-0.22
		C47.53,27.08,48.43,27.17,49.33,27.29z M40.33,28.15c-0.72,1.28-1.5,2.99-2.15,5.29h-5.83C34.5,31.06,37.23,29.22,40.33,28.15z
		 M32.48,59.4h5.82c0.66,2.22,1.42,3.9,2.11,5.17C37.35,63.52,34.64,61.72,32.48,59.4z M43.86,65.38c-0.68-0.97-1.9-2.82-2.94-5.99
		h11.34c-1.04,3.18-2.26,5.03-2.94,5.99c-0.89,0.13-1.79,0.21-2.71,0.21C45.67,65.6,44.76,65.51,43.86,65.38z M52.77,64.57
		c0.69-1.26,1.45-2.95,2.11-5.18h5.85C58.57,61.73,55.85,63.53,52.77,64.57z" />
                        <g>
                        <path class="st0" d="M45.35,15.59v5.8h2.5v-5.8c3.01-0.59,5.29-3.24,5.29-6.42c0-3.61-2.94-6.55-6.54-6.55
			c-3.61,0-6.55,2.94-6.55,6.55C40.06,12.35,42.34,15,45.35,15.59z M46.6,5.12c2.23,0,4.04,1.81,4.04,4.05s-1.81,4.05-4.04,4.05
			s-4.05-1.81-4.05-4.05S44.37,5.12,46.6,5.12z" />
                        <path class="st0" d="M20.32,26.6c1.28,0,2.56-0.37,3.66-1.12l4.1,4.1l1.77-1.77l-4.1-4.1c1.72-2.54,1.45-6.04-0.8-8.29
			c-2.55-2.55-6.71-2.55-9.26,0c-2.55,2.55-2.55,6.7,0,9.26C16.96,25.96,18.64,26.6,20.32,26.6z M17.46,17.2
			c0.79-0.79,1.83-1.18,2.86-1.18c1.04,0,2.07,0.39,2.86,1.18c1.58,1.58,1.58,4.14,0,5.72c-1.58,1.58-4.14,1.58-5.72,0
			C15.88,21.34,15.88,18.77,17.46,17.2z" />
                        <path class="st0" d="M15.85,47.59h5.8v-2.5h-5.8c-0.59-3.01-3.24-5.3-6.42-5.3c-3.61,0-6.55,2.94-6.55,6.55s2.94,6.55,6.55,6.55
			C12.61,52.89,15.27,50.61,15.85,47.59z M9.43,50.39c-2.23,0-4.05-1.81-4.05-4.05S7.2,42.3,9.43,42.3s4.04,1.81,4.04,4.05
			S11.66,50.39,9.43,50.39z" />
                        <path class="st0" d="M28.08,63.11l-4.1,4.1c-2.55-1.72-6.04-1.45-8.29,0.8c-2.55,2.55-2.55,6.7,0,9.26
			c1.28,1.28,2.95,1.91,4.63,1.91c1.68,0,3.35-0.64,4.63-1.91c1.24-1.24,1.92-2.88,1.92-4.63c0-1.32-0.39-2.59-1.12-3.66l4.1-4.1
			L28.08,63.11z M23.18,75.49c-1.58,1.58-4.14,1.58-5.72,0c-1.58-1.58-1.58-4.14,0-5.72c1.58-1.58,4.14-1.58,5.72,0
			c0.76,0.76,1.18,1.78,1.18,2.86S23.95,74.73,23.18,75.49z" />
                        <path class="st0" d="M47.86,77.09v-5.8h-2.5v5.8c-3.01,0.59-5.29,3.24-5.29,6.42c0,3.61,2.94,6.55,6.54,6.55
			c3.61,0,6.55-2.94,6.55-6.55C53.16,80.33,50.87,77.68,47.86,77.09z M46.61,87.56c-2.23,0-4.04-1.81-4.04-4.05s1.81-4.05,4.04-4.05
			s4.05,1.81,4.05,4.05S48.84,87.56,46.61,87.56z" />
                        <path class="st0" d="M69.24,67.2l-4.1-4.1l-1.77,1.77l4.1,4.1c-1.72,2.54-1.45,6.04,0.8,8.29c1.28,1.28,2.95,1.91,4.63,1.91
			c1.68,0,3.35-0.64,4.63-1.91c2.55-2.55,2.55-6.7,0-9.26C75.28,65.75,71.78,65.48,69.24,67.2z M75.76,75.49
			c-1.58,1.58-4.14,1.58-5.72,0c-1.58-1.58-1.58-4.14,0-5.72c1.58-1.58,4.14-1.58,5.72,0C77.34,71.34,77.34,73.91,75.76,75.49z" />
                        <path class="st0" d="M83.78,39.79c-3.18,0-5.84,2.28-6.42,5.3h-5.8v2.5h5.8c0.59,3.01,3.24,5.3,6.42,5.3
			c3.61,0,6.55-2.94,6.55-6.55S87.39,39.79,83.78,39.79z M83.78,50.38c-2.23,0-4.04-1.81-4.04-4.05s1.81-4.05,4.04-4.05
			s4.05,1.81,4.05,4.05S86.01,50.38,83.78,50.38z" />
                        <path class="st0" d="M65.14,29.57l4.1-4.1c1.1,0.74,2.38,1.12,3.66,1.12c1.68,0,3.35-0.64,4.63-1.91c2.55-2.55,2.55-6.7,0-9.26
			c-2.55-2.55-6.7-2.55-9.26,0c-1.24,1.24-1.92,2.88-1.92,4.63c0,1.32,0.39,2.59,1.12,3.66l-4.1,4.1L65.14,29.57z M70.03,17.19
			c0.79-0.79,1.83-1.18,2.86-1.18c1.04,0,2.07,0.39,2.86,1.18c1.58,1.58,1.58,4.14,0,5.72c-1.58,1.58-4.14,1.58-5.72,0
			c-0.76-0.76-1.18-1.78-1.18-2.86S69.27,17.95,70.03,17.19z" />
                </g>
              </g>
            </svg>

                    </i>
                </div>
            </div>

            <div class="flex flex-col mx-auto md:flex-row mb-6 md:mb-20 w-full max-w-1000 items-center">
                <div class="w-full pb-16 md:pb-0 flex items-center md:w-2/5">
                    <i class="block mx-auto w-full">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 76.35 70.06" style="enable-background:new 0 0 76.35 70.06;" xml:space="preserve">
                        <g>
                        <g>
                        <g>
                        <path class="st0" d="M49.77,67.47l-1.04-2.28c2.73-1.24,5.15-2.92,7.21-4.98c9.59-9.6,9.58-25.22-0.03-34.81
				c-4.65-4.64-10.82-7.19-17.39-7.19c-0.01,0-0.01,0-0.02,0c-6.57,0.01-12.75,2.57-17.4,7.22c-4.65,4.65-7.2,10.83-7.19,17.41
				c0,6.57,2.57,12.75,7.22,17.4c2.05,2.05,4.47,3.71,7.18,4.95l-1.04,2.27c-2.99-1.36-5.65-3.2-7.91-5.46
				c-5.12-5.12-7.95-11.92-7.96-19.16c-0.01-7.24,2.81-14.05,7.92-19.18s11.92-7.95,19.16-7.96c0.01,0,0.02,0,0.02,0
				c7.23,0,14.04,2.81,19.15,7.92C68.26,34.2,68.27,51.4,57.71,61.98C55.44,64.25,52.77,66.1,49.77,67.47z" />
                  </g>
                </g>
                        <g>
                        <polygon class="st1" points="59.51,35.98 54.67,34.68 74.48,23.25 73.23,21.08 53.46,32.5 54.74,27.72 52.32,27.07 49.93,36
			58.86,38.4 		" />
                        <polygon class="st1" points="17.51,49.21 22.35,50.51 2.54,61.94 3.79,64.11 23.56,52.7 22.28,57.48 24.69,58.12 27.09,49.19
			18.15,46.8 		" />
                        <polygon class="st1" points="74.5,61.91 54.73,50.49 59.51,49.21 58.86,46.8 49.93,49.19 52.32,58.12 54.74,57.48 53.44,52.64
			73.25,64.07 		" />
                        <polygon class="st1" points="22.28,27.72 23.57,32.55 3.77,21.12 2.52,23.28 22.29,34.7 17.51,35.98 18.15,38.4 27.09,36
			24.69,27.07 		" />
                        <polygon class="st1" points="45.05,22.87 43.28,21.1 39.74,24.64 39.74,1.77 37.24,1.77 37.24,24.6 33.74,21.1 31.97,22.87
			38.51,29.41 		" />
                        <path class="st1" d="M39.72,45.95c-3.49-1.33-5.26-2.38-5.26-4.4c0-1.64,1.4-3.3,4.52-3.3c1.49,0,2.91,0.26,4.21,0.79l0.93-2.32
			c-1.39-0.56-2.88-0.86-4.43-0.93v-4.35h-2.5v4.48c-3.44,0.65-5.23,3.15-5.23,5.63c0,4.11,3.97,5.63,6.87,6.74
			c4.18,1.58,5,3.01,5,4.95c0,2.16-2.07,4.4-5.54,4.4c-2.35,0-4.77-0.73-5.74-1.24l-1.18,2.21c1.01,0.54,3.28,1.31,5.81,1.49v4.47
			h2.5v-4.54c4.18-0.58,6.64-3.73,6.64-6.8C46.33,49.02,43.15,47.24,39.72,45.95z" />
                </g>
              </g>
            </svg>
                    </i>
                </div>
                <div class="w-full md:w-3/5 mb-8 md:mb-0 md:ml-12">
                    <h3 class="rfs-text-4xl font-bold">Predictable pricing</h3>
                    <p class="rfs-text-base font-medium mb-0">
                        You shouldn’t need an advanced math degree to predict the balance due
                        on your next bill. We make life simpler for your CFO!
                    </p>
                    <ul class="bullets-colored rfs-text-base font-medium">
                        <li>Fixed-rate subscriptions for any deployment</li>
                        <li>Standard, Enterprise, and Enterprise+ service plans</li>
                        <li>No hidden fees or quotas, ever</li>
                    </ul>
                    <arrow-link-button class="rfs-text-base text-teal font-medium" title="pricing" href="/pricing/">Pricing</arrow-link-button>
                </div>
            </div>
        </base-section>

        <base-section>
            <h3 class="rfs-text-4xl">Learn more about Yellowbrick</h3>
            <div class="learnMore-grid z-0 grid grid-cols-1 md:grid-cols-12">
                <a @click="handleEvent('/go/forrester-survey-whitepaper/')" href="/go/forrester-survey-whitepaper/" class="learnMore-grid__item relative z-10 flex flex-col justify-end text-white bg-transparent md:col-span-4 border-12 p-6 border-white">
                    <i>
                        <svg width="48" height="53" class="mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 456.16 503.31">
                            <defs>
                                <clipPath id="a" transform="translate(-27.92 -4.35)">
                                    <path fill="none" d="M27.92 4.34h456.16v503.31H27.92z" />
                                </clipPath>
                            </defs>
                            <g clip-path="url(#a)">
                                <path fill="#ffcd31"
                                      d="M142.29 302.91a7.87 7.87 0 00-9.32 6.07 127.82 127.82 0 005.17 75.35 7.93 7.93 0 0010.22 4.32 7.79 7.79 0 004.3-4.21 7.9 7.9 0 000-6 112.44 112.44 0 01-4.35-66.21 7.86 7.86 0 00-6.07-9.31m14.97-23.77a7.86 7.86 0 11-7.86-7.86 7.86 7.86 0 017.86 7.86" />
                                <path fill="#fff"
                                      d="M360.02 275.65c-2.46.86-54.09 19.65-82.06 62a123 123 0 0111.26 11.69c19.09-31.17 54.17-49.39 69.09-56 6.27 17 19.63 61.94 3.23 100.32-10.56 24.65-31.63 42.48-49.84 54.1a174.3 174.3 0 01-5.34 21.46c21.93-11.69 54.52-34.07 69.64-69.37 23.4-54.72-5-117.45-6.22-120.09a7.83 7.83 0 00-9.76-4.12M78.08 440.65a7.83 7.83 0 00.84 11.08 7.6 7.6 0 005.16 1.92 7.83 7.83 0 007.83-7c-2-2.75-4-5.56-5.79-8.41a7.87 7.87 0 00-8 2.41m275.25 19.11q-5.11 5.74-10.72 11.06a8 8 0 004.47 1.44 7.68 7.68 0 004.23-1.26 7.86 7.86 0 002.32-10.86c-.09-.14-.21-.24-.3-.38m-250.56.37c-.06.09-.15.16-.2.25a7.78 7.78 0 00-1.08 5.92 7.9 7.9 0 003.43 4.93 8.14 8.14 0 004.25 1.26 7.9 7.9 0 004.31-1.35c-3.72-3.54-7.32-7.19-10.71-11m267.13-22.11q-2.68 4.11-5.59 8.11a7.86 7.86 0 105.59-8.11" />
                                <path fill="#ffcd31"
                                      d="M253.59 484.94a173.38 173.38 0 01-26 2.59 138.5 138.5 0 01-20.84-1.62c-51-9.57-97.76-52.51-111.16-102.11-17.82-65.85 14-131.72 43.75-175.37 53.27-78.12 77.79-137.86 88.54-170.78 10.8 32.89 35.41 92.65 88.72 170.77a331.61 331.61 0 0130.81 55.38c4.14-1.79 6.83-2.77 7.35-3a23.21 23.21 0 017.92-1.3 345.31 345.31 0 00-33.1-60c-79.42-116.37-93.87-192.34-94-193.1a7.86 7.86 0 00-15.47 0c-.14.77-14.37 76.74-93.8 193.09C94.65 245.89 61 316.21 80.37 387.83c15.15 56 65.9 102.71 123.45 113.46a148.63 148.63 0 0050.32-.41 149.09 149.09 0 0021.31-6.11 26.41 26.41 0 01-3.3-.92 139.74 139.74 0 01-18.56-9" />
                                <path fill="#fff"
                                      d="M279.51 448.34l-8.73-26.19a7.868 7.868 0 10-14.92 5l9.41 28.24c-13.59-8.3-31.35-22.38-39.66-42.78-10.86-26.66-3.06-57.73 1.55-71.69 12.88 6.35 39.54 22.17 50.31 48.63 8.21 20.2 5.74 42.93 2 58.83M225.44 322.9a7.86 7.86 0 00-9.94 4.21c-.88 2-21.43 49.71-4.46 91.4s64.57 59.92 66.6 60.67a7.91 7.91 0 009.93-4.21c.88-2 21.44-49.7 4.46-91.4s-64.58-59.92-66.59-60.67M173.18 68.01a7.86 7.86 0 11-7.86-7.86 7.87 7.87 0 017.86 7.86m-29.37 11.05a7.87 7.87 0 11-7.86-7.86 7.85 7.85 0 017.86 7.86m-27.47 15.13a7.86 7.86 0 11-7.86-7.86 7.86 7.86 0 017.86 7.86M91.28 113.1a7.86 7.86 0 11-7.86-7.86 7.86 7.86 0 017.86 7.86m-22.2 22.27a7.86 7.86 0 11-7.86-7.86 7.86 7.86 0 017.86 7.86m-18.73 25.16a7.86 7.86 0 11-7.86-7.88 7.88 7.88 0 017.86 7.86m-15.01 27.61a7.86 7.86 0 11-7.86-7.86 7.85 7.85 0 017.86 7.86m-10.9 29.45a7.86 7.86 0 11-7.85-7.86 7.85 7.85 0 017.85 7.86m-6.58 30.72a7.86 7.86 0 11-7.86-7.86 7.88 7.88 0 017.86 7.86m-2.15 31.36a7.86 7.86 0 11-7.85-7.87 7.85 7.85 0 017.85 7.87m2.28 31.27a7.86 7.86 0 11-7.86-7.87 7.85 7.85 0 017.86 7.87m6.69 30.67a7.86 7.86 0 11-7.86-7.86 7.86 7.86 0 017.86 7.86M35.73 371a7.87 7.87 0 11-7.86-7.87 7.87 7.87 0 017.86 7.87m15.09 27.49a7.87 7.87 0 11-7.87-7.84 7.88 7.88 0 017.87 7.86m18.86 25.07a7.87 7.87 0 11-7.86-7.87 7.87 7.87 0 017.86 7.87M298.7 68.01a7.86 7.86 0 11-7.86-7.86 7.88 7.88 0 017.86 7.86m29.38 11.05a7.86 7.86 0 11-7.86-7.86 7.86 7.86 0 017.86 7.86m27.47 15.13a7.87 7.87 0 11-7.87-7.86 7.86 7.86 0 017.87 7.86m25.05 18.91a7.86 7.86 0 11-7.86-7.86 7.85 7.85 0 017.86 7.86m22.15 22.27a7.86 7.86 0 11-7.85-7.86 7.87 7.87 0 017.85 7.86m18.79 25.16a7.87 7.87 0 11-7.87-7.86 7.88 7.88 0 017.87 7.86m15.01 27.59a7.87 7.87 0 11-7.87-7.86 7.86 7.86 0 017.87 7.86m10.89 29.45a7.86 7.86 0 11-7.87-7.86 7.86 7.86 0 017.87 7.86m6.64 30.72a7.87 7.87 0 11-7.87-7.86 7.88 7.88 0 017.87 7.86m2.08 31.36a7.86 7.86 0 11-7.86-7.87 7.86 7.86 0 017.86 7.87m-2.27 31.27a7.86 7.86 0 11-7.81-7.87 7.85 7.85 0 017.86 7.87m-6.73 30.67a7.87 7.87 0 11-7.87-7.86 7.88 7.88 0 017.87 7.86M436.16 371a7.87 7.87 0 11-7.86-7.87 7.86 7.86 0 017.86 7.87m-15.08 27.49a7.87 7.87 0 11-7.87-7.86 7.88 7.88 0 017.87 7.86m-18.87 25.09a7.86 7.86 0 11-7.86-7.87 7.86 7.86 0 017.86 7.87" />
                            </g>
                        </svg>
                    </i>
                    <h3 class="rfs-text-xl uppercase mb-0">Report</h3>
                    <p class="rfs-text-lg h-14">
                        Read about Yellowbrick in The Forrester Wave<sup class="tm">TM</sup>
                    </p>
                </a>
                <a @click="handleEvent('/test-drive/')" href="/test-drive/" class="learnMore-grid__item relative z-10 flex flex-col justify-end text-white bg-transparent md:col-span-8 border-12 p-6 border-white">
                    <i>
                        <svg width="48" height="53" class="mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256.34 288.37">
                            <defs>
                                <clipPath id="a" transform="translate(-127.16 -114.39)">
                                    <path fill="none" d="M6.64 49.5h498.71v413H6.64z" />
                                </clipPath>
                            </defs>
                            <path fill="#fbbe18" d="M242.9 138.2h10.32v74.26H242.9zm-54.72-53.89h10.32v128.15h-10.32zM133.44 0h10.33v212.45h-10.33zM78.72 84.31h10.32v128.15H78.72z" />
                            <g clip-path="url(#a)">
                                <path fill="#fff"
                                      d="M147.19 288.38C66.03 288.38 0 222.38 0 141.19A147.63 147.63 0 0196.84 2.89l3.53 9.69a137.31 137.31 0 00-90 128.61c0 75.47 61.39 136.87 136.86 136.87a137.14 137.14 0 00101.5-45.11l7.65 6.93a147.46 147.46 0 01-109.15 48.5" />
                            </g>
                        </svg>
                    </i>
                    <h3 class="rfs-text-xl uppercase mb-0">Test drive</h3>
                    <p class="rfs-text-lg h-14">
                        Try Yellowbrick Data Warehouse at no charge for 7 days
                    </p>
                </a>

                <a @click="handleEvent('/go/distributed-cloud-whitepaper/')" href="/go/distributed-cloud-whitepaper/" class="learnMore-grid__item relative z-10 flex flex-col justify-end text-white bg-transparent md:col-span-5 border-12 p-6 border-white">
                    <i>
                        <svg width="48" height="53" class="mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 382.52 486.82">
                            <defs>
                                <clipPath id="a" transform="translate(-64.74 -12.59)">
                                    <path fill="none" d="M64.74 12.59h382.52v486.82H64.74z" />
                                </clipPath>
                            </defs>
                            <g clip-path="url(#a)">
                                <path fill="#ffcd31"
                                      d="M21.64 39.09a17.44 17.44 0 0117.42-17.45h201.5v81.19a39.14 39.14 0 0039.1 39.08h81.2v305.82a17.46 17.46 0 01-17.43 17.46H39.06a17.45 17.45 0 01-17.42-17.46zm240.62-2.18l83.34 83.36h-65.94a17.46 17.46 0 01-17.4-17.44zM39.06 486.82h304.37a39.13 39.13 0 0039.09-39.09V131.07a11.58 11.58 0 00-.21-2 10.75 10.75 0 00-1-2.74 3.61 3.61 0 01-.22-.44 11.47 11.47 0 00-1.91-2.52L259.03 3.15a5.6 5.6 0 00-.49-.36 11.89 11.89 0 00-1.59-1.21l-1-.53a11.21 11.21 0 00-2-.69c-.38-.09-.75-.15-1.14-.21a10 10 0 00-1.5-.15H39.06A39.12 39.12 0 000 39.09v408.64a39.11 39.11 0 0039.06 39.09" />
                                <path fill="#fff"
                                      d="M88.38 127.63h102.88a10.82 10.82 0 000-21.64H88.38a10.82 10.82 0 000 21.64m165.41 81.78h40.32a10.82 10.82 0 100-21.63h-40.32a10.82 10.82 0 000 21.63m-165.41 0h133.53a10.82 10.82 0 100-21.63H88.38a10.82 10.82 0 000 21.63m68.6 75.27a10.84 10.84 0 0010.81 10.83h126.32a10.83 10.83 0 000-21.65H167.79a10.82 10.82 0 00-10.81 10.82m-68.6 10.83h45.16a10.83 10.83 0 000-21.65H88.38a10.83 10.83 0 000 21.65m205.73 63.68h-51.46a10.82 10.82 0 000 21.63h51.46a10.82 10.82 0 100-21.63M88.38 380.83h119.09a10.82 10.82 0 100-21.63H88.38a10.82 10.82 0 000 21.63" />
                            </g>
                        </svg>
                    </i>
                    <h3 class="rfs-text-xl uppercase mb-0">White paper</h3>
                    <p class="rfs-text-lg h-14">
                        Learn how Yellowbrick is bringing data warehousing to distributed clouds
                    </p>
                </a>
                <a @click="handleEvent('/resources/#podcasts')" href="/resources/#podcasts" class="learnMore-grid__item relative z-10 flex flex-col justify-end text-white bg-transparent md:col-span-3 border-12 p-6 border-white">
                    <i>
                        <svg width="48" height="53" class="mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 303.63 501.18">
                            <defs>
                                <clipPath id="a" transform="translate(-104.99 -5.63)">
                                    <path fill="none" d="M104.99 5.64h303.63v501.18H104.99z" />
                                </clipPath>
                            </defs>
                            <g clip-path="url(#a)">
                                <path fill="#fff" d="M192.01 32.37a112.45 112.45 0 0165.48 66.23 16.71 16.71 0 0031.33-11.52 146.05 146.05 0 00-84.87-86 16.745 16.745 0 00-11.94 31.29" />
                                <path fill="#ffcd31"
                                      d="M91.01 134.86a58.46 58.46 0 0158.1-58.05h5.47a58.46 58.46 0 0158.08 58.05v137.81a58.48 58.48 0 01-58.08 58h-5.47a58.48 58.48 0 01-58.08-58zm58.1 229.16h5.47a91.87 91.87 0 0091.49-91.35V134.86a91.89 91.89 0 00-91.49-91.49h-5.47a91.89 91.89 0 00-91.49 91.47v137.83a91.88 91.88 0 0091.49 91.35" />
                                <path fill="#fff"
                                      d="M286.92 210.28a16.69 16.69 0 00-16.7 16.71v48.67a118.45 118.45 0 11-236.82 0v-48.67a16.7 16.7 0 10-33.4 0v48.67a152 152 0 00135.14 150.93v57.89a16.71 16.71 0 0033.42 0v-57.89a152 152 0 00135.07-150.93v-48.67a16.72 16.72 0 00-16.71-16.71" />
                            </g>
                        </svg>
                    </i>
                    <h3 class="rfs-text-xl uppercase mb-0">Podcast</h3>
                    <p class="rfs-text-lg h-14">Learn about the latest industry trends</p>
                </a>
                <a @click="handleEvent('/go/modernize-your-data-warehouse/')" href="/go/modernize-your-data-warehouse/" class="learnMore-grid__item relative z-10 flex flex-col justify-end text-white bg-transparent md:col-span-4 border-12 p-6 border-white">
                    <i>
                        <svg width="48" height="53" class="mb-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 385.61 497.4">
                            <defs>
                                <clipPath id="a" transform="translate(-64 -7.44)">
                                    <path fill="none" d="M63.99 7.44H449.6v497.4H63.99z" />
                                </clipPath>
                            </defs>
                            <g clip-path="url(#a)">
                                <path fill="#fff" d="M203.58 457.77A10.79 10.79 0 11192.81 447a10.74 10.74 0 0110.77 10.77m0-418.07a10.79 10.79 0 11-10.77-10.78 10.78 10.78 0 0110.77 10.78" />
                                <path fill="#ffcd31"
                                      d="M349.59 482.95H36.32a21.67 21.67 0 01-22.14-21.63v-28.76h357v28.8a21.64 21.64 0 01-21.63 21.63m0-482.95H36.32a36.06 36.06 0 00-36 36.07v360.32h14.75V36.07a21.64 21.64 0 0121.25-21.63h313.27a21.62 21.62 0 0121.63 21.63v382H0v43.27a36.11 36.11 0 0036.32 36.07h313.27a36.07 36.07 0 0036-36.07V36.07a36.07 36.07 0 00-36-36.07" />
                                <path fill="#fff"
                                      d="M120 131.4h77.44a8.15 8.15 0 100-16.3H120a8.15 8.15 0 000 16.3m124.53 61.57h30.37a8.15 8.15 0 000-16.29h-30.42a8.15 8.15 0 000 16.29m-124.53 0h100.54a8.15 8.15 0 000-16.29H120a8.15 8.15 0 000 16.29m51.64 56.68a8.16 8.16 0 008.14 8.14h95.12a8.15 8.15 0 000-16.29h-95.17a8.15 8.15 0 00-8.14 8.15M120 257.79h34a8.15 8.15 0 100-16.29h-34a8.15 8.15 0 000 16.29m154.9 47.95h-38.8a8.15 8.15 0 000 16.29h38.75a8.15 8.15 0 000-16.29M120 322.03h89.67a8.15 8.15 0 000-16.29H120a8.15 8.15 0 000 16.29" />
                            </g>
                        </svg>
                    </i>
                    <h3 class="rfs-text-xl uppercase mb-0">Ebook</h3>
                    <p class="rfs-text-lg h-14">
                        Get an overview of how Yellowbrick modernizes your data warehouse for faster, deeper insights
                    </p>
                </a>
            </div>

        </base-section>
        <base-section>
            <h3 class="rfs-text-4xl mb-5 mx-auto justify-center py-0 mt-0">
                Yellowbrick helps enterprises innovate and thrive
            </h3>
            <div class="flex flex-row flex-wrap -mx-8 p-8">
                <div class="flex w-full xs:w-1/2 md:w-1/3 lg:w-1/4 p-6 sm:px-4 md:px-8" v-for="logo in $page.pages.logo" :key="logo.name">
                    <img class="w-3/4 mx-auto xs:w-full sm:w-3/4 self-start logo-images" :src="logo.photo" :alt="logo.name " :title="logo.name " />
                </div>
            </div>
        </base-section>
        <base-section :classNames="' home-reviews flex pt-2 pb-12 md:pt-12 md:pb-20 px-5 xl:px-0'">
            <div class="flex flex-col max-w-1200 w-full mx-auto">
                <div class="flex flex-col md:flex-row">
                    <div class="w-full lg:w-1/2 z-10  md:pl-10 md:pr-4 my-auto">
                        <h3 class="review-title rfs-text-6xl text-black sub-title mb-6  my-auto" style="width: 440px; border-bottom: 20px solid #ffcd32; ">
                            Yellowbrick is top rated in customer reviews
                        </h3>
                    </div>
                    <div class="w-full lg:w-1/2 z-10 md:pb-0">
                        <template>
                            <div>
                                <ClientOnly>
                                    <VueScriptComponent script='<style>

                                    @media screen and (min-width: 728px) and (max-device-width: 912px) {
                                    div#gartner-pi-widget-MDM5NDZjOWEtMWY1Yi00NDNjLWFkZWItMTY0YTBjNGQzNjBk {
                                    width: 100% !important;
                                    height: 180px !important;
                                    }

                                    .background-square, .background-square1 {
                                    width: auto !important;
                                    float: none !important;
                                    }
                                    .hydrated.rw-badge2 {
                                    width: auto !important;
                                    }
                                    }
                                    .gartner-pi-link:hover {
                                    background-image: none !important;
                                    }
                                    .gartner-pi-reviews-link {
                                    display:none;
                                    }
                                    .hs-input {
                                    max-width: 300px !important;
                                    border: 1px solid #dedede;
                                    height: 40px;
                                    background: #80808017;
                                    }
                                        .cky-footer-wrapper div:last-child {
                                            display: none !important;
                                        }
                                    .blog a:not(.gartner-pi-link) {
                                    border-bottom: 0px !important;
                                    color: none!important;
                                    background-position: none !important;
                                    }
                                    .gartner-pi-link {
                                    background-image: none !important;
                                    }
                                    .hbspt-form form {
                                    display: flex;
                                    }
                                    .custom-hbst {
                                    background-color: #ffcd32;
                                    padding-top: 6px;
                                    padding-bottom: 7px;
                                    padding-left: 6px;
                                    padding-right: 6px;
                                    }

                                    .hydrated.rw-badge2 {
                                    position: inherit;
                                    width: 400px;
                                    }
                                    .hbspt-form {
                                    width:300px;
                                    }
                                    .hydrated.rw-badge2 .container {
                                    border-radius: 0px;
                                    box-shadow: 1px solid white;
                                    margin: 0px;
                                    }
                                    ul.no-list.hs-error-msgs.inputs-list {
                                    width: 100%;
                                    list-style-type: none;
                                    padding-left: 0;
                                    padding-top: 4px;
                                    color: red;
                                    }
                                    div#gartner-pi-widget-MDM5NDZjOWEtMWY1Yi00NDNjLWFkZWItMTY0YTBjNGQzNjBk {
                                    width: 350px;
                                    height:180px;
                                    }
                                        @media screen and (min-width: 768px) and (max-device-width: 912px) {
                                            .background-square1 {
                                                margin-right: 0 !important;
                                            }
                                        }
                                    @media only screen and (max-width: 768px) {
                                    .background-square1 {
                                    margin-right: 0px!important;
                                    height: 200px;
                                    }
                                    div#gartner-pi-widget-MDM5NDZjOWEtMWY1Yi00NDNjLWFkZWItMTY0YTBjNGQzNjBk {
                                    width: 100%;
                                    }

                                    .review-title {
                                    width: auto !important;
                                    }

                                    .background-square, .background-square1 {
                                    width: auto !important;
                                    float: none !important;
                                    }
                                    .customer_logos {
                                    padding: 10px !important;
                                    }
                                    .home-reviews h3 {
                                    padding:0px!important;}
                                    .hydrated.rw-badge2 {
                                    width: auto !important;
                                    }
                                    .hbspt-form {
                                    width: auto !important;
                                    }
                                    }
                                    ul.no-list.hs-error-msgs.inputs-list li {
                                    width: 100%;
                                    }
                                    .reviews-num {
                                    display:none;
                                    }
                                    .container {
                                    position: relative;
                                    border-width: 1px;
                                    border-style: solid;
                                    border-radius: 0px;
                                    box-shadow: 1px solid white;
                                    margin: 0px;
                                    }

                                    .hydrated.rw-badge2 {
                                    width: 350px;
                                    }
                                    .hs_error_rollup {
                                    position: absolute;
                                    width: 100%;
                                    }
                                    .background-square, .background-square1 {
                                    width: 405px;
                                    float: right;

                                    }
                                    .background-square1 {
                                    background-color: white;
                                    margin-top: 50px;
                                    border: 1px solid #dedede;
                                    padding: 18px;
                                    width: 350px;
                                    margin-right: 55px;
                                    }
                                    .input input {
                                    position: relative;
                                    z-index: 9;
                                    }
                                    label.hs-main-font-element {
                                    display: none;
                                    }

                                    .gartner-pi-card .gartner-pi-as-of-date {
                                    -webkit-transform: inherit !important;
                                    }
                                    .g2-pi-header h6 {
                                    font-size: 13px;
                                    letter-spacing: .3px;
                                    line-height: normal;
                                    margin: 0 0 35px;
                                    font-weight: 300;
                                    }
                                    .g2-pi-header h5 {
                                    font-size: 22px;
                                    margin: 20px 0 3px 0;
                                    line-height: normal;
                                    font-weight: 500;
                                    }
                                    .star {
                                    font-size: 24px;
                                    color: #f2c71a;
                                    }
                                    .value {
                                    font-size: 1.5em;
                                    font-weight: 500;
                                    margin-right: 8px;
                                    }
                                    .widget.container .rating.star {
                                    font-size: 24px;
                                    color: #f2c71a;
                                    }

                                    .widget.container .rating.value {
                                    font-size: 1.5em;
                                    font-weight: 500;
                                    margin-right: 8px;
                                    }
                                        .rating_number {
                                            margin-left: 10px;
                                            margin-right: 8px;
                                            font-family: Roboto;
                                            font-weight: 400;
                                            font-size: 24px;
                                        }

                                        .gartner-pi-star-rating1 {
                                            display: inline-block;
                                            background: url(/uploads/stars.png) repeat-x 0 0;
                                            margin-top: -14px;
                                            height: 20px;
                                            width: 100px;
                                            background-size: 20px;
                                        }

                                        .gartner-pi-star-rating-score1 {
                                            display: inline-block;
                                            background: url(/uploads/stars.png) repeat-x 0 -16px;
                                            height: 20px;
                                            background-size: 20px;
                                            background-position: 0 -20px;
                                        }
                                    </style>' />
                                    <VueScriptComponent script='<script type="application/javascript"
                                    src="https://www.gartner.com/reviews/public/Widget/js/widget.js">
                                    </script>
                                    <script type="application/javascript">
                                    GartnerPI_Widget({
                                    size: "small",
                                    theme: "light",
                                    sourcingLink: "https://gtnr.io/FlyPtAx1l",
                                    widget_id: "MDM5NDZjOWEtMWY1Yi00NDNjLWFkZWItMTY0YTBjNGQzNjBk",
                                    version: "2",
                                    container: document.getElementById("widget-container"),
                                    })
                                    </script>' />
                                    <br />

                                    <div class="background-square">
                                    <div id="widget-container"></div>
                                    </div>
                                    <div class="background-square1">
                                    <div><img style="float:right" src="/uploads/logo-g2crowd.png" /></div>
                                    <a target="_blank" href="https://www.g2.com/products/yellowbrick-data-yellowbrick/reviews?utm_source=review-widget">
                                        <div class="g2-pi-card">
                                            <div class="g2-pi-header">
                                                <h5>Yellowbrick</h5>
                                                <h6>The data warehouse for distributed clouds</h6>
                                            </div>
                                        </div>
                                        <div class="g2_widget"><span class="rating_number">4.9</span><span class="stars"><span class="gartner-pi-star-rating1"><span class="gartner-pi-star-rating-score1" style="width: 96%;"></span></span></span></div>
                                    </a>
                                    <div style="color: #4b6cc9; float:right;font-size: 14px; font-weight: 500; position: relative; margin-top: -25px;" ><a target="_blank" href="https://www.g2.com/products/yellowbrick-data-yellowbrick/reviews?utm_source=review-widget">Submit a review <span style="display: inline-block;"><img src="/uploads/right.png"></span></a></div>
                                    </div>
                                </ClientOnly>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </base-section>
        <base-section class="get-started bg-gray-100">
            <h3 class="rfs-text-4xl mb-3 md:mb-6">Get started with Yellowbrick</h3>
            <div class="flex flex-col md:flex-row">
                <ul class="w-full md:w-1/4 list-none m-0 md:mr-6 p-0 rfs-text-3xl">
                    <li>
                        <arrow-link-button class="rfs-text-3xl" @click="handleEvent('/go/book-a-demo/')" href="/go/book-a-demo/">Demos</arrow-link-button>
                    </li>
                    <li>
                        <arrow-link-button class="rfs-text-3xl" @click="handleEvent('/test-drive')" href="/test-drive/">Test Drive</arrow-link-button>
                    </li>
                    <li>
                        <arrow-link-button class="rfs-text-3xl" @click="handleEvent('/resources/webcasts/')" href="/resources/webcasts/">Webinars</arrow-link-button>
                    </li>
                </ul>
                <div class="w-full md:w-3/4">
                    <h3 class="rfs-text-3xl">
                        Join us for a Yellowbrick demos and webinars!
                    </h3>
                    <p class="rfs-text-base mb-6">
                        Learn how to easily and securely analyze billions of rows of data,
                        with sub-second query response. Join our monthly demos with experts
                        who share Yellowbrick features and answer your questions live.
                    </p>
                    <h3 class="rfs-text-3xl">You’ll learn how Yellowbrick enables:</h3>
                    <ul>
                        <li>Real-time analytics</li>
                        <li>Data lake analytics</li>
                        <li>Data warehouse modernization</li>
                        <li>Analytics across distributed data clouds</li>
                    </ul>
                </div>
            </div>
        </base-section>
       
    </Layout>
</template>
<script src="https://unpkg.com/vue-star-rating/dist/VueStarRating.umd.min.js"></script>
<script>
    import IconArrowRight from "~/components/icons/IconArrowRight.vue";
    import BaseSection from "../components/BaseSection.vue";
    import Carousel from "../components/Carousel.vue";

    import {
        Hooper,
        Slide,
        Navigation as HooperNavigation,
        Pagination as HooperPagination
    } from "hooper";
    import ArrowLinkButton from '../components/buttons/arrowLinkButton.vue';

    export default {
        metaInfo: {
            titleTemplate: "Data Warehouse for Distributed Data Cloud - Yellowbrick",
            meta: [{
                key: "description",
                name: "description",
                content: "Yellowbrick shatters ceilings on data warehouse price/performance across private, public, hybrid, and distributed data cloud. Query real-time and at-rest data immediately at lightning speed, at a fraction of the cost of alternatives.",
            },
            {
                key: "og:description",
                name: "og:description",
                content: "Yellowbrick shatters ceilings on data warehouse price/performance across private, public, hybrid, and distributed data cloud. Query real-time and at-rest data immediately at lightning speed, at a fraction of the cost of alternatives.",
            },
            {
                key: "og:title",
                name: "og:title",
                content: "Data Warehouse for Distributed Data Cloud - Yellowbrick",
            },
            {
                key: "twitter:description",
                name: "twitter:description",
                content: "Yellowbrick shatters ceilings on data warehouse price/performance across private, public, hybrid, and distributed data cloud. Query real-time and at-rest data immediately at lightning speed, at a fraction of the cost of alternatives.",
            },
            {
                key: "twitter:title",
                name: "twitter:title",
                content: "Data Warehouse for Distributed Data Cloud - Yellowbrick",
            },
            {
                key: "facebook-domain-verification",
                name: "facebook-domain-verification",
                content: "k6dcmb8s043dr7rtdbnb7r8kpejdw2"
            }
            ],
        },
        methods: {},
        components: {
            ArrowLinkButton,
            IconArrowRight,
            BaseSection,
            Hooper,
            Slide,
            HooperNavigation,
            HooperPagination,
            VueScriptComponent: () =>
                import('vue-script-component'),
        },
        data() {
            return {
                carouselData: 0,
                showHero: false,
                heroImageUrl: null,
            };
        },
        watch: {
            carouselData() {
                this.$refs.carousel.slideTo(this.carouselData);
            },
        },
        methods: {
            handleEvent(open) {
                //window.location.href = open;
            },
            slidePrev() {
                this.$refs.carousel.slidePrev();
            },
            slideNext() {
                this.$refs.carousel.slideNext();
            },
            updateCarousel(payload) {
                this.myCarouselData = payload.currentSlide;
            },
        },
    };
</script>

<page-query>
    query Page {
    home: pages(path: "/data/pages/home") {
    bannerLeft {
    eyebrow
    eyebrowColor
    title
    titleColor
    url
    image
    }
    bannerRight {
    eyebrow
    eyebrowColor
    title
    titleColor
    url
    image
    }
    }
    pages(path: "/data/pages/client") {
    logo {
    name
    position
    photo
    }
    }
    }
</page-query>

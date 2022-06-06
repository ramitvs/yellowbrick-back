<style scoped>
.brighter-teal {
    color: #00c3d7;
}
    .author-twitter {
        margin-top: 10px;
    }

    .social {
        float: left;
        float: left;
        padding: 10px 20px 10px 0px;
        border-bottom: none !important;
    }

        .social:hover {
            background-image: none !important;
            background-size: 0 !important;
            transition: none !important;
        }
.leading-none {
    color: #497070;
}
    .menu-item span, .menu-item a {
        font-weight: normal;
    }
    .hidden_test {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 6;
        line-clamp: 6;
        -webkit-box-orient: vertical;
    }
    .hidden_test1 {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .main-nav-link a {
        text-transform: capitalize;
    }
@media only screen and (max-width: 767px) {
    .hidden_test {
        -webkit-line-clamp: 12;
        line-clamp: 12;
    }
.authorName {
           padding-top: 20px;
             }
}
@media only screen and (max-width: 880px) {
        #hamburger, #hamburger::after, #hamburger::before {
            background-color: black;
        }

        .mobile-menu span, .mobile-menu a {
            color: white;
        }

        .mobile-menu .nav-arrow:before, .mobile-menu .nav-arrow:after {
            background-color: yellow;
        }

        .mobile-menu .main-nav-link.child a, .mobile-menu .main-nav-link a {
            color: black;
        }        

    }
    .author-about br {
        content: "";
        display: block;
        margin-bottom: -20px;
    }
    .author-about {
        line-height: 27px;
        white-space: pre-wrap; /* CSS3 */
        white-space: -moz-pre-wrap; /* Firefox */
        white-space: -pre-wrap; /* Opera <7 */
        white-space: -o-pre-wrap; /* Opera 7 */
        word-wrap: break-word; /* IE */
        margin-bottom: 10px;
    }
    .read_more {
        float: right;
        cursor: pointer;
        font-size: 1rem;
    }
    .read_more:hover {
        text-decoration:underline;
        color:black;
    }
    .rfs-text-4xl {
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .featured_image {
        min-height: 220px;
        min-width: 220px;
        object-fit: cover;
    }
    .featured-author {
        font-size: 1.4rem;
        font-weight: 600;
    }
    .featured_image1 {
        min-height: 220px;
        min-width: 220px;
        object-fit: cover;
    }
    .main-box {
    }
    .active.pagerLink {
        background-color: #ffcd32;
        border: 1px solid black;
        font-weight: bold;
        font-size: 25px;
    }

    .nav-arrow {
        margin-right: -5px;
    }

    .pagerLink {
        font-weight: bold;
        color: black;
        font-size: 25px;
    }

    .featured-author {
        margin-bottom: 0.5rem;
    }

    .main-box {
        padding-top: 25%;
        &:hover

    {
        & .arrow-only

    {
        @apply text-teal;
        &:after

    {
        transform: translateX(10px);
        cursor: pointer;
        color: teal;
    }

    }
    }
    }

    .pic {
        background-image: url(/uploads/blog/abstract1-square.jpg);
        background-size: cover;
        background-position: center;
    }

    .arrow-only {
        @apply flex flex-row relative items-baseline rfs-text-base font-normal;
        transition: all .2s ease;
        &:after

    {
        @apply flex ml-2;
        content: '';
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 30'%3E%3Cpath d='M47.2 13.2L34 .7c-1-1-2.6-.9-3.6.1s-.9 2.6.1 3.6l8.6 8.1H2.5C1.1 12.5 0 13.6 0 15s1.1 2.5 2.5 2.5h36.6l-8.6 8.1c-1 1-1.1 2.6-.1 3.6.5.5 1.2.8 1.8.8.6 0 1.3-.2 1.7-.7l13.2-12.5c.5-.5.8-1.1.8-1.8.1-.7-.2-1.4-.7-1.8z' fill='%231f292e'/%3E%3C/svg%3E ");
        width: 16px;
        height: 10px;
        transform: translateX(0);
        transition: all .2s ease;
    }

    &:hover {
        @apply text-teal;
        &:after

    {
        transform: translateX(10px);
        cursor: pointer;
        color: teal;
    }

    }
    }

    .current-post {
        & .arrow-only-white

    {
        @apply flex flex-row relative items-baseline rfs-text-base font-normal text-white;
        transition: all .2s ease;
        &:after

    {
        @apply flex ml-2;
        content: '';
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 30'%3E%3Cpath d='M47.2 13.2L34 .7c-1-1-2.6-.9-3.6.1s-.9 2.6.1 3.6l8.6 8.1H2.5C1.1 12.5 0 13.6 0 15s1.1 2.5 2.5 2.5h36.6l-8.6 8.1c-1 1-1.1 2.6-.1 3.6.5.5 1.2.8 1.8.8.6 0 1.3-.2 1.7-.7l13.2-12.5c.5-.5.8-1.1.8-1.8.1-.7-.2-1.4-.7-1.8z' fill='%231f292e'/%3E%3C/svg%3E ");
        filter: invert(1);
        width: 16px;
        height: 10px;
        transform: translateX(0);
        transition: all .2s ease;
    }

    }

    &:hover {
        & .arrow-only-white

    {
        @apply text-teal;
        &:after

    {
        transform: translateX(10px);
        cursor: pointer;
        color: teal;
    }

    }
    }
    }

    .float-box {
        @apply absolute p-5;
        top: 50%;
        transform: translateY(-50%);
    }

    @media only screen and (max-width: 640px) {
        .main-box {
            padding-top: 0%;
        }

        .float-box {
            @apply relative p-10;
            top: 0;
            left: 0;
            transform: translateY(0%);
        }
    }

    .bg-mask {
        @apply z-0 absolute top-0 bottom-0 left-0 right-0;
        background: rgba(0, 0, 0, .85);
    }

    .featured-date,
    .currentPost-date {
        font-size: 14px;
    }
</style>

<template>
    <Layout>

        <header id="topnav" class="fixed flex flex-row cc:flex-col z-50 items-center w-full bg-white">
            <nav role="navigation" class="flex flex-col items-center space-between max-w-1400 mx-auto w-full px-5 py-0 cc:py-0">

                <div class="flex items-center w-full space-between">

                    <div role="navigation" class="text-white z-30 w-full flex flex-wrap justify-end xl:flex-no-wrap">
                        <a @click="handleEvent('/')" href="/" class="mr-auto flex-auto w-200 self-start py-4">
                            <img alt="Yellowbrick Blog Page" style="width:180px" src="/uploads/blog_logo.svg" />
                        </a>

                        <div :class="[showDrawer ? 'bg-transparent-75' : 'hidden']" class="fixed cc:hidden  inset-0 trans-bg-color" @click="toggleDrawer(false)" />
                        <ul ref="drawer" :style="{ right: showDrawer ? '0px' : '-100%' }" style="transition: right 0.25s ease;" class="fixed z-100 cc:static cc:flex items-center inset-y-0 h-screen cc:h-auto bg-black cc:bg-transparent w-full cc:w-auto m-0 mobile-menu">
                            <li class="cc:hidden flex justify-between p-2">
                                <a @click="handleEvent('/')" href="/" to="/" class="p-2 pl-4">
                                    <img alt="Yellowbrick Data Logo" src="/uploads/images/yb-logo-dark.svg" width="130" />
                                </a>
                                <div :class="{ hidden: !showDrawer }" class="p-2" @click="toggleDrawer(false)">
                                    <button id="close"></button>
                                </div>
                            </li>

                            <li @click='toggle = !toggle' class="flex relative text-black trans-bg-color pl-0 text-base hover:text-yellow1 menu-item cc:px-3 pb-0 lg:px-6">
                                <label aria-haspopup="true" class="w-full relative">
                                    <div class="flex flex-row items-center">
                                        <a @click="handleEvent('/blog/')" href="/blog" class="flex items-center cursor-pointer p-2 pl-6 cc:px-2 cc:py-2">Categories</a>
                                        <span class="nav-arrow text-black" />
                                    </div>
                                    <transition name="slider">
                                        <ul v-show='toggle' class="cc:absolute py-3 whitespace-no-wrap bg-yellow1 cc:mt-4 min-w-full cc:min-w-200 rounded-sm submenu" aria-label="submenu">
                                            <li class="main-nav-link" v-for="category in this.categories" :key="category.id">
                                                <a @click="handleEvent(category.path)"  :href="category.path" v-text="category.title === 'life-at-yellowbrick' ? 'Life at Yellowbrick' : category.title && category.title === 'yellowbrick-and-tpc-ds' ? 'Yellowbrick and Tpc-Ds' : category.title && category.title === 'use-cases' ? 'Use Cases' : category.title  && category.title === 'guest-blog' ? 'Guest Blog' : category.title" aria-haspopup="true" class="flex px-8 py-2 cc:px-2 w-full"> {{ category.title }} </a>
                                            </li>
                                        </ul>
                                    </transition>
                                </label>
                            </li>


                            <li v-for="(item, x) in menu" :key="x" :id="`menu-${x}`" class="flex cc:px-3 lg:px-6 relative text-black trans-bg-color pl-0 text-base pb-0 hover:text-yellow1 menu-item" :class="{'cc:pl-3 lg:pl-6' : x === 0, 'cc:pl-3 lg:pl-6' : x === Object.keys(menu).length - 2, 'cc:pl-3 lg:pl-6' : x !== 0 && x !== Object.keys(menu).length - 2}"
                                @click="item.show = !item.show">
                                <a @click="handleEvent(item.route)" :href="item.route" v-if="item.route" :to="item.route" class="p-2 px-6 cc:px-2 cc:py-2">{{ item.label }}</a>
                                <label v-else aria-haspopup="true" class="w-full relative">
                                    <div class="flex flex-row items-center">
                                        <span v-text="item.label" class="flex items-center cursor-pointer p-2 pl-6 cc:px-2 cc:py-2" />
                                        <span class="nav-arrow text-black" />
                                    </div>
                                    <transition name="slider">
                                        <ul v-show="item.show" class="cc:absolute py-3 whitespace-no-wrap bg-yellow1 cc:mt-4 min-w-full cc:min-w-200 rounded-sm submenu" aria-label="submenu">
                                            <li v-for="(subitem, y) in item.subitems" :key="y" class="main-nav-link" :class="{'child' : subitem.indent, 'parent' : subitem.parent}">
                                                <a @click="handleEvent(subitem.route)" :href="subitem.route" aria-haspopup="true" class="flex px-8 py-2 cc:px-2 w-full">{{ subitem.label }}</a>
                                            </li>
                                        </ul>
                                    </transition>
                                </label>
                            </li>
                            <li id="search-box" class="flex list-none font-normal rfs-text-lg p-1 pl-6 cc:px-2 cc:py-1 relative">
                                <span class="inline-block cursor-pointer"><search-blog v-model="searchResults" class="text-transparent" /></span>
                            </li>
                        </ul>

                    </div>
                    <div id="mobile_search"><img @click="searchClick" src="/uploads/icons/search-icon.svg" style="transform: rotate(-45deg); width: 25px; height: 25px; margin-top: 25px; margin-left: 20px; " /><span class="inline-block cursor-pointer pb-2"><search-blog1 v-model="searchResults" class="text-transparent" /></span></div>
                    <div class="cursor-pointer cc:hidden flex-1 flex items-center justify-end ml-8" @click="toggleDrawer(true)">
                        <button id="hamburger" aria-label="Show the menu" />
                    </div>

                </div>
            </nav>
        </header>
        <section class="flex flex-col pb-2 pt-24 px-6 xl:px-0 bg-white">
        </section>
        <section class="px-6 xl:px-0" id="current_post">
            <div class="max-w-1200 w-full mx-auto md:px-12">
                <h1 class="justify-center uppercase font-bold" style="text-align: center;">Our Authors</h1>
                <p></p>
                <p class="font-normal pb-12" style="border-bottom: 1px solid #80808047;">Yellowbrick authors write compelling stories about cutting edge technologies & trends, people, products, events, and topic that is valuable to our customers, employees and partners.</p>
                <div class="flex flex-row flex-wrap pt-8 pb-8">
                    <span class="text-black rfs-text-3xl flex flex-col md:flex-row max-w-1200 mx-auto md:px-12  pb-8" v-if="searchResults && searchResults < 1">No search results..</span>
                    <div v-for="(edge, key) in searchResults ? searchResults : $page.allAuthor.edges" :key="edge.node.id" class="flex flex-col w-full relative current-post pb-10">
                        <div class="flex flex-col md:flex-row max-w-1200 w-full mx-auto">
                            <a @click="handleEvent(edge.node.path)" :href="edge.node.path" class="w-full md:w-1/3 mr-12">
                                <div class="text-white">
                                    <img class="featured_image" :src="`${edge.node.authorImage}`" />
                                </div>
                            </a>
                            <div class="w-full md:w-1/1">
                                <div class="text-black">
                                    <!-- <h6 class="text-yellow2 hidden md:block">Data Warehouse Modernization</h6> -->

                                    <a @click="handleEvent(edge.node.path)" :href="edge.node.path"><h4 class="rfs-text-3xl uppercase font-bold authorName" v-html="edge.node.name" /></a>
                                    <p class="featured-author brighter-teal" v-text="edge.node.position" />
                                    <div class="">
                                        <!-- Excerpt section -->
                                        <div v-show="!edge.Flag">
                                            <p class="rfs-text-base leading-tight font-normal author-about hidden_test" v-html="edge.node.authorAbout"></p>
                                            <span  v-if="edge.node.authorAbout.length > 440" class="read_more brighter-teal btn rfs-text-base leading-tight font-normal hover:black" @click="toggler(edge, true);">Read More..</span>
                                        </div>
                                        <!-- Excerpt section end -->
                                        <!-- Content section -->
                                        <div  v-show="edge.Flag">
                                            <p class="rfs-text-base leading-tight font-normal author-about" v-html="edge.node.authorAbout"></p>
                                            <span class="read_more brighter-teal btn rfs-text-base leading-tight font-normal hover:black" @click="toggler(edge, false);">Read Less</span>
                                        </div>
                                        <!-- Content section end-->
                                        <p class="author-twitter"><a v-if="edge.node.twitterUrl != ''" class="social" target="_blank" :href="edge.node.twitterUrl"><span><img src="/uploads/twitter-author.png" /></span></a><a class="social" v-if="edge.node.linkedinUrl != ''" target="_blank" :href="edge.node.linkedinUrl"><span><img src="/uploads/linkedin-author.png" /></span></a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <Pager v-if="!searchResults" class="flex w-full mx-auto py-8 bg-white text-3xl justify-center" :info="$page.allAuthor.pageInfo" linkClass="pagerLink" />

    </Layout>
</template>

<script>
    import {
        disableBodyScroll,
        clearAllBodyScrollLocks
    } from 'body-scroll-lock'
    import Layout from '~/layouts/Blog.vue'
    import {
        Pager
    } from 'gridsome'
    import SearchBlog from '~/components/SearchAuthor.vue'
    import SearchBlog1 from '~/components/SearchAuthor1.vue'
    import BiWeeklyBanner from '~/components/BiWeeklyBanner.vue'

    export default {
        metaInfo: {
            title: 'Yellowbrick Data Warehouse Blog',
            meta: [{
                key: 'description',
                name: 'description',
                content: 'The Yellowbrick Data Blog is about all things data warehouse. Here you will find a variety of topics discussing the benefits of the modern hybrid cloud data warhouse.'
            }]
        },
        components: {
            Layout,
            Pager,
            SearchBlog,
            SearchBlog1,
            BiWeeklyBanner
        },
        data: () => ({
            searchResults: null,
            featuredBlog: null,
            expanded: false,
            categories: [],
            toggle: false,
            menu: [
        {
            label: 'Our Authors',
            route: '/our-authors/'
        },
      ],
      showDrawer: false,
      searchFocus: false,
      openNav: false,
        }),
        setAltImg(event) {
            event.target.src = "/uploads/author.png"
        },
        methods: {
            handleEvent(open) {
                //window.location.href = open;
            },
            toggleDrawer(open) {
                this.showDrawer = open
                if (open) disableBodyScroll(this.$refs.drawer)
                else clearAllBodyScrollLocks()
            },
            searchClick() {
                var x = document.getElementById("search_div1");
                if (x.style.display === "none") {
                    x.style.display = "block";
                } else {
                    x.style.display = "none";
                }
            },
            clickAnywhere(e) {
                
            },
            pressAnything(e) {
                if (e.key === 'Escape') {
                    this.showDrawer = false
                    this.searchFocus = false
                    this.menu.forEach((item, x) => {
                        if (item.show) item.show = false
                    })
                }
            },
            toggler(obj, flag) {
                this.$set(obj, 'Flag', flag);
            }
        },
        filters: {
            summary: function (text) {
                return text.substring(0, 430) + '...';
            }
        },
        mounted() {
            document.getElementById("search_div1").style.display = "none";

            clearAllBodyScrollLocks()
            document.addEventListener('click', this.clickAnywhere)
            document.addEventListener('keydown', this.pressAnything)
            document.addEventListener('scroll', this.scrollAnytime)
            if (this.$page?.featuredBlog?.edges?.length > 0) {
                this.featuredBlog = this.$page.featuredBlog.edges[0].node;
            }
            if (this.$page?.allCategory?.edges?.length > 0) {
                this.$page.allCategory.edges.forEach((category) => {
                    this.categories.push(category.node);
                })
                this.categories.sort(function (a, b) {
                    let optA = a.title.toUpperCase();
                    let optB = b.title.toUpperCase();
                    return (optA < optB) ? -1 : (optA > optB) ? 1 : 0;
                });
            }
        }
    }
</script>

<page-query>
    query Author($page: Int) {
    allAuthor (perPage: 12, page: $page, sortBy: "name", order: ASC) @paginate {
    pageInfo {
    totalPages
    currentPage
    isFirst
    isLast
    }
    edges {
    node {
    name
    position
    authorImage
    authorAbout
    authorInterest
    twitterUrl
    linkedinUrl
    path
    }
    }
    }
    allCategory {
    edges {
    node {
    id
    title
    path
    }
    }
    }
    }
</page-query>
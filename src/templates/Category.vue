
<script>
    import Layout from '~/layouts/Blog.vue'
    import {
        disableBodyScroll,
        clearAllBodyScrollLocks
    } from 'body-scroll-lock'
    import {
        Pager
    } from 'gridsome'
    import SearchBlog from '~/components/SearchBlog.vue'
    import SearchBlog1 from '~/components/SearchBlog1.vue'
    export default {
        components: {
            Layout,
            Pager,
            SearchBlog1,
            SearchBlog,
        },
        data: () => ({
            categories: [],
            searchResults: null,
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
        metaInfo() {
            return {
                title: this.$page.category.title,
                meta: [{
                    key: 'description',
                    name: 'description',
                    content: 'Find blogs related to this Topic.'
                }]
            }
        },
        mounted() {
            document.getElementById("search_div1").style.display = "none";
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
            // temp code to remove old service workers
            self.addEventListener('install', function (e) {
                self.skipWaiting();
            });

            self.addEventListener('activate', function (e) {
                self.registration.unregister()
                    .then(function () {
                        return self.clients.matchAll();
                    })
                    .then(function (clients) {
                        clients.forEach(client => client.navigate(client.url))
                    });
            });

            clearAllBodyScrollLocks()
            document.addEventListener('click', this.clickAnywhere)
            document.addEventListener('keydown', this.pressAnything)
            document.addEventListener('scroll', this.scrollAnytime)

            setTimeout(function (document) {
                if (!document)
                    return;
                const path = 'https://www.yellowbrick.com' + document.location.pathname;
            }(document))
        },
        beforeDestroy() {
            document.removeEventListener('click', this.clickAnywhere)
            document.removeEventListener('keydown', this.pressAnything)
            document.removeEventListener('scroll', this.scrollAnytime)
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
                this.menu.forEach((item, x) => {
                    if (!document.getElementById(`menu-${x}`).contains(e.target) && item.show) item.show = false
                })

            },
            pressAnything(e) {
                if (e.key === 'Escape') {
                    this.showDrawer = false
                    this.searchFocus = false
                    this.menu.forEach((item, x) => {
                        if (item.show) item.show = false
                    })
                }
            }
        },
    }
</script>
<style scoped>
    .brighter-teal {
        color: #00c3d7;
    }
    @media screen and (min-width: 401px) and (max-device-width: 767px) {
        .featured_image {
            min-height: auto !important;
            max-height: 100% !important;
            -o-object-fit: cover;
            object-fit: cover;
        }
    }

    .accent-yellow:after {
        height: 0 !important;
    }

    .accent-yellow {
        margin-right: 0.9rem !important;
    }

    .menu-item span, .menu-item a {
        font-weight: normal;
    }

    .main-nav-link a {
        text-transform: capitalize;
    }

    .overline {
        border-top: 5px solid #FFCD32;
        font-weight: 600;
    }

    #topnav {
        border-bottom: 1px solid black;
    }

    .accent-yellow:hover, .accent-yellow.active {
        background-color: #FFCD32;
        color: black;
        padding: 5px 7px 5px 7px;
    }

    .titlename {
        margin-bottom: 2px !important;
        padding-bottom: 0 !important;
    }

    .authorname p {
        margin-bottom: 0 !important;
        padding-bottom: 0 !important;
        display: block;
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

    .categorieslist {
        display: flex;
    }

    .rfs-text-4xl {
        margin-top: 20px;
        margin-bottom: 20px;
    }

    .hidden_test {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .leading-none {
        color: #497070;
    }

    .featured_image {
        min-height: 302px;
        max-height: 307px;
        -o-object-fit: cover;
        object-fit: cover;
    }

    .rfs-text-base {
        margin-bottom: 1rem
    }

    .rfs-text-4xl {
        margin-top: 0.8rem;
        margin-bottom: 0.8rem;
    }

    .featured_image1 {
        min-height: 390px;
        object-fit: cover;
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

    .accent-yellow {
        background-color: black;
        color: white;
        padding: 5px 7px 5px 7px;
    }

    .main-box {
        padding: 1.334% 5px;
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
</style>

<template>
    <Layout>
        <header id="topnav" class="fixed flex flex-row cc:flex-col z-50 items-center w-full bg-white">
            <nav role="navigation" class="flex flex-col items-center space-between max-w-1400 mx-auto w-full px-5 py-0 cc:py-0">

                <div class="flex items-center w-full space-between">

                    <div role="navigation" class="text-white z-30 w-full flex flex-wrap justify-end xl:flex-no-wrap">
                        <a @click="handleEvent('/')" href="/" class="flex-auto w-200 self-start py-4">
                            <img alt="Yellowbrick Blog Page" style="width:180px" src="/uploads/blog_logo.svg" />
                        </a>

                        <div :class="[showDrawer ? 'bg-transparent-75' : 'hidden']" class="fixed cc:hidden inset-0 trans-bg-color" @click="toggleDrawer(false)" />
                        <ul ref="drawer" :style="{ right: showDrawer ? '0px' : '-100%' }" style="transition: right 0.25s ease;" class="fixed z-100 cc:static cc:flex items-center inset-y-0 h-screen cc:h-auto bg-black cc:bg-transparent w-full cc:w-auto m-0 mobile-menu">
                            <li class="cc:hidden flex justify-between p-2">
                                <a @click="handleEvent('/')" href="/" to="/" class="p-2 pl-4">
                                    <img alt="Yellowbrick Data Logo" src="/uploads/images/yb-logo-dark.svg" width="130" />
                                </a>
                                <div :class="{ hidden: !showDrawer }" class="p-2" @click="toggleDrawer(false)">
                                    <button id="close"></button>
                                </div>
                            </li>

                            <li class="flex relative text-black trans-bg-color pl-0 pb-0 text-base hover:text-yellow1 menu-item cc:px-3 lg:px-6" @click='toggle = !toggle'>
                                <label aria-haspopup="true" class="w-full relative">
                                    <div class="flex flex-row items-center">
                                        <a @click="handleEvent('/blog/')" href="/blog" class="flex items-center cursor-pointer p-2 pl-6 cc:px-2 cc:py-2">Categories</a>
                                        <span class="nav-arrow text-black" />
                                    </div>
                                    <transition name="slider">
                                        <ul v-show='toggle' class="cc:absolute py-3 whitespace-no-wrap bg-yellow1 cc:mt-4 min-w-full cc:min-w-200 rounded-sm submenu" aria-label="submenu">
                                            <li class="main-nav-link" v-for="category in this.categories" :key="category.id">
                                                <a @click="handleEvent(category.path)" :href="category.path" v-text="category.title === 'life-at-yellowbrick' ? 'Life at Yellowbrick' : category.title && category.title === 'yellowbrick-and-tpc-ds' ? 'Yellowbrick and Tpc-Ds' : category.title && category.title === 'use-cases' ? 'Use Cases' : category.title && category.title === 'guest-blog' ? 'Guest Blog' : category.title" aria-haspopup="true" class="flex px-8 py-2 cc:px-2 w-full"> {{ category.title }} </a>
                                            </li>
                                        </ul>
                                    </transition>
                                </label>
                            </li>


                            <li v-for="(item, x) in menu" :key="x" :id="`menu-${x}`" class="flex cc:px-3 lg:px-6 relative text-black trans-bg-color pl-0 pb-0 text-base hover:text-yellow1 menu-item" :class="{'cc:pl-3 lg:pl-6' : x === 0, 'cc:pl-3 lg:pl-6' : x === Object.keys(menu).length - 2, 'cc:pl-3 lg:pl-6' : x !== 0 && x !== Object.keys(menu).length - 2}"
                                @click="item.show = !item.show">
                                <a @click="handleEvent(item.route)" v-if="item.route" :href="item.route" class="p-2 px-6 cc:px-2 cc:py-2">{{ item.label }}</a>
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
        <section class="flex flex-col pb-2 pt-16 px-6 xl:px-0 bg-white">
        </section>
        <section class="px-6 xl:px-0 bg-white pb-8 pt-20" style="border-bottom: 1px solid #0000002e; margin-top: 0px;">
            <div class="max-w-1000 w-full mx-auto">
                <h1 class="w-full rfs-text-5xl  font-black uppercase text-black" style="margin:auto;text-align:center" v-text="$page.category.title === 'life-at-yellowbrick' ? 'Life at Yellowbrick' : $page.category.title && $page.category.title === 'yellowbrick-and-tpc-ds' ? 'Yellowbrick and Tpc-Ds' : $page.category.title && $page.category.title === 'use-cases' ? 'Use Cases' : $page.category.title && $page.category.title === 'guest-blog' ? 'Guest Blog' : $page.category.title" />
                <br /><p class="text-black pl-1 font-normal" style="display:none"> Yellowbrick delivers improved and predictable performance and cost with improved operational simplicity and deployment.</p>
            </div>
            <div class="flex flex-col max-w-1200 w-full mx-auto">
                <ul class="m-0 py-8 mx-auto">
                    <li class="accent-yellow">
                        <a @click="handleEvent('/blog/')" href="/blog/">All</a>
                    </li>
                    <li class="accent-yellow" v-for="category in this.categories" :key="category.id" :class="{ 'active': $page.category.title === category.title }">
                        <a @click="handleEvent(category.path)" :href="category.path" v-text="category.title === 'life-at-yellowbrick' ? 'Life at Yellowbrick' : category.title && category.title === 'yellowbrick-and-tpc-ds' ? 'Yellowbrick and Tpc-Ds' : category.title && category.title === 'use-cases' ? 'Use Cases' : category.title && category.title === 'guest-blog' ? 'Guest Blog' : category.title" > {{ category.title }} </a>
                    </li>
                </ul>
            </div>
            <div id="current_post"></div>

        </section>
        <section class="px-6 xl:px-0 pb-0 pt-16">
            <div class="max-w-1200 w-full mx-auto">
                <div class="flex flex-row flex-wrap -mx-6">
                    <span class="text-black rfs-text-3xl flex flex-col md:flex-row max-w-1200 mx-auto md:px-12  pb-8" v-if="searchResults && searchResults < 1">No search results..</span>
                    <div v-for="edge in searchResults ? searchResults : $page.category.belongsTo.edges" :key="edge.node.id" class="flex flex-col w-full relative current-post pb-16 px-6 md:px-20">
                        <div class="flex flex-col md:flex-row max-w-1200 w-full  mx-auto relative border">
                            <div :to="edge.node.path" class="w-full md:w-2/5">
                                <div class="text-white">
                                    <a @click="handleEvent(edge.node.path)" :href="edge.node.path">
                                        <img v-if="edge.node.thumbnailImage" class="featured_image" :src="`${edge.node.thumbnailImage}`" />
                                        <img v-else class="featured_image" :src="`${edge.node.coverImage}`" />
                                    </a>
                                </div>
                            </div>
                            <div class="w-full md:w-4/5 p-2">
                                <div class="text-black md:pl-20 block">
                                    <div class="categorieslist">
                                        <template v-if="edge.node.categories">
                                            <a v-for="(category) in edge.node.categories" :key="category.id" v-text="category.title === 'life-at-yellowbrick' ? 'Life at Yellowbrick' : category.title && category.title === 'yellowbrick-and-tpc-ds' ? 'Yellowbrick and TPC-DS' : category.title && category.title === 'use-cases' ? 'Use Cases' : category.title && category.title === 'guest-blog' ? 'Guest Blog' : category.title" @click="handleEvent(`/blog/category/${category.title}`)" :href="`/blog/category/${category.title}`" class="uppercase font-bold brighter-teal block md:mb-0 mr-4 pt-2 pb-8" />
                                        </template>
                                    </div>
                                    <a @click="handleEvent(edge.node.path)" :href="edge.node.path"><h4 class="rfs-text-3xl text-black font-bold hidden_test titlename" v-html="edge.node.title" /></a>
                                    <p class="rfs-text-base leading-tight font-normal  pt-4 pb-1 hidden_test" v-html="edge.node.description" />

                                    <div class="flex">
                                        <div v-if="edge.node.author.authorImage" class="w-1/7 mr-6">
                                            <a @click="handleEvent(edge.node.author.path)" :href="edge.node.author.path">
                                                <img :src="`${edge.node.author.authorImage}`" style=" border-radius: 50%" class="w-16" />
                                            </a>
                                        </div>
                                        <div class="md:w-2/3 authorname">
                                            <a @click="handleEvent(edge.node.author.path)" :href="edge.node.author.path">
                                                <p class="featured-author font-bold mt-1" v-text="edge.node.author.name" />
                                            </a>
                                            <p class="font-normal mb-0" v-text="edge.node.date" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Pager v-if="!searchResults" class="flex w-full mx-auto py-8 bg-white text-3xl justify-center" :info="$page.category.belongsTo.pageInfo" linkClass="pagerLink" />

    </Layout>
</template>


<page-query>
    query Category($id: ID!,$page: Int) {
    category(id: $id) {
    title
    path
    belongsTo (perPage: 12, page: $page, sortBy: "date", order: DESC) @paginate {
    pageInfo {
    totalPages
    currentPage
    isFirst
    isLast
    }
    edges {
    node {
    ...on Blog {
    id
    title
    date(format: "DD MMM YYYY")
    path
    description
    coverImage
    thumbnailImage
    categories {
    id
    title
    }
    author {
    name
    authorImage
    path
    }
    }
    }
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
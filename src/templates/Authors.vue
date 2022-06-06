<style scoped>
  .leading-none {
    color: #497070;
   }
   .brighter-teal {
    color: #00c3d7;
}
    a:not(.button):not(.social):hover {
        --text-opacity: 1;
        color: #FFCD32;
        color: rgba(255, 205, 50, var(--text-opacity));
        background-position: -100%;
    }
    .author-twitter {
        margin-top:10px;
    }
    .authorAbout-author {
        line-height: 27px;
        white-space: break-spaces;
        margin-bottom: 10px;
        word-wrap: break-word;
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
    @media screen and (min-width: 401px) and (max-device-width: 767px) {
        .featured_image {
            min-height: auto !important;
            max-height: 100% !important;
            -o-object-fit: cover;
            object-fit: cover;
        }
    }
    .titlename {
        margin-bottom: 2px !important;
        padding-bottom: 0 !important;
    }
    .menu-item span, .menu-item a {
        font-weight: normal;
    }
    .main-nav-link a {
        text-transform: capitalize;
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

  

    .pic {
        background-image: url(/uploads/blog/abstract1-square.jpg);
        background-size: cover;
        background-position: center;
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

                            <li class="flex relative text-black trans-bg-color pl-0 text-base hover:text-yellow1 pb-0 menu-item cc:px-3 lg:px-6" @click='toggle = !toggle'>
                                <label aria-haspopup="true" class="w-full relative">
                                    <div class="flex flex-row items-center">
                                        <a @click="handleEvent('/blog')" href="/blog" class="flex items-center cursor-pointer p-2 pl-6 cc:px-2 cc:py-2">Categories</a>
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


                            <li v-for="(item, x) in menu" :key="x" :id="`menu-${x}`" class="flex cc:px-3 lg:px-6 relative text-black trans-bg-color pb-0 pl-0 text-base hover:text-yellow1 menu-item" :class="{'cc:pl-3 lg:pl-6' : x === 0, 'cc:pl-3 lg:pl-6' : x === Object.keys(menu).length - 2, 'cc:pl-3 lg:pl-6' : x !== 0 && x !== Object.keys(menu).length - 2}"
                                @click="item.show = !item.show">
                                <a v-if="item.route" @click="handleEvent(item.route)" :href="item.route" class="p-2 px-6 cc:px-2 cc:py-2">{{ item.label }}</a>
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
        <section class="px-6 xl:px-0 bg-white pb-20 md:pt-0" style="border-bottom: 1px solid #0000002e;">
            <div class="flex flex-col md:flex-row max-w-1200 mx-auto md:px-12">
                <div class="w-full md:w-1/1">
                    <img :src="`${$page.author.authorImage}`" style="margin: auto; max-width: 250px;" />
                    <h1 class="font-bold uppercase" v-html="$page.author.name" style="text-align:center" />
                    <p class="brighter-teal" v-html="$page.author.position" style="text-align: center; margin-bottom: 1.5rem; font-weight: 600;" />
                    <p class="font-normal authorAbout-author" v-html="$page.author.authorAbout" />
                    <p class="author-twitter"><a class="social" v-if="$page.author.twitterUrl != ''" target="_blank" :href="$page.author.twitterUrl"><span><img src="/uploads/twitter-author.png" /></span></a><a v-if="$page.author.linkedinUrl != ''" class="social" target="_blank" :href="$page.author.linkedinUrl"><span><img src="/uploads/linkedin-author.png" /></span></a></p>

                </div>

            </div>
            <div id="current_post"></div>
        </section>

        <section class="px-6 xl:px-0 pb-0 py-16">
            <div class="max-w-1200 w-full mx-auto">
                <div class="flex flex-row flex-wrap -mx-6">
                    <span class="text-black rfs-text-3xl flex flex-col md:flex-row max-w-1200 mx-auto md:px-12  pb-8" v-if="searchResults && searchResults < 1">No search results..</span>                    <div v-for="edge in searchResults ? searchResults : $page.author.belongsTo.edges" :key="edge.node.id" class="flex flex-col w-full relative current-post pb-16 px-6 md:px-20">
                        <div class="flex flex-col md:flex-row max-w-1200 w-full mx-auto relative border">
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
                                    <template v-if="edge.node.categories">
                                        <div class="categorieslist">
                                            <a v-for="(category) in edge.node.categories" :key="category.id" v-text="category.title === 'life-at-yellowbrick' ? 'Life at Yellowbrick' : category.title && category.title === 'yellowbrick-and-tpc-ds' ? 'Yellowbrick and TPC-DS' : category.title && category.title === 'use-cases' ? 'Use Cases' : category.title  && category.title === 'guest-blog' ? 'Guest Blog' : category.title" @click="handleEvent(`/blog/category/${category.title}`)" :href="`/blog/category/${category.title}`" class="uppercase font-bold brighter-teal block md:mb-0 mr-4 pt-2 pb-8" />
                                        </div>
                                    </template>
                                    <a @click="handleEvent(edge.node.path)" :href="edge.node.path"><h4 class="rfs-text-3xl text-black font-bold hidden_test titlename" v-html="edge.node.title" /></a>
                                    <p class="rfs-text-base leading-tight font-normal  pt-4 pb-1 hidden_test" v-html="edge.node.description" />

                                    <div class="flex">
                                        <div class="md:w-1/7  mr-6">
                                            <img :src="`${edge.node.author.authorImage}`" class="w-16" style=" border-radius: 50%;" />
                                        </div>
                                        <div class="md:w-2/3 authorname">
                                            <p class="featured-author font-bold mt-1" v-text="edge.node.author.name" />
                                            <p v-text="edge.node.date" class="font-normal  mb-0" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Pager v-if="!searchResults" class="flex w-full mx-auto py-8 bg-white text-3xl justify-center" :info="$page.author.belongsTo.pageInfo" linkClass="pagerLink" />



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
    import SearchBlog from '~/components/SearchBlog.vue'
    import BiWeeklyBanner from '~/components/BiWeeklyBanner.vue'
    import SearchBlog1 from '~/components/SearchBlog1.vue'

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
    query Author($id: ID!,$page: Int) {
    author(id: $id) {
    name
    position
    authorAbout
    authorInterest
    authorImage
    twitterUrl
    linkedinUrl
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
    description
    date(format: "DD MMM YYYY")
    path
    coverImage
    thumbnailImage
    author {
    name
    authorImage
    }
    categories {
    id
    title
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

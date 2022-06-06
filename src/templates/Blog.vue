<style scoped>
.brighter-teal {
    color: #00c3d7;
}
    .author_images.mr-2 {
        margin-right: 0.6rem;
    }
    .content-desc a {
        border-bottom: 2px solid #c6c6c6 !important;
    }
    strong a {
        font-weight:bold!important;
    }
    @media only screen and (max-width: 371px) {
        .authorimages {
            width: 34px !important;
            height: 34px !important;
        }
    }
    @media screen and (min-width: 401px) and (max-device-width: 767px) {
        .featured_image {
            min-height: auto !important;
            max-height: 100% !important;
            -o-object-fit: cover;
            object-fit: cover;
        }
    }
    @media screen and (min-width: 768px) and (max-width: 1172px) {
        .announcement-box a {
            margin-right: 20px !important;
        }
        .authorimages {
            width: 30px !important;
            height: 30px !important;
        }

        .authorslist {
            margin-left: 16px !important;
        }

        .hydrated.rw-badge2 {
            width: auto !important;
        }
    }
    .blog a:not(.button):not(.link) {
        background-image: none !important;
    }
    .leading-none {
        color: #497070;
    }
    .hs-custom-style .hs-input, .hs-custom-style fieldset {
        max-width: 300px !important;
        font-size: 15px;
    }
    .hbspt-form .hs-input {
        max-width: 300px !important;
    }
    .custom-hbst {
        background-color: #ffcd32;
        padding: 10px;
        float: right;
        position: relative;
        margin-top: -74px;
    }
    .headingsocial {
        justify-content: end;
    }
    .disqus-footer__wrapper{
        display:none;
    }
    .gartner-pi-link:hover {
        background-image: linear-gradient(to right, #fff 50%, #fff 50%) !important;
    } 
    .blog a:not(.button):not(.link) {
        border-bottom: 0px !important;
    }
    @media only screen and (max-width: 768px) {
        .mobile-menu {
            -webkit-overflow-scrolling: touch;
            overflow-y: scroll;
        }
    }

    @media(min-width: 880px) {
        .menu-item:hover > label > .submenu {
            display: block !important;
        }

        .submenu {
            margin: 0;
        }
    }
    body {
        background: rgba(13,23,28,1);
    }

    .blog a:not(.button):not(.link):not(.gartner-pi-link):hover {
        background: #fff !important;
        color: #000 !important;
    }

    .detailstitle {
        margin-top: 10px;
        margin-bottom: 20px;
        line-height: 60px;
    }

    .author_section p {
        margin-bottom: 0px;
    }

    .main-nav-link a {
        text-transform: capitalize;
    }

    .menu-item span, .menu-item a {
        font-weight: normal;
    }

    .announcement-box a {
        margin-right: 20px;
        /* border: 0.5px solid #e5e5e5; */
    }

    @media only screen and (min-width: 881px) {
        .socialicons {
            justify-content: end;
        }
    }

    @media only screen and (max-width: 880px) {
        #hamburger, #hamburger::after, #hamburger::before {
            background-color: black;
        }

        .socialicons {
            margin-top: 22px;
        }

        .detailstitle {
            margin-top: 40px;
            margin-bottom: 40px;
            line-height: 36px;
        }

        .announcement-box a {
            margin: 0px;
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

    .hero {
        background-size: cover;
        position: relative;
        &:after

    {
        content: '';
        @apply absolute top-0 bottom-0 left-0 right-0;
        background: linear-gradient(0deg, rgba(13,23,28,1) 0%, rgba(13,23,28,0) 70%);
    }

    }

    .blog {
        margin-bottom: 0;
    }

    .blog-bg {
        background-image: url(/uploads/new-pattern.svg);
        background-position: top right;
        background-repeat: no-repeat;
        background-size: 100%;
    }
</style>

<template>
    <Layout>
        <header id="topnav" class="fixed flex flex-row cc:flex-col z-50 items-center w-full bg-white" style=" border-bottom: 1px solid grey">
            <nav role="navigation" class="flex flex-col items-center space-between max-w-1400 mx-auto w-full px-5 py-0 cc:py-0">

                <div class="flex items-center w-full space-between">

                    <div role="navigation" class="text-white z-30 w-full flex flex-wrap justify-end xl:flex-no-wrap">
                        <a @click="handleEvent('/')" href="/" class="mr-auto flex-auto w-200 self-start py-4">
                            <img alt="Yellowbrick Data Logo" title="Yellowbrick Data Logo" style="width:180px" src="/uploads/blog_logo.svg" />
                        </a>

                        <div :class="[showDrawer ? 'bg-transparent-75' : 'hidden']" class="fixed cc:hidden inset-0 trans-bg-color" @click="toggleDrawer(false)" />
                        <ul ref="drawer" :style="{ right: showDrawer ? '0px' : '-100%' }" style="transition: right 0.25s ease;" class="fixed z-100 cc:static cc:flex items-center inset-y-0 h-screen cc:h-auto bg-black cc:bg-transparent w-full cc:w-auto m-0 mobile-menu">
                            <li class="cc:hidden flex justify-between p-2">
                                <a @click="handleEvent('/')" href="/" class="p-2 pl-4">
                                    <img alt="Yellowbrick Data Logo" title="Yellowbrick Data Logo" src="/uploads/images/yb-logo-dark.svg" width="130" />
                                </a>
                                <div :class="{ hidden: !showDrawer }" class="p-2" @click="toggleDrawer(false)">
                                    <button id="close"></button>
                                </div>
                            </li>

                            <li class="flex relative text-black trans-bg-color pl-0 text-base hover:text-yellow1 menu-item pb-0 cc:px-3 lg:px-6" @click='toggle = !toggle'>
                                <label aria-haspopup="true" class="w-full relative">
                                    <div class="flex flex-row items-center">
                                        <a @click="handleEvent('/blog/')" href="/blog/" class="flex items-center cursor-pointer p-2 pl-6 cc:px-2 cc:py-2">Categories</a>
                                        <span class="nav-arrow text-black" />
                                    </div>
                                    <transition name="slider">
                                        <ul v-show='toggle' class="cc:absolute py-3 whitespace-no-wrap bg-yellow1 cc:mt-4 min-w-full cc:min-w-200 rounded-sm submenu" aria-label="submenu">
                                            <li class="main-nav-link" v-for="category in $page.allCategory.edges" :key="category.node.id">
                                                <a @click="handleEvent(category.node.path)" :href="category.node.path" v-text="category.node.title === 'life-at-yellowbrick' ? 'Life at Yellowbrick' : category.node.title && category.node.title === 'yellowbrick-and-tpc-ds' ? 'Yellowbrick and Tpc-Ds' : category.node.title && category.node.title === 'use-cases' ? 'Use Cases' : category.node.title && category.node.title === 'guest-blog' ? 'Guest Blog' : category.node.title" aria-haspopup="true" class="flex px-8 py-2 cc:px-2 w-full"> {{category.node.title }} </a>
                                            </li>
                                        </ul>
                                    </transition>
                                </label>
                            </li>


                            <li v-for="(item, x) in menu" :key="x" :id="`menu-${x}`" class="flex cc:px-3 lg:px-6 relative text-black trans-bg-color pl-0 pb-0 text-base hover:text-yellow1 menu-item" :class="{'cc:pl-3 lg:pl-6' : x === 0, 'cc:pl-3 lg:pl-6' : x === Object.keys(menu).length - 2, 'cc:pl-3 lg:pl-6' : x !== 0 && x !== Object.keys(menu).length - 2}"
                                @click="item.show = !item.show">
                                <a @click="handleEvent(item.route)" :href="item.route" v-if="item.route" class="p-2 px-6 cc:px-2 cc:py-2">{{ item.label }}</a>
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
                                <span class="inline-block cursor-pointer"><search-blog class="text-transparent" /></span>

                            </li>
                        </ul>

                    </div>
                    <div id="mobile_search"><img @click="searchClick" src="/uploads/icons/search-icon.svg" style="transform: rotate(-45deg); width: 25px; height: 25px; margin-top: 25px; margin-left: 20px; " /><span class="inline-block cursor-pointer pb-2"><search-blog1 class="text-transparent" /></span></div>
                    <div class="cursor-pointer cc:hidden flex-1 flex items-center justify-end ml-8" @click="toggleDrawer(true)">
                        <button id="hamburger" aria-label="Show the menu" />
                    </div>

                </div>
            </nav>
        </header>
        <section class="flex flex-col pb-2 pt-12 px-6 xl:px-0 bg-white">
        </section>
        <section class="px-0 xl:px-0 bg-white pt-8">
            <div class="uppercase max-w-1200 w-full mx-auto font-bold px-4 md:px-20">
                <template v-if="$page.blog.categories">
                    <a @click="handleEvent(category.path)" :href="category.path" v-for="(category) in $page.blog.categories" :to="category.path"><span :key="category.id" style="margin-top: 50px;margin-bottom: 30px; margin-right:20px;" class="uppercase brighter-teal max-w-1200 w-full  font-bold inline"  v-text="category.title === 'life-at-yellowbrick' ? 'Life at Yellowbrick' : category.title && category.title === 'yellowbrick-and-tpc-ds' ? 'Yellowbrick and Tpc-Ds' : category.title && category.title === 'use-cases' ? 'Use Cases' : category.title && category.title === 'guest-blog' ? 'Guest Blog' : category.title"> {{category.title}}</span></a>
                </template>
                <h1 class="detailstitle capitalize rfs-text-5xl text-black font-bold max-w-1200 mx-auto" v-html="$page.blog.title" />
            </div>
            <img class="w-full pb-12" :src="$page.blog.coverImage" :alt="$page.blog.cover_alt" :title="$page.blog.cover_alt"/>
        </section>

        <section class="bg-white pb-24 md:flex-row px-6 xl:px-0 blog">
            <div class="flex flex-col md:flex-row max-w-1200 w-full mx-auto">
                <div class="w-full md:w-4/6 ">
                    <div class="flex flex-col md:flex-row">
                        <div class="md:flex w-full max-w-1200 mb-4  bg-transparent">
                            <div class="flex flex-row md:w-3/4">
                                <div class="w-32 mr-6">
                                    <a @click="handleEvent($page.blog.author.path)" :href="$page.blog.author.path">
                                        <img :src="$page.blog.author.authorImage" style="border-radius: 50%;" />
                                    </a>
                                </div>
                                <div class="w-full md:w-1/8 author_section">
                                    <a @click="handleEvent($page.blog.author.path)" :href="$page.blog.author.path">
                                        <p class="featured-author uppercase font-bold blog_author" v-text="$page.blog.author.name" />
                                    </a>
                                    <p v-text="$page.blog.author.position" class="font-normal blog_author" />
                                    <p v-text="$page.blog.date" class="italic text-sm blog_author" />
                                </div>
                            </div>
                            <div class="w-full md:w-2/4 author_section  socialicons">
                                <p class="font-normal headingsocial md:flex md:flex-end">SOCIAL SHARE</p>
                                <div class="md:flex md:flex-end headingsocial">
                                    <template>
                                        <button>
                                            <ShareNetwork network="facebook"
                                                          :url="'https://www.yellowbrick.com' + this.$page.blog.path"
                                                          :title=" this.$page.blog.title"
                                                          hashtags="Yellowbrick">
                                                <span><img src="/uploads/facebook.png" title="Facebook" class="mr-4" /></span>
                                            </ShareNetwork>
                                        </button>
                                    </template>
                                    <template>
                                        <button>
                                            <ShareNetwork network="twitter"
                                                          :url="'https://www.yellowbrick.com' + this.$page.blog.path"
                                                          :title="this.$page.blog.title"
                                                          hashtags="Yellowbrick">
                                                <span><img src="/uploads/twitter.png" title="Twitter" class="mr-4" /></span>
                                            </ShareNetwork>
                                        </button>
                                    </template>
                                    <template>
                                        <button>
                                            <ShareNetwork network="linkedin"
                                                          :url="'https://www.yellowbrick.com' + this.$page.blog.path"
                                                          :title="this.$page.blog.title">
                                                <span><img src="/uploads/linkedin.png" title="Linkedin" class="mr-4" /></span>
                                            </ShareNetwork>
                                        </button>
                                    </template>
                                    <template>
                                        <button>
                                            <ShareNetwork network="WhatsApp"
                                                          :url="'https://www.yellowbrick.com' + this.$page.blog.path"
                                                          :title="this.$page.blog.title">
                                                <span><img src="/uploads/whatsapp.png" title="Whatsapp" class="mr-0" /></span>
                                            </ShareNetwork>
                                        </button>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="float: right; margin-top: -10px; "><a class="brighter-teal font-semibold" style="color: #00c3d7;" @click="handleEvent('/blog')" href="/blog/">Back to Blog ></a></div>
                    <VueRemarkContent v-if="$page.blog.title == 'Helping to Raise the Next Generation of Engineers'" id="blog_image_class" class="font-normal content-desc" style="border-bottom: 3px solid #d6d6d6;margin-top:30px;margin-bottom:12px" />
                    <VueRemarkContent v-else-if="$page.blog.title == 'Hello Trafalgar Square!'" id="blog_image_class_1" class="font-normal content-desc" style="border-bottom: 3px solid #d6d6d6;margin-top:30px;margin-bottom:12px" />
                    <VueRemarkContent v-else-if="$page.blog.title == 'The What, Why, and How of the Distributed Data Cloud'" id="blog_image_class_middle" class="font-normal content-desc" style="border-bottom: 3px solid #d6d6d6;margin-top:30px;margin-bottom:12px" />
                    <VueRemarkContent v-else-if="$page.blog.title == 'The Distributed Cloud Requires a Distributed Data Platform' || $page.blog.title == 'The Emergence of the Distributed Data Cloud'" id="blog_image_class_single" class="font-normal content-desc" style="border-bottom: 3px solid #d6d6d6;margin-top:30px;margin-bottom:12px" />
                    <VueRemarkContent v-else class="font-normal content-desc" style="border-bottom: 3px solid #d6d6d6;margin-top:30px;margin-bottom:12px" />

                    <h2 data-v-6b2564f1="" data-v-3c2763e1="" class="font-bold">Blog Comments</h2>
                    <Disqus shortname="yellowbrick-com" :identifier="this.$page.blog.path" />

                </div>
                <div class="md:w-2/6 mx-auto">
                    <div class="authorslist md:ml-12">
                        <a @click="handleEvent('/blog')" href="/blog"><h4 class="font-semibold">Related Posts</h4></a>
                        <template>
                      
                            <div v-for="(author1,index) in $page.blog.categories" v-if="index < 1" :key="author1.id" class="flex related_posts" style="width: 310px;">
                                <div class="">
                                    <a v-for="(author,index) in author1.belongsTo.edges" v-if="$page.blog.title != author.node.title" :key="author.node.title" @click="handleEvent(author.node.path)" :href="author.node.path" class="flex flex-col w-full pb-8 ">
                                        <div data-v-4bc9d7de="" class="flex flex-row">
                                            <div data-v-4bc9d7de="" class="w-24 mr-4" >
                                                <h4 data-v-4bc9d7de="" class="leading-tight mb-0 w-full text-black">
                                                    <img v-if="author.node.thumbnailImage" :src="author.node.thumbnailImage" class=" w-full">
                                                    <img v-else :src="author.node.coverImage" class=" w-full" />
                                                </h4>
                                                </div>
                                                <div class="md:w-2/3 authorname  brighter-teal" style="width:70%">
                                                    <p v-text="author.node.title" class=" brighter-teal font-semibold leading-tight mb-0 text-black"  />
                                                </div>
                                            
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </template>
                    </div>
                    <div class="authorslist md:ml-12" style="display: inline-block;margin-top:20px">
                        <a @click="handleEvent('/our-authors')" href="/our-authors"><h4 class="font-semibold">Meet Our Authors</h4></a>
                        <template v-if="$page.allAuthor.edges">
                            <a v-for="(author) in $page.allAuthor.edges" :key="author.node.name" class="capitalize text-yellow1 leading-none author_images mr-2 inline" style="float: left; padding-bottom: 10px;" @click="handleEvent(author.node.path)" :href="author.node.path"><img :src="author.node.authorImage" :title="author.node.name" style="width: 50px; height: 50px" class="rounded authorimages" /></a>
                        </template>
                    </div>
                    <br />
                    <br />
                    <div class="authorslist md:ml-12" style="display: inline-block;margin-top:20px">
                        <template>
                            <div>
                                <ClientOnly>
                                    <h5 class="font-semibold" style="font-size: 1.38rem;">Get the latest Yellowbrick News</h5>
                                    <VueScriptComponent script='
                                    <!--[if lte IE 8]>
    <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2-legacy.js"></script>
    <![endif]-->
                                    <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js"></script>
                                    <script>
                                    hbspt.forms.create({
                                    region: "na1",
                                    portalId: "8366986",
                                    formId: "2372a8f7-8866-4b45-9356-13c428960141",
                                    sfdcCampaignId: "7011G000000YAPpQAO",
                                    submitButtonClass: "custom-hbst",
                                    css: " ",
                                    cssClass: "custom-hbst-but",
                                    });
                                    </script><style>
                                    .gartner-pi-link:hover {
                                    background-image: none !important;
                                    }
                                    .gartner-pi-reviews-link {
                                    display:none;
                                    }
                                    .custom-hbst {
                                    cursor: pointer;
                                    }
                                    .gartner-pi-sourcing-link a:hover {
                                    background-position: 0% !important;
                                    }
                                    .g2_submit:hover {
                                    color: #FFCD32 !important;
                                    color: rgba(255, 205, 50, var(--text-opacity)) !important;
                                    }
                                    .hs-input {
                                    max-width: 300px !important;
                                    border: 1px solid #dedede;
                                    height: 40px;
                                    background: #80808017;
                                    }
                                        .gartner-pi-sourcing-link a {
                                            border-bottom: 0px !important;
                                            color: none !important;
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
                                    @media screen and (min-width: 768px) and (max-device-width: 1172px) {
                                    div#gartner-pi-widget-MDM5NDZjOWEtMWY1Yi00NDNjLWFkZWItMTY0YTBjNGQzNjBk {
                                    width: 100% !important;
                                    }
                                        .related_posts {
                                            width: 100% !important;
                                        }
                                    .hbspt-form {
                                    width: 100% !important;
                                    }
                                    }
                                    .hydrated.rw-badge2 {
                                    position: inherit;
                                    width:300px;
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
                                    @media only screen and (max-width: 768px) {
                                    div#gartner-pi-widget-MDM5NDZjOWEtMWY1Yi00NDNjLWFkZWItMTY0YTBjNGQzNjBk {
                                    width: 100%;
                                    }
                                    .hydrated.rw-badge2 {
                                    width: auto !important;
                                    }
                                    .hbspt-form {
                                    width: auto !important;
                                    }
                                        
                                    .background-square1 {
                                    width:100%!important;
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
                                    width: 300px;
                                    }
                                    .hs_error_rollup {
                                    position: absolute;
                                    width: 100%;
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

                                    .background-square1 {
                                    background-color: white;
                                    border: 1px solid #dedede;
                                    padding: 12px;
                                    width: 300px;
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
                                    @media screen and (min-width: 769px) and (max-device-width: 1173px) {
                                    .background-square1 {
                                    width: 100% !important;
                                    }
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
                                    <div id="widget-container"></div>
                                    <br />
                                    <div>

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
                                    <div style="color: #4b6cc9; float:right;font-size: 14px; font-weight: 500; position: relative; margin-top: -25px;"><a target="_blank" href="https://www.g2.com/products/yellowbrick-data-yellowbrick/reviews?utm_source=review-widget" class="g2_submit">Submit a review <span style="display: inline-block;"><img src="/uploads/right.png"></span></a></div>
                                    <!-- End widget code -->
                                    </div>
                                    </div>
                                </ClientOnly>
                            </div>
                        </template>

                        <div id="widget-container"></div>
                    </div>
                </div>
                </div>
            <div class="flex flex-col md:flex-row max-w-1200 w-full mx-auto" style="margin-top:30px;">
                <span class="uppercase font-semibold" style="float: left; padding-right: 8px; padding-top: 8px; float: left; font-size: 1.1rem; margin-right: 20px;">CATEGORIES</span>
                <span class="categorylistblogbottom" style="float:left" v-for="category in $page.allCategory.edges" :key="category.node.id">
                    <a @click="handleEvent(category.node.path)" style="font-size:1.1rem" :href="category.node.path"  v-text="category.node.title === 'life-at-yellowbrick' ? 'Life at Yellowbrick' : category.node.title && category.node.title === 'yellowbrick-and-tpc-ds' ? 'Yellowbrick and Tpc-Ds' : category.node.title && category.node.title === 'use-cases' ? 'Use Cases' : category.node.title && category.node.title === 'guest-blog' ? 'Guest Blog' : category.node.title" aria-haspopup="true" class="flex px-8 py-2 cc:px-2 w-full capitalize"> {{category.node.title }} </a>
                </span>
            </div>
        </section>
    </Layout>
</template>

<script>
    import {
        disableBodyScroll,
        clearAllBodyScrollLocks
    } from 'body-scroll-lock'
    import Layout from '~/layouts/Blog.vue'
    import SearchBlog from '~/components/SearchBlogdetail.vue'
    import SearchBlog1 from '~/components/SearchBlogdetail1.vue'
    export default {
        function(Vue, { head }) {
            Vue.use(VueDisqus)
        },
        metaInfo() {
            if (this.$page.blog.title == "The Distributed Cloud Requires a Distributed Data Platform") {
                return {
                    title: this.$page.blog.metaTitle ? this.$page.blog.metaTitle : this.$page.blog.title,
                    link: [
                        { rel: 'canonical', href: 'https://www.yellowbrick.com/blog/the-distributed-cloud-requires-a-distributed-data-platform/'},
                    ],
                    meta: [
                        {
                            key: 'description',
                            name: 'description',
                            content: this.$page.blog.description
                        },
                        {
                            key: 'og:title',
                            property: 'og:title',
                            content: this.$page.blog.title,
                        },
                        {
                            key: 'og:description',
                            property: 'og:description',
                            content: this.$page.blog.description,
                        },
                        {
                            key: 'og:url',
                            property: 'og:url',
                            content: 'https://www.yellowbrick.com' + this.$page.blog.path,
                        },
                        {
                            key: 'og:image',
                            property: 'og:image',
                            content: 'https://www.yellowbrick.com' + this.$page.blog.coverImage,
                        },
                        {
                            key: 'twitter:title',
                            property: 'twitter:title',
                            content: this.$page.blog.title,
                        },
                        {
                            key: 'twitter:description',
                            property: 'twitter:description',
                            content: this.$page.blog.description,
                        },
                        {
                            key: 'twitter:image',
                            property: 'twitter:image',
                            content: 'https://www.yellowbrick.com' + this.$page.blog.coverImage,
                        },
                        {
                            key: 'twitter:url',
                            property: 'twitter:url',
                            content: 'https://www.yellowbrick.com' + this.$page.blog.path,
                        }
                    ]
                }
            }
            else if (this.$page.blog.title == "The Emergence of the Distributed Data Cloud") {
                return {
                    title: this.$page.blog.metaTitle ? this.$page.blog.metaTitle : this.$page.blog.title,
                    link: [
                        { rel: 'canonical', href: 'https://www.yellowbrick.com/blog/the-emergence-of-the-distributed-data-cloud/' },
                    ],
                    meta: [
                        {
                            key: 'description',
                            name: 'description',
                            content: this.$page.blog.description
                        },
                        {
                            key: 'og:title',
                            property: 'og:title',
                            content: this.$page.blog.title,
                        },
                        {
                            key: 'og:description',
                            property: 'og:description',
                            content: this.$page.blog.description,
                        },
                        {
                            key: 'og:url',
                            property: 'og:url',
                            content: 'https://www.yellowbrick.com' + this.$page.blog.path,
                        },
                        {
                            key: 'og:image',
                            property: 'og:image',
                            content: 'https://www.yellowbrick.com' + this.$page.blog.coverImage,
                        },
                        {
                            key: 'twitter:title',
                            property: 'twitter:title',
                            content: this.$page.blog.title,
                        },
                        {
                            key: 'twitter:description',
                            property: 'twitter:description',
                            content: this.$page.blog.description,
                        },
                        {
                            key: 'twitter:image',
                            property: 'twitter:image',
                            content: 'https://www.yellowbrick.com' + this.$page.blog.coverImage,
                        },
                        {
                            key: 'twitter:url',
                            property: 'twitter:url',
                            content: 'https://www.yellowbrick.com' + this.$page.blog.path,
                        }
                    ]
                }
            }
            else if (this.$page.blog.title == "The What, Why, and How of the Distributed Data Cloud") {
                return {
                    title: this.$page.blog.metaTitle ? this.$page.blog.metaTitle : this.$page.blog.title,
                    link: [
                        { rel: 'canonical', href: 'https://www.yellowbrick.com/blog/the-what-why-and-how-of-the-distributed-data-cloud/' },
                    ],
                    meta: [
                        {
                            key: 'description',
                            name: 'description',
                            content: this.$page.blog.description
                        },
                        {
                            key: 'og:title',
                            property: 'og:title',
                            content: this.$page.blog.title,
                        },
                        {
                            key: 'og:description',
                            property: 'og:description',
                            content: this.$page.blog.description,
                        },
                        {
                            key: 'og:url',
                            property: 'og:url',
                            content: 'https://www.yellowbrick.com' + this.$page.blog.path,
                        },
                        {
                            key: 'og:image',
                            property: 'og:image',
                            content: 'https://www.yellowbrick.com' + this.$page.blog.coverImage,
                        },
                        {
                            key: 'twitter:title',
                            property: 'twitter:title',
                            content: this.$page.blog.title,
                        },
                        {
                            key: 'twitter:description',
                            property: 'twitter:description',
                            content: this.$page.blog.description,
                        },
                        {
                            key: 'twitter:image',
                            property: 'twitter:image',
                            content: 'https://www.yellowbrick.com' + this.$page.blog.coverImage,
                        },
                        {
                            key: 'twitter:url',
                            property: 'twitter:url',
                            content: 'https://www.yellowbrick.com' + this.$page.blog.path,
                        }
                    ]
                }
            }
            else {
                return {
                    title: this.$page.blog.metaTitle ? this.$page.blog.metaTitle : this.$page.blog.title,
                    meta: [
                        {
                            key: 'description',
                            name: 'description',
                            content: this.$page.blog.description
                        },
                        {
                            key: 'og:title',
                            property: 'og:title',
                            content: this.$page.blog.title,
                        },
                        {
                            key: 'og:description',
                            property: 'og:description',
                            content: this.$page.blog.description,
                        },
                        {
                            key: 'og:url',
                            property: 'og:url',
                            content: 'https://www.yellowbrick.com' + this.$page.blog.path,
                        },
                        {
                            key: 'og:image',
                            property: 'og:image',
                            content: 'https://www.yellowbrick.com' + this.$page.blog.coverImage,
                        },
                        {
                            key: 'twitter:title',
                            property: 'twitter:title',
                            content: this.$page.blog.title,
                        },
                        {
                            key: 'twitter:description',
                            property: 'twitter:description',
                            content: this.$page.blog.description,
                        },
                        {
                            key: 'twitter:image',
                            property: 'twitter:image',
                            content: 'https://www.yellowbrick.com' + this.$page.blog.coverImage,
                        },
                        {
                            key: 'twitter:url',
                            property: 'twitter:url',
                            content: 'https://www.yellowbrick.com' + this.$page.blog.path,
                        }
                    ]
                }
            }
        },
        data: () => ({
            categories: [],
            toggle: false,
            currentUrl: "",
            menu: [
                {
                    label: 'Our Authors',
                    route: '/our-authors/'
                },
            ],
            showDrawer: false,
            openNav: false,
        }),
        setAltImg(event) {
            event.target.src = "/uploads/author.png"
        },
        components: {
            Layout,
            SearchBlog1,
            SearchBlog,
            VueScriptComponent: () =>
                import('vue-script-component'),
        },
        methods: {
            handleEvent(open) {
                //window.location.href = open;
            },
            searchClick() {
                var x = document.getElementById("search_div1");
                if (x.style.display === "none") {
                    x.style.display = "block";
                } else {
                    x.style.display = "none";
                }
            },
            toggleDrawer(open) {
                this.showDrawer = open
                if (open) disableBodyScroll(this.$refs.drawer)
                else clearAllBodyScrollLocks()
            },
            clickAnywhere(e) {
                this.menu.forEach((item, x) => {
                    if (!document.getElementById(`menu-${x}`).contains(e.target) && item.show) item.show = false
                })
            },
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
    query Blog($id: ID!) {
    blog(id: $id) {
    title
    metaTitle
    description
    path
    content
    coverImage
    cover_alt
    thumbnailImage
    date(format: "MMMM D, YYYY")
    author {
    name
    authorImage
    position
    path
    }
    categories {
    id
    title
    path
    id
    title
    belongsTo(limit: 2, sortBy: "date", order: ASC,filter: {id: { nin: [$id] }} ) {
    edges {
    node {
    ...on Blog {
    id
    title
    metaTitle
    date
    path
    description
    path
    coverImage
    cover_alt
    thumbnailImage
    }
    }
    }
    }
    }
    }
    latestBlogs: allBlog(limit: 2, sortBy: "date", order: DESC) {
    edges {
    node {
    id
    title
    metaTitle
    description
    date(format: "MMMM D, YYYY")
    categories {
    id
    title
    belongsTo {
    edges {
    node {
    ...on Blog {
    id
    title
    metaTitle
    date
    path
    description
    }
    }
    }
    }
    }
    path
    coverImage
    cover_alt
    thumbnailImage
    }
    }
    }
    allAuthor(sortBy: "name", order: ASC) {
    edges {
    node {
    name
    position
    authorImage
    authorAbout
    path
    }
    }
    }
    allCategory(sortBy: "title", order: ASC) {
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

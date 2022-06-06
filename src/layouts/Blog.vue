<style scoped>
    ::placeholder {
        @apply text-base text-gray-400 font-normal;
    }
    .Cookie--base {
        background: black !important;
        color: white !important;
        border-top: 1px solid white;
        border-bottom: 1px solid white;
    }

    .cookie_terms a {
        color: white !important;
        background-image: none !important;
        background-size: 0px !important;
        font-weight: 500;
    }
    .nav-arrow:after,.nav-arrow:before {
        --bg-opacity: 1;
        background-color: black;
    }
    .search_div {
        top: 40px !important;
        right: 180px !important;
    }
    .bg-blackish {
        background-color: rgba(13, 23, 28, .97);
    }
    #topnav {
        border-bottom: 1px solid black;
    }
    #mobile_search {
        display:none;
    }
    @media only screen and (max-width: 768px) {
        .mobile-menu {
            -webkit-overflow-scrolling: touch;
            overflow-y: scroll;
        }
        #mobile_search {
            display: block;
        }
    }
    @media only screen and (max-width: 768px) {
        #search_div1, #search_div {
            display: none;
        }
        #topnav img {
            width: 180px;
        }
    }
        #search-box {
            padding-left: 50px;
            padding-right: 50px;
        }

        @media(min-width: 880px) {
            

            .menu-item:hover > label > .submenu {
                display: block !important;
            }

            .submenu {
                margin: 0;
            }
        }

        .search-icon {
            height: 20px;
            width: auto;
        }

        .child {
            @apply ml-4;
        }
</style>


<template>
    <div>
        <!-- Start cookieyes banner -->
        <script type="application/javascript">
            var myEle = document.getElementById('cookieyes-banner');
            if (myEle) {
                var myEleValue = myEle.value;
            }
            else {
            let recaptchaScript = document.createElement('script')
              recaptchaScript.setAttribute('id', 'cookieyes')
              recaptchaScript.setAttribute('type', 'text/javascript')
              recaptchaScript.setAttribute('src', 'https://cdn-cookieyes.com/client_data/33fcb4ea74db6df2ce4b6608/script.js')
              document.head.appendChild(recaptchaScript)
            }
        </script>

        <slot />

        <footer>
            <section class="bg-gray-500 px-5">
                <div class="max-w-1400 mx-auto py-12 md:py20 px-6 lg:px-0">
                    <div class="w-full flex flex-row items-center mb-12">
                        <a @click="handleEvent('/')" href="/" to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 242.7 40.9" xml:space="preserve" style="width:200px;max-width:200px;">
                            <path fill="#f3f6f6" d="M186.5 15.4h3.4v2.8h.1c.2-.5.5-.9.9-1.3s.8-.7 1.3-1 1-.5 1.5-.7c.6-.2 1.1-.2 1.7-.2s1.1.1 1.5.2l-.2 3.7c-.3-.1-.6-.1-.8-.2-.3-.1-.6-.1-.8-.1-1.7 0-3 .5-3.8 1.4-.9.9-1.3 2.4-1.3 4.4v9h-3.4v-18h-.1zM66.2 18L58.6 7.6h-4.4l10.4 13.6v12.2h3.5V21L78.3 7.6h-4.4L66.2 18zM130.9 24.4c0 5.2-4.2 9.5-9.5 9.5s-9.5-4.2-9.5-9.5c0-5.2 4.2-9.5 9.5-9.5s9.5 4.3 9.5 9.5zm-9.4-6.1c-3.4 0-6.1 2.7-6.1 6.1s2.7 6.1 6.1 6.1 6.1-2.7 6.1-6.1-2.8-6.1-6.1-6.1zM82.5 14.9c-5.2 0-9.5 4.2-9.5 9.5s4.2 9.5 9.5 9.5c2.8 0 5.3-1.2 7-3.1l-3-1.7c-1.1.9-2.5 1.5-4 1.5-2.9 0-5.4-2.1-6-4.8h15.3c.1-.4.1-.8.1-1.3 0-5.3-4.2-9.6-9.4-9.6zm0 3.4c2.8 0 5.2 2 5.9 4.6H76.6c.6-2.6 3-4.6 5.9-4.6zM216.6 30.5c-3.4 0-6.1-2.7-6.1-6.1s2.7-6.1 6.1-6.1c1.5 0 2.9.6 4 1.5l3-1.7c-1.7-1.9-4.2-3.2-7-3.2-5.2 0-9.5 4.2-9.5 9.5s4.2 9.5 9.5 9.5c2.8 0 5.3-1.2 7-3.1l-3-1.7c-1.1.8-2.5 1.4-4 1.4zM132.3 15.4h3.8l4 13.5h.1l4.3-13.5h3.6l4.6 13.5h.1l3.8-13.5h3.6l-5.8 18h-3.5l-4.8-13.5h-.1l-4.4 13.5H138l-5.7-18zM199.8 15.4h3.4v18h-3.4v-18zM199.8 8.9h3.4v3.4h-3.4V8.9zM95.8 33.4h3.4V9.6l-3.4-2v25.8zM104.8 33.4h3.4V9.6l-3.4-2v25.8zM173.2 14.9c-2.3 0-4.4.8-6.1 2.2V9.5l-3.4-2v25.8h3.4v-1.8c1.6 1.4 3.8 2.2 6.1 2.2 5.2 0 9.5-4.2 9.5-9.5 0-5-4.3-9.3-9.5-9.3zm0 15.6c-3.4 0-6.1-2.7-6.1-6.1s2.7-6.1 6.1-6.1 6.1 2.7 6.1 6.1-2.7 6.1-6.1 6.1zM233.6 23.6l8.4-8.2h-4.7l-7.8 7.8V9.6l-3.4-2v25.8h3.4v-9.3l8.4 9.3h4.8l-9.1-9.8z" />
                            <path fill="#fdcf41" d="M35.4 0H18.7l-1.8 3.2 8.3 14.5h16.7l1.9-3.2L35.4 0z" />
                            <path fill="#cf8a00" d="M35.4 0l-1.8 3.2 8.3 14.5 1.9-3.2L35.4 0z" />
                            <path fill="#fff3a2" d="M35.4 0l-1.8 3.2H16.9L18.7 0h16.7z" />
                            <path fill="#fdcf41" d="M0 20.5L8.3 35H12l8.4-14.5L12 6H8.3L0 20.5z" />
                            <path fill="#fff3a2" d="M0 20.5h3.7L12 6H8.3L0 20.5z" />
                            <path fill="#cf8a00" d="M0 20.5h3.7L12 35H8.3L0 20.5z" />
                            <path fill="#fdcf41" d="M35.4 40.9l8.4-14.4-1.9-3.2H25.2l-8.3 14.5 1.8 3.1h16.7z" />
                            <path fill="#cf8a00" d="M35.4 40.9l-1.8-3.1H16.9l1.8 3.1h16.7z" />
                            <path fill="#cf8a00" d="M35.4 40.9l-1.8-3.1 8.3-14.5 1.9 3.2-8.4 14.4z" /></svg>
                        </a>
                    </div>
                    <div class="flex flex-row flex-wrap">
                        <div class="flex flex-wrap w-full lg:w-1/2 mb-10">

                            <div class="w-full sm:w-1/2 flex flex-col">
                                <ul class="list-none p-0 m-0 text-gray-200 leading-loose">
                                    <li><a @click="handleEvent('/products/data-warehouse/')" href="/products/data-warehouse/">Products</a></li>
                                    <li><a @click="handleEvent('/customers/')" href="/customers/">Customers</a></li>
                                    <li><a @click="handleEvent('/resources/')" href="/resources/">Resource Library</a></li>
                                    <li><a @click="handleEvent('/company/partners/')" href="/company/partners/">Partners</a></li>
                                    <li><a @click="handleEvent('/company#teammembers')" href="/company#teammembers">Team</a></li>
                                    <li><a @click="handleEvent('https://support.yellowbrick.io/')" href="https://support.yellowbrick.io/">Customer Center</a></li>
                                </ul>
                            </div>

                            <div class="w-full sm:w-1/2 flex flex-col">
                                <ul class="list-none p-0 m-0 text-gray-200 leading-loose">

                                    <li>
                                        <a @click="handleEvent('/contact-us/')" href="/contact-us/">Contact Us</a>
                                    </li>
                                    <li>
                                        <a @click="handleEvent('/company/careers/')" href="/company/careers/">Careers</a>
                                    </li>
                                    <li>
                                        <a @click="handleEvent('/resources/webcasts/')" href="/resources/webcasts/">Virtual Events</a>
                                    </li>
                                    <li>
                                        <a @click="handleEvent('/blog/')" href="/blog/">Blog</a>
                                    </li>
                                    <li>
                                        <a @click="handleEvent('/newsroom/')" href="/newsroom/">News</a>
                                    </li>
                                    <li>
                                        <a @click="handleEvent('/company/')" href="/company/">Company</a>
                                    </li>
                                    <li>
                                        <a @click="handleEvent('/terms/')" href="/terms/">Terms & Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="flex flex-wrap w-full lg:w-1/2">
                            <div class="w-full sm:w-1/2 flex flex-col pb-8 sm:pb-0">
                                <p class="text-gray-200">
                                    <span class="text-white font-semibold">US</span><br />
                                    Phone 877.492.3282<br />
                                    <a class="text-yellow1" href="mailto:info@yellowbrick.com">info@yellowbrick.com</a>
                                </p>


                                <p class="text-gray-200">
                                    <span class="text-white font-semibold">US Headquarters</span><br />
                                    660 W. Dana Street<br />
                                    Mountain View, CA  94041
                                </p>

                            </div>

                            <div class="w-full sm:w-1/2 flex flex-col">
                                <p class="text-gray-200">
                                    <span class="text-white font-semibold">International</span><br />
                                    Phone +1.650.687.0896<br />
                                    <a class="text-yellow1" href="mailto:info@yellowbrick.com">info@yellowbrick.com</a>
                                </p>


                                <p class="text-gray-200">
                                    <span class="text-white font-semibold">Europe Headquarters</span><br />
                                    60 Trafalgar Square<br />
                                    London, WC2N 5DS UK
                                </p>
                                <p class="text-gray-200">
                                    <span class="text-white font-semibold">Asia Headquarters</span><br />
                                    13th Floor, 2 Blenheim Ave<br />
                                    Tsin Sha Tsui, Hong Kong
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-4 bg-gray-500 text-gray-100 px-5">
                <div class="max-w-1400 mx-auto flex flex-row flex-wrap justify-between items-center">
                    <p class="flex flex-col w-full sm:w-3/4 text-sm text-center sm:text-left mb-6 sm:mb-0">
                        &copy; {{new Date().getFullYear()}} Yellowbrick Data, Inc. All rights reserved.
                    </p>

                    <div class="flex w-full sm:w-1/4 justify-center sm:justify-end">
                        <a href="https://twitter.com/yellowbrickdata" class="icon mr-6" aria-label="Yellowbrick Twitter Page">
                            <svg class="sm-icons twitter w-4 md:w-6 h-4 md:h-6" data-name="twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                                <path d="M127.85 35.26a52.47 52.47 0 01-15 4.12 26.25 26.25 0 0011.49-14.47 52.37 52.37 0 01-16.6 6.35A26.16 26.16 0 0063.18 55.1 74.24 74.24 0 019.29 27.79a26.17 26.17 0 008.09 34.9 25.91 25.91 0 01-11.84-3.27v.33a26.17 26.17 0 0021 25.64 26.15 26.15 0 01-6.89.91 26.56 26.56 0 01-4.92-.46A26.17 26.17 0 0039.12 104a52.42 52.42 0 01-32.47 11.2 53.62 53.62 0 01-6.24-.37 74 74 0 0040.08 11.75c48.09 0 74.39-39.84 74.39-74.39 0-1.14 0-2.26-.07-3.39a52.92 52.92 0 0013.04-13.54z" />
                            </svg>
                        </a>

                        <a href="https://www.linkedin.com/company/yellowbrickdata/" class="icon" aria-label="Yellowbrick Linkedin Page">
                            <svg class="sm-icons linkedin w-4 md:w-6 h-4 md:h-6" data-name="linkedin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                                <defs></defs>
                                <path d="M2.42 42.32h26.49v85.12H2.42zM15.67 0A15.35 15.35 0 11.32 15.34 15.34 15.34 0 0115.67 0M45.5 42.32h25.37V54h.36c3.53-6.69 12.16-13.75 25-13.75C123.05 40.2 128 57.83 128 80.76v46.68h-26.45V86.05c0-9.87-.17-22.57-13.75-22.57-13.8 0-15.87 10.75-15.87 21.86v42.1H45.5z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

        </footer>
    </div>
</template>

<script>import {
    disableBodyScroll,
    clearAllBodyScrollLocks
  } from 'body-scroll-lock'
    import SearchBlog from '@/components/SearchBlog'


  export default {
    components: {
          SearchBlog
    },
        data: () => ({
            categories: [],
             searchResults: null,
      menu: [
        {
          label: 'Industries',
          show: false,
          subitems: [{
              label: 'Data Lake Augmentation',
              route: '/solutions/data-lake-augmentation/'
            },
            {
              label: 'Data Warehouse Modernization',
              route: '/solutions/data-warehouse-modernization/',
              parent: true
            },
          ]
        },
        {
          label: 'News',
            route: '/News/'
        },
        {
          label: 'More',
          show: false,
          subitems: [{
              label: 'Solution Partners',
              route: '/company/partners/#solution'
            },
          ]
        },
      ],
      showDrawer: false,
      searchFocus: false,
      openNav: false,
    }),
    beforeCreate(){

  },
    mounted() {

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
      self.addEventListener('install', function(e) {
        self.skipWaiting();
      });

      self.addEventListener('activate', function(e) {
        self.registration.unregister()
          .then(function() {
            return self.clients.matchAll();
          })
          .then(function(clients) {
            clients.forEach(client => client.navigate(client.url))
          });
      });

      clearAllBodyScrollLocks()
      document.addEventListener('click', this.clickAnywhere)
      document.addEventListener('keydown', this.pressAnything)
      document.addEventListener('scroll', this.scrollAnytime)

      setTimeout(function(document){
        if(!document)
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
            enableTracking() {
                document.cookie = 'analytics=disable; expires=Sun, 1 Jan 2023 00:00:00 UTC; path=/'
            },
     handleEvent(open) {
               // window.location.href = open;
            },
      toggleDrawer(open) {
        this.showDrawer = open
        if (open) disableBodyScroll(this.$refs.drawer)
        else clearAllBodyScrollLocks()
      },

    }
  }</script>
<page-query>
    query Blog($page: Int) {
    featuredBlog: allBlog(filter: { featured: { eq: true }}, limit: 1, sortBy: "date", order: DESC) {
    edges {
    node {
    id
    title
    description
    date(format: "MMMM D, YYYY")
    categories {
    id
    title
    }
    path
    coverImage
    }
    }
    }
    latestBlogs: allBlog(limit: 2, sortBy: "date", order: DESC) {
    edges {
    node {
    id
    title
    description
    date(format: "MMMM D, YYYY")
    categories {
    id
    title
    }
    path
    coverImage
    }
    }
    }
    allBlog(perPage: 12, page: $page, sortBy: "date", order: DESC) @paginate {
    pageInfo {
    totalPages
    currentPage
    isFirst
    isLast
    }
    edges {
    node {
    id
    title
    description
    date(format: "MMMM D, YYYY")
    categories {
    id
    title
    }
    path
    coverImage
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
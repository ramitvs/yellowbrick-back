<style scoped>
  .bg-blackish {
    background-color: rgba(13, 23, 28, .97);
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
  @media only screen and (max-width: 768px) {
    .mobile-menu {
      -webkit-overflow-scrolling: touch;
      overflow-y: scroll;
    }
  }

  nav {
    & ul {
      & li {
        padding-bottom: 0;
      }
    }
  }

  @media(min-width: 880px) {
    .menu-item:hover>label>.submenu {
      display: block !important;
    }

    .submenu {
      margin: 0;
    }
  }

  .search-icon {
    height: 15px;
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
        <header id="topnav" class="fixed flex flex-row cc:flex-col z-50 items-center w-full bg-blackish">
            <nav role="navigation" class="flex flex-col items-center space-between max-w-1400 mx-auto w-full px-5 py-3 cc:py-0">

                <div class="flex items-center w-full space-between">

                    <div role="navigation" class="text-white z-30 w-full flex flex-wrap justify-end xl:flex-no-wrap">

                        <a href="/" class="mr-auto flex-auto self-start py-4" aria-label="Yellowbrick Home Page">
                            <svg class="hidden cc:flex lg:hidden" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 43.8 40.9" xml:space="preserve" style="width:100%;max-width:44px;">
                            <path fill="#fdcf41" d="M35.4 0H18.7l-1.8 3.2 8.3 14.5h16.7l1.9-3.2L35.4 0z" />
                            <path fill="#cf8a00" d="M35.4 0l-1.8 3.2 8.3 14.5 1.9-3.2L35.4 0z" />
                            <path fill="#fff3a2" d="M35.4 0l-1.8 3.2H16.9L18.7 0h16.7z" />
                            <path fill="#fdcf41" d="M0 20.5L8.3 35H12l8.4-14.5L12 6H8.3L0 20.5z" />
                            <path fill="#fff3a2" d="M0 20.5h3.7L12 6H8.3L0 20.5z" />
                            <path fill="#cf8a00" d="M0 20.5h3.7L12 35H8.3L0 20.5z" />
                            <path fill="#fdcf41" d="M35.4 40.9l8.4-14.4-1.9-3.2H25.2l-8.3 14.5 1.8 3.1h16.7z" />
                            <path fill="#cf8a00" d="M35.4 40.9l-1.8-3.1H16.9l1.8 3.1h16.7z" />
                            <path fill="#cf8a00" d="M35.4 40.9l-1.8-3.1 8.3-14.5 1.9 3.2-8.4 14.4z" /></svg>
                            <svg class="flex cc:hidden lg:flex" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 242.7 40.9" style="width:100%; max-width:180px;" xml:space="preserve">
                            <path fill="#f3f6f6" d="M186.5 15.4h3.4v2.8h.1c.2-.5.5-.9.9-1.3s.8-.7 1.3-1 1-.5 1.5-.7c.6-.2 1.1-.2 1.7-.2s1.1.1 1.5.2l-.2 3.7c-.3-.1-.6-.1-.8-.2-.3-.1-.6-.1-.8-.1-1.7 0-3 .5-3.8 1.4-.9.9-1.3 2.4-1.3 4.4v9h-3.4v-18h-.1zM66.2 18L58.6 7.6h-4.4l10.4 13.6v12.2h3.5V21L78.3 7.6h-4.4L66.2 18zM130.9 24.4c0 5.2-4.2 9.5-9.5 9.5s-9.5-4.2-9.5-9.5c0-5.2 4.2-9.5 9.5-9.5s9.5 4.3 9.5 9.5zm-9.4-6.1c-3.4 0-6.1 2.7-6.1 6.1s2.7 6.1 6.1 6.1 6.1-2.7 6.1-6.1-2.8-6.1-6.1-6.1zM82.5 14.9c-5.2 0-9.5 4.2-9.5 9.5s4.2 9.5 9.5 9.5c2.8 0 5.3-1.2 7-3.1l-3-1.7c-1.1.9-2.5 1.5-4 1.5-2.9 0-5.4-2.1-6-4.8h15.3c.1-.4.1-.8.1-1.3 0-5.3-4.2-9.6-9.4-9.6zm0 3.4c2.8 0 5.2 2 5.9 4.6H76.6c.6-2.6 3-4.6 5.9-4.6zM216.6 30.5c-3.4 0-6.1-2.7-6.1-6.1s2.7-6.1 6.1-6.1c1.5 0 2.9.6 4 1.5l3-1.7c-1.7-1.9-4.2-3.2-7-3.2-5.2 0-9.5 4.2-9.5 9.5s4.2 9.5 9.5 9.5c2.8 0 5.3-1.2 7-3.1l-3-1.7c-1.1.8-2.5 1.4-4 1.4zM132.3 15.4h3.8l4 13.5h.1l4.3-13.5h3.6l4.6 13.5h.1l3.8-13.5h3.6l-5.8 18h-3.5l-4.8-13.5h-.1l-4.4 13.5H138l-5.7-18zM199.8 15.4h3.4v18h-3.4v-18zM199.8 8.9h3.4v3.4h-3.4V8.9zM95.8 33.4h3.4V9.6l-3.4-2v25.8zM104.8 33.4h3.4V9.6l-3.4-2v25.8zM173.2 14.9c-2.3 0-4.4.8-6.1 2.2V9.5l-3.4-2v25.8h3.4v-1.8c1.6 1.4 3.8 2.2 6.1 2.2 5.2 0 9.5-4.2 9.5-9.5 0-5-4.3-9.3-9.5-9.3zm0 15.6c-3.4 0-6.1-2.7-6.1-6.1s2.7-6.1 6.1-6.1 6.1 2.7 6.1 6.1-2.7 6.1-6.1 6.1zM233.6 23.6l8.4-8.2h-4.7l-7.8 7.8V9.6l-3.4-2v25.8h3.4v-9.3l8.4 9.3h4.8l-9.1-9.8z" />
                            <g>
                            <path fill="#fdcf41" d="M35.4 0H18.7l-1.8 3.2 8.3 14.5h16.7l1.9-3.2L35.4 0z" />
                            <path fill="#cf8a00" d="M35.4 0l-1.8 3.2 8.3 14.5 1.9-3.2L35.4 0z" />
                            <path fill="#fff3a2" d="M35.4 0l-1.8 3.2H16.9L18.7 0h16.7z" />
                            <path fill="#fdcf41" d="M0 20.5L8.3 35H12l8.4-14.5L12 6H8.3L0 20.5z" />
                            <path fill="#fff3a2" d="M0 20.5h3.7L12 6H8.3L0 20.5z" />
                            <path fill="#cf8a00" d="M0 20.5h3.7L12 35H8.3L0 20.5z" />
                            <path fill="#fdcf41" d="M35.4 40.9l8.4-14.4-1.9-3.2H25.2l-8.3 14.5 1.8 3.1h16.7z" />
                            <path fill="#cf8a00" d="M35.4 40.9l-1.8-3.1H16.9l1.8 3.1h16.7z" />
                            <path fill="#cf8a00" d="M35.4 40.9l-1.8-3.1 8.3-14.5 1.9 3.2-8.4 14.4z" />
                </g>
              </svg>
                        </a>

                        <div :class="[showDrawer ? 'bg-transparent-75' : 'hidden']" class="fixed cc:hidden z-40 inset-0 trans-bg-color" @click="toggleDrawer(false)" />
                        <ul ref="drawer" :style="{ right: showDrawer ? '0px' : '-100%' }" style="transition: right 0.25s ease;" class="fixed z-50 cc:static cc:flex items-center inset-y-0 h-screen cc:h-auto bg-black cc:bg-transparent w-full cc:w-auto m-0 mobile-menu">
                            <li class="cc:hidden flex justify-between p-2">
                                <a href="/" class="p-2 pl-4">
                                    <img alt="Yellowbrick Data Logo" src="/uploads/images/yb-logo-dark.svg" width="130" />
                                </a>
                                <div :class="{ hidden: !showDrawer }" class="p-2" @click="toggleDrawer(false)">
                                    <button id="close"></button>
                                </div>
                            </li>

                            <li id="search-box" class="flex list-none font-normal rfs-text-lg p-1 pl-6 cc:px-2 cc:py-1 relative">
                                <span style="transform: rotate(-45deg);" class="inline-block cursor-pointer pb-2" @click="searchClick"><img src="~@/assets/images/icons/search-icon.svg" class="search-icon" /></span>
                                <transition name="pusher">
                                    <search-site v-show="searchFocus" class="cc:absolute text-transparent" style="top:3px;right:28px;z-index:60;" />
                                </transition>
                            </li>

                            <li v-for="(item, x) in menu" :key="x" :id="`menu-${x}`" class="flex relative trans-bg-color pl-0 text-base hover:text-yellow1 menu-item" :class="{'cc:pl-0 lg:pl-0' : x === 0, 'cc:pl-2 lg:pl-2' : x === Object.keys(menu).length - 2, 'cc:pl-3 lg:pl-6' : x !== 0 && x !== Object.keys(menu).length - 2}"
                                @click="item.show = !item.show">
                                <a v-if="item.route" :href="item.route" class="p-2 px-6 cc:px-2 cc:py-2">{{ item.label }}</a>
                                <label v-else aria-haspopup="true" class="w-full relative">
                                    <div class="flex flex-row items-center">
                                        <span v-text="item.label" class="flex items-center cursor-pointer p-2 pl-6 cc:px-2 cc:py-2" />
                                        <span class="nav-arrow" />
                                    </div>
                                    <transition name="slider">
                                        <ul v-show="item.show" class="cc:absolute py-3 whitespace-no-wrap bg-yellow1 cc:mt-4 min-w-full cc:min-w-200 rounded-sm submenu" aria-label="submenu">
                                            <li v-for="(subitem, y) in item.subitems" :key="y" class="main-nav-link" :class="{'child' : subitem.indent, 'parent' : subitem.parent}">
                                                <a :href="subitem.route" aria-haspopup="true" class="flex px-8 py-2 cc:px-2 w-full">{{ subitem.label }}</a>
                                            </li>
                                        </ul>
                                    </transition>
                                </label>
                            </li>
                            <li class="flex cc:hidden p-6 justify-center">
                                <a class="button button-sm yellow mx-0 px-4 lg:px-5" href="/test-drive/" aria-haspopup="true">
                                    <span class="whitespace-no-wrap">Test drive</span>
                                </a>
                                <a class="button button-sm yellow mx-0 px-4 lg:px-5" href="/go/book-a-demo/" aria-haspopup="true">
                                    <span class="whitespace-no-wrap">Book a demo</span>
                                </a>
                            </li>
                        </ul>

                        <div class="hidden cc:flex justify-end items-center border-t w-full xl:w-auto cc:border-gray-800 xl:border-0 cc:ml-5">
                            <ul class="flex m-0 px-0">
                                <li class="flex pr-1">
                                    <a class="button button-sm yellow mx-0 px-4 lg:px-5" href="/test-drive/" aria-haspopup="true">
                                        <span class="whitespace-no-wrap">Test drive</span>
                                    </a>
                                </li>
                                <li class="flex">
                                    <a class="button button-sm yellow mx-0 px-4 lg:px-5" href="/go/book-a-demo/" aria-haspopup="true">
                                        <span class="whitespace-no-wrap">Book a demo</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div class="cursor-pointer cc:hidden flex-1 flex items-center justify-end ml-8" @click="toggleDrawer(true)">
                        <button id="hamburger" aria-label="Show the menu" />
                    </div>

                </div>
            </nav>
        </header>

        <slot />

        <footer>
            <section class="bg-gray-500 px-5">
                <div class="max-w-1400 mx-auto py-12 md:py20 px-6 lg:px-0">
                    <div class="w-full flex flex-row items-center mb-12">
                        <a href="/">
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
                                    <li><a href="/products/data-warehouse/">Products</a></li>
                                    <li><a href="/customers/">Customers</a></li>
                                    <li><a href="/resources/">Resource Library</a></li>
                                    <li><a href="/company/partners/">Partners</a></li>
                                    <li><a href="/company#teammembers">Team</a></li>
                                    <li><a href="https://support.yellowbrick.io/">Customer Center</a></li>
                                </ul>
                            </div>

                            <div class="w-full sm:w-1/2 flex flex-col">
                                <ul class="list-none p-0 m-0 text-gray-200 leading-loose">
                                    <li>
                                        <a href="/contact-us/">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="/company/careers/">Careers</a>
                                    </li>
                                    <li>
                                        <a href="/resources/webcasts/">Virtual Events</a>
                                    </li>
                                    <li>
                                        <a href="/blog/">Blog</a>
                                    </li>
                                    <li>
                                        <a href="/newsroom/">News</a>
                                    </li>
                                    <li>
                                        <a href="/company/">Company</a>
                                    </li>
                                    <li>
                                        <a href="/terms/">Terms & Privacy Policy</a>
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

<script>
  import {
    disableBodyScroll,
    clearAllBodyScrollLocks
  } from 'body-scroll-lock'
  import SearchSite from '@/components/SearchSite'


  export default {
    components: {
          SearchSite,
    },
    data: () => ({
      menu: [{
          label: 'Products',
          show: false,
          subitems: [{
              label: 'Data Warehouse',
              route: '/products/data-warehouse/'
            },
            {
              label: 'Pricing',
              route: '/pricing/',
              indent: true
            },
            {
              label: 'Performance',
              route: '/performance/',
              indent: true
            },
            {
              label: 'Migration',
              route: '/products/migration/',
              indent: true
            },
            {
              label: 'Monitoring & Management',
              route: '/monitoring-and-management/',
              indent: true
            },
            {
              label: 'Security',
              route: '/security/',
              indent: true
            },
            {
              label: 'Cloud Disaster Recovery',
              route: '/products/cloud-disaster-recovery/'
            }
          ]
        },
        {
          label: 'Solutions',
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
            {
              label: 'Distributed Clouds',
              route: '/solutions/distributed-clouds/'
            },
            {
              label: 'Industries',
              route: '/solutions/industries/',
              parent: true
            },
            {
              label: 'Financial Services',
              route: '/solutions/financial-services/',
              indent: true
            },
            {
              label: 'Healthcare & Life Sciences',
              route: '/solutions/healthcare-life-sciences/',
              indent: true
            },
            {
              label: 'Insurance',
              route: '/solutions/insurance/',
              indent: true
            },
            {
              label: 'Retail',
              route: '/solutions/retail/',
              indent: true
            },
            {
              label: 'Federal',
              route: '/solutions/federal/',
              indent: true
            },
            {
              label: 'Telecommunications',
              route: '/solutions/telecom/',
              indent: true
            }
          ]
        },
        {
          label: 'Resources',
          show: false,
          subitems: [{
              label: 'Resource Library',
              route: '/resources/'
            },
            {
              label: 'Virtual Events',
              route: '/resources/webcasts/'
            },
            {
              label: 'Blog',
              route: '/blog/'
            },
            {
              label: 'Product Documentation',
              route: '/resources/product-documentation/'
            },
            {
              label: 'Customer Center',
              route: 'https://support.yellowbrick.io'
            }
          ]
        },
        {
          label: 'Customers',
          route: '/customers/'
        },
        {
          label: 'Partners',
          show: false,
          subitems: [{
              label: 'Reseller Partners',
              route: '/company/partners/#reseller'
            },
            {
              label: 'Solution Partners',
              route: '/company/partners/#solution'
            },
            {
              label: 'Technology Partners',
              route: '/company/partners/#technology'
            },
            {
              label: 'Contact Us',
              route: '/resellers/#more-info'
            },
            {
              label: 'Partner Portal',
              route: 'https://yellowbrick.channeltivity.com/'
            },
          ]
        },
        {
          label: 'Company',
          show: false,
          subitems: [{
              label: 'About',
              route: '/company/'
            },
            {
              label: 'Newsroom',
              route: '/newsroom/'
            },
            {
              label: 'Careers',
              route: '/company/careers/'
            },
            {
              label: 'Contact Us',
              route: '/contact-us/'
            }
          ]
        },
      ],
      showDrawer: false,
      searchFocus: false,
      openNav: false,
    }),
        mounted() {
       
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
        document.head.querySelector('meta[name="og:url"]').content = path;
        document.head.querySelector('meta[name="twitter:url"]').content = path;
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
            if (open == "/company/partners/#technology") {
                    document.getElementById("technology").scrollIntoView();
                }
                if (open == "/company/partners/#reseller") {
                    document.getElementById("reseller").scrollIntoView();
                }
                if (open == "/company/partners/#solution") {
                    document.getElementById("solution").scrollIntoView();
                }
                //window.location.href = open;
            },
      toggleDrawer(open) {
        this.showDrawer = open
        if (open) disableBodyScroll(this.$refs.drawer)
        else clearAllBodyScrollLocks()
      },
      searchClick() {
        this.searchFocus = true
        this.$nextTick(() => {
          document.getElementById('search-site').focus()
        })
      },
      clickAnywhere(e) {
        this.menu.forEach((item, x) => {
          if (!document.getElementById(`menu-${x}`).contains(e.target) && item.show) item.show = false
        })
        if (!document.getElementById('search-box').contains(e.target)) this.searchFocus = false
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
    }
  }
</script>

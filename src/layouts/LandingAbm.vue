<style scoped>
    .bg-blackish {
        background-color: rgba(23, 33, 38, .97);
    }

    @media only screen and (max-width: 768px) {
        .mobile-menu {
            -webkit-overflow-scrolling: touch;
            overflow-y: scroll;
        }
    }
</style>

<template>
    <div>

        <slot />

        <footer class="flex flex-row bg-gray-600">
            <section class="w-full py-4 text-gray-100 px-5">
                <div class="w-full max-w-1200 mx-auto flex flex-row flex-wrap justify-between items-center">
                    <p class="flex flex-col w-full sm:w-3/4 text-sm text-center sm:text-left mb-6 sm:mb-0">&copy; {{new Date().getFullYear()}} Yellowbrick Data, Inc. All rights reserved.</p>
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
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'

export default {
	mounted() {

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
    scrollAnytime() {
      (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < 70
        ? document.getElementById('topnav').classList.remove('bg-blackish')
        : document.getElementById('topnav').classList.add('bg-blackish')
    }
  }
}
</script>
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
    <header id="topnav" class="fixed px-5 z-50 h-20 flex items-center w-full trans-bg-color">
      <div class="w-full max-w-1200 mx-auto">
        <g-link to="/" aria-label="Yellowbrick Home Page">
          <svg class="hidden md:flex lg:hidden" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 43.8 40.9" xml:space="preserve" style="width:100%;max-width:44px;"><path fill="#fdcf41" d="M35.4 0H18.7l-1.8 3.2 8.3 14.5h16.7l1.9-3.2L35.4 0z"/><path fill="#cf8a00" d="M35.4 0l-1.8 3.2 8.3 14.5 1.9-3.2L35.4 0z"/><path fill="#fff3a2" d="M35.4 0l-1.8 3.2H16.9L18.7 0h16.7z"/><path fill="#fdcf41" d="M0 20.5L8.3 35H12l8.4-14.5L12 6H8.3L0 20.5z"/><path fill="#fff3a2" d="M0 20.5h3.7L12 6H8.3L0 20.5z"/><path fill="#cf8a00" d="M0 20.5h3.7L12 35H8.3L0 20.5z"/><path fill="#fdcf41" d="M35.4 40.9l8.4-14.4-1.9-3.2H25.2l-8.3 14.5 1.8 3.1h16.7z"/><path fill="#cf8a00" d="M35.4 40.9l-1.8-3.1H16.9l1.8 3.1h16.7z"/><path fill="#cf8a00" d="M35.4 40.9l-1.8-3.1 8.3-14.5 1.9 3.2-8.4 14.4z"/></svg>
          <svg class="flex md:hidden lg:flex" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 242.7 40.9" style="width:100%; max-width:180px;" xml:space="preserve"><path fill="#f3f6f6" d="M186.5 15.4h3.4v2.8h.1c.2-.5.5-.9.9-1.3s.8-.7 1.3-1 1-.5 1.5-.7c.6-.2 1.1-.2 1.7-.2s1.1.1 1.5.2l-.2 3.7c-.3-.1-.6-.1-.8-.2-.3-.1-.6-.1-.8-.1-1.7 0-3 .5-3.8 1.4-.9.9-1.3 2.4-1.3 4.4v9h-3.4v-18h-.1zM66.2 18L58.6 7.6h-4.4l10.4 13.6v12.2h3.5V21L78.3 7.6h-4.4L66.2 18zM130.9 24.4c0 5.2-4.2 9.5-9.5 9.5s-9.5-4.2-9.5-9.5c0-5.2 4.2-9.5 9.5-9.5s9.5 4.3 9.5 9.5zm-9.4-6.1c-3.4 0-6.1 2.7-6.1 6.1s2.7 6.1 6.1 6.1 6.1-2.7 6.1-6.1-2.8-6.1-6.1-6.1zM82.5 14.9c-5.2 0-9.5 4.2-9.5 9.5s4.2 9.5 9.5 9.5c2.8 0 5.3-1.2 7-3.1l-3-1.7c-1.1.9-2.5 1.5-4 1.5-2.9 0-5.4-2.1-6-4.8h15.3c.1-.4.1-.8.1-1.3 0-5.3-4.2-9.6-9.4-9.6zm0 3.4c2.8 0 5.2 2 5.9 4.6H76.6c.6-2.6 3-4.6 5.9-4.6zM216.6 30.5c-3.4 0-6.1-2.7-6.1-6.1s2.7-6.1 6.1-6.1c1.5 0 2.9.6 4 1.5l3-1.7c-1.7-1.9-4.2-3.2-7-3.2-5.2 0-9.5 4.2-9.5 9.5s4.2 9.5 9.5 9.5c2.8 0 5.3-1.2 7-3.1l-3-1.7c-1.1.8-2.5 1.4-4 1.4zM132.3 15.4h3.8l4 13.5h.1l4.3-13.5h3.6l4.6 13.5h.1l3.8-13.5h3.6l-5.8 18h-3.5l-4.8-13.5h-.1l-4.4 13.5H138l-5.7-18zM199.8 15.4h3.4v18h-3.4v-18zM199.8 8.9h3.4v3.4h-3.4V8.9zM95.8 33.4h3.4V9.6l-3.4-2v25.8zM104.8 33.4h3.4V9.6l-3.4-2v25.8zM173.2 14.9c-2.3 0-4.4.8-6.1 2.2V9.5l-3.4-2v25.8h3.4v-1.8c1.6 1.4 3.8 2.2 6.1 2.2 5.2 0 9.5-4.2 9.5-9.5 0-5-4.3-9.3-9.5-9.3zm0 15.6c-3.4 0-6.1-2.7-6.1-6.1s2.7-6.1 6.1-6.1 6.1 2.7 6.1 6.1-2.7 6.1-6.1 6.1zM233.6 23.6l8.4-8.2h-4.7l-7.8 7.8V9.6l-3.4-2v25.8h3.4v-9.3l8.4 9.3h4.8l-9.1-9.8z"/><g><path fill="#fdcf41" d="M35.4 0H18.7l-1.8 3.2 8.3 14.5h16.7l1.9-3.2L35.4 0z"/><path fill="#cf8a00" d="M35.4 0l-1.8 3.2 8.3 14.5 1.9-3.2L35.4 0z"/><path fill="#fff3a2" d="M35.4 0l-1.8 3.2H16.9L18.7 0h16.7z"/><path fill="#fdcf41" d="M0 20.5L8.3 35H12l8.4-14.5L12 6H8.3L0 20.5z"/><path fill="#fff3a2" d="M0 20.5h3.7L12 6H8.3L0 20.5z"/><path fill="#cf8a00" d="M0 20.5h3.7L12 35H8.3L0 20.5z"/><path fill="#fdcf41" d="M35.4 40.9l8.4-14.4-1.9-3.2H25.2l-8.3 14.5 1.8 3.1h16.7z"/><path fill="#cf8a00" d="M35.4 40.9l-1.8-3.1H16.9l1.8 3.1h16.7z"/><path fill="#cf8a00" d="M35.4 40.9l-1.8-3.1 8.3-14.5 1.9 3.2-8.4 14.4z"/></g></svg>
        </g-link>
    </div>

    </header>
    
    <slot />

    <footer class="flex flex-row bg-gray-700">
      <section class="w-full py-4 text-gray-100 px-5">
        <div class="w-full max-w-1200 mx-auto flex flex-row flex-wrap justify-between items-center">
          <p class="flex flex-col w-full sm:w-3/4 text-sm text-center sm:text-left mb-6 sm:mb-0">&copy; {{new Date().getFullYear()}} Yellowbrick Data, Inc. All rights reserved.</p>
          <div class="flex w-full sm:w-1/4 justify-center sm:justify-end">
            <a href="https://twitter.com/yellowbrickdata" class="icon mr-6" aria-label="Yellowbrick Twitter Page">
              <svg class="sm-icons twitter w-4 md:w-6 h-4 md:h-6" data-name="twitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M127.85 35.26a52.47 52.47 0 01-15 4.12 26.25 26.25 0 0011.49-14.47 52.37 52.37 0 01-16.6 6.35A26.16 26.16 0 0063.18 55.1 74.24 74.24 0 019.29 27.79a26.17 26.17 0 008.09 34.9 25.91 25.91 0 01-11.84-3.27v.33a26.17 26.17 0 0021 25.64 26.15 26.15 0 01-6.89.91 26.56 26.56 0 01-4.92-.46A26.17 26.17 0 0039.12 104a52.42 52.42 0 01-32.47 11.2 53.62 53.62 0 01-6.24-.37 74 74 0 0040.08 11.75c48.09 0 74.39-39.84 74.39-74.39 0-1.14 0-2.26-.07-3.39a52.92 52.92 0 0013.04-13.54z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/yellowbrickdata/" class="icon" aria-label="Yellowbrick Linkedin Page">
              <svg class="sm-icons linkedin w-4 md:w-6 h-4 md:h-6" data-name="linkedin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><defs></defs><path d="M2.42 42.32h26.49v85.12H2.42zM15.67 0A15.35 15.35 0 11.32 15.34 15.34 15.34 0 0115.67 0M45.5 42.32h25.37V54h.36c3.53-6.69 12.16-13.75 25-13.75C123.05 40.2 128 57.83 128 80.76v46.68h-26.45V86.05c0-9.87-.17-22.57-13.75-22.57-13.8 0-15.87 10.75-15.87 21.86v42.1H45.5z"/>
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
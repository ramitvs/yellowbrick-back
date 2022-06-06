// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue'
import Vuex from 'vuex'
import VueScrollTo from 'vue-scrollto'
import VuePluralize from 'vue-pluralize'
import VueDisqus from 'vue-disqus'

import 'typeface-source-sans-pro'
import '~/css/main.css'
import '~/css/prism.css'
import SocialSharing  from 'vue-social-sharing'



export default function(Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(Vuex);
    Vue.use(VuePluralize);
    Vue.use(SocialSharing);
    Vue.use(VueDisqus);
  appOptions.store = new Vuex.Store({
    state:{
      filter:true,
    },
    mutations: {
      increment (state) {
        state.filter = false;
      }
    }
  });


  router.beforeEach((to, _from, next) => {
    head.meta.push({
      key: 'og:url',
      name: 'og:url',
      content: 'https://www.yellowbrick.com' + to.path,
    })
    head.meta.push({
      key: 'twitter:url',
      name: 'twitter:url',
      content: 'https://www.yellowbrick.com' + to.path,
    })
      head.meta.push({
          rel: 'meta',
          name: 'google-site-verification',
          content: 'NC78CPdFCziU5hWlyrNDag4IFcqDLEndo2qoUpErhVg'
      })
      head.meta.push({
          key: 'og:description',
          name: 'og:description',
          content: `The ultimate solution for your data warehouse. Quick to deploy, easy to expand, and simple to manage. Yellowbrick can solve your data problems.`,
      })
      head.meta.push({
          key: 'og:title',
          name: 'og:title',
          content: `The Only Modern Hybrid Cloud Data Warehouse`,
      })
      head.meta.push({
          key: 'og:type',
          name: 'og:type',
          content: `article`,
      })
      head.meta.push({
          key: 'og:image',
          name: 'og:image',
          content: `https://www.yellowbrick.com/uploads/yb-icon.png`,
      })

      head.meta.push({
          key: 'twitter:description',
          name: 'twitter:description',
          content: `The ultimate solution for your data warehouse. Quick to deploy, easy to expand, and simple to manage. Yellowbrick can solve your data problems.`,
      })
      head.meta.push({
          key: 'twitter:card',
          name: 'twitter:card',
          content: `summary`,
      })
      head.meta.push({
          key: 'twitter:site',
          name: 'twitter:site',
          content: `@YellowbrickData`,
      })
      head.meta.push({
          key: 'twitter:creator',
          name: 'twitter:creator',
          content: `@YellowbrickData`,
      })
      head.meta.push({
          key: 'twitter:title',
          name: 'twitter:title',
          content: `The Only Modern Hybrid Cloud Data Warehouse`,
      })
      head.meta.push({
          key: 'twitter:image',
          name: 'twitter:image',
          content: `https://www.yellowbrick.com/uploads/yb-icon.png`,
      })
    next()
  })

  

  Vue.use(VueScrollTo, {
    duration: 500,
    offset: -80,
    easing: 'ease'
  })
}

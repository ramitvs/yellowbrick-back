// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config.module.rule('vue').uses.delete('cache-loader');
            config.module.rule('js').uses.delete('cache-loader');
            config.module.rule('ts').uses.delete('cache-loader');
            config.module.rule('tsx').uses.delete('cache-loader');
        }
    },
  siteName: 'Yellowbrick Data',
  siteUrl: 'https://www.yellowbrick.com',
  siteDescription:
  'The ultimate solution for your data warehouse. Quick to deploy, easy to expand, and simple to manage. Yellowbrick Data can solve your data problems.',
  icon: './src/favicon.png',
  
  plugins: [
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-MDXRJDJ',
        enabled: true,
        debug: false
      }
    },
    {
      use: 'gridsome-plugin-netlify-cms',
      options: {
          publicPath: '/admin',
          modulePath: './src/admin/index.js',
      }
    },
    {
      use: 'gridsome-transformer-netlify',
      options: {
        imageKey: 'image',
        markdownKey: 'body'
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Blog',
        baseDir: './data/blog',
        pathPrefix: '/blog',
        template: './src/templates/Blog.vue',
        //plugins: [
         // '@gridsome/remark-prismjs'
       // ],
        refs: {
            author: 'Author',
            categories: {
                typeName: 'Category',
                route: '/blog/category/:id',
                template: './src/templates/Category.vue',
                create: true
            },
        }
      }
      },
      {
          use: '@gridsome/vue-remark',
          options: {
              typeName: 'Author',
              baseDir: './data/authors',
              pathPrefix: '/our-authors',
              template: './src/templates/Authors.vue',
              plugins: [
                  '@gridsome/remark-prismjs'
              ]
          }
      },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Releases',
        baseDir: './data/press-releases',
        pathPrefix: '/press-releases',
        template: './src/templates/PressReleases.vue',
        plugins: [
          '@gridsome/remark-prismjs'
        ]
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Webcasts',
        baseDir: './data/webcasts',
        pathPrefix: '/webcasts',
        plugins: [
          '@gridsome/remark-prismjs'
        ]
      }
      },
      {
          use: '@gridsome/source-filesystem',
          options: {
              path: 'data/authors/*.md',
              typeName: 'Author',
          }
      },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'data/pages/**/*.yml',
        typeName: 'Pages',
        remark: {
          plugins: [
            // ...local plugins
          ]
        }
      }
    },
    {
      use: 'gridsome-source-greenhouse',
      options: {
        boardToken: 'yellowbrickdata',
        harvestApiToken: 'aba525b3b05f972f3163c492fe35adc9-2',
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: 'tailwind.config.js',
        presetEnvConfig: {},
        shouldImport: true,
        shouldTimeTravel: true
      }
    },
    {
      use: 'gridsome-plugin-base-components'
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/eula', '/media/*', '/webcasts/*']
      }
    },
    {
      use: 'gridsome-plugin-robots-txt',
      options: {
        policy: [
          {
            userAgent: '*',
            disallow: '/media'
           },
           {
             userAgent: "*",
             disallow: "/uploads/Replacing_SAP_IQ_Why_Yellowbrick.pdf",
           }
        ]
      }
    }
  ],
  chainWebpack: config => {
    config.resolve.alias.set('@images', '@/assets/images');
    config.resolve.alias.set('@icons', '~/assets/images/icons');
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('rfs')({})
        ]
      }
    }
  }
}

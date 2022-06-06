// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addSchemaResolvers, addSchemaTypes }) => {
    addSchemaResolvers({
      Releases: {
        boilerplate: {
          type: 'String',
          resolve(obj) {
            return obj.boilerplate
          }
        },
        featured: {
          type: 'Boolean',
          resolve(obj) {
            return obj.featured != null ? obj.featured : false
          }
        }
      },
      Webcasts: {
        time: {
          type: 'String',
          resolve(obj) {
            return obj.time
          }
        }
      }
    })
  })

  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      allPublicJobDetail {
        edges {
          node {
            id
          }
        }
      }
    }`)
    data.allPublicJobDetail.edges.forEach(({ node }) => {
      createPage({
        path: `/company/careers/${node.id}/`,
        component: './src/templates/GreenhouseJobs.vue',
        context: {
          id: node.id
        }
      })
    })
  })
}

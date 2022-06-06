const chalk = require('chalk')
const createHTMLRenderer = require('./createHTMLRenderer')
const { createBundleRenderer } = require('vue-server-renderer')
const { error, info } = require('../utils/log')

const MAX_STATE_SIZE = 25000

module.exports = function createRenderFn({
  htmlTemplate,
  clientManifestPath,
  serverBundlePath,
  shouldPrefetch,
  shouldPreload
}) {
  const renderHTML = createHTMLRenderer(htmlTemplate)
  const clientManifest = require(clientManifestPath)
  const serverBundle = require(serverBundlePath)

  const renderer = createBundleRenderer(serverBundle, {
    clientManifest,
    runInNewContext: false,
    shouldPrefetch,
    shouldPreload
  })

  return async function render(page, state, stateSize, hash) {
    const context = {
      path: page.path,
      location: page.location,
      state: createState(state)
    }

    let app = ''

    try {
      app = await renderer.renderToString(context)
    } catch (err) {
      const location = page.location.name || page.location.path
      error(chalk.red(`Could not generate HTML for "${location}":`))
      throw err
    }

    const inject = context.meta.inject()
    const htmlAttrs = inject.htmlAttrs.text()
    const bodyAttrs = inject.bodyAttrs.text()

    const pageTitle = inject.title.text()
    const metaBase = inject.base.text()
    const gridsomeHash = `<meta name="gridsome:hash" content="${hash}">`
    let vueMetaTags = ''
    let vueMetaTagsOrig = inject.meta.text()
    const vueMetaLinks = inject.link.text()
    const styles = context.renderStyles()
    const noscript = inject.noscript.text()
    const vueMetaStyles = inject.style.text()
    const vueMetaScripts = inject.script.text()
    const resourceHints = context.renderResourceHints()

    // Hooley & Burch Edit START
    let hbParser = new HBMetaData()
    vueMetaTags = hbParser.getPageMetaTags(page.path);
    // info(`Page -> ${context.path}`)
    // info(`     -> Orig: ${vueMetaTagsOrig}`)
    // info(`     -> New :${vueMetaTags}\n`)
    // Hooley & Burch Edit END

    const head =
      '' +
      pageTitle +
      metaBase +
      gridsomeHash +
      vueMetaTags +
      vueMetaLinks +
      resourceHints +
      styles +
      vueMetaStyles +
      vueMetaScripts +
      noscript

    const renderedState = state && stateSize <= MAX_STATE_SIZE
      ? context.renderState()
      : ''

    const scripts = '' +
      renderedState +
      context.renderScripts() +
      inject.script.text({ body: true })

    return renderHTML({
      htmlAttrs: `data-html-server-rendered="true" ${htmlAttrs}`,
      bodyAttrs,
      head,
      title: pageTitle,
      base: metaBase,
      hash: gridsomeHash,
      vueMetaTags,
      vueMetaLinks,
      resourceHints,
      styles,
      vueMetaStyles,
      vueMetaScripts,
      noscript,
      app,
      scripts
    })
  }
}

function createState(state = {}) {
  return {
    data: state.data || null,
    context: state.context || {}
  }
}

class HBMetaData {

  constructor() {

    this.rootDomain = 'https://www.yellowbrick.com'
    this.defaultImage = `${this.rootDomain}/uploads/yb-icon.png`
    this.defaultType = 'article'
    this.pages = require('./meta-tags.json')

    // Find duplicate paths
    if (false) {
      error(chalk.red(``))
    }

  }

  getPageMetaTags = (pagePath) => {
    const cleanPath = (pagePath || '').trim().toLowerCase()
    const pageData = this.pages.find(page => cleanPath + '/' === page.path || cleanPath === page.path)
    const fullPath = `${this.rootDomain}${cleanPath}/`
    let metaData = pageData != null ? `
        <!-- Gridsome Meta Tags -->
        <meta data-vue-tag="ssr" charset="utf-8">
        <meta data-vue-tag="ssr" name="generator" content="Gridsome v0.7.20">
        <meta data-vue-tag="ssr" data-key="viewport" name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
        <meta data-vue-tag="ssr" data-key="format-detection" name="format-detection" content="telephone=no">
        <meta data-vue-tag="ssr" name="title" content="${pageData.title}">
        <meta data-vue-tag="ssr" name="description" content="${pageData.description}">
        <!-- Facebook Meta Tags -->
        <meta data-vue-tag="ssr" property="og:url" content="${fullPath}">
        <meta data-vue-tag="ssr" property="og:type" content="${pageData.type || this.defaultType}">
        <meta data-vue-tag="ssr" property="og:title" content="${pageData.title}">
        <meta data-vue-tag="ssr" property="og:description" content="${pageData.description}">
        <meta data-vue-tag="ssr" property="og:image" content="${pageData.image || this.defaultImage}">
        <!-- Twitter Meta Tags -->
        <meta data-vue-tag="ssr" property="twitter:url" content="${fullPath}">
        <meta data-vue-tag="ssr" name="twitter:card" content="summary_large_image">
        <meta data-vue-tag="ssr" property="twitter:domain" content="${this.rootDomain}">
        <meta data-vue-tag="ssr" name="twitter:title" content="${pageData.title}">
        <meta data-vue-tag="ssr" name="twitter:description" content="${pageData.description}">
        <meta data-vue-tag="ssr" name="twitter:image" content="${pageData.image || this.defaultImage}">`
      :
      `
        <!-- Gridsome Meta Tags -->
        <meta data-vue-tag="ssr" charset="utf-8">
        <meta data-vue-tag="ssr" name="generator" content="Gridsome v0.7.20">
        <meta data-vue-tag="ssr" data-key="viewport" name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
        <meta data-vue-tag="ssr" data-key="format-detection" name="format-detection" content="telephone=no">
        <meta data-vue-tag="ssr" property="og:url" content="${fullPath}">
        <meta data-vue-tag="ssr" property="twitter:url" content="${fullPath}">
        <meta data-vue-tag="ssr" property="twitter:domain" content="${this.rootDomain}">`;

    if(cleanPath !== "/")
      return metaData;

    // Homepage tags
    metaData += `
        <meta data-vue-tag="ssr" rel="meta" name="google-site-verification" content="NC78CPdFCziU5hWlyrNDag4IFcqDLEndo2qoUpErhVg">
        <meta data-vue-tag="ssr" name="facebook-domain-verification" content="k6dcmb8s043dr7rtdbnb7r8kpejdw2">
    `

    return metaData;
  }
}


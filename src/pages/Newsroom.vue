<style scoped>
  .main-box {
    padding: 17.334% 50px;
    display: block;
    width: 100%;
    height: 100%;

    &:hover {
      & .arrow-only {
        @apply text-teal;

        &:after {
          transform: translateX(10px);
          cursor: pointer;
          color: teal;
        }
      }
    }
  }

  .current-post {
    & .arrow-only-white {
      @apply flex flex-row relative items-baseline rfs-text-base font-normal text-white;
      transition: all .2s ease;

      &:after {
        @apply flex ml-2;
        content: '';
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 30'%3E%3Cpath d='M47.2 13.2L34 .7c-1-1-2.6-.9-3.6.1s-.9 2.6.1 3.6l8.6 8.1H2.5C1.1 12.5 0 13.6 0 15s1.1 2.5 2.5 2.5h36.6l-8.6 8.1c-1 1-1.1 2.6-.1 3.6.5.5 1.2.8 1.8.8.6 0 1.3-.2 1.7-.7l13.2-12.5c.5-.5.8-1.1.8-1.8.1-.7-.2-1.4-.7-1.8z' fill='%231f292e'/%3E%3C/svg%3E ");
        filter: invert(1);
        width: 16px;
        height: 10px;
        transform: translateX(0);
        transition: all .2s ease;
      }
    }

    &:hover {
      & .arrow-only-white {
        @apply text-teal;

        &:after {
          transform: translateX(10px);
          cursor: pointer;
          color: teal;
        }
      }
    }
  }

  .arrow-only {
    @apply flex flex-row relative items-baseline rfs-text-base font-normal;
    transition: all .2s ease;

    &:after {
      @apply flex ml-2;
      content: '';
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 30'%3E%3Cpath d='M47.2 13.2L34 .7c-1-1-2.6-.9-3.6.1s-.9 2.6.1 3.6l8.6 8.1H2.5C1.1 12.5 0 13.6 0 15s1.1 2.5 2.5 2.5h36.6l-8.6 8.1c-1 1-1.1 2.6-.1 3.6.5.5 1.2.8 1.8.8.6 0 1.3-.2 1.7-.7l13.2-12.5c.5-.5.8-1.1.8-1.8.1-.7-.2-1.4-.7-1.8z' fill='%231f292e'/%3E%3C/svg%3E ");
      width: 16px;
      height: 10px;
      transform: translateX(0);
      transition: all .2s ease;
    }

    &:hover {
      @apply text-teal;

      &:after {
        transform: translateX(10px);
        cursor: pointer;
        color: teal;
      }
    }
  }

  .slash-box-big {
    @apply relative z-0;

    &:before {
      content: '';
      @apply absolute bg-gray-100;
      left: 0;
      top: 0;
      right: 10%;
      bottom: 0;
      z-index: 1;
    }

    &:after {
      content: '';
      @apply absolute;
      background-image: url("data:image/svg+xml,%3Csvg width='20' height='27' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v27H0z'/%3E%3Cpath d='M13.667 7.09a.663.663 0 00-.911.247L6.089 18.99a.676.676 0 00.244.919.66.66 0 00.911-.246l6.667-11.655a.676.676 0 00-.244-.919' fill='%234B5357'/%3E%3C/g%3E%3C/svg%3E");
      background-repeat: repeat;
      left: 0;
      right: 70%;
      top: -40px;
      height: 108px;
      z-index: 2;
      opacity: .2;
    }
  }

  .dot-right {
    @apply relative z-0;

    &:before {
      content: '';
      @apply absolute;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21 21'%3E%3Cpath fill='none' d='M0 0h21v21H0z'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' fill='%234b5357' d='M9 9h3v3H9z'/%3E%3C/svg%3E");
      background-repeat: repeat;
      background-size: 22px;
      right: 0;
      left: 70%;
      top: 0;
      height: 132px;
      z-index: 1;
      opacity: .2
    }
  }

  .float-box {
    width: 100%;
    max-width: 600px;
  }

  .contact-link {
    background-color: transparent;
    background-image: none;
    border-bottom: none;
    border: none;

    &:hover {
      background-color: none !important;
    }
  }

  .featured-date,
  .currentPost-date {
    font-size: 14px;
  }

  .card-logo-wrapper {
    height: 120px;
    position: relative;
    width: 75%;
  }

  .card-logo-wrapper img {
    max-height: 100%;
    max-width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  @media only screen and (max-width: 640px) {
    .main-box {
      padding: 0% 50px;
    }

    .float-box {
      @apply relative py-10;
      top: 0;
      left: 0;
      transform: translateY(0%);
    }
  }
</style>

<template>
  <Layout>
    <section class="px-6 xl:px-0 bg-gray-100 pb-16 pt-32" v-if="featuredNews">
      <div class="max-w-1200 w-full mx-auto z-10">
        <div class="max-w-1200 w-full mx-auto">
          <h2 class="accent-heading pb-1" id="internal">Newsroom</h2>
          <p class="text-lg">Press inquiries regarding Yellowbrick Data can be sent to <a href="mailto:press@yellowbrick.com" title="email Yellowbrick Data" class="contact-link">press@yellowbrick.com</a></p>
        </div>
      </div>
      <div class="flex flex-col md:flex-row max-w-1200 w-full mx-auto relative" :style="`background-image: url('${featuredNews.coverImage}'); background-size: cover;`">
        <a :href="featuredNews.path"  @click="handleEvent(featuredNews.path)" class="w-full md:w-1/2 main-box relative">
          <div class="float-box text-white">
            <h6 class="uppercase text-yellow1 rfs-text-l">Featured News</h6>
            <span class="featured-date" v-text="featuredNews.date" />
            <h2 class="rfs-text-4xl" style="line-height: 1.1;" v-html="featuredNews.title" />
            <p class="rfs-text-base leading-tight" v-html="featuredNews.description" />
            <div class="">Read Post</div>
          </div>
        </a>
      </div>
    </section>

    <section class="py-12 md:py-20 bg-gray-light dot-right px-6 xl:px-0 z-10" id="companynews" :class="featuredNews ? '' : 'extra-padding'">
      <div class="max-w-1200 w-full mx-auto">
        <h2 class="accent-heading pb-1" id="internal">Press releases</h2>
        <p class="text-lg">The latest news and announcements from Yellowbrick Data</p>
      </div>
      <div class="w-full mx-0 xl:-mx-6">
        <div class="flex flex-wrap justify-start max-w-1200 mx-auto">
          <div class="flex flex-wrap justify-start max-w-1200 mx-auto">
            <div class="flex flex-wrap justify-start">
              <a :href="edge.node.path" @click="handleEvent(edge.node.path)" v-for="edge in $page.allReleases.edges" :key="edge.node.id" class="flex flex-col w-full md:w-1/2 relative current-post p-6">
                <div class="flex flex-col w-full h-full" :style="`background-image: url('${edge.node.coverImage}'); background-size: cover; background-position: right center`">
                  <div class="p-10 md:px-6 w-full md:w-3/4 lg:w-7/12">
                    <span class="block text-gray-200 currentPost-date" v-text="edge.node.date" />
                    <h4 class="rfs-text-xl text-white leading-none" v-html="edge.node.title" />
                    <div class="arrow-only-white">Read Post</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <Pager v-if="$page.allReleases.edges" class="flex w-full mx-auto py-8 bg-gray-light text-3xl justify-center" :info="$page.allReleases.pageInfo" linkClass="pagerLink" />
      </div>
    </section>

    <section class="py-12 md:py-20 md:pt-48 bg-gray-light slash-box-big px-6 xl:px-0" id="ybinthenews">
      <div class="max-w-1200 w-full mx-auto z-10 relative">
        <h2 class="accent-heading" id="external">Yellowbrick in the News</h2>
        <p class="text-lg mb-16">A collection of news articles about Yellowbrick data from various news or media organizations.</p>
      </div>
      <div class="w-full -mx-6 z-10 relative">
        <div class="flex flex-wrap max-w-1200 mx-auto justify-center">
          <div v-for="article in $page.news.articles" v-bind:key="article.url" class="zoomer flex w-full sm:w-1/2 lg:w-1/3 p-6">
            <a @click="handleEvent(article.url)" :href="article.url" class="p-8 bg-white shadow-lg flex flex-col">
              <div class="card-logo-wrapper">
                <img :src="article.photo" :alt="article.source" />
              </div>
              <p class="my-8 text-gray-400" v-text="article.date" />
              <h5 class="leading-normal" v-html="article.body" />
              <div class="flex button yellow mt-auto">Read more</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
  import {
    Pager
  } from 'gridsome'

  export default {
    metaInfo: {
      title: 'Yellowbrick Data Warehouse News',
      meta: [{
          key: 'description',
          name: 'description',
          content: 'Yellowbrick news in every form! Find our what we are saying and what others are saying about us.'
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: 'Yellowbrick news in every form! Find our what we are saying and what others are saying about us.',
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: 'Yellowbrick news in every form! Find our what we are saying and what others are saying about us.',
        }
      ]
    },
    components: {
      Pager
        },
        methods: {
            handleEvent(open) {
                window.location.href = open;
            },
        },
    data: () => ({
      featuredNews: null,
    }),
    mounted() {
      if (this.$page?.featuredNews?.edges?.length > 0) {
        this.featuredNews = this.$page.featuredNews.edges[0].node;
      }
    }
  }
</script>
import { Pager } from 'gridsome'

<page-query>
  query Releases($page: Int) {
  allReleases(perPage: 10, page: $page, sortBy: "date", order: DESC) @paginate {
  pageInfo {
  totalPages
  currentPage
  isFirst
  isLast
  }
  edges {
  node {
  id
  path
  title
  coverImage
  author
  date (format: "MMMM D, YYYY")
  }
  }
  }
  featuredNews: allReleases( filter: { featured: { eq: true }}, limit: 1, sortBy: "date", order: DESC) {
  edges {
  node {
  id
  title
  description
  date(format: "MMMM D, YYYY")
  path
  coverImage
  }
  }
  }
  news: pages(path: "/data/pages/in-the-news") {
  path
  id
  articles {
  photo
  url
  date (format: "MMMM D, YYYY")
  source
  body
  }
  }
  }
</page-query>
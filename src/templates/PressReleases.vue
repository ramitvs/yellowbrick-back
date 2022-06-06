<style scoped>
body {
  background: rgba(13,23,28,1);
}
.hero {
  background-image: url(/uploads/new-pattern.svg);
  background-size: cover;
  position: relative;
  &:after {
    content: '';
    @apply absolute top-0 bottom-0 left-0 right-0;
    background: linear-gradient(0deg, rgba(13,23,28,1) 0%, rgba(13,23,28,0) 70%);
  }
}

.blog {
  margin-bottom: 0;
}

.footer {
  width: calc(100% + 6rem);
}

</style>

<template>
  <Layout>
    <section class="hero">
      <div class="max-w-1000 w-full mx-auto pt-16 pb-8 z-10">
        <div class="relative border-b-0 border-t-0 border-l-4 border-r-0 border-yellow1 pl-8">
          <h1 class="w-full md:w-1/2 rfs-text-4xl leading-none text-white font-light" v-html="$page.releases.title" />
          <p v-if="$page.releases.author" class="text-white pl-1" v-html="$page.releases.author" />
        </div>
      </div>
    </section>

    <section class="bg-gray-700 pt-0 pb-3 px-6 ">
      <div class="flex w-full max-w-1000 mx-auto bg-transparent">
        <span class="self-start mr-4 text-yellow1 leading-none" v-html="$page.releases.date" />>
        <span class="self-start ml-auto leading-none"><a href="/newsroom" class="text-teal hover:text-yellow1">Back to Newsroom > </a></span>
      </div>
    </section>

    <section class="bg-gray-700 pb-24 px-6 xl:px-0 blog">
        <div class="flex flex-col max-w-1000 bg-white p-12 w-full mx-auto relative">

            <VueRemarkContent v-if="$page.releases.title == 'Yellowbrick Paves the Way to Distributed Cloud'" id="newsroom_image_class" />
            <VueRemarkContent v-else />

            <div class="-mx-12 footer py-10 bg-gray-100 mt-10">
                <div class="px-12">
                    <h6>About Yellowbrick Data</h6>
                    <p v-if="$page.releases.boilerplate" v-html="$page.releases.boilerplate" class="rfs-text-sm" />
                </div>
            </div>

            <div class="-mx-12 footer py-10 bg-yellow1 -mb-12">
                <div class="px-12">
                    <div class="flex flex-col md:flex-row">
                        <div class="w-full md:w-1/2">
                            <h6>Follow Yellowbrick:</h6>
                            <p>
                                Website: <a class="yellow1" href="https://www.yellowbrick.com/">https://www.yellowbrick.com</a><br>
                                Twitter: <a class="yellow1" href="https://twitter.com/YellowbrickData">@yellowbrickdata</a><br>
                                LinkedIn: <a class="yellow1" href="https://www.linkedin.com/company/yellowbrickdata/">linkedin.com/company/yellowbrickdata</a>
                            </p>
                        </div>
                        <div class="w-full md:w-1/2">
                            <h6>Press Contact:</h6>
                            <p>All press inquiries regarding Yellowbrick can be sent to&nbsp;<a href="mailto:press@yellowbrick.com">press@yellowbrick.com</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.releases.title,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$page.releases.description
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: this.$page.releases.title,
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: this.$page.releases.description,
        },
        {
          key: 'og:url',
          name: 'og:url',
          content: 'https://www.yellowbrick.com' + this.$page.releases.path,
        },
        {
          key: 'og:image',
          name: 'og:image',
          content: 'https://www.yellowbrick.com' + this.$page.releases.coverImage,
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: this.$page.releases.title,
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: this.$page.releases.description,
        },
        {
          key: 'twitter:image',
          name: 'twitter:image',
          content: 'https://www.yellowbrick.com' + this.$page.releases.coverImage,
        },
        {
          key: 'twitter:url',
          name: 'twitter:url',
          content: 'https://www.yellowbrick.com' + this.$page.releases.path,
        }
      ]
    }
  }
}
</script>

<page-query>
  query Releases($id: ID!) {
    releases(id: $id) {
      title
      description
      author
      content
      coverImage
      boilerplate
      date(format: "MMMM D, YYYY")
    }
  }
</page-query>

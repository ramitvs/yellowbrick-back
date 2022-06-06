<style scoped>
    ::placeholder {
        @apply text-base text-gray-400 font-normal;
    }
</style>
<template>
  <div id="search_div" class="w-full max-w-1200 mx-auto flex flex-row justify-end items-center search_div" style="top:20px;">
    <input @input="search1" @blur="search" @focus="search1"  ref="input" class="w-100 text-base text-gray-400 font-normal text-base border border-gray-200 focus:outline-none focus:shadow focus:border-gray-400 rounded px-3 appearance-none leading-normal bg-white" placeholder="Search Blog" type="text"  v-model="q" />
      <img @click="search" id="search-icon" @keydown.esc.enter="$refs.input.blur()" style="transform: rotate(-45deg); width: 25px; height: 25px; position: absolute; margin-right: 8px; "  src="/uploads/icons/search-icon.svg" alt="Yellowbrick Search" title="Yellowbrick Search" class="search-icon" />
  </div>
</template>

<script>
import Flexsearch from 'flexsearch'

export default {
  props: ['value'],
  data: () => ({
    index: null,
    q: ''
  }),
  beforeMount () {
    this.index = new Flexsearch({
      doc: {
        id: 'node:id',
        field: [
          'node:title',
          'node:content'
        ]
      }
    })
    this.index.add(this.$static.allBlog.edges)

      document.onkeyup = (e) => {
      if (e.which === 191) this.$refs.input.focus()
    }
  },
  methods: {
    search () {
          let res
          document.getElementById("current_post").scrollIntoView();
      if (this.index === null || (this.$refs.input !== document.activeElement && this.q === '')) res = null
      else if (this.q.length < 1) res = []
      else res = this.index.search({ query: this.q })
      this.$emit('input', res)
      },
      search1() {
        //document.getElementById("search-icon").style.display = "none";
    }
  }
}
</script>

<static-query>
    query Blog {
    allBlog {
    edges {
    node {
    id
    title
    date(format: "MMMM D YYYY")
    path
    coverImage
    thumbnailImage
    description
    categories {
    id
    title
    }
    author {
    name
    authorImage
    path
    }
    content
    }
    }
    }
    }
</static-query>

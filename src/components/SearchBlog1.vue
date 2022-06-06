<style scoped>
    ::placeholder {
        @apply text-base text-gray-400 font-normal;
    }
</style>
<template>
  <div id="search_div1" class="w-full max-w-1200 mx-auto flex flex-row justify-end items-center" style="position: absolute; top: 80px; right: -10px !important; display: none;">
    <input @input="search" @focus="search" @blur="search" @keydown.esc.enter="$refs.input.blur()" ref="input" class="w-100 text-base text-gray-400 font-normal border border-gray-200 focus:outline-none focus:shadow focus:border-gray-400 rounded px-3 appearance-none leading-normal bg-white" placeholder="Search Blog" type="search"  v-model="q" />
    <span v-if="value" class="w-full max-w-1200 mx-auto flex flex-row items-center text-xs text-black leading-normal bg-white" v-text="`${value.length} results`" />
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

<style scoped>
.hero {
  background-image: url(/uploads/images/generic-bg.svg);
  background-size: cover;
}
</style>

<template>
  <Layout>
    <BaseScript src="https://boards.greenhouse.io/embed/job_board/js?for=yellowbrickdata" @loaded="loadJob" />

    <section class="hero flex py-24 text-white capitalize px-6">
      <div class="max-w-800 w-full mx-auto">
        <h1 v-text="$page.publicJobDetail.title" />
        <h4 class="text-gray-300" v-text="$page.publicJobDetail.location.name" />
      </div>
    </section>
    <section class="pt-24 px-6">
      <div class="max-w-800 mx-auto">
        <div class="capitalize mb-8" v-if="$page.publicJobDetail.departments">
          <span v-for="department in $page.publicJobDetail.departments" :key="department.id" v-text="department.name" class="rounded py-1 px-2 mr-2 bg-gray-300 text-gray-600" />
        </div>
        <div v-html="content" />
      </div>
    </section>
    <section class="p-6 min-h-screen">
      <div class="max-w-800 mx-auto" id="grnhse_app" />
    </section>
  </Layout>
</template>

<script>
export default {
  data: () => ({
    content: '',
  }),
  mounted() {
    const element = document.createElement('div');
    let str = this.$page.publicJobDetail.content;
    if(str && typeof str === 'string') {
      str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
      str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
      element.innerHTML = str;
      str = element.textContent;
      element.textContent = '';
    }
    this.content = str;
  },
  methods: {
    loadJob() {
      window.Grnhse.Iframe.load(this.$context.id)
    }
  }
}
</script>


<page-query>
query GreenhouseJobDetail($id: ID!) {
  publicJobDetail(id: $id) {
    title
    content
    location {
      name
    }
    departments {
      id
      name
    }
  }
}
</page-query>

<template>
  <Layout>
    <h1 v-html="$page.customer.name" />
    <div v-html="$page.customer.content" />
  </Layout>
</template>

<page-query>
query Customer($id: ID!) {
  customer(id: $id) {
    name
    content
  }
}
</page-query>

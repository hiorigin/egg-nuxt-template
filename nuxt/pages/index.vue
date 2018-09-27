<template>
  <section class="container">
    <h1 class="title">
      Universal Vue.js Application Framework
    </h1>
    <ul>
      <li v-for="item in data" :key="item.id">{{ item.title }}</li>
    </ul>
  </section>
</template>

<script>
export default {
  async asyncData({ app }) {
    let { data } = await app.$axios.$get(`/api/topics`)
    return { data }
  },
}
</script>

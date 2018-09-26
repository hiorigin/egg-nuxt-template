<template>
  <section class="container">
    <h1 class="title">
      Universal Vue.js Application Framework
    </h1>
  </section>
</template>

<script>
export default {
  async mounted() {
    let data = await this.$axios.$get(`/api/topics`)
    console.log(data)
  }
}
</script>

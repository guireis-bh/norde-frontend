<template>
  <div class="container">
    <section class="container col-md-8 text-center justify-content-center">
      <logo percent="45%" />
      <nuxt />
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  head() {
    return {
      title: 'Norde'
    }
  },
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
div.container {
  margin-top: 1%;
}
</style>

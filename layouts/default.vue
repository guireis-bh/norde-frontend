<template>
  <section>
    <Nav :menus="menus" :menus-right="configs" />
    <nuxt />
  </section>
</template>

<script>
import Nav from '~/components/Nav/index.vue'
import { menus, configs } from '~/configs/menus'

export default {
  middleware: 'authenticated',
  components: {
    Nav
  },
  head() {
    return {
      title: 'Norde'
    }
  },
  data() {
    return {
      menus,
      configs
    }
  }
}
</script>

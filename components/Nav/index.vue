<template>
  <b-navbar toggleable="lg" type="dark" variant="norde-menu">
    <b-navbar-brand>
      <logo width="100px" />
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <nav-item :items="menus" />
      <nav-item
        v-show="menusRight.length === 0 ? false : true"
        class="right"
        :items="menusRight"
      />
    </b-collapse>
  </b-navbar>
</template>

<script>
import Logo from '~/components/Logo.vue'
import NavItem from '~/components/Nav/Item'

export default {
  name: 'Nav',
  components: {
    Logo,
    NavItem
  },
  props: {
    menus: {
      type: Array,
      required: true
    },
    menusRight: {
      type: Array,
      required: false,
      default: () => {
        return []
      }
    }
  }
}
</script>

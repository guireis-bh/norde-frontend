<template>
  <b-alert :show="show" :variant="variant">
    {{ message }}
  </b-alert>
</template>

<script>
export default {
  name: 'Alert',
  data() {
    return {
      show: false,
      variant: 'primary',
      message: ''
    }
  },
  methods: {
    shot(message, variant) {
      this.show = true
      this.variant = variant
      this.message = message
    }
  }
}
</script>

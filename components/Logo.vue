<template>
  <img
    id="logo"
    src="~/assets/images/logo.png"
    :width="rWidth"
    :height="rHeight"
  />
</template>

<script>
export default {
  props: {
    width: {
      type: [String, Boolean],
      default: false,
      required: false
    },
    height: {
      type: [String, Boolean],
      default: false,
      required: false
    },
    percent: {
      type: [String, Boolean],
      default: false,
      required: false
    }
  },
  computed: {
    rWidth() {
      return !this.width ? this.rPercent() : this.width
    },
    rHeight() {
      return !this.height ? this.rPercent() : this.height
    }
  },
  methods: {
    rPercent() {
      return !this.percent ? '100%' : this.percent
    }
  }
}
</script>

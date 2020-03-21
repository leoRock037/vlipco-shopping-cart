<template>
  <button>
    <i v-if="icon" :class="icon"></i>
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      required: true
    },
    icon: String
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/common/buttons.scss";
</style>

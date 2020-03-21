<template>
  <div>
    <i class="fas fa-minus" @click="decrease()"></i>
    <span>{{ value }}</span>
    <i class="fas fa-plus" @click="increment()"></i>
  </div>
</template>

<script>
export default {
  name: 'Increment',
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  methods: {
    increment () {
      this.$store.commit('products/incrementProductQuantity')
    },
    decrease () {
      this.$store.commit('products/decreaseProductQuantity')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/common/increment.scss";
</style>

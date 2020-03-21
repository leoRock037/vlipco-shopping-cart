<template>
  <div class="product-item">
    <span v-if="showQuantity" class="counter">{{ product.quantity }}</span>
    <img :src="product.photo_url" :alt="product.name">
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    showQuantity () {
      return this.product.quantity > 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/products/product_item.scss";
</style>

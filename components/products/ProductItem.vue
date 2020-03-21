<template>
  <div
    class="product-item"
    :class="{ selected: isSelectedProduct }"
    @click="selectProduct()"
  >
    <span v-if="showQuantity" class="counter">{{ product.quantity }}</span>
    <img :src="product.photo_url" :alt="product.name">
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

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
    },
    ...mapGetters({
      seletedProduct: 'products/selectedProduct'
    }),
    isSelectedProduct () {
      return this.seletedProduct === this.product
    }
  },
  methods: {
    selectProduct () {
      this.$store.commit('products/setSelectedProduct', this.product)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/products/product_item.scss";
</style>

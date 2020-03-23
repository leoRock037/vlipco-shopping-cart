<template>
  <div>
    <!-- product detail -->
    <div v-if="product" class="product-detail">
      <span class="counter">{{ product.quantity }}</span>
      <img :src="product.photo_url" alt="empty">
      <h2>{{ product.name }}</h2>
      <div class="product-numbers">
        <span class="price">$ {{ priceToshow }}</span>
        <Increment :value="product.quantity" @add-to-cart="addToCart()" />
      </div>
      <p>{{ product.description }}</p>
    </div>

    <!-- empty state -->
    <EmptyState v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Increment from '@/components/common/Increment.vue'
import EmptyState from '@/components/products/EmptyState.vue'

export default {
  name: 'ProductDetail',
  components: {
    Increment,
    EmptyState
  },
  data () {
    return {
      anyProduct: true
    }
  },
  computed: {
    ...mapGetters({
      product: 'products/selectedProduct'
    }),
    priceToshow () {
      return this.product.amount === 0
        ? this.product.price
        : this.product.amount
    }
  },
  methods: {
    addToCart () {
      const shoppingCartJson = localStorage.getItem('shopping_cart')
      const productsList = shoppingCartJson ? JSON.parse(shoppingCartJson) : []

      if (productsList.some(product => product.id === this.product.id)) {
        const index = productsList.findIndex(product => product.id === this.product.id)
        this.product.quantity > 0
          ? productsList.splice(index, 1, this.product)
          : productsList.splice(index, 1)
      } else {
        productsList.push(this.product)
      }

      localStorage.setItem('shopping_cart', JSON.stringify(productsList))
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/products/product_detail.scss";
</style>

<template>
  <div>
    <!-- product detail -->
    <div v-if="product" class="product-detail">
      <span class="counter">{{ product.quantity }}</span>
      <img :src="product.photo_url" alt="empty">
      <h2>{{ product.name }}</h2>
      <div class="product-numbers">
        <span class="price">$ {{ totalProduct }}</span>
        <Increment :value="product.quantity" />
      </div>
      <p>{{ product.description }}</p>
      <Button class="btn-block" text="Add product to cart" @click.native="addToCart()" />
    </div>

    <!-- empty state -->
    <EmptyState v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Button from '@/components/common/Button.vue'
import Increment from '@/components/common/Increment.vue'
import EmptyState from '@/components/products/EmptyState.vue'

export default {
  name: 'ProductDetail',
  components: {
    Button,
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
    totalProduct () {
      return this.product.quantity > 0
        ? this.product.price * this.product.quantity
        : this.product.price
    }

  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/products/product_detail.scss";
</style>

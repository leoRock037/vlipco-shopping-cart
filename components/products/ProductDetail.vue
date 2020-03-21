<template>
  <div>
    <!-- product detail -->
    <div v-if="product" class="product-detail">
      <span class="counter">{{ product.quantity }}</span>
      <img :src="product.photo_url" alt="empty">
      <h2>{{ product.name }}</h2>
      <div class="product-numbers">
        <span class="price">{{ product.price }}</span>
        incrementComponent
      </div>
      <p>{{ product.description }}</p>
    </div>

    <!-- empty state -->
    <EmptyState v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EmptyState from '@/components/products/EmptyState.vue'

export default {
  name: 'ProductDetail',
  components: {
    EmptyState
  },
  data () {
    return {
      anyProduct: true
    }
  },
  computed: mapGetters({
    product: 'products/selectedProduct'
  })
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/products/product_detail.scss";
</style>

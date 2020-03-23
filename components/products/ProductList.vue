<template>
  <div>
    <h1>Our Products</h1>
    <div class="product-list">
      <ProductItem v-for="(product, index) in products" :key="index" :product="product" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductItem from '@/components/products/ProductItem.vue'

export default {
  name: 'ProductList',
  components: {
    ProductItem
  },
  data () {
    return {
      slickOptions: {
        slidesToShow: 3
      }
    }
  },
  computed: mapGetters({
    products: 'products/products'
  })
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/products/product_list.scss";
</style>

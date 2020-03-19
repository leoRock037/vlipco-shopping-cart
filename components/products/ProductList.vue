<template>
  <div>
    <div v-for="(product, index) in products" :key="index">
      <ProductItem :product="product" />
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
  computed: mapGetters({
    products: 'products/products'
  })
}
</script>

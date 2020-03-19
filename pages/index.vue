<template>
  <section>
    <ProductList />
  </section>
</template>

<script>
import ProductList from '@/components/products/ProductList.vue'

export default {
  components: {
    ProductList
  },
  created () {
    this.$store.dispatch('products/fetchProducts')
  }
}
</script>

<style>
</style>

<template>
  <section class="section-wrapper">
    <div class="grid-block grid-gap-20">
      <ProductList class="span-sm-12 span-md-7" />
      <ProductDetail class="span-sm-12 span-md-5 box" />
      <ShoppingCartModal v-if="openCart" />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductList from '@/components/products/ProductList.vue'
import ProductDetail from '@/components/products/ProductDetail.vue'
import ShoppingCartModal from '@/components/shopping_cart/ShoppingCartModal.vue'

export default {
  components: {
    ProductList,
    ProductDetail,
    ShoppingCartModal
  },
  computed: mapGetters({
    openCart: 'shopping_cart/open'
  }),
  created () {
    this.$store.dispatch('products/fetchProducts')
  }
}
</script>

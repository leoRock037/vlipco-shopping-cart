<template>
  <div class="modal-overlay">
    <div class="modal-wrapper">
      <img
        class="close"
        src="~/assets/images/btn_close.svg"
        alt="close"
        @click="closeCart()"
      >
      <h1>Shopping cart</h1>
      <!-- shopping cart items -->
      <ShoppingCartData v-if="productsOnCart" :key="count" />
      <!-- Empty shopping cart -->
      <EmptyCart v-else />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EmptyCart from '@/components/shopping_cart/EmptyCart.vue'
import ShoppingCartData from '@/components/shopping_cart/ShoppingCartData.vue'

export default {
  name: 'ShoppingCartModal',
  components: {
    EmptyCart,
    ShoppingCartData
  },
  data () {
    return {
      productsOnCart: this.productsOnCartLength()
    }
  },
  computed: mapGetters({
    count: 'shopping_cart/count'
  }),
  mounted () {
    document.body.classList.add('no-scroll')
  },
  destroyed () {
    document.body.classList.remove('no-scroll')
  },
  methods: {
    closeCart () {
      this.$store.commit('shopping_cart/setOpenCart')
    },
    productsOnCartLength () {
      const cart = JSON.parse(localStorage.getItem('shopping_cart'))
      return cart != null && cart.length > 0
    }
  }
}
</script>

<style lang='scss' scoped>
@import "@/assets/scss/components/shopping_cart/shopping_cart_modal.scss";
</style>

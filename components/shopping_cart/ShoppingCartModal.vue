<template>
  <div v-if="openCart" class="modal-overlay">
    <div ref="modalContent" class="modal-wrapper">
      <img
        class="close"
        src="~/assets/images/btn_close.svg"
        alt="close"
        @click="closeCart()"
      >
      <h2>Shopping cart</h2>

      <!-- shopping cart items -->
      <div v-if="cartProducts">
        <ul class="product-list">
          <li v-for="(product, index) in products" :key="index">
            <img :src="product.photo_url" alt="empty">
            <div>
              <h3>{{ product.name }}</h3>
              <span class="counter">{{ product.quantity }}</span>
            </div>
          </li>
        </ul>
        <div class="total">
          <h4>Total</h4>
          <p>$2000</p>
        </div>
      </div>
      <!-- Empty shopping cart -->
      <EmptyCart v-else />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EmptyCart from '@/components/shopping_cart/EmptyCart.vue'

export default {
  name: 'ShoppingCartModal',
  components: {
    EmptyCart
  },
  data () {
    return {
      cartProducts: false
    }
  },
  computed: mapGetters({
    products: 'products/products',
    openCart: 'shopping_cart/open'
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
    }
  }
}
</script>

<style lang='scss' scoped>
@import "@/assets/scss/components/shopping_cart/shopping_cart_modal.scss";
</style>

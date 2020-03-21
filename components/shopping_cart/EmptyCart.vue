<template>
  <div class="empty-cart">
    <img class="close" src="~/assets/images/empty_cart.svg" alt="empty cart">
    <h3>Shopping cart empty</h3>
    <p>Take a look at our products and start filling your cart</p>
    <Button class="btn-block" text="Go to products" @click.native="closeCart()" />
  </div>
</template>

<script>
import Button from '@/components/common/Button.vue'

export default {
  name: 'EmptyCart',
  components: {
    Button
  },
  methods: {
    closeCart () {
      this.$store.commit('shopping_cart/setOpenCart')
    }
  }
}
</script>

<style lang='scss' scoped>
@import "@/assets/scss/components/shopping_cart/empty_cart.scss";
</style>

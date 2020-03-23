<template>
  <nav>
    <img src="~/assets/images/logo_store.svg" alt="logo">
    <Button
      :key="count"
      :text="total()"
      icon="fas fa-shopping-cart"
      @click.native="openCart()"
    />
    <div class="mobile-button-cart" @click="openCart()">
      <span>
        <i class="fas fa-shopping-cart"></i>
        In your cart:
      </span>
      <span>$ {{ total() }}</span>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
import Button from '@/components/common/Button.vue'

export default {
  name: 'Navbar',
  components: {
    Button
  },
  computed: {
    ...mapGetters({
      count: 'shopping_cart/count'
    })
  },
  methods: {
    openCart () {
      this.$store.commit('shopping_cart/setOpenCart')
    },
    total () {
      const cart = JSON.parse(localStorage.getItem('shopping_cart'))
      return cart ? '$' + cart.map(p => p.amount).reduce((a, b) => a + b, 0) : '$0'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout/navbar.scss';
</style>

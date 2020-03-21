<template>
  <nav>
    <img src="~/assets/images/logo_store.svg" alt="logo">
    <Button text="$0" icon="icon-cart" @click.native="openCart()" />
  </nav>
</template>

<script>
import Button from '@/components/common/Button.vue'

export default {
  name: 'Navbar',
  components: {
    Button
  },
  methods: {
    openCart () {
      this.$store.commit('shopping_cart/setOpenCart')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/layout/navbar.scss';
</style>

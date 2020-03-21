<template>
  <div class="modal-overlay">
    <div ref="modalContent" class="modal-wrapper">
      <h2>Shopping cart</h2>
      <ul class="products-list">
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCartModal',
  mounted () {
    document.body.classList.add('no-scroll')
  },
  destroyed () {
    document.body.classList.remove('no-scroll')
  }
}
</script>

<style lang='scss' scoped>
@import "@/assets/scss/components/shopping_cart/shopping_cart_modal.scss";
</style>

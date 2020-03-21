<template>
  <div class="empty-product">
    <img src="~/assets/images/empty.svg" alt="empty">
    <p>Please select a product on the left to see more information</p>
  </div>
</template>

<script>
export default {
  name: 'EmptyState'
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/products/empty_state.scss";
</style>

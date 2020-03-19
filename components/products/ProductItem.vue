<template>
  <div>
    <img :src="product.photo_url" :alt="product.name">
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>

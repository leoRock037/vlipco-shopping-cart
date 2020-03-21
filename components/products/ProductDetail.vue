<template>
  <div>
    <!-- product detail -->
    <div v-if="anyProduct" class="product-detail">
      <span class="counter">{{ product.quantity }}</span>
      <img :src="product.photo_url" alt="empty">
      <h2>{{ product.name }}</h2>
      <div class="product-numbers">
        <span class="price">{{ product.price }}</span>
        incrementComponent
      </div>
      <p>{{ product.description }}</p>
    </div>
    <!-- empty state -->
    <EmptyState v-else />
  </div>
</template>

<script>
import EmptyState from '@/components/products/EmptyState.vue'

export default {
  name: 'ProductDetail',
  components: {
    EmptyState
  },
  data () {
    return {
      anyProduct: true,
      product: {
        name: 'milk',
        price: 1.50,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        photo_url: 'https://jumbocolombiafood.vteximg.com.br/arquivos/ids/3295320-750-750/7702177001783-1.jpg?v=636646652313570000',
        quantity: 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/components/products/product_detail.scss";
</style>

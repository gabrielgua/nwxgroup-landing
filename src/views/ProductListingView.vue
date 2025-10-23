<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue';
import Section from '@/components/Section.vue';
import { useProductStore } from '@/stores/product.store';
import { onMounted } from 'vue';

const productStore = useProductStore();

onMounted(() => {
  productStore.loadProducts();
})

</script>

<template>
  <Section class="mb-34!">
    <template #title>Produtos</template>
    <template #subtitle>Conheça nosso catálogo de protudos por aqui.</template>

    <div class="grid gap-6 product-listing-grid">
      <ProductCard v-for="product in productStore.products" :key="product.id" :code="product.code" :name="product.name"
        :description="product.description" :slug="product.slug" :image="product.media.images[0]"
        :colors="product.colors" />
    </div>
  </Section>


</template>

<style lang="css" scoped>
.product-listing-grid {
  --card-min-width: 16rem;
  grid-template-columns: repeat(auto-fill, minmax(var(--card-min-width), 1fr));
}


@media (width <=768px) {
  .product-listing-grid {
    --card-min-width: 13rem;
  }
}
</style>
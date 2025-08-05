<script setup lang="ts">
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import Card from '@/components/Card.vue';
import Container from '@/components/Container.vue';
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
  <Container class="space-y-6 my-6 md:space-y-8 md:my-12">
    <Breadcrumbs />

    <div>
      <p class="text-3xl font-semibold text-text-primary">Produtos</p>
      <p class="font-light text-text-secondary">Conheça nosso catálogo de protudos por aqui.</p>
    </div>

    <hr class="border-slate-200">


    <div class="grid gap-6 product-listing-grid">
      <ProductCard v-for="product in productStore.products" :key="product.id" :code="product.code" :name="product.name"
        :description="product.description" :slug="product.slug" :image="product.images[0]" :colors="product.colors" />
    </div>
  </Container>


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
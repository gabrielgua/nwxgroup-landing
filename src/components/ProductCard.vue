<script setup lang="ts">
import type { Product, ProductColor } from '@/types/Product';
import Card from './Card.vue';
import Button from './Button.vue';
import Icon from './Icon.vue';

defineProps<{
  name: string,
  slug: string,
  code: string,
  image: string,
  colors?: ProductColor[]
}>();

const getImageURL = (url: string) => {
  return new URL(url, import.meta.url).href
}

</script>

<template>
  <RouterLink :to="`/products/${slug}`">
    <Card class="p-4! space-y-4! hover:scale-105">
      <img :src="getImageURL(image)" :alt="name + ' image'">
      <div>
        <p class="text-xs text-text-secondary">{{ code }}</p>
        <p class="font-semibold text-primary">{{ name }}</p>
      </div>
      <div class="flex items-end justify-between">
        <div class="space-y-2" v-if="colors">
          <p class="text-xs font-light text-text-secondary">{{ colors.length > 1 ? 'Cores' : 'Cor' }}</p>
          <div class="flex gap-2">
            <div v-for="color in colors" :key="color.label" :class="color.color" class="size-6 rounded-full" />
          </div>
        </div>
        <Button size="sm">Ver mais</Button>
      </div>

    </Card>
  </RouterLink>

</template>
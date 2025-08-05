<script setup lang="ts">
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import Button from '@/components/Button.vue';
import Card from '@/components/Card.vue';
import Carousel from '@/components/Carousel.vue';
import Container from '@/components/Container.vue';
import Icon from '@/components/Icon.vue';
import { useProductStore } from '@/stores/product.store';
import type { Product } from '@/types/Product';
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const product = ref<Product>();
const productStore = useProductStore();
const route = useRoute();
const router = useRouter();

watch(() => route.params.slug, slug => {
  if (typeof slug === 'string') {
    const found = productStore.findProductBySlug(slug);
    if (!found) {
      router.push('/')
      return;
    }
    product.value = found;
  }
}, { immediate: true })

</script>

<template>

  <Container class="py-6 space-y-6 md:py-12 md:space-y-12">

    <Breadcrumbs />

    <section v-if="product" class="grid lg:grid-cols-[auto_1fr] gap-12">
      <Carousel :images="product.images" />
      <div class="flex flex-col grow gap-12">
        <div>
          <h5 class="text-text-secondary/50 text-sm">{{ product.code }}</h5>
          <h2 class="text-primary font-semibold text-4xl mb-6">{{ product.name }}</h2>
          <p class="text-text-primary">
            {{ product.description }}
          </p>
        </div>

        <div v-if="product.colors" class="space-y-6 mt-auto">
          <h4 class="text-text-primary">{{ product.colors.length > 1 ? 'Cores' : 'Cor' }}</h4>
          <div class="flex items-center gap-6">
            <Card v-for="color in product.colors" :key="color.label"
              class="space-y-3! p-4! border grid place-items-center w-20">
              <div class="size-10 rounded-full outline-2 outline-white" :class="color.color" />
              <p class="text-text-secondary font-light text-sm">
                {{ color.label }}
              </p>
            </Card>
          </div>
        </div>
        <a :href="product.link" target="_blank">
          <Button size="lg" class="w-full justify-center font-semibold mt-auto">
            Ir à loja
            <Icon icon="arrow-up-right-from-square" />
          </Button>
        </a>

      </div>
    </section>

  </Container>

</template>
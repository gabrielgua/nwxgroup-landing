<script setup lang="ts">
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import Button from '@/components/Button.vue';
import Card from '@/components/Card.vue';
import Carousel from '@/components/Carousel.vue';
import Container from '@/components/Container.vue';
import Divider from '@/components/Divider.vue';
import Icon from '@/components/Icon.vue';
import ProductInfoCard from '@/components/ProductInfoCard.vue';
import ProductInfoCardSection from '@/components/ProductInfoCardSection.vue';
import Section from '@/components/Section.vue';
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

  <Container class="py-6 md:py-12 md:space-y-12 mb-12">

    <Breadcrumbs />

    <section v-if="product" class="grid lg:grid-cols-[auto_1fr] gap-12">
      <Carousel :images="product.images" />
      <div class="flex flex-col grow gap-12">
        <div>
          <h5 class="text-text-secondary/50 text-sm">{{ product.code }}</h5>
          <h2 class="text-primary font-semibold text-4xl mb-6">{{ product.name }}</h2>
          <p class="text-text-primary line-clamp-3">
            {{ product.description }}
          </p>
        </div>

        <div v-if="product.colors" class="space-y-2 mt-auto">
          <h4 class="text-text-primary">{{ product.colors.length > 1 ? 'Cores' : 'Cor' }}</h4>
          <div class="flex items-center gap-6">
            <Card v-for="color in product.colors" :key="color.label"
              class="space-y-3! p-4! border grid place-items-center">
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

    <div v-if="product" class="space-y-6 my-6 md:space-y-8 md:my-12">
      <div>
        <p class="text-3xl font-semibold text-text-primary">Mais informações</p>
      </div>
      <Divider />


      <div class="space-y-2">
        <h3 class="font-semibold">
          Descrição
        </h3>
        <p class="text-sm">
          {{ product.description }}
        </p>
      </div>
      <Divider />



      <div class="flex flex-wrap *:grow gap-6">
        <ProductInfoCard v-if="product.dimentions" icon="box-open">
          <template #title>Dimensões do pacote</template>
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <ProductInfoCardSection>
              <template #title>Altura</template>
              {{ product.dimentions.height }}
            </ProductInfoCardSection>
            <ProductInfoCardSection>
              <template #title>Comprimento</template>
              {{ product.dimentions.length }}
            </ProductInfoCardSection>
            <ProductInfoCardSection>
              <template #title>Largura</template>
              {{ product.dimentions.width }}
            </ProductInfoCardSection>
            <ProductInfoCardSection>
              <template #title>Peso</template>
              {{ product.dimentions.weight }}
            </ProductInfoCardSection>
          </div>
        </ProductInfoCard>


        <ProductInfoCard v-if="product.manufacturer" icon="industry">
          <template #title>Informações sobre a fabricação</template>
          <div class="grid sm:grid-cols-2 gap-4">

            <ProductInfoCardSection>
              <template #title>Fabricante</template>
              {{ product.manufacturer.name }}
            </ProductInfoCardSection>
            <ProductInfoCardSection>
              <template #title>País</template>
              {{ product.manufacturer.country }}
            </ProductInfoCardSection>
            <ProductInfoCardSection class="sm:col-span-2">
              <template #title>Endereço</template>
              {{ product.manufacturer.address }}
            </ProductInfoCardSection>

          </div>
        </ProductInfoCard>

        <ProductInfoCard v-if="product.distributer" icon="dolly">
          <template #title>Informações sobre a distribuição</template>
          <div class="grid sm:grid-cols-[auto_1fr] gap-4">

            <ProductInfoCardSection>
              <template #title>Distribuidor</template>
              {{ product.distributer.name }}
            </ProductInfoCardSection>
            <ProductInfoCardSection>
              <template #title>Endereço</template>
              {{ product.distributer.address }}
            </ProductInfoCardSection>
          </div>
        </ProductInfoCard>

        <ProductInfoCard v-if="product.remark" icon="circle-exclamation">
          <template #title>Mais</template>
          <ProductInfoCardSection>
            <template #title>Observações</template>
            {{ product.remark }}
          </ProductInfoCardSection>
        </ProductInfoCard>
      </div>
    </div>

  </Container>

</template>
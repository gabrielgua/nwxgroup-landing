<script setup lang="ts">
import Button from './Button.vue';
import Container from './Container.vue';
import Icon from './Icon.vue';

</script>

<template>

  <Container class="grid place-items-center py-32">
    <div class="max-w-max space-y-2 grid place-items-center text-center">
      <p class="font-semibold text-4xl text-text-primary">Soluções que fazem parte da sua <span
          class="text-primary">rotina</span>.</p>
      <p class="mb-12 font-light text-slate-500">Pensados para o seu conforto, projetados para o seu bem-estar.</p>
      <RouterLink to="/products">
        <Button variant="primary" size="lg">
          Conheça nosso catálogo
          <Icon icon="arrow-right" class="text-white text-xs" />
        </Button>
      </RouterLink>
    </div>
  </Container>
</template>
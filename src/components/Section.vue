<script setup lang="ts">
import Breadcrumbs from './Breadcrumbs.vue';
import Container from './Container.vue';
import Divider from './Divider.vue';

</script>

<template>
  <Container class="space-y-6 my-6 md:space-y-8 md:my-12">
    <Breadcrumbs />

    <div>
      <p class="text-3xl font-semibold text-text-primary">
        <slot name="title">Title</slot>
      </p>
      <p class="font-light text-text-secondary">
        <slot name="subtitle">Subtitle</slot>
      </p>
    </div>
    <Divider />


    <slot />
  </Container>

</template>
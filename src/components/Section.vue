<script setup lang="ts">
import Container from './Container.vue';

</script>

<template>
  <Container class="my-12 space-y-12">
    <div>
      <h3 class="text-text-primary text-3xl font-semibold">
        <slot name="section-title">Title</slot>
      </h3>
      <h5 class="text-text-secondary font-light">
        <slot name="section-subtitle">Subtitle</slot>
      </h5>
    </div>

    <div>
      <slot>Content</slot>
    </div>
  </Container>

</template>
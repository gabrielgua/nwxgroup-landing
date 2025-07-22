<script setup lang="ts">
import Header from '@/components/Header.vue';

</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
</template>

<style lang="css" global>
body {
  background-color: var(--color-background);
}
</style>
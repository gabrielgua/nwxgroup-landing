<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

</script>

<template>
  <section class="flex flex-col h-full min-h-dvh">
    <Header />
    <main class="grow">
      <RouterView />
    </main>
    <Footer />
  </section>
</template>

<style lang="css" global>
body {
  background-color: var(--color-background);
}
</style>
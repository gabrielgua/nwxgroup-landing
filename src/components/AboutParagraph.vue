<script setup lang="ts">
import Card from './Card.vue';

</script>

<template>
  <div class="grid lg:grid-cols-[auto_1fr] items-center gap-4">
    <Card class="w-6 h-6 p-0! bg-white rounded-full shadow-none! ring-slate-100 ring-8 hidden lg:block" />
    <slot />
  </div>
</template>
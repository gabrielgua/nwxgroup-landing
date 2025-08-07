<script setup lang="ts">
import Card from './Card.vue';
import Icon from './Icon.vue';

defineProps<{ icon?: string }>();

</script>

<template>
  <Card class="space-y-4! p-4! max-h-max">
    <div class="flex items-center justify-between font-semibold">
      <slot name="title">Title</slot>
      <Icon v-if="icon" :icon="icon" class="text-sm text-primary" />
    </div>
    <div class="text-sm">
      <slot>Content</slot>
    </div>
  </Card>
</template>
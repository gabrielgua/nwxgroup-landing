<script setup lang="ts">
defineProps<{ to: string }>();
defineEmits(['clicked']);
</script>
<template>
  <li>
    <RouterLink @click="$emit('clicked')" class="text-sm text-zinc-400 cursor-pointer underline-offset-3" :to="to"
      active-class="font-bold underline text-primary! decoration-2">
      <slot />
    </RouterLink>
  </li>
</template>
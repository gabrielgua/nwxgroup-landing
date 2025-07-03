<script setup lang="ts">
defineProps<{ to: string }>();
</script>
<template>
  <li>
    <RouterLink class="text-sm text-zinc-400 cursor-pointer underline-offset-3" :to="to"
      active-class="font-bold underline text-primary! decoration-2">
      <slot />
    </RouterLink>
  </li>
</template>
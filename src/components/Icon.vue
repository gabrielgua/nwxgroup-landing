<script lang="ts" setup>
defineProps<{ icon: string }>();
</script>

<template>
  <faicon :icon="icon" class="text-primary" />
</template>
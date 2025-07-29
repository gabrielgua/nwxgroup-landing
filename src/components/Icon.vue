<script lang="ts" setup>
const props = defineProps<{ icon: string, class?: string }>();
</script>

<template>
  <faicon :icon="icon" :class="props.class ? props.class : 'text-primary'" />
</template>
<script setup lang="ts">
import BaseInput from './BaseInput.vue';

const model = defineModel<string | number>();

defineProps<{ id: string, label?: string }>();

defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <label :for="id" v-if="label" class="text-sm max-w-max">{{ label }}</label>
    <BaseInput>
      <textarea :id="id" v-bind="$attrs" v-model="model" class="w-full p-3 outline-none border-none text-sm"></textarea>
    </BaseInput>
  </div>
</template>

<script setup lang="ts">
import Button, { type ButtonProps, type ButtonSize } from './Button.vue';
import Icon from './Icon.vue';

type ButtonIconProps = { icon: string } & ButtonProps;

withDefaults(defineProps<ButtonIconProps>(), {
  size: 'base',
  variant: 'primary'
});

const buttonSizes = new Map<ButtonSize, string>([
  ['base', 'text-sm min-w-10 min-h-10'],
  ['lg', 'text-base min-w-12 min-h-12'],
  ['sm', 'text-sm min-w-9 min-h-9'],
  ['xs', 'text-xs min-w-8 min-h-9']
])

</script>

<template>
  <Button :variant="variant" class="grid place-items-center rounded-full!" :class="buttonSizes.get(size)">
    <Icon :icon="icon" class="text-inherit" />
  </Button>
</template>
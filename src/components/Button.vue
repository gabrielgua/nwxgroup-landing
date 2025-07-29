<script lang="ts" setup>
export type ButtonProps = {
  variant?: ButtonVariant,
  size?: ButtonSize
}

export type ButtonVariant = 'neutral' | 'primary';
export type ButtonSize = 'sm' | 'base' | 'lg' | 'xs';


withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  size: 'base'
});

const buttonStyles = new Map<ButtonVariant, string>([
  ['neutral', 'bg-white text-text-primary'],
  ['primary', 'bg-primary text-white'],
])

const buttonSizes = new Map<ButtonSize, string>([
  ['base', 'p-3 text-sm rounded-xl'],
  ['lg', 'p-4 text-base rounded-2xl '],
  ['sm', 'p-2 px-3 text-sm rounded-xl'],
  ['xs', 'p-2 px-3 text-xs rounded-xl']
])

</script>

<template>
  <button class="flex items-center gap-4 active:scale-95 hover:scale-105 cursor-pointer transition-all shadow"
    :class="[buttonStyles.get(variant), buttonSizes.get(size)]">
    <slot />
  </button>
</template>

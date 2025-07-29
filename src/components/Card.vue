<template>

  <div class="bg-white p-6 space-y-8 rounded-2xl shadow-lg shadow-slate-200 border border-slate-200 transition-all">
    <div class="self-center" v-if="$slots['card-icon']">
      <slot name="card-icon"></slot>
    </div>
    <div class="space-y-1" v-if="$slots['card-title'] || $slots['card-subtitle']">
      <p class="font-semibold text-text-primary">
        <slot name="card-title" />
      </p>
      <p class="text-text-secondary text-sm">
        <slot name="card-subtitle" />
      </p>
    </div>
    <slot />
  </div>
</template>
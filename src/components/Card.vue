<template>

  <div
    class="bg-white p-6 space-y-8 rounded-2xl shadow-lg shadow-slate-200 border border-slate-200 hover:scale-105 transition-all">
    <div class="self-center">
      <slot name="card-icon"></slot>
    </div>
    <div class="space-y-1">
      <p class="font-semibold text-text-primary">
        <slot name="card-title" />
      </p>
      <p class="text-text-secondary text-sm">
        <slot />
      </p>
    </div>
  </div>
</template>
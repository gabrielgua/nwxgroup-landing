<template>

  <div class="bg-white p-6 space-y-12 rounded-2xl shadow-lg shadow-slate-200 border border-slate-200 ">
    <div class="self-center">
      <slot name="card-icon"></slot>
    </div>
    <div class="space-y-1">
      <p class="text-lg font-semibold text-text-primary">
        <slot name="card-title" />
      </p>
      <p class="text-text-secondary">
        <slot />
      </p>
    </div>
  </div>
</template>
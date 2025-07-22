<template>

  <div class="bg-white p-6 text-text-primary space-y-6 rounded-2xl shadow-lg shadow-slate-200">
    <p class="text-xl">
      <slot name="card-title" />
    </p>
    <p>
      <slot />
    </p>
  </div>
</template>
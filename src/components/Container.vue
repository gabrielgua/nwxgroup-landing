<template>
  <div class="container-custom mx-auto">
    <slot />
  </div>
</template>

<style lang="css">
.container-custom {
  width: min(1337px, 100% - 2rem);
}
</style>
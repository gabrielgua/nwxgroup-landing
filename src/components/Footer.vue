<script setup lang="ts">
import Container from './Container.vue';
</script>

<template>

  <footer class="bg-slate-950 text-text-primary-light p-4 text-white">
    <Container>
      <section class="w-full text-xs flex gap-12 items-center justify-between">
        <section class="flex items-center gap-4">
          <img src="../assets/images/nwx_logo_blue.png" alt="NWX LOGO" class="w-20">
          <p>&copy; 2025 NWX. Todos os direitos reservados. </p>
        </section>
        <p>
          Desenvolvido por
          <a href="https://github.com/gabrielgua" target="_blank" class="text-primary font-semibold hover:underline">
            @gabrielgua</a>
        </p>
      </section>
    </Container>
  </footer>
</template>
<script setup lang="ts">
import Container from './Container.vue';
import HeaderLink from './HeaderLink.vue';
</script>

<template>
  <header class="bg-white sticky top-0 w-full">
    <Container class="py-4 flex items-center justify-between">
      <RouterLink to="/home">
        <img class="max-w-35" src="../assets/images/nwx_logo_blue.png" alt="NWW GROUP LOGO">
      </RouterLink>
      <nav>
        <ul class="flex items-center gap-6">
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/products">Produtos</HeaderLink>
          <HeaderLink to="/about">Sobre nós</HeaderLink>
          <HeaderLink to="/contact">Contato</HeaderLink>
        </ul>
      </nav>
    </Container>
  </header>
</template>
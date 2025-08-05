<script setup lang="ts">
import { ref, Transition } from 'vue';
import ButtonIcon from './ButtonIcon.vue';
import Container from './Container.vue';
import HeaderLink from './HeaderLink.vue';
import Icon from './Icon.vue';


const mobileHeaderOpen = ref<boolean>(false);
const toggleMobileHeader = () => mobileHeaderOpen.value = !mobileHeaderOpen.value;
</script>

<template>
  <header class="bg-white sticky top-0 w-full shadow-md">
    <Container class="py-4 flex items-center justify-between">
      <RouterLink to="/home">
        <img class="max-w-35" src="../assets/images/nwx_logo_blue.png" alt="NWW GROUP LOGO">
      </RouterLink>
      <nav class="hidden md:flex">
        <ul class="flex items-center gap-6">
          <HeaderLink to="/">Home</HeaderLink>
          <HeaderLink to="/products">Produtos</HeaderLink>
          <HeaderLink to="/about">Sobre nós</HeaderLink>
          <HeaderLink to="/contact">Contato</HeaderLink>
        </ul>
      </nav>
      <div @click="toggleMobileHeader" class="md:hidden p-3 cursor-pointer">
        <Icon icon="bars" class="text-lg text-text-primary"></Icon>
      </div>
    </Container>
    <Transition name="slide-from-top" mode="out-in">
      <Container class="md:hidden" v-if="mobileHeaderOpen">
        <nav class="py-6">
          <ul class="flex flex-col gap-4">
            <HeaderLink @clicked="toggleMobileHeader" to="/">Home</HeaderLink>
            <HeaderLink @clicked="toggleMobileHeader" to="/products">Produtos</HeaderLink>
            <HeaderLink @clicked="toggleMobileHeader" to="/about">Sobre nós</HeaderLink>
            <HeaderLink @clicked="toggleMobileHeader" to="/contact">Contato</HeaderLink>
          </ul>
        </nav>
      </Container>
    </Transition>
  </header>
</template>
<style>
.slide-from-top-enter-active,
.slide-from-top-leave-actve {
  transition: all 250ms ease 100ms;
}

.slide-from-top-enter-from,
.slide-from-top-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
<script setup lang="ts">
import Card from './Card.vue';
import Icon from './Icon.vue';

</script>

<template>
  <Card class="max-h-max p-4!">
    <Card class="grid place-items-center p-0! shadow-teal-500/20  size-12 rounded-full mb-6">
      <Icon icon="check" size="lg" class="text-teal-500" />
    </Card>
    <h2 class="text-xl font-semibold text-teal-500 mb-2">Mensagem enviada com sucesso!</h2>
    <p class="text-sm text-text-secondary">
      Responderemos o mais rápido possível. Fique atento ao e-mail informado.
    </p>
  </Card>
</template>

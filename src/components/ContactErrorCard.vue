<script setup lang="ts">
import Card from './Card.vue';
import Icon from './Icon.vue';

</script>

<template>
  <Card class="max-h-max p-4!">
    <Card class="grid place-items-center p-0! rounded-full shadow-rose-500/20 size-12 mb-6">
      <Icon icon="xmark" class="text-rose-500" />
    </Card>
    <h2 class="text-xl font-semibold text-rose-500 mb-2">Erro ao tentar enviar a mensagem.</h2>
    <p class="text-sm text-text-secondary">
      Ocorreu um problema ao enviar sua mensagem. Tente novamente mais tarde.
    </p>
  </Card>
</template>

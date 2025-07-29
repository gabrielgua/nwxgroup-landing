<script setup lang="ts">
import Card from '@/components/Card.vue';
import Section from '@/components/Section.vue';

</script>

<template>
  <Section>
    <template #section-title>Produtos</template>
    <template #section-subtitle>Conheça nosso catálogo de protudos por aqui.</template>

    <section class="grid grid-cols-[auto_1fr] gap-12">
      <div name="filters" class="">
        <Card>
          <template #card-title>Filtrar</template>
          <ul class="text-sm space-y-1">
            <li>Lançamentos</li>
            <li>Disponíveis</li>
            <li>Protetores</li>
          </ul>
        </Card>
      </div>
      <div name="listing">
        <Card>Produto</Card>
      </div>
    </section>
  </Section>

</template>
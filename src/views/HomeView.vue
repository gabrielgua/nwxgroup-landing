<script setup lang="ts">
import Card from '@/components/Card.vue';
import Container from '@/components/Container.vue';
import Hero from '@/components/Hero.vue';
import Icon from '@/components/Icon.vue';

</script>

<template>
  <Hero />
  <Container class="space-y-12 mb-24">
    <p class="text-xl font-semibold text-text-primary text-center">Por que escolher nossos produtos?</p>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card>
        <template #card-icon>
          <div class="grid place-items-center size-12 border border-slate-200 rounded-full shadow">
            <Icon icon="couch" class="text-xl" />
          </div>
        </template>
        <template #card-title>Conforto no dia a dia</template>
        <template #card-subtitle>
          Produtos pensados para o uso contínuo, com materiais leves e acabamento ergonômico.
        </template>
      </Card>
      <Card>
        <template #card-icon>
          <div class="grid place-items-center size-12 border border-slate-200 rounded-full shadow">
            <Icon icon="tools" class="text-xl" />
          </div>
        </template>
        <template #card-title>Funcionalidade real</template>
        <template #card-subtitle>
          Cada item do nosso catálogo é criado para resolver uma necessidade real da sua rotina.
        </template>
      </Card>
      <Card>
        <template #card-icon>
          <div class="grid place-items-center size-12 border border-slate-200 rounded-full shadow">
            <Icon icon="sync-alt" class="text-xl" />
          </div>
        </template>
        <template #card-title>Simples de usar e manter</template>
        <template #card-subtitle>
          Design prático e intuitivo, com fácil higienização e uso descomplicado.
        </template>
      </Card>
      <Card>
        <template #card-icon>
          <div class="grid place-items-center size-12 border border-slate-200 rounded-full shadow">
            <Icon icon="check-circle" class="text-xl" />
          </div>
        </template>
        <template #card-title>Qualidade testada</template>
        <template #card-subtitle>
          Desenvolvidos com materiais de confiança e processos que garantem durabilidade e eficiência.
        </template>
      </Card>
    </div>


  </Container>
</template>
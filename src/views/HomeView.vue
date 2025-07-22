<script setup lang="ts">
import Card from '@/components/Card.vue';
import Container from '@/components/Container.vue';
import Hero from '@/components/Hero.vue';
import Icon from '@/components/Icon.vue';

</script>

<template>
  <Hero />
  <Container class="space-y-12">
    <p class="text-xl font-semibold text-text-primary text-center">Por que escolher nossos produtos?</p>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Card>
        <template #card-icon>
          <div class="grid place-items-center size-14 border border-slate-200 rounded-full shadow">
            <Icon icon="couch" class="text-2xl" />
          </div>
        </template>
        <template #card-title>Conforto no dia a dia</template>
        Produtos pensados para o uso contínuo, com materiais leves e acabamento ergonômico.
      </Card>
      <Card>
        <template #card-icon>
          <div class="grid place-items-center size-14 border border-slate-200 rounded-full shadow">
            <Icon icon="tools" class="text-2xl" />
          </div>
        </template>
        <template #card-title>Funcionalidade real</template>
        Cada item do nosso catálogo é criado para resolver uma necessidade real da sua rotina.
      </Card>
      <Card>
        <template #card-icon>
          <div class="grid place-items-center size-14 border border-slate-200 rounded-full shadow">
            <Icon icon="sync-alt" class="text-2xl" />
          </div>
        </template>
        <template #card-title>Simples de usar e manter</template>
        Design prático e intuitivo, com fácil higienização e uso descomplicado.
      </Card>
      <Card>
        <template #card-icon>
          <div class="grid place-items-center size-14 border border-slate-200 rounded-full shadow">
            <Icon icon="check-circle" class="text-2xl" />
          </div>
        </template>
        <template #card-title>Qualidade testada</template>
        Desenvolvidos com materiais de confiança e processos que garantem durabilidade e eficiência.
      </Card>
    </div>


  </Container>
</template>
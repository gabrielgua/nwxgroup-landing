<script setup lang="ts">
import AboutParagraph from '@/components/AboutParagraph.vue';
import Card from '@/components/Card.vue';
import Section from '@/components/Section.vue';

</script>

<template>
  <Section class="mb-24!">
    <template #title>Sobre nós</template>
    <template #subtitle>Nos conheça melhor</template>

    <div class="grid gap-6 relative">
      <div class="border-r border-slate-200 h-full absolute left-3 hidden lg:block"></div>

      <div class="space-y-4 text-sm z-10">
        <AboutParagraph>

          <Card class="text-text-primary p-4!">
            A <span class="font-semibold text-primary">NWX Group</span> nasceu com um propósito claro:
            <span class="font-semibold">criar soluções</span> que
            <span class="font-semibold">protejam</span>,
            <span class="font-semibold">sirvam</span> e
            <span class="font-semibold">façam sentido</span> para a vida real.
            Somos os responsáveis pelos <span class="font-semibold text-primary">protetores auriculares</span> que você
            já
            conhece —
            produtos pensados para quem vive no ritmo intenso do
            <span class="font-semibold">trabalho</span>, do <span class="font-semibold">transporte</span>, da
            <span class="font-semibold">cidade</span>… e precisa de um
            <span class="font-semibold">momento de silêncio</span>.
          </Card>
        </AboutParagraph>

        <AboutParagraph>
          <Card class="text-primary font-semibold p-4!">Mas somos mais do que isso.</Card>
        </AboutParagraph>

        <AboutParagraph>

          <Card class="p-4!">
            <span class="font-semibold">Acreditamos que o cuidado começa pelos detalhes</span>. Por isso,
            nossos <span class="font-semibold">protetores</span> não são apenas eficazes contra o
            <span class="font-semibold">ruído</span> — eles são
            <span class="font-semibold">confortáveis</span>,
            <span class="font-semibold">duráveis</span> e
            <span class="font-semibold">acessíveis</span>.
            Não seguimos <span class="font-semibold">tendências</span>: observamos,
            <span class="font-semibold">escutamos</span>, <span class="font-semibold">testamos</span> e
            <span class="font-semibold">melhoramos constantemente</span>, porque sabemos que o mundo não para,
            e a sua <span class="font-semibold">proteção</span> também não pode parar.
          </Card>
        </AboutParagraph>

        <AboutParagraph>
          <Card class="p-4!">
            Aqui, <span class="font-semibold text-primary">inovação</span> não é só
            <span class="font-semibold">tecnologia</span> — é
            <span class="font-semibold">entender o que realmente importa</span> para quem está do outro lado.
          </Card>
        </AboutParagraph>

        <AboutParagraph>

          <Card class="p-4!">
            A <span class="font-semibold text-primary">NWX</span> é
            <span class="font-semibold">brasileira</span>,
            <span class="font-semibold">independente</span>, e feita por gente que gosta de
            <span class="font-semibold">fazer bem feito</span>.
            Do <span class="font-semibold">produto</span> à <span class="font-semibold">entrega</span>, da
            <span class="font-semibold">ideia</span> ao uso no dia a dia, tudo é feito com
            <span class="font-semibold">atenção</span> e
            <span class="font-semibold">responsabilidade</span>.
          </Card>
        </AboutParagraph>

        <AboutParagraph>
          <Card class="p-4!">
            <span class="font-semibold">E isso é só o começo.</span>
          </Card>
        </AboutParagraph>

      </div>
    </div>

  </Section>





</template>
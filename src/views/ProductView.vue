<script setup lang="ts">
import Card from '@/components/Card.vue';
import Container from '@/components/Container.vue';
import Icon from '@/components/Icon.vue';

</script>

<template>

  <Container class="py-12 space-y-12">
    <section class="flex items-center gap-3 text-text-secondary text-sm">
      <p>Home</p>
      <Icon icon="chevron-right" class="text-xs" />
      <p>Produtos</p>
      <Icon icon="chevron-right" class="text-xs" />
      <p class="text-primary">Protetor auricular antirruído</p>
    </section>
    <section class="grid grid-cols-[auto_1fr] gap-12">
      <section class="flex gap-3 max-h-[500px]">
        <div class="flex flex-col gap-6 items-center">
          <button class="min-w-10 min-h-10 bg-white rounded-full shadow-lg">
            <Icon icon="chevron-up" class="text-sm text-primary" />
          </button>
          <div class="space-y-3 overflow-y-hidden scroll-smooth p-3 -m-3">
            <Card class="size-24 p-3! grid place-items-center outline-2 outline-primary/30">
              <img class="aspect-square rounded-xl" src="../assets/images/earplugs/nwx_black.jpeg" alt="">
            </Card>
            <Card class="size-24 p-3! grid place-items-center">
              <img class="aspect-square rounded-xl" src="../assets/images/earplugs/nwx_white.jpeg" alt="">
            </Card>

            <Card class="size-24 p-3! grid place-items-center">
              <img class="aspect-square rounded-xl" src="../assets/images/earplugs/nwx_noise_reduction.jpeg" alt="">
            </Card>
            <Card class="size-24 p-3! grid place-items-center">
              <img class="aspect-square rounded-xl" src="../assets/images/earplugs/nwx_noise_reduction_2.jpeg" alt="">
            </Card>
            <Card class="size-24 p-3! grid place-items-center">
              <img class="aspect-square rounded-xl" src="../assets/images/earplugs/nwx_noise_reduction_3.jpeg" alt="">
            </Card>
          </div>

          <button class="min-w-10 min-h-10 bg-white rounded-full shadow-lg">
            <Icon icon="chevron-down" class="text-sm text-primary" />
          </button>
        </div>
        <Card class="max-w-max hover:cursor-zoom-in p-12 hover:*:scale-105 *:transition-all">
          <img class="max-w-[400px] aspect-square" src="../assets/images/earplugs/nwx_black.jpeg" alt="produto">
        </Card>
      </section>

      <div class="flex flex-col grow gap-12">
        <div>
          <h5 class="text-text-secondary/50 text-sm">SKU.: CPA_0018945</h5>
          <h2 class="text-primary font-semibold text-4xl mb-6">Protetor auricular antirruído</h2>
          <p class="text-text-primary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis recusandae
            delectus tenetur ad consequatur
            quia quae distinctio porro? Neque ex aut harum quibusdam aliquam asperiores inventore sint pariatur et
            nostrum.
          </p>
        </div>

        <div class="space-y-6 mt-auto">
          <h4 class="text-text-primary">Cores</h4>
          <div class="flex items-center gap-6">
            <Card class="space-y-3! p-4! border grid place-items-center w-20">
              <div class="size-10 rounded-full bg-slate-100 outline-2 outline-white"></div>
              <p class="text-text-secondary font-light text-sm">
                Branco
              </p>
            </Card>
            <Card class="space-y-3! p-4! border grid place-items-center w-20 outline-2 outline-primary/30">
              <div class="size-10 rounded-full bg-black outline-2 outline-white"></div>
              <p class="text-text-secondary font-light text-sm">
                Preto
              </p>
            </Card>
            <Card class="space-y-3! p-4! border grid place-items-center w-20">
              <div class="size-10 rounded-full bg-teal-500 outline-2 outline-white"></div>
              <p class="text-text-secondary font-light text-sm">
                Verde
              </p>
            </Card>
          </div>
        </div>
        <button class="bg-primary text-white p-6 rounded-2xl font-semibold">
          Ir à loja
          <Icon icon="arrow-up-right-from-square" class="text-white" />
        </button>

      </div>
    </section>

  </Container>

</template>
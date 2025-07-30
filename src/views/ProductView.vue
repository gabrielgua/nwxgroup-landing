<script setup lang="ts">
import Button from '@/components/Button.vue';
import Card from '@/components/Card.vue';
import Carousel from '@/components/Carousel.vue';
import Container from '@/components/Container.vue';
import Icon from '@/components/Icon.vue';

const images = [
  new URL('../assets/images/earplugs/nwx_black.jpeg', import.meta.url).href,
  new URL('../assets/images/earplugs/nwx_white.jpeg', import.meta.url).href,
  new URL('../assets/images/earplugs/nwx_noise_reduction.jpeg', import.meta.url).href,
  new URL('../assets/images/earplugs/nwx_noise_reduction_2.jpeg', import.meta.url).href,
  new URL('../assets/images/earplugs/nwx_noise_reduction_3.jpeg', import.meta.url).href,
  new URL('../assets/images/earplugs/nwx_black.jpeg', import.meta.url).href,
  new URL('../assets/images/earplugs/nwx_white.jpeg', import.meta.url).href,
  new URL('../assets/images/earplugs/nwx_noise_reduction.jpeg', import.meta.url).href,
  new URL('../assets/images/earplugs/nwx_noise_reduction_2.jpeg', import.meta.url).href,
  new URL('../assets/images/earplugs/nwx_noise_reduction_3.jpeg', import.meta.url).href

];

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
      <Carousel :images="images" />
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
            <Card class="space-y-3! p-4! border grid place-items-center w-20">
              <div class="size-10 rounded-full bg-black outline-2 outline-white"></div>
              <p class="text-text-secondary font-light text-sm">
                Preto
              </p>
            </Card>

          </div>
        </div>
        <Button size="lg" class="justify-center font-semibold">
          Ir à loja
          <Icon icon="arrow-up-right-from-square" />
        </Button>

      </div>
    </section>

  </Container>

</template>
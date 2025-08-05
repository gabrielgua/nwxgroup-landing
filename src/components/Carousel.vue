<script setup lang="ts">
import { ref, watch } from 'vue';
import ButtonIcon from './ButtonIcon.vue';
import Card from './Card.vue';

const props = defineProps<{ images: string[] }>()
const selected = ref<number>(0);

const verticalContainer = ref<HTMLElement>();
const thumbnailSize = 88 + 12; // size-24 (96px) + space-y-3 (12px)

const horizontalContainer = ref<HTMLElement>();

const next = () => {
  if (selected.value === props.images.length - 1) {
    selected.value = 0;
    return;
  }
  selected.value++;
};

const previous = () => {
  if (selected.value === 0) {
    selected.value = props.images.length - 1;
    return;
  }
  selected.value--;
};

const scrollToSelected = () => {
  if (!verticalContainer.value) return;

  verticalContainer.value.scrollTo({
    top: selected.value * thumbnailSize,
    behavior: 'smooth',
  });

  if (!horizontalContainer.value) return;

  horizontalContainer.value.scrollTo({
    left: selected.value * thumbnailSize,
    behavior: 'smooth',
  });
};


watch(selected, scrollToSelected);

</script>

<template>
  <section
    class="flex flex-col-reverse md:flex-row gap-3 md:h-[500px] overflow-x-auto md:overflow-visible transition-all p-3 -m-3">
    <!-- Mobile Thumbnail Row -->

    <div class="md:hidden flex flex-col gap-3">

      <div ref="horizontalContainer" class="flex flex-nowrap gap-3 w-full overflow-x-auto no-scrollbar">
        <Card v-for="(img, index) in images" :key="index" @click="selected = index"
          class="size-24 flex-shrink-0 p-2! grid place-items-center outline-2 outline-transparent cursor-pointer hover:*:scale-105 *:transition-all transition-all"
          :class="{ 'hover:*:scale-100! cursor-default! ': index === selected }">
          <img class="aspect-square rounded-xl object-cover size-full outline-2 outline-transparent"
            :class="{ 'outline-primary! ': index === selected }" :src="img" />
        </Card>
      </div>
      <div class="flex items-center justify-between w-full gap-2 self-center">
        <ButtonIcon @click="previous" variant="neutral" size="sm" icon="chevron-left" />

        <div class="flex items-center gap-3">
          <div v-for="(_, index) in images" :key="index"
            class="w-3 h-1 outline-white transition-all bg-white shadow rounded-full"
            :class="{ 'bg-primary! size-3!': index === selected }">
          </div>
        </div>
        <ButtonIcon @click="next" variant="neutral" size="sm" icon="chevron-right" />

      </div>
    </div>
    <div class="hidden md:flex flex-col gap-6 items-center">
      <ButtonIcon @click="previous" variant="neutral" icon="chevron-up" />

      <div ref="verticalContainer" class="no-scrollbar space-y-3 overflow-y-auto scroll-smooth p-3 -m-3">
        <Card v-for="(img, index) in images" :key="index" @click="selected = index"
          class="size-22 p-2! grid place-items-center outline-2 outline-transparent cursor-pointer hover:*:scale-105 *:transition-all transition-all"
          :class="{ 'outline-primary! hover:*:scale-100! cursor-default! scale-105!': index === selected }">
          <img class="aspect-square rounded-xl object-cover" :src="img" />
        </Card>
      </div>

      <ButtonIcon @click="next" icon="chevron-down" variant="neutral" />
    </div>

    <!-- Main Image -->
    <Card
      class="hover:cursor-zoom-in md:p-3 hover:*:scale-105 *:transition-all max-w-[500px] max-h-[500px] self-center">
      <img class="size-full aspect-square rounded-xl" :src="images[selected]" alt="produto" />
    </Card>
  </section>
</template>

<style lang="css" scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>
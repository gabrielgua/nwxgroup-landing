<script setup lang="ts">
import { ref, watch, type ComponentPublicInstance } from 'vue';
import ButtonIcon from './ButtonIcon.vue';
import Card from './Card.vue';

const props = defineProps<{ images: string[] }>()
const selected = ref<number>(0);

const thumbnailContainer = ref<HTMLElement>();
const thumbnailHeight = 88 + 12; // size-24 (96px) + space-y-3 (12px)

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
  if (!thumbnailContainer.value) return;

  thumbnailContainer.value.scrollTo({
    top: selected.value * thumbnailHeight,
    behavior: 'smooth',
  });
};

const getImageURL = (url: string) => {
  return new URL(url, import.meta.url).href
}

watch(selected, scrollToSelected);

</script>

<template>
  <section class="flex gap-3 h-[500px]">
    <div class="flex flex-col gap-6 items-center">
      <ButtonIcon @click="previous" variant="neutral" icon="chevron-up" />

      <div ref="thumbnailContainer" class="no-scrollbar space-y-3 overflow-y-auto scroll-smooth p-3 -m-3">
        <Card v-for="(img, index) in images" :key="index" variant="neutral" @click="selected = index"
          class="size-22 p-3! grid place-items-center outline-2 outline-transparent cursor-pointer hover:*:scale-105 *:transition-all transition-all"
          :class="{ 'outline-primary! hover:*:scale-100! cursor-default! scale-105!': index === selected }">
          <img class="aspect-square rounded-xl object-cover" :src="getImageURL(img)" />
        </Card>
      </div>

      <ButtonIcon @click="next" icon="chevron-down" variant="neutral" />
    </div>

    <Card class="hover:cursor-zoom-in p-12 hover:*:scale-105 *:transition-all size-full">
      <img class="max-w-[400px] aspect-square" :src="getImageURL(images[selected])" alt="produto" />
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
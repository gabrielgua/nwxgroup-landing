<script setup lang="ts">
import Card from '@/components/Card.vue';
import Hero from '@/components/Hero.vue';

</script>

<template>
  <Hero />
  <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto ">
    <Card>
      <template #card-title>Title</template>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat debitis necessitatibus provident doloremque error,
      repudiandae dolorum quaerat magnam, nihil adipisci ut veniam natus totam reiciendis exercitationem doloribus.
      Recusandae, minus architecto.
    </Card>
    <Card>
      <template #card-title>Title</template>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat debitis necessitatibus provident doloremque error,
      repudiandae dolorum quaerat magnam, nihil adipisci ut veniam natus totam reiciendis exercitationem doloribus.
      Recusandae, minus architecto.
    </Card>
    <Card>
      <template #card-title>Title</template>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat debitis necessitatibus provident doloremque error,
      repudiandae dolorum quaerat magnam, nihil adipisci ut veniam natus totam reiciendis exercitationem doloribus.
      Recusandae, minus architecto.
    </Card>
    <Card>
      <template #card-title>Title</template>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat debitis necessitatibus provident doloremque error,
      repudiandae dolorum quaerat magnam, nihil adipisci ut veniam natus totam reiciendis exercitationem doloribus.
      Recusandae, minus architecto.
    </Card>
  </div>
</template>
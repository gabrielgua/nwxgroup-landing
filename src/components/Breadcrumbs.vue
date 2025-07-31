<script setup lang="ts">
import { useProductStore } from '@/stores/product.store';
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Icon from './Icon.vue';

const route = useRoute();
const router = useRouter();

const breadcrumbs = computed(() => {
  const segments = route.path.split('/').filter(Boolean)
  const crumbs = [{ name: 'Home', path: '/' }]

  let fullPath = ''

  for (let i = 0; i < segments.length; i++) {
    fullPath += '/' + segments[i]

    const match = router.getRoutes().find(r => {
      const routeSegments = r.path.split('/').filter(Boolean)
      if (routeSegments.length !== i + 1) return false

      return routeSegments.every((seg, j) => seg.startsWith(':') || seg === segments[j])
    })

    if (match?.name) {
      crumbs.push({ name: match.name.toString(), path: fullPath })
    }
  }

  return crumbs
})
</script>
<template>
  <section class="flex items-center gap-3 text-text-secondary text-sm">
    <template v-for="(crumb, index) in breadcrumbs" :key="crumb.path">
      <RouterLink v-if="index < breadcrumbs.length - 1" :to="crumb.path" class="hover:underline">
        {{ crumb.name }}
      </RouterLink>
      <p v-else class="text-primary">{{ crumb.name }}</p>
      <Icon v-if="index < breadcrumbs.length - 1" icon="chevron-right" class="text-xs" />
    </template>
  </section>

</template>
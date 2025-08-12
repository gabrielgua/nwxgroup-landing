import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/products',
      name: 'Produtos',
      component: () => import('../views/ProductListingView.vue'),
    },
    {
      path: '/products/:slug',
      name: 'Detalhes do produto',
      component: () => import('../views/ProductView.vue'),
    },
    {
      path: '/about',
      name: 'Sobre nós',
      redirect: '/',
      // component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'Contato',
      component: () => import('../views/ContactView.vue'),
    },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*{
      path: '/',
      name: 'home',
      component: HomeView,
    },*/
    {
      path: '/',
      name: 'Inicio',

      component: () => import('@/views/MainView.vue'),
    },
    {
      path: '/producto/:id',
      name: 'ProductoDetalle',
      component: () => import('@/views/ProductoDetalle.vue')
    }
  ],
})

export default router

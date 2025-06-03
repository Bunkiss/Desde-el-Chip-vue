import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/modules/inicio/views/MainView.vue'

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

      component: MainView
    },
    {
      path: '/producto/:id',
      name: 'ProductoDetalle',

      component: () => import('@/modules/producto/views/ProductoDetalleView.vue')
    }
  ],
})

export default router

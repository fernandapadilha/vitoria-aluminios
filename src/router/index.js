import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: () => import('../views/InicioView.vue')
    },
    {
      path: '/modelos',
      name: 'modelos',
      component: () => import('../views/ModelosView.vue')
    },
    {
      path: '/orcamento',
      name: 'orcamento',
      component: () => import('../views/OrcamentoView.vue')
    }
  ]
})

export default router

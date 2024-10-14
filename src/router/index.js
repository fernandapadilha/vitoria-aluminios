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
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: () => import('../views/CadastroView.vue')
    },
    {
      path: '/modelo/:id',
      name: 'modelo',
      component: () => import('../views/ModeloView.vue'),
      props: true
    }
  ]
})

export default router

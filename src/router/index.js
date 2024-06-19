import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VerView from '../views/VerView.vue'
import EditView from '../views/EditView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cuenta',
      name: 'cuenta',
      component: VerView
    },
    {
      path: '/twit/:id',
      name: 'detalles',
      component: EditView
    }
  ]
})

export default router

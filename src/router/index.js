import { createRouter, createWebHistory} from 'vue-router'

const login = () => import('@/views/login.vue')

const routes = [
  {
    name: 'login',
    path: '/login',
    component: login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
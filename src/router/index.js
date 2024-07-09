import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import List from '@/components/List.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    component: List
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

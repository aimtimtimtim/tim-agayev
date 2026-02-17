import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../components/layouts/MainLayout.vue'
import Home from '../pages/Home.vue'
import CasePage from '../components/ui/Cases/CasePage.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        component: Home,
        name: 'Home'
      },
      {
        path: '/case/:id',
        component: CasePage,
        name: 'CasePage'
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

import { createRouter, createWebHashHistory } from 'vue-router'
import MenuView from '../views/MenuView.vue'
import LoanView from '../views/LoanView.vue'

const routes = [
  {
    path: '/',
    redirect: '/menu'
  },
  {
    path: '/menu',
    name: 'menu',
    component: MenuView
  },
  {
    path: '/loans',
    name: 'loans',
    component: LoanView
  },
  {
    path: '/debts',
    name: 'debts',
    component: LoanView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

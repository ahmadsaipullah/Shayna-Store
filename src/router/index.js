import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Product from '../views/Product.vue'
import ShoppingCard from '../views/ShoppingCard.vue'
import Success from '../views/Success.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path: '/product',
    name: 'product',
    component: Product
  },

  {
    path: '/shopping-card',
    name: 'card',
    component: ShoppingCard
  },

  {
    path: '/success',
    name: 'success',
    component: Success
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

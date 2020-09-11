import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "About" */ '../views/About.vue')
  },
  {
    path: '/servicios',
    name: 'Servicios',
    component: () => import(/* webpackChunkName: "Servicios" */ '../views/Servicios.vue')
  },
  {
    path: '/fotos/:id',
    name: 'Fotos',
    component: () => import(/* webpackChunkName: "Fotos" */ '../views/Fotos.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

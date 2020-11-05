import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/registro',
    name: 'Registro',
    component: () => import('../views/Registro.vue')
  },
  {
    path: '/',
    name: 'Inicio',
    component: () => import('../views/Inicio.vue')
  },
  {
    path: '/acceso',
    name: 'Acceso',
    component: () => import('../views/Acceso.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

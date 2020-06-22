import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/inicio',
    name: 'inicio',
    component: () => import('../views/Inicio.vue')
  },
  {
    path: '/insignia',
    name: 'insignia',
    component: () => import('../views/SalaInsignias.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: () => import('../views/Notifications.vue')
  },
  {
    path: '/prueba',
    name: 'prueba',
    component: () => import('../views/prueba.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

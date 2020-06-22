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
    path: '/main',
    name: 'main',
    component: () => import('../views/Main.vue'),
    meta: {
      requiresAuth: true
    }
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
/*
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("jwt") == null) {
      next({
        path: "/"
      })
    } else {
      next()
    }
  } else {
    next()
  }
})*/

export default router

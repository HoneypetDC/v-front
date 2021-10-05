import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "inicio" */ '../views/Inicio.vue')
  },
  {
    path: '/mascotas',
    name: 'Mascotas',
    component: () => import(/* webpackChunkName: "about" */ '../views/Mascotas.vue')
  },
  {
    path: '/adoptar',
    name: 'Adoptar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Adoptar.vue')
  },
  {
    path: '/alianzas',
    name: 'Alianzas',
    component: () => import(/* webpackChunkName: "about" */ '../views/Alianzas.vue')
  },
  {
    path: '/publicar',
    name: 'Publicar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Publicar.vue')
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: () => import(/* webpackChunkName: "about" */ '../views/Perfil.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

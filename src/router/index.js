import Vue from 'vue'
import VueRouter from 'vue-router'
import MainWrapper from '../views/MainWrapper.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'MainWrapper',
    component: MainWrapper
  },

  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/three',
    name: 'Three',
    component: () => import(/* webpackChunkName: "about" */ '../views/Three.vue')
  },

  {
    path: '/four',
    name: 'Four',
    component: () => import(/* webpackChunkName: "about" */ '../views/Four.vue')
  },

  {
    path: '*',
    name: 'error-404',
    component: () => import( /* webpackChunkName: "about" */ '../views/404.vue')
  }

]

const router = new VueRouter({
  
  // mode: 'history',
  // base: process.env.BASE_URL,
  // мод хистори убирает хэш, он нужен для продакшен версии для роутов
  routes

})

export default router

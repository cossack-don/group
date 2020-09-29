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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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

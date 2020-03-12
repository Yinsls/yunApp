import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from '../views/Home.vue'
import Paint from '../components/drill/Paint.vue'
import IconFontList from '../views/IconFontList.vue'
import PaintFooter from '../components/drill/Footer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/paint',
    name: 'paint',
    component: Paint
  },
  {
    path: '/iconList',
    name: 'iconList',
    component: IconFontList
  },
  {
    path: '/paintFooter',
    name: 'paintFooter',
    component: PaintFooter
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

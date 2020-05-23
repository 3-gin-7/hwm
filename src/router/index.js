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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/treatments',
    name:'Treatments',
    component: () => import('../views/Treatments.vue')
  },
  {
    path:'/contact',
    name:'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path:'/policies',
    name:'Policies',
    component: () => import('../views/Policies.vue')
  },
  {
    path:'/faq',
    name:'FAQ',
    component: () => import('../views/FAQ.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

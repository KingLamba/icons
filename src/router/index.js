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
    path: '/kakaha',
    name: 'kakaha',
    component: () => import(/* webpackChunkName: "about" */ '../views/kakaha.vue')
  },
  {
    path: '/rus9',
    name: 'rus9',
    component: () => import(/* webpackChunkName: "about" */ '../views/rus9.vue')
  },
  {
    path: '/romik',
    name: 'romik',
    component: () => import(/* webpackChunkName: "about" */ '../views/romik.vue')

  },
  { 
    path: '/404', 
    name: '404', 
    component: () => import(/* webpackChunkName: "about" */ '../views/404.vue'),
  }, { 
    path: '*', 
    redirect: '/404' 
  }

 
  
]

const router = new VueRouter({
  routes
})

export default router

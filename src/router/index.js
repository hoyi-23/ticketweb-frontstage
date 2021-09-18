import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import ('../views/Home.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/auth',
    name: 'Auth',
    component: ()=>('../views/Authentication.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/checkout',
    name: 'CheckOut',
    component: () => import('../views/CheckOut.vue')
  },
  {
    path: '/eventdetail/:eventId',
    name: 'EventDetail',
    component: () => import('../views/EventDetail.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'
import firebase from 'firebase/app';
import 'firebase/auth';
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
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
    children:[
      {
        path: '',
        name: 'UserInfo',
        component: ()=>import('../views/UserInfo'),
        alias: 'userinfo',
        meta: { requiresAuth: true },
      },
      {
        path: 'myticket',
        name: 'MyTicket',
        component: ()=>import('../views/MyTicket'),
        meta: { requiresAuth: true },
      }
    ],
  },
  {
    path: '/checkout',
    name: 'CheckOut',
    component: () => import('../views/CheckOut.vue'),
    meta: { requiresAuth: true },
    //若尚未註冊登入 導回admin登入頁面
    beforeEnter: () => {
      const user = localStorage.getItem('user')
      if(localStorage.getItem('cartItem') == null){
        alert('尚未加入任何活動')
        return{
          path: '/'
        }
      }else if(!user){
        alert('請先登入會員')
        return{
          path: '/admin',
        }
      }
    },
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

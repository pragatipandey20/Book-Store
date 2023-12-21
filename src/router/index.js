import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import('../views/Dashboard.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },{
      path:'/bookDetails',
      name:'bookDetails',
      component:()=>import('../views/BookDetails.vue')
    },{
      path:'/cart',
      name:'CartView',
      component:()=>import('../views/CartView.Vue')
    },{
      path:'/signIn',
      name:'Signin',
      component:()=>import('../views/SigninView.vue')
    },{
      path:'/purchase',
      name:'purchase',
      component:()=>import('../views/Purchase.vue')
    }
  ]
})

export default router

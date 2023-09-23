import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/dece',
      name: 'dece',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TutoView.vue')
    },
    {
      path:'/doco',
      name:'doco',
      component: () => import('../views/TutoSeconView.vue')
    },
    {
      path:'/scroll',
      name:'scroll',
      component: () => import('../views/scrollView.vue')
    },
    {
      path:'/scroll-projet',
      name:'scroll-projet',
      component: () => import('../views/scrollProjetView.vue')
    }

  ]
})

export default router

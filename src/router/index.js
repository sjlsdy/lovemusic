import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/page/Index'

import Login from '@/page/Login'
import Register from '@/page/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    }
  ]
})

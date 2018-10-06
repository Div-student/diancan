import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Toats from '@/cmcomponents/toats'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/toats',
      name: 'Toats',
      component: Toats
    }
  ]
})

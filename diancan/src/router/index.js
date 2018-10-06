import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Cantai from '@/components/cantai'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/cantai',
      name: 'Cantai',
      component: Cantai
    }
  ]
})

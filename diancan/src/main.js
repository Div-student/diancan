// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入axios
import axios from './commonjs/axios'
// 引入金额过滤器
import FormatMoney from './commonjs/FormatMoney'
// 引入时间过滤器
import FormatTime from './commonjs/FormatTime'
// 引入全局组件
import toats from './cmcomponents/toats'

// 注册成为全局插件
Vue.prototype.$axios = axios
// 注册为全局过滤器
Vue.filter('FormatMoney', FormatMoney)
Vue.filter('FormatTime', FormatTime)
// 注册为全局组件
Vue.component('toats', toats)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { App },
  template: '<App/>'
})

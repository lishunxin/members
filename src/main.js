// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app from './app'
import router from './router'
import axios from 'axios'
import qs from 'qs'

// vueresource
// import VueResource from 'vue-resource'
// Vue.use(VueResource)
axios.default.withCredentials = true
Vue.config.productionTip = false

Vue.prototype.$http = axios;
(function () {
  let desW = 750
  let winW = document.documentElement.clientWidth
  let ratio = winW / desW
  document.documentElement.style.fontSize = ratio * 100 + 'px'
})()

Vue.prototype.$http = axios
Vue.prototype.$qs = qs
axios.defaults.baseURL = '/ajaxurul/welfare/gpa'
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: {app},
  template: '<app/>'
})

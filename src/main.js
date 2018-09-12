// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$http = axios;
(function () {
  let desW = 750
  let winW = document.documentElement.clientWidth
  let ratio = winW / desW
  document.documentElement.style.fontSize = ratio * 100 + 'px'
})()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

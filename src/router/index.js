import Vue from 'vue'
import Router from 'vue-router'
import introduce from '../components/introduce'
import login from '../components/login.vue'
import login2 from '../components/login2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'introduce',
      component: introduce
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/login2',
      name: 'login2',
      component: login2
    }
  ]
})

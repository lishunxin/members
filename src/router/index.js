import Vue from 'vue'
import Router from 'vue-router'
import introduce from '../components/introduce'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'introduce',
      component: introduce
    }
  ]
})

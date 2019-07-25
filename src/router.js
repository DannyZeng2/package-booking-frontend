import VueRouter from 'vue-router'
import User from './views/User'
import Admin from './views/Admin'
import Vue from 'vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }

  ]

})

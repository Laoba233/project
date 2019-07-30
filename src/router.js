import Vue from 'vue'
import Router from 'vue-router'

import About from './views/About.vue'
import Home from './views/Home.vue'
import basic from './router/basic.js'
import exam from './router/exam.js'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        ...basic,
        ...exam
      ]
    },
    {
      path: '/',
      name: 'about',
      component: About
    }
  ]
})

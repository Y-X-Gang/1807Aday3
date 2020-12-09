import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

import Main from '@/view/main'
import My from '@/view/my'

import Home from '@/view/home'

import Detail from '@/view/detail'

Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children:[
        {
          path: '/my',
          component: My,
          text: '我的'
        },
        {
          path: '/main',
          component: Main,
          text: "首页"
        },
        {
          path: '/home',
          component: Home,
          text: '主页'
        }
      ]
    },
    {
      path: '/detail/:id',
      component: Detail
    }
  ]
})

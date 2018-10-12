import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import CarouselTable from '@/views/CarouselTable'
import Echarts from '@/views/Echarts'
import FormView from '@/views/FormView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '/',
          redirect: '/CarouselTable'
        },
        {
          path: '/CarouselTable',
          component: CarouselTable
        },
        {
          path: '/Echarts',
          component: Echarts
        },
        {
          path: '/FormView',
          component: FormView
        }
      ]
    }
  ]
})

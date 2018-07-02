import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Calendar from '@/components/Calendar'
import Products from '@/components/Products'
import Book from '@/components/Book'
import Qrcode from '@/components/Qrcode'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/calendar/',
      name: 'Calendar',
      component: Calendar
    },
    {
      path: '/products/',
      name: 'Products',
      component: Products
    },
    {
      path: '/book/',
      name: 'Book',
      component: Book
    },
    {
      path: '/qrcode/',
      name: 'Qrcode',
      component: Qrcode
    }
  ]
})

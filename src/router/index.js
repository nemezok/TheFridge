import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Calendar from '@/components/Calendar'
import Products from '@/components/Products'
import Book from '@/components/Book'
import Qrcode from '@/components/Qrcode'
import Details from '@/components/Details'
import AddProduct from '@/components/AddProduct'

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
    },
    {
      path: '/details/:id',
      component: Details,
      name: 'details'
    },
    {
      path: '/addproduct/',
      component: AddProduct,
      name: 'addproduct'
    }
  ]
})

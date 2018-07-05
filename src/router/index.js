import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Calendar from '@/components/Calendar'
import Products from '@/components/Products'
import Book from '@/components/Book'
import Qrcode from '@/components/Qrcode'
import Details from '@/components/Details'
import DetailsEdit from '@/components/DetailsEdit'
import Profile from '@/components/Profile'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Premium from '@/components/Premium'

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
      path: '/recipe/:id',
      component: Details,
      name: 'details'
    },
    {
      path: '/recipeEdit/:id',
      component: DetailsEdit,
      name: 'DetailsEdit'
    },
    {
      path: '/profile/',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/login/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register/',
      name: 'Register',
      component: Register
    },
    {
      path: '/premium/',
      name: 'Premium',
      component: Premium
    }
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import billings from '../components/billings.vue'
import billingsPay from '../components/billingsPay.vue'
import billingsIncome from '../components/billingsIncome.vue'
import about from '../components/about.vue'
import notFoundVue from '@/components/notFound.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/index.html',
    redirect: '/billings'

  },
  {
    path: '/',
    redirect: '/billings'
  },
  {
    path: '/billings',
    name: 'billings',
    component: billings
  },

  {
    path: '/billingsIncome',
    name: 'billingsIncome',
    component: billingsIncome
  },
  {
    path: '/billingsPay',
    name: 'billingsPay',
    component: billingsPay
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    //捕获404，not found
    path: '*',
    name: 'notFoundVue',
    component: notFoundVue
  }
]

const router = new VueRouter({
  base: '/static/fys/Cashbook/',
  routes,

})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import layout1 from '../layouts/layout1.vue'
import layout2 from '../layouts/layout2.vue'
import layout3 from '../layouts/layout3.vue'
import layout4 from '../layouts/layout4.vue'
import layout5 from '../layouts/layout5.vue'


const routes = [{
  // Layout 2
  path: '/',
  redirect: '/',
  component: layout1,
  children: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: "demo" */ '../components/pages/Index.vue')
    },
    
  ]
},
{
  // Layout 2
  path: '/',
  redirect: '/',
  component: layout2,
  children: [
    {
      path: '/dashboard',
      component: () => import(/* webpackChunkName: "demo" */ '../components/pages/Dashboard.vue')
    },
    {
      path: '/security',
      component: () => import(/* webpackChunkName: "demo" */ '../components/pages/Security.vue')
    },
    {
      path: '/verify',
      component: () => import(/* webpackChunkName: "demo" */ '../components/pages/Verify.vue')
    },
    {
      path: '/refferals',
      component: () => import(/* webpackChunkName: "demo" */ '../components/pages/Refferals.vue')
    },
  ]
  },

  {
    // Layout 2
    path: '/',
    redirect: '/',
    component: layout3,
    children: [
      {
        path: '/buy',
        component: () => import(/* webpackChunkName: "demo" */ '../components/pages/Buy.vue')
      },
      {
        path: '/sell',
        component: () => import(/* webpackChunkName: "demo" */ '../components/pages/Sell.vue')
      },
      {
        path: '/exchange',
        component: () => import(/* webpackChunkName: "demo" */ '../components/pages/Exchange.vue')
      },
      {
        path: '/indexexchange',
        component: () => import(/* webpackChunkName: "demo" */ '../components/pages/IndexExchange.vue')
      },
      {
        path: '/margin/:sym',
        component: () => import(/* webpackChunkName: "demo" */ '../components/pages/MarginTrade.vue')
      },
    ]
  },
  {
    // Layout 4
    path: '/',
    redirect: '/',
    component: layout4,
    children: [
      {
        path: '/deposit',
        component: () => import(/* webpackChunkName: "demo" */ '../components/pages/Deposit.vue')
      },
      {
        path: '/withdraw',
        component: () => import(/* webpackChunkName: "demo" */ '../components/pages/Withdraw.vue')
      },
      {
        path: '/transactions',
        component: () => import(/* webpackChunkName: "demo" */ '../components/pages/Transactions.vue')
      },
    ]
  },
  {
    // Layout 4
    path: '/p2p',
    redirect: '/p2p/buy',
    component: layout5,
    children: [
      {
        path: 'buy',
        component: () => import(/* webpackChunkName: "demo" */ '../components/pages/P2PBuy.vue')
      },
      {
        path: 'sell',
        component: () => import(/* webpackChunkName: "demo" */ '../components/pages/P2PSell.vue')
      },
      {
        path: 'edit/:id',
        component: () => import(/* webpackChunkName: "demo" */ '../components/pages/P2PEdit.vue')
      },
      {
        path: 'buypage/:id',
        component: () => import(/* webpackChunkName: "demo" */ '../components/pages/P2PBuyPage.vue')
      },
      {
        path: 'buypagenew/:id',
        component: () => import(/* webpackChunkName: "demo" */ '../components/pages/P2PBuyPageNew.vue')
      },
      {
        path: 'sellpage/:id',
        component: () => import(/* webpackChunkName: "demo" */ '../components/pages/P2PSellPage.vue')
      },
      {
        path: 'my-orders',
        component: () => import(/* webpackChunkName: "demo" */ '../components/pages/P2PMyOrders.vue')
      },
      {
        path: 'my-sells',
        component: () => import(/* webpackChunkName: "demo" */ '../components/pages/P2PMySells.vue')
      },
      {
        path: 'transactions',
        component: () => import(/* webpackChunkName: "demo" */ '../components/pages/Transactions.vue')
      },
    ]
  },
  
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

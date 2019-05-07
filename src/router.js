import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    // 首页
    {
      path: '/home',
      component: Home,
      children:[
        // 产品列表
        {
          path:'/home',
          name:'proList',
          meta:{index:0},
          component:() => import('./components/proList.vue'),
        }
      ]
    },
    // 绑定账号
    {
      path:'/',
      name:'binding',
      component: () => import('./views/Binding.vue')
    },
    // 订单列表
    {
      path:'/orderList',
      name:'orderList',
      meta:{index:1},
      component: () => import('./views/orderList.vue')
    },
    // 订单详情
    {
      path:'/orderDetails',
      name:'orderDetails',
      meta:{index:2},
      component: () => import('./views/orderDetails.vue')
    },
    // 安装上传图片
    {
      path:'/installUploader',
      name:'installUploader',
      meta:{index:3},
      component: () => import('./views/installUploader.vue')
    },
    // 维修上传图片
    {
      path:'/repairUploader',
      name:'repairUploader',
      meta:{index:3},
      component: () => import('./views/repairUploader.vue')
    },
    // 安装完成表单
    {
      path:'/installForm',
      name:'installForm',
      meta:{index:4},
      component: () => import('./views/installForm.vue')
    },
    // 未安装完成表单
    {
      path:'/noFinish',
      name:'noFinish',
      meta:{index:4},
      component: () => import('./views/noFinish.vue')
    }
  ]
})

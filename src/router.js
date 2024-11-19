import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Setting from './views/Setting.vue';
import Chatting from './views/Chatting.vue';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  // mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    },
    {
      path: '/chatting',
      name: 'chatting',
      component: Chatting
    },
    {
      path: '*',
      redirect: '/' // 路由錯誤自動導向到跟目錄
    }
    // {
    //   path: '/login',
    //   name: 'login',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    // },
  ]
});

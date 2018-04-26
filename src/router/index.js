import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../components/Home.vue'),
      meta: {keepAlive: true, title: '首页'}
    },
    {
      path: '/login',
      name: 'login',
      component: () => ('../components/Login.vue'),
      meta: {title: '登录页'}
    }
  ]
})

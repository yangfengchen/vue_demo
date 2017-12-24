import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex/store'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Error404 from '@/components/error/404'
import Index from '@/components/Index'
import Menu from '@/components/Menu'
Vue.use(Router)

const router = new Router({
  mode:'history',
  base:__dirname,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:'/index',
    	name:'首页',
    	meta:{
    		requireAuth:true
    	},
    	component:Index
    },
    {
    	path:'/login',
    	name:'登录',
    	component:Login
    },
    {
        path:'/menu',
        component:Menu
    },
    {
    	path:'*',
    	component:Error404
    }
  ]
});

export default router;

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
        if (store.state.token) {  // 通过vuex state获取当前的token是否存在
            next();
        }else {
            next({
                path: '/login',
                query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
            })
        }
    }
    else {
        next();
    }
});

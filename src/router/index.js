import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex/store'

Vue.use(Router)

const router = new Router({
  mode:'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: resolve => require(["../components/welcome.vue"],resolve)
    },
    {
    	path:'/index',
    	name:'首页',
    	meta:{
            title:"首页",
    		requireAuth:true
    	},
    	component: resolve => require(["../components/Index.vue"],resolve)
    },
    {
    	path:'/login',
    	name:'登录',
        meta:{
            title:"登录"
        },
    	component:resolve => require(["../components/Login.vue"],resolve)
    },
    {
        path:'/menu',
        component:resolve => require(["../components/Menu.vue"],resolve)
    },
    {
        path:'/goods',
        meta:{
            title:"商品列表"
        },
        component:resolve => require(["../yuyepage/Goods.vue"],resolve)
    },
    {
        path:"/goodDetail",
        meta:{
            title:"商品详情"
        },
        component:resolve => require(["../yuyepage/GoodDetail.vue"],resolve)
    },
    {
    	path:'*',
        meta:{
            title:"错误页面"
        },
    	component:resolve => require(["../components/error/404.vue"],resolve)
    }
  ]
});

export default router;

router.beforeEach((to, from, next) => {
    if(store.state.filterPath.has(to.path)){
        store.state.hide_tabbar = true;
    }else{
        store.state.hide_tabbar = false;
    }
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

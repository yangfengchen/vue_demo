// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuex from 'vuex'
import store from './vuex/store'
import MintUI from 'mint-ui'
import router from './router'
import 'mint-ui/lib/style.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.use(MintUI)
//技巧 同时 use 多个插件 被依赖的插件应放在偏后方
Vue.use(VueAxios, axios, vuex);
Vue.use(require('vue-wechat-title'));

Vue.prototype.$ajax = axios;

document.addEventListener('DOMContentLoaded', function() {
  if (window.FastClick) window.FastClick.attach(document.body);
}, false);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
	hide_tabbar:true
}
state.filterPath = new Set();
state.filterPath.add("/");
state.filterPath.add("/login");

state.httpClient = 'http://127.0.0.1:8080/';

export default new Vuex.Store({
    state
})
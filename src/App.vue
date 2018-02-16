<template>
  <div id="app">
	<router-view  v-wechat-title="$route.meta.title"></router-view>
	<div :class="{'hide_tabbar':this.$store.state.hide_tabbar}">
		<div class="nav">
			<mt-tabbar v-model="selected" fixed>
			  <mt-tab-item id="index" @click="toPage(this)">
			    首页
			  </mt-tab-item>
			  <mt-tab-item id="goods" @click="toPage(this)">
			    分类
			  </mt-tab-item>
			  <mt-tab-item id="userInfo" @click="toPage(this)">
			    发现
			  </mt-tab-item>
			</mt-tabbar>
		</div>
	</div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
  	return{
  		selected: 'index'
  	}
  },
  methods:{

  },
  mounted() {

  },
  watch: {
    // 监听 $route 为店内页设置不同的过渡效果
    "$route" (to, from) {
    	if(this.$store.state.filterPath.has(to.path)){
    		this.hide = true;
    	}else{
    		this.hide = false;
    	}
  	},
  	selected(val){
  		this.$router.push({
            path: val
        });
  	}
  }
}
</script>

<style>
.hide_tabbar{
	display: none;
}
</style>

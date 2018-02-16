<template>
	<div id="Login">
		登录
		<input v-model='userName' placeholder="用户名">
		<input v-model="passWord" placeholder="密码">
		<button v-on:click="login">登录</button>
	</div>
</template>
<script type="text/javascript">
	import store from '../vuex/store'
	export default {
	  name: 'Login',
	  data(){
	  	return {
	  		userName:'',
	  		passWord:''
	  	}
	  },
	  mounted(){

	  },
	  methods:{
	  	login:function(event){
	  		store.state.userName = this.userName;
	  		store.state.token = "123";
	  		store.state.passWord = this.passWord;
	  		let redirect = decodeURIComponent(this.$route.query.redirect || '/index');
	  		if(redirect == ""){
	  			redirect = "/index";
	  		}
	  		this.$router.push({
            	path: redirect
          	});
	  	}
	  }
	}
</script>
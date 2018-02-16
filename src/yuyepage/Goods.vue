<template>
	<div id="Goods" >
		<mt-cell title="标题文字"></mt-cell>
		<div v-infinite-scroll="loadMore"
  				infinite-scroll-disabled="loading"
  				infinite-scroll-distance="10"
  				>
			<div class="row" v-for="(good, index) in goodDatas"  
  				v-bind:item="good"  
  				v-bind:index="index">
				<div class="col-xs-4 col-sm-4">{{index}}</div>
				<div class="col-xs-4 col-sm-4">{{good.id}}</div>
				<div class="col-xs-4 col-sm-4">{{good.price}}</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'Goods',
		data(){
			 /*return {
		      active: 'goodList'
		    };*/
		    return{
		    	loading:true,
		    	goodDatas:{}
		    }
		},
		mounted(){
			var $self = this;
			this.axios.get('/demo_data/goods.json', {
			    params: {
			      
			    }
			  })
			  .then(function (response) {
			    console.log(response.data,"xx");
			    console.log($self,"x1");
			    $self.goodDatas = eval(response.data);
			    console.log($self.goodDatas);
			    
			  })
			  .catch(function (response) {
			    console.log(response);
			  });
		},
		methods:{
			loadMore(){
				for(let i = 0 ;i < 10 ;i++){
					
				}
			}
		}
	}
</script>
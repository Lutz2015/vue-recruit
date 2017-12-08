<template>
  <div class="nav-list">
    <div class="n-menu">
    		<ul class="n-menu-list">
    			<li v-for="(val,index) in nav.data"  @click="toggleNav(index)"><router-link :to= "val.path" >{{val.name}}</router-link></li>
    		</ul>
    		<a href="###"><span class="c-note">我的简历</span></a>
    </div>
    <div class="n-content">
         <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
	name: 'secondNav',
	data(){
		return {
			nav:{
					active:0,
					data:[
						{
								path:"/nav/careerList",
								name:"职业"
						},
						{
								path:"/nav/enterprise",
								name:"企业"
						},
						{
								path:"/nav/release",
								name:"我发布的"
						}
					]
				
				
			}
		}
	},
	methods:{
		toggleNav:function(index){
			this.nav.active=index;
		}
	}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.n-menu{
	position: relative;
	background:#ffffff;
	box-shadow:0 0 4px 0 rgba(0,0,0,0.50);
	min-width:1280px;
	/* height:60px; */
	margin: 15px auto 0;
	/* padding: 18px 20px; */
	text-align: center;
	font-size:18px;
}
.n-menu ul>li{
	display: inline;
	padding: 18px 40px;
}

.n-menu ul>li a{
	color:#000000;
}
.n-menu ul>li a:link,.n-menu ul>li a:visited{
	display: inline-block;
	height: 60px;
	min-width: 60px;
	line-height: 60px;
	border-bottom: 2px solid #fff;
	box-sizing: border-box;
}
.n-menu ul>li a:hover,.n-menu ul>li li a:active,.n-menu ul>li li a.active{
	display: inline-block;
	height: 60px;
	min-width: 60px;
	line-height: 60px;
	border-bottom: 2px solid #009d01;
	box-sizing: border-box;
	color: #009d01;
}
.n-menu ul>li a.router-link-active{
	  display: inline-block;
    line-height: 60px;
    border-bottom: 2px solid #009d01;
    box-sizing: border-box;
    color: #009d01;
}
.n-menu>a{
	position: absolute;
		color:#515151;
	top: 18px;
	right: 20px;
}
.n-content{
	width: 100%;
	height: 100%;
}
</style>

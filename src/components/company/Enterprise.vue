<template>
  <div class="career-list">
	  <div class="c-menu">
    		<ul class="c-menu-list">
    			<li><router-link :to="{path:'/'}" tag="a">职业</router-link></li>
					<li><router-link :to="{path:'/enterprise'}" tag="a" class="active">企业</router-link></li>
					<li><router-link :to="{path:'/mypost'}" tag="a" >我发布的</router-link></li>
    		</ul>
    		<a href="###"><span class="c-note">我的简历</span></a>
    </div>
    <div class="c-body">
    	<div class="c-left">
    		<div class="c-left-bar">
    			<div class="c-bar-head">{{ positionType.title }}</div>
    			<div class="c-bar-content">
    				<ul class="position-list">
    					<li v-for="position in positionType.data"><span>{{position.name}}</span></li>
    				</ul>
    			</div>
    		</div>
    		<div class="c-left-bar">
    			<div class="c-bar-head"><em class="fr">{{placeMenu.allCity}}</em>{{placeMenu.title}}</div>
    			<div class="c-bar-content">
    				<div class="place-menu">
    						<ul class="place-menu-list">
    							  <li v-for="(city,index) in placeMenu.citys" @click="toggle(index)"><a href="javascript:void(0);" :class="{active:placeMenu.active==index}">{{city.name}}</a></li>
    						</ul>
    				</div>
    				<div class="place-tab" v-for="(city,index) in placeMenu.citys" :class="{show:placeMenu.show==index}">
	    				<ul class="place-list">
	    						<li v-for="(area,i) in city.area"><label class="fix-radio"><input type="radio" :name="placeMenu.radioName+index" :checked="i==0"><span>{{area}}</span></label></li>
	    				</ul>
    				</div>
    			</div>
    		</div>
    		<div class="c-left-bar">
    			<div class="c-bar-head">{{workTime.title}}</div>
    			<div class="c-bar-content">
    				<ul class="time-list">
    					<li v-for="(time,index) in workTime.timeList"><label class="fix-radio"><input type="radio" name="radios2" :checked='index==0'><span>{{time}}</span></label></li>
    				</ul>
    			</div>
    		</div>
    	</div>
    	<div class="c-right">
    		<div class="search-bar">
    			<i class="icon-close" :class="{showClose:isShow}" @click="clearValue(event)" @mouseenter="showClose"></i>
    			<input type="text" v-model="search" placeholder="搜索职位或公司" class="input-ctxt" @mouseenter="showClose" @mouseout="hideClose">
    			<input type="button" value="搜索" class="input-cbtn">
    		</div>
    		<div class="right-menu mt-20 margin">
	    		<ul class="right-menu-list">
	    			<li v-for="(item,index) in rightMenu.data" @click="toggleMenu(index)"><a href="javascript:void(0)" :class="{active:rightMenu.active==index}">{{item}}</a></li>
	    		</ul>
	    		<router-link :to="{path:'/release'}"><span class="right-note">{{rightMenu.publicJob}}</span></router-link>
	    	</div>
	    	<div class="position-tap mt-20" v-for="(item,index) in rightMenu.itemDetails" :class="{show:rightMenu.show==index}">
	    		<div class="rec">
	    			<div class="rec-item-e mt2" :class="{mt2:i%2}" v-for="(itemDetail,i) in item.rec">
	    					<div class="rec-left">
                                <div class="rec-img"><img :src="itemDetail.companyImg"></div>
	    						<div class="rec-info">
	    							<div><h3>{{itemDetail.companyName}}</h3><h4>{{itemDetail.dictum}}</h4></div>
	    							<div class="info">
                                        <span class="address">{{itemDetail.address}}</span>
                                        <span class="num">{{itemDetail.num}}</span>
                                        <span class="position">{{itemDetail.position}}<span>职位正在招聘</span></span>
                                    </div>
	    						</div>
	    					</div>
	    					<div class="rec-right-e">
	    						<a href="###"><span>公司主页</span></a>
	    					</div>
	    			</div>
	    			<p class="text-center"><a href="###" class="more-info">浏览更多</a></p>
	    		</div>
	    	</div>
    	</div>
    </div>
  </div>
</template>

<script>
	export default {
	  name: 'Enterprise',
	  data () {
	    return {
	    	search:'',
	    	isShow:false,
	      positionType:{
	      	title:'优质企业',
	      	data:[
	      		{name:"小米科技",id:1},
	      		{name:"网易",id:1},
	      		{name:"搜狗",id:1},
	      		{name:"风潮",id:1},
	      		{name:"永辉云创",id:1},
	      		{name:"今日头条",id:1},
	      		{name:"微软",id:1},
	      		{name:"摩拜",id:1}
	      	]
	      },
	      placeMenu:{
	      	radioName:'radio',
	      	title:'工作地点',
	      	allCity:'全部城市',
	      	active: 0,
	      	show:0,
	      	citys:[
	      		{name:"北京",id:1,area:['不限','黄埔区','卢湾区','徐家汇','长宁区','静安区','普陀区','闸北区','虹口区','杨浦区','闵行区','宝山区','嘉定区','浦东新区','金山区','青浦区','奉贤区','崇明区']},
	      		{name:"上海",id:1,area:['不限','黄埔区1','卢湾区','徐家汇','长宁区','静安区','普陀区','闸北区','虹口区','杨浦区','闵行区','宝山区','嘉定区','浦东新区','金山区','青浦区','奉贤区','崇明区']},
	      		{name:"深圳",id:1,area:['不限','黄埔区2','卢湾区','徐家汇','长宁区','静安区','普陀区','闸北区','虹口区','杨浦区','闵行区','宝山区','嘉定区','浦东新区','金山区','青浦区','奉贤区','崇明区']},
	      		{name:"杭州",id:1,area:['不限','黄埔区3','卢湾区','徐家汇','长宁区','静安区','普陀区','闸北区','虹口区','杨浦区','闵行区','宝山区','嘉定区','浦东新区','金山区','青浦区','奉贤区','崇明区']},
	      		{name:"其他城市",id:1,area:['不限','黄埔区4','卢湾区','徐家汇','长宁区','静安区','普陀区','闸北区','虹口区','杨浦区','闵行区','宝山区','嘉定区','浦东新区','金山区','青浦区','奉贤区','崇明区']},
	      	]
	      },
	      workTime:{
	      	title:'工作年限',
	      	timeList:['应往届生','1年以下','1-3年','3-5年','5年以上']
	      },
	      rightMenu:{
	      	active:0,
	      	show:0,
	      	data:['推荐','最新'],
	      	publicJob:'发布职位',
	      	itemDetails:[
		      	{
		      		name:'推荐',
		      		rec:[
                        {address:'上海市',num:'20-50人',position:'3',companyName:'公司名公司名',dictum:"公司名言，标语等。都写在这里，最多一行啊",companyImg:require('../../components/career/images/item1.png')},
                        {address:'上海市',num:'20-50人',position:'3',companyName:'公司名公司名',dictum:"公司名言，标语等。都写在这里，最多一行啊",companyImg:require('../../components/career/images/item1.png')},
                        {address:'上海市',num:'20-50人',position:'3',companyName:'公司名公司名',dictum:"公司名言，标语等。都写在这里，最多一行啊",companyImg:require('../../components/career/images/item1.png')},
                        {address:'上海市',num:'20-50人',position:'3',companyName:'公司名公司名',dictum:"公司名言，标语等。都写在这里，最多一行啊",companyImg:require('../../components/career/images/item1.png')}
			      	]
		      	},
		      	{
		      		name:'最新',
		      		rec:[
                        {address:'上海市',num:'20-50人',position:'2',companyName:'公司名公司名',dictum:"公司名言，标语等。都写在这里，最多一行啊",companyImg:require('../../components/career/images/item1.png')},
                        {address:'上海市',num:'20-50人',position:'1',companyName:'公司名公司名',dictum:"公司名言，标语等。都写在这里，最多一行啊",companyImg:require('../../components/career/images/item1.png')},
                        {address:'上海市',num:'20-50人',position:'3',companyName:'公司名公司名',dictum:"公司名言，标语等。都写在这里，最多一行啊",companyImg:require('../../components/career/images/item1.png')},
                        {address:'上海市',num:'20-50人',position:'3',companyName:'公司名公司名',dictum:"公司名言，标语等。都写在这里，最多一行啊",companyImg:require('../../components/career/images/item1.png')}
			      	]
		      	}
	      	]
	      }
	    }
	  },
	  methods:{
	  	toggle(index){
	  		this.placeMenu.active=index;
	  		this.placeMenu.show=index;
	  	},
	  	toggleMenu(index){
	  		this.rightMenu.active=index;
	  		this.rightMenu.show=index;
	  	},
	  	showClose () {
	  		this.isShow=true;
	  	},
	  	hideClose () {
	  		this.isShow=false;
	  	},
	  	clearValue (event) {
	  		this.search='';
	  	}
	  }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../../components/company/css/enterprise.css" scoped>
    /* @import "../../components/company/css/enterprise.css"; */
</style>
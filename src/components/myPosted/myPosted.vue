<template>
  <div class="my-post">
    <div class="c-menu">
    		<ul class="c-menu-list">
    			<li><router-link :to="{path:'/'}" tag="a">职业</router-link></li>
					<li><router-link :to="{path:'/enterprise'}" tag="a">企业</router-link></li>
					<li><router-link :to="{path:'/mypost'}" tag="a" class="active">我发布的</router-link></li>
    		</ul>
    		<a href="###"><span class="c-note">我的简历</span></a>
    </div>
    <div class="c-body">
    	<div class="c-left">
    		<div class="c-left-bar">
    			<div class="c-bar-head">{{experience.title}}</div>
    			<div class="c-bar-content">
    				<ul class="time-list2">
    					<li v-for="(exp,index) in experience.data"><label class="fix-radio"><input type="radio" name="radios1" :checked='index==0'><span>{{exp}}</span></label></li>
    				</ul>
    			</div>
    		</div>
    		<div class="c-left-bar">
    			<div class="c-bar-head">{{deliver.title}}</div>
    			<div class="c-bar-content">
    				<ul class="time-list2">
    					<li v-for="(deli,index) in deliver.data"><label class="fix-radio"><input type="radio" name="radios2" :checked='index==0'><span>{{deli}}</span></label></li>
    				</ul>
    			</div>
    		</div>
    		<div class="c-left-bar">
    			<div class="c-bar-head">{{education.title}}</div>
    			<div class="c-bar-content">
    				<ul class="time-list2">
    					<li v-for="(edu,index) in education.data"><label class="fix-radio"><input type="radio" name="radios3" :checked='index==0'><span>{{edu}}</span></label></li>
    				</ul>
    			</div>
    		</div>
    	</div>
    	<div class="c-right">
    		<div class="search-bar1">
    			<i class="icon-close1" :class="{showClose:isShow}" @click="clearValue(event)" @mouseenter="showClose"></i>
    			<input type="text" value="" placeholder="搜索简历" class="input-ctxt1" v-model="search" @mouseenter="showClose" @mouseout="hideClose">
    			<select class="input-sel">
    				<option v-for="option in selectData">{{option.value}}</option>
    			</select>
    			<input type="button" value="搜索" class="input-cbtn1">
    		</div>
    		<div class="right-menu mt-20">
	    		<ul class="right-menu-list">
	    			<li v-for="(item,index) in resume.data" @click="getResume(index)"><a href="javascript:void(0)" :class="{active:resume.active==index}">{{item}}</a></li>
	    		</ul>
	    	</div>
	    	<div class="position-tap mt-20 show">
	    		<div class="rec">
	    			<div class="resume-item mb-10" v-for="res in resume.itemDetails">
	    					<div class="res-img"><img :src="res.photo"></div>
	    					<div class="res-info">
    							<h3>{{res.name}}<em>{{res.introduce}}</em></h3>
    							<p><span>{{res.role}}</span><span>{{res.experience}}</span><span>{{res.education}}</span><span>{{res.deliver}}</span></p>
	    					</div>
	    					<router-link :to="{path:'/resumedetail'}"><span class="resume-detail">{{resume.resumeDetail}}</span></router-link>
	    			</div>
	    			<p><a href="###" class="more-info1">浏览更多</a></p>
	    		</div>
	    	</div>
    	</div>
    </div>
  </div>
</template>

<script>
	//require('../../components/career/js/career.js');
	//import '../../components/career/js/career.js';
	export default {
	  name: 'myPost',
	  data () {
	    return {
	    	search:'',
	    	isShow:false,
	      experience:{
	      	title:'工作经验',
	      	data:['不限','应往届生','1年以下','1-3年','3-5年','5年以上']
	      },
	      deliver:{
	      	title:'投递职位',
	      	data:['不限','数据分析','数据挖掘','数据产品经理']
	      },
	      education:{
	      	title:'最高学历',
	      	data:['不限','大专','本科','硕士','博士','博士以上']
	      },
	      resume:{
	      	active:0,
	      	data:['最新','近一周','近一月','近三月','全部'],
	      	resumeDetail:'简历详情',
	      	itemDetails:[
		      	{name:'投递人姓名',introduce:'投递人简介，投递人简介，投递人简介',role:'应届生',experience:'工作经验1-2年',education:'最高学历：硕士',deliver:'投递职位：数据挖掘',photo:require('../../components/career/images/item1.png')},
	      		{name:'投递人姓名',introduce:'投递人简介，投递人简介，投递人简介',role:'应届生',experience:'工作经验1-2年',education:'最高学历：硕士',deliver:'投递职位：数据挖掘',photo:require('../../components/career/images/item1.png')},
	      		{name:'投递人姓名',introduce:'投递人简介，投递人简介，投递人简介',role:'应届生',experience:'工作经验1-2年',education:'最高学历：硕士',deliver:'投递职位：数据挖掘',photo:require('../../components/career/images/item1.png')},
	      		{name:'投递人姓名',introduce:'投递人简介，投递人简介，投递人简介',role:'应届生',experience:'工作经验1-2年',education:'最高学历：硕士',deliver:'投递职位：数据挖掘',photo:require('../../components/career/images/item1.png')}
	      	]
	      },
	      selectData:[
	      	{value:'已发布的',id:'2'},
	      	{value:'未发布的',id:'2'}
	      ]
	    }
	  },
	  methods:{
	  	getResume(index){
	  		this.resume.active=index;
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
<style scoped>
	@import '../../components/myPosted/css/mypost.css';
</style>

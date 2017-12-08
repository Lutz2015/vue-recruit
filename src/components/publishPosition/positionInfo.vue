<template>
	<div id="content">
		<p class="contentTitle">职位信息</p>
		<div class="item post clearfix">
			<div class="leftTitle">
				<span class="must">招聘岗位</span>
			</div>
			<div class="rightContent">
				<ul class="clearfix">
					<li v-for="(position,index) in recruitPost.data" :data-id="position.postId" @click="toggle(index)"><span :class="{active:recruitPost.active==index}">{{position.name}}</span></li>
				</ul>
			</div>
		</div>
		<div class="item clearfix">
			<div class="leftTitle">
				<span class="must">归属部门</span>
			</div>
			<div class="rightContent">
				<input type="text" name="department" id="department" placeholder="请填写岗位所归属的部门"/>
			</div>
		</div>
		<div class="item clearfix">
			<div class="leftTitle">
				<span class="must">工作地点</span>
			</div>
			<div class="rightContent">
				<div><input type="text" name="address" id="address" @click="showPlace"/></div>
				<input type="text" name="detaileAddress" id="detaileAddress" placeholder="填写详细的工作地址"/>
				<div :class="{showPlace:isShow}"   class="placeBox">
					<div class="">
						<ul>
							<li>1</li>
							<li>2</li>
							<li>3</li>
						</ul>
					</div>
					<div >
						<ul>
							<li><input style="display: none;" type="radio" name="1" id="01" value="" /><label  for="01">1312312</label></li>
							<li><input style="display: none;" type="radio" name="1" id="02" value="" /><label for="02">1312312</label></li>
						</ul>
						<ul>
							<li><input style="display: none;" type="radio" name="2" id="03" value="" /><label for="03">1312312</label></li>
							<li><input style="display: none;" type="radio" name="2" id="04" value="" /><label for="04">1312312</label></li>
						</ul>
						<ul>
							<li><input style="display: none;" type="radio" name="3" id="05" value="" /><label for="05">1312312</label></li>
							<li><input style="display: none;" type="radio" name="3" id="06" value="" /><label for="06">1312312</label></li>
						</ul>
					</div>
					
				</div>
			</div>
		</div>
		<div class="item clearfix">
			<div class="leftTitle">
				<span class="must">经验要求</span>
			</div>
			<div class="rightContent">
				<select name="experience" id="experience">
					<option v-for="dates in experienceRequirement.data">{{dates.Date}}</option>
				</select>
			</div>
		</div>
		<div class="item clearfix">
			<div class="leftTitle">
				<span class="must">学历要求</span>
			</div>
			<div class="rightContent">
				<select name="education" id="education">
					<option v-for="educationals in educationalRequirements.data" value="">{{educationals.education}}</option>
				</select>
			</div>
		</div>
		<div class="item positionType clearfix">
			<div class="leftTitle">
				<span class="must">职位类型</span>
			</div>
			<div class="rightContent">
				<ul class="clearfix">
					<li v-for="(types,index) in positionTypes.data" @click="toggles(index)"><span :class="{active:positionTypes.active==index}">{{types.value}}</span></li>
				</ul>
			</div>
		</div>
		<div class="item clearfix">
			<div class="leftTitle">
				<span class="must">汇报对象</span>
			</div>
			<div class="rightContent">
				<input type="text" name="superior" id="superior" placeholder="请填写岗位上级人员"/>
			</div>
		</div>
		<div class="item clearfix">
			<div class="leftTitle">
				<span>下属人数</span>
			</div>
			<div class="rightContent">
				<input type="text" name="subordinate" id="subordinate" placeholder="请填写岗位下级人员"/>
			</div>
		</div>
		<div class="item clearfix">
			<div class="leftTitle">
				<span class="must">招聘有效期</span>
			</div>
			<div class="rightContent">
				<div id="expiryDateF">
					<input type="date" name="expiryDate" id="expiryDate"/>
					<span class="expiryDatePrompt">仅限职位发布后的一个月至三个月</span>
				</div>
				
			</div>
		</div>
		<div class="jump">
			<input type="button" name="nextStep" id="nextStep" value="下一步" @click="nextStep"/>
			<input type="button" name="previousStep" id="previousStep" value="上一步" />
			<p class="contentFooter">如认证有任何问题，请发送邮件至info@itongji.cn</p>
		</div>
		
	</div>
	
</template>

<script>
	export default{
		name:'positionInfo',
		data(){
			return{
				isShow:true,
				recruitPost:{
			      	title:'招聘岗位',
			      	active:0,
			      	show:0,
			      	data:[
			      		{name:"数据分析师",postId:'1'},
			      		{name:"数据运营",postId:'2'},
			      		{name:"数据产品经理",postId:'3'},
			      		{name:"数据挖掘",postId:'4'},
			      		{name:"ETL工程师",postId:'5'},
			      		{name:"可视化工程师",postId:'6'},
			      		{name:"数据运维",postId:'7'},
			      		{name:"数据架构师",postId:'8'}
			      	]
			   },
			   experienceRequirement:{
			   		title:'经验要求',
			   		data:[
			   			{Date:'不限',experienceId:'0'},
			   			{Date:'1年以上',experienceId:'1'},
			   			{Date:'1-3年',experienceId:'2'},
			   			{Date:'3-5年',experienceId:'3'},
			   			{Date:'5年以上',experienceId:'4'}
			   		]
			   },
			   educationalRequirements:{
			   		title:'学历要求',
			   		data:[
			   			{education:'不限',educationId:'0'},
			   			{education:'大专以下',educationId:'1'},
			   			{education:'本科',educationId:'2'},
			   			{education:'硕士',educationId:'3'}
			   		]
			   },
			   positionTypes:{
			   		title:'职位类型',
			   		active:0,
			      	show:0,
			   		data:[
			   			{value:'全职',positionTypeId:'0'},
			   			{value:'兼职',positionTypeId:'1'},
			   			{value:'实习',positionTypeId:'2'}
			   		]
			   }
			}
		},
		methods:{
			nextStep: function (){
				this.$router.push({
					path:'/Welfare'
				})
			},
			toggle(index){
		  		this.recruitPost.active=index;
//		  		this.recruitPost.show=index;
	  		},
	  		toggles(index){
		  		this.positionTypes.active=index;
	  		},
	  		showPlace(){
	  			this.isShow = !this.isShow;
	  		}
		}
	}
	
	
</script>

<style scoped>
	@import url("./css/positionInfo.css");
</style>
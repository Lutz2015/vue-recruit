<template>
	<div id="content">
		<p class="contentTitle">职位要求</p>
		<div class="item clearfix">
			<div class="leftTitle">
				<span class="must">年龄要求</span>
			</div>
			<div class="item1 rightContent">
				<input type="text"/>
				<span>&nbsp; &mdash; &nbsp;</span>
				<input type="text" />
			</div>
		</div>
		
		<div class="item clearfix">
			<div class="leftTitle">
				<span>性别要求</span>
			</div>
			<div class="rightContent">
				<form id="genderRequirements" class="radioStyle">
					<label>
						<input type="radio" name="sex" id="unlimited" value="" />
						<span></span>
						不限
					</label>
					<label>
						<input type="radio" name="sex" id="male" value="" />
						<span></span>
						男
					</label>
					<label>
						<input type="radio" name="sex" id="female" value="" />
						<span></span>
						女
					</label>
					<span>该条件不公开显示，只用于搜索简历</span>
				</form>
			</div>
		</div>
		
		<div class="item clearfix">
			<div class="leftTitle">
				<span>专业要求</span>
			</div>
			<div class="rightContent">
				<input class="majorRequirements" type="text" placeholder="不限"/>
			</div>
		</div>
		
		<div class="item clearfix">
			<div class="leftTitle">
				<span class="must">工作年限</span>
			</div>
			<div class="rightContent">
				<input class="workingLife" type="text" placeholder="不限"/> 年以上
			</div>
		</div>
		
		<div class="item clearfix">
			<div class="leftTitle">
				<span>是否统招全日制</span>
			</div>
			<div class="rightContent">
				<form id="full-time" class="radioStyle">
					<label>
						<input type="radio" name="welfare" id="isFullTime" value="" />
						<span></span>
						是
					</label>
					<label>
						<input type="radio" name="welfare" id="unlimited" value="" />
						<span></span>
						不限
					</label>
				</form>
			</div>
		</div>
		
		<div class="item liList clearfix">
			<div class="leftTitle">
				<span>语言要求</span>
			</div>
			<div class="rightContent">
				<ul class="clearfix">
					<li v-for="languages in languageChoice.data">{{languages.language}}</li>
				</ul>
			</div>
		</div>
		
		<div class="jump">
			<input type="button" name="nextStep" id="nextStep" value="下一步" @click="nextStep"/>
			<input type="button" name="previousStep" id="previousStep" value="上一步" @click="previousStep"/>
			<p class="contentFooter">如认证有任何问题，请发送邮件至info@itongji.cn</p>
		</div>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				languageChoice:{
					title:'语言选择',
					data:[
						{language:'英语',languageId:'1'},
						{language:'日语',languageId:'2'},
						{language:'法语',languageId:'3'},
						{language:'普通话',languageId:'4'},
						{language:'粤语',languageId:'5'},
						{language:'其他',languageId:'6'}
					]
				}
			}
		},
		methods:{
			nextStep: function (){
				this.$router.push({
					path:'/JobDescription'
				})
			},
			previousStep: function(){
				this.$router.push({
					path:'/Welfare'
				})
			}
		}
	}
</script>

<style scoped>
	@import url("./css/jobRequirements.css");
</style>
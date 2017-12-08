<template>
	<div id="content">
		<p class="contentTitle">职责描述</p>
		<div class="clearfix">
			<div class="leftTitle item">
				<span class="must">职位诱惑</span>
			</div>
			<div class="rightContent">
				<input type="text" name="jobTemptation" id="jobTemptation" value="" placeholder="请输入公司的优渥待遇，可以更好的吸引求职者哦"/>
			</div>
		</div>
		
		<div class="clearfix">
			<div class="leftTitle item">
				<span class="must">职位描述</span>
			</div>
			<div class="rightContent">
				<textarea name="" id="jobDescription" rows="40" cols="" placeholder="请具体描述工作职责，建议不低于60字"></textarea>
			</div>
		</div>
		<div class="jump">
			<input type="button" name="nextStep" id="nextStep" value="确认发布" @click="nextStep"/>
			<input type="button" name="previousStep" id="previousStep" value="上一步" @click="previousStep"/>
			<p class="contentFooter">如认证有任何问题，请发送邮件至info@itongji.cn</p>
		</div>
	</div>
</template>

<script>
	export default{
		methods:{
			nextStep: function (){
				this.$router.push({
					path:'/JobDescription'
				})
			},
			previousStep: function(){
				this.$router.push({
					path:'/JobRequirements'
				})
			}
		}
	}
</script>

<style scoped>
	@import url("./css/jobDescription.css");
</style>
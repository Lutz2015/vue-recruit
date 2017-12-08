<template>
	<div id="content">
		<p class="contentTitle">福利信息</p>
		<div class="item clearfix">
			<div class="leftTitle item1">
				<span class="must">税前工资</span>
			</div>
			<div class="rightContent">
				<select name="minWages" id="minWages">
					<option value=""></option>
					<option value="">1</option>
					<option value="">2</option>
					<option value="">3</option>
					<option value="">4</option>
					<option value="">5</option>
					<option value="">6</option>
					<option value="">7</option>
					<option value="">8</option>
					<option value="">9</option>
					<option value="">10</option>
					<option value="">11</option>
					<option value="">12</option>
					<option value="">13</option>
					<option value="">14</option>
					<option value="">15</option>
					<option value="">16</option>
					<option value="">17</option>
					<option value="">18</option>
					<option value="">19</option>
					<option value="">20</option>
					<option value="">21</option>
					<option value="">22</option>
					<option value="">23</option>
					<option value="">24</option>
					<option value="">25</option>
					<option value="">26</option>
					<option value="">27</option>
					<option value="">28</option>
					<option value="">29</option>
					<option value="">30</option>
				</select>
				<span>&nbsp;K &mdash; </span>
				<select name="maxWages" id="maxWages">
					<option value=""></option>
					<option value="">1</option>
					<option value="">2</option>
					<option value="">3</option>
					<option value="">4</option>
					<option value="">5</option>
					<option value="">6</option>
					<option value="">7</option>
					<option value="">8</option>
					<option value="">9</option>
					<option value="">10</option>
					<option value="">11</option>
					<option value="">12</option>
					<option value="">13</option>
					<option value="">14</option>
					<option value="">15</option>
					<option value="">16</option>
					<option value="">17</option>
					<option value="">18</option>
					<option value="">19</option>
					<option value="">20</option>
					<option value="">21</option>
					<option value="">22</option>
					<option value="">23</option>
					<option value="">24</option>
					<option value="">25</option>
					<option value="">26</option>
					<option value="">27</option>
					<option value="">28</option>
					<option value="">29</option>
					<option value="">30</option>
				</select>
				<span>&nbsp;K</span>
				<p class="wagesPrompt">区间小于<span> 30 </span>万元</p>
			</div>
			
		</div>
		
		<div class="item liList clearfix">
			<div class="leftTitle">
				<span class="must">薪资构成</span>
			</div>
			<div class="rightContent">
				<ul class="clearfix">
					<li>基本薪资</li>
					<li>奖金/提成</li>
					<li>期权</li>
					<li>其他</li>
				</ul>
			</div>
		</div>
		<div class="item liList clearfix">
			<div class="leftTitle">
				<span>社保福利</span>
			</div>
			<div class="rightContent">
				<ul class="clearfix">
					<li>国家标准</li>
					<li>商业保险</li>
					<li>其他</li>
				</ul>
			</div>
		</div>
		<div class="item liList clearfix">
			<div class="leftTitle">
				<span>居住福利</span>
			</div>
			<div class="rightContent">
				<ul class="clearfix">
					<li>住房补贴</li>
					<li>公司安排</li>
					<li>公积金</li>
					<li>其他</li>
				</ul>
			</div>
		</div>
		<div class="item liList clearfix">
			<div class="leftTitle">
				<span>年假福利</span>
			</div>
			<div class="rightContent">
				<ul class="clearfix">
					<li>国家标准</li>
					<li>其他</li>
				</ul>
			</div>
		</div>
		<div class="item clearfix">
			<div class="leftTitle">
				<span>通讯福利</span>
			</div>
			<div class="rightContent">
				<form id="communicationWelfare" class="radioStyle">
					<label>
						<input type="radio" name="welfare" id="uncertain" value="" />
						<span></span>
						不确定
					</label>
					<label>
						<input type="radio" name="welfare" id="noSubsidies" value="" />
						<span></span>
						无补助
					</label>
					<label>
						<input type="radio" name="welfare" id="subsidies" value="" />
						<span></span>
						有补助
					</label>
					<label>
						<input type="radio" name="welfare" id="reimbursement" value="" />
						<span></span>
						实时报销
					</label>
					<label>
						<input type="radio" name="welfare" id="other" value="" />
						<span></span>
						其他
					</label>
				</form>
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
		
		methods:{
			nextStep: function (){
				this.$router.push({
					path:'/JobRequirements'
				})
			},
			previousStep: function(){
				this.$router.push({
					path:'/PositionInfo'
				})
			}
		}
	}
</script>

<style scoped>
	@import url("./css/welfare.css");
</style>
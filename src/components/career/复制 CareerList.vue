<template>
  <div class="career-list">
    <div class="c-menu">
    		<ul class="c-menu-list">
    			<!--<li><a href="###" class="active">职业</a></li>
    			<li><a href="###">企业</a></li>
    			<li><a href="###">我发布的</a></li>-->
    			<li><router-link :to="{path:'/'}" tag="a" class="active">职业</router-link></li>
					<li><router-link :to="{path:'/'}" tag="a">企业</router-link></li>
					<li><router-link :to="{path:'/mypost'}" tag="a">我发布的</router-link></li>
    		</ul>
    		<a href="###"><span class="c-note">我的简历</span></a>
    </div>
    <div class="c-body">
    	<div class="c-left">
    		<div class="c-left-bar">
    			<div class="c-bar-head">职位类型</div>
    			<div class="c-bar-content">
    				<ul class="position-list">
    					<li><span>数据分析师</span></li>
    					<li><span>数据运营</span></li>
    					<li><span>数据产品经理</span></li>
    					<li><span>数据挖掘</span></li>
    					<li><span>ETL工程师</span></li>
    					<li><span>可视化工程师</span></li>
    					<li><span>数据运维</span></li>
    					<li><span>数据架构师</span></li>
    				</ul>
    			</div>
    		</div>
    		<div class="c-left-bar">
    			<div class="c-bar-head"><em class="fr">全部城市</em>工作地点</div>
    			<div class="c-bar-content">
    				<div class="place-menu">
    						<ul class="place-menu-list">
    								<li><a href="javascript:void(0);">北京</a></li>
    								<li><a href="javascript:void(0);" class="active">上海</a></li>
    								<li><a href="javascript:void(0);">深圳</a></li>
    								<li><a href="javascript:void(0);">杭州</a></li>
    								<li><a href="javascript:void(0);">其他城市</a></li>
    						</ul>
    				</div>
    				<div class="place-tab">
	    				<ul class="place-list">
	    						<li><label class="fix-radio"><input type="radio" name="radio1" checked><span>不限</span></label></li>
	    						<li><label class="fix-radio"><input type="radio" name="radio1"><span>黄埔区</span></label></li>
	    						<li><label class="fix-radio"><input type="radio" name="radio1"><span>卢湾区</span></label></li>
	    						<li><label class="fix-radio"><input type="radio" name="radio1"><span>徐家汇</span></label></li>
	    						<li><label class="fix-radio"><input type="radio" name="radio1"><span>长宁区</span></label></li>
	    						<li><label class="fix-radio"><input type="radio" name="radio1"><span>静安区</span></label></li>
	    						<li><label class="fix-radio"><input type="radio" name="radio1"><span>普陀区</span></label></li>
	    						<li><label class="fix-radio"><input type="radio" name="radio1"><span>闸北区</span></label></li>
	    						<li><label class="fix-radio"><input type="radio" name="radio1"><span>虹口区</span></label></li>
	    						<li><label class="fix-radio"><input type="radio" name="radio1"><span>杨浦区</span></label></li>
	    						<li><label class="fix-radio"><input type="radio" name="radio1"><span>闵行区</span></label></li>
	    						<li><label class="fix-radio"><input type="radio" name="radio1"><span>宝山区</span></label></li>
	    						<li><label class="fix-radio"><input type="radio" name="radio1"><span>嘉定区</span></label></li>
	    						<li><label class="fix-radio"><input type="radio" name="radio1"><span>浦东新区</span></label></li>
	    						<li><label class="fix-radio"><input type="radio" name="radio1"><span>金山区</span></label></li>
	    						<li><label class="fix-radio"><input type="radio" name="radio1"><span>青浦区</span></label></li>
	    						<li><label class="fix-radio"><input type="radio" name="radio1"><span>奉贤区</span></label></li>
	    						<li><label class="fix-radio"><input type="radio" name="radio1"><span>崇明区</span></label></li>
	    				</ul>
    				</div>
    			</div>
    		</div>
    		<div class="c-left-bar">
    			<div class="c-bar-head">工作年限</div>
    			<div class="c-bar-content">
    				<ul class="time-list">
    					<li><label class="fix-radio"><input type="radio" name="radio2" checked><span>应往届生</span></label></li>
    					<li><label class="fix-radio"><input type="radio" name="radio2"><span>1年以下</span></label></li>
    					<li><label class="fix-radio"><input type="radio" name="radio2"><span>1-3年</span></label></li>
    					<li><label class="fix-radio"><input type="radio" name="radio2"><span>3-5年</span></label></li>
    					<li><label class="fix-radio"><input type="radio" name="radio2"><span>5年以上</span></label></li>
    				</ul>
    			</div>
    		</div>
    	</div>
    	<div class="c-right">
    		<div class="search-bar">
    			<input type="text" value="" placeholder="搜索职位或公司" class="input-ctxt">
    			<input type="button" value="搜索" class="input-cbtn">
    		</div>
    		<div class="right-menu mt-20">
	    		<ul class="right-menu-list">
	    			<li><a href="###" class="active">推荐</a></li>
	    			<li><a href="###">最新</a></li>
	    		</ul>
	    		<a href="###"><span class="right-note">发布职位</span></a>
	    	</div>
	    	<div class="position-tap mt-20">
	    		<div class="rec">
	    			<div class="rec-item">
	    					<div class="rec-left">
	    						<h3>数据分析师<em>1分钟前发布</em></h3>
	    						<p><span>6k-8k</span><em>经验1-3年／学历不限／工资+绩效奖金／住房补贴</em></p>
	    					</div>
	    					<div class="rec-right">
	    						<div class="rec-img"><img src="../../components/career/images/item1.png"></div>
	    						<div class="rec-info">
	    							<h3>公司名公司名</h3>
	    							<p>公司名言，标语等。都写在这里，最多两行啊</p>
	    						</div>
	    					</div>
	    			</div>
	    			<div class="rec-item mt-20">
	    					<div class="rec-left">
	    						<h3>数据分析师<em>1分钟前发布</em></h3>
	    						<p><span>6k-8k</span><em>经验1-3年／学历不限／工资+绩效奖金／住房补贴</em></p>
	    					</div>
	    					<div class="rec-right">
	    						<div class="rec-img"><img src="../../components/career/images/item1.png"></div>
	    						<div class="rec-info">
	    							<h3>公司名公司名</h3>
	    							<p>公司名言，标语等。都写在这里，最多两行啊</p>
	    						</div>
	    					</div>
	    			</div>
	    			<div class="rec-item">
	    					<div class="rec-left">
	    						<h3>数据分析师<em>1分钟前发布</em></h3>
	    						<p><span>6k-8k</span><em>经验1-3年／学历不限／工资+绩效奖金／住房补贴</em></p>
	    					</div>
	    					<div class="rec-right">
	    						<div class="rec-img"><img src="../../components/career/images/item1.png"></div>
	    						<div class="rec-info">
	    							<h3>公司名公司名</h3>
	    							<p>公司名言，标语等。都写在这里，最多两行啊</p>
	    						</div>
	    					</div>
	    			</div>
	    			<div class="rec-item mt-20">
	    					<div class="rec-left">
	    						<h3>数据分析师<em>1分钟前发布</em></h3>
	    						<p><span>6k-8k</span><em>经验1-3年／学历不限／工资+绩效奖金／住房补贴</em></p>
	    					</div>
	    					<div class="rec-right">
	    						<div class="rec-img"><img src="../../components/career/images/item1.png"></div>
	    						<div class="rec-info">
	    							<h3>公司名公司名</h3>
	    							<p>公司名言，标语等。都写在这里，最多两行啊</p>
	    						</div>
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
	import '../../components/career/js/career.js';
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import '../../components/career/css/career.css';
</style>

<template>
  <div class="resume-detailed" style="background: #fff;"> 
    <div class="resume-right fr">
    	<div class="resume-right-head">
    		发送面试邀请
    	</div>
    	<div class="resume-right-middle">
    		<div class="resume-img fl"><img src="../../components/myPosted/images/avatar.png"></div>
    		<div class="resume-info">
    			<h4>此处是昵称</h4>
    			<p>只有我最帅，最有知识～，哈哈哈，这里可以是两行！！</p>
    		</div>
    		<div class="clearfix"></div>
    		<div class="resume-tip">
    			<ul class="tip-list">
    				<li>
    					<h5>20</h5>
    					<p>问答</p>
    				</li>
    				<li>
    					<h5>2</h5>
    					<p>文章</p>
    				</li>
    				<li>
    					<h5>300</h5>
    					<p>关注者</p>
    				</li>
    			</ul>
    		</div>
    	</div>
    	<div class="resume-btn">
				<a href="###">查看TA的主页</a>
			</div>
			<div class="resume-bottom">
    		<div class="resume-position">{{jobs.title}}</div>
    		<div class="resume-content">
    			<ul class="resume-list">
    				<li v-for="job in jobs.data">
    					<div class="left-img">
    						<img :src="job.images">
    					</div>
    					<div class="right-info">
    						<h4>{{job.career}}</h4>
    						<p>{{job.company}}</p>
    					</div>
    				</li>
    			</ul>
    		</div>
    	</div>
    	<div class="resume-bottom1">
    		<div class="position-wrap">
    			<div class="resume-position1">作者精彩问答</div>
    		</div>
    		<div class="resume-content1">
    			<ul class="resume-list1">
    				<li><p>Top1、双十一快递哪家强？大数据分析帮你忙</p></li>
    				<li><p>Top1、双十一快递哪家强？大数据分析帮你忙</p></li>	
    				<li><p>Top1、双十一快递哪家强？大数据分析帮你忙</p></li>
    			</ul>
    		</div>
    	</div>
    </div>
    <div class="resume-left">
    		<div class="resume-left-head">
    			<div class="resume-avatar"><img src="../../components/myPosted/images/avatar1.png"></div>
    			<h3>姓名</h3>
    			<p>个人简单的介绍</p>
    			<p>专业-学校</p>
    			<p>学历-工作经验-工作地址</p>
    			<p>电话号码-邮箱</p>
    		</div>
    		<div class="resume-left-item">
    			<i class="item-head">「 实习经历 」</i>
    			<ul class="resume-item-list">
    				<li>
    					<p><em class="fr">2017.05-2017.10</em><span>公司名公司名公司名</span></p>
    					<p>担任职位</p>
    					<i class="bottom-line"></i>
    				</li>
    				<li>
    					<p><em class="fr">2017.05-2017.10</em><span>公司名公司名公司名</span></p>
    					<p>担任职位</p>
    				</li>
    			</ul>
    		</div>
    		<div class="resume-left-item">
    			<i class="item-head">「 教育经历 」</i>
    			<ul class="resume-item-list">
    				<li>
    					<div class="edu-img"><img src="../../components/myPosted/images/avatar2.png"></div>
    					<div class="edu-info">
    						<p><em class="fr">毕业年份</em><span>学校名学校名</span></p>
    						<p>学位.专业</p>
    					</div>
    				</li>
    			</ul>
    		</div>
    		<div class="resume-left-item">
    			<i class="item-head">「 项目经验 」</i>
    			<ul class="resume-item-list">
    				<li>
    					<p><span>项目名称名称</span></p>
    					<p><em class="fr">2017.05-2017.10</em>担任职位</p>
    					<p class="item-body">
    						此处为项目简介，职责简介等内容。吧啦吧啦。其中包括logo,名片，海报，信封等的相关设计，并确定公司整体形象规范。确定品牌的用色及logo相关使用要求等，后期为其设计了网站的界面，历时一个月完成这个项目。其中包括logo,名片，海报，信封等的相关设计，并确定公司整体形象规范。确定品牌的用色及logo相关使用要求等，后期为其设计了网站的界面，历时一个月完成这个项目。其中包括logo,名片，海报，信封等的相关设计，并确定公司整体形象规范。确定品牌的用色及logo相关使用要求等，后期为其设计了网站的界面，历时一个月完成这个项目。
    					</p>
    					<i class="bottom-line"></i>
    				</li>
    				<li>
    					<p><span>项目名称名称</span></p>
    					<p><em class="fr">2017.05-2017.10</em>担任职位</p>
    					<p class="item-body">
    						此处为项目简介，职责简介等内容。吧啦吧啦。其中包括logo,名片，海报，信封等的相关设计，并确定公司整体形象规范。确定品牌的用色及logo相关使用要求等，后期为其设计了网站的界面，历时一个月完成这个项目。其中包括logo,名片，海报，信封等的相关设计，并确定公司整体形象规范。确定品牌的用色及logo相关使用要求等，后期为其设计了网站的界面，历时一个月完成这个项目。其中包括logo,名片，海报，信封等的相关设计，并确定公司整体形象规范。确定品牌的用色及logo相关使用要求等，后期为其设计了网站的界面，历时一个月完成这个项目。
    					</p>
    				</li>
    			</ul>
    		</div>
    		<div class="resume-left-item">
    			<i class="item-head">「 自我描述 」</i>
    			<ul class="resume-item-list">
    				<li>
    					<p class="item-body">
								做事一丝不苟，有较强的责任心，有团队合作精神，又具有较强的独立工作能力，思维活跃，且有三个月平面工作经验。乐于参与各种活动去体现自己的价值所在，平时善于沟通，性格开朗活泼，爱好书法，喜欢散步。在校期间同样表现优异。能熟练运用PS、AI等平面绘图软件，RHINO、UG、CAD等三维立体设计软件。熟念使用ID书籍排版软件以及C4D、AE等软件。有良好的分析、解决问题的思维，以创新的设计解决客户需求，能及时发现和更正自身的不足之处。有良好的设计思维和软件操作能力。在校期间，阅读过很多有关设计的书籍，这对我设计思维的养成起到了很大的作用。大三期间开始接触实践项目，以自己的建模能力发挥自己的价值。大二在校期间参加过很多次兼职。我认为体现价值所在可以使我生活的更开心一些。这就使我有了接手新事物的能力强的特点。
    					</p>
    					<i class="bottom-line"></i>
    				</li>
    			</ul>
    		</div>
    		<div class="resume-left-item hope-height">
    			<i class="item-head">「 期望工作 」</i>
    			<ul class="resume-hope">
    				<li><i class="icon-data"></i>数据挖掘</li>
    				<li><i class="icon-time"></i>实习</li>
    				<li><i class="icon-place"></i>上海</li>
    				<li><i class="icon-salary"></i>2K-5K</li>
    			</ul>
    		</div>
    		<div class="resume-left-item hope-height">
    			<i class="item-head">「 技能评价 」</i>
    			<!-- <ul class="resume-skill">
    				<li><span class="fl">hiphoop</span><div class="progress"><progressbar :now.num='50'  type="warning"></progressbar></div><em>精通</em></li>
    				<li><span class="fl">excel</span><div class="progress"><progressbar :now.num='50'  type="warning"></progressbar></div><em>熟练</em></li>
    			</ul> -->
    		</div>
    </div>	
  </div>
</template>

<script>
// import progressbar from 'vue-strap/src/Progressbar'
export default {
	components: {
    // progressbar
  },
  name: 'resumeDetail',
  data () {
    return {
      title: '投递简历',
      jobs:{
      	title:'相似职位',
      	data:[
      		{images:require('../../components/myPosted/images/article1.png'),career:'运营童鞋高效工作必备利器，快…',salary:'15-20K',company:'5分钟',place:''},
      		{images:require('../../components/myPosted/images/article1.png'),career:'运营童鞋高效工作必备利器，快…',salary:'15-20K',company:'5分钟',place:''},
      		{images:require('../../components/myPosted/images/article1.png'),career:'运营童鞋高效工作必备利器，快…',salary:'15-20K',company:'5分钟',place:''},
      		{images:require('../../components/myPosted/images/article1.png'),career:'运营童鞋高效工作必备利器，快…',salary:'15-20K',company:'5分钟',place:''}
      	]
      }
    }
  },
  mounted () {
// 	this.$Progress.set(30)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import '../../components/myPosted/css/bootstrap.min.css';
	@import '../../components/myPosted/css/resumedetail.css';
</style>

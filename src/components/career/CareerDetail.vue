<template>
  <div class="career-detail"> 
    <div class="detail-right fr">
    	<div class="right-head">
    			{{title}}
    	</div>
    	<div class="right-middle">
    			<p class="detail-img"><img :src="company.images"></p>
    			<p class="detail-title">{{company.name}}</p>
    			<p class="detail-desc">{{company.description}}</p>
    			<p class="detail-cate">所属行业：{{company.industry}}</p>
    			<p class="detail-end"><span>{{company.financing}}</span><em></em><span>{{company.number}}</span></p>
    	</div>
    	<div class="right-bottom">
    		<div class="right-position">{{jobs.title}}</div>
    		<div class="position-content">
    			<ul class="detail-list">
    				<li v-for="job in jobs.data">
    					<div class="left-img">
    						<img :src="job.images">
    					</div>
    					<div class="right-info">
    						<h4>{{job.career}}</h4>
    						<p class="money">{{job.salary}}</p>
    						<p>{{job.company}}	|	{{job.place}}</p>
    					</div>
    				</li>
    			</ul>
    		</div>
    	</div>
    </div>
    <div class="detail-left">
    	<div class="left-head">
    		<h3><span class="fr">{{jobDetail.salary}}</span>{{jobDetail.career}}<em>{{jobDetail.publish}}</em></h3>
    		<p><span>{{jobDetail.place}}</span><em></em><span>{{jobDetail.education}}</span><em></em><span>{{jobDetail.experice}}</span></p>
    	</div>
    	<div class="left-body">
    			<h3>{{careerDetail.head1}}</h3>
    			<div v-html="careerDetail.introduce"></div>
    			<h3>{{careerDetail.head2}}</h3>  			
    			<div v-html="careerDetail.description"></div> 			
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'careerList',
  data () {
    return {
      title: '投递简历',
      company:{
      	images:require('../../components/career/images/item2.png'),
      	name:'永辉超市有限公司',
      	description:'公司签名，公司签名，公司签名，公司签名，公司签名，公司签名',
      	industry:'互联网',
      	financing:'A轮',
      	number:'50-100人'
      },
      jobs:{
      	title:'相似职位',
      	data:[
      		{images:require('../../components/career/images/item3.png'),career:'大数据开发工程师',salary:'15-20K',company:'华睿信息',place:'上海'},
      		{images:require('../../components/career/images/item3.png'),career:'大数据开发工程师',salary:'15-20K',company:'华睿信息',place:'上海'},
      		{images:require('../../components/career/images/item3.png'),career:'大数据开发工程师',salary:'15-20K',company:'华睿信息',place:'上海'},
      		{images:require('../../components/career/images/item3.png'),career:'大数据开发工程师',salary:'15-20K',company:'华睿信息',place:'上海'}
      	]
      },
      jobDetail:{
      	career:'数据分析师',publish:'3小时前发布',salary:'15-20K',place:'上海',education:'本科',experice:'经验1-3年'
      },
      careerDetail:{
      	head1:'职业诱惑',
      	head2:'职业描述',
      	introduce:'<p>职业诱惑具体说明处</p>',
      	description:'<p>职位要求：</p><p>计算机科学或相关专业本科以上学历，熟悉经典的算法和数据结构</p><p>2年以上大数据处理相关工作经验（如果你足够牛，可以尝试挑战这一条）</p><p>精通Java</p><p>Hadoop/Hive/Pig, MapReduce, Storm等相关经验</p><p>有大数据相关开源项目经验的开发者优先</p><p>有机器学习相关背景者优先</p>'   	
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	@import '../../components/career/css/careerdetail.css';
</style>

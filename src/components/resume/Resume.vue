<template>
	<div id="app">
  <div class="personal_information">
				<div class="tex">
					<div class="headImg">
						<img src="./img/persona@2xl.png"/>
					</div>
					<div class="tex">
						<p style="font-size: 18px;">姓名</p>
						<p>个人的简单介绍</p>
						<p>学历-工作经验-工作地址</p>
						<p>电话号码-邮箱</p>
					</div>					
				</div>
				<div class="experience" id="first">
					<div class="add" v-on:click="showEdit">
						<p>添加</p>
					</div>
				<div class="content">
					<div class="practice">
						<p class="title">「实习经历」</p>
					</div>						
					<div class="item">
						<div class="tem">
							<span class="left">公司名公司名</span>
							<span class="right">2017.05 - 2017.10</span>
						</div>
						<br />								
						<div class="cusster">
							<div class="position">
								<span>担任职位</span>
								<div class="edit eid" @click="showEdit">
									<span>编辑</span>
								</div>										
							</div>								
						</div>								
					</div>					
					<hr />
					<div class="item ">
						<div class="tem">
							<span class="left">公司名公司名</span>
							<span class="right">2017.05 - 2017.10</span>
						</div>
						<br />								
						<div class="cusster">
							<div class="position">
								<span>公司职位</span>
								<div class="edit" @click="showEdit">
									<span>编辑</span>
								</div>									
							</div>								
						</div>
					</div>
				</div>
			</div>			
				<form method="post" action="http://127.0.0.1:2000/user/register" class="jingli" id="practice" @submit.prevent="submit">
					<div class="comment">
							<p>公司</p>
						<input type="text" name="" id="" value="" />
							<p>职位</p>
						<input type="text" name="" id="" value="" />
						<div class="hImg">
							<input type="file" name="" id="" value="" />
							<img src=""/>
							<p>图片</p>
						</div>
							<p>在职时间</p>
						<input type="date" name="" id="" value="" />
						<input type="date" name="" id="" value="" />
						
						<p>工作内容</p>
						<textarea name="" rows="9" cols="9"></textarea>														
						<div class="confirm">
							<div class="save">
								<p>
									<input type="submit" name="" id="" value="保存" />
									<span class="cancel" v-on:click="cancel">取消</span>
								</p>
							</div>															
						</div>
						<div class="delete">
							<p>删除本条</p>
						</div>							
					</div>
				</form>
			  <div class="experience">
					<div class="add add1" v-on:click="education">
						<p>添加</p>
					</div>
						<div class="content">
							<div class="practice">
								<p class="title">「教育经历」</p>
							</div>						
							<div class="item">
								<div class="tem">
									<div class="logo">
										<img src="../../assets/logo.png"/>
									</div>																		
								</div>
								<br />																				
							</div>
							<div class="item">
								<div class="tem pimg">
									<span class="left">学校名学校名</span>
									<span class="right">毕业年份</span>
								</div>
								<br />								
								<div class="cusster">
									<div class="position">
										<span class="conster">公司职位</span>
										<div class="edit ediEducation" v-on:click="ediEducation">
											<span>编辑</span>
										</div>										
									</div>									
								</div>								
							</div>
						</div>
				</div>
				<form class="jingli" id="education">
					<div class="comment">
							<p>学校名称</p>
						<input type="text" name="" id="" value="" />
							<p>所学专业</p>
						<input type="text" name="" id="" value="" />								
							<p>
								<span>学历</span>
								<span class="graduation">毕业年份</span>
							</p>									
						<select name="">
							<option value="德国"></option>
						</select>
						<select name="">
							<option value="美国"></option>
						</select>
																											
						<div class="confirm">
							<div class="save">
								<p>
									<input type="submit" name="" id="" value="保存" />
									<span class="cancel" v-on:click="cancel">取消</span>
								</p>
							</div>																
						</div>
						<div class="delete">
							<p>删除本条</p>
						</div>							
					</div>
				</form>
				<div class="experience third">
					<div class="add" @click='article'>
						<p>添加</p>
					</div>
						<div class="content">
							<div class="practice">
								<p class="title">「项目经验」</p>
							</div>						
							<div class="item">
									<div class="cusster">
										<div class="position">
											<span>公司职位</span>
											<div class="edit" @click='article'>
												<span>编辑</span>
											</div>
										</div>
										<div class="position duty">
											<span>担任职责</span>
											<div class="edit">
												<span>项目展开年份</span>
											</div>
										</div>
								</div>
								<br />																							
							</div>					
							<div class="item">
								<p>此处为项目简介，职责简介等内容。吧啦吧啦，其中包括logo名片，职责简介等内容，其中包括logo名片，海报，信封等的
									相关设计，并确定公司整体形象规范。确定品牌的用色及logo相关使用要求等，后期为其设计了网站的页面，历时一个月完成这个项目。
									其中包括logo，海报，信封的相关设计，并确定公司等整体形象规范。确
								</p>
							</div>
							<hr />
							<div class="item">
									<div class="cusster">
										<div class="position">
											<span>公司职位</span>
											<div class="edit" @click='article'>
												<span>编辑</span>
											</div>
										</div>
										<div class="position duty">
											<span>担任职责</span>
											<div class="edit">
												<span>项目展开年份</span>
											</div>
										</div>
								</div>
								<br />																							
							</div>					
							<div class="item">
								<p>此处为项目简介，职责简介等内容。吧啦吧啦，其中包括logo名片，职责简介等内容，其中包括logo名片，海报，信封等的
									相关设计，并确定公司整体形象规范。确定品牌的用色及logo相关使用要求等，后期为其设计了网站的页面，历时一个月完成这个项目。
									其中包括logo，海报，信封的相关设计，并确定公司等整体形象规范。
								</p>
							</div>
						</div>
				</div>
				<form class="jingli" id="article">
						<div class="comment">
								<p>项目名称</p>
							<input type="text" name="" id="" value="" />
								<p>你的职责</p>
							<input type="text" name="" id="" value="" />							
								<p>项目起止时间</p>
							<input type="date" name="" id="" value="" />
							<input type="date" name="" id="" value="" />
							
							<p>工作内容</p>
							<textarea name="" rows="9" cols="9"></textarea>														
							<div class="confirm">
								<div class="save">
									<p>
										<input type="submit" name="" id="" value="保存" />
										<span class="cancel" v-on:click="cancel">取消</span>
									</p>
								</div>
															
							</div>
							<div class="delete">
								<p>删除本条</p>
							</div>							
						</div>
				</form>
				<div class="experience third self">
					<div class="add" @click='describe'>
						<p>编辑</p>
					</div>
					<div class="content">
						<div class="practice">
							<p class="title">「自我描述」</p>
						</div>																	
						<div class="item">
							<p>此处为项目简介，职责简介等内容。吧啦吧啦，其中包括logo名片，职责简介等内容，其中包括logo名片，海报，信封等的
								相关设计，并确定公司整体形象规范。确定品牌的用色及logo相关使用要求等，后期为其设计了网站的页面，历时一个月完成这个项目。
								其中包括logo，海报，信封的相关设计，并确定公司等整体形象规范。
							</p>
						</div>						
					</div>
				</div>
				<form class="jingli" id="describe">
					<div class="comment">								
						<p>项目描述</p>
						<textarea name="" rows="9" cols="9"></textarea>														
						<div class="confirm">
							<div class="save">
								<p>
									<input type="submit" name="" id="" value="保存" />
									<span class="cancel" v-on:click="cancel">取消</span>
								</p>
							</div>
														
						</div>
						<div class="delete">
							<p>删除本条</p>
						</div>							
					</div>
				</form>
				<div class="experience third except">
					<div class="add" @click="except">
						<p>编辑</p>
					</div>
					<div class="content">
						<div class="practice">
							<p class="title">「期望工作」</p>
						</div>																	
						<div class="item">
							<div class="dataDisscuse">
								<p>
									<img src="./img/ic_job.png"/>
									<span>数据挖掘</span>
								</p>									
							</div>
							<div class="dataDisscuse">
								<p>
									<img src="./img/ic_work.png"/>
									<span>实习</span>
								</p>									
							</div>
							<div class="dataDisscuse">
								<p>
									<img src="./img/ic_location.png"/>
									<span>上海</span>
								</p>
							</div>
							<div class="dataDisscuse">
								<p>
									<img src="./img/ic_salary.png"/>
									<span>2K-5K</span>
								</p>									
							</div>
						</div>						
					</div>
				</div>
				<form class="jingli" id="except">
					<div class="comment">
							<p>期望职位</p>
						<input type="text" name="" id="" value="" />																
							<p>
								<span>期望城市</span>
								<span class="graduation">期望月薪</span>
							</p>									
						<select name="" >
							<option value="德国"></option>
							<option value="德国">德国</option>
							<option value="德国">英国</option>
							<option value="德国">美国</option>
							<option value="德国">法国</option>
						</select>
						<select name="" >
							<option value="美国">4K</option>
							<option value="美国">5K</option>
							<option value="美国">6K</option>
							<option value="美国">7K</option>
							<option value="美国">8K</option>
							<option value="美国">9K</option>
						</select>
																											
						<div class="confirm">
							<div class="save">
								<p>
									<input type="submit" name="" id="" value="保存" />
									<span class="cancel" v-on:click="cancel">取消</span>
								</p>
							</div>
														
						</div>
						<div class="delete">
							<p>删除本条</p>
						</div>							
					</div>
				</form>
				<div class="experience third progress-bar">
					<div class="add">
						<p>编辑</p>
					</div>
					<div class="content">
						<div class="practice">
							<p class="title">「技能评价」</p>
						</div>																	
						<div class="item">
							<p>
								<div class="progress">
									<span>hiphoop</span>
								</div>									
								<div class="progress bar">
									<div class="green">										
									</div>										
								</div>
								<div class="progress">
									<span>精通</span>
								</div>									
							</p>								
						</div>
						<br />
						<br />
						<div class="item">
							<p>
								<div class="progress">
									<span>excele&nbsp;&nbsp;&nbsp;</span>
								</div>									
								<div class="progress bar">
									<div class="green">										
									</div>										
								</div>
								<div class="progress">
									<span>熟练</span>
								</div>									
							</p>								
						</div>
					</div>
				</div>
				<div class="experience third progress-bar">
					<div class="add" @click="theam">
						<p>添加</p>
					</div>
					<div class="content">
						<div class="practice custom">
							<p class="title">「添加自定义项」</p>
						</div>																								
					</div>
				</div>
				<form class="jingli" id="theam">
						<div class="comment">
								<p>自定义标题</p>
							<input type="text" name="" id="" value="" />								
							<p>内容</p>
							<textarea name="" rows="9" cols="9"></textarea>														
							<div class="confirm">
								<div class="save">
									<p>
										<input type="submit" name="" id="" value="保存" />
										<span class="cancel" v-on:click="cancel">取消</span>
									</p>
								</div>															
							</div>
							<div class="delete">
								<p>删除本条</p>
							</div>							
						</div>
				</form>
		</div>
		<div class="uploadResume">
		  	<div class="upload">
		  		<div class="upImg">
		  			<img src="./img/ic_link.png"/>
		  		</div>		  		
		  	</div>
		  	<div class="complete">
		  		<div class="container">
		  			<div class="complete_tex">
			  			<div class="alaway">
				  			<p>简历完成度：<span>80%</span></p>
				  		</div>
				  		<div class="preview">
				  			<p>预览简历</p>
				  		</div>				  		
			  		</div>	
			  		<div class="progress_complete">
				  		<div class="already">				  			
				  		</div>	
				  	</div>
		  	   </div>		  			  		
		  	</div>
		  	<ul class="modele">
		  		<li class="check" v-for="(i,index) in models" v-on:click="doSomething(i,index)">{{i.text}}</li>		  		
		  	</ul>
		</div>
		
	 </div>
	 
</template>
<!--<script src="../../common/third/jquery/jquery-2.0.0.min.js" type="text/javascript" charset="utf-8"></script>-->
<script>
import '../../common/third/jquery/jquery-2.0.0.min.js';
//import 'js/Resume.js';
export default {
  name: 'Resume',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      models:[
		      {text:'基本信息'},
		      {text:'实习经历'},
		      {text:'教育经历'},
		      {text:'项目经验'},
		      {text:'作品展示'},
		      {text:'自我描述'},
		      {text:'期望工作'},
		      {text:'技能评价'},
		      {text:'添加模块'}
		     ]
    }		
  },
  methods:{
		showEdit: function(){
            	$('#practice').css('display','block');
//          	this.style.display = 'block';
       },
       cancel:function(){
       			$('#practice').css('display','none');
       			$('#education').css('display','none');
       			$('#article').css('display','none');
       			$('#describe').css('display','none');
       			$('#except').css('display','none');
       			$('#theam').css('display','none');
       			$('.add').text('添加');
       },
       doSomething:function(i,index){
		var lis = $('.modele li');
		for(var i = 0;i<lis.length;i++){
			lis[i].className = '';			
		}
		lis[index].className = 'tbb';
       },
       education:function(){
       		$('#education').css({
       			display:'block',
       			padding:'24px'
       			});
       		$('.add1').text('取消');
       },
       ediEducation:function(){
       	$('.ediEducation').click(function(){
       		$('#education').css({
       			display:'block',
       			padding:'24px',
       			marginTop:'-35px'
       			});
       	})
       },
       article:function(){
       	$('#article').css({
       		display:'block',
       		marginTop:'-190px'
       	})
       },
       describe:function(){
	       	$('#describe').css({
	       		display:'block',
	       		marginTop:'-120px',
	       		height:'300px'
	       	})
   		},
   		except:function(){
   			$('#except').css({
	       		display:'block',
	       		marginTop:'-50px',
	       		height:'235px'
	       	})
   		},
   		theam:function(){
   			$('#theam').css({
   				display:'block',
	       		marginTop:'-50px',
	       		height:'355px'
   			})
   		}
// 		submit: function(event) {
//        //var formData = JSON.stringify(this.user); // 这里才是你的表单数据     
//        event.preventDefault();
//		  var data = $(this).serialize();
//        this.$http.post('http:127.0.0.1:2000/user/register', data).then((response) => {
//            // success callback
//            console.log(data);
//        }, (response) => {
//            // error callback
//        });
//      }
// 		,
// 		formatDate:function(){
// 			// 封装一个方法：解析 date			
//				var y = time.getFullYear();
//				var M = time.getMonth() + 1;
//				var d = time.getDate();
//				var h = time.getHours();
//				var m = time.getMinutes();
//				M = M < 10 ? '0' + M : M;
//				d = d < 10 ? '0' + d : d;
//				h = h < 10 ? '0' + h : h;
//				m = m < 10 ? '0' + m : m;
//				// 例如：2017-02-13 15:30
//				return y + '-' + M + '-' + d + ' ' + h + ':' + m;
//			}
//		// 封装一个方法：解析 ip
//		formatIp:function(ip){
//			// ip.startsWith('::1')
//			var regExp = /::1/ig;
//			if (ip.match(regExp)) {
//				return 'localhost';
//			} else{
//				return ip.substr(7);
//			}
//		}
	}
}
</script>
<style scoped>
@import'css/Resume.css';
</style>

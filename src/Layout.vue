<template>
  <div id="layout">
    <!-- <div class="app-header text-center">header</div> -->
    <div class="app-content">
    	<router-view></router-view>
    </div>
    <!--<div class="app-footer">footer</div>-->
  </div>
</template>

<script>
export default {
  name: 'layout'
}
</script>

<style>
@charset "utf-8";
/* CSS Document */
body,ul,ol,li,p,h1,h2,h3,h4,h5,h6,form,fieldset,table,td,img,div,dl,dt,dd,input{
    margin:0;
    padding:0;
    outline: none;
    box-sizing: border-box;
}
body{
    font-size: 14px;
    font-family: "Microsoft YaHei", "微软雅黑", "宋体", simsun;
    color: #333;
    background: #f8f8f8;
    /*background: #fff;*/
}
img{
    border: none;
}
li{
    list-style: none;
}
*:focus {
    outline: none!important;
    /*border:none;*/
}
input,select,textarea{
    outline: none;
    border:none;
}
textarea{
    resize: none;
}
a:link,a:visited{
    text-decoration: none;
    color: #000;
    outline: none;
}
a:hover,a:active{
    color: #009d01;
    outline: none;
}
em,i{
    font-style: normal;
}
/* 移动端禁止选中内容：*/
.user-select-none {
    -webkit-user-select:none;
}
/* 取消touch的高亮显示：*/
html {
    -webkit-tap-highlight-color:rgba(0,0,0,0);
}
input[type="button"], input[type="submit"], input[type="reset"] {
    -webkit-appearance: none;
}
textarea {
    -webkit-appearance: none;
}
::-webkit-input-placeholder { /* WebKit browsers */
    font-size:16px;
		color:#bcbcbc;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    font-size:16px;
		color:#bcbcbc;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
    font-size:16px;
		color:#bcbcbc;
}
:-ms-input-placeholder { /* Internet Explorer 10+ */
    font-size:16px;
		color:#bcbcbc;
}
/*清除浮动*/
.clearfix:after{
    content: "";
    display: block;
    clear: both;
}
.clearfix{
    zoom: 1;
    overflow: hidden;
}
.clear{
   clear: both;
}
.fl{
    float: left;
}
.fr{
    float: right;
}
.ov-hide{
    overflow: hidden;
}
.text-center{
	text-align: center;
}
/*单选按钮样式*/
.fix-radio input{
	display: none;
}
.fix-radio span{
	width: 100%;
	height: 24px;
	line-height: 24px;
	display: inline-block;
	cursor: pointer;
}
.fix-radio input:checked+span{
	background:#515151;
	border-radius:25px;
	width:100%;
	height: 24px;
	line-height: 24px;
	display: inline-block;
	color: #fff;
}
.mt2{
	margin-top: 20px;
}
.mt-20{
	margin-top: 20px;
}
.mb-10{
	margin-bottom: 10px;
}
.icon-close{
	width: 23px;
	height: 23px;
	position: absolute;
	right: 150px;
	top: 13px;
	background: url(components/career/images/close.png) no-repeat 0 0;
	display: none;
}
.icon-close1{
	width: 23px;
	height: 23px;
	position: absolute;
	right: 250px;
	top: 13px;
	background: url(components/career/images/close.png) no-repeat 0 0;
	display: none;
}
.showClose{
	display: inline-block;
}
</style>

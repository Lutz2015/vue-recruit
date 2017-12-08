<template>
    <div>
        <div  class="release">
        <div class="topContent">
            <img src="./images/pic.png" alt="">
            <span @click="showModal" class="releaseBtn">发布职位</span>
            <span class="seeRelease">查看已发布职业</span>
            <span class="releaseInfo">可发布职位包括：数据分析、数据挖掘、数据产品、Hadoop开发工程师、等数据相关职位</span>
            <div class="modal" v-show="modalFlag">
                <div class="modal-title"><span>认证提示</span><a @click="hideModal" href="javascript:void(0);"><img src="./images/ic_close.png"></a></div>
                <div class="modal-content">
                    <span>为保证招聘信息的真实有效，使用招聘服务需要验证企业账号</span>
                </div>
                <div class="modal-botton">
                    <span  @click="toIdent" class="sureBtn">立即认证</span>
                    <span  @click="hideModal" class="cancelBtn">暂不认证</span>
                </div>
            </div>
        </div>
        <div class="footerContent">
            <div class="partOne">
                <h3>为什么使用爱统计招聘？</h3>
                <ul>
                    <li>
                        <div>
                            <img src="./images/ic_people_crowd.png">
                            <span class="title">数据人才，聚集于此</span>
                            <span class="info">更多的简历供您选择，总有合适的数据人出现</span>
                        </div>
                        <div class="bar"></div>
                    </li>
                    <li>
                        <div>
                            <img src="./images/ic_data_home.png">
                            <span class="title">专业社区，更懂设计</span>
                            <span class="info">社区连接更多的数据供您参考，真才实料一看便知！</span>
                        </div>
                        <div class="bar"></div>
                    </li>
                    <li>
                        <div>
                            <img src="./images/ic_pencil.png">
                            <span class="title">专业社区，更懂设计</span>
                            <span class="info">笔试在线试题，数据招聘问题，招手即来，全面检测求职者的能力</span>
                        </div>
                        <div class="bar"></div>
                    </li>
                    <li>
                        <div>
                            <img src="./images/ic_charge.png">
                            <span class="title">智能算法，筛选快捷</span>
                            <span class="info">企业可通过筛选条件，筛选出最符合心意的求职者</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
         <div class="partTwo">
                <h3>招聘四步完成</h3>
                <ul>
                    <li>
                        <div>
                           <span class="stepNum">01</span>
                           <span class="stepInfo">认证企业号</span>
                        </div>
                    </li>
                     <li>
                        <div>
                           <span class="stepNum">02</span>
                           <span class="stepInfo">创建职位</span>
                        </div>
                    </li>
                     <li>
                        <div>
                           <span class="stepNum">03</span>
                           <span class="stepInfo">创建职位</span>
                        </div>
                    </li>
                     <li>
                        <div>
                           <span class="stepNum">04</span>
                           <span class="stepInfo">综合评估</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    </div>
</template>

<script>

export default {
    name:"Release",
    data(){
        return {
             modalFlag:false
        }
    },
    mounted:function(){
    //    this.showModal();
    },
    methods:{
        showModal:function(){
            // alert(111);
            this.modalFlag = true;
        },
        hideModal:function(){
            this.modalFlag = false;
        },
        toIdent:function(){
            this.$router.push({
                path: '/identification'
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*------------ 页头样式 ----------------*/
.release{
    min-width: 1280px;
    padding: 20px 20px;
    background-color: #f8f8f8;
}
.topContent>img{
    opacity:0.8;
    width:100%;
    height:100%;
}
.topContent{
    position: relative;
    text-align: center;
}
.releaseBtn{
    font-family:MicrosoftYaHei-Bold;
    position: absolute;
    top: 206px;
    left: 50%;
    margin-left: -174px;
    background:#009d01;
    border-radius:4px;
    padding: 13px 94px;
    font-weight: bold;
    font-size:40px;
    color:#ffffff;
    cursor: pointer;
}
.seeRelease{
    position: absolute;
    top: 300px;
    left: 40%;
    right: 40%;
    font-size:18px;
    color:#009d01;
    text-shadow:1px 2px 4px rgba(255,255,255,0.50);
}
.releaseInfo{
    background-color:rgba(81,81,81,0.5);
    padding: 14px;
    position: absolute;
    top: 336px;
    left: 50%;
    margin-left: -412px;
    font-size:20px;
    color:#ffffff;
}

/*------------ modal框样式 ----------------*/
.modal{
    position: absolute;
    top: 156px;
    left: 50%;
    margin-left: -300px;
    background:#ffffff;
    border:1px solid #f0f0f0;
    box-shadow:0 4px 16px 0 rgba(0,0,0,0.50);
    width:600px;
}
.modal-title{
    position: relative;
    padding: 16px;
    text-align: center;
}
.modal-title>span{
    color:#000000;
    font-size:24px;
}
.modal-title>a{
    position: absolute;
    text-align: center;
    width: 30px;
    height: 30px;
    top: 20px;
    right: 20px;
}
.modal-title>a img{
   margin-top: 4px;
}
.modal-content{
    font-size:18px;
    color:#515151;
    text-align:center;
    padding: 50px 124px;
}
.modal-botton{
    padding: 10px 58px 30px 58px;
    text-align: center;
}
.sureBtn{
    background:#666666;
    padding:10px 58px;
    cursor: pointer;
}
.cancelBtn{
    border:1px solid #979797;
    padding:10px 58px;
    cursor: pointer;
}
/*------------ 页足样式 ----------------*/
.partOne{
    margin-top:36px; 
}
.partOne>h3{
    font-size:24px;
    color:#000000;
    letter-spacing:0;
    text-align:center;
}
.partOne>ul{
    margin-top: 28px;
    display: -webkit-flex; /* Safari */
    display: flex;
}
.partOne>ul>li{
    position: relative;
    background:#ffffff;
    width: 25%;
    min-width:310px;
    min-height:224px;
    text-align:center;
   cursor: pointer;
}
.partOne>ul>li .bar{
    position:absolute;
    right: 0px;
    top:50%;
    margin-top: -50px;
    background:#d8d8d8;
    width:2px;
    height:100px;
}
.partOne img{
    display: block;
    padding: 34px 130px;
}
.partOne .title{
    display: block;
    font-size:18px;
    color:#515151;
}
.partOne .info{
    display: block;
    font-size:12px;
    color:#bcbcbc;
    padding: 16px 44px;
}

.partTwo{
    margin-top:32px; 
}
.partTwo>h3{
    font-size:24px;
    color:#000000;
    letter-spacing:0;
    text-align:center;
}
.partTwo>ul{
    margin-top: 36px;
    display: -webkit-flex; /* Safari */
    display: flex;
    justify-content:space-between;
}
.partTwo>ul>li{
    position: relative;
    background:#f8f8f8;
    min-width:290px;
    min-height:154px;
    text-align:center;
}
.partTwo>ul>li .stepNum{
    position: absolute;
    top:0px;
    left: 50%;
    margin-left: -32px;
    font-size:60px;
    color:#515151;
}
.partTwo>ul>li .stepInfo{
    display: block;
    margin-top: 50px;
    padding: 46px 0px 42px 0px;
    font-size:26px;
    color:#515151;
    background:#ffffff;
}

</style>

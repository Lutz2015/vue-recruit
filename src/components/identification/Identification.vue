<template>
    <div>
        <div  class="ident">
            <div class="ident-title">
                <div>
                    <div class="item">
                        <img :src="this.tab_index >= 1?tab_url.clicked:tab_url.no_clicked" alt="">   
                         <span>填写展示信息</span>
                    </div>
                    <div class="line"></div>
                    <div class="item">
                        <img :src="this.tab_index >=2?tab_url.clicked:tab_url.no_clicked" alt="">
                        <span>填写认证资料</span>
                    </div>
                    <div class="line"></div>
                    <div class="item">
                        <img :src="this.tab_index >=4?tab_url.clicked:tab_url.no_clicked" alt="">
                        <span>等待审核</span>
                    </div>
                </div>
            </div>
            <div class="ident-content">
                <!-- <router-view ></router-view> -->
                 <div v-show="tab_index == 1" class="setpOne">
                    <div class="setp_title"> 账号认证</div>
                        <div class="setp_content">
                            <div class="mb">
                                <div class="label">
                                    <div class="dot"></div><span>企业头像</span>
                                </div>
                                <div class="inputPart"><img id="headImg" src="./images/ic_people_big.png" alt=""></div>
                            </div>
                            <div>
                                <div class="label">
                                    <div class="dot"></div><span>用户名</span>
                                </div>
                                <div class="inputPart"><input id="userInput" type="text" placeholder="鑫鑫乐园"></div>
                                <div class="warmPart"><img src="./images/ic_error.png" alt=""><span>此处必填项</span></div>
                                <div class="hintPart"><span>通过认证的账户名将不能修改，请谨慎填写，其将代表您爱统计中的称呼</span></div>
                            </div>
                            <div>
                                <div class="label">
                                    <div class="dot"></div><span>签名</span>
                                </div>
                                <div class="inputPart"><input id="signInput" type="text" placeholder="不超过20个汉字／40字符"><span>20</span></div>
                            </div>
                            <div>
                                <div class="label">
                                    <div class="dot"></div><span>地址</span>
                                </div>
                                <div class="inputPart">
                                    <img class="artboard" src="./images/artboard.png" alt="">
                                    <input class="mr" id="selectAddress" placeholder="上海／上海市／徐汇区" disabled>
                                    <input id="inputAddress" type="text" placeholder="请填写具体地址">
                                </div>
                            </div>
                        </div>
                        <div class="setp_footer">
                            <div>
                                <span class="next" @click="next(2)">下一步</span>
                                <span class="back" @click="backHome()">上一步</span>
                            </div>
                            <div><p>如认证有任何问题，请发送邮件至info@itongji.cn</p></div>
                        </div>
                    </div>
                 </div>
                    <div v-show="tab_index == 2" class="setpTwo">
                         <div class="setp_title"> 账号认证</div>
                            <div class="setp_content">
                                <div class="mb">
                                    <div class="label">
                                        <div class="dot"></div><span>联系人</span>
                                    </div>
                                    <div class="inputPart"><input id="inputName" type="text" placeholder="请使用真实姓名"></div>
                                    <div class="warmPart"><img src="./images/ic_error.png" alt=""><span>此处必填项</span></div>
                                </div>
                                <div>
                                    <div class="label">
                                        <div class="dot"></div><span>联系电话</span>
                                    </div>
                                    <div class="inputPart">
                                        <input  id="inputTel" placeholder="请填写真实有效的号码">
                                        <input id="getCode" type="button" value="获取验证码">
                                    </div>
                                    <div class="warmPart"><img src="./images/ic_error.png" alt=""><span>手机号格式不正确</span></div>
                                </div>
                                <div>
                                    <div class="label">
                                        <div class="dot"></div><span>验证码</span>
                                    </div>
                                    <div class="inputPart"><input id="inputCode" type="text" placeholder="请输入验证码"></div>
                                    <div class="warmPart"><img src="./images/ic_error.png" alt=""><span>验证码不正确</span></div>
                                </div>
                                <div>
                                    <div class="label">
                                        <div class="dot"></div><span>企业注册名称</span>
                                    </div>
                                    <div class="inputPart">
                                        <input id="inputOrgNickName" type="text" placeholder="请输入目前融资的阶段">
                                    </div>
                                </div>
                                <div>
                                    <div class="label wd">
                                        <div class="dot"></div><span>统一社会信用代码</span>
                                    </div>
                                    <div class="inputPart ml">
                                        <input id="inputCreditCode" type="text" placeholder="请输入15营业执照注册号／18位统一社会信用代码">
                                    </div>
                                    <div class="warmPart"><img src="./images/ic_error.png" alt=""><span>营业执照注册号不正确</span></div>
                                </div>
                                <div>
                                    <div class="label">
                                        <div class="dot"></div><span>营业执照</span>
                                    </div>
                                    <div class="inputPart">
                                        <p>只支持中国大陆工商局或市场监督管理局颁发的工商营业执照，且必须在有效期内。</p>
                                        <div class="inputPhoto">
                                            <input type="file" accept="image/*" id="inputPhoto">
                                            <label  for="inputPhoto">上传营业执照</label >
                                            <img src="" alt="">
                                        </div>
                                        <p class="tips">支持png/gif/jpg文件格式，图片大小不超过10MB</p>
                                    </div>
                                </div>
                            </div>
                            <div class="setp_footer">
                                <div>
                                    <span class="next" @click="next(3)">下一步</span>
                                    <span class="back" @click="back(1)">上一步</span>
                                </div>
                                <div><p>如认证有任何问题，请发送邮件至info@itongji.cn</p></div>
                            </div>
                    </div>
            
                    <div v-show="tab_index == 3" class="setpThird">
                        <div class="setp_title"> 账号认证</div>
                        <div class="setp_content">
                            <div class="mb">
                                <div class="label">
                                    <div class="dot"></div><span>公司企业</span>
                                </div>
                                <div class="inputPart"><input id="conpanyIndexInput" type="text" placeholder="粘贴公司主页链接到此处"></div>
                                <div class="warmPart"><img src="./images/ic_error.png" alt=""><span>此处必填项</span></div>
                            </div>
                            <div>
                                <div class="label">
                                    <div class="dot"></div><span>公司规模</span>
                                </div>
                                <div class="inputPart">
                                    <img class="artboard" src="./images/artboard.png" alt="">
                                    <input class="mr" @click="showSelect" id="selectScale" :placeholder="this.PeoNumVal" >
                                    <div class="selectPeoNum" v-show="this.togglePeoNum">
                                        <ul>
                                            <li v-for="(val,index) in PeoNumList" @click="showSelect(index,val.data)">{{val.data}}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="label">
                                    <div class="dot"></div><span>所属行业</span>
                                </div>
                                <div class="inputPart"><input id="inputInvolved" type="text" placeholder="请输入所属行业"></div>
                            </div>
                            <div>
                                <div class="label">
                                    <div class="dot"></div><span>投资机构</span>
                                </div>
                                <div class="selectPart">
                                    <label for="noFinance"><input id="noFinance" name="selectOrganization" type="radio" value="" checked><span></span><span>不需要融资</span></label>
                                    <label for="hasFinance"><input id="hasFinance" name="selectOrganization" type="radio" value=""><span></span><span>已融资</span></label>
                                </div>
                                <div class="inputPart">
                                    <input class="ml" id="inputOrganization" type="text" placeholder="请输入目前融资的阶段">
                                </div>
                            </div>
                        </div>
                        <div class="setp_footer">
                            <div>
                                <span class="next" @click="next(4)">提交审核</span>
                                <span class="back" @click="back(2)">上一步</span>
                            </div>
                            <div><p>如认证有任何问题，请发送邮件至info@itongji.cn</p></div>
                        </div>
                    </div>
            
            
                    <div v-show="tab_index == 4" class="setpFour">
                        <div class="modal" v-show="modalFlag">
                            <div class="modal-title"><span>审核提示</span><a @click="hideModal" href="javascript:void(0);"><img src="./images/ic_close.png"></a></div>
                            <div class="modal-content">
                                <span>审核提交成功，请耐心等待。我们将于3个工作日内确认审核</span>
                            </div>
                            <div class="modal-botton">
                                <span  @click="hideModal" class="sureBtn">我知道了</span>
                            </div>
                        </div>
                    </div>
            
           
        </div>
       
    </div>
</template>

<script>
export default {
    name:"Identification",
    data(){
        return {
            togglePeoNum:false,
            PeoNumList:[
                {index:1,data:"20人以下"},
                {index:2,data:"20-50人"},
                {index:3,data:"50-100人"},
                {index:4,data:"100-200人"},
                {index:5,data:"200以上"},
            ],
            PeoNumVal:"",
            tab_index:1,
            modalFlag:true,
            tab_url:{
                clicked:require("./images/simple-line-iconT.png"),
                no_clicked:require("./images/simple-line-iconG.png")
            }
        }
    },
    methods:{
        next:function(index){
            this.tab_index = index
        },
        back:function(index){
             this.tab_index = index
        },
        backHome:function(){
             this.$router.push({
                path: '/nav/release'
            })
        },
        showModal:function(){
            this.modalFlag = true;
        },
        hideModal:function(){
            this.modalFlag = false;
            this.$router.push({
                path: '/nav/release'
            })
        },
        showSelect:function(index,val){
            this.PeoNumVal = val;
            this.togglePeoNum =  !this.togglePeoNum;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
     @import url(./css/Identification.css)
</style>

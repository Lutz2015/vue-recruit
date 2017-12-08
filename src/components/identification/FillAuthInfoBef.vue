<template v-on:message="recieveMessage">
    <div>
        <div class="setpOne_title"> 账号认证</div>
        <div class="setpOne_content">
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
        <div class="setpOne_footer">
            <div>
                <span class="next" @click="next">下一步</span>
                <span class="back" @click="back">上一步</span>
            </div>
            <div><p>如认证有任何问题，请发送邮件至info@itongji.cn</p></div>
        </div>
    </div>
</template>

<script>
// import FillShowInfo from '@/components/identification/FillShowInfo'
export default {
    name:"FillAuthInfo",
    data(){
        return {
            tab_index:this.$route.params.tab_index 
        }
    },
    methods:{
        next(){
              this.$router.push({
                path: '/identification/FillAuthInfo'
            })
            this.$emit('tab_index', this.tab_index);
        },
        back(){
             this.$router.push({
                path: '/identification/FillShowInfo'
            })
        },
         recieveMessage(val){
            console.info(val)
        }
    },
    watch:{  
      '$route' (to, from) {  
        console.info(this.$route.params.tab_index); 
      } 
    } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import url(./css/fillAuthInfoBef.css)
</style>

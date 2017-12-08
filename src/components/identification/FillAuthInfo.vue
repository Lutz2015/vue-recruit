<template>
    <div>
        <div class="setpOne_title"> 账号认证</div>
        <div class="setpOne_content">
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
                    <input class="mr" id="selectScale" placeholder="20人一下" disabled>
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
        <div class="setpOne_footer">
            <div>
                <span class="next" @click="next">提交审核</span>
                <span class="back" @click="back">上一步</span>
            </div>
            <div><p>如认证有任何问题，请发送邮件至info@itongji.cn</p></div>
        </div>
    </div>
</template>

<script>
export default {
    name:"FillAuthInfo",
     methods:{
        next(){
              this.$router.push({
                path: '/identification/WaitReview'
            })
        },
        back(){
             this.$router.push({
                path: '/identification/FillAuthInfoBef'
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import url(./css/fillAuthInfo.css)
</style>

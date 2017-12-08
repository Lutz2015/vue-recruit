<template  >
    <div>
        <div class="setpOne_title"> 账号认证</div>
        <div class="setpOne_content">
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

export default {
    name:"FillShowInfo",
    data(){
        return {
            tab_index:1
        }
    },
    methods:{
        next(){
              this.$router.push({
                path: '/identification/FillAuthInfoBef',
                params:{
                    tab_index:1
                }
                });
            
        },
        back(){
              this.$router.push({
                path: '/nav/release'
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import url(./css/fillShowInfo.css)
</style>

<template>
    <div>
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
</template>

<script>
export default {
    name:"WaitReview",
    data(){
        return {
             modalFlag:true
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
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>

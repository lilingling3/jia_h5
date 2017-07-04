<template>
    <div id="login">
         <div class="loginbox p_re">
             <div class="row">
                 <span class="icon icon1"></span>
                 <input type="text" maxlength="11" name="mobile" v-model="userMobile" class="input-t tb-center" id="mobile" placeholder="请输入手机号">
             </div>
         </div>
         <div class="row">
             <div class="inner">
                 <span class="icon icon2"></span>
                 <input type="text" maxlength="4" name="code" v-model="userCode" class="input-t tb-center" id="code" placeholder="请输入短信验证码">
             </div>
             <div class="inner btn-code"  @click="getCode" >
                 <span v-if="!codeSuccess" class="blue code-t">获取验证码</span>
                 <span v-if="codeSuccess" class="code-t">{{ num }}秒</span>
             </div>
             <p v-if="error" class="error">{{ errorMsg }}</p>
         </div>
         <div class="btn" @click="login" >提交</div>
    </div>
</template>
<script>
    import conf from '../../assets/js/conf.js'
     import comFuc from '../../assets/js/common.min.js'

    export default{
        data(){
            return {
                 userMobile:'',
                 userCode:'',
                 error:false,
                 errorMsg:"",
                 num:59,
                 codeSuccess:false,
                 visible: false
            }
        },
        methods: {
            getCode(){
             if(this.codeSuccess){
             return false;
             }
             if(!comFuc.verifyMobile(this.userMobile)){
             this.errorMsg = "手机号错误";
             this.error=true;
             return false;
             }
             let vm = this;
             this.$http.post('http://testys.cn/api/account/login/code',{ "mobile":this.userMobile},{emulateJSON:true}).then(function(res){
                 console.log(res.body);
                 let data = res.body;
                 if(data["errorCode"] != 0 ){
                 this.errorMsg = data["errorMessage"];
                 this.error=true;
                 return false;
             }
                 vm.codeSuccess=true;
                 vm.num = 59;
                 this.error=false;
                 setInterval(function(){
                 vm.num--;
                 if(vm.num == 0){
                 vm.codeSuccess = false;
                 }
                 },1000);
             },function(res){
                 console.log(res.status);
             });

             },
             login(){
             if(!comFuc.verifyMobile(this.userMobile) || !comFuc.verifyCode(this.userCode) ){
                 this.error = true;
                 this.errorMsg = "手机号或者密码错误";
                 return false;
             }
                 console.log();
             this.$http.post('http://testys.cn/api/account/verify/login',{
                 "mobile":this.userMobile,
                 "code": this.userCode,
                 "source":3
             },{
             emulateJSON:true}).then(function(res){
                 console.log(res.body);
                 let data = res.body;
                 if(data["errorCode"] != 0 ){
                 this.errorMsg = data["errorMessage"];
                 this.error=true;
                 return false;
             }
                 sessionStorage.setItem('yunshanUser',JSON.stringify(data["user"]));
                 this.$router.push({ path: '/index' });

             },function(res){
                 console.log(res.status);
             });
             }
        }
    }
</script>
<style rel="stylesheet/less" lang="less">

        #login{
            width: 90%;
            margin: 20px auto 0px;
        }
        .row {
            position: relative;
            width: 100%;
            height: 50px;
            border-bottom:0.01rem solid #dddddd;
        .input-t {
            text-indent: 0px;
            padding: 0px;
            position: absolute;
            top: 50%;
            left: 33px;
            height: 40px;
            line-height: 40px;
            width: 90%;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-appearance: none;
        }
        .icon {
            position: absolute;
            top: 50%;
            height: 30px;
            width: 20px;
            margin-top: -15px;
            display: inline-block;
            background: url(../../assets/img/icon.png) no-repeat center;
            background-size: 14px auto;
            left: 8px;
        &.icon1 {
             background-position: 3px 5px;
         }
        &.icon2 {
             background-position: 3px -24px;
         }
        }
        .inner {
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0px;
            left: 0px;
        &:first-child {
             width: 80%;
         }
        &:nth-child(2) {
             width: 30%;
             left: 70%;
             font-size: 14px;
             border-left: 0.001rem solid #ddd;
         }
        .code-t{
            overflow: hidden;
            margin-top: 8px;
            display: inline-block;
            width: 100%;
            text-align: center;
            height: 34px;
            line-height: 36px;
            position: relative;
        }
        }
        }
        .btn {
            height: 46px;
            line-height: 46px;
            margin-top: 30px;
            background-color: #00c21d;
            color: white;
            cursor: pointer;
            text-align: center;
            border-radius: 23px;

        }
        .error {
            position: absolute;
            bottom: -24px;
            color: #f15353;
            font-size: 12px;
            left: 33px;
            width: 90%;
        }
</style>
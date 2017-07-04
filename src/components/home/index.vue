<template>
    <div class="page home" id="index">
        <div class="container">
            <el-row>
                <el-col :span="24"  class="row-cont">手机号
                    <div class="fr-cont">{{ (user.mobile-user.mobile%100000000)/100000000 }}****{{user.mobile%10000}}</div>
                </el-col>
            </el-row>
            <el-row >
                <el-col :span="24" class="row-cont"> <router-link to="/order/list">订单2331</router-link></el-col>
            </el-row>
            <el-row >
                <el-col :span="24" class="row-cont"><router-link to="/station/map">租赁点</router-link></el-col>
            </el-row>
            <el-row >
                <el-col :span="24" class="row-cont">优惠券11</el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    import conf from '../../assets/js/conf.js'
    import comFuc from '../../assets/js/common.min.js'


    export default{
        name: 'index',
        time:"time",
        data(){
            console.log(this.$store.state.user);
            return {
                user:this.$store.state.user,
                name: conf
            }
        },
        methods: {
            test(){

            }
    }
    }
</script>
<style rel="stylesheet/less" lang="less">
    .page.home#index {
    .row-cont {
        border-bottom: 0.01rem solid #ddd;
        position: relative;
        height: 50px;
        line-height: 50px;
        padding: 0px 1rem;
    .fr-cont {
        float: right;
        height: 50px;
        line-height: 50px;
        margin-right: 10px;
    }
    }
    }
</style>
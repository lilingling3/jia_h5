<template>
    <div id="order" class="show">
        <div class="container border-b">
            <el-row class="order-car-top border-b">
                <el-col :span="12"><div class="car-img-cont"><img src="https://gotest.win-sky.com.cn/photograph/75/45/7545247808503c5ba72fdbd0ac71d31900cfe920.png" /></div></el-col>
                <el-col :span="12" class="posr right-cont">
                    <div class="order-car-right-cont tblr-center ">
                        <p><span class="license-cont"><span class="license">京QW3973</span></span></p>
                        <p>帝豪EV</p>
                    </div>
                </el-col>
            </el-row>
            <el-row class="order-car-address">
                <el-col :span="24" class="posr">
                    <div class="name">
                        <p>
                            <span class="carstitle">取车</span>
                            <span class="cricle cricle1"></span>
                            <span class="point"></span>
                        </p>
                    </div>
                    <div class="sinfo">
                        <p class="sname">电子城科技大厦</p>
                        <p class="street">北京市朝阳区酒仙桥路甲12号电子城科技大厦地面停车场</p>
                    </div>
                </el-col>
                <el-col :span="24" class="posr">
                    <div class="name">
                        <p><span class="carstitle">还车</span><span class="cricle cricle2"></span></p>
                    </div>
                    <div class="sinfo  sinfo2">
                        <p class="sname">丽都维景酒店</p>
                        <p class="street">北京市朝阳区将台路6号丽都维景酒店地面停车场</p>
                        <span class="change-s">更改</span>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                user:this.$store.state.user,
                orderId:this.$route.params.orderId
            }
        },
        methods: {
            test(){
            }
        }
    }
</script>
<style rel="stylesheet/less" lang="less">
    #order.show {
        .container {

        }
        .order-car-top {
            height:90px;
            margin: 10px;
            .car-img-cont {
                text-align:center;
                img {
                    height: 90px;
                    max-width: 100%;
                }
            }
            .right-cont {
                height: 90px;
            }
            .order-car-right-cont {
                position: absolute;
                top:50%;
                left: 50%;
                p { padding-top: 2px; }
                .license-cont {
                    display: inline-block;
                    padding: 1px;
                    border: 1px solid #2b5ec7;
                    text-align: center;
                    border-radius: 4px;
                    .license{
                        word-break:keep-all;
                        white-space:nowrap;
                        display: inline-block;
                        padding: 1px 4px;
                        background-color: #2b5ec7;
                        color: white;
                        height: 20px;
                        line-height: 20px;
                        border-radius: 4px;
                        box-sizing: content-box;
                        font-size: 14px;
                    }
                }
            }
        }
    .order-car-address {
        margin: 10px;
        .name {
            position: absolute;
            left: 10px;
            top: 0px;
            width: 19%;
            height: 100%;
        }
       .cricle {
            display: inline-block;
            width: 20px;
            height: 20px;
            background: url(../../assets/img/showicon.png) no-repeat;
            background-size: 18px auto;
            margin-left: 6px;
        }
       .cricle1 {
           background-position: 0px -69px;
           position: absolute;
       }
    .cricle.cricle2 {
        background-position: 0px -108px;
        position: absolute;
    }
       .point {
           display: inline-block;
           width: 20px;
           position: absolute;
           height: 100%;
           background: url(../../assets/img/point.png) repeat-y;
           left: 42px;
           top: 20px;
           background-size: 1.5px auto;
       }
    .sinfo {
        padding-left: 72px;
        .sname {
            font-size: 16px;
        }
        .street {
            font-size: 14px;
            color: #727272;
            padding: 2px 0px 6px;
        }
    &.sinfo2 {
        padding-right: 63px;
        position: relative;
    .change-s {
        position: absolute;
        right: 0px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        padding: 0px 14px;
        background-color: white;
        border: 1px solid #00a83c;
        top: 50%;
        margin-top: -12.5px;
        border-radius: 30px;
        color: #00a83c;
        font-size: 14px;
    }
    }

    }
    }
    }

</style>
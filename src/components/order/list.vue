<template>
    <div id="list" class="page order"  v-infinite-scroll="loadMore" infinite-scroll-disabled="loadmoreimg" infinite-scroll-distance="10">
        <div class="container"    v-for="order in orders">
            <section class="mlr10 row-cont">
                <router-link :to="'/order/show/'+order.orderID" class="pos"></router-link>
                <el-row  class="border-b top-row pd10" >
                    <el-col :span="24">{{order.createTime}}<span   class="fr">查看</span></el-col>
                </el-row >
                <el-row class="pd10">
                    <el-col :span="8"><p class="sizemin">车牌</p><p>{{ order.rentalCar.license }}</p></el-col>
                    <el-col :span="8"><p class="sizemin">车型</p><p>{{ order.rentalCar.car.name }}</p></el-col>
                    <el-col :span="8"><p class="sizemin">状态</p><p> <orderStatus :status="order.status"></orderStatus></p></el-col>
                </el-row>
            </section>
        </div>

        <div type="loading" v-if="loading" text="数据加载中">数据加载中.......</div>
    </div>
</template>
<script>
    import orderStatus from './_order.status.vue'
    export default{
        name:"list",
        data(){
            return {
                page:0,
                orders:[],
                flagGetData:0,
                pageCount:0,
                temp:10,
                errorMsg:"",
                loading:false,
                items: [1,2,3],
                loadmoreimg: false

            }
        },
        methods: {
            getData(page){
                let _this = this;
                this.loading=true;
                this.loadmoreimg = true;
                this.$http.post('http://testys.cn/api/order/list',{ "userID":this.$store.state.user.userID,"page":_this.page+1},{emulateJSON:true}).then(function(res){
                    let data = res.body;
                    this.flagGetData=1;
                    if(data["errorCode"] != 0 ){
                        _this.errorMsg = data["errorMessage"];
                        this.loading=true;
                        return false;
                    }
                    _this.orders=_this.orders.concat(data["orders"]);
                    _this.page=data["page"];
                    _this.pageCount=data["pageCount"]
                    _this.loadmoreimg=_this.page==_this.pageCount ? true : false;
                    this.loading=false;

                },function(res){
                    this.loading=false;
                    this.loadmoreimg=false;
                });
            },
            loadMore(){
                if(this.flagGetData==0 || this.page<this.pageCount ){
                    this.getData();
                }
            }
        },
        components:{
            orderStatus
        }
    }
</script>
<style rel="stylesheet/less" lang="less">
    .page.order#list {

    .row-cont {
        margin-top: 10px;
        border: 0.01rem solid #ddd;
        position: relative;
        border-radius: 5px;
        position: relative;

    .pos {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0px;
        z-index: 10;
    }

    .fr-cont {
        float: right;
        height: 50px;
        line-height: 50px;
        margin-right: 10px;
    }

    }
    }
</style>
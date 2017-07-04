<template id="orderStatus">

    <span v-if ="status==199">已完成</span>
    <span v-else-if ="status==103">待支付</span>
    <span v-else-if ="status==102">租赁中</span>
    <span v-else-if ="status==101">未取车</span>
    <span v-else-if ="status==100">已取消</span>
    <span v-else></span>
</template>
<script>
    export default{
        name:"orderStatus",
        props: ['status'],
        data(){
            return {}
        }
    }
</script>
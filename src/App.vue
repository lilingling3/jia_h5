<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>


    export default {
        name: 'app',
        data() {
            return {}
        },
        methods: {},
        components: {
            //Vheader
        }

    }
</script>
<style>
    @import "assets/css/Init.css";
    #app {

        max-width: 650px;
        background: #fff;
        margin: 0 auto;
        overflow-x: hidden;
        overflow-y: hidden;
    }
</style>

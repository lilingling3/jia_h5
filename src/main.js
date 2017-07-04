import Vue from 'vue'
import App from './App.vue'
// 路由
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
// 导入路由配置
import routerConfig from './router.config.js'
//ajax
import VueResource from 'vue-resource'
//动画库
import './assets/css/animate.min.css';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'vue/dist/vue.js'
import   'jroll/build/jroll.min.js'
import VueInfinite  from  'jroll-vue-infinite/jroll-vue-infinite.js'

Vue.use(VueInfinite );
// mintui 库
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import Promise from 'bluebird';
Vue.use(Vuex)
Vue.use(Mint);

// 关联路由
Vue.use(VueRouter);
// 关联 全局 给每个组件添加方法
Vue.use(VueResource);
Vue.use(ElementUI);
// 创建路由
const router = new VueRouter(routerConfig)

router.beforeEach((to, from, next) => {
   // NProgress.start();
    if (to.path == '/login') {
        //store.commit('removeUsr')
    }
    let user = JSON.parse(sessionStorage.getItem('yunshanUser'));
    console.log("user:::",user);
    if (!user && to.path != '/login') {
        next({ path: '/login' })
    } else {
        store.commit('getUser')
        next()
    }
})



//console.log(store.state.count) // ->
new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App)
})



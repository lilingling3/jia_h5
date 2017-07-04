// 电影组件
import Movie from './components/movie/Movie.vue'
// 图书组件
import Books from './components/book/Books.vue'
// 广播组件
import Status from './components/status/Status.vue'
// 小组组件
import Group from './components/group/Group.vue'
// 搜索组件
import Search from './components/common/search.vue'
// 详细信息组件
import movieId from './components/movie/movie.id.vue'

import Login from './components/home/login.vue'
import index from './components/home/index.vue'
//订单
import orderList from './components/order/list.vue'
import orderShow from './components/order/show.vue'
//租赁点
import stationMap from './components/station/map.vue'

// 导出配置
export default {
    mode: 'history',//切换路径模式，变成history模式
    routes: [
        {path: '/login', component: Login},
        {path: '/index', component: index},
        {path: '/order/list', component: orderList},
        {path: '/order/show/:orderId', component: orderShow},
        {path: '/station/map', component: stationMap},
        {path: '*', redirect: '/login'}
    ]
}
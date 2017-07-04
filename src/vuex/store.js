import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

// 应用初始状态
const state = {
    count: 1,
    user:""
}

// 定义所需的 mutations
const mutations = {
    INCREMENT(state) {
        state.count++
    },
    DECREMENT(state) {
        state.count--
    },
    getUser(state){
        state.user=JSON.parse(sessionStorage.getItem('yunshanUser'));
    },
    removeUsr(state){
        state.user="";
        sessionStorage.removeItem('yunshanUser')
    }
}

// 创建 store 实例
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})


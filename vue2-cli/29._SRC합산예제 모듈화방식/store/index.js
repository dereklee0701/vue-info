import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)   // 순서 중요함

import countAbout from './count'
import personAbout from './person'

export default new Vuex.Store({
    modules:{
        countAbout,
        personAbout
    }
})
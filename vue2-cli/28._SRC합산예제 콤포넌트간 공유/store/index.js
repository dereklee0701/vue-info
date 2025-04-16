import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)   // 순서 중요함

const actions = {
    // incurement(context,value){
    //    context.commit('INCUREENT',value)
    // },
    // decurement(context,value){
    //    context.commit('DECUREMENT',value)
    // },
    incurementOdd(context,value){
        if(context.state.sum % 2){
            context.commit('INCUREENT',value)
        }
    },
    incurementWaite(context,value){
        setTimeout(() => {
            context.commit('INCUREENT',value)
        }, 500);
    }
}

const mutations = {
    INCUREENT(state,value){
        state.sum += value
    },
    DECUREMENT(state,value){
        state.sum -= value
    },
    ADD_PERSON(state,value){
        state.personList.unshift(value)
    }
}

const state = {
    sum:0,
    school:'서울대',
    student:'홍길동',
    personList:[
        {id:'001',name:'홍길동'}
    ]
}

const getters = {
    bigSum(state){
        return state.sum *10
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
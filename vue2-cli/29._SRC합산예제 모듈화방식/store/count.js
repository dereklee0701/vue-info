export default {
    namespaced:true,    // 이름으로 지정 허용
    actions:{
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
    },
    mutations:{
        INCUREENT(state,value){
            state.sum += value
        },
        DECUREMENT(state,value){
            state.sum -= value
        },
    },
    state:{
        sum:0,
        school:'서울대',
        student:'홍길동',
    },
    getters:{
        bigSum(state){
            return state.sum *10
        }
    },
}
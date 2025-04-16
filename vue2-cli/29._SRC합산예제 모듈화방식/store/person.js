
export default {
    namespaced:true,
    actions:{
        addHong(context,value){
            if(value.name.indexOf('홍') === 0) {
                context.commit('ADD_PERSON',value)
            } else {
                alert('홍씨만 입력 가능')
            }
        }
    },
    mutations:{
        ADD_PERSON(state,value){
            state.personList.unshift(value)
        }
    },
    state:{
        personList:[
            {id:'001',name:'홍길동'}
        ]
    },
    getters:{
        getFirstName(state){
            return state.personList[0].name
        }
    },
}
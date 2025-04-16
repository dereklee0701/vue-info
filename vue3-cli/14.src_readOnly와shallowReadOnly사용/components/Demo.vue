<template>
    <h4>{{person}}</h4>
    <h1>회원정보  </h1>
    <h3>이름 : {{name}}</h3>
    <h3>나이 : {{age}}</h3>
    <h3>연봉 : {{job.j1.salary}} 천만</h3>
    <button @click="name += '~'">이름변경</button>
    <button @click="age++">나이변경</button>
    <button @click="job.j1.salary += 0.5">연봉변경</button>
</template>

<script>
    import {ref,reactive,toRefs,readonly,shallowReadonly} from 'vue'
    export default {
        name:'Demo',
        setup() {
            let sum = ref(0)
            // let person = reactive({      
            let person = reactive({  // 1단계 [가벼운] 변화만 감지  job 감지 불가 
                name:'홍길동',
                age:20,
                job:{
                    j1:{
                        salary:3
                    }
                }
            })

            // person = readonly(person)   // 전체 수정 불가
            person = shallowReadonly(person)    // salary 만 수정 가능

            return {
                sum,
                ...toRefs(person)
            }
        },
    }
</script>

<style>

</style>
<template>
    <h3>x:{{x.y}}</h3>
    <button @click="x.y++">x++</button>
    <hr>
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
    import {ref,reactive,toRefs,shallowReactive,shallowRef} from 'vue'
    export default {
        name:'Demo',
        setup() {
            // let person = reactive({      
            let person = shallowReactive({  // 1단계 [가벼운] 변화만 감지  job 감지 불가 
                name:'홍길동',
                age:20,
                job:{
                    j1:{
                        salary:3
                    }
                }
            })

            // let x = ref({
            let x = shallowRef({    // 값은 변화 하는데 화면 랜더링 안함 , 치환 하면 화면 랜더링 됨
                y:0
            })

            return {
                person,
                x,
                ...toRefs(person)
            }
        },
    }
</script>

<style>

</style>
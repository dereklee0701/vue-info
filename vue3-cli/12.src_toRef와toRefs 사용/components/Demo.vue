<template>
    <h4>{{person}}</h4>
    <h1>회원정보</h1>
    <h3>이름 : {{name}}</h3>
    <h3>나이 : {{age}}</h3>
    <h3>연봉 : {{job.j1.salary}} 천만</h3>
    <button @click="name += '~'">이름변경</button>
    <button @click="age++">나이변경</button>
    <button @click="job.j1.salary += 0.5">연봉변경</button>
</template>

<script>
    import {reactive,toRef,toRefs} from 'vue'
    export default {
        name:'Demo',
        setup() {
            let person = reactive({
                name:'홍길동',
                age:20,
                job:{
                    j1:{
                        salary:3
                    }
                }
            })

            /* 
                잘못된 방식 : 화면은 변경 되는데 원 데이터 변경 안함 새 데이터를 화면에 보여줌
                    name:toRef(person.name,'name'), 
                    name:ref(person.name)
            */
            return {
                person,
                // name:toRef(person,'name'),
                // age:toRef(person,'age'),
                // salary:toRef(person.job.j1,'salary'),
                ...toRefs(person)
            }
        },
    }
</script>

<style>

</style>
<template>
    <h3>현재값 : {{sum}}</h3>
    <button @click="sum++">sum + 1</button>
    <hr>
    <h3>메시지 : {{msg}}</h3>
    <button @click="msg+='!'">msg+!</button>
    <hr>
    <h1>회원정보</h1>
    <h3>이름 : {{person.name}}</h3>
    <h3>나이 : {{person.age}}</h3>
    <h3>연봉 : {{person.job.j1.salary}} 천만</h3>
    <button @click="person.name += '~'">이름변경</button>
    <button @click="person.age++">나이변경</button>
    <button @click="person.job.j1.salary += 0.5">연봉변경</button>
</template>

<script>
    import {ref,reactive,watchEffect} from 'vue'
    export default {
        name:'Demo',
        // vue2 감시방식
/* 
        watch:{
            // 간약화
            // sum(nextVal,OldVal){
            //     console.log(nextVal,OldVal);
            // }

            // immediate : true,
            // deep : true,
            // sum:{
            //     handler(nextVal,OldVal){
            //         console.log(nextVal,OldVal);
            //     }
            // }
        },
         */
        setup() {
            let sum = ref(0)
            let msg = ref('hello')
            let person = reactive({
                name:'홍길동',
                age:20,
                job:{
                    j1:{
                        salary:3
                    }
                }
            })

            watchEffect(()=>{
                const x1 = sum.value
                const x2 = person.job.j1.salary
                console.log('watchEffect');
            })

            return {
                sum,
                msg,
                person
            }
        },
    }
</script>

<style>

</style>
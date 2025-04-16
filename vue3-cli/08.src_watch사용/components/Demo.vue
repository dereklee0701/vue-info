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
    import {ref,reactive,watch} from 'vue'
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

            // 방식1
            // watch(sum,(nextVal,oldVal)=>{
            //     console.log('변경감지',nextVal,oldVal);
            // })

            // 방식2
            // watch([sum,msg],(nextVal,oldVal)=>{
            //     console.log('변경감지',nextVal,oldVal);
            // })

            // 방식3
            // watch([sum,msg],(nextVal,oldVal)=>{
            //     console.log('변경감지',nextVal,oldVal);
            // },{
            //     immediate:true,
            //     deep:true
            // })

            /* ========================================================= */
            /* 
                객체감지 일 경우 nextVal,oldVal 감지 안됨 동일값 출력됨 
            */
           
            // watch(person,(nextVal,oldVal)=>{
            //     console.log('변경감지',nextVal,oldVal);
            // },{deep:true})   // 설정 무효, 

            // watch(()=>person.name,(nextVal,oldVal)=>{
            //     console.log('변경감지',nextVal,oldVal);
            // })

            // 객체 내부 별도로 감지 하면 가능함
            // watch([()=>person.name,()=>person.age],(nextVal,oldVal)=>{
            //     console.log('변경감지',nextVal,oldVal);
            // })

            // 객체 내부 객체 감지시 반드시 deep 설정 해야 감지함 단, 변경된 값은 감지 못함
            // watch(()=>person.job,(nextVal,oldVal)=>{
            //     console.log('변경감지',nextVal,oldVal);
            // },{deep:true})  // 설정 하면 감지는 되나 변경 전 후 데이터 감지 불가


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
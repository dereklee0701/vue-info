<template>
    <h1>회원정보</h1>
    <h3>name : {{person.name}}</h3>
    <h3>age : {{person.age}}</h3>
    <button @click="test">click</button>
</template>

<script>
    import {reactive} from 'vue'
    export default {
        name:'Demo',
        props:['school'],
        emits:['hello'],
        setup(props,context) {
            // console.log('setup #',this);    // this 는 undefind
            // console.log('props 전달 : ',props.school);
            // console.log(props,context);
            // console.log('---setup---',context.attrs)     //Vue2에서$attrs 와 같음
			// console.log('---setup---',context.emit)      //자체 이벤트 실행
			console.log('---setup---',context.slots)        //슬롯
            let person = reactive({
                name:'홍길동',
                age:20,
            })

            function test(){
                context.emit('hello',123)
            }

            // 반드시 리턴 해야 된다
            return {
                person,
                test
            }
        },
        // setup 함수가 최초로 실행됨
        /* beforeMount(){
            console.log('beforeMount @');
        } */
    }
</script>

<style>

</style>
<template>
    <div>
        <h1>{{msg}}</h1>
        <h3>이름 : {{name}}</h3>
        <h3>성별 : {{sex}}</h3>
        <h3>나이 : {{myAge+1}}</h3>
        <button @click="addAge">add Age</button>
    </div>
</template>

<script>
    export default {
        name:'School',
        data() {
            return {
                // name:'홍길동',
                // sex:'남자',
                // age:20,
                myAge : this.age,   // prop 로 전달 받은 값 변경 불가
                msg:'hello world'
            }
        },
        methods:{
            addAge(){
                this.myAge++
            }
        },
        // 간약선언
        //props:['name','age','sex']

        // 받는 변수 개설 선언
       /* props:{
            name:String,
            age:Number,
            sex:String
        } */

        props:{
            name:{
                type:String,
                require:true
            },
            age:{
                type:Number,
                default:19
            },
            sex:{
                type:String,
                require:true
            }
        }
    }
</script>

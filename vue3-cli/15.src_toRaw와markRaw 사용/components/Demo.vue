<template>
    <h1>회원정보  </h1>
    <h3>이름 : {{name}}</h3>
    <h3>나이 : {{age}}</h3>
    <h3>연봉 : {{job.j1.salary}} 천만</h3>
    <button @click="name += '~'">이름변경</button>
    <button @click="age++">나이변경</button>
    <button @click="job.j1.salary += 0.5">연봉변경</button>
    <hr>
    <h4>car info : {{person.car}}</h4>
    <button @click="checkToRow">toRow[원시상태변경]</button>
    <button @click="addCar">add car</button>
    <button @click="changeCar">changeCar</button>
</template>

<script>
    import {ref,reactive,toRefs,toRaw,markRaw} from 'vue'
    export default {
        name:'Demo',
        setup() {
            let sum = ref(0)
            let person = reactive({
                name:'홍길동',
                age:20,
                job:{
                    j1:{
                        salary:3
                    }
                }
            })

            function checkToRow (){
                const p = toRaw(person)
                console.log(p);
            }

            function addCar(){
                const car = {name:'기아',price:4000}
                // person.car = car    // 그냥 추가 하면 변경 가능 데이터
                person.car = markRaw(car) 
            }

            function changeCar() {
                if (person.car) {
                    person.car.name = '현대';
                }
            }            

            return {
                sum,
                ...toRefs(person),
                checkToRow,
                person,
                addCar,
                changeCar
            }
        },
    }
</script>

<style>

</style>
<template>
  <h1>회원정보</h1>
  <h3>name : {{person.name}}</h3>
  <h3>age : {{person.age}}</h3>
  <h3>직종 : {{person.job.type}}</h3>
  <h3>급여 : {{person.job.sale}}</h3>
  <h3>취미 : {{person.hobby}}</h3>
  <h3>test : {{person.job.a.b.c}}</h3>
  <button @click="changeInfo">정보변경</button>
</template>

<script>

  import {reactive} from 'vue'

  export default {
    name: 'App',
    setup(props) {

      let person = reactive({
        name:'홍길동',
        age:20,
        job:{
          type:'디자이너',
          sale:'200',
          a:{
            b:{
              c:123
            }
          }
        },
        hobby:['문신','술']
      })

      function changeInfo(){
        person.name = '사기다마'
        person.age = 33
        person.job.type = '개.발자'
        person.job.sale = '700'
        person.job.a.b.c = 789
        person.hobby[0] = '여행'
      }

      // 반드시 리턴 해야 된다
      return {
        person,
        changeInfo,
      }
    }
  }
</script>



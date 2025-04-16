<template>
  <h1>회원정보</h1>
  <h3>name : {{name}}</h3>
  <h3>age : {{age}}</h3>
  <h3>직종 : {{job.type}}</h3>
  <h3>급여 : {{job.sale}}</h3>
  <button @click="changeInfo">정보변경</button>
</template>

<script>

  import {ref} from 'vue'

  export default {
    name: 'App',
    setup(props) {
      let name = ref('홍길동')
      let age = ref(20)
      let job = ref({
        type:'디자이너',
        sale:'200'
      })

      function changeInfo(){
        name.value = '사기다마'
        age.value = 33
        job.value.type = '개.발자'
        job.value.sale = '700'
        console.log(name,age,job.value);
      }

      // 반드시 리턴 해야 된다
      return {
        name,
        age,
        changeInfo,
        job
      }
    }
  }
</script>



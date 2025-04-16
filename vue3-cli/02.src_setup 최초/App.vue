<template>
  <h1>hello vue3</h1>
  <h3>name : {{name}}</h3>
  <h3>age : {{age}}</h3>
  <button @click="sayHello">sayHello</button>
  <hr>
  <h1>hello vue2</h1>
  <h3>sex : {{sex}}</h3>
  <button @click="welCome">welCome</button>
  <hr>
  <h1>호환 체크</h1>
  <h3>vue2,3 동일 설정 a : {{a}}</h3>
  <button @click="showVue3">vue3에서vue2 콘솔확인</button>
  <button @click="showVue2">vue2에서vue3 콘솔확인</button>
</template>

<script>

  export default {
    name: 'App',
    // vue2 방식
    data() {
      return {
        sex:'남',
        let:20
      }
    },
    methods: {
      welCome(){
        alert(`this is welCome sex:${this.sex}`);
      },
      showVue2 () {
        console.log('vue2 sex = ',this.sex);
        console.log('vue3 name = ',this.name);
      }
    },
    // vue3 방식
    setup(props) {
      let name = '홍길동'
      let age = 20
      let a = 10

      function sayHello(){
        alert(`this is sayHello name:${name} , age:${age}`);
      }

      function showVue3 () {
        console.log('vue2 sex = ',this.sex);
        console.log('vue3 name = ',name);
      }

      // 반드시 리턴 해야 된다
      return {
        name,
        age,
        sayHello,
        a,
        showVue3
      }
    }
  }
</script>



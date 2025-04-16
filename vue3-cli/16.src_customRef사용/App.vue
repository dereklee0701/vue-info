<template>
  <input type="text" v-model="keyword">
  <h3>{{keyword}}</h3>
</template>

<script>

  import {ref,customRef} from 'vue'
  export default {
    name: 'App',
    setup() {

      function myRef (value){
        let timer;
        return customRef((track, trigger) => {
          return {
            get() {
              track(); // Vue에게 이 value 값을 추적
              return value;
            },
            set(newValue) {
              clearTimeout(timer);
              timer = setTimeout(() => {
                value = newValue;
                trigger(); // Vue에게 화면을 업데이트하도록 알림
              }, 300); // 300ms 간격으로 업데이트를 지연시킴
            }
          }
        });
      }

      // let keyword = ref('hello')  // 기본사용
      let keyword = myRef('hello')  // 기본사용


      return{keyword}
    }
  }
</script>



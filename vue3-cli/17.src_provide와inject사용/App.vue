<template>
  <div class="app">
    <h2>this is app  , {{name}}--{{price}}</h2>
    <Child/>
  </div>
</template>

<script>
  import Child from './componets/Child.vue'
  import {reactive,toRefs,provide} from 'vue'
  export default {
    name: 'App',
    components:{Child},
    setup() {
      let car = reactive({name:'현대',price:3000})
      // 후손들 한테 데이터 전달 
      // 바로 아래 [자식] 한테는 props 가 편함 provide 도 가능
      provide('car',car)    
      return{...toRefs(car)}
    }
  }
</script>

<style >
  .app{
		background-color: gray;
		padding: 10px;
	}
</style>

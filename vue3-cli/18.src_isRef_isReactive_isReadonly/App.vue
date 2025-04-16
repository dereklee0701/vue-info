<template>
  <div class="app">
    <h2>this is app  , {{name}}--{{price}}</h2>
    <Child/>
  </div>
</template>

<script>
  import {isProxy, isReactive, isReadonly, isRef, reactive,readonly,ref,toRefs} from 'vue'
  export default {
    name: 'App',
    setup() {
      let car = reactive({name:'현대',price:3000})
      let num = ref(0)
      let car2 = readonly(car)

      console.log(isRef(num));
      console.log(isReactive(car));
      console.log(isReadonly(car2));
      console.log(isProxy(car));

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

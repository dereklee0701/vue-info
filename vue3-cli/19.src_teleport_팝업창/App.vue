<template>
  <div class="app">
    <h2>this is app</h2>
    <Child/>
  </div>
</template>

<script>
  import Child from './componets/Child.vue'
  export default {
    name: 'App',
    components:{Child},
  }
</script>

<style >
  .app{
		background-color: gray;
		padding: 10px;
	}
</style>

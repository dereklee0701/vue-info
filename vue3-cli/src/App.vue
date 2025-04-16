<template>
  <div class="app">
    <h2>this is app</h2>
    <Suspense>
			<template v-slot:default>
				<Child/>
			</template>
			<template v-slot:fallback>
				<h3>loading...</h3>
			</template>
		</Suspense>
  </div>
</template>

<script>
  // import Child from './componets/Child.vue' 
  import { defineAsyncComponent } from 'vue'

  const Child = defineAsyncComponent(()=>import('./componets/Child'))
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

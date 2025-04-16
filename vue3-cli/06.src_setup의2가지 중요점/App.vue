<template>
  <Demo @hello="showHelloMsg" school='서울대'>
    <template v-slot:hehe>
      <span>hello</span>
    </template>
    <template v-slot:msg>
      <span>hello22</span>
    </template>
  </Demo>
</template>

<script>
  import Demo from './components/Demo.vue'  
  export default {
    name: 'App',
    components:{Demo},
    setup(props) {
      function showHelloMsg (value){
        alert(`show msg ${value}`);
      }

      return {
				showHelloMsg
			}
    }
  }
</script>



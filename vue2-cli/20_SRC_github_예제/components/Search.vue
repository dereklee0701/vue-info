<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWorld"
      />&nbsp;<button @click="getUsers">Search</button>
    </div>
  </section>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Search",
        data() {
            return {
                keyWorld:'',
            }
        },
        methods: {
            getUsers(){
                this.$bus.$emit('getUser',{isLoad:true,errMsg:'',users:[],isFirst:false})
                axios.get(`https://api.github.com/search/users?q=${this.keyWorld}`).then(
                    response=>{
                        this.$bus.$emit('getUser',{isLoad:false,errMsg:'',users:response.data.items})
                    },
                    error=>{
                        this.$bus.$emit('getUser',{isLoad:false,errMsg:error.message,users:[]})
                    }
                )
            }
        },
    };
</script>

<template>
  <div >
    <button @click="getStudent">학생 정보 요청</button>
    <button @click="getCar">차량 정보 요청</button>
  </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "App",
        methods: {
            getStudent(){
                axios.get('http://localhost:8080/user/students').then(
                    response=>{
                        console.log('success',response.data);
                    },
                    error=>{
                        console.log('error',error.message);
                    }
                )
            },
            getCar(){
                axios.get('http://localhost:8080/car/cars').then(
                    response=>{
                        console.log('success',response.data);
                    },
                    error=>{
                        console.log('error',error.message);
                    }
                )
            }
        },
    };
</script>

<template>
    <div class="demo">
        <h3>학교명 : {{name}}</h3>
        <h3>학교주소 : {{addr}}</h3>
    </div>
</template>

<script>
    export default {
        name:'School',
        data(){
            return {
                name:'서강대',
                addr:'서울' 
            }
        }
    }
</script>

<style>
    .demo{
        background-color: beige;
    }
</style>
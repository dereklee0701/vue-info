<template>
    <div class="demo">
        <h3>학교 : {{name}}</h3>
        <h3>주소 : {{addr}}</h3>
    </div>
</template>

<script>
    export default {
        name:'School',
        data() {
            return {
                name:'서울대',
                addr:'성수동',
            }
        },
    }
</script>

<style scoped>
    .demo{
        background-color: aqua;
    }
</style>
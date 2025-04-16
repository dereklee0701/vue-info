<template>
    <div >
        <h3>이름 : {{name}}</h3>
        <h3>성별 : {{sex}}</h3>
        <button @click="sendStudentName">sendToSchool_Data</button>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                name:'홍길동',
                sex:'남자',
            }
        },
        methods: {
            sendStudentName(){
                this.$bus.$emit('hello',this.name)
            }
        },
    }
</script>

<style scoped>
</style>

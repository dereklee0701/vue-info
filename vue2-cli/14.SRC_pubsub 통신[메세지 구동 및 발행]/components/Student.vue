<template>
    <div >
        <h3>이름 : {{name}}</h3>
        <h3>성별 : {{sex}}</h3>
        <button @click="sendStudentName">sendToSchool_Data</button>
    </div>
</template>

<script>

    import pubsub from 'pubsub-js'

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
                pubsub.publish('hello',999)
            }
        },
    }
</script>

<style scoped>
</style>

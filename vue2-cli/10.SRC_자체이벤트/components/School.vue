<template>
    <div >
        <h3>학교 : {{name}}</h3>
        <h3>주소 : {{addr}}</h3>
        <button @click="sendSchoolName">부모 함수로 값 전달(일반)</button>
    </div>
</template>

<script>
    export default {
        name:'School',
        props:['showSchoolName'],
        data() {
            return {
                name:'서울대',
                addr:'성수동',
            }
        },
        methods:{
            sendSchoolName(){
                this.showSchoolName(this.name)
            }
        }
    }
</script>

<style scoped>
</style>
<template>
    <div >
        <h3>학교 : {{name}}</h3>
        <h3>주소 : {{addr}}</h3>
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
        mounted(){
            this.$bus.$on('hello',(data)=>{
                console.log('this is school = ',data);
            })
        },
        beforeDestroy(){
            this.$bus.$off('hello')     // 전체 제거 금지 어떤거를 사용 햇으면 해당것 만 제거함
        }
    }
</script>

<style scoped>
</style>
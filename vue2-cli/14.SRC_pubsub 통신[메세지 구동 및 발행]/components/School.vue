<template>
    <div >
        <h3>학교 : {{name}}</h3>
        <h3>주소 : {{addr}}</h3>
    </div>
</template>

<script>

    import pubsub from 'pubsub-js'

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
            this.pid = pubsub.subscribe('hello',(msgName,data)=>{
                console.log('this is school = ',data , msgName);
            })
            /* this.$bus.$on('hello',(data)=>{
                console.log('this is school = ',data);
            }) */
        },
        beforeDestroy(){
            // this.$bus.$off('hello') 
            pubsub.unsubscribe(this.pid)
        }
    }
</script>

<style scoped>
</style>
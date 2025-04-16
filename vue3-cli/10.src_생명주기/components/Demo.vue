<template>
    <h3>현재값 : {{sum}}</h3>
    <button @click="sum++">sum + 1</button>
</template>

<script>
    import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'
    export default {
        name:'Demo',
        setup() {
            let sum = ref(0)

            console.log('@ setup');

            onBeforeMount(()=>{
                console.log('@ onBeforeMount');
            })
            onMounted(()=>{
                console.log('@ onMounted');
            })
            onBeforeUpdate(()=>{
                console.log('@ onBeforeUpdate');
            })
            onUpdated(()=>{
                console.log('@ onUpdated');
            })
            onBeforeUnmount(()=>{
                console.log('@ onBeforeUnmount');
            })
            onUnmounted(()=>{
                console.log('@ onUnmounted');
            })

            return {
                sum,
            }
        },
        // 생명주기 
        beforeCreate(){
           console.log('#beforeCreate'); 
        },
        created(){
           console.log('#created'); 
        },
        beforeMount(){
           console.log('#beforeMount'); 
        },
        mounted(){
           console.log('#mounted'); 
        },
        beforeUpdate(){
           console.log('#beforeUpdate'); 
        },
        updated(){
           console.log('#updated'); 
        },
        beforeDestroy() {
            console.log('#beforeDestroy');  // vue3에서 무효함
        },
        destroyed() {
            console.log('#destroyed');      // vue3에서 무효함
        },
        beforeUnmount(){
            console.log('#beforeUnmount'); 
        },
        unmounted() {
            console.log('#unmounted'); 
        },
    }
</script>

<style>

</style>
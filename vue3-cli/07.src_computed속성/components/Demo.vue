<template>
    <h1>회원정보</h1>
    성 :<input type="text" v-model="person.firstName">
    <br>
    명 :<input type="text" v-model="person.LastName">
    <br>
    성명 : {{person.fullName}}
    <br>
    <input type="text" v-model="person.fullName">
</template>

<script>
    import {reactive,computed} from 'vue'
    export default {
        name:'Demo',
        setup() {
            let person = reactive({
                firstName:'홍',
                LastName:'길동',
            })
            // 간단한방식
            // person.fullName = computed(()=>{
            //     return person.firstName + '-' + person.LastName
            // })

            person.fullName = computed({
                get(){
                    return person.firstName + '-' + person.LastName
                },
                set(value){
                    const nameArr = value.split('-')
                    person.firstName = nameArr[0]
                    person.LastName = nameArr[1]
                }
            })
            return {
                person,
            }
        },
    }
</script>

<style>

</style>
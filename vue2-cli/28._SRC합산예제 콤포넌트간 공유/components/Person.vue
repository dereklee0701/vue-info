<template>
    <div>
        <h2>회원</h2>
        <h4>COUNT SUM : {{sum}}</h4>
        <input type="text" v-model="name">
        <button @click="addPerson">추가</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
    </div>
</template>

<script>
    import { nanoid } from 'nanoid'
    export default {
        name:'Person',
        data() {
            return {
                name:''
            }
        },
        methods: {
            addPerson(){
                const p = {id:nanoid(),name:this.name}
                this.$store.commit('ADD_PERSON',p)
                this.name=''
            },
        },
        computed:{
            personList(){
                return this.$store.state.personList
            },
            sum(){
                return this.$store.state.sum
            }
        }
    }
</script>

<style>

</style>
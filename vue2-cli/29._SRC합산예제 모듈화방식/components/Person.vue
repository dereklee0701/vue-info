<template>
    <div>
        <h2>회원</h2>
        <h4>COUNT SUM : {{sum}}</h4>
        <h3>첫번재 회원 이름 : {{firstPerson}}</h3>
        <input type="text" v-model="name">
        <button @click="addPerson">추가</button>
        <button @click="addHong">홍씨만 추가</button>
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
                this.$store.commit('personAbout/ADD_PERSON',p)
                this.name=''
            },
            addHong(){
                const p = {id:nanoid(),name:this.name}
                this.$store.dispatch('personAbout/addHong',p)
            }
        },
        computed:{
            personList(){
                return this.$store.state.personAbout.personList
            },
            sum(){
                return this.$store.state.countAbout.sum
            },
            firstPerson(){
                return this.$store.getters['personAbout/getFirstName']
            }
        }
    }
</script>

<style>

</style>
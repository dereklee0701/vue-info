<template>
    <div>
        <h2>현재 합계 : {{$store.state.sum}}</h2>
        <h3>GETTERS DATA : {{$store.getters.bigSum}}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="incurement">+</button>
        <button @click="decurement">-</button>
        <button @click="incurementOdd">기수시 합산</button>
        <button @click="incurementWaite">딜레이 합산</button>
    </div>
</template>

<script>
    export default {
        name:'Count',
        data() {
            return {
                n:1,
            }
        },
        methods: {
            incurement () {
                this.$store.commit('INCUREENT',this.n)  // dispatch 제외 하고 직겁 commi 호출 해도 됨
            },
            decurement () {
                this.$store.commit('DECUREMENT',this.n) 
            },
            incurementOdd () {
                this.$store.dispatch('incurementOdd',this.n)
            },
            incurementWaite () {
                this.$store.dispatch('incurementWaite',this.n)
            },
        },  
    }
</script>

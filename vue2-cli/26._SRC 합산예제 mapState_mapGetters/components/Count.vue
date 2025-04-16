<template>
    <div>
        <h2>현재 합계 : {{sum}}</h2>
        <h3>GETTERS DATA : {{bigSum}}</h3>
        <h4>학교 : {{school}} / 학생 : {{student}}</h4>
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

    import {mapState,mapGetters} from 'vuex'

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
        computed :{
            // $store.state.xxx 를 읽음
            // ...mapState({sum:'sum',school:'school',student:'student'}), // 객체방식
            ...mapState(['sum','school','student']), // 배열 방식

            // $store.getter.xxx 를 읽음
            // ...mapGetters({bigSum:'bigSum'}),   // 객체방식
            ...mapGetters(['bigSum']),

        }
    }
</script>

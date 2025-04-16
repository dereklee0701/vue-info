<template>
    <div>
        <h2>현재 합계 : {{sum}}</h2>
        <h3>GETTERS DATA : {{bigSum}}</h3>
        <h4>학교 : {{school}} / 학생 : {{student}}</h4>
        <h4>PERSON LENGTH : {{personList.length}}</h4>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="incurement(n)">+</button>
        <button @click="decurement(n)">-</button>
        <button @click="incurementOdd(n)">기수시 합산</button>
        <button @click="incurementWaite(n)">딜레이 합산</button>
    </div>
</template>

<script>

    import {mapState,mapGetters,mapActions,mapMutations} from 'vuex'

    export default {
        name:'Count',
        data() {
            return {
                n:1,
            }
        },
        methods: {
            // dispatch 제외 하고 직겁 commi 호출 해도 됨
            // 해당방식 호출단 에서 값 전달 필수임 @click="incurement" == @click="incurement(x)"
            ...mapMutations({incurement:'INCUREENT',decurement:'DECUREMENT'}),  // 객체방식
            // store > mutations 의 함수와 이름이 동일할 시 
            // ...mapMutations(['incurement','decurement']),        // 배열방식

            // ...mapActions({incurementOdd:'incurementOdd',incurementWaite:'incurementWaite'}),   // 객체방식
            ...mapActions(['incurementOdd','incurementWaite']),  // 배열방식
        },
        computed :{
            // $store.state.xxx 를 읽음
            // ...mapState({sum:'sum',school:'school',student:'student'}), // 객체방식
            ...mapState(['sum','school','student','personList']), // 배열 방식

            // $store.getter.xxx 를 읽음
            // ...mapGetters({bigSum:'bigSum'}),   // 객체방식
            ...mapGetters(['bigSum']),

        }
    }
</script>

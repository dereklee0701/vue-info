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
        /* 
            namespace : true 설정 해야 앞 부분에 이름으로 구분 할수 있다
            설정 안하면 this.$store.state.personAbout.xxx 방식 사용
        */
        methods: {
            ...mapMutations('countAbout',{incurement:'INCUREENT',decurement:'DECUREMENT'}), 
            ...mapActions('countAbout',['incurementOdd','incurementWaite']),
        },
        computed :{
            ...mapState('countAbout',['sum','school','student']),
            ...mapState('personAbout',['personList']),

            ...mapGetters('countAbout',['bigSum']),
        }
    }
</script>

<template>
    <div>
        <h2>현재 합계 : {{sum}}</h2>
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
                sum:0
            }
        },
        methods: {
            incurement () {
                this.sum += this.n
            },
            decurement () {
                this.sum -= this.n
            },
            incurementOdd () {
                if(this.sum % 2){
                    this.sum += this.n
                }
            },
            incurementWaite () {
                setTimeout(() => {
                    this.sum += this.n
                }, 300);
            },
        },  
    }
</script>

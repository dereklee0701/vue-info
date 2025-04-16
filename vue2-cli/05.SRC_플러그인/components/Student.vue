<template>
    <div>
        <h3>이름 : {{name | mySplic}}</h3>
        <h3>성별 : {{sex}}</h3>
        <button @click="call">call fun</button>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                name:'홍길동asdas',
                sex:'남자',
            }
        },
        methods: {
            call(){
                this.demo()
            }
        },
    }
</script>

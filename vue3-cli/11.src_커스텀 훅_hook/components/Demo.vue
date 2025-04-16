<template>
    <h3>현재값 : {{sum}}</h3>
    <button @click="sum++">sum + 1</button>
    <hr>
    <h3>좌표 : x[{{point.x}}],y[{{point.y}}]</h3>
</template>

<script>
    import {ref} from 'vue'
    import usePoint from '../hooks/usePoint'
    export default {
        name:'Demo',
        setup() {
            let sum = ref(0)
            let point = usePoint()
            return {sum,point}
        },
    }
</script>

<style>

</style>
<template>
    <div>
        <h3 @click="showName">학교 : {{name}}</h3>
        <h3>주소 : {{addr}}</h3>
    </div>
</template>

<script>

    import {mixin,mixin2} from '../mixin'

    export default {
        name:'School',
        data() {
            return {
                name:'서울대',
                addr:'성수동',
            }
        },
        mixins:[mixin,mixin2],
        mounted() {
            console.log('test');
        },
    }
</script>

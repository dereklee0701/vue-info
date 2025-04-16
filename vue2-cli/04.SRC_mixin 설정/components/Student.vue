<template>
    <div>
        <h3 @click="showName">이름 : {{name}}</h3>
        <h3>성별 : {{sex}}</h3>
    </div>
</template>

<script>

    import {mixin} from '../mixin'

    export default {
        name:'Student',
        data() {
            return {
                name:'홍길동',
                sex:'남자',
                x:2
            }
        },
        mixins:[mixin]
    }
</script>

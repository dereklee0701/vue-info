<template>
    <div>
        <h3>학교 : {{name}}</h3>
        <h3>주소 : {{addr}}</h3>
        <input type="text" v-fbind:value="name">
    </div>
</template>

<script>
    export default {
        name:'School',
        data() {
            return {
                name:'서울대',
                addr:'성수동',
            }
        },
    }
</script>

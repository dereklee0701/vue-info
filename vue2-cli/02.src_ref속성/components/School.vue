<template>
    <div>
        <h3>학교명 : {{name}}</h3>
        <h3>주소지 : {{addr}}</h3>
    </div>
</template>

<script>
    export default {
        name:'School',
        data() {
            return {
                name:'서울대',
                addr:'경기도 포천시'
            }
        },
    }
</script>

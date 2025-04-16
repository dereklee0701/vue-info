<template>
    <ul>
        <li>msg id : {{this.$route.query.id}}</li>
        <li>msg title : {{this.$route.query.title}}</li>
    </ul>
</template>

<script>
    export default {
        name:'Detail',
    }
</script>

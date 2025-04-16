<template>
    <ul>
        <li>msg id : {{id}}</li>
        <li>msg title : {{title}}</li>
    </ul>
</template>

<script>
    export default {
        name:'Detail',
        props:['id','title']
    }
</script>

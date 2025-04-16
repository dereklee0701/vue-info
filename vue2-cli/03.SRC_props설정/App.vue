<template>
    <div>
        <Student name="홍길동" sex="남자" :age="20" />
    </div>
</template>

<script>
    import Student from './components/Student.vue'
    export default {
        name:'App',
        components:{Student},
    }
</script>
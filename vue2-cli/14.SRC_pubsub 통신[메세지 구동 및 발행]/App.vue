<template>
    <div>
        <h2>형</h2>
        <Student />
        <hr>
        <h2>동생</h2>
        <School />
    </div>
</template>

<script>
    import Student from './components/Student.vue'
    import School from './components/School.vue'

    export default {
        name:'App',
        components:{Student,School},
        methods: {
        },
        mounted (){
        },
    }
</script>
<template>
    <div class="page-header">
        <h2>Vue Router Demo</h2>
        <button @click="back">back</button>
        <button @click="forWord">forWord</button>
        <button @click="go">go</button>
    </div>
</template>

<script>
    export default {
        name:'Banner',
        methods: {
            back(){
                this.$router.back()
            },
            forWord(){
                this.$router.forward()
            },
            go(){
                this.$router.go(-3)
            },
        },
    }
</script>

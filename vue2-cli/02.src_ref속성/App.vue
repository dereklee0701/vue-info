<template>
    <div>
        <h2 ref="msg">{{msg}}</h2>
        <button @click="showDom" ref="but">getDOM</button>
        <School ref="sch"></School>
    </div>
</template>

<script>
    import School from './components/School.vue'
    export default {
        name:'App',
        components:{School},
        data() {
            return {
                msg:'hello'
            }
        },
        methods:{
            showDom(){
                console.log(this.$refs.msg);
                console.log(this.$refs.but);
                console.log(this.$refs.sch);
            }
        }
    }
</script>
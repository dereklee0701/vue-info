<template>
    <div>
        <!-- <Student v-on:showPapa="showStudentName" />  -->    <!-- 자체이벤트 1 -->
        <!-- <Student @showPapa="showStudentName" /> -->     <!-- 자체이벤트 위 와 동일함 -->
        <h1>this is app : student name is {{name}} </h1>
        <Student ref="showRef" @click.native="show"/>
        <hr>
        <School :showSchoolName="showSchoolName"/>
    </div>
</template>

<script>
    import Student from './components/Student.vue'
    import School from './components/School.vue'

    export default {
        name:'App',
        components:{Student,School},
        methods: {
            showSchoolName(name){
                console.log('school name = ' + name);
            },
            showStudentName(name,...parm){
                console.log('student name = ' + name,parm);
                this.name = name
            },
            show(){
                console.log('show');
            }
        },
        mounted (){
            this.$refs.showRef.$on('showPapa',this.showStudentName)
           // this.$refs.showRef.$$once('showPapa',this.showStudentName)  // 1회만 호출 , @showPapa.once 와 동일함
           // 일반 함수로 사용 하면 this 에 문제 있음 화살표 함수 사용 가능
            //    this.$refs.showRef.$on('showPapa',function(name,...parm){
            //         console.log('student name = ' + name,parm);
            //         this.name = name
            //    })
            /* this.$refs.showRef.$on('showPapa',(name,...parm)=>{
                console.log('student name = ' + name,parm);
                this.name = name
            }) */
        },
        data() {
            return {
                name:''
            }
        },
    }
</script>
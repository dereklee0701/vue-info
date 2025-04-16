<template>
    <div >
        <h3>학생명 : {{name}}</h3>
        <h3>학생나이 : {{age}}</h3>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data(){
            return {
                name:'홍길동',
                addr:23 
            }
        }
    }
</script>
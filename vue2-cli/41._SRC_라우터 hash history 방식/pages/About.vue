<template>
    <h2>this is about</h2>
</template>

<script>
    export default {
        name:'About',
        beforeRouteEnter: (to, from, next) => {
            console.log(sessionStorage.getItem('userId'));
            if(sessionStorage.getItem('userId') === 'test') {
                next()
            } else {
                alert('check your id')
            }
        },
        beforeRouteLeave (to, from, next) {
            console.log('beforeRouteLeave',to, from);
            next()
        }
    }
</script>
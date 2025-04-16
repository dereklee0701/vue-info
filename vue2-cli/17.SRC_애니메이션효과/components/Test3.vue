<template>
    <div>
        <button @click="isShow = !isShow">노출/비노출</button>
        <transition-group 
            appear
            name="animate__animated animate__bounce" 
			enter-active-class="animate__swing"
			leave-active-class="animate__backOutUp"
        >
            <h1 v-show="!isShow" key="1">HELLO</h1>
            <h1 v-show="isShow" key="2">안녕하세요</h1>
        </transition-group>
    </div>
</template>

<script>

    import 'animate.css'

    export default {
        name:'Test',
        data() {
            return {
                isShow:false
            }
        },
    }
</script>

<style scoped>
    h1{
		background-color: orange;
	}
</style>
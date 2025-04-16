<template>
    <div>
        <button @click="isShow = !isShow">노출/비노출</button>
        <transition-group name="hello" appear>
            <h1 v-show="!isShow" key="1">HELLO</h1>
            <h1 v-show="isShow" key="2">안녕하세요</h1>
        </transition-group>
    </div>
</template>

<script>
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
	/* 나가는 시점 , 진입 시점 [화면에서 들어오는 지점과 나가는 지점이 동일함]*/
	.hello-enter,.hello-leave-to{
		transform: translateX(-100%);
	}
	.hello-enter-active,.hello-leave-active{
		transition: 0.5s linear;
	}
	/* 진입 시점 , 나가는 시점 */
	.hello-enter-to,.hello-leave{
		transform: translateX(0);
	}
</style>
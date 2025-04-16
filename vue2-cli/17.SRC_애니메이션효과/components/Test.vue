<template>
    <div>
        <button @click="isShow = !isShow">노출/비노출</button>
        <transition name="hello" appear>
            <h1 v-show="isShow">HELLO</h1>
        </transition>
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

	.hello-enter-active{
		animation: atguigu 0.5s linear;
	}

	.hello-leave-active{
		animation: atguigu 0.5s linear reverse;
	}

	@keyframes atguigu {
		from{
			transform: translateX(-100%);
		}
		to{
			transform: translateX(0px);
		}
	}
</style>
<template>
    <button @click="isShow = true">팝업창 열기</button>
    <teleport to='body'>    <!-- 원하는 html 태그 혹은 #id 에 전송 -->
        <div class="mask" v-if="isShow">
            <div class="dialog" >
                <h2>제목</h2>
                <h5>내용1.......</h5>
                <h5>내용2.......</h5>
                <h5>내용3.......</h5>
                <h5>내용4.......</h5>
                <button @click="isShow = false">닫기</button>
            </div>
        </div>
    </teleport>
</template>

<script>
import { ref } from 'vue'
    export default {
        name:'Dialog',
        setup() {
            let isShow = ref(false)
            return{isShow}
        }
    }
</script>

<style>
    .mask{
		position: absolute;
		top: 0;bottom: 0;left: 0;right: 0;
		background-color: rgba(0, 0, 0, 0.5);
	}
	.dialog{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		text-align: center;
		width: 300px;
		height: 300px;
		background-color: green;
	}
</style>
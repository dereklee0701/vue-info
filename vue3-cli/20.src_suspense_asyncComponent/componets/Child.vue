<template>
    <div class="child">
        <h2>this is child</h2>
    </div>
</template>

<script>
    import {ref} from 'vue'
    export default {
        name:'Child',
        /* 
            Suspense , defineAsyncComponent 사용 안할시 async 로 처리불가
        */
        async setup(){
			let sum = ref(0)
			let p = new Promise((resolve,reject)=>{
				setTimeout(()=>{
					resolve({sum})
				},3000)
			})
			return await p
		}
    }
</script>

<style>
    .child{
		background-color: skyblue;
		padding: 10px;
	}
</style>
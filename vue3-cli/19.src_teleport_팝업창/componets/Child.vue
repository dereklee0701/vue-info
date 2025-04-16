<template>
    <div class="child">
        <h2>this is child</h2>
        <Son/>
    </div>
</template>

<script>
    import Son from './Son.vue'
    export default {
        name:'Child',
        components:{Son}
    }
</script>

<style>
    .child{
		background-color: skyblue;
		padding: 10px;
	}
</style>
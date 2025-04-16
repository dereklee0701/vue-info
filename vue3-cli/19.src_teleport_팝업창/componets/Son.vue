<template>
    <div class="son">
        <h2>this is son </h2>
        <DialogVue/>
    </div>
</template>

<script>
    import DialogVue from './Dialog.vue'
    export default {
        name:'Son',
        components:{DialogVue}
    }
</script>

<style>
	.son{
		background-color: orange;
		padding: 10px;
	}
</style>
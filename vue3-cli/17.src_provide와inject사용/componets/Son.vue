<template>
    <div class="son">
        <h2>this is son , {{car.name}}--{{car.price}}</h2>
    </div>
</template>

<script>
    import { inject } from 'vue'
    export default {
        name:'Son',
        setup() {
            let car = inject('car')
            return {car}
        }
    }
</script>

<style>
	.son{
		background-color: orange;
		padding: 10px;
	}
</style>
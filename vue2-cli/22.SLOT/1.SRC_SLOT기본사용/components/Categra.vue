<template>
    <div class="category">
        <h3>{{title}}</h3>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'Categora',
        props:['title']
    }
</script>

<style>
    .category{
		background-color: skyblue;
		width: 200px;
		height: 300px;
	}
	h3{
		text-align: center;
		background-color: orange;
	}
    video{
		width: 100%;
	}
	img{
		width: 100%;
	}
</style>
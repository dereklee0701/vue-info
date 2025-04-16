<template>
    <div class="category">
        <h3>{{title}}</h3>
        <slot :games="gagms"></slot>
    </div>
</template>

<script>
    export default {
        name:'Categora',
        props:['title'],
        data() {
            return {
            foods:["양꼬치","감자탕","분대찌개"],
            gagms:["배틀그라운드","리그 오브젠트","FIFA"]
            }
        },
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
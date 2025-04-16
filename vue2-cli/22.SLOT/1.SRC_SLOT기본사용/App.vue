<template>
  <div class="container">
    <Categra title="음식">
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
    </Categra>
    <Categra title="게임">
      <ul>
        <li v-for="(g,index) in gagms" :key="index">{{g}}</li>
      </ul>
    </Categra>
    <Categra title="영화">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </Categra>
  </div>
</template>

<script>
    import Categra from './components/Categra.vue'

    export default {
      name: "App",
      components: { Categra},
      data() {
        return {
          foods:["양꼬치","감자탕","분대찌개"],
          gagms:["배틀그라운드","리그 오브젠트","FIFA"]
        }
      },
    };
</script>

<style lang="css">
  .container{
		display: flex;
		justify-content: space-around;
	}
</style>

<template>
  <div class="container">
    <Categra title="음식">
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="" slot="center">
      <a slot="footer" href="www.naver.com">링크</a>
    </Categra>
    <Categra title="게임">
      <ul slot="center">
        <li v-for="(g,index) in gagms" :key="index">{{g}}</li>
      </ul>
      <div class="game" slot="footer">
        <a href="www.naver.com">링크</a>
        <a href="www.naver.com">링크</a>
      </div>
      
    </Categra>
    <Categra title="영화">
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <template v-slot:footer>
        <div class="game">
            <a href="www.naver.com">링크</a>
            <a href="www.naver.com">링크</a>
        </div>
        <h4>hello </h4>
      </template>
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
  .container,.game{
		display: flex;
		justify-content: space-around;
	}
  h4{
		text-align: center;
	}
</style>

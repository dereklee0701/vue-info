<template>
  <div class="container">
    <Categra title="게임">
      <template scope="games">
        <ul >
          <li v-for="(g,index) in games.games" :key="index">{{g}}</li>
        </ul>
      </template>
    </Categra>

    <Categra title="게임">
      <template scope="{games}">
        <ol >
          <li v-for="(g,index) in games" :key="index">{{g}}</li>
        </ol>
      </template>
    </Categra>

    <Categra title="게임">
      <template slot-scope="{games}">
        <h4 v-for="(g,index) in games" :key="index">{{g}}</h4>
      </template>
    </Categra>

  </div>
</template>

<script>
    import Categra from './components/Categra.vue'

    export default {
      name: "App",
      components: { Categra},
      
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

<template>
  <div class="row">
    <div class="card" v-show="info.users.length" v-for="user in info.users" :key="user.login">
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
    <h2 v-show="info.isFirst">WelCome</h2>
    <h2 v-show="info.isLoad">Loading...</h2>
    <h2 v-show="info.errMsg">{{info.errMsg}} </h2>
  </div>
</template>

<script>
    export default {
        name: "List",
        data() {
            return {
                info:{
                    isFirst:true,
                    isLoad:false,
                    errMsg:'',
                    users:[]
                }
            }
        },
        mounted(){
            this.$bus.$on('getUser',(userObj)=>{
                console.log(this);
                this.info = {...this.info,...userObj}
            })
        }
    };
</script>

<style>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
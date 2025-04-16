<template>
    <div>
        <ul>
            <li v-for="msg in msgs" :key="msg.id">
                <!-- <router-link :to="`/home/message/detail/${msg.id}/${msg.title}`">{{msg.title}}</router-link>&nbsp;&nbsp; -->
                <router-link :to="{
                    name:'detailForName',
                    params:{
                        id:msg.id,
                        title:msg.title
                    }
                }">
                {{msg.title}}
                </router-link>
                <button @click="showPush(msg)">push</button>
                <button @click="showReplace(msg)">replace</button>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name:'Message',
        data() {
            return {
                msgs:[
                    {id:'001',title:'message001'},
                    {id:'002',title:'message002'},
                    {id:'003',title:'message003'}
                ]
            }
        },
        methods: {
            showPush(msg){
                this.$router.push({
                        name:'detailForName',
                        params:{
                            id:msg.id,
                            title:msg.title
                        }
                    }
                )
            },
            showReplace(msg){
                this.$router.replace({
                        name:'detailForName',
                        params:{
                            id:msg.id,
                            title:msg.title
                        }
                    }
                )
            },
        },  
    }
</script>
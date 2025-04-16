<template>
    <li>
        <label>
        <input type="checkbox" :checked="todo.done" @change="handlerChange(todo.id)"/>
        <!-- 
            아래 방식 사용 금지 vmodel 은 양방향 임으로 체크값이 변경 되면 자동으로 부모의 값 변경함
            그러나 vue 원칙상 props 값 변경 하지 말라는 원칙으로 사용 하지 말것
         -->
        <!-- <input type="checkbox" v-model="todo.done"/> -->
        <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" @click="handlerDelete(todo.id)" >삭제</button>
    </li>
</template>

<script>

    import pubsub from 'pubsub-js';

    export default {
        name:'Item',
        props:['todo'],
        methods: {
            handlerChange(id){
                this.$bus.$emit('checkTodo',id)
            },
            handlerDelete (id){
                pubsub.publish('deleteTodo',id)
            }
        },
    }
</script>

<style scoped>
    /*item*/
    li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
    }

    li label {
    float: left;
    cursor: pointer;
    }

    li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
    }

    li button {
    float: right;
    display: none;
    margin-top: 3px;
    }

    li:before {
    content: initial;
    }

    li:last-child {
    border-bottom: none;
    }
    
    li:hover {
        background-color: #ddd;
    }

    li:hover button{
        display: block;
    }
</style>
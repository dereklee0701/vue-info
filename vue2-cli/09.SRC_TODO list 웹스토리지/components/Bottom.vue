<template>
    <div class="todo-footer" v-show="total">
        <label>
            <input type="checkbox" v-model="checkAll"/>
        </label>
        <span> <span>선택 {{checkedTodo}} </span> / 전체 {{total}} </span>
        <button class="btn btn-danger" @click="clearAll">선택 일괄 삭제</button>
    </div>
</template>

<script>
    export default {
        name:'Bottom',
        props:['todos','checkAllTodo','clearTodo'],
        computed:{
            total(){
                return this.todos.length
            },
            checkedTodo(){
                /* return this.todos.reduce( (pre,todo) => {
                    return pre + (todo.done ? 1 : 0)
                },0) */
                return this.todos.reduce((pre,todo) =>pre + (todo.done ? 1 : 0),0)
            },
            checkAll:{
               // return this.checkedTodo == this.total
               get(){
                    return this.checkedTodo == this.total
               },
               set(val){
                    this.checkAllTodo(val)
               }
            },
        },
        methods: {
           clearAll(){
            this.clearTodo()
           } 
        },
    }
</script>

<style scoped>
    /*footer*/
    .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
    }

    .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    }

    .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
    }

    .todo-footer button {
    float: right;
    margin-top: 5px;
    }
</style>
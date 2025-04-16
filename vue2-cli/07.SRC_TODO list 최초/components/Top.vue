<template>
    <div class="todo-header">
        <input type="text" v-model="title" placeholder="내용을 입력하고 enter 키누르세요." @keydown.enter="add"/>
    </div>
</template>

<script>

    import {nanoid} from 'nanoid'

    export default {
        name:'Top',
        data() {
            return {
                title:''
            }
        },
        props:['addTodo'],
        methods: {
            add(){
                if(!this.title.trim()) return alert('내용을 입력 하세요')
                const todo = {id:nanoid(),title:this.title,done:false}
                this.addTodo(todo)
                this.title = ''
            }
        },
    }
</script>

<style scoped>
    /*header*/
    .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
    }

    .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }
</style>
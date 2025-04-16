export const mixin = {
    methods:{
        showName(){
            alert(this.name)
        }
    },
    data() {
        return {
            x:100
        }
    },
    mounted() {
        console.log('hello');
    },
}

export const mixin2 = {
    data() {
        return {
            test:'sssss'
        }
    },
}
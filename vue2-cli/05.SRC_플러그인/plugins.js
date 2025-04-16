export default {
    install(Vue,x,y){

        console.log(x,y);

        Vue.filter('mySplic',function(value){
            return value.slice(0,4)
        })

        Vue.directive('fbind',{
            // 최초 진입시
            bind(element,binding){
                element.value = binding.value
            },
            // 화면 바인딩 시
            inserted(element,binding){
                element.focus()
            },
            // 데이터 변경시
            update(element,binding){
                element.value = binding.value
            }
        })

        Vue.mixin({
            data() {
                return {
                    x:100
                }
            },
        })

        Vue.prototype.demo = ()=> {alert('1')}
    }
}
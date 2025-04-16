import {onMounted,onBeforeUnmount, reactive } from 'vue'

export default function (){

    let point = reactive({
        x:0,
        y:0
    })

    function showPoint(event){
        point.x = event.pageX
        point.y = event.pageY
    }

    onMounted(()=>{
        window.addEventListener('click',showPoint)
    })
    onBeforeUnmount(()=>{
        window.removeEventListener('click',showPoint)
    })

    return point
}
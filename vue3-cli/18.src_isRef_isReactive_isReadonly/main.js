import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
// mount / unmount 가 존재함 , 기존 vue2 방식 지원 안함
/* 
const app = createApp(App)
app.mount('#app')

setTimeout(() => {
    app.unmount('#app')
}, 2000);
 */
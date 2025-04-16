import Vue from "vue";
import App from './App.vue';

import { mixin,mixin2 } from "./mixin";

Vue.config.productionTip = false;
// 전역으로 설정
// Vue.mixin(mixin)
// Vue.mixin(mixin2)

new Vue({
    el:'#app',
    render : h => h(App)
})
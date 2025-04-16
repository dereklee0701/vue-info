import Vue from 'vue' // 간약버전 임 으로 templet 가 없음
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
  /* 
    간약버전은 templet 없음으로 최종 빌드 후에 존재할 필요 없음으로 
    별도의 함수 사용함 빌드후 해당 함수 제거 됨
  */
  // 변화 과정
  // 1단계
  /* render(element){
    return element('h1','hello')
  } */
  // 2 단계
  /* render:(element)=>{
    return element('h1','hello')
  } */
  // 3 단계
  // render:element=>element('h1','hello')
})

# 01.SRC_분석

## CLI 디렉토리 구조

	├── node_modules 
	├── public
	│   ├── favicon.ico: 탭 아이콘
	│   └── index.html: 메인 페이지
	├── src
	│   ├── assets: 정적 리소스를 저장
	│   │   └── logo.png
	│   │── component: 컴포넌트를 저장
	│   │   └── HelloWorld.vue
	│   │── App.vue: 모든 컴포넌트를 총괄
	│   │── main.js: 엔트리 파일
	├── .gitignore: git 버전 관리에서 무시할 파일 설정
	├── babel.config.js: babel 설정 파일
	├── package.json: 애플리케이션 패키지 설정 파일 
	├── README.md: 애플리케이션 설명 파일
	├── package-lock.json: 패키지 버전 관리 파일
	├── vue.config.json: 뷰 설정관리 파일 (여기에 설정 한내용 우선으로 함 , 원 설정 삭제 안함)

## Vue의 버전에 관한 사항

1. `vue.js`와 `vue.runtime.xxx.js`의 차이점:
    1. `vue.js`는 Vue의 전체 버전으로, 코어 기능 + 템플릿 파서를 포함한다.
    2. `vue.runtime.xxx.js`는 실행 버전으로, 코어 기능만 포함하고, 템플릿 기능이 없다.
2. `vue.runtime.xxx.js`에는 템플릿 파서가 없기 때문에 `template`을 사용할 수 없으며, 대신 `render` 함수에서 받은 `createElement` 함수를 사용해야 한다.

## vue.config.js 설정 파일

1. `vue inspect > output.js`를 사용하면 Vue 프로젝트의 기본 설정을 확인할 수 있다.
2. `vue.config.js`를 사용해서 프로젝트 설정을 커스터마이즈할 수 있으며, 자세한 내용은 https://cli.vuejs.org 에서 확인할 수 있다. 

# 02.SRC_ref  속성

1. 요소나 자식 컴포넌트에 참조 정보를 등록하는 데 사용된다 (id의 대체자).
2. HTML 태그에 적용하면 실제 DOM 요소를 가져오고, 컴포넌트 태그에 적용하면 컴포넌트 인스턴스 객체를 가져온다.
3. 사용 방법:
    1. 식별자 부여: `<h1 ref="xxx">.....</h1>` 또는 `<School ref="xxx"></School>`
    2. 가져오기: `this.$refs.xxx`

# 03_SRC_props 설정 옵션

1. 기능: 컴포넌트가 외부에서 전달된 데이터를 수신할 수 있도록 한다.
2. 데이터 전달: ```<Demo name="xxx"/>```
3. 데이터 수신:

    1. 첫 번째 방법(수신 전용): ```props: ['name'] ```
    2. 두 번째 방법(타입 제한): ```props: {name: String}```
    3. 세 번째 방법(타입 제한, 필수 여부 제한, 기본값 지정):
        ```js
        props: {
            name: {
                type: String, // 타입
                required: true, // 필수 여부
                default: '홍길동' // 기본값
            }
        }
        ```
    > 참고: props는 읽기 전용이다. Vue는 내부적으로 props의 수정을 감지하며, 수정할 경우 경고가 발생. 비즈니스 요구에 따라 수정이 필요한 경우 props 내용을 data에 복사하여 데이터를 수정해야 한다.

# 04_SRC_mixin(믹스인)

1. 기능: 여러 컴포넌트에서 공유하는 구성 요소를 믹스인 객체로 추출할 수 있다.
2. 사용 방법:
    믹스인 정의 단계:

    ```
    {
        data(){....},
        methods:{....}
        ....
    }
    ```

    믹스인 사용 단계:

    - 전역 믹스인: `Vue.mixin(xxx)`
    - 지역 믹스인: `mixins:['xxx']`

# 05_SRC_플러그인

1. 기능: Vue를 강화하는 데 사용 된다.
2. 본질: install 메서드를 포함하는 객체다. install의 첫 번째 매개변수는 Vue이고, 두 번째부터는 플러그인 사용자가 전달하는 데이터 이다.
3. 플러그인 정의:

    ```js
    객체.install = function (Vue, options) {
        // 1. 전역 필터 추가
        Vue.filter(....)
    
        // 2. 전역 지시문 추가
        Vue.directive(....)
    
        // 3. 전역 mixin 구성
        Vue.mixin(....)
    
        // 4. 인스턴스 메서드 추가
        Vue.prototype.$myMethod = function () {...}
        Vue.prototype.$myProperty = xxxx
    }
    ```

4. 플러그인 사용: ```Vue.use()```

# 06_SRC_scoped 스타일

1. 작용:스타일 이 자기 영역에서 만 작용함 충돌 방지 
2. 사용:```<style scoped>```

# 07_SRC TodoList 사례 요약

1. 컴포넌트화 코딩 절차:

    ​(1). 정적 컴포넌트 분할: 컴포넌트는 기능별로 분할해야 하며, 이름은 HTML 요소와 충돌하지 않도록 해야 한다.

    ​(2). 동적 컴포넌트 구현: 데이터 저장 위치를 잘 고려해야 한다. 데이터가 하나의 컴포넌트에서만 사용되는지, 아니면 여러 컴포넌트에서 사용되는지:

    ​    1). 하나의 컴포넌트에서 사용: 해당 컴포넌트 자체에 저장하면 된다.

    ​    2). 여러 컴포넌트에서 사용: 공통 부모 컴포넌트에 저장해야 한다 (상태 상승/ 상태 향상).

    ​(3). 상호작용 구현: 이벤트 바인딩부터 시작한다.

2. props는 다음 경우에 적합하다:

    ​(1). 부모 컴포넌트 ==> 자식 컴포넌트 통신

    ​(2). 자식 컴포넌트 ==> 부모 컴포넌트 통신 (부모가 자식에게 함수를 먼저 전달)

3. v-model 사용 시 주의사항: v-model에 바인딩된 값은 props로 전달된 값이 아니어야 한다. props는 수정할 수 없기 때문이다!

4. props로 전달된 값이 객체 유형인 경우, 객체 속성을 수정해도 Vue는 오류를 발생시키지 않지만, 이렇게 하는 것은 권장되지 않는다.  

# 10_SRC 컴포넌트의 사용자 정의 이벤트

1. 한 컴포넌트에서 다른 컴포넌트로 통신하는 한 가지 방식으로, 주로 <strong style="color:red">자식 컴포넌트 ===> 부모 컴포넌트</strong>에 적용된다

2. 사용 예제: A가 부모 컴포넌트이고 B가 자식 컴포넌트일 때, B가 A에게 데이터를 전달하려면 A에서 B에 사용자 정의 이벤트를 바인딩해야 한다 (이벤트의 콜백은 A 안에 위치)

3. 사용자 정의 이벤트 바인딩 방법:

    1. 첫 번째 방법: 부모 컴포넌트에서 ```<Demo @atguigu="test"/>``` 또는 ```<Demo v-on:atguigu="test"/>```를 사용한다

    2. 두 번째 방법: 부모 컴포넌트에서 다음과 같이 설정함:
        ```js
        <Demo ref="demo"/>
        ......
        mounted(){
           this.$refs.xxx.$on('atguigu', this.test)
        }
        ``` [citation:1][citation:2][citation:5].

    3. 사용자 정의 이벤트가 한 번만 실행되도록 하려면 ```once``` 수정자나 ```$once``` 메서드를 사용할 수 있다

4. 사용자 정의 이벤트를 트리거하는 방법: ```this.$emit('atguigu', 데이터)```를 사용한다

5. 사용자 정의 이벤트를 언바인딩하는 방법: ```this.$off('atguigu')```를 사용한다

6. 컴포넌트에서 원시 DOM 이벤트를 바인딩하려면 ```native``` 수정자를 사용해야 한다

7. 주의: ```this.$refs.xxx.$on('atguigu', 콜백)```를 사용하여 사용자 정의 이벤트를 바인딩할 때, 콜백은 반드시 methods 안에 정의되거나 화살표 함수로 사용해야 한다. 그렇지 않으면 ```this```의 참조가 문제가 생길 수 있다 

# 12 글로벌 이벤트 버스 (GlobalEventBus)

1. 컴포넌트 간의 통신 방식으로, <span style="color:red">어떤 컴포넌트 간의 통신</span>에도 사용할 수 있다

2. 글로벌 이벤트 버스 설치 방법:

   ```js
   new Vue({
   	......
   	beforeCreate() {
   		Vue.prototype.$bus = this // 글로벌 이벤트 버스를 설치하고, $bus는 현재 애플리케이션의 vm이 된다.
   	},
       ......
   }) 
   ```

3. 이벤트 버스[$bus] 사용 방법:

   1. 데이터 수신: A 컴포넌트가 데이터를 수신하고자 할 때, A 컴포넌트에서 $bus에 사용자 정의 이벤트를 바인딩한다. 이벤트의 <span style="color:red">콜백은 A 컴포넌트 자신에 있다</span> 

      ```js
      methods(){
        demo(data){......}
      }
      ......
      mounted() {
        this.$bus.$on('xxxx', this.demo)
      }
      ```

   2. 데이터 제공: ```this.$bus.$emit('xxxx', 데이터)```를 사용한다

4. beforeDestroy 훅에서 $off를 사용하여 <span style="color:red">현재 컴포넌트에서 사용한</span> 이벤트를 언바인딩하는 것이 좋다  

# 14_SRC 메시지 구독 및 발행 (pubsub)

1.   임의의 구성 요소 간 통신에 적합한 방법이다.

2. 사용 단계:

   1. Pubsub 설치: ```npm i pubsub-js```

   2. 가져오기: ```import pubsub from 'pubsub-js'```

   3. 데이터 수신: A 구성 요소가 데이터를 수신하려면 A 구성 요소에서 메시지를 구독하고 구독 콜백을 A 구성 요소에 유지해야 한다.

      ```js
      methods(){
        demo(data){......}
      }
      ......
      mounted() {
        this.pid = pubsub.subscribe('xxx', this.demo) // 메시지 구독
      }
      ```

   4. 데이터 제공: ```pubsub.publish('xxx', 데이터)```

   5. 마지막에 beforeDestroy 에서 ```PubSub.unsubscribe(pid)```를 사용하여 구독을 취소 하는것을 추천한다.

# 16_SRC nextTick

1. 구문: ```this.$nextTick(콜백함수)```
2. 역할: 다음 DOM 업데이트가 끝난 후 지정된 콜백을 실행한다.
3. 언제 사용해야 하는가: 데이터를 변경한 후에 새로운 DOM에 기반한 작업을 수행해야 할 때는 `$nextTick`에서 지정된 콜백 함수를 실행해야 한다.

# 17_SRC Vue로 구현된 애니메이션

1. 기능: DOM 요소를 삽입, 업데이트 또는 제거할 때 적절한 시기에 요소에 클래스를 추가 한다.

2. 그림: <img src="https://img04.sogoucdn.com/app/a/100520146/5990c1dff7dc7a8fb3b34b4462bd0105" style="width:60%" />

3. 작성 방법:

   1. 스타일 준비:

      - 요소가 진입할 때의 스타일:
        1. v-enter: 진입 시작점
        2. v-enter-active: 진입 중
        3. v-enter-to: 진입 끝점
      - 요소가 떠날 때의 스타일:
        1. v-leave: 떠남 시작점
        2. v-leave-active: 떠남 중
        3. v-leave-to: 떠남 끝점

   2. ```<transition>```을 사용하여 전환할 요소를 감싸고 name 속성을 구성:

      ```vue
      <transition name="hello">
      	<h1 v-show="isShow">안녕하세요!</h1>
      </transition>
      ```

   3. 비고: 여러 요소를 전환해야 하는 경우, ```<transition-group>```을 사용하고 각 요소에 ```key``` 값을 지정해야 한다.

# 19_SRC vue-cli로 프록시 설정

### 방법 1

​    `vue.config.js` 파일에 다음과 같은 설정을 추가한다:

```js
devServer: {
  proxy: "http://localhost:5000"
}
```

설명:

1. 장점: 설정이 간단하며, 요청 리소스를 바로 프런트엔드(8080)로 보낼 수 있다.
2. 단점: 여러 프록시를 설정할 수 없으며, 요청이 프록시를 통해 전달될지 여부를 유연하게 제어할 수 없다.
3. 동작 방식: 위의 프록시 설정에 따라, 프런트엔드에서 존재하지 않는 리소스에 대한 요청이 있을 경우 해당 요청은 서버로 전달된다(우선적으로 프런트엔드 리소스를 매칭).

### 방법 2

​    `vue.config.js` 파일에 구체적인 프록시 규칙 설정을 추가한다:

```js
module.exports = {
  devServer: {
    proxy: {
      '/api1': { // '/api1'로 시작하는 모든 요청 경로에 매칭
        target: 'http://localhost:5000', // 프록시 타겟의 기본 경로
        changeOrigin: true,
        pathRewrite: { '^/api1': '' }
      },
      '/api2': { // '/api2'로 시작하는 모든 요청 경로에 매칭
        target: 'http://localhost:5001', // 프록시 타겟의 기본 경로
        changeOrigin: true,
        pathRewrite: { '^/api2': '' }
      }
    }
  }
}
/*
   changeOrigin을 true로 설정하면, 서버가 수신하는 요청 헤더의 호스트가 localhost:5000이 된다.
   changeOrigin을 false로 설정하면, 서버가 수신하는 요청 헤더의 호스트가 localhost:8080이 된다.
   changeOrigin의 기본값은 true이다.
*/
```

설명:

1. 장점: 여러 프록시를 설정할 수 있으며, 요청이 프록시를 통해 전달될지 여부를 유연하게 제어할 수 있다.
2. 단점: 설정이 다소 번거로우며, 요청 리소스에 접두사를 추가해야 한다.  

# 22 SOLT 슬롯

1. 역할: 부모 컴포넌트가 자식 컴포넌트에 HTML 구조를 삽입할 수 있도록 하는 것으로, 컴포넌트 간 통신의 한 방법이며 <strong style="color:red">부모 컴포넌트 ===> 자식 컴포넌트</strong>에 적합 하다.

2. 분류: 기본 슬롯, 명명된 슬롯, 범위 지정 슬롯

3. 사용 방법:

   1. 기본 슬롯:

      ```vue
      부모 컴포넌트:
              <Category>
                 <div>HTML 구조 1</div>
              </Category>
      자식 컴포넌트:
              <template>
                  <div>
                     <!-- 슬롯 정의 -->
                     <slot>기본 슬롯 내용...</slot>
                  </div>
              </template>
      ```

   2. 명명된 슬롯:

      ```vue
      부모 컴포넌트:
              <Category>
                  <template slot="center">
                    <div>HTML 구조 1</div>
                  </template>
      
                  <template v-slot:footer>
                     <div>HTML 구조 2</div>
                  </template>
              </Category>
      자식 컴포넌트:
              <template>
                  <div>
                     <!-- 슬롯 정의 -->
                     <slot name="center">기본 슬롯 내용...</slot>
                     <slot name="footer">기본 슬롯 내용...</slot>
                  </div>
              </template>
      ```

   3. 범위 지정 슬롯:

      1. 이해: <span style="color:red">데이터는 컴포넌트 자체에 있지만 데이터로 생성된 구조는 컴포넌트 사용자가 결정해야 한다.</span> (games 데이터는 Category 컴포넌트에 있지만 사용 데이터로 반복되는 구조는 App 컴포넌트가 결정한다)

      2. 구체적인 코딩:

         ```vue
         부모 컴포넌트:
         		<Category>
         			<template scope="scopeData">
         				<!-- ul 목록이 생성 -->
         				<ul>
         					<li v-for="g in scopeData.games" :key="g">{{g}}</li>
         				</ul>
         			</template>
         		</Category>
         
         		<Category>
         			<template slot-scope="scopeData">
         				<!-- h4 제목이 생성-->
         				<h4 v-for="g in scopeData.games" :key="g">{{g}}</h4>
         			</template>
         		</Category>
         자식 컴포넌트:
                 <template>
                     <div>
                         <slot :games="games"></slot>
                     </div>
                 </template>
         		
                 <script>
                     export default {
                         name:'Category',
                         props:['title'],
                         // 자식 컴포넌트 자체에 데이터가 있음
                         data() {
                             return {
                                 games:['레드 알러트','크로스파이어','댄스업','슈퍼 마리오']
                             }
                         },
                     }
                 </script>
         ```

## Vuex [npm install vuex@3.6.2 : 버전확인(vue2 == vuex3 | vue3 == vuex4)]

### 1. 개념

Vuex는 Vue 애플리케이션에서 여러 컴포넌트의 공유 상태를 집중 관리하는 Vue 플러그인이다. 이는 컴포넌트 간의 통신을 위한 방식이기도 하며 어느 컴포넌트끼리든 통신할 수 있다

### 2. 언제 사용하는가?

여러 컴포넌트가 데이터를 공유해야 할 때 

### 3. Vuex 환경 설정

1. 파일 생성: `src/store/index.js`

   ```js
   // Vue 핵심 라이브러리 임포트
   import Vue from 'vue'
   // Vuex 임포트
   import Vuex from 'vuex'
   // Vuex 플러그인 적용
   Vue.use(Vuex)

   // actions 객체 준비 - 컴포넌트 내 사용자 액션을 처리
   const actions = {}
   // mutations 객체 준비 - state 내 데이터 수정
   const mutations = {}
   // state 객체 준비 - 구체적 데이터 저장
   const state = {}

   // store 생성 및 내보내기
   export default new Vuex.Store({
       actions,
       mutations,
       state
   })
   ```

2. `main.js`에서 vm 생성 시 `store` 설정 추가

   ```js
   ......
   // store 임포트
   import store from './store'
   ......

   // vm 생성
   new Vue({
       el:'#app',
       render: h => h(App),
       store
   })
   ```

### 4. 기본 사용법

1. 초기화 데이터, `actions`, `mutations` 설정, `store.js` 파일 작성

   ```js
   // Vue 핵심 라이브러리 임포트
   import Vue from 'vue'
   // Vuex 임포트
   import Vuex from 'vuex'
   // Vuex 사용 설정
   Vue.use(Vuex)

   const actions = {
       // 컴포넌트 내 사용자 액션 처리
       jia(context, value){
           context.commit('JIA', value)
       },
   }

   const mutations = {
       // 증감 처리
       JIA(state, value){
           state.sum += value
       }
   }

   // 초기 데이터 설정
   const state = {
       sum: 0
   }

   // store 생성 및 내보내기
   export default new Vuex.Store({
       actions,
       mutations,
       state,
   })
   ```

2. 컴포넌트에서 Vuex의 데이터 읽기: `$store.state.sum`

3. 컴포넌트에서 Vuex의 데이터 수정: `$store.dispatch('action 정의 메소드', 데이터)` 또는 `$store.commit('mutation 정의 메소드', 데이터)`

   > 참고: 만약 네트워크 요청이나 기타 비즈니스 로직이 필요 없다면 `dispatch`를 생략하고 `commit`을 바로 사용할 수 있다 

### 5. getters 사용법

1. 개념: `state`의 데이터를 가공하여 사용할 때 `getters`를 사용할 수 있다

2. `store.js`에 `getters` 설정 추가

   ```js
   ......

   const getters = {
       bigSum(state){
           return state.sum * 10
       }
   }

   // store 생성 및 내보내기
   export default new Vuex.Store({
       ......
       getters
   })
   ```

3. 컴포넌트에서 데이터 읽기: `$store.getters.bigSum`

### 6. mapXxxx 함수의 4가지 

1. **mapState 메서드**: `state`의 데이터를 계산 속성으로 매핑하는 데 사용된다.

   ```js
   computed: {
       // mapState를 활용해 계산 속성 생성: sum, school, subject (객체 형태)
       ...mapState({ sum: 'sum', school: 'school', subject: 'subject' }),
       
       // mapState를 활용해 계산 속성 생성: sum, school, subject (배열 형태)
       ...mapState(['sum', 'school', 'subject']),
   },
   ```

2. **mapGetters 메서드**: `getters`의 데이터를 계산 속성으로 매핑하는 데 사용된다 .

   ```js
   computed: {
       // mapGetters를 활용해 계산 속성 생성: bigSum (객체 형태)
       ...mapGetters({ bigSum: 'bigSum' }),

       // mapGetters를 활용해 계산 속성 생성: bigSum (배열 형태)
       ...mapGetters(['bigSum'])
   },
   ```

3. **mapActions 메서드**: `actions`와 대화하는 메서드를 생성하는 데 사용된다. 즉, `store.dispatch(xxx)`를 포함하는 함수

   ```js
   methods: {
       // mapActions를 활용해 메서드 생성: incrementOdd, incrementWait (객체 형태)
       ...mapActions({ incrementOdd: 'jiaOdd', incrementWait: 'jiaWait' }),

       // mapActions를 활용해 메서드 생성: incrementOdd, incrementWait (배열 형태)
       ...mapActions(['jiaOdd', 'jiaWait'])
   }
   ```

4. **mapMutations 메서드**: `mutations`와 대화하는 메서드를 생성하는 데 사용된다. 즉, `store.commit(xxx)`를 포함하는 함수 

   ```js
   methods: {
       // mapMutations를 활용해 메서드 생성: increment, decrement (객체 형태)
       ...mapMutations({ increment: 'JIA', decrement: 'JIAN' }),
       
       // mapMutations를 활용해 메서드 생성: JIA, JIAN (배열 형태)
       ...mapMutations(['JIA', 'JIAN']),
   }
   ```

> 참고: `mapActions`와 `mapMutations`를 사용할 때, 매개변수를 전달해야 한다면 템플릿에서 이벤트를 바인딩할 때 매개변수를 함께 전달해야 한다. 
그렇지 않으면 매개변수는 이벤트 이다  

### 7. 모듈화 + 네임스페이스 [moudul + namespace]

1. 목적: 코드 유지보수를 용이하게 하고 다양한 데이터를 분류하여 명확하게 만든다.

2. ```store.js``` 수정

   ```javascript
   const countAbout = {
     namespaced:true,// 네임스페이스 활성화
     state:{x:1},
     mutations: { ... },
     actions: { ... },
     getters: {
       bigSum(state){
          return state.sum * 10
       }
     }
   }
   
   const personAbout = {
     namespaced:true,// 네임스페이스 활성화
     state:{ ... },
     mutations: { ... },
     actions: { ... }
   }
   
   const store = new Vuex.Store({
     modules: {
       countAbout,
       personAbout
     }
   })
   ```

3. 네임스페이스 활성화 후, 컴포넌트에서 state 데이터 읽기:

   ```js
   // 방법 1: 직접 읽기
   this.$store.state.personAbout.list
   // 방법 2: mapState를 사용하여 읽기:
   ...mapState('countAbout',['sum','school','subject']),
   ```

4. 네임스페이스 활성화 후, 컴포넌트에서 getters 데이터 읽기:

   ```js
   // 방법 1: 직접 읽기
   this.$store.getters['personAbout/firstPersonName']
   // 방법 2: mapGetters를 사용하여 읽기:
   ...mapGetters('countAbout',['bigSum'])
   ```

5. 네임스페이스 활성화 후, 컴포넌트에서 dispatch 호출:

   ```js
   // 방법 1: 직접 dispatch
   this.$store.dispatch('personAbout/addPersonWang',person)
   // 방법 2: mapActions 사용:
   ...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
   ```

6. 네임스페이스 활성화 후, 컴포넌트에서 commit 호출:

   ```js
   // 방법 1: 직접 commit
   this.$store.commit('personAbout/ADD_PERSON',person)
   // 방법 2: mapMutations 사용:
   ...mapMutations('countAbout',{increment:'JIA',decrement:'JIAN'}),
   ```

## 라우팅 [npm i vue-router@3 버전 확인 필요]

1. 이해: 라우팅(route)은 일련의 매핑 관계(key-value)이며, 여러 라우팅을 관리하기 위해서는 라우터(router)가 필요한다.
2. 프론트엔드 라우팅: key는 경로, value는 컴포넌트 이다.

### 1. 기본 사용법

1. `vue-router` 설치, 명령어: ```npm i vue-router```

2. 플러그인 적용: ```Vue.use(VueRouter)```

3. 라우터 구성 작성하기:

   ```js
   // VueRouter 불러오기
   import VueRouter from 'vue-router'
   // 라우팅할 컴포넌트들 불러오기
   import About from '../components/About'
   import Home from '../components/Home'

   // 라우터 인스턴스 객체 생성, 라우트 규칙 관리
   const router = new VueRouter({
       routes:[
           {
               path:'/about',
               component:About 
           },
           {
               path:'/home',
               component:Home 
           }
       ]
   })

   // 라우터 객체 내보내기
   export default router
   ```

4. 라우팅 변경 (active-class로 강조 스타일 지정 가능)

   ```vue
   <router-link active-class="active" to="/about">About</router-link>
   ```

5. 표시 위치 지정

   ```vue
   <router-view></router-view>
   ```

### 2. 몇 가지 주의사항

1. 라우트 컴포넌트는 일반적으로 `pages` 폴더에, 일반 컴포넌트는 `components` 폴더에 저장 한다.
2. 라우팅을 통해 “숨겨진” 라우트 컴포넌트는 기본적으로 제거되며 필요할 때 다시 마운트 된다.
3. 각 컴포넌트는 자신의 라우트 정보를 저장하는 ` $route ` 속성을 가지고 있다.
4. 전체 애플리케이션에는 하나의 라우터만 있으며, 컴포넌트의 ` $router ` 속성을 통해 접근할 수 있다.

### 3. 다중 레벨 라우팅

1. 라우트 규칙 설정, `children` 옵션 사용:

   ```js
   routes:[
       {
           path:'/about',
           component:About,
       },
       {
           path:'/home',
           component:Home,
           children:[ // children 옵션을 통해 하위 라우트 구성
               {
                   path:'news', // 여기서 절대 /news 를 쓰면 안 된다.
                   component:News
               },
               {
                   path:'message', // 여기서 절대 /message 를 쓰면 안 된다.
                   component:Message
               }
           ]
       }
   ]
   ```

2. 경로로 이동할 때 (전체 경로 작성 필요):

   ```vue
   <router-link to="/home/news">News</router-link>
   ```  

### 4. 라우터의 Query 파라미터

1. 파라미터 전달

   ```vue
   <!-- Query 파라미터를 전달하며 이동, to의 문자열 방식 -->
   <router-link :to="/home/message/detail?id=666&title=hello">이동</router-link>
   				
   <!-- Query 파라미터를 전달하며 이동, to의 객체 방식 -->
   <router-link 
   	:to="{
   		path:'/home/message/detail',
   		query:{
   		   id:666,
		   title:'你好'
   		}
   	}"
   >이동</router-link>
   ```

2. 파라미터 수신:

   ```js
   $route.query.id
   $route.query.title
   ```

### 5. 네임드 라우트

1. 역할: 라우트의 이동을 간소화할 수 있다.

2. 사용 방법

   1. 라우트에 이름 지정:

      ```js
      {
      	path:'/demo',
      	component:Demo,
      	children:[
      		{
      			path:'test',
      			component:Test,
      			children:[
      				{
					    name:'hello', // 라우트에 이름 붙이기
      					path:'welcome',
      					component:Hello,
      				}
      			]
      		}
      	]
      }
      ```

   2. 이동 간소화:

      ```vue
      <!-- 간소화 전, 전체 경로를 작성해야 한다. -->
      <router-link to="/demo/test/welcome">이동</router-link>
      
      <!-- 간소화 후, 이름으로 바로 이동 -->
      <router-link :to="{name:'hello'}">이동</router-link>
      
      <!-- 간소화된 방식으로 파라미터 전달 -->
      <router-link 
      	:to="{
      		name:'hello',
      		query:{
      		   id:666,
			  title:'你好'
      		}
      	}"
      >이동</router-link>
      ```

### 6. 라우트의 Params 파라미터

1. 라우트 구성 시 params 파라미터 수신 선언

   ```js
   {
   	path:'/home',
   	component:Home,
   	children:[
   		{
   			path:'news',
   			component:News
   		},
   		{
   			component:Message,
   			children:[
   				{
   					name:'xiangqing',
   					path:'detail/:id/:title', // 자리 표시자를 사용하여 params 파라미터 수신 선언
   					component:Detail
   				}
   			]
   		}
   	]
   }
   ```

2. 파라미터 전달

   ```vue
   <!-- Params 파라미터를 전달하며 이동, to의 문자열 방식 -->
   <router-link :to="/home/message/detail/666/你好">이동</router-link>
   				
   <!-- Params 파라미터를 전달하며 이동, to의 객체 방식 -->
   <router-link 
   	:to="{
   		name:'xiangqing',
   		params:{
   		   id:666,
		   title:'hello'
   		}
   	}"
   >이동</router-link>
   ```

   > 주의: params 파라미터를 전달할 때, to의 객체 방식을 사용할 경우 path 설정을 사용할 수 없으며, 반드시 name을 사용해야 한다

3. 파라미터 수신:

   ```js
   $route.params.id
   $route.params.title
   ```  

### 7. 라우터의 props 설정

​	역할: 라우트 컴포넌트가 파라미터를 더 편리하게 받을 수 있게 한다.

```js
{
	name:'xiangqing',
	path:'detail/:id',
	component:Detail,

	// 첫 번째 방법: props 값이 객체일 때, 객체의 모든 key-value 조합이 props를 통해 Detail 컴포넌트로 전달 된다
	// props:{a:900}

	// 두 번째 방법: props 값이 불리언일 때, true이면 라우터가 받은 모든 params 파라미터가 props를 통해 Detail 컴포넌트로 전달 된다
	// props:true
	
	// 세 번째 방법: props 값이 함수일 때, 함수가 반환하는 객체의 각 key-value 조합이 props를 통해 Detail 컴포넌트로 전달 된다
	props(route){
		return {
			id:route.query.id,
			title:route.query.title
		}
	}
}
```

### 8. ```<router-link>```의 replace 속성

1. 역할: 라우터 이동 시 브라우저의 히스토리 기록 방식을 제어 한다.
2. 브라우저의 히스토리 기록에는 두 가지 방식이 있다: ```push```와 ```replace```로, ```push```는 히스토리 기록을 추가하고, ```replace```는 현재 기록을 교체 한다. 라우터 이동 시 기본값은 ```push``` 이다.
3. ```replace``` 모드 활성화 방법: ```<router-link replace .......>News</router-link>```

### 9. 프로그래밍 방식의 라우트 네비게이션

1. 역할: ```<router-link>```를 사용하지 않고 라우터 이동을 구현하여 라우터 이동을 더욱 유연하게 한다.

2. 구체적인 코드:

   ```js
   //$router의 두 가지 API
   this.$router.push({
   	name:'xiangqing',
   		params:{
   			id:xxx,
   			title:xxx
   		}
   })
   
   this.$router.replace({
   	name:'xiangqing',
   		params:{
   			id:xxx,
   			title:xxx
   		}
   })
   this.$router.forward() // 앞으로 가기
   this.$router.back() // 뒤로 가기
   this.$router.go() // 앞으로 가거나 뒤로 가기
   ```  

### 10. 캐시된 라우터 컴포넌트

1. 역할: 표시되지 않는 라우터 컴포넌트를 유지하여 파괴되지 않도록 한다.

2. 구체적인 코드 예시:

   ```vue
   <keep-alive include="News"> 
       <router-view></router-view>
   </keep-alive>
   ```

### 11. 두 가지 새로운 생명주기 훅

1. 역할: 라우터 컴포넌트에 특화된 두 가지 훅으로, 라우터 컴포넌트의 활성 상태를 캡처하는 데 사용 된다.
2. 구체적인 이름:
   1. `activated`: 라우터 컴포넌트가 활성화될 때 트리거 된다.
   2. `deactivated`: 라우터 컴포넌트가 비활성화될 때 트리거 된다.

### 12. 라우터 가드

1. 역할: 라우터에 대한 권한을 제어하는 역할을 한다.

2. 분류: 전역 가드, 독점 가드, 컴포넌트 내부 가드

3. 전역 가드:

   ```js
   // 전역 전위 가드: 초기화 시 실행되고, 매번 라우터 전환 전에 실행됨
   router.beforeEach((to, from, next) => {
   	console.log('beforeEach', to, from);
   	if (to.meta.isAuth) { // 현재 라우터가 권한 제어가 필요한지 판단
   		if (localStorage.getItem('school') === 'atguigu') { // 권한 제어의 구체적인 규칙
   			next(); // 통과
   		} else {
   			alert('권한이 없습니다.');
   			// next({name: 'guanyu'});
   		}
   	} else {
   		next(); // 통과
   	}
   });

   // 전역 후위 가드: 초기화 시 실행되며, 매번 라우터 전환 후에 실행됨
   router.afterEach((to, from) => {
   	console.log('afterEach', to, from);
   	if (to.meta.title) { 
   		document.title = to.meta.title; // 웹 페이지 제목 수정
   	} else {
   		document.title = 'vue_test';
   	}
   });
   ```

4. 독점 가드:

   ```js
   beforeEnter(to, from, next) {
   	console.log('beforeEnter', to, from);
   	if (to.meta.isAuth) { // 현재 라우터가 권한 제어가 필요한지 판단
   		if (localStorage.getItem('school') === 'atguigu') {
   			next();
   		} else {
   			alert('권한이 없습니다.');
   			// next({name: 'guanyu'});
   		}
   	} else {
   		next();
   	}
   }
   ```

5. 컴포넌트 내부 가드:

   ```js
   // 진입 가드: 라우터 규칙을 통해 이 컴포넌트에 진입할 때 호출됨
   beforeRouteEnter (to, from, next) {
   },
   // 떠나는 가드: 라우터 규칙을 통해 이 컴포넌트를 떠날 때 호출됨
   beforeRouteLeave (to, from, next) {
   }
   ```

### 13. 라우터의 두 가지 작동 모드

1. URL에서 해시값이란 무엇인가? — # 및 그 뒤의 내용이 해시값이다.
2. 해시값은 HTTP 요청에 포함되지 않는다, 즉: 해시값은 서버에 전달되지 않는다.
3. 해시 모드:
   1. 주소에 항상 # 기호가 포함되어 있어 미관상 좋지 않다.
   2. 나중에 주소를 제3자 모바일 앱을 통해 공유할 때, 앱이 엄격하게 검증한다면 주소가 유효하지 않다고 표시될 수 있다.
   3. 호환성이 좋다.
4. 히스토리 모드:
   1. 주소가 깔끔하고 보기 좋다.
   2. 해시 모드와 비교해 호환성이 약간 떨어진다.
   3. 애플리케이션을 배포하고 사용할 때 백엔드 지원이 필요하며, 새로고침 시 서버의 404 문제를 해결해야 한다.  
# 1. Vue 3.0 프로젝트 생성

## 1. Vue CLI를 사용하여 생성


```bash
## @vue/cli 버전 확인하여 4.5.0 이상인지 확인
vue --version
## @vue/cli 설치 또는 업그레이드
npm install -g @vue/cli
## 프로젝트 생성
vue create vue_test
## 시작
cd vue_test
npm run serve
```

## 2. Vite를 사용하여 생성

Vite 공식 웹사이트: https://vitejs.dev/

- Vite란? — 새로운 세대의 프런트엔드 빌드 도구.
- 다음은 장점입니다:
  - 개발 환경에서 번들링이 필요 없으므로 빠른 콜드 스타트(Cold Start) 가능.
  - 가벼우며 빠른 핫 모듈 교체(HMR).
  - 진정한 온디맨드 컴파일로 전체 앱을 기다릴 필요 없음.

```bash
## 프로젝트 생성
npm init vite-app <프로젝트명>
## 프로젝트 폴더로 이동
cd <프로젝트명>
## 의존성 설치
npm install
## 실행
npm run dev
```

## 2. 자주 사용되는 Composition API

공식 문서: [Vue.js 공식 홈페이지](https://v3.vuejs.org/guide/composition-api-introduction.html)

## 1. 시작을 알리는 setup

1. 이해: Vue3.0에서 새로운 구성 옵션으로, 함수 값을 보유.
2. setup은 모든 <strong style="color:#DD5145">Composition API(구성 API)</strong>의 <i style="color:gray;font-weight:bold">" 공연 무대 "</i>이다.
4. 컴포넌트에서 사용되는 데이터, 메소드 등은 모두 setup에 구성되어야 한다.
5. setup 함수의 두 가지 반환 값:
   1. 객체를 반환하면, 객체 내의 속성, 메소드는 템플릿에서 직접 사용할 수 있다. (중요한 부분!)
   2. <span style="color:#aad">렌더링 함수를 반환하면: 원하는 렌더링 내용을 사용자 정의할 수 있다. (이해)</span>
6. 주의점:
   1. Vue 2.x 구성(data, methods, computed 등)과 혼용하지 않는 것이 좋다.
      - Vue 2.x 구성(data, methods, computed 등)에서는 setup의 속성, 메소드에 접근할 수 있다.
      - 그러나 setup에서는 Vue 2.x 구성(data, methods, computed 등)에 접근할 수 없다.
      - 이름이 충돌하는 경우, setup이 우선이다.
   2. setup은 async 함수가 될 수 없다. 왜냐하면 반환 값은 더 이상 객체가 아니라 promise이기 때문에 템플릿에서 반환 객체의 속성을 볼 수 없다. (나중에 Promise 인스턴스를 반환할 수 있지만, Suspense와 비동기 컴포넌트의 협력이 필요하다)

## 2. ref 함수

- 역할: 반응성을 갖는 데이터를 정의한다.
- 문법: ```const xxx = ref(initValue)```
  - 반응성 데이터를 포함하는 <strong style="color:#DD5145">참조 객체(reference 객체, 간단히 ref 객체)</strong>를 생성한다.
  - JS에서 데이터 조작: ```xxx.value```
  - 템플릿에서 데이터 읽기: ```.value```를 사용하지 않고, 단순히: ```<div></div>```
- 비고:
  - 받는 데이터 유형: 기본 유형이거나 객체 유형이 될 수 있다.
  - 기본 유형 데이터: 반응성은 여전히 ```Object.defineProperty()```의 ```get```과 ```set```으로 처리된다.
  - 객체 유형 데이터: 내부에서 Vue3.0의 새 함수인 ```reactive``` 함수에 의존한다.

## 3. reactive 함수

- **역할**: <strong style="color:#DD5145">객체 타입</strong>의 반응형 데이터를 정의 (기본 타입은 사용하지 않고 ```ref``` 함수를 사용)
- **문법**: ```const proxyObj = reactive(srcObj)``` - 객체(또는 배열)를 받아 <strong style="color:#DD5145">프록시 객체 (Proxy 인스턴스 객체, 줄여서 프록시 객체)</strong>를 반환
- reactive로 정의된 반응형 데이터는 deep 설정을 가진다.
- 내부적으로 ES6의 Proxy를 기반으로 구현되어, 프록시 객체를 통해 소스 객체 내부의 데이터를 조작

## 4. Vue3.0의 반응형 원리

### Vue2.x의 반응형

- **구현 원리**:
  - **객체 타입**: ```Object.defineProperty()```로 속성의 읽기, 수정 인터셉트 (데이터 감지).
  - **배열 타입**: 배열의 업데이트 메서드를 재정의하여 인터셉트.
    ```js
    Object.defineProperty(data, 'count', {
        get () {}, 
        set () {}
    })
    ```

- **문제점**:
  - 속성 추가, 삭제 시 화면이 업데이트되지 않음.
  - 인덱스를 통해 배열을 수정할 때 화면이 자동으로 업데이트되지 않음.
   ```js
    // vue2 방식 이렇게 요소 변경 해야 화면에 랜더링 한다
    // this.xxx.name = 남 이런 방식은 데이터 는 변경 하엿으나 화면 랜더링 안됨 
    $this.$set(this.xxx,'sex','남')
    Vue.set(this.xxx,'sex','남')
    $this.$delete(this.xxx,'sex')
    Vue.delete(this.xxx,'sex')
    $this.$set(this.xxx[0],'배열수정')
    this.xxx.splice(0,1,'배열수정')
   ```
### Vue3.0의 반응형

- **구현 원리**:
  - **Proxy**를 통한 구현: 객체 속성의 변화 (속성 값 읽기, 쓰기, 속성 추가, 삭제 등)을 인터셉트.
  - **Reflect**를 통한 원래 객체의 속성 조작.
  - MDN 문서의 Proxy와 Reflect:
    - Proxy: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
    - Reflect: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect
    ```js
    new Proxy(data, {
        // 속성 값 읽기 인터셉트
        get (target, prop) {
            return Reflect.get(target, prop)
        },
        // 속성 값 설정 또는 새로운 속성 추가 인터셉트
        set (target, prop, value) {
            return Reflect.set(target, prop, value)
        },
        // 속성 삭제 인터셉트
        deleteProperty (target, prop) {
            return Reflect.deleteProperty(target, prop)
        }
    })

    proxy.name = 'tom'
    ```

## 5. reactive와 ref의 비교

- **데이터 정의 관점에서 비교**:
  - ref는 <strong style="color:#DD5145">기본 타입 데이터</strong>를 정의하는 데 사용됨.
  - reactive는 <strong style="color:#DD5145">객체 (또는 배열) 타입 데이터</strong>를 정의하는 데 사용됨.
  - 참고: ref도 <strong style="color:#DD5145">객체 (또는 배열) 타입 데이터</strong>를 정의할 수 있으며, 내부적으로 자동으로 ```reactive```를 통해 <strong style="color:#DD5145">프록시 객체</strong>로 변환.
  
- **원리 관점에서 비교**:
  - ref는 ```Object.defineProperty()```의 ```get```과 ```set```를 통해 반응성(데이터 감지)를 구현.
  - reactive는 <strong style="color:#DD5145">Proxy</strong>를 통해 반응성을 구현하고, <strong style="color:#DD5145">Reflect</strong>를 통해 <strong style="color:orange">원래 객체</strong> 내부 데이터를 조작.
  
- **사용 관점에서 비교**:
  - ref로 정의된 데이터: 데이터를 조작할 때 <strong style="color:#DD5145">.value가 필요</strong>하며, 템플릿에서 데이터를 읽을 때는 <strong style="color:#DD5145">.value가 필요하지 않음</strong>.
  - reactive로 정의된 데이터: 데이터를 조작하고 읽을 때 <strong style="color:#DD5145">.value가 필요하지 않음</strong>.

## 6. setup의 두 가지 주의점

- **setup 실행 시기**:
  - beforeCreate 이전에 한 번 실행되며, this는 undefined.

- **setup의 매개변수**:
  - props: 객체로 외부에서 전달되고 내부에서 선언된 속성들을 포함.
  - context: 컨텍스트 객체
    - attrs: 객체로 외부에서 전달되었으나 props에 선언된다 


## 7. 계산 속성과 감시

### 1. computed 함수

- Vue2.x의 computed 설정과 동일한 기능을 한다.

- 작성법

  ```js
  import { computed } from 'vue'
  
  setup() {
      ...
      // 계산 속성 — 간단한 예
      let fullName = computed(() => {
          return person.firstName + '-' + person.lastName
      })
      // 계산 속성 — 완전한 예
      let fullName = computed({
          get() {
              return person.firstName + '-' + person.lastName
          },
          set(value) {
              const nameArr = value.split('-')
              person.firstName = nameArr[0]
              person.lastName = nameArr[1]
          }
      })
  }
  ```

### 2. watch 함수

- Vue2.x의 watch 설정과 동일한 기능을 한다.

- 두 가지 작은 "함정":

  - reactive로 정의된 반응형 데이터를 감시할 때: oldValue를 올바르게 가져올 수 없으며, 강제로 깊은 감시(deep)가 활성화된다.
  - reactive로 정의된 반응형 데이터의 특정 속성을 감시할 때: deep 설정이 유효한다.
  
  ```js
  // 경우 1: ref로 정의된 반응형 데이터를 감시
  watch(sum, (newValue, oldValue) => {
      console.log('sum이 변경되었다', newValue, oldValue)
  }, { immediate: true })
  
  // 경우 2: 여러 ref로 정의된 반응형 데이터를 감시
  watch([sum, msg], (newValue, oldValue) => {
      console.log('sum 또는 msg가 변경되었다', newValue, oldValue)
  }) 
  
  /* 경우 3: reactive로 정의된 반응형 데이터를 감시
             reactive로 정의된 반응형 데이터를 감시할 경우, oldValue를 올바르게 가져올 수 없다!!
             reactive로 정의된 반응형 데이터를 감시할 경우, 강제로 깊은 감시가 활성화된다.
  */
  watch(person, (newValue, oldValue) => {
      console.log('person이 변경되었다', newValue, oldValue)
  }, { immediate: true, deep: false }) // 여기서 deep 설정은 더 이상 유효하지 않다.
  
  // 경우 4: reactive로 정의된 반응형 데이터의 특정 속성을 감시
  watch(() => person.job, (newValue, oldValue) => {
      console.log('person의 job이 변경되었다', newValue, oldValue)
  }, { immediate: true, deep: true }) 
  
  // 경우 5: reactive로 정의된 반응형 데이터의 특정 속성들을 감시
  watch([() => person.job, () => person.name], (newValue, oldValue) => {
      console.log('person의 job이 변경되었다', newValue, oldValue)
  }, { immediate: true, deep: true })
  
  // 특수 경우
  watch(() => person.job, (newValue, oldValue) => {
      console.log('person의 job이 변경되었다', newValue, oldValue)
  }, { deep: true }) // 여기서는 reactive로 정의된 객체의 특정 속성을 감시하므로 deep 설정이 유효한다.
  ```

### 3. watchEffect 함수

- watch의 패턴은: 감시할 속성을 지정하고, 감시 콜백을 지정해야 한다.

- watchEffect의 패턴은: 감시할 속성을 지정할 필요가 없으며, 감시 콜백에서 사용된 속성을 감시한다.

- watchEffect는 computed와 약간 비슷한다:

  - 하지만 computed는 계산된 값(콜백 함수의 반환 값)에 중점을 두므로 반환 값을 작성해야 한다.
  - 반면 watchEffect는 과정(콜백 함수의 함수 본문)에 중점을 두므로 반환 값을 작성할 필요가 없다.

  ```js
  // watchEffect에서 지정한 콜백에서 사용된 데이터가 변경되면 콜백이 다시 실행된다.
  watchEffect(() => {
      const x1 = sum.value
      const x2 = person.age
      console.log('watchEffect 설정된 콜백이 실행되었다')
  })
  ```

## 8. 생명주기

<div style="border:1px solid black;width:380px;float:left;margin-right:20px;"><strong>vue2.x의 생명주기</strong><img src="https://v2.vuejs.org/images/lifecycle.png" alt="lifecycle_2" style="zoom:33%;width:1200px" /></div><div style="border:1px solid black;width:510px;height:985px;float:left"><strong>vue3.0의 생명주기</strong><img src="https://vuejs.org/assets/lifecycle.MuZLBFAS.png" alt="lifecycle_2" style="zoom:33%;width:2500px" /></div>

## Vue 3.0 라이프사이클 관리 및 기타 Composition API

- Vue 3.0에서는 Vue 2.x에서 사용하던 라이프사이클 훅을 계속 사용할 수 있지만, 두 가지가 이름이 변경되었다:
  - `beforeDestroy`는 `beforeUnmount`로 변경되었다.
  - `destroyed`는 `unmounted`로 변경되었다.
  
- Vue 3.0에서는 Composition API 형태의 라이프사이클 훅도 제공한다. 이에 따른 Vue 2.x와의 대응관계는 다음과 같다:
  - `beforeCreate` == `setup()`
  - `created` == `setup()`
  - `beforeMount` == `onBeforeMount`
  - `mounted` == `onMounted`
  - `beforeUpdate` == `onBeforeUpdate`
  - `updated` == `onUpdated`
  - `beforeUnmount` == `onBeforeUnmount`
  - `unmounted` == `onUnmounted`

## 9. 커스텀 훅 함수

- 훅(Hook)이란? 본질적으로 `setup` 함수에서 사용하는 Composition API를 포장한 함수입니다.
- Vue 2.x의 믹스인(mixin)과 유사한다.
- 커스텀 훅의 장점: 코드 재사용 및 `setup` 함수 내의 로직을 더 깔끔하고 이해하기 쉽게 만듭니다.

## 10. toRef

- 기능: `ref` 객체를 생성하며, 그 `value` 값은 다른 객체의 특정 속성을 참조한다.
- 문법: `const name = toRef(person, 'name')`
- 용도: 반응형 객체의 특정 속성을 외부에 따로 제공해야 할 때 사용한다.

- 확장: `toRefs`는 `toRef`와 기능이 같지만, 여러 `ref` 객체를 일괄 생성할 수 있다.
  - 문법: `toRefs(person)`

## 기타 Composition API

### 1. shallowReactive 및 shallowRef

- `shallowReactive`: 객체의 가장 바깥쪽 속성만 반응형으로 처리함 (얕은 반응형).
- `shallowRef`: 기본 데이터 타입만 반응형으로 처리하고, 객체는 반응형으로 처리하지 않음.

- 사용 시기:
  - 깊은 구조의 객체 데이터가 있지만, 변경 시 외부 속성만 변한다면 `shallowReactive`를 사용.
  - 객체의 속성을 수정하지 않고 새로운 객체로 교체하는 경우가 많다면 `shallowRef`를 사용.

### 2. readonly 및 shallowReadonly

- `readonly`: 반응형 데이터를 읽기 전용으로 만듦(깊은 읽기 전용).
- `shallowReadonly`: 얕은 읽기 전용으로 만듦.

- 사용 예시: 데이터가 수정되지 않도록 하고 싶을 때 사용.

### 3. toRaw 및 markRaw

- `toRaw`:
  - 기능: `reactive`로 생성된 반응형 객체를 일반 객체로 변환.
  - 사용 시기: 반응형 객체에 대해 일반 객체를 다루고, 해당 객체의 모든 작업이 페이지 업데이트를 일으키지 않길 원할 때.

- `markRaw`:
  - 기능: 객체를 영원히 반응형 객체로 만들지 않도록 표기함.
  - 사용 시기:
    1. 복잡한 타사 라이브러리와 같은 특정 값이 반응형이 되어서는 안 될 때.
    2. 불변 데이터 소스가 많은 리스트를 렌더링할 때, 반응형 변환을 건너뛰어 성능을 향상시킴.  


## 4. customRef

- **기능**: 사용자 정의 `ref`를 생성하여 종속성 추적과 업데이트 트리거를 명시적으로 제어한다.

- 디바운싱(debounce) 기능 구현 예시:

  ```vue
  <template>
    <input type="text" v-model="keyword">
    <h3>{{keyword}}</h3>
  </template>
  
  <script>
    import { ref, customRef } from 'vue';
    export default {
      name: 'Demo',
      setup() {
        // let keyword = ref('hello') // Vue에서 제공하는 내장 ref 사용
        // 사용자가 직접 정의한 myRef
        function myRef(value, delay) {
          let timer;
          // customRef 기능 사용해 직접 정의
          return customRef((track, trigger) => {
            return {
              get() {
                track(); // Vue에게 이 value 값을 추적해야 함을 알림
                return value;
              },
              set(newValue) {
                clearTimeout(timer);
                timer = setTimeout(() => {
                  value = newValue;
                  trigger(); // Vue에게 화면을 업데이트하도록 알림
                }, delay);
              }
            }
          });
        }

        let keyword = myRef('hello', 500); // 사용자가 정의한 ref 사용
        return { keyword };
      }
    }
  </script>
  ```

## 5. provide 및 inject


- **기능**: **조상 컴포넌트와 후손 컴포넌트 간의 통신**을 구현한다.
- **패턴**: 부모 컴포넌트에서 `provide` 옵션으로 데이터를 제공하고, 후손 컴포넌트에서 `inject` 옵션으로 데이터를 사용한다.

- 구체적인 코드 예시:

  1. **조상 컴포넌트**에서:

     ```js
     setup() {
       ... 
       let car = reactive({ name: '벤츠', price: '4000만원' });
       provide('car', car);
       ...
     }
     ```

  2. **후손 컴포넌트**에서:

     ```js
     setup(props, context) {
       ...
       const car = inject('car');
       return { car };
       ...
     }
     ```  
## 6. 반응형 데이터의 판별

- **isRef**: 값이 `ref` 객체인지 확인한다.
- **isReactive**: 객체가 `reactive`로 생성된 반응형 프록시인지 확인한다.
- **isReadonly**: 객체가 `readonly`로 생성된 읽기 전용 프록시인지 확인한다.
- **isProxy**: 객체가 `reactive` 또는 `readonly` 메서드로 생성된 프록시인지 확인한다.

# 4. Composition API의 장점

## 1. Options API의 문제점

전통적인 Options API를 사용할 때, 새로운 요구사항을 추가하거나 수정하려면 data, methods, computed 각각을 수정해야 한다.

## 2. Composition API의 장점

코드와 함수를 더 우아하게 구성할 수 있어 관련 기능의 코드를 더 체계적으로 정리할 수 있다.

# 5. 새로운 컴포넌트

## 1. Fragment

- **Vue 2**: 컴포넌트는 반드시 하나의 루트 태그를 가져야 한다.
- **Vue 3**: 컴포넌트는 루트 태그가 없어도 되며 내부적으로 여러 태그를 하나의 `Fragment` 가상 요소에 포함 한다.
- **장점**: 태그 계층을 줄이고 메모리 사용량을 줄인다.

## 2. Teleport

- **Teleport란?** `Teleport`는 컴포넌트의 HTML 구조를 지정된 위치로 이동시키는 기술 이다.
  
  ```vue
  <teleport to="이동 위치">
    <div v-if="isShow" class="mask">
      <div class="dialog">
        <h3>나는 팝업 창입니다</h3>
        <button @click="isShow = false">팝업 창 닫기</button>
      </div>
    </div>
  </teleport>
  ```

## 3. Suspense

- 비동기 컴포넌트를 기다릴 때 추가 콘텐츠를 렌더링하여 애플리케이션의 사용자 경험을 개선한다.
- 사용 방법:

  - 비동기 컴포넌트를 정의한다.

    ```js
    import { defineAsyncComponent } from 'vue';
    const Child = defineAsyncComponent(() => import('./components/Child.vue'));
    ```

  - `Suspense`로 컴포넌트를 감싸고 `default`와 `fallback` 슬롯을 설정한다.

    ```vue
    <template>
      <div class="app">
        <h3>나는 App 컴포넌트입니다</h3>
        <Suspense>
          <template v-slot:default>
            <Child />
          </template>
          <template v-slot:fallback>
            <h3>로딩 중.....</h3>
          </template>
        </Suspense>
      </div>
    </template>
    ```
# 6. 기타

## 1. 전역 API의 이동

- Vue 2.x에는 많은 전역 API 및 설정이 있다.
  - 예를 들어: 전역 컴포넌트 등록, 전역 지시어 등.

    ```js
    // 전역 컴포넌트 등록
    Vue.component('MyButton', {
      data: () => ({
        count: 0
      }),
      template: '<button @click="count++">클릭된 횟수: {{ count }}</button>'
    })
    
    // 전역 지시어 등록
    Vue.directive('focus', {
      inserted: el => el.focus()
    }
    ```

- Vue 3.0에서 이러한 API에 대해 조정되었다:

  - 전역 API인 ```Vue.xxx```를 애플리케이션 인스턴스(```app```)로 이동

    | 2.x 전역 API(```Vue```) | 3.x 인스턴스 API(```app```)                |
    | ----------------------- | ----------------------------------------- |
    | Vue.config.xxxx         | app.config.xxxx                           |
    | Vue.config.productionTip | <strong style="color:#DD5145">제거됨</strong> |
    | Vue.component           | app.component                             |
    | Vue.directive           | app.directive                             |
    | Vue.mixin               | app.mixin                                 |
    | Vue.use                 | app.use                                   |
    | Vue.prototype           | app.config.globalProperties               |
  

## 2. 기타 변경 사항

- data 옵션은 항상 함수로 선언되어야 한다.

- 전환 클래스 이름 변경:

  - Vue 2.x 방식

    ```css
    .v-enter,
    .v-leave-to {
      opacity: 0;
    }
    .v-leave,
    .v-enter-to {
      opacity: 1;
    }
    ```

  - Vue 3.x 방식

    ```css
    .v-enter-from,
    .v-leave-to {
      opacity: 0;
    }
    
    .v-leave-from,
    .v-enter-to {
      opacity: 1;
    }
    ```

- 키 코드를 v-on의 수식어로 사용하는 것이 제거되었으며 ```config.keyCodes```도 더 이상 지원되지 않다.

- ```v-on.native``` 수식어가 제거되었다.

  - 부모 컴포넌트에서 이벤트 바인딩

    ```vue
    <my-component
      v-on:close="handleComponentEvent"
      v-on:click="handleNativeClickEvent"
    />
    ```

  - 자식 컴포넌트에서 사용자 지정 이벤트 선언

    ```vue
    <script>
      export default {
        emits: ['close']
      }
    </script>
    ```

- filter 필터(함수)가 제거되었다.

  > 필터는 편리해 보이지만 사용자 정의 구문이 필요하며 즉, 중괄호 내 식이 "그냥 자바스크립트"임을 전제로 한 가정을 깨는데, 이것은 학습 비용과 구현 비용이 발생한다! 필터를 대체하기 위해 메소드 호출 또는 계산된 속성을 사용하는 것이 좋다.

- ......

# Vue 기초 및 기능 정리

## Vue 최초 설정 및 기본 사항

1. **Vue 사용 방법**

   - `new Vue()`로 객체화하며, 설정 객체를 전달해야 함.
   - 예: `new Vue({ el: '#app', data: {} })`

2. **콘테이너와 템플릿**

   - 콘테이너는 일반 HTML 요소로, 내부에서 Vue 문법을 혼합 사용.
   - 콘테이너 내부 코드는 **Vue 템플릿**이라 함.
   - `{{ 내용 }}` 안에서는 **표현식**만 가능 (예: `1+1`, `a`, `x===y?true:false`, `demo(1)`).
     - `if`, `for` 등은 사용 불가.

3. **콘테이너와 Vue의 관계**

   - 1:1 관계만 가능. 1:n 또는 n:1은 에러 발생.

4. **데이터와 화면 연동**

   - `data`의 내용이 변하면 화면도 자동으로 갱신됨.

---

## Vue 템플릿 문법

1. **삽입 방식**

   - 태그 안에 존재: `{{ name }}`
   - 모든 `data` 속성을 참조 가능.

2. **지령(명령) 방식**

   - `v-xxx` 형식으로 태그 속성, 태그 내용, 함수에 사용.
   - 예: `v-bind:href`, 또는 간소화 `:href`.

---

## Vue 데이터 바인딩

1. **단방향 바인딩:** `v-bind`

   - `data`의 내용을 화면에 출력.
   - HTML 태그의 `value` 속성이 없는 태그에서 사용.

2. **양방향 바인딩:** `v-model`

   - `data` ↔ 화면 간 데이터 동기화.
   - `value` 속성이 있는 태그(`input`, `select` 등)에 사용.

---

## `data`와 `el`의 코딩 방식

1. `el` **설정 방식**

   - `new Vue` 객체화 시 `el` 속성 설정:

     ```javascript
     new Vue({ el: '#root' })
     ```
   - 객체화 후 `$mount`로 설정:

     ```javascript
     const vm = new Vue({}).$mount('#root')
     ```

2. `data` **설정 방식**

   - **오브젝트 방식**:

     ```javascript
     data: { name: 'Vue' }
     ```
   - **함수 방식** (권장):

     ```javascript
     data() { return { name: 'Vue' } }
     ```
     - 반드시 `return` 필요.
     - 이후 컴포넌트 사용 시 함수 방식 필수 (에러 방지).

3. **주의**

   - 화살표 함수 사용 시 `this`는 `window`, 일반 함수 사용 시 `this`는 Vue 객체.

---

## MVVM 모델

1. **M (Model)**: Vue의 `data`.
2. **V (View)**: 화면.
3. **VM (ViewModel)**: Vue 객체.
   - `vm`은 `data`와 Vue 객체의 모든 속성을 포함하여 바로 사용 가능.

---

## Vue 데이터 대리 (Proxy)

1. **데이터 대리**

   - `vm` 객체로 `data` 속성을 읽고/씀.

2. **장점**

   - 데이터 컨트롤이 더 편리.

3. **원리**

   - `Object.defineProperty()`로 `data`의 모든 속성을 `vm`에 추가.
   - 추가된 속성에 `setter/getter` 함수 포함.
   - `setter/getter`를 통해 `data` 속성 변경.

---

## 이벤트 처리

### 기본 사용

1. \*\*`v-on:xxx` 또는 `@xxx`\*\*로 이벤트 처리.
2. 함수는 `methods` 객체에 정의 (최종 `vm`에 추가).
3. `methods`의 함수는 **일반 함수**여야 함 (화살표 함수는 `this`가 `window`).
4. `methods`의 함수는 Vue에서 관리, `this`는 `vm` 또는 컴포넌트 객체.
5. 예: `@click='demo'`와 `@click='demo($event)'`는 동일. 함수 전달 방식 권장.

### 이벤트 확장

1. `prevent`: 기본 동작 차단.
2. `stop`: 이벤트 버블링 방지.
3. `once`: 이벤트 한 번만 실행.
   - 조합 가능: `@click.prevent.stop`.

### 이벤트 키보드

1. **자주 사용 키 별칭**: `enter`, `delete`, `esc`, `space`, `tab`, `up`, `down`, `left`, `right`.
   - `tab`은 `keydown`과 결합해야 함.
2. **제공되지 않은 키**: 소문자, 단어 간 `-` 연결 (예: `left-arrow`).
3. **시스템 키**: `ctrl`, `alt`, `shift`, `meta`.
   - `keyup` 시 다른 키와 조합 필요.
   - 조합 예: `@click.ctrl.y` (Ctrl + Y).
4. 키코드 사용 (비추천).
5. 자체 별칭 선언 (비추천).

---

## 계산 속성 (`computed`)

1. **정의**

   - `data` 속성에 대해 연산 수행.

2. **원리**

   - `Object.defineProperty()` 기반으로 `setter/getter` 제공.

3. **get 함수 호출 시점**

   - 최초 1회 실행.
   - 연동된 데이터 변경 시 실행.

4. **장점**

   - `methods` 대비 캐시 사용으로 효율적 (`methods`는 캐시 없음).

5. **주의**

   - `computed`는 `vm`에 저장, 직접 사용 가능.
   - 수정하려면 `setter` 함수 선언 필요.

6. **간소화**

   - `set` 없이 `get`만 있을 경우:

     ```javascript
     fullName() { return this.firstName + ' ' + this.lastName }
     ```

---

## 감시 속성 (`watch`)

1. **정의**

   - 감시 대상이 변경 시 콜백 함수 자동 호출.

2. **조건**

   - 감시 속성이 반드시 존재해야 함.

3. **코딩 방식**

   - `new Vue`에서 `watch` 설정:

     ```javascript
     watch: { name(newVal, oldVal) { console.log(newVal, oldVal) } }
     ```
   - `vm.$watch`로 설정:

     ```javascript
     vm.$watch('name', (newVal, oldVal) => {})
     ```

### 깊은 감시 (Deep Watch)

1. Vue의 `watch`는 객체 내부 값 변경 감지 안 함.
2. `deep: true` 설정 필요:

   ```javascript
   watch: { obj: { handler(newVal) {}, deep: true } }
   ```
3. **주의**: Vue는 객체 내부 값 변경 감지하지만, `watch`는 기본적으로 안 함.

---

## `computed` vs `watch`

1. `computed`로 구현 가능한 것은 `watch`로도 가능.
2. `watch`로 구현 가능한 것 중 `computed`로 불가능한 경우 있음 (예: `setTimeout` 비동기).
3. **원칙**:
   - Vue가 관리하는 함수는 일반 함수여야 함 (`this` 사용 가능).
   - Vue가 관리하지 않는 함수(`setTimeout`, AJAX, Promise)는 화살표 함수 사용.

---

## 스타일 바인딩

1. **Class 방식**

   - `:class="xxx"` 사용.
   - **문자열**: 동적 객체명 확보.
   - **객체**: 여러 스타일 바인딩, 개수/이름 불확실.
   - **배열**: 여러 스타일 바인딩, 개수/이름 확실, 사용 여부 불확실.

2. **Style 방식**

   - `:style="{ fontSize: xxx }"`로 동적 값 지정.
   - `:style="[a, b]"`로 배열 사용 가능.

---

## 조건 처리

1. `v-if`**,** `v-else-if`**,** `v-else`

   - 간단한 경우 권장.
   - DOM 요소 삭제.
   - 중간에 끊으면 안 됨.
   - `<template>`와 결합 사용.

2. `v-show`

   - 변화 빈번 시 권장.
   - DOM 요소 숨김 처리 (삭제 아님).

---

## 배열 처리: `v-for`

- 문법: `v-for="(item, index) in xxx" :key="yyy"`.
- 배열, 객체, 문자열, 지정 횟수 처리 가능.

### Key의 역할 (Vue/React)

1. **가상 DOM에서 역할**

   - `key`는 가상 DOM 객체의 식별자.
   - 데이터 변경 시 새로운 가상 DOM 생성 후 기존과 비교.

2. **비교 규칙**

   - 동일 `key` 찾음:
     - 내용 동일 → 기존 DOM 재사용.
     - 내용 변경 → 새 DOM 생성 후 교체.
   - 동일 `key` 없음:
     - 새 DOM 생성 후 렌더링.

3. `index`**를** `key`**로 사용할 때 문제**

   - 데이터 역순 추가/삭제 시 불필요한 DOM 업데이트 발생 → 비효율.
   - 입력 DOM 포함 시 잘못된 업데이트로 화면 문제 발생.

4. **Key 선택 방법**

   - 고유 식별자(ID 등) 사용 권장.
   - 순서 파괴 작업 없고 단순 렌더링 시 `index` 사용 가능.

---

## Vue 데이터 감시 원리

1. **Vue의 데이터 감시**

   - `data` 내 모든 수준의 데이터 감시.

2. **객체 데이터 감시**

   - `setter`로 감시 구현.
   - Vue 인스턴스 생성 시 감시 데이터 전달 필요.
   - 나중에 추가된 속성은 반응형 아님.
     - 해결: `Vue.set(target, propertyName/index, value)` 또는 `vm.$set()`.

3. **배열 데이터 감시**

   - 배열 업데이트 메서드 래핑:
     - 원래 메서드 호출.
     - 템플릿 다시 파싱하여 페이지 업데이트.
   - 배열 요소 수정 시:
     - `push()`, `pop()`, `shift()`, `unshift()`, `splice()`, `sort()`, `reverse()`.
     - `Vue.set()` 또는 `vm.$set()`.

4. **주의**

   - `Vue.set()` 및 `vm.$set()`은 `vm` 루트 객체 속성 추가에 사용 불가.

---

## 폼 데이터 수집

1. `<input type="text"/>`

   - `v-model`은 `value` 수집.

2. `<input type="radio"/>`

   - `v-model`은 `value` 수집, 태그에 `value` 설정 필요.

3. `<input type="checkbox"/>`

   - `value` 속성 없음: `checked` 상태 (`true`/`false`).
   - `value` 속성 있음:
     - `v-model` 초기값이 배열 아님: `checked` 상태.
     - `v-model` 초기값이 배열: `value`로 구성된 배열.

4. **수정자**

   - `lazy`: 포커스 잃은 후 수집.
   - `number`: 문자열 → 숫자 변환.
   - `trim`: 앞뒤 공백 제거.

---

## 필터 (`filter`)

1. **정의**

   - 데이터를 특정 형식으로 포맷 후 표시 (간단한 로직 처리).

2. **문법**

   - **등록**:
     - 전역: `Vue.filter(name, callback)`.
     - 지역: `new Vue({ filters: {} })`.
   - **사용**:
     - `{{ xxx | 필터명 }}`.
     - `v-bind:속성="xxx | 필터명"`.

3. **특징**

   - 추가 인자 가능, 여러 필터 연결 가능.
   - 원본 데이터 변경 없이 새 데이터 생성.

---

## 내부 지령 (지시어)

 1. `v-bind`: 단방향 처리 (`:xxx`로 간략화).
 2. `v-model`: 양방향 처리.
 3. `v-for`: 반복문 처리.
 4. `v-on`: 클릭 이벤트 처리.
 5. `v-if`, `v-else`: 조건문 처리.
 6. `v-show`: 노출 여부 처리.
 7. `v-text`: 텍스트 노출 (`{{}}`와 달리 전체 치환).
 8. `v-html`: HTML 태그로 변환 (XSS 주의).
 9. `v-cloak`: 로딩 처리 (CSS 결합).
10. `v-once`: 최초 1회 렌더링 후 정적.
11. `v-pre`: Vue 빌드 제외 (효율 향상).

---

## 자체 지령 (지시어)

1. **정의 문법**

   - **지역**:

     ```javascript
     new Vue({ directives: { 지시어명: 설정 객체 } })
     ```
   - **전역**:

     ```javascript
     Vue.directive('지시어명', 설정 객체)
     ```

2. **주요 콜백**

   - `bind`: 지시어 바인딩 시 호출.
   - `inserted`: 요소가 페이지 삽입 시 호출.
   - `update`: 템플릿 다시 파싱 시 호출.

3. **주의**

   - 정의 시 `v-` 제외, 사용 시 `v-` 추가.
   - 이름이 여러 단어일 경우 `kebab-case` 사용.

---

## 생명주기

1. **정의**

   - Vue가 특정 시점에 호출하는 함수 (훅).
   - 이름 변경 불가, 내용은 개발자 작성.

2. **주요 훅**

   - `mounted`: 초기화 작업 (AJAX, 타이머 등).
   - `beforeDestroy`: 마무리 작업 (타이머 정리 등).

3. **파괴**

   - 파괴 후 Vue 도구로 정보 확인 불가.
   - 사용자 정의 이벤트 작동 안 함, DOM 이벤트는 유효.
   - `beforeDestroy`에서 데이터 조작 비추천.

---

## 컴포넌트 사용 3단계

1. **컴포넌트 정의**

   - `Vue.extend(options)`로 생성.
   - `el` 작성 금지 (최종 `vm`의 `el`로 결정).
   - `data`는 함수로 작성 (재사용 시 참조 방지).

2. **컴포넌트 등록**

   - **지역**: `new Vue({ components: {} })`.
   - **전역**: `Vue.component('이름', 컴포넌트)`.

3. **컴포넌트 사용**

   - 태그 작성: `<school></school>`.

---

## 컴포넌트 명명 주의

1. **이름**

   - 단일 단어: `school` 또는 `School`.
   - 여러 단어: `my-school` (kebab-case) 또는 `MySchool` (CamelCase, Vue CLI 필요).
   - HTML 요소 이름 피하기 (`h2` 등).
   - `name` 옵션으로 개발자 도구 표시 이름 지정.

2. **태그**

   - `<school></school>` 또는 `<school/>`.
   - Vue CLI 미사용 시 `<school/>`는 후속 렌더링 문제 발생 가능.

3. **간단 작성**

   - `Vue.extend(options)` → `options`.

---

## `VueComponent` 설명

1. **본질**

   - `VueComponent`는 `Vue.extend`로 생성된 생성자 함수.

2. **사용**

   - `<school>` 태그 작성 시 Vue가 `new VueComponent(options)` 실행.

3. **특징**

   - `Vue.extend` 호출마다 새로운 `VueComponent` 반환.

4. `this`**의 대상**

   - 컴포넌트 설정: `this`는 `VueComponent` 인스턴스 (`vc`).
   - `new Vue` 설정: `this`는 Vue 인스턴스 (`vm`).

---

## 내부 관계

- `VueComponent.prototype.__proto__ === Vue.prototype`.
- 컴포넌트 원형의 원형이 Vue 원형을 참조.

---

## Vue CLI 설치 및 사용

1. **설치**

   - Node.js (v20.14) 설치 후:

     ```bash
     npm install -g @vue/cli
     ```

2. **프로젝트 생성**

   - 프로젝트 디렉토리로 이동:

     ```bash
     vue create xxx
     ```
   - Vue 버전 선택.

3. **실행**

   - 생성된 프로젝트로 이동:

     ```bash
     cd xxx
     npm run serve
     ```

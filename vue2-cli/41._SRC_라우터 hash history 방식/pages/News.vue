<template>
    <ul>
        <li :style="{opacity}">hello vue</li>
        <li>news001 <input type="text"></li>
        <li>news002 <input type="text"></li>
        <li>news003 <input type="text"></li>
    </ul>
</template>

<script>
    export default {
        name:'News',
        data() {
            return {
                opacity:1,
            }
        },
        // 라우터 바인딩 시 캐시 보류
        activated() {
            console.log('activated');
            this.id = setInterval(() => {
                this.opacity -= 0.01
                if(this.opacity <= 0) this.opacity = 1
            }, 16);
        },
        // 라우터 바인딩 해지 
        deactivated() {
            console.log('deactivated');
            clearInterval(this.id)
        },
        /* 
            라우터 의 새 생명주기 함수 activated, deactivated
                # nextTick 도 생명주기 함수 이다 콤포넌트 가 화면에 바인딩 한 다음 호출
        */
    }
</script>
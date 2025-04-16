<template>
    <div >
        <h3>이름 : {{name}}</h3>
        <h3>성별 : {{sex}}</h3>
        <button @click="sendStudent">부모 함수로 값 전달(자체이벤트)</button>
        <button @click="unbind">자체이벤트 언 바인딩</button>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                name:'홍길동',
                sex:'남자',
            }
        },
        methods: {
            sendStudent(){
                this.$emit('showPapa',this.name,1,3,4)    // 자체 이벤트
            },
            unbind(){
                // this.$off('showPapa')   // 단일 처리
                // this.$off(['showPapa','demo'])   // 다중 처리
                this.$off()     // 전체 언 바인딩
                /* 
                    자체 이벤트 는 콤포넌트 소멸시 삭제 됨 [기본 html 이벤트 제외]
                    this.$destroy > 시 전체 자체선언 한 이벤트 무효화 됨
                */
            }
        },
    }
</script>

<style scoped>
</style>

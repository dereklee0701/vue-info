<template>
    <div>
        <h2>Home</h2>
        <div>
            <ul class="nav nav-tabs">
                <li>
                    <router-link  class="list-group-item" active-class="active" to="/home/news">News</router-link>
                </li>
                <li>
                    <router-link  class="list-group-item" active-class="active" to="/home/message">Message</router-link>
                </li>
            </ul>
            <keep-alive include="News">     <!-- 콤포넌트 name 매칭 캐시에 저장함 :include="['News','Message']" -->
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Home',
    }
</script>
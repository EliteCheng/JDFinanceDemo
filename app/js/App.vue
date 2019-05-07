<template>
    <div id="app">
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<script>
export default {
    name: "App",
}
</script>

<style lang="css">
    #app {
        max-width: 2000px;
        margin: auto;
    }

    /*Vue路由的切换动画*/
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-active {
        opacity: 0;
    }

    .router-link-exact-active >p{
        color: blue !important;
    }
</style>

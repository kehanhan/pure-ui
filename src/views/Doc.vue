<template>
    <div>
        <NavBar />
        <aside>
            <ul>
                <li class="nav-item">
                    <h3>文档</h3>
                    <ul class="link-group">
                        <li>
                            <router-link to="/doc/introduction">介绍</router-link>
                        </li>
                        <li>
                            <router-link to="/doc/installation">安装</router-link>
                        </li>
                        <li>
                            <router-link to="/doc/get-started">开始使用</router-link>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <h3>组件</h3>
                    <ul class="link-group">
                        <li><router-link to="/doc/switch">Switch</router-link></li>
                        <li><router-link to="/doc/button">Button</router-link></li>
                        <li><router-link to="/doc/dialog">Dialog</router-link></li>
                        <li><router-link to="/doc/tab">Tab</router-link></li>
                    </ul>
                </li>
            </ul>
        </aside>
        <main><router-view></router-view></main>
    </div>
</template>

<script lang="ts">
import NavBar from '../components/NavBar.vue'
export default{
    components: {NavBar}
}
</script>

<style lang="scss" scoped>
a:hover{
    color: #39A573;
}
aside{
    padding-left: 1.5rem;
    text-align: left;
    background-color: #fff;
    width: 20rem;
    position: fixed;
    z-index: 10;
    top: 3.6rem;
    left: 0;
    bottom: 0;
    border-right: 1px solid #eaecef;
    overflow-y: auto;

    .nav-item{
        padding-top: 2rem;
    }
    & .link-group > li{
        padding-left: 1rem;
        padding-top: 1rem;
    }
}
main{
    width: 100%;
    text-align: left;
    background-color: #fff;
    position: fixed;
    z-index: 10;
    top: 3.6rem;
    left: 20rem;
    bottom: 0;
}
</style>
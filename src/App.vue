<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { provide, ref } from "vue";
import { router } from "./router";

const menuVisible = ref(true);
provide("menuVisible", menuVisible);

const setMenu = () => {
  if (document.documentElement.clientWidth >= 800) {
    menuVisible.value = true;
  } else {
    menuVisible.value = false;
  }
};
window.onload = () => setMenu();
window.onresize = () => setMenu();
router.afterEach(() => {
  if (document.documentElement.clientWidth < 800) {
    menuVisible.value = false;
  }
});
</script>

<style>
#app {
  font-family: Inter, Roboto, Oxygen, Fira Sans, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

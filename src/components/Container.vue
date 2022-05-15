<template>
  <article class="container" @click="toggle">
    <slot />
    <br />
  </article>
</template>
<script lang="ts" setup>
import { inject, Ref } from "vue";

const menuVisible = inject<Ref<boolean>>("menuVisible")!;
const toggle = () =>
  document.documentElement.clientWidth < 800 && (menuVisible.value = false);
</script>
<style lang="scss" scoped>
.container {
  padding: 3em;
  height: 100%;
}
</style>

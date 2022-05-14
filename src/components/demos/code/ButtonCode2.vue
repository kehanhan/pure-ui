<template>
  <Button loading>默认</Button>
  <Button :loading="true" theme="rounded">圆角</Button>
  <Button loading theme="text">文本</Button>
  <Button :loading="isLoading" theme="float">
    <Icon name="upload"></Icon>
  </Button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Button from "../../libs/Button.vue";
const isLoading = ref(true);
const changeStatus = () => {
  setInterval(() => {
    isLoading.value = !isLoading.value;
  }, 2000);
};
changeStatus();
</script>

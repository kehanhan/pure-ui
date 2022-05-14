<template>
  <Button @click="toggleDialog">test</Button>
  <Dialog v-model:visible="showDialog" :ok="ok1" :cancel="cancel1">
    <template v-slot:title>
      <header><strong>标题</strong></header>
    </template>
    <template v-slot:content>
      <p>内容</p>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Button from "../../libs/Button.vue";
import Dialog from "../../libs/Dialog.vue";
const showDialog = ref(false);
const toggleDialog = () => {
  showDialog.value = !showDialog.value;
};
const ok1 = () => {
  window.alert("处理自定义事件中");
  return true;
};
const cancel1 = () => {
  return true;
};
</script>

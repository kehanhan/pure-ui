<template>
  <Container>
    <h1>实例1</h1>
    <Button @click="toggleDialog">toggle</Button>
    <Dialog v-model:visible="showDialog" :ok="ok1" :cancel="cancel1">
      <template v-slot:title>
        <header><strong>标题</strong></header>
      </template>
      <template v-slot:content>
        <p>内容</p>
      </template>
    </Dialog>
  </Container>
</template>

<script lang="ts">
import Dialog from "../libs/Dialog.vue";
import Button from "../libs/Button.vue";
import { ref } from "vue";
export default {
  components: { Dialog, Button },
  setup() {
    const showDialog = ref(false);
    const toggleDialog = () => {
      showDialog.value = !showDialog.value;
    };
    const ok1 = () => {
      return false;
    };
    const cancel1 = () => {
      return true;
    };
    return { showDialog, toggleDialog, ok1, cancel1 };
  },
};
</script>

<style lang="scss" scoped></style>

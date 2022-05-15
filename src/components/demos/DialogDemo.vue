<template>
  <Container>
    <h1>Dialog组件</h1>
    <h2>基本</h2>
    <DialogCode></DialogCode>
    <br />
    <a
      class="code"
      href="https://github.com/kehanhan/pure-ui/blob/main/src/components/demos/code/DialogCode.vue"
      >示例代码</a
    >
  </Container>
</template>

<script lang="ts">
import DialogCode from "./code/DialogCode.vue";
export default {
  components: { DialogCode },
};
</script>
<style scoped>
.code {
  color: #40b57f;
}
</style>

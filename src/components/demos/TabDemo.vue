<template>
  <Container>
    <h1>Tab组件</h1>
    <h2>基本</h2>
    <TabCode></TabCode>
    <a
      class="code"
      href="https://github.com/kehanhan/pure-ui/blob/main/src/components/demos/code/TabCode.vue"
      >示例代码</a
    >
  </Container>
</template>

<script lang="ts">
import TabCode from "./code/TabCode.vue";
export default {
  components: { TabCode },
};
</script>
<style scoped>
.code {
  color: #40b57f;
}
</style>

<template>
  <Container>
    <h1>Button组件</h1>
    <h2>基本</h2>
    <div>
      <ButtonCode1></ButtonCode1>
      <br />
      <a
        class="code"
        href="https://github.com/kehanhan/pure-ui/blob/main/src/components/demos/code/ButtonCode1.vue"
        >示例代码</a
      >
    </div>
    <br />
    <h2>加载中</h2>
    <div>
      <ButtonCode2></ButtonCode2>
      <br />
      <a
        class="code"
        href="https://github.com/kehanhan/pure-ui/blob/main/src/components/demos/code/ButtonCode2.vue"
        >示例代码</a
      >
    </div>
    <br />
    <h2>大小</h2>
    <ButtonCode3></ButtonCode3>
    <br />
    <a
      class="code"
      href="https://github.com/kehanhan/pure-ui/blob/main/src/components/demos/code/ButtonCode3.vue"
      >示例代码</a
    >
    <br />
    <h2>禁用</h2>
    <div>
      <ButtonCode4></ButtonCode4>
      <br />
      <a
        class="code"
        href="https://github.com/kehanhan/pure-ui/blob/main/src/components/demos/code/ButtonCode4.vue"
        >示例代码</a
      >
    </div>
  </Container>
</template>
<script lang="ts">
import ButtonCode1 from "./code/ButtonCode1.vue";
import ButtonCode2 from "./code/ButtonCode2.vue";
import ButtonCode3 from "./code/ButtonCode3.vue";
import ButtonCode4 from "./code/ButtonCode4.vue";
export default {
  components: { ButtonCode1, ButtonCode2, ButtonCode3, ButtonCode4 },
};
</script>
<style lang="scss" scoped>
.code {
  margin-left: 5px;
  color: #40b57f;
}
</style>

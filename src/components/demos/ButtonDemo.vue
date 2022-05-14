<template>
  <Container>
    <h1>Button组件</h1>
    <h2>基本</h2>
    <div>
      <ButtonCode1></ButtonCode1>
    </div>
    <br />
    <h2>加载中</h2>
    <div>
      <ButtonCode2></ButtonCode2>
    </div>
    <br />
    <h2>大小</h2>
    <ButtonCode3></ButtonCode3>
    <br />
    <h2>禁用</h2>
    <div>
      <ButtonCode4></ButtonCode4>
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

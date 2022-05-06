<template>
  <Container>
    <Button theme="default">默认</Button>
    <Button theme="text">文本</Button>
    <Button theme="link">链接</Button>
    <Button theme="float">浮动</Button>
  </Container>
</template>
<script lang="ts">
import Button from "../libs/Button.vue";

export default {
  components: { Button },
  props: {
    theme: String,
  },
};
</script>
<style lang="scss" scoped></style>

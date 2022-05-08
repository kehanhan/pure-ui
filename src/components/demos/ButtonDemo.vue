<template>
  <Container>
    <h1>样式</h1>
    <div>
      <Button>默认</Button>
      <Button theme="text">文本</Button>
      <Button theme="rounded">圆角</Button>
      <Button theme="float"> + </Button>
    </div>
    <br />
    <h1>大小</h1>
    <div>
      <Button size="big"> 默认 </Button>
      <Button> 默认 </Button>
      <Button size="small"> 默认 </Button>
    </div>
    <br />
    <div>
      <Button theme="text" size="big"> 文本 </Button>
      <Button theme="text"> 文本 </Button>
      <Button theme="text" size="small"> 文本 </Button>
    </div>
    <br />
    <div>
      <Button theme="rounded" size="big"> 圆角 </Button>
      <Button theme="rounded"> 圆角 </Button>
      <Button theme="rounded" size="small"> 圆角 </Button>
    </div>
    <br />
    <div>
      <Button theme="float" size="big"> + </Button>
      <Button theme="float"> + </Button>
      <Button theme="float" size="small"> + </Button>
    </div>
    <br />
    <h1>禁用</h1>
    <div>
      <Button disabled>默认</Button>
      <Button disabled theme="text">文本</Button>
      <Button disabled theme="rounded">圆角</Button>
      <Button disabled theme="float"> + </Button>
    </div>
    <br />
    <h1>加载中</h1>
    <div>
      <Button loading>默认</Button>
      <Button loading theme="text">文本</Button>
      <Button loading theme="rounded">圆角</Button>
      <Button loading theme="float"> + </Button>
    </div>
  </Container>
</template>
<script lang="ts">
import Button from "../libs/Button.vue";

export default {
  components: { Button },
};
</script>
<style lang="scss" scoped></style>

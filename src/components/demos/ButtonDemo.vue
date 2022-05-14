<template>
  <Container>
    <h1>Button组件</h1>
    <h2>基本</h2>
    <div>
      <Button>默认</Button>
      <Button theme="rounded">圆角</Button>
      <Button theme="text">文本</Button>
      <Button theme="float"> <Icon name="upload"></Icon> </Button>
    </div>
    <br />
    <h2>加载中</h2>
    <div>
      <Button loading>默认</Button>
      <Button :loading="true" theme="rounded">圆角</Button>
      <Button loading theme="text">文本</Button>
      <Button :loading="isLoading" theme="float">
        <Icon name="upload"></Icon>
      </Button>
    </div>
    <br />
    <h2>大小</h2>
    <div>
      <Button size="big"> 默认 </Button>
      <Button> 默认 </Button>
      <Button size="small"> 默认 </Button>
    </div>
    <br />
    <div>
      <Button theme="rounded" size="big"> 圆角 </Button>
      <Button theme="rounded"> 圆角 </Button>
      <Button theme="rounded" size="small"> 圆角 </Button>
    </div>
    <br />
    <div>
      <Button theme="text" size="big"> 文本 </Button>
      <Button theme="text"> 文本 </Button>
      <Button theme="text" size="small"> 文本 </Button>
    </div>
    <br />
    <div>
      <Button theme="float" size="big"><Icon name="upload"></Icon> </Button>
      <Button theme="float"> <Icon name="upload"></Icon> </Button>
      <Button theme="float" size="small"> <Icon name="upload"></Icon> </Button>
    </div>
    <br />
    <h2>禁用</h2>
    <div>
      <Button disabled>默认</Button>
      <Button disabled theme="text">文本</Button>
      <Button disabled theme="rounded">圆角</Button>
      <Button disabled theme="float"> <Icon name="upload"></Icon> </Button>
    </div>
  </Container>
</template>
<script lang="ts">
import { ref } from "vue";
import Button from "../libs/Button.vue";

export default {
  components: { Button },
  setup() {
    const isLoading = ref(true);
    const changeStatus = () => {
      setInterval(() => {
        isLoading.value = !isLoading.value;
      }, 2000);
    };
    changeStatus();

    return { isLoading };
  },
};
</script>
<style lang="scss" scoped>
.pure-button {
  margin: 5px;
}
.pure-theme-float {
  background-color: #40b57f;
}
</style>

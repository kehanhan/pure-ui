<template>
  <Container>
    <h1>开始使用</h1>
    <p>在入口文件中引入CSS</p>
    <p class="notice">
      由于使用Vite打包时踩了一些坑，目前仅Switch组件可以正常工作
    </p>
    <div class="markdown-body">
      <pre><code>// 引入样式
import "pure-ui-vue3/dist/libs/pure.css";

// 按需引入组件
import { Button, Dialog, Switch, Tab, Tabs } from "pure-ui-vue3";

export default {
  components: { Button, Dialog, Switch, Tab, Tabs }
}</code></pre>
    </div>
  </Container>
</template>

<style lang="scss" scoped>
.notice {
  color: red;
}
</style>

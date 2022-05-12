<template>
  <Container>
    <h2>示例</h2>
    <Tabs selected="Tab1">
      <Tab title="Tab1">内容1</Tab>
      <Tab title="Tab2">内容2</Tab>
      <Tab title="Tab3">内容2</Tab>
    </Tabs>
  </Container>
</template>

<script lang="ts">
import Tabs from "../libs/Tabs.vue";
import Tab from "../libs/Tab.vue";
export default {
  components: { Tabs, Tab },
};
</script>

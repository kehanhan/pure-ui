<template>
  <Container>
    <h1>示例1</h1>
    <Tabs>
      <Tab title="Tab1">内容1</Tab>
      <Tab title="Tab2">内容2</Tab>
    </Tabs>
  </Container>
</template>

<script lang="ts">
import Tabs from "../libs/Tabs.vue";
import Tab from "../libs/Tab.vue";
import Container from "../Container.vue";
export default {
  components: { Tabs, Tab, Container },
};
</script>

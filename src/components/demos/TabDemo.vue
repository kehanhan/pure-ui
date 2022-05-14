<template>
  <Container>
    <h2>示例</h2>
    <Tabs v-model:selected="selectedTab">
      <Tab title="Tab1">内容1</Tab>
      <Tab title="Tab2">内容2</Tab>
      <Tab title="Tab3">内容3</Tab>
    </Tabs>
  </Container>
</template>

<script lang="ts">
import Tabs from "../libs/Tabs.vue";
import Tab from "../libs/Tab.vue";
import { ref } from "vue";
export default {
  components: { Tabs, Tab },
  setup() {
    const selectedTab = ref("Tab1");
    return { selectedTab };
  },
};
</script>

<template>
  <Tabs v-model:selected="selectedTab">
    <Tab title="Tab1">内容1</Tab>
    <Tab title="Tab2">内容2</Tab>
    <Tab title="Tab3">内容3</Tab>
  </Tabs>
</template>

<script setup lang="ts">
import Tabs from "../../libs/Tabs.vue";
import Tab from "../../libs/Tab.vue";
import { ref } from "vue";
const selectedTab = ref("Tab1");
</script>

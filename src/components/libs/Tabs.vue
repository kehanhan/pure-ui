<template>
  <div>Tabs组件</div>
  <div>
    <component v-for="tab in defaults" :is="tab"></component>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Tab from "./Tab.vue";
export default defineComponent({
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs 子标签必须是Tab");
      }
    });
    return { defaults };
  },
});
</script>

<style lang="scss" scoped></style>

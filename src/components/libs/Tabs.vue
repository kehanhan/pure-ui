<template>
  <div class="pure-tabs">
    <div class="pure-tabs-nav">
      <div
        class="pure-tabs-nav-item"
        :class="{ selected: title === selected }"
        v-for="(title, index) in titles"
        :key="index"
      >
        {{ title }}
      </div>
    </div>

    <div class="pure-tabs-content">
      <component
        class="pure-tabs-content-item"
        v-for="(tab, index) in defaults"
        :is="tab"
        :key="index"
      ></component>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Tab from "./Tab.vue";
export default defineComponent({
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const defaults = context.slots.default!();
    const titles: String[] = [];
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs子标签必须是Tab");
      } else if (
        tag.props?.title === undefined ||
        typeof tag.props.title !== "string"
      ) {
        throw new Error("请传递正确的title属性值");
      } else {
        titles.push(tag.props.title);
      }
    });
    return { defaults, titles };
  },
});
</script>

<style lang="scss">
$green: #40b57f;
$color: #333;
$border-color: #d9d9d9;
.pure-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $green;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>

<template>
  <div class="pure-tabs">
    <div class="pure-tabs-nav">
      <div
        class="pure-tabs-nav-item"
        :class="{ selected: title === selected }"
        v-for="(title, index) in titles"
        :key="index"
        @click="select(title as string)"
      >
        {{ title }}
      </div>
    </div>

    <div class="pure-tabs-content">
      <keep-alive>
        <component
          class="pure-tabs-content-item"
          :is="currentTab"
          :key="currentTab?.props?.title"
        ></component>
      </keep-alive>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
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
    const currentTab = computed(() => {
      return defaults.find((tag) => tag.props?.title === props.selected);
    });
    const select = (title: string) => {
      context.emit("update:selected", title);
    };

    return { defaults, titles, currentTab, select };
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

<template>
  <div>
    <button @click="toggle" :class="{ checked: value }">
      <span></span>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle };
  },
};
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: 18px;

button {
  height: $h;
  width: $h * 2;
  border: none;
  background-color: #bcbcbc;
  border-radius: $h * 0.5;
  position: relative;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background-color: white;
    border-radius: $h2 * 0.5;
    transition: all 250ms;
  }

  &.checked {
    background-color: #40b57f;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.checked > span {
    left: calc(100% - #{$h2} - 2px);
  }
  &.checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>

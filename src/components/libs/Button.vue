<template>
  <button
    class="pure-button"
    :class="classes"
    :disabled="disabled"
    :loading="loading"
  >
    <span v-if="loading" class="pure-loading"></span>
    <slot />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  props: {
    theme: {
      type: String,
      default: "default",
    },
    size: {
      type: String,
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { theme, size } = props;
    const classes = computed(() => {
      return { [`pure-theme-${theme}`]: theme, [`pure-size-${size}`]: size };
    });
    return { classes };
  },
});
</script>

<style lang="scss">
$border-color: #d9d9d9;
$green: #40b57f;

.pure-button {
  box-sizing: border-box;
  position: relative;
  padding: 0 12px;
  font-size: 16px;
  height: 2em;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  text-decoration: none;
  background-color: white;
  color: #333;
  border: 1px solid $border-color;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);

  &[disabled] {
    cursor: not-allowed;
    background: #d7d7d7 !important;
    box-shadow: none !important;
    border: none !important;
    color: inherit !important;
    &:hover {
      outline: none;
    }
  }
  > .pure-loading {
    width: 1em;
    height: 1em;
    display: inline-block;
    margin-right: 8px;
    border-radius: 50%;
    border: 1px solid;
    border-color: #a5a5a5 transparent transparent transparent;
    animation: pure-loading 1s infinite;
  }

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $green;
    border-color: $green;
    outline: none;
  }

  &.pure-theme-text {
    border-color: transparent;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }

  &.pure-theme-rounded {
    border-radius: 28px;
  }

  &.pure-theme-float {
    border: none;
    padding: 0;
    width: 2.5em;
    height: 2.5em;
    border-radius: 50%;
    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
      0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
    &:hover,
    &:focus {
      color: inherit;
      background: darken(white, 5%);
    }
    > .pure-loading {
      width: 100%;
      height: 100%;
      background-color: inherit;
      position: absolute;
      inset: 0;
      animation: none;
      border: none;
      &::after {
        content: "";
        border: 1px solid;
        border-radius: 50%;
        margin-top: 25%;
        display: inline-block;
        border-color: #a5a5a5 transparent transparent transparent;
        animation: pure-loading 1s infinite;
        width: 50%;
        height: 50%;
      }
    }
  }

  &.pure-size-big {
    font-size: 20px;
    padding: 0 16px;
  }
  &.pure-size-small {
    font-size: 12px;
    padding: 0 8px;
  }
  @keyframes pure-loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>

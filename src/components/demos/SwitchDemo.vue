<template>
  <div>
    <Switch v-model:value="isChecked" />
    {{ "Switch Demo: " + isChecked }}
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import Switch from "../libs/Switch.vue";
export default {
  components: { Switch },
  setup() {
    const isChecked = ref(true);
    return { isChecked };
  },
};
</script>

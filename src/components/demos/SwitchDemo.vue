<template>
  <Container>
    <SwitchCode></SwitchCode>
    <a
      class="code"
      href="https://github.com/kehanhan/pure-ui/blob/main/src/components/demos/code/SwitchCode.vue"
      >示例代码</a
    >
  </Container>
</template>

<script lang="ts">
import { ref } from "vue";
import Switch from "../libs/Switch.vue";
import SwitchCode from "./code/SwitchCode.vue";
export default {
  components: { Switch, SwitchCode },
  setup() {
    const isChecked = ref(true);
    return { isChecked };
  },
};
</script>
<style scoped>
.code {
  color: #40b57f;
}
</style>

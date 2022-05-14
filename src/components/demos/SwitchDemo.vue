<template>
  <Container>
    <SwitchCode></SwitchCode>
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

<template>
  <Container>
    <Switch v-model:value="isChecked" />
    <br />
    {{ "Switch Demo: " + isChecked }}
  </Container>
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

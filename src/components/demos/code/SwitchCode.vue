<template>
  <div>
    <Switch v-model:value="isChecked" />
    <br />
    {{ "Switch Demo: " + isChecked }}
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Switch from "../../libs/Switch.vue";
const isChecked = ref(true);
</script>

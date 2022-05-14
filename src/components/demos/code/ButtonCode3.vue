<template>
  <div>
    <Button size="big"> 默认 </Button>
    <Button> 默认 </Button>
    <Button size="small"> 默认 </Button>
  </div>
  <div>
    <Button theme="rounded" size="big"> 圆角 </Button>
    <Button theme="rounded"> 圆角 </Button>
    <Button theme="rounded" size="small"> 圆角 </Button>
  </div>
  <div>
    <Button theme="text" size="big"> 文本 </Button>
    <Button theme="text"> 文本 </Button>
    <Button theme="text" size="small"> 文本 </Button>
  </div>
  <div>
    <Button theme="float" size="big"><Icon name="upload"></Icon> </Button>
    <Button theme="float"> <Icon name="upload"></Icon> </Button>
    <Button theme="float" size="small"> <Icon name="upload"></Icon> </Button>
  </div>
</template>

<script setup lang="ts">
import Button from "../../libs/Button.vue";
</script>

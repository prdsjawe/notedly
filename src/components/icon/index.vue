<script setup lang="ts">
import * as Icons from "./icons";
import { computed } from "vue";

const props = defineProps({
  name: String,
  color: String,
});

const selectedIcon = computed(() => {
  let name = props.name as string;
  if (!!props.color) {
    name += props.color;
  }
  return (Icons as any)[name];
});
</script>
<template>
  <component
    :is="selectedIcon"
    :class="[`icon-${name?.toLowerCase()}`]"
  ></component>
</template>

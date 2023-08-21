<script setup lang="ts">
import { ComputedRef, computed } from "vue";
import { Icon } from "@components";

const props = defineProps({
  label: String,
  variant: String as () => ButtonVariants,
  isLink: {
    type: Boolean,
    default: false,
  },
  external: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: "",
  },
  order: {
    type: String,
    default: "",
  },
});

const computedComp: ComputedRef<ButtonComponent> = computed(() => {
  if (props.isLink) {
    if (props.external) {
      return "a";
    }
    return "RouterLink";
  }
  return "button";
});

const computedIconOrder = computed(() => {
  switch (props.order) {
    case "rtl":
      return "order-last";
    default:
      return "order-first";
  }
});
</script>

<template>
  <component :is="computedComp" class="btn" :class="[variant]">
    <template v-if="!!icon">
      <span :class="computedIconOrder">
        <Icon :name="icon" class="w-5 h-5"></Icon>
      </span>
    </template>
    <span class="label">
      <slot></slot>
    </span>
  </component>
</template>

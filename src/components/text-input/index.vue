<script setup lang="ts">
import { computed } from "vue";
import { Icon } from "@components";

// const togglePassword = ref(false);

const props = defineProps({
  id: String,
  label: String,
});

const computedType = computed(() => {
  if (props.id === "password" || props.id === "new-password") {
    return "password";
  }

  return "text";
});
</script>

<template>
  <label :for="`input-group-${id}`" class="input-group">
    <span class="text-xs">{{ label }}</span>
    <div class="relative w-full">
      <template v-if="computedType === 'password'">
        <Icon
          name="Eye"
          class="absolute top-1/2 -translate-y-1/2 right-0 mr-3.5 w-5 h-5 fill-gray-400"
        ></Icon>
      </template>
      <input :type="computedType" :id="`input-group-${id}`" />
    </div>
  </label>
</template>

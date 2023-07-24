<script setup lang="ts">
defineProps({
  name: String,
  type: {
    type: String,
    default: "text",
  },
});
</script>

<template>
  <label for="input-" class="input-group">
    <span class="">
      {{ name }}
    </span>
    <input :type="type" class="" />
  </label>
</template>

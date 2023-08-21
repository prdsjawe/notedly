<script setup lang="ts">
import { Navbar } from "@components";
</script>

<template>
  <Navbar></Navbar>
  <main
    class="h-screen max-h-screen relative flex pt-20 max-w-7xl 2xl:max-w-[1536px] mx-auto justify-center"
  >
    <slot></slot>
  </main>
</template>

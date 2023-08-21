<script setup lang="ts">
import { BaseButton, BaseLayout, TextInput } from "@components";
</script>

<template>
  <BaseLayout>
    <div
      class="w-full h-full flex flex-col items-center justify-center gap-8 max-w-sm py-20"
    >
      <div class="w-full max-w-md flex flex-col gap-8 mb-20">
        <h1 class="font-bold text-6xl text-stone-800 text-center">Log in</h1>
        <TextInput id="email" label="Email"></TextInput>
        <TextInput id="password" label="Password"></TextInput>
        <BaseButton variant="primary">Login</BaseButton>
        <BaseButton
          :is-link="true"
          :external="false"
          to="/"
          variant="accent-link"
        >
          Forgot Password?
        </BaseButton>
      </div>
      <div class="text-xs text-gray-400 text-center">
        By clicking "Login" above, you acknowledge that you have read and
        understood, and agree to Notedly's Terms and Conditions and Privacy
        Policy.
      </div>
    </div>
  </BaseLayout>
</template>

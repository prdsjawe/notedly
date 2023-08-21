<script setup lang="ts">
import { BaseButton, MainLogo } from "@components";
import { ERoutes } from "@constants/routes";
</script>

<template>
  <div class="fixed top-0 left-0 w-full h-20 z-50">
    <div
      class="px-6 flex h-full items-center justify-between container mx-auto"
    >
      <div>
        <MainLogo class="h-8 w-auto fill-stone-800"></MainLogo>
      </div>
      <div>
        <ul class="flex gap-4 items-center">
          <li>
            <BaseButton variant="navbar" :is-link="true" to="/">
              Home
            </BaseButton>
          </li>
          <li>
            <BaseButton variant="navbar">About</BaseButton>
          </li>
          <li>
            <BaseButton variant="navbar">Contact</BaseButton>
          </li>
          <li>
            <BaseButton
              variant="navbar-active"
              :is-link="true"
              :to="ERoutes.LOGIN"
            >
              Log in
            </BaseButton>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

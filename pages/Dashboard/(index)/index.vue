<script setup lang="ts">
import Profile from '@/pages/Dashboard/(index)/_component/Profile.component.vue'
import AuthMiddleware from "~/middleware/Auth/auth.middleware";

definePageMeta({
  layout: 'dashboard-layout',
  title: 'Dashboard',
  middleware: [AuthMiddleware],
});
useSeoMeta({
  title: "Dashboard",
})
</script>

<template>
  <div class="h-full flex flex-col items-center justify-center w-full">
    <Profile/>
  </div>
</template>

<style scoped></style>

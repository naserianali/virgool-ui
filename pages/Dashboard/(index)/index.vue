<script setup lang="ts">
import Profile from '@/pages/Dashboard/(index)/_component/Profile.component.vue'

definePageMeta({
  layout: 'dashboard-layout',
  title: 'Dashboard',
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

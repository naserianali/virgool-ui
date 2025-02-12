<script setup lang="ts"></script>

<template>
  <div class="flex h-screen font-vazir" dir="rtl">
    <LayoutDashboardSidebar/>
    <main class="h-full overflow-y-scroll overflow-x-hidden p-4 grow">
      <slot/>
    </main>
  </div>
  <Toaster rich-colors :visible-toasts="6" :duration="2500" close-button dir="auto"/>
</template>

<style scoped></style>

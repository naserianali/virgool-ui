<script setup lang="ts">
import {Toaster} from "vue-sonner";
</script>

<template>
  <div dir="rtl" class="font-vazir">
    <layout-navbar-component/>
    <slot/>
    <Toaster/>
  </div>
</template>

<style scoped></style>

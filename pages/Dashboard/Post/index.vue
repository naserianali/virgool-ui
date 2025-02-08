<script setup lang="ts">
import PostsComponent from '@/pages/Dashboard/Post/_components/Posts.component.vue';

definePageMeta({
  layout: "dashboard-layout",
});
useSeoMeta({
  title: "Dashboard - Posts",
})
</script>

<template>
  <div class="max-w-4xl w-8/12 container">
    <PostsComponent/>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import type {IBlogs} from "~/pages/Dashboard/Post/_components/Posts.component.vue";

const {blog} = defineProps({
  blog: {
    required: true,
    type: Object as PropType<IBlogs>
  }
})
</script>

<template>
  <NuxtLink to="/" class="flex flex-col rounded-xl overflow-hidden p-2 shadow mb-6 mx-auto">
    <div class="relative">
      <img class="size-44 w-full object-cover rounded-xl" :src="blog.image.src" :alt="blog.image.alt">
      <p class="flex items-center justify-between w-fit gap-8 text-white p-2 rounded-xl absolute bottom-0 bg-black/40">
      <span class="flex items-center gap-1.5">
        <Icon name="oui:heart" class="size-5"/>
        {{ blog.likes }}
      </span>
        <span class="flex items-center gap-1.5">
        <Icon name="oui:editor-comment" class="size-5"/>
        {{ blog.comments }}
      </span>
      </p>
    </div>
    <p class="mt-4 text-sm">
      {{ blog.title }}
    </p>
    <p class="text-sm text-neutral-500 mt-4 line-clamp-3 text-justify ">
      {{ blog.description }}
    </p>

  </NuxtLink>
</template>

<style scoped>

</style>
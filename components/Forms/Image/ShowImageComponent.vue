<script setup lang="ts">
import type {IImage} from "~/comons/types/image.type";

defineProps({
  image: {
    required: true,
    type: Object as PropType<IImage>
  }
})
</script>
<template>
  <img class="h-full w-full object-cover" :src="image.src" :alt="image.alt">
</template>

<style scoped></style>

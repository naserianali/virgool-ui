<script setup lang="ts">
const {title, amount} = defineProps({
  title: {
    required: true,
    type: String
  },
  amount: {
    required: true,
    type: Number
  }
})
</script>

<template>
  <p class="text-sm flex gap-4 mt-4 mx-4 text-neutral-500 cursor-pointer">
    <span>{{title}}</span>
    <span class="text-black">{{amount}}</span>
  </p>
</template>

<style scoped>

</style>
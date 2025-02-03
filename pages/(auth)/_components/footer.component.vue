<script setup lang="ts">
const route = useRoute()
const isVerify = computed(() => {
  return route.name === "Verify" || route.name === "complete-profile"
})
</script>

<template>
  <div class="md:flex hidden justify-between text-white/80 text-sm">
    <p>© تمام حقوق برای ویرگول محفوظ است.</p>
    <div v-if="!isVerify" class="flex gap-4 items-center">
      <NuxtLink to="/">
        صفحه اصلی
      </NuxtLink>
      <NuxtLink>
        تماس با ما
      </NuxtLink>
      <NuxtLink>
        <Icon name="mdi:instagram" class="size-5"/>
      </NuxtLink>
      <NuxtLink>
        <Icon name="si:twitter-line" class="size-5"/>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>

</style>
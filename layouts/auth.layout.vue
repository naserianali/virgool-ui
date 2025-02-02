<script setup lang="ts">
import FooterComponent from "~/pages/(auth)/_components/footer.component.vue";

const route = useRoute();
const isLogin = computed(() => {
  return route.name;
})
const isVerify = computed(() => {
  return route.name === "Verify"
})
</script>

<template>
  <div class="font-vazir flex flex-wrap w-full h-screen" dir="rtl">
    <div class="w-full md:h-full h-2/6 bg-gradient-to-r from-sky-800 via-sky-600 to-blue-400 relative"
         :class="isVerify ? 'md:w-4/12' : 'md:w-8/12'">
      <div class="flex h-full items-center justify-center flex-col">
        <NuxtLink to="/" class="md:mb-16">
          <img class="size-24" src="https://static.virgool.io/images/logo-bg.svg" alt="virgool">
        </NuxtLink>
        <h1 class="md:text-2xl font-bold text-white mt-4">
          اینجا هر کسی می‌تونه بنویسه!
        </h1>
        <h4 v-if="route.name === 'Login'" class="text-white/85 mt-2 md:block hidden">
          همین حالا حساب کاربری خودت را بساز و دوران جدید وبلاگ نویسی را شروع کن.
        </h4>
        <ul v-if="route.name === 'Login'" class="mt-8 md:block hidden">
          <li class="text-white flex items-center mb-6 font-semibold gap-2">
            <Icon name="mdi:check-all" class="size-6"/>
            اگر شما هم عاشق مطالعه هستید در ویرگول می‌توانید مطالب متنوعی را در موضوعات مختلف بخوانید.
          </li>
          <li class="text-white flex items-center mb-6 font-semibold gap-2">
            <Icon name="mdi:check-all" class="size-6"/>
            با نوشتن مطلبتان در ویرگول آن را در معرض دید قشر وسیعی از خوانندگان قرار خواهید داد.
          </li>
          <li class="text-white flex items-center mb-6 font-semibold gap-2">
            <Icon name="mdi:check-all" class="size-6"/>
            ویرگول آمار دقیقی از تعداد و میزان خوانده شدن مطلبتان به شما ارائه می‌دهد.
          </li>
        </ul>
      </div>
      <FooterComponent class="w-full absolute bottom-8 px-10"/>
    </div>
    <div class="w-full md:h-full h-4/6"
         :class="isVerify ? 'md:w-8/12' :'md:w-4/12'">
      <slot/>
    </div>
  </div>
  <Toaster rich-colors :visible-toasts="6" :duration="2500" close-button dir="auto"/>
</template>

<style scoped></style>

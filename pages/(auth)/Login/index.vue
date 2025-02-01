<script setup lang="ts">
import FormComponent from "../_components/form.component.vue"

definePageMeta({
  layout: "auth-layout",
});

</script>

<template>
  <div class="flex h-screen overflow-hidden flex-wrap">
    <div class="md:w-8/12 w-full bg-gradient-to-r from-sky-800 via-sky-600 to-blue-400 relative">
      <div class="flex h-full items-center justify-center flex-col">
        <NuxtLink to="/public" class="md:mb-16">
          <img class="size-24" src="https://static.virgool.io/images/logo-bg.svg" alt="virgool">
        </NuxtLink>
        <h1 class="md:text-2xl font-bold text-white mt-4">
          اینجا هر کسی می‌تونه بنویسه!
        </h1>
        <h4 class="text-white/85 mt-2 md:block hidden">
          همین حالا حساب کاربری خودت را بساز و دوران جدید وبلاگ نویسی را شروع کن.
        </h4>
        <ul class="mt-8 md:block hidden">
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
      <div
          class="absolute bottom-0 start-0 end-0 md:flex hidden justify-between items-end mb-5 mx-8 text-white/80 text-sm h-1/6">
        <p>© تمام حقوق برای ویرگول محفوظ است.</p>
        <div class="flex gap-4 items-center">
          <NuxtLink to="/public">
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
    </div>
    <div class="md:w-4/12 w-full">
      <FormComponent :data="{
        title: 'ورود به حساب کاربری',
        link:{
          text:'عضو نیستید؟ ثبت نام کنید',
          to:'/register'
        },
        type:'login'
      }"/>
    </div>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
import FormComponent from "../_components/form.component.vue"
import {AuthTypeEnum} from "~/comons/types/auth.type";
import FooterComponent from "../_components/footer.component.vue"

definePageMeta({
  layout: "auth-layout"
})
</script>

<template>
  <div class="w-full h-full">
    <FormComponent :data="{
        title: 'ایجاد حساب کاربری',
        link:{
          text:' قبلا عضو شده‌اید؟ رفتن به صفحه ورود',
          to:'/login'
        },
        type:AuthTypeEnum.Register
      }"/>
  </div>
</template>

<style scoped></style>

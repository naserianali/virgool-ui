<script setup lang="ts">
import FormComponent from "../_components/form.component.vue"
import {AuthTypeEnum} from "~/comons/types/auth.type";
import FooterComponent from "~/pages/(auth)/_components/footer.component.vue";

definePageMeta({
  layout: "auth-layout",
});

</script>

<template>
  <div class="w-full h-full my-auto">
    <FormComponent :data="{
        title: 'ورود به حساب کاربری',
        link:{
          text:'عضو نیستید؟ ثبت نام کنید',
          to:'/register'
        },
        type: AuthTypeEnum.Login
      }"/>
  </div>
</template>

<style scoped></style>

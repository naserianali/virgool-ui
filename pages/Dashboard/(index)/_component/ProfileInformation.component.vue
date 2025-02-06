<script setup lang="ts">
import type {IUser} from "~/pages/Dashboard/(index)/_component/Profile.component.vue";
import {PinInput, PinInputGroup, PinInputInput} from "~/components/ui/pin-input";
import {
  useChangeEmailRequest,
  useChangePhoneRequest, useUpdateBioRequest,
  useUpdateUsernameRequest, useVerifyEmailRequest,
  useVerifyPhoneRequest
} from "~/composables/UpdateProfile";


interface IForm {
  phone: string;
  email: string;
  phoneOtp: string[];
  emailOtp: string[];
  username: string;
  bio: string;
  isEmailOtp: boolean,
  isPhoneOtp: boolean,
}

const props = defineProps({
  user: {
    type: Object as PropType<IUser>,
    required: false
  }
});

const {user} = props;
const form = ref<IForm>({
  phone: "",
  email: "",
  phoneOtp: [],
  emailOtp: [],
  username: "",
  bio: "",
  isPhoneOtp: false,
  isEmailOtp: false,
});
if (user && user.profile && user.profile.bio)
  form.value.bio = user.profile.bio;
const changePhone = async () => {
  form.value.isPhoneOtp = await useChangePhoneRequest(form.value.phone);
}
const handlePhoneVerify = async () => {
  form.value.isPhoneOtp = await useVerifyPhoneRequest(form.value.phoneOtp.join(""))
}
const changeEmail = async () => {
  form.value.isEmailOtp = await useChangeEmailRequest(form.value.email);
}
const handleEmailVerify = async () => {
  form.value.isEmailOtp = await useVerifyEmailRequest(form.value.emailOtp.join(""))
}
const changeUsername = async () => {
  await useUpdateUsernameRequest(form.value.username)
}
const changeBio = async () => {
  await useUpdateBioRequest(form.value.bio)
}
</script>

<template>
  <div v-if="user" class="my-3 px-2">
    <div class="md:flex gap-8 w-full justify-between">
      <p class="flex justify-between gap-1.5 text-sm md:w-4/12 w-full">
        <label class="flex flex-col w-full">
          <span class="flex justify-between">
            <span>شماره همراه:</span>
            <input v-on:focusout="changePhone" type="text" class="focus:outline-none text-end"
                   v-model="form.phone"
                   :placeholder="user.phone ? user.phone :'هنوز شماره همراه انتخاب نشده.'"/>
          </span>
          <span v-if="form.isPhoneOtp" class="mt-4">
            کد را وارد کنید.
          </span>
          <PinInput
              v-if="form.isPhoneOtp"
              autofocus
              class="mx-auto w-full mt-4"
              id="pin-input"
              v-model="form.phoneOtp"
              placeholder=""
              @complete="handlePhoneVerify"
          >
            <PinInputGroup class="mx-auto">
              <PinInputInput
                  class="!rounded-xl mx-1 bg-black/5"
                  autofocus
                  v-for="(id, index) in 5"
                  :key="id"
                  :index="index"
              />
            </PinInputGroup>
          </PinInput>
        </label>
      </p>
      <p class="flex justify-between gap-1.5 text-sm md:w-4/12 w-full">
        <label class="flex flex-col w-full">
          <span class="flex gap-2 w-full">
            <span>ایمیل:</span>
            <input v-model="form.email" type="text" class="focus:outline-none text-end w-full"
                   v-on:focusout="changeEmail"
                   :placeholder="user.email ? user.email :'هنوز ایمیلی انتخاب نشده.'"/>
          </span>
          <span v-if="form.isEmailOtp" class="mt-4">
            کد را وارد کنید.
          </span>
          <PinInput
              v-if="form.isEmailOtp"
              autofocus
              class="mx-auto w-full mt-4"
              id="pin-input"
              v-model="form.emailOtp"
              placeholder=""
              @complete="handleEmailVerify"
          >
            <PinInputGroup class="mx-auto">
              <PinInputInput
                  class="!rounded-xl mx-1 bg-black/5"
                  autofocus
                  v-for="(id, index) in 5"
                  :key="id"
                  :index="index"
              />
            </PinInputGroup>
          </PinInput>
        </label>
      </p>
      <p class="flex justify-between gap-1.5 text-sm md:w-4/12 w-full">
        <label class="w-full flex justify-between">
          <span>نام کاربری:</span>
          <input v-on:focusout="changeUsername" v-model="form.username" type="text" class="focus:outline-none text-end"
                 :placeholder="user.username ? user.username :'هنوز نام کاربری انتخاب نشده.'"/>
        </label>
      </p>
    </div>
    <div class="flex text-sm mt-4 text-neutral-500">
      <label class="w-full">
        <textarea v-on:focusout="changeBio" v-model="form.bio" class="resize-none w-full focus:outline-none" rows="2"
                  :placeholder="user.bio ? user.bio : 'بایویی ثبت نشده!'"></textarea>
      </label>
    </div>
  </div>
</template>

<style scoped>

</style>
<script setup lang="ts">

enum AuthTypeEnum {
  Login = 'login',
  Register = 'register',
}

enum AuthMethodEnum {
  Phone = "phone",
  Email = "email",
  Username = "username"
}

interface IDate {
  title: string;
  link: {
    text: string;
    to: string;
  },
  type: AuthTypeEnum;
}

interface IProps<T> {
  data: T;
}

interface IPayload {
  username: string;
  type: AuthTypeEnum,
  method: AuthMethodEnum,
}

const {apiBase} = useRuntimeConfig().public;
const props = defineProps<IProps<IDate>>();
const data = props.data;
const username = ref<string>("");
const method = computed((): AuthMethodEnum => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^09\d{9}$/; // Ensures the number starts with '09' and is exactly 11 digits long

  if (emailRegex.test(username.value)) {
    return AuthMethodEnum.Email;
  } else if (phoneRegex.test(username.value)) {
    return AuthMethodEnum.Phone;
  } else {
    return AuthMethodEnum.Username;
  }
});
const handleSubmit = () => {
  try {
    const url = apiBase + '/user-existence';
    const payload: IPayload = {
      method : method.value,
      username : username.value,
      type: data.type,
    }
    console.log(payload)
    // const response = $fetch(`${url}/user-existence`)
  } catch (error) {
    console.error(error);
  }
}
</script>

<template>
  <div class="flex h-full items-start flex-col justify-center mx-auto w-10/12 relative">
    <span class="text-sky-600 font-extrabold text-xl">
      {{ data.title }}
    </span>
    <p class="my-4 text-neutral-600">نام کاربری، پست الکترونیک یا شماره موبایل خود را وارد کنید</p>
    <form class="w-full" v-on:submit.prevent="handleSubmit">
      <label class="rounded-2xl p-2 shadow-md w-full flex">
        <input v-model="username" class="px-1 w-full focus:outline-none" type="text"
               placeholder="نام کاربری، پست الکترونیک یا شماره موبایل">
      </label>
      <div class="w-full mt-6">
        <button
            class="md:w-fit w-full  ms-auto text-sm text-white bg-sky-700 px-4 py-2 rounded-2xl flex items-center gap-1.5">
            <span class="mx-auto flex items-center gap-1.5">
              {{ data.title }}
              <Icon name="material-symbols:arrow-back-ios-new"/>
            </span>
        </button>
      </div>
    </form>
    <NuxtLink class="mt-16 text-sm text-neutral-400 mx-auto">
      ورود با اکانت
      <span class="text-red-500">
            گوگل
          </span>
    </NuxtLink>
    <p class="text-sm mx-auto mt-6 text-neutral-500">
      ثبت نام در ویرگول به منزله موافقت با
      <NuxtLink
          class="relative before:content-[''] before:absolute before:-bottom-0.5 before:start-0 before:end-0 before:h-[.1px] before:bg-black/70">
        قوانین
      </NuxtLink>
      است
    </p>
    <NuxtLink :to="data.link.to"
              class="text-neutral-500 md:absolute mx-auto md:mt-0 mt-8 bottom-14 start-0 end-0 text-center text-sm">
      {{ data.link.text }}
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>
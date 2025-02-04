<script setup lang="ts">
import {toast} from "vue-sonner";

definePageMeta({
  layout: "auth-layout"
})
const imgPrev = ref<string>();
const nickname = ref<string>();
const profile = ref<FileList>();
const router = useRouter();
const handleFile = (e: any) => {
  const [file] = e.target.files;
  profile.value = file;
  if (file) {
    imgPrev.value = URL.createObjectURL(file);
  }
}
const {apiBase} = useRuntimeConfig().public
const updateProfile = async () => {
  try {
    const token = useCookie("accessToken").value;
    const url = `${apiBase}/user/profile`
    const formData = new FormData();
    if (nickname.value) formData.append("nickname", nickname.value)
    if (profile.value instanceof File) {
      formData.append("image", profile.value);
    } else if (profile.value instanceof FileList && profile.value.length > 0) {
      formData.append("image", profile.value[0]);
    }
    const response = await $fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
      body: formData,
    });
    if (response)
      await router.push("/")
  } catch (error: any) {
    console.log(error)
    if (Array.isArray(error.data.message)) {
      error.data.message.map((item: string) => {
        setTimeout(() => {
          toast.error(item, {
            position: "bottom-left",
          });
        }, 200)
      });
    } else {
      toast.error(error.data.message, {
        position: "bottom-left"
      });
    }
  }
}
</script>

<template>
  <div class="w-full h-full">
    <div class="flex flex-col items-center justify-center h-full">
      <form v-on:submit.prevent="updateProfile" class="flex flex-col justify-center items-center gap-4">
        <label class="flex size-28 border rounded-full items-center justify-center relative mb-3">
          <Icon v-if="!imgPrev" name="codicon:account" class="w-full h-full text-blue-800/50 cursor-pointer"/>
          <img v-else :src="imgPrev" alt="profile" class="w-full h-full rounded-full shadow-md"/>
          <Icon name="codicon:edit" class="absolute top-0 left-0 cursor-pointer"/>
          <input v-on:change="handleFile" type="file" class="hidden" accept="image/*"/>
        </label>
        <div class="flex gap-2">
          <label>
            <input v-model="nickname" type="text" placeholder="نام و نام خانوادگی"
                   class="border py-1 px-2 rounded-xl focus:outline-none">
          </label>
        </div>
        <NuxtLink class="text-sm mt-8 text-neutral-500" to="/">
          رد کردن این مرحله
        </NuxtLink>
        <button type="submit" class="mt-3 py-1 border w-4/12 rounded-xl bg-sky-700 text-white hover:bg-sky-600">
          ثبت
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped></style>

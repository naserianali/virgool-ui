<script setup lang="ts">

import type {IProfile} from "~/pages/Dashboard/(index)/_component/Profile.component.vue";

const url = ref<string>("");
const {apiBase} = useRuntimeConfig().public;

const props = defineProps({
  profile: {
    type: Object as PropType<IProfile>,
    required: false,
  }
});
const {profile} = props;
const handleBanner = async (e: any) => {
  const apiUrl = `${apiBase}/user/profile`;
  const [file] = e.target.files;
  if (file)
    url.value = URL.createObjectURL(file);
  const formData = new FormData();
  formData.append("bgImage", file);
  const response = await $fetch(apiUrl, {
    method: "PUT",
    headers: {
      "Accept": "application/json",
      "Authorization": `bearer ${useCookie('accessToken').value}`
    },
    body: formData
  });
  console.log(response);
}
</script>

<template>
  <div class="w-full h-1/2 border rounded-xl bg-black/5 relative overflow-hidden">
    <form v-on:submit.prevent class="absolute -end-2 -top-2">
      <label>
        <input id="file" v-on:change="handleBanner" type="file" class="hidden" accept="image/*">
      </label>
    </form>
    <label for="file" class="w-full h-full flex items-center justify-center">
      <img v-if="!url && profile" :src="profile.bgImage_src" alt="">
      <img v-else-if="url" class="h-full w-full object-cover z-10" v-if="url"
           :src="url" alt="banner">
      <Icon v-else name="mdi:account-box-edit-outline"
            class="size-12 text-neutral-500 cursor-pointer hover:text-sky-600 relative z-20"/>
    </label>
  </div>
</template>

<style scoped>

</style>
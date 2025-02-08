<script setup lang="ts">
interface IResponse {
  message: string
}

import type {IProfile} from "~/pages/Dashboard/(index)/_component/Profile.component.vue";
import {getApiBase, getToken} from "~/composables/Api";
import {toast} from "vue-sonner";

const url = ref<string>();
const handleImage = async (e: any) => {
  const [file] = e.target.files;
  if (file)
    url.value = URL.createObjectURL(file);
  const apiUrl = getApiBase() + "/user/profile"
  const formData = new FormData();
  formData.append("image", file);
  try {
    const response = await $fetch<IResponse>(apiUrl, {
      method: "PUT",
      headers: {
        "Accept": "application/json",
        "Authorization": `bearer ${getToken()}`
      },
      body: formData
    });
    if (response)
      toast.success(response.message);
  } catch (error: any) {
    if (Array.isArray(error.data.message)) {
      error.data.message.map((item: string) => {
        toast.error(item, {
          position: "bottom-right",
        });
      });
    } else {
      toast.error(error.data.message, {
        position: "bottom-right"
      });
    }
  }
}
const {profile} = defineProps({
  profile: {
    required: false,
    type: Object as PropType<IProfile>
  }
})
</script>

<template>
  <div class="size-44 rounded-full overflow-hidden bg-black/20 mx-auto -mt-24 relative z-40 shadow">
    <label v-if="profile" class="flex items-center justify-center h-full cursor-pointer overflow-hidden">
      <img v-if="url || profile.image" class="w-full h-full object-cover"
           :src="url ? url : 'http://localhost:5000/'+ profile.image"
           alt="Profile">
      <input type="file" accept="image/*" class="hidden" v-on:change="handleImage"/>
    </label>
    <label v-else class="flex items-center justify-center h-full cursor-pointer overflow-hidden">
      <img v-if="url" class="w-full h-full object-cover" :src="url" alt="Profile">
      <Icon v-else name="codicon:account" class=" size-8 text-white cursor-pointer"/>
      <input type="file" accept="image/*" class="hidden" v-on:change="handleImage"/>
    </label>
  </div>
</template>

<style scoped>

</style>
<script setup lang="ts">
import {refreshNuxtData} from "#app";

interface IResponse {
  message: string
}

import {toast} from "vue-sonner";
import {getApiBase, getToken} from "~/composables/Api";

const handleUploadImage = async (e: any) => {
  const formData = new FormData();
  const [file] = e.target.files;
  if (file) {
    formData.append('image', file);
    try {
      const response = await $fetch<IResponse>(`${getApiBase()}/image`, {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${getToken()}`,
          Accept: 'application/json',
        }
      });
      if (response) {
        toast.success(response.message);
        await refreshNuxtData("image-selector-component")
      }
    } catch (err: any) {
      console.error(err);
    }
  }
}
</script>
<template>
  <form class="h-full w-full flex items-center">
    <label class="w-full">
      <span class="text-xl block mx-auto w-fit bg-black/80 text-white p-2 rounded-xl">Add</span>
      <input type="file" accept="image/*" class="hidden" v-on:change="handleUploadImage">
    </label>
  </form>
</template>

<style scoped></style>

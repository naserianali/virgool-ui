<script setup lang="ts">

import ImageSelectorComponent from "~/components/Forms/ImageSelectorComponent.vue";
import MultiSelectInputComponent from "~/components/Forms/MultiSelectInput/MultiSelectInputComponent.vue";
import {getApiBase, getToken} from "~/composables/Api";
import {toast} from "vue-sonner";
import {useBlogStore} from "~/store/blog.store";
import AuthMiddleware from "~/middleware/Auth/auth.middleware";

definePageMeta({
  title: "Dashboard - Add",
  layout: "dashboard-layout",
  middleware: [AuthMiddleware]
});
useSeoMeta({
  title: "Dashboard - Add"
});

interface IResponse {
  message: string;
}

interface IForm {
  title: string;
  description: string;
  content: string;
  studyTime: string;
  imageId: string;
  categories: string[]
}

const router = useRouter();
const {blog, clearData} = useBlogStore()
const form = ref<IForm>({
  title: blog.title,
  description: blog.description,
  content: blog.content,
  studyTime: blog.studyTime ?? "",
  imageId: blog.image ? blog.image.id : '',
  categories: blog.categories ? blog.categories.map(category => category.category.title) : [],
});
const formattedInput = computed(() => {
  let val = form.value.studyTime.replace(/\D/g, ""); // Remove non-numeric characters
  if (val.length > 2) val = val.slice(0, 2) + ":" + val.slice(2, 4);
  return val;
});
const formatInput = (event: any) => {
  form.value.studyTime = event.target.value.replace(/\D/g, "").slice(0, 4);
  form.value.studyTime = formattedInput.value;
};
const setTinyMceData = (data: string) => {
  form.value.content = data;
}
const setSelectedImage = (id: string) => {
  form.value.imageId = id;
}
const setSelectedCategories = (categories: string[]) => {
  form.value.categories = categories;
}
const handleSubmit = async () => {
  try {
    let url = `${getApiBase()}/blog`
    if (blog.id)
      url += `/${blog.id}`
    const response = await $fetch<IResponse>(url, {
      method: blog.id ? 'PUT' : 'POST',
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${getToken()}`
      },
      body: form.value
    });
    if (response) {
      toast.success(response.message)
      if (blog)
        clearData();
      await router.push('/dashboard/post');
    }
  } catch (error: any) {
    if (Array.isArray(error.data.message)) {
      error.data.message.map((item: string) => {
        setTimeout(() => {
          toast.error(item, {
            position: "bottom-right",
          });
        }, 200)
      });

    } else {
      toast.error(error.data.message, {
        position: "bottom-right"
      });
    }
  }
}
</script>

<template>
  <div class="w-full h-full">
    <form v-on:submit.prevent="handleSubmit">
      <button class="border rounded-xl p-2 block mb-4 ms-auto bg-sky-800 text-white shadow sticky top-0">
        انتشار
      </button>
      <div class="flex gap-2">
        <div class="w-8/12">
          <label>
            <input v-model="form.title" class=" border rounded-xl w-full p-2 mb-3 focus:outline-none" type="text"
                   placeholder="H1">
          </label>
          <div class="flex gap-2">
            <label class="relative z-10 w-10/12">
              <MultiSelectInputComponent :existed-categories="form.categories"
                                         @select-category="setSelectedCategories"/>
            </label>
            <label class="w-2/12">
              <input v-model="formattedInput"
                     maxlength="5"
                     v-on:input="formatInput"
                     oninput="this.value = this.value.replace(/[^0-9]/g, '')"
                     class=" border rounded-xl w-full p-1.5 mb-3 focus:outline-none text-end"
                     type="text"
                     inputmode="numeric"
                     placeholder="03:27">
            </label>
          </div>
          <label class="relative ">
            <FormsTinyMceComponent @tinymce="setTinyMceData" :existedTinyMce="form.content"/>
          </label>
          <label>
            <textarea v-model="form.description"
                      class="border w-full my-3 resize-none rounded-xl focus:outline-none p-2" rows="6"></textarea>
          </label>
        </div>
        <div class="w-4/12 rounded-xl overflow-hidden shadow-xl">
          <ImageSelectorComponent :existedImageId="form.imageId" @selected-image="setSelectedImage"/>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped></style>

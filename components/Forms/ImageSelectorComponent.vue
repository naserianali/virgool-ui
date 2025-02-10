<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import ImageUploaderComponent from "~/components/Forms/Image/ImageUploaderComponent.vue";
import ShowImageComponent from "~/components/Forms/Image/ShowImageComponent.vue";
import {getApiBase, getToken} from "~/composables/Api";
import type {IImage} from "~/comons/types/image.type";
import {DialogClose} from "~/components/ui/dialog";

const {data} = await useFetch<IImage[]>(`${getApiBase()}/image`, {
  key: "image-selector-component",
  headers: {
    Authorization: `Bearer ${getToken()}`,
    Accept: "application/json",
  },
});
const selectedImage = ref<string>();
const emit = defineEmits(['selectedImage'])
const props = defineProps({
  existedImageId: {
    required: false,
    type: String,
  }
});
const image = ref<IImage | undefined>(undefined)
watch(() => selectedImage.value, (newValue) => {
  emit('selectedImage', selectedImage.value)
  if (data.value) {
    image.value = data.value.find((item) => item.id === selectedImage.value) ;
  }
});
watchEffect(() => {
  if (data.value && props.existedImageId) {
    image.value = data.value.find((item) => item.id === props.existedImageId) || undefined
  }
});

</script>

<template>
  <div class="w-full h-full flex justify-center items-center bg-black/5">
    <Dialog>
      <DialogTrigger class="flex items-center gap-1.5">
        <img v-if="image" :src="image.src" :alt="image.alt">
        <span v-else>
        <Icon name="mdi:file-image-plus-outline" class="size-7"/>
        انتخاب یا آپلود تصویر
        </span>
      </DialogTrigger>
      <DialogContent class="max-w-4xl overflow-y-scroll h-3/4 mx-auto">
        <DialogHeader>
          <DialogTitle class="">انتخاب یا آپلود تصویر</DialogTitle>
          <DialogDescription class="my-4">
            <div class="flex flex-row-reverse gap-4 flex-wrap justify-center">
              <div class="size-44 bg-black/5 rounded-xl overflow-hidden flex items-center justify-center">
                <ImageUploaderComponent/>
              </div>
              <div v-if="data" v-for="image in data"
                   class="size-44 bg-black/5 transition duration-300 rounded-xl overflow-hidden"
                   :class="selectedImage === image.id && 'border-4 border-sky-500'"
              >
                <label>
                  <ShowImageComponent class="" :image="image"/>
                  <input v-model="selectedImage" type="radio" class="hidden" name="image" :value="image.id">
                </label>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose>
            <button class="border p-2 shadow rounded-xl bg-sky-800 text-white">
              ذخیره
            </button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </div>
</template>

<style scoped></style>

<script setup lang="ts">
const props = defineProps({
  existedCategories: {
    required: false,
    type: Array as () => string[],
  }
})
const categories = ref<string[]>(props.existedCategories || []);
const emit = defineEmits(['select-category']);
watch(() => categories.value, (newValue) => {
  emit('select-category', newValue);
});
</script>

<template>
  <ClientOnly>
    <TagsInput dir="rtl" v-model="categories" class="rounded-xl mb-3 p-2">
      <TagsInputItem v-for="item in categories" :key="item" :value="item">
        <TagsInputItemText/>
        <TagsInputItemDelete/>
      </TagsInputItem>

      <TagsInputInput placeholder="دسته بندی..."/>
    </TagsInput>
  </ClientOnly>
</template>

<style scoped></style>

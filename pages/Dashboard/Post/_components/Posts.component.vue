<script setup lang="ts">
import {getApiBase, getToken} from "~/composables/Api";
import type {IPagination} from "~/comons/types/pagination.type";
import type {IImage} from "~/comons/types/image.type";
import PostComponent from "./Post.component.vue";

export interface IBlogs {
  id: string;
  title: string;
  slug: string;
  studyTime: string;
  description: string;
  content: string;
  status: string;
  image: IImage;
  likes: number;
  comments: number;
}

interface IResponse {
  pagination: IPagination
  blogs: IBlogs[]
}

const {data} = useFetch<IResponse>(`${getApiBase()}/blog/my`, {
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${getToken()}`,
  }
});

</script>

<template>
  <div class="grid md:grid-cols-3 gap-8">
    <NuxtLink to="/dashboard/Post/Form"
              class="flex items-center justify-center rounded-xl overflow-hidden w-full p-2 shadow mb-6 mx-auto">
      افزودن پست جدید
    </NuxtLink>
    <PostComponent v-if="data" v-for="item in data.blogs" :key="item.id" :blog="item"/>
    <PostComponent v-if="data" v-for="item in data.blogs" :key="item.id" :blog="item"/>
    <PostComponent v-if="data" v-for="item in data.blogs" :key="item.id" :blog="item"/>
    <PostComponent v-if="data" v-for="item in data.blogs" :key="item.id" :blog="item"/>
    <PostComponent v-if="data" v-for="item in data.blogs" :key="item.id" :blog="item"/>
    <PostComponent v-if="data" v-for="item in data.blogs" :key="item.id" :blog="item"/>
    <PostComponent v-if="data" v-for="item in data.blogs" :key="item.id" :blog="item"/>
    <PostComponent v-if="data" v-for="item in data.blogs" :key="item.id" :blog="item"/>
    <PostComponent v-if="data" v-for="item in data.blogs" :key="item.id" :blog="item"/>
  </div>
</template>

<style scoped>

</style>
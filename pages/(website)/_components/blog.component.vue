<script setup lang="ts">
interface IAuthor {
  id: string;
  profile: {
    nickname: string;
  }
}

interface ICategory {
  id: string;
  category: {
    title: string;
  }
}

interface IBlog {
  id: string;
  createdAt: string;
  title: string;
  slug: string;
  studyTime: string;
  description: string;
  likes: number;
  comments: number;
  author: IAuthor;
  categories: ICategory[];
  image: {
    name: string;
    alt: string;
    src: string;
  }
}

interface IPagination {
  totalCount: number;
  page: number;
  perPage: number;
  pageCount: number;
}

interface IBlogResponse {
  blogs: IBlog[];
  pagination: IPagination;
}

const {apiBase} = useRuntimeConfig().public;
const data = await useFetch<IBlogResponse>(`${apiBase}/blog`);
</script>

<template>
  <div class="flex max-w-7xl mx-auto gap-8 mt-10">
    <div class="container w-8/12">
      <div v-if="data.data.value" class="flex flex-col mb-16" v-for="item in data.data.value.blogs">
        <div class="flex gap-2 text-xs mb-3">
          <p>{{ item.author.profile.nickname }}</p>
          <p>13 دقیقه پیش</p>
        </div>
        <div class="flex justify-between gap-2">
          <div class="flex flex-col">
            <h3 class="font-bold my-1">{{ item.title }}</h3>
            <p class="text-sm mb-3">{{ item.description }}</p>
          </div>
          <div class="w-6/12">
            <img  class="size-32 mx-auto object-cover bg-black/5" v-if="item.image" :src="item.image.src" :alt="item.image.alt">
          </div>
        </div>
        <div class="flex justify-between mt-8">
          <div class="w-fit">
            <span class="bg-black/5 text-sm rounded-md mx-2 cursor-pointer px-3">{{
                item.categories && item.categories[0].category.title
              }}</span>
            <span class="text-xs mx-2 cursor-pointer">خواندن : {{ item.studyTime }} دقیقه</span>
          </div>
          <div class="flex justify-between w-3/12">
            <span class="flex items-center text-xs gap-2">
              <Icon class="size-6 text-black/70 cursor-pointer hover:text-red-400" name="ic:baseline-favorite-border"/>
              {{ item.likes }}
            </span>
            <span class="flex items-center text-xs gap-2">
              <Icon class="size-6 scale-x-[-1] text-black/70 cursor-pointer hover:text-red-400"
                    name="ic:outline-mode-comment"/>
              {{ item.comments }}
            </span>
            <span class="flex items-center text-xs gap-2">
              <Icon class="size-6 scale-x-[-1] text-black/70 cursor-pointer hover:text-red-400"
                    name="ic:baseline-bookmark-border"/>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="w-4/12 bg-sky-700 h-full">
      sadasda
    </div>
  </div>
</template>

<style scoped>

</style>